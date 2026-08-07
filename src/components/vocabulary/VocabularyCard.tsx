import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VocabularyItem } from '../../types/course';
import { AppImage } from '../common/AppImage';
import { AudioButton } from '../common/AudioButton';
import { AppButton } from '../common/AppButton';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

interface VocabularyCardProps {
  vocabularyList: VocabularyItem[];
  onComplete: () => void;
}

export const VocabularyCard: React.FC<VocabularyCardProps> = ({
  vocabularyList,
  onComplete,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentItem = vocabularyList[currentIndex] || vocabularyList[0];

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === vocabularyList.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Progress Indicator */}
      <div className="flex items-center justify-between text-sm font-bold text-slate-500 bg-slate-100 px-5 py-2.5 rounded-2xl">
        <span>Thẻ từ vựng</span>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            {vocabularyList.map((_, idx) => (
              <span
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-indigo-600 w-6'
                    : idx < currentIndex
                    ? 'bg-emerald-500'
                    : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 font-heading text-slate-700">
            {currentIndex + 1} / {vocabularyList.length}
          </span>
        </div>
      </div>

      {/* Animated Flashcard */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.id || currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_15px_30px_rgba(0,0,0,0.06)] space-y-6"
        >
          {/* Image Area */}
          <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-slate-100 shadow-xs bg-slate-50">
            <AppImage
              src={currentItem.image}
              alt={currentItem.word}
              className="w-full h-full object-cover"
              fallbackText={currentItem.word}
            />
            {/* Pronunciation Audio Button Overlay */}
            <div className="absolute bottom-4 right-4 shadow-lg rounded-2xl">
              <AudioButton
                textToSpeak={currentItem.word}
                audioUrl={currentItem.audioUrl}
                size="lg"
                label="Nghe đọc"
              />
            </div>
          </div>

          {/* Word Details */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-indigo-900 tracking-wide">
              {currentItem.word}
            </h2>

            {currentItem.phonetic && (
              <p className="text-sm font-semibold text-indigo-500 tracking-wider">
                {currentItem.phonetic}
              </p>
            )}

            {/* Vietnamese Meaning Banner */}
            <div className="inline-block bg-amber-50 border border-amber-200/80 px-6 py-2 rounded-2xl text-amber-800 text-lg font-bold font-heading shadow-xs mt-2">
              🇻🇳 {currentItem.vietnameseMeaning}
            </div>
          </div>

          {/* Example Sentence Box */}
          <div className="bg-slate-50 border border-slate-200/70 p-4 rounded-2xl text-center space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mẫu câu ví dụ</p>
            <p className="text-base font-bold text-slate-700 italic">
              "{currentItem.exampleSentence}"
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <AppButton
          onClick={handlePrev}
          disabled={isFirst}
          variant="outline"
          size="lg"
          icon={<ChevronLeft className="w-6 h-6" />}
        >
          Từ trước
        </AppButton>

        <AppButton
          onClick={handleNext}
          variant={isLast ? 'success' : 'primary'}
          size="lg"
          icon={isLast ? <CheckCircle className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
        >
          {isLast ? 'Hoàn thành từ vựng' : 'Từ tiếp theo'}
        </AppButton>
      </div>
    </div>
  );
};
