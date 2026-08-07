import React, { createContext, useContext, useState, useEffect } from 'react';
import { audioService } from '../services/audioService';
import { SoundEffectType } from '../types/audio';
import { useSettings } from './SettingsContext';

interface AudioContextType {
  isPlaying: boolean;
  playSpeech: (text: string) => Promise<void>;
  playUrl: (url: string) => Promise<void>;
  playEffect: (effect: SoundEffectType) => void;
  stopAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { settings } = useSettings();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    audioService.setVolume(settings.soundVolume);
    audioService.setPlaybackSpeed(settings.voicePlaybackSpeed);
  }, [settings.soundVolume, settings.voicePlaybackSpeed]);

  const playSpeech = async (text: string) => {
    setIsPlaying(true);
    try {
      await audioService.playTextToSpeech(text);
    } finally {
      setIsPlaying(false);
    }
  };

  const playUrl = async (url: string) => {
    setIsPlaying(true);
    try {
      if (url) {
        await audioService.playUrl(url);
      } else {
        // Fallback to text to speech if url is empty
        await audioService.playTextToSpeech(url || 'Audio placeholder');
      }
    } catch {
      setIsPlaying(false);
    } finally {
      setIsPlaying(false);
    }
  };

  const playEffect = (effect: SoundEffectType) => {
    audioService.playEffect(effect);
  };

  const stopAudio = () => {
    audioService.stop();
    setIsPlaying(false);
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        playSpeech,
        playUrl,
        playEffect,
        stopAudio,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAudio must be used within AudioProvider');
  return ctx;
};
