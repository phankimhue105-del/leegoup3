import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  stars: number; // 0 to 3 or up to 5
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  id?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  stars,
  maxStars = 3,
  size = 'md',
  animated = false,
  id,
}) => {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-9 h-9',
    xl: 'w-14 h-14',
  };

  return (
    <div id={id} className="flex items-center gap-1.5">
      {Array.from({ length: maxStars }).map((_, index) => {
        const isFilled = index < stars;
        return (
          <motion.div
            key={index}
            initial={animated ? { scale: 0, rotate: -180 } : undefined}
            animate={animated ? { scale: 1, rotate: 0 } : undefined}
            transition={{ delay: index * 0.15, type: 'spring', stiffness: 200 }}
          >
            <Star
              className={`${sizeMap[size]} ${
                isFilled
                  ? 'text-amber-400 fill-amber-400 drop-shadow-[0_2px_8px_rgba(251,191,36,0.6)]'
                  : 'text-slate-200 fill-slate-100'
              }`}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
