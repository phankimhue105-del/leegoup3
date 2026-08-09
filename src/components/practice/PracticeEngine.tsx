import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PracticeQuestion } from '../../types/course';
import { useSettings } from '../../context/SettingsContext';
import { useAudio } from '../../context/AudioContext';
import { AppButton } from '../common/AppButton';
import { ProgressBar } from '../common/ProgressBar';
import { AudioButton } from '../common/AudioButton';
import { AppImage } from '../common/AppImage';
import { Clock, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface PracticeEngineProps {
  questions: PracticeQuestion[];
  onComplete: (score: number) => void;
}

export const PracticeEngine: React.FC<PracticeEngineProps> = ({
  questions,
  onComplete,
}) => {
  const { settings } = useSettings();
  const { playEffect } = useAudio();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [fillValue, setFillValue] = useState<string>('');
  const [matchingSelections, setMatchingSelections] = useState<Record<string, string>>({});
  const [shuffledRightItems, setShuffledRightItems] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);

  const currentQuestion = questions[currentIndex] || questions[0];

  // Optional Timer (OFF by default)
  useEffect(() => {
    if (!settings.timerEnabled) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [settings.timerEnabled]);

  const resetQuestionState = () => {
    setSelectedOption(null);
    setFillValue('');
    setMatchingSelections({});
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  // Reset states and shuffle matching choices when question index changes
  useEffect(() => {
    resetQuestionState();
    if (currentQuestion && currentQuestion.type === 'matching' && currentQuestion.matchingPairs) {
      const rightTexts = currentQuestion.matchingPairs.map(p => p.rightText);
      setShuffledRightItems([...rightTexts].sort(() => Math.random() - 0.5));
    }
  }, [currentIndex, currentQuestion?.id]);

  const handleSelectOption = (opt: string) => {
    if (isSubmitted) return;
    setSelectedOption(opt);
    playEffect('click');
  };

  const handleSubmit = () => {
    if (isSubmitted) return;

    let correct = false;

    if (currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'listening' || currentQuestion.type === 'picture-select') {
      correct = selectedOption === currentQuestion.correctAnswer;
    } else if (currentQuestion.type === 'fill-in-blank') {
      const cleanUser = fillValue.trim().toLowerCase();
      const expected = Array.isArray(currentQuestion.correctAnswer)
        ? currentQuestion.correctAnswer[0].toLowerCase()
        : (currentQuestion.correctAnswer as string).toLowerCase();
      correct = cleanUser === expected || expected.includes(cleanUser);
    } else if (currentQuestion.type === 'matching') {
      // Validate matching dropdown connections
      correct = currentQuestion.matchingPairs?.every(pair => 
        matchingSelections[pair.leftText] === pair.rightText
      ) ?? false;
    }

    setIsCorrect(correct);
    setIsSubmitted(true);

    if (correct) {
      playEffect('correct');
      setCorrectCount((prev) => prev + 1);
    } else {
      playEffect('incorrect');
    }
  };

  const handleContinue = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const finalScore = Math.round((correctCount / questions.length) * 100);
      onComplete(finalScore);
    }
  };

  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  // Check if matching selections are completely filled out
  const isMatchingComplete =
    currentQuestion.type === 'matching' &&
    currentQuestion.matchingPairs?.every(p => matchingSelections[p.leftText]);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Header: Question count, timer, progress */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs space-y-3">
        <div className="flex items-center justify-between font-heading font-bold text-slate-700">
          <span className="text-base text-indigo-600">
            Câu {currentIndex + 1} / {questions.length}
          </span>

          {settings.timerEnabled && (
            <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-xl text-xs text-slate-600">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>{timerSeconds}s</span>
            </div>
          )}
        </div>
        <ProgressBar progress={progressPercent} heightClass="h-3" />
      </div>

      {/* Main Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id || currentIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_15px_30px_rgba(0,0,0,0.06)] space-y-6"
        >
          {/* Question Prompt */}
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-800 leading-snug">
                {currentQuestion.questionText}
              </h2>

              {currentQuestion.promptAudioUrl && currentQuestion.type !== 'listening' && (
                <AudioButton
                  audioUrl={currentQuestion.promptAudioUrl}
                  textToSpeak={currentQuestion.questionText}
                  size="md"
                />
              )}
            </div>

            {/* Target Audio for Listening Question */}
            {currentQuestion.type === 'listening' && (
              <div className="flex justify-center items-center py-6 bg-indigo-50/50 border-2 border-dashed border-indigo-100 rounded-3xl max-w-sm mx-auto my-2">
                <AudioButton
                  audioUrl={currentQuestion.promptAudioUrl}
                  textToSpeak={currentQuestion.correctAnswer}
                  size="lg"
                  label="🔊 PLAY AUDIO"
                />
              </div>
            )}

            {/* Optional Question Image */}
            {currentQuestion.questionImage && (
              <div className="relative aspect-16/9 w-full max-h-56 rounded-2xl overflow-hidden border border-slate-100">
                <AppImage
                  src={currentQuestion.questionImage}
                  alt="Question Image"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Question Content Renderers according to Type */}
          {/* 1 & 4. Multiple Choice & Listening */}
          {(currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'listening') && (
            <div className="grid grid-cols-1 gap-3">
              {currentQuestion.options?.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                let optStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-indigo-50/50 hover:border-indigo-300';

                if (isSubmitted) {
                  if (opt === currentQuestion.correctAnswer) {
                    optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-extrabold';
                  } else if (isSelected) {
                    optStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                  }
                } else if (isSelected) {
                  optStyle = 'bg-indigo-50 border-indigo-500 text-indigo-900 font-bold';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt)}
                    disabled={isSubmitted}
                    className={`w-full p-4 rounded-2xl border-2 text-left text-base font-bold transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
                  >
                    <span>{opt}</span>
                    {/* Hide play button next to options for listening questions to test discrimination */}
                    {currentQuestion.type !== 'listening' && (
                      <AudioButton textToSpeak={opt} size="sm" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* 5. Picture Selection */}
          {currentQuestion.type === 'picture-select' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {currentQuestion.options?.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const imgSrc = currentQuestion.optionImages?.[idx] || 'vocab';

                let borderStyle = 'border-slate-200 hover:border-indigo-300';
                if (isSubmitted) {
                  if (opt === currentQuestion.correctAnswer) borderStyle = 'border-emerald-500 ring-4 ring-emerald-100';
                  else if (isSelected) borderStyle = 'border-rose-400 ring-4 ring-rose-100';
                } else if (isSelected) {
                  borderStyle = 'border-indigo-500 ring-4 ring-indigo-100';
                }

                return (
                  <div
                    key={idx}
                    onClick={() => handleSelectOption(opt)}
                    className={`rounded-2xl p-2 border-2 cursor-pointer transition-all bg-slate-50 flex flex-col justify-between ${borderStyle}`}
                  >
                    <div className="aspect-square rounded-xl overflow-hidden">
                      <AppImage src={imgSrc} alt={opt} className="w-full h-full object-cover" />
                    </div>
                    {/* Only display word labels after submission to avoid giving away the answer */}
                    {isSubmitted && (
                      <p className="text-center font-heading font-bold text-xs text-indigo-650 mt-2">{opt}</p>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* 3. Fill in the Blank */}
          {currentQuestion.type === 'fill-in-blank' && (
            <div className="space-y-4">
              <input
                type="text"
                value={fillValue}
                onChange={(e) => setFillValue(e.target.value)}
                disabled={isSubmitted}
                placeholder="Nhập câu trả lời của bạn..."
                className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 font-bold text-lg text-slate-800 outline-none transition-all"
              />
            </div>
          )}

          {/* 2. Matching Pairs */}
          {currentQuestion.type === 'matching' && (
            <div className="space-y-4">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest text-center">
                Ghép nối từ tiếng Anh với nghĩa tương ứng
              </p>
              <div className="space-y-3">
                {currentQuestion.matchingPairs?.map((pair, idx) => {
                  const selectedVal = matchingSelections[pair.leftText] || '';
                  const isRight = selectedVal === pair.rightText;

                  let selectClass = 'w-full sm:w-64 p-3 rounded-xl border-2 font-semibold text-sm outline-hidden transition-colors cursor-pointer ';
                  if (isSubmitted) {
                    if (isRight) selectClass += 'bg-emerald-50 border-emerald-500 text-emerald-800';
                    else selectClass += 'bg-rose-50 border-rose-400 text-rose-800';
                  } else {
                    selectClass += selectedVal
                      ? 'bg-indigo-50 border-indigo-400 text-indigo-900 font-bold'
                      : 'bg-white border-slate-200 text-slate-600 focus:border-indigo-400';
                  }

                  return (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs">
                      <span className="font-black text-indigo-700 text-lg">{pair.leftText}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-300 font-bold hidden sm:inline">➔</span>
                        <select
                          value={selectedVal}
                          onChange={(e) => {
                            if (isSubmitted) return;
                            setMatchingSelections(prev => ({
                              ...prev,
                              [pair.leftText]: e.target.value
                            }));
                            playEffect('click');
                          }}
                          disabled={isSubmitted}
                          className={selectClass}
                        >
                          <option value="">-- Chọn nghĩa đúng --</option>
                          {shuffledRightItems.map((val, itemIdx) => (
                            <option key={itemIdx} value={val}>{val}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Answer Feedback & Vietnamese Explanation Area */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-5 rounded-2xl border space-y-2 ${
                isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'
              }`}
            >
              <div className="flex items-center gap-2 font-heading font-extrabold text-lg">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    <span>Chính xác! Cực kỳ xuất sắc!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-rose-600" />
                    <span>Chưa chính xác rồi!</span>
                  </>
                )}
              </div>

              {!isCorrect && (
                <p className="text-sm font-bold">
                  Đáp án đúng là:{' '}
                  <span className="underline">
                    {Array.isArray(currentQuestion.correctAnswer)
                      ? currentQuestion.correctAnswer.join(', ')
                      : currentQuestion.correctAnswer}
                  </span>
                </p>
              )}

              {/* Vietnamese Explanation Area */}
              <div className="pt-2 border-t border-slate-200/60 text-xs font-semibold space-y-1">
                <p className="font-bold uppercase tracking-wider text-slate-500">
                  💡 Giải thích bài tập (Vietnamese Explanation):
                </p>
                <p className="text-slate-700 italic leading-relaxed">
                  {currentQuestion.vietnameseExplanation}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="pt-2">
        {!isSubmitted ? (
          <AppButton
            onClick={handleSubmit}
            disabled={
              currentQuestion.type === 'matching'
                ? !isMatchingComplete
                : (!selectedOption && !fillValue)
            }
            variant="primary"
            size="lg"
            fullWidth
          >
            Nộp bài
          </AppButton>
        ) : (
          <AppButton
            onClick={handleContinue}
            variant="success"
            size="lg"
            fullWidth
            icon={<ArrowRight className="w-6 h-6" />}
          >
            {currentIndex < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả thực hành'}
          </AppButton>
        )}
      </div>
    </div>
  );
};
