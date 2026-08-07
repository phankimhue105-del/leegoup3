import React from 'react';
import { ModelPattern } from '../../types/course';
import { AppImage } from '../common/AppImage';
import { AudioButton } from '../common/AudioButton';
import { AppButton } from '../common/AppButton';
import { CheckCircle, MessageSquareQuote } from 'lucide-react';

interface ModelPatternCardProps {
  modelPattern: ModelPattern;
  onComplete: () => void;
}

export const ModelPatternCard: React.FC<ModelPatternCardProps> = ({
  modelPattern,
  onComplete,
}) => {
  const fullDialogueText = modelPattern.dialogue.map((d) => `${d.speaker}: ${d.text}`).join('. ');

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_15px_30px_rgba(0,0,0,0.06)] space-y-6">
        {/* Title Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold font-heading text-indigo-900">
              {modelPattern.title}
            </h2>
            <p className="text-sm font-semibold text-slate-500">Mẫu câu giao tiếp</p>
          </div>
          <AudioButton
            textToSpeak={fullDialogueText}
            audioUrl={modelPattern.audioUrl}
            size="md"
            label="Nghe hội thoại"
          />
        </div>

        {/* Picture */}
        <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-xs">
          <AppImage
            src={modelPattern.image}
            alt={modelPattern.title}
            className="w-full h-full object-cover"
            fallbackText={modelPattern.title}
          />
        </div>

        {/* Pattern Highlight Box */}
        <div className="bg-indigo-50 border-2 border-indigo-200/80 p-5 rounded-2xl text-center space-y-1">
          <span className="text-xs font-black text-indigo-500 uppercase tracking-widest">
            Key Pattern / Cấu trúc câu
          </span>
          <p className="text-xl font-extrabold text-indigo-900 font-heading">
            {modelPattern.pattern}
          </p>
        </div>

        {/* Dialogue Bubble List */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <MessageSquareQuote className="w-4 h-4 text-indigo-500" />
            Hội thoại mẫu (Dialogue)
          </h3>

          <div className="space-y-3">
            {modelPattern.dialogue.map((line, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/70 p-4 rounded-2xl space-y-1 hover:border-indigo-200 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-indigo-600 bg-indigo-100 px-2.5 py-0.5 rounded-lg">
                    {line.speaker}
                  </span>
                  <AudioButton
                    textToSpeak={line.text}
                    audioUrl={line.audioUrl}
                    size="sm"
                  />
                </div>
                <p className="text-base font-extrabold text-slate-800">{line.text}</p>
                <p className="text-xs font-semibold text-slate-500 italic">
                  🇻🇳 {line.vietnameseMeaning}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vietnamese Explanation Area */}
        <div className="bg-amber-50/80 border border-amber-200 p-5 rounded-2xl space-y-1 text-slate-800">
          <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">
            💡 Ghi nhớ ngữ pháp (Vietnamese Explanation)
          </p>
          <p className="text-sm font-semibold text-amber-900 leading-relaxed">
            {modelPattern.vietnameseExplanation}
          </p>
        </div>
      </div>

      {/* Continue Button */}
      <div className="pt-2">
        <AppButton
          onClick={onComplete}
          variant="success"
          size="lg"
          fullWidth
          icon={<CheckCircle className="w-6 h-6" />}
        >
          Hoàn thành mẫu câu & Tiếp tục
        </AppButton>
      </div>
    </div>
  );
};
