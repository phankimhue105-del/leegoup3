import React from 'react';
import { motion } from 'motion/react';

interface ProgressBarProps {
  progress: number; // 0 to 100
  colorClass?: string;
  heightClass?: string;
  showText?: boolean;
  id?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  colorClass = 'bg-gradient-to-r from-indigo-500 to-purple-500',
  heightClass = 'h-4',
  showText = false,
  id,
}) => {
  const clamped = Math.max(0, Math.min(100, progress));

  return (
    <div id={id} className="w-full">
      {showText && (
        <div className="flex justify-between items-center mb-1 text-sm font-bold text-slate-600">
          <span>Tiến độ</span>
          <span>{clamped}%</span>
        </div>
      )}
      <div className={`w-full bg-slate-100 rounded-full overflow-hidden ${heightClass} p-0.5 border border-slate-200/50`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`h-full rounded-full ${colorClass}`}
        />
      </div>
    </div>
  );
};
