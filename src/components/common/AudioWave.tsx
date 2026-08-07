import React from 'react';
import { motion } from 'motion/react';

interface AudioWaveProps {
  isRecording: boolean;
}

export const AudioWave: React.FC<AudioWaveProps> = ({ isRecording }) => {
  const barHeights = [20, 35, 55, 75, 90, 60, 40, 70, 85, 50, 30];

  return (
    <div className="flex items-center justify-center gap-1.5 h-16 px-4 py-2 my-2 bg-slate-900/90 backdrop-blur-md rounded-2xl">
      {barHeights.map((height, i) => (
        <motion.div
          key={i}
          animate={
            isRecording
              ? {
                  height: [`${height * 0.3}%`, `${height}%`, `${height * 0.4}%`],
                }
              : { height: '15%' }
          }
          transition={
            isRecording
              ? {
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: i * 0.05,
                }
              : { duration: 0.3 }
          }
          className={`w-2 rounded-full ${
            isRecording ? 'bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.8)]' : 'bg-slate-600'
          }`}
        />
      ))}
    </div>
  );
};
