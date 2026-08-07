import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, ArrowRight, Star } from 'lucide-react';
import { AppButton } from '../components/common/AppButton';

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col items-center justify-between p-6 sm:p-12 relative overflow-hidden">
      {/* Decorative floating background elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-10 text-amber-300 opacity-60 hidden sm:block"
      >
        <Star className="w-16 h-16 fill-amber-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-12 text-pink-300 opacity-60 hidden sm:block"
      >
        <Sparkles className="w-20 h-20" />
      </motion.div>

      {/* Main Content Card */}
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-xl mx-auto space-y-8 my-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-white text-indigo-600 flex items-center justify-center shadow-2xl p-6"
        >
          <BookOpen className="w-full h-full stroke-[2.5]" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-3"
        >
          <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            Oxford University Press
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight leading-none drop-shadow-md">
            Everybody Up 3
          </h1>
          <p className="text-lg sm:text-xl font-bold text-indigo-100 max-w-md mx-auto">
            Ứng dụng học Tiếng Anh thông minh dành cho học sinh tiểu học Việt Nam 🇻🇳
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full max-w-sm pt-4"
        >
          <AppButton
            onClick={() => navigate('/login')}
            variant="secondary"
            size="xl"
            fullWidth
            icon={<ArrowRight className="w-7 h-7" />}
          >
            Bắt đầu học ngay
          </AppButton>
        </motion.div>
      </div>

      {/* Footer copyright */}
      <p className="text-xs font-semibold text-white/70 text-center">
        Oxford 2nd Edition Curriculum Architecture • Phase 1
      </p>
    </div>
  );
};
