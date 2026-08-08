import React from 'react';
import { useAudio } from '../../context/AudioContext';
import { Volume2 } from 'lucide-react';

interface TeacherIntroCardProps {
  englishText: string;
  vietnameseText: string;
}

export const TeacherIntroCard: React.FC<TeacherIntroCardProps> = ({
  englishText,
  vietnameseText,
}) => {
  const { playSpeech, isPlaying } = useAudio();

  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
      {/* Teacher Avatar */}
      <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center text-3xl shrink-0 select-none shadow-xs border border-rose-200/50">
        👩‍🏫
      </div>

      {/* Message and Translation */}
      <div className="flex-1 text-center sm:text-left space-y-1">
        <p className="text-sm font-extrabold text-slate-800 leading-snug">
          {englishText}
        </p>
        <p className="text-xs font-semibold text-slate-500 italic leading-snug">
          🇻🇳 {vietnameseText}
        </p>
      </div>

      {/* Audio Button */}
      <button
        onClick={() => playSpeech(englishText)}
        disabled={isPlaying}
        className={`p-3 rounded-2xl border border-rose-200 text-rose-600 hover:bg-rose-50 transition-colors flex items-center gap-1.5 text-xs font-bold shrink-0 cursor-pointer ${
          isPlaying ? 'opacity-60 cursor-not-allowed bg-rose-50' : 'bg-rose-50/20'
        }`}
        title="Nghe giáo viên đọc"
      >
        <Volume2 className="w-4 h-4" />
        <span>Listen</span>
      </button>
    </div>
  );
};
