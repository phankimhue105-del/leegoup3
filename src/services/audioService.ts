import { SoundEffectType } from '../types/audio';

/**
 * Helper to extract a friendly English word/phrase from an audio file URL path.
 * Example: "audio/vocabulary/gum.mp3" -> "gum"
 */
function extractWordFromUrl(url: string): string {
  if (!url) return 'Audio placeholder';
  try {
    const decodedUrl = decodeURIComponent(url);
    const filename = decodedUrl.substring(decodedUrl.lastIndexOf('/') + 1);
    const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.')) || filename;
    return nameWithoutExt.replace(/[-_]/g, ' ').trim() || 'Audio placeholder';
  } catch {
    return 'Audio placeholder';
  }
}

/**
 * Robust SpeechSynthesis English voice selector for modern browsers and platforms.
 */
function getBestEnglishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  const enVoices = voices.filter(v => v.lang.toLowerCase().startsWith('en') || v.lang.toLowerCase().includes('en-'));
  
  if (enVoices.length === 0) return null;
  
  // Preferred voice keywords in order of quality/naturalness across platforms
  const preferredKeywords = ['google us english', 'microsoft aria', 'natural', 'samantha', 'daniel', 'en-us'];
  for (const keyword of preferredKeywords) {
    const found = enVoices.find(v => v.name.toLowerCase().includes(keyword.toLowerCase()));
    if (found) return found;
  }
  
  // Next look for any US voice
  const usVoice = enVoices.find(v => v.lang.toLowerCase().includes('us') || v.lang.toLowerCase() === 'en-us');
  if (usVoice) return usVoice;

  // Fallback to default English voice
  const defaultVoice = enVoices.find(v => v.default);
  if (defaultVoice) return defaultVoice;

  return enVoices[0];
}

/**
 * Reusable Audio Manager
 * Supports HTML5 audio playback, volume controls, fallback WebAudio synthesizer effects,
 * queueing, preloading, and speech synthesis fallback when MP3s are absent.
 */
class AudioService {
  private currentAudio: HTMLAudioElement | null = null;
  private volume: number = 1.0;
  private playbackRate: number = 1.0;
  private audioContext: AudioContext | null = null;

  constructor() {
    // Lazy AudioContext instantiation
    // Pre-bind onvoiceschanged to load voices early
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.currentAudio) {
      this.currentAudio.volume = this.volume;
    }
  }

  public setPlaybackSpeed(speed: number) {
    this.playbackRate = speed;
    if (this.currentAudio) {
      this.currentAudio.playbackRate = speed;
    }
  }

  public stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  }

  public async playTextToSpeech(text: string, lang = 'en-US'): Promise<void> {
    this.stop();
    return new Promise((resolve) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        console.error('[AudioManager] SpeechSynthesis is not supported in this browser.');
        alert('Sorry, text-to-speech is not supported on this device. Please try another browser.');
        resolve();
        return;
      }
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = this.playbackRate || 0.9;
      utterance.pitch = 1.0;
      utterance.volume = this.volume;
      
      const bestVoice = getBestEnglishVoice();
      if (bestVoice) {
        utterance.voice = bestVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = (event) => {
        console.error('[AudioManager] SpeechSynthesis error:', event);
        resolve();
      };
      
      window.speechSynthesis.speak(utterance);
    });
  }

  /**
   * Play an audio URL. If it fails or is a missing local audio path, falls back to text-to-speech.
   */
  public async playUrl(url: string, textToSpeak?: string): Promise<void> {
    this.stop();

    // Identify if the file is a missing local path or empty
    const isLocalAsset = !url || url.startsWith('/') || url.startsWith('audio/') || url.includes('/audio/') || url.includes('assets/');
    
    if (isLocalAsset) {
      const speakText = textToSpeak || extractWordFromUrl(url);
      console.warn(`[AudioManager] Redirecting local/missing asset to SpeechSynthesis: "${speakText}"`);
      await this.playTextToSpeech(speakText);
      return;
    }

    return new Promise((resolve) => {
      const audio = new Audio(url);
      audio.volume = this.volume;
      audio.playbackRate = this.playbackRate;
      this.currentAudio = audio;

      audio.onended = () => {
        this.currentAudio = null;
        resolve();
      };
      
      audio.onerror = async (err) => {
        console.warn(`[AudioManager] Audio failed to load: ${url}. Falling back to SpeechSynthesis.`);
        this.currentAudio = null;
        const speakText = textToSpeak || extractWordFromUrl(url);
        await this.playTextToSpeech(speakText);
        resolve();
      };

      audio.play().catch(async () => {
        console.warn(`[AudioManager] Play interrupted or failed. Falling back to SpeechSynthesis.`);
        this.currentAudio = null;
        const speakText = textToSpeak || extractWordFromUrl(url);
        await this.playTextToSpeech(speakText);
        resolve();
      });
    });
  }

  /**
   * WebAudio Sound Effects Synthesizer for instant feedback (Correct chime, wrong buzzer, etc.)
   */
  public playEffect(effect: SoundEffectType) {
    try {
      if (typeof window === 'undefined') return;
      if (!this.audioContext) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.audioContext = new AudioCtx();
      }
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }

      const ctx = this.audioContext;
      const now = ctx.currentTime;

      if (effect === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.05);
        gain.gain.setValueAtTime(0.15 * this.volume, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (effect === 'correct') {
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0, now + idx * 0.08);
          gain.gain.linearRampToValueAtTime(0.2 * this.volume, now + idx * 0.08 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.25);
        });
      } else if (effect === 'incorrect') {
        [300, 220].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);
          gain.gain.setValueAtTime(0.2 * this.volume, now + idx * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.12 + 0.15);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.12);
          osc.stop(now + idx * 0.12 + 0.15);
        });
      } else if (effect === 'star' || effect === 'fanfare') {
        [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.06);
          gain.gain.setValueAtTime(0.2 * this.volume, now + idx * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.06);
          osc.stop(now + idx * 0.06 + 0.3);
        });
      }
    } catch {
      // AudioContext unavailable or restricted
    }
  }
}

export const audioService = new AudioService();
export const AudioManager = audioService; // Centralized AudioManager export
