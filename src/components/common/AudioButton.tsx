import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

interface AudioButtonProps {
  textToSpeak?: string;
  audioUrl?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
  id?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  textToSpeak,
  audioUrl,
  size = 'md',
  className = '',
  label,
  id,
}) => {
  const { playSpeech, playUrl, playEffect } = useAudio();
  const [playing, setPlaying] = useState<boolean>(false);

  const sizeMap = {
    sm: 'p-2 rounded-xl text-sm gap-1.5',
    md: 'p-3.5 rounded-2xl text-base gap-2',
    lg: 'p-5 rounded-3xl text-lg font-bold gap-3',
  };

  const iconSizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const handlePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (playing) return;

    playEffect('click');
    setPlaying(true);
    try {
      if (audioUrl) {
        await playUrl(audioUrl);
      } else if (textToSpeak) {
        await playSpeech(textToSpeak);
      }
    } finally {
      setPlaying(false);
    }
  };

  return (
    <motion.button
      id={id}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handlePlay}
      disabled={playing}
      title={label || 'Nghe âm thanh'}
      className={`inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white shadow-[0_6px_20px_rgba(79,70,229,0.3)] transition-colors cursor-pointer select-none font-bold ${
        sizeMap[size]
      } ${playing ? 'animate-pulse bg-indigo-600' : ''} ${className}`}
    >
      <Volume2 className={`${iconSizeMap[size]} ${playing ? 'animate-bounce' : ''}`} />
      {label && <span>{label}</span>}
    </motion.button>
  );
};
