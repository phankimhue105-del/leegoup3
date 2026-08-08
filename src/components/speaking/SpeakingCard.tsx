import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lesson, Unit } from '../../types/course';
import { useCourse } from '../../context/CourseContext';
import { speakingQuestionService, SpeakingQuestion } from '../../services/speakingQuestionService';
import { speakingService, SpeakingEvaluationResult } from '../../services/speakingService';
import { AppImage } from '../common/AppImage';
import { AudioButton } from '../common/AudioButton';
import { AppButton } from '../common/AppButton';
import { AudioWave } from '../common/AudioWave';
import { StarRating } from '../common/StarRating';
import { Mic, Square, RefreshCw, CheckCircle2, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

interface SpeakingCardProps {
  lesson: Lesson;
  unit: Unit;
  onComplete: (score: number) => void;
}

export const SpeakingCard: React.FC<SpeakingCardProps> = ({ lesson, unit, onComplete }) => {
  const { units } = useCourse();

  // Dynamically generate the 8 normal or 6 Check-Up questions
  const [questions] = useState<SpeakingQuestion[]>(() =>
    speakingQuestionService.generateQuestions(lesson, unit, units)
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [scores, setScores] = useState<number[]>([]);

  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [hasRecorded, setHasRecorded] = useState<boolean>(false);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evalResult, setEvalResult] = useState<SpeakingEvaluationResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const currentQuestion = questions[currentIndex] || questions[0];

  const handleStartRecording = () => {
    setIsRecording(true);
    setHasRecorded(false);
    setEvalResult(null);
    setErrorMessage(null);
  };

  const handleStopRecording = async () => {
    setIsRecording(false);
    setHasRecorded(true);

    const mockAudioBlob = new Blob(['mock-audio-stream'], { type: 'audio/webm' });

    setIsEvaluating(true);
    try {
      const result = await speakingService.evaluateSpeech(
        mockAudioBlob,
        currentQuestion.expectedAnswer,
        currentQuestion.vocabularyRefs,
        {
          expectedAnswer: currentQuestion.expectedAnswer,
          feedbackContext: currentQuestion.feedbackContext,
          targetText: currentQuestion.targetText
        }
      );
      setEvalResult(result);
    } catch (err) {
      setErrorMessage('Không thể phân tích giọng nói. Vui lòng bấm thử lại.');
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleRetry = () => {
    setIsRecording(false);
    setHasRecorded(false);
    setEvalResult(null);
    setErrorMessage(null);
  };

  const handleNext = () => {
    if (evalResult) {
      setScores(prev => [...prev, evalResult.score]);
      setEvalResult(null);
      setHasRecorded(false);
      setErrorMessage(null);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleFinish = () => {
    if (evalResult) {
      const finalScores = [...scores, evalResult.score];
      const averageScore = Math.round(finalScores.reduce((a, b) => a + b, 0) / finalScores.length);
      onComplete(averageScore);
    }
  };

  const isLastQuestion = currentIndex === questions.length - 1;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_15px_30px_rgba(0,0,0,0.06)] space-y-6">
        
        {/* Title Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold font-heading text-indigo-900">
              Luyện Nói AI (AI Speaking)
            </h2>
            <p className="text-xs font-semibold text-slate-500">
              Câu {currentIndex + 1} / {questions.length} • Luyện phát âm chuẩn Oxford
            </p>
          </div>
          <AudioButton
            textToSpeak={currentQuestion.targetText}
            size="md"
            label="Nghe mẫu"
          />
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center items-center gap-2 py-1.5 border-b border-slate-100">
          {questions.map((q, idx) => {
            const isActive = idx === currentIndex;
            const isCompleted = idx < currentIndex;
            const score = scores[idx];
            let dotClass = 'w-2.5 h-2.5 rounded-full transition-all duration-300 ';
            if (isActive) {
              dotClass += 'bg-indigo-600 scale-120 ring-4 ring-indigo-100';
            } else if (isCompleted) {
              if (score >= 90) dotClass += 'bg-emerald-500';
              else if (score >= 75) dotClass += 'bg-amber-400';
              else dotClass += 'bg-rose-400';
            } else {
              dotClass += 'bg-slate-200';
            }
            return <div key={q.id} className={dotClass} title={`Câu ${idx + 1}`} />;
          })}
        </div>

        {/* Task Image (Uses our corrected semantic illustration system) */}
        <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-xs">
          <AppImage 
            src={currentQuestion.image} 
            alt="Speaking Prompt" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Prompt Question */}
        <div className="bg-indigo-50 border-2 border-indigo-200/80 p-5 rounded-2xl text-center space-y-1">
          <span className="text-xs font-black text-indigo-500 uppercase tracking-widest">
            {currentQuestion.vietnameseInstruction}
          </span>
          <p className="text-xl font-extrabold text-indigo-900 font-heading leading-snug">
            "{currentQuestion.instruction}"
          </p>
        </div>

        {/* Live Audio Waveform visualizer */}
        <AudioWave isRecording={isRecording} />

        {/* Recording Controls */}
        <div className="flex flex-col items-center justify-center space-y-3 pt-2">
          {!isRecording && !hasRecorded && (
            <AppButton
              onClick={handleStartRecording}
              variant="danger"
              size="xl"
              icon={<Mic className="w-8 h-8 animate-pulse" />}
              className="w-full max-w-xs"
            >
              Bấm để bắt đầu nói
            </AppButton>
          )}

          {isRecording && (
            <AppButton
              onClick={handleStopRecording}
              variant="secondary"
              size="xl"
              icon={<Square className="w-8 h-8" />}
              className="w-full max-w-xs bg-amber-500 border-amber-700 hover:bg-amber-600"
            >
              Dừng ghi âm & Phân tích
            </AppButton>
          )}

          {isEvaluating && (
            <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-2xl text-indigo-700 font-bold text-sm">
              <div className="w-6 h-6 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin" />
              <span>AI Studio đang phân tích giọng nói của bạn...</span>
            </div>
          )}

          {errorMessage && (
            <div className="flex items-center gap-2 p-4 bg-rose-50 rounded-2xl text-rose-700 font-bold text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>

        {/* AI Evaluation Results Dashboard */}
        {evalResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-3xl border-2 border-indigo-100 shadow-xs space-y-5"
          >
            {/* Header score banner */}
            <div className="flex items-center justify-between border-b border-indigo-100 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-black text-indigo-500 uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Kết quả đánh giá AI
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-extrabold font-heading text-indigo-900">
                    {evalResult.score} / 100
                  </span>
                  <span className="text-xs font-bold text-indigo-600 bg-white px-2.5 py-1 rounded-xl shadow-2xs">
                    Điểm phản xạ
                  </span>
                </div>
              </div>

              {/* Stars rating */}
              <StarRating stars={evalResult.stars} size="lg" animated />
            </div>

            {/* AI Feedback Comments */}
            <div className="space-y-3">
              <div className="bg-white/90 p-4 rounded-2xl border border-indigo-100 space-y-1">
                <p className="text-xs font-bold text-slate-400 uppercase">Nhận xét tiếng Anh</p>
                <p className="text-sm font-extrabold text-indigo-900">{evalResult.aiCommentEn}</p>
              </div>

              <div className="bg-white/90 p-4 rounded-2xl border border-indigo-100 space-y-1">
                <p className="text-xs font-bold text-slate-400 uppercase">🇻🇳 Lời khuyên bằng Tiếng Việt</p>
                <p className="text-sm font-bold text-slate-700 leading-relaxed">
                  {evalResult.aiCommentVi}
                </p>
              </div>
            </div>

            {/* Retry option */}
            <div className="text-center pt-2">
              <button
                onClick={handleRetry}
                className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                Nói lại lần nữa để cải thiện điểm
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Navigation Controls: Next / Submit */}
      {evalResult && (
        <div className="pt-2">
          {!isLastQuestion ? (
            <AppButton
              onClick={handleNext}
              variant="primary"
              size="lg"
              fullWidth
              icon={<ArrowRight className="w-6 h-6" />}
            >
              Tiếp tục câu hỏi tiếp theo
            </AppButton>
          ) : (
            <AppButton
              onClick={handleFinish}
              variant="success"
              size="lg"
              fullWidth
              icon={<CheckCircle2 className="w-6 h-6" />}
            >
              Hoàn thành bài luyện nói & Xem kết quả bài học
            </AppButton>
          )}
        </div>
      )}
    </div>
  );
};
