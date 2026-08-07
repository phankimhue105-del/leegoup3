import React from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  borderColor?: string;
  id?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = false,
  borderColor,
  id,
}) => {
  return (
    <motion.div
      id={id}
      whileHover={
        hoverable
          ? { y: -4, boxShadow: '0 20px 30px -10px rgba(79, 70, 229, 0.12)' }
          : undefined
      }
      onClick={onClick}
      style={borderColor ? { borderColor } : undefined}
      className={`bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] transition-all ${
        hoverable ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};
