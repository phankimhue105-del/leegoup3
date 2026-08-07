import React, { createContext, useContext, useState, useEffect } from 'react';
import { AudioManager } from '../services/audioService';
import { SoundEffectType } from '../types/audio';
import { useSettings } from './SettingsContext';

interface AudioContextType {
  isPlaying: boolean;
  playSpeech: (text: string) => Promise<void>;
  playUrl: (url: string, textToSpeak?: string) => Promise<void>;
  playEffect: (effect: SoundEffectType) => void;
  stopAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { settings } = useSettings();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    AudioManager.setVolume(settings.soundVolume);
    AudioManager.setPlaybackSpeed(settings.voicePlaybackSpeed);
  }, [settings.soundVolume, settings.voicePlaybackSpeed]);

  const playSpeech = async (text: string) => {
    setIsPlaying(true);
    try {
      await AudioManager.playTextToSpeech(text);
    } finally {
      setIsPlaying(false);
    }
  };

  const playUrl = async (url: string, textToSpeak?: string) => {
    setIsPlaying(true);
    try {
      await AudioManager.playUrl(url, textToSpeak);
    } catch {
      setIsPlaying(false);
    } finally {
      setIsPlaying(false);
    }
  };

  const playEffect = (effect: SoundEffectType) => {
    AudioManager.playEffect(effect);
  };

  const stopAudio = () => {
    AudioManager.stop();
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
