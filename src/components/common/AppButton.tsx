import React from 'react';
import { motion } from 'motion/react';
import { useAudio } from '../../context/AudioContext';

interface AppButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  icon?: React.ReactNode;
  id?: string;
}

export const AppButton: React.FC<AppButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className = '',
  icon,
  id,
}) => {
  const { playEffect } = useAudio();

  const variantStyles = {
    primary:
      'bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_6px_20px_rgba(79,70,229,0.3)] border-b-4 border-indigo-800',
    secondary:
      'bg-amber-500 hover:bg-amber-600 text-white shadow-[0_6px_20px_rgba(245,158,11,0.3)] border-b-4 border-amber-700',
    success:
      'bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_6px_20px_rgba(16,185,129,0.3)] border-b-4 border-emerald-700',
    danger:
      'bg-rose-500 hover:bg-rose-600 text-white shadow-[0_6px_20px_rgba(244,63,94,0.3)] border-b-4 border-rose-700',
    outline:
      'bg-white hover:bg-slate-50 text-indigo-600 border-2 border-indigo-200 shadow-sm',
    ghost:
      'bg-transparent hover:bg-indigo-50 text-indigo-600',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-xl gap-1.5',
    md: 'px-6 py-3 text-base font-bold rounded-2xl gap-2',
    lg: 'px-8 py-4 text-lg font-extrabold rounded-2xl gap-2.5 min-h-[52px]',
    xl: 'px-10 py-5 text-xl font-black rounded-3xl gap-3 min-h-[64px]',
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      playEffect('click');
      onClick();
    }
  };

  return (
    <motion.button
      id={id}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.96 }}
      onClick={handleClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center transition-colors cursor-pointer select-none font-heading tracking-wide ${
        sizeStyles[size]
      } ${variantStyles[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed shadow-none border-b-0' : ''
      } ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};
