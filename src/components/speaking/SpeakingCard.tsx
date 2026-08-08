import React, { useState, useRef, useEffect } from 'react';
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
import { Mic, Square, RefreshCw, CheckCircle2, Sparkles, AlertCircle, ArrowRight, Keyboard, Play, Pause } from 'lucide-react';

interface SpeakingCardProps {
  lesson: Lesson;
  unit: Unit;
  onComplete: (score: number) => void;
}

const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

export const SpeakingCard: React.FC<SpeakingCardProps> = ({ lesson, unit, onComplete }) => {
  const { units } = useCourse();

  // Dynamically generate the 8 normal or 6 Check-Up questions
  const [questions] = useState<SpeakingQuestion[]>(() =>
    speakingQuestionService.generateQuestions(lesson, unit, units)
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [scores, setScores] = useState<number[]>([]);

  // Input states
  const [inputMode, setInputMode] = useState<'speech' | 'text'>('speech');
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [recognizedTranscript, setRecognizedTranscript] = useState<string>('');

  // Recording & Media states
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [hasRecorded, setHasRecorded] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Evaluation states
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evalResult, setEvalResult] = useState<SpeakingEvaluationResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Refs for cleanup
  const recognitionRef = useRef<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const audioPreviewRef = useRef<HTMLAudioElement | null>(null);

  const currentQuestion = questions[currentIndex] || questions[0];

  // Helper to cleanup media recorder and tracks
  const cleanupMedia = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (e) {}
      recognitionRef.current = null;
    }
    if (mediaRecorderRef.current) {
      if (mediaRecorderRef.current.state !== 'inactive') {
        try {
          mediaRecorderRef.current.stop();
        } catch (e) {}
      }
      mediaRecorderRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => {
        try {
          track.stop();
        } catch (e) {}
      });
      mediaStreamRef.current = null;
    }
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }
    if (audioPreviewRef.current) {
      try {
        audioPreviewRef.current.pause();
      } catch (e) {}
      audioPreviewRef.current = null;
    }
    setIsPlayingAudio(false);
  };

  useEffect(() => {
    return () => {
      cleanupMedia();
    };
  }, []);

  // Sync cleanup when switching questions
  useEffect(() => {
    cleanupMedia();
    setHasRecorded(false);
    setRecordedBlob(null);
    setRecognizedTranscript('');
    setTypedAnswer('');
    setEvalResult(null);
    setErrorMessage(null);
  }, [currentIndex]);

  const performEvaluation = async (studentAnswerText: string, blob: Blob | null, mode: 'speech' | 'text') => {
    setIsEvaluating(true);
    setErrorMessage(null);

    // Validate Blob if in speech mode
    if (mode === 'speech') {
      if (!blob) {
        setErrorMessage('Không nhận được tệp âm thanh ghi âm. Vui lòng bấm nói lại.');
        setIsEvaluating(false);
        return;
      }
      if (blob.size === 0) {
        setErrorMessage('Dữ liệu âm thanh trống. Vui lòng kiểm tra lại mic và nói lại.');
        setIsEvaluating(false);
        return;
      }
    }

    try {
      const result = await speakingService.evaluateSpeech(
        blob,
        currentQuestion.expectedAnswer,
        currentQuestion.vocabularyRefs,
        {
          questionType: currentQuestion.type,
          targetText: currentQuestion.targetText,
          expectedAnswer: currentQuestion.expectedAnswer,
          studentAnswer: studentAnswerText,
          inputMode: mode,
          lessonVocabulary: currentQuestion.vocabularyRefs,
          lessonContext: currentQuestion.lessonContext
        }
      );
      setEvalResult(result);
    } catch (err: any) {
      setErrorMessage(err.message || 'Không nhận được câu trả lời. Hãy thử nói lại hoặc nhập câu trả lời bằng bàn phím.');
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleStartRecording = async () => {
    if (isRecording || isEvaluating) return;

    setIsRecording(true);
    setHasRecorded(false);
    setEvalResult(null);
    setErrorMessage(null);
    setRecognizedTranscript('');
    setRecordedBlob(null);
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }

    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
    } catch (err) {
      console.error('Microphone access denied:', err);
      setErrorMessage('Không thể truy cập micro. Vui lòng cấp quyền truy cập micro và thử lại.');
      setIsRecording(false);
      return;
    }

    // 1. Initialize MediaRecorder to capture physical audio blob for playback/evaluation
    const chunks: Blob[] = [];
    const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
    mediaRecorderRef.current = recorder;

    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        chunks.push(e.data);
      }
    };

    recorder.onstop = () => {
      const audioBlob = new Blob(chunks, { type: 'audio/webm' });
      if (audioBlob && audioBlob.size > 0) {
        setRecordedBlob(audioBlob);
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      }
    };

    // 2. Initialize Web Speech API for real-time speech recognition
    let gotResult = false;
    let transcriptText = '';

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event: any) => {
        gotResult = true;
        transcriptText = event.results[0][0].transcript;
        setRecognizedTranscript(transcriptText);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event);
      };

      recognition.onend = () => {
        setIsRecording(false);
        // Release stream tracks
        stream.getTracks().forEach(track => track.stop());

        // Process evaluation once both transcript and blob are captured
        setTimeout(() => {
          if (gotResult && transcriptText) {
            // Retrieve current chunks from MediaRecorder
            const finalBlob = new Blob(chunks, { type: 'audio/webm' });
            setRecordedBlob(finalBlob);
            const url = URL.createObjectURL(finalBlob);
            setAudioUrl(url);
            
            performEvaluation(transcriptText, finalBlob, 'speech');
          } else {
            setErrorMessage('Không nhận được câu trả lời. Hãy thử nói lại hoặc nhập câu trả lời bằng bàn phím.');
          }
        }, 400);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } else {
      // Fallback if SpeechRecognition is not supported natively
      setTimeout(() => {
        setIsRecording(false);
        stream.getTracks().forEach(track => track.stop());
        setErrorMessage('Thiết bị hoặc trình duyệt không hỗ trợ nhận diện giọng nói. Hãy dùng bàn phím nhập câu trả lời.');
      }, 2000);
    }

    // Start MediaRecorder
    try {
      recorder.start();
    } catch (e) {
      console.error('MediaRecorder start failed:', e);
    }
  };

  const handleStopRecording = () => {
    if (!isRecording) return;
    
    // Stop MediaRecorder
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop();
      } catch (e) {}
    }

    // Stop Speech Recognition
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }

    setIsRecording(false);
    setHasRecorded(true);
  };

  const handlePlayPlayback = () => {
    if (!audioUrl) return;

    if (isPlayingAudio && audioPreviewRef.current) {
      audioPreviewRef.current.pause();
      setIsPlayingAudio(false);
      return;
    }

    const audio = new Audio(audioUrl);
    audioPreviewRef.current = audio;
    setIsPlayingAudio(true);

    audio.onended = () => {
      setIsPlayingAudio(false);
    };
    audio.play().catch(() => {
      setIsPlayingAudio(false);
    });
  };

  const handleNext = () => {
    if (evalResult && !isEvaluating) {
      setScores(prev => [...prev, evalResult.score]);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleFinish = () => {
    if (evalResult && !isEvaluating) {
      const finalScores = [...scores, evalResult.score];
      const averageScore = Math.round(finalScores.reduce((a, b) => a + b, 0) / finalScores.length);
      onComplete(averageScore);
    }
  };

  // Maps task instructions in capitalized format
  const getInstruction = (): string => {
    if (currentQuestion.type === 'vocabulary') {
      return 'REPEAT THIS WORD ALOUD!';
    }
    if (currentQuestion.type === 'communicative') {
      return 'ANSWER THE TEACHER!';
    }
    return 'READ THIS SENTENCE ALOUD!';
  };

  // Maps difficulty labels based on numeric tier
  const getDifficultyLabel = (): string => {
    const diff = currentQuestion.difficulty || 2;
    if (diff <= 2) return 'Very Easy';
    if (diff === 3) return 'Easy';
    return 'Medium';
  };

  const isLastQuestion = currentIndex === questions.length - 1;

  // Filter placeholder illustration cleanly
  const shouldRenderImage = () => {
    const img = currentQuestion.image;
    if (!img) return false;
    // Omit unmapped/missing image placeholders to prevent visual clutter
    if (img.includes('placeholder') || currentQuestion.type === 'communicative') {
      return false;
    }
    return true;
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      
      {/* Speaking Card Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_15px_30px_rgba(0,0,0,0.06)] space-y-6">
        
        {/* TASK HEADER */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
          <div className="space-y-0.5">
            <span className="text-xs font-black text-rose-500 uppercase tracking-widest">
              Speaking Task {currentIndex + 1} / {questions.length}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-400">Difficulty:</span>
              <span className="text-xs font-black text-amber-500 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-100">
                {getDifficultyLabel()}
              </span>
            </div>
          </div>
          <AudioButton
            textToSpeak={currentQuestion.targetText}
            size="md"
            label="Nghe mẫu"
          />
        </div>

        {/* TASK INSTRUCTION */}
        <div className="text-center">
          <h3 className="text-lg font-black text-slate-800 tracking-wide font-heading uppercase">
            {getInstruction()}
          </h3>
        </div>

        {/* ILLUSTRATION AREA (Renders only semantic SVG vectors) */}
        {shouldRenderImage() ? (
          <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-xs max-w-sm mx-auto">
            <AppImage 
              src={currentQuestion.image} 
              alt="Task Visual" 
              className="w-full h-full object-cover" 
            />
          </div>
        ) : (
          // Neutral small icon placeholder for role-play questions
          <div className="flex justify-center items-center py-2">
            <span className="text-5xl" role="img" aria-label="avatar">
              {currentQuestion.type === 'communicative' ? '👩‍🏫' : '📝'}
            </span>
          </div>
        )}

        {/* TARGET CONTENT */}
        <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center space-y-2">
          {currentQuestion.type === 'communicative' && (
            <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">
              Teacher's Question
            </span>
          )}
          <p className="text-2xl font-black text-slate-850 font-heading leading-snug">
            {currentQuestion.instruction}
          </p>
          {currentQuestion.type === 'vocabulary' && (
            <span className="text-sm font-semibold text-slate-500">
              ({lesson.vocabulary[currentIndex % lesson.vocabulary.length]?.vietnameseMeaning})
            </span>
          )}
        </div>

        {/* Dual Mode Switch Button */}
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              setInputMode(prev => prev === 'speech' ? 'text' : 'speech');
              handleRetry();
            }}
            disabled={isEvaluating}
            className="text-xs font-black text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1.5 cursor-pointer bg-indigo-50/50 hover:bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100/50"
          >
            {inputMode === 'speech' ? (
              <>
                <Keyboard className="w-3.5 h-3.5" />
                <span>⌨ Nhập câu trả lời bằng bàn phím</span>
              </>
            ) : (
              <>
                <Mic className="w-3.5 h-3.5" />
                <span>🎙 Sử dụng micro nói câu trả lời</span>
              </>
            )}
          </button>
        </div>

        {/* Audio Visualizer Wave */}
        {inputMode === 'speech' && <AudioWave isRecording={isRecording} />}

        {/* RECORDING / KEYBOARD INPUT AREA */}
        <div className="flex flex-col items-center justify-center space-y-3 pt-2">
          
          {inputMode === 'speech' ? (
            // Microphone mode
            <div className="space-y-4 w-full flex flex-col items-center">
              {!isRecording && !hasRecorded && (
                <AppButton
                  onClick={handleStartRecording}
                  disabled={isEvaluating}
                  variant="danger"
                  size="xl"
                  icon={<Mic className="w-8 h-8 animate-pulse" />}
                  className="w-full max-w-xs cursor-pointer shadow-md"
                >
                  Bắt đầu nói
                </AppButton>
              )}

              {isRecording && (
                <AppButton
                  onClick={handleStopRecording}
                  variant="secondary"
                  size="xl"
                  icon={<Square className="w-8 h-8" />}
                  className="w-full max-w-xs bg-amber-500 border-amber-700 hover:bg-amber-600 cursor-pointer shadow-md"
                >
                  Dừng nói & Phân tích
                </AppButton>
              )}

              {/* Speech Playback Preview and Transcript details */}
              {hasRecorded && !isRecording && (
                <div className="flex flex-col items-center gap-3 w-full max-w-md">
                  {audioUrl && (
                    <button
                      onClick={handlePlayPlayback}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer border border-slate-200"
                    >
                      {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{isPlayingAudio ? 'Dừng nghe lại' : 'Nghe lại giọng của con'}</span>
                    </button>
                  )}
                  {recognizedTranscript && (
                    <div className="bg-indigo-50/50 border border-indigo-100 px-4 py-3 rounded-xl text-center space-y-0.5 w-full">
                      <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">
                        Giáo viên nghe thấy
                      </span>
                      <p className="text-sm font-extrabold text-slate-800">
                        "{recognizedTranscript}"
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            // Keyboard Mode (Large Prominent Child-friendly Input area)
            <div className="w-full max-w-md mx-auto space-y-4">
              {currentQuestion.type === 'vocabulary' ? (
                // Large single-line text box
                <input
                  type="text"
                  value={typedAnswer}
                  onChange={(e) => setTypedAnswer(e.target.value)}
                  placeholder="Gõ từ vựng con nghe thấy..."
                  disabled={isEvaluating || !!evalResult}
                  className="w-full px-5 py-4 text-2xl font-black text-center rounded-2xl border-3 border-indigo-100 focus:border-indigo-400 focus:outline-hidden text-slate-800 shadow-xs transition-all placeholder:text-slate-300"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && typedAnswer.trim() && !isEvaluating && !evalResult) {
                      performEvaluation(typedAnswer, null, 'text');
                    }
                  }}
                />
              ) : (
                // Large multiline text area
                <textarea
                  rows={currentQuestion.type === 'communicative' ? 4 : 3}
                  value={typedAnswer}
                  onChange={(e) => setTypedAnswer(e.target.value)}
                  placeholder={currentQuestion.type === 'communicative' ? "Gõ câu trả lời của con..." : "Gõ cả câu con đọc được..."}
                  disabled={isEvaluating || !!evalResult}
                  className="w-full px-5 py-4 text-lg font-bold rounded-2xl border-3 border-indigo-100 focus:border-indigo-400 focus:outline-hidden text-slate-800 shadow-xs transition-all placeholder:text-slate-300 resize-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey && typedAnswer.trim() && !isEvaluating && !evalResult) {
                      e.preventDefault();
                      performEvaluation(typedAnswer, null, 'text');
                    }
                  }}
                />
              )}

              {!isEvaluating && !evalResult && (
                <AppButton
                  onClick={() => {
                    if (typedAnswer.trim()) {
                      performEvaluation(typedAnswer, null, 'text');
                    }
                  }}
                  disabled={!typedAnswer.trim()}
                  variant="primary"
                  size="xl"
                  fullWidth
                  className="cursor-pointer shadow-md"
                >
                  Gửi câu trả lời
                </AppButton>
              )}
            </div>
          )}

          {/* Evaluating State Loader */}
          {isEvaluating && (
            <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-2xl text-indigo-700 font-bold text-sm">
              <div className="w-6 h-6 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin" />
              <span>AI đang chấm điểm phát âm...</span>
            </div>
          )}

          {/* Recording / Capture Errors */}
          {errorMessage && (
            <div className="flex items-center gap-2.5 p-4 bg-rose-50 rounded-2xl text-rose-700 font-bold text-sm border border-rose-100 max-w-md text-center">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-500" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>

        {/* AI EVALUATION RESULTS DASHBOARD */}
        {evalResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-3xl border-2 border-indigo-100 shadow-xs space-y-5"
          >
            {/* Score header */}
            <div className="flex items-center justify-between border-b border-indigo-100 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-black text-indigo-500 uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Kết quả đánh giá AI
                </span>
                <div className="flex items-center gap-2.5">
                  <span className="text-4xl font-black font-heading text-indigo-900">
                    {evalResult.score} / 100
                  </span>
                  <span className="text-xs font-black text-indigo-600 bg-white px-3 py-1 rounded-xl shadow-2xs border border-indigo-100/50">
                    Điểm nói
                  </span>
                </div>
              </div>

              {/* Star Rating */}
              <StarRating stars={evalResult.stars} size="lg" animated />
            </div>

            {/* AI Teacher Feedback Comments */}
            <div className="space-y-3">
              <div className="bg-white/95 p-4 rounded-2xl border border-indigo-100/50 shadow-2xs space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">AI English Feedback</p>
                <p className="text-sm font-extrabold text-indigo-900">{evalResult.aiCommentEn}</p>
              </div>

              <div className="bg-white/95 p-4 rounded-2xl border border-indigo-100/50 shadow-2xs space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">🇻🇳 Lời khuyên của thầy cô</p>
                <p className="text-sm font-bold text-slate-700 leading-relaxed">
                  {evalResult.aiCommentVi}
                </p>
              </div>
            </div>

            {/* Retry Button inside feedback */}
            <div className="text-center pt-2">
              <button
                onClick={handleRetry}
                className="inline-flex items-center gap-2 text-xs font-black text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                Luyện nói lại để điểm cao hơn!
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Navigation Controls: Next / Submit */}
      {evalResult && !isEvaluating && (
        <div className="pt-2">
          {!isLastQuestion ? (
            <AppButton
              onClick={handleNext}
              variant="primary"
              size="lg"
              fullWidth
              icon={<ArrowRight className="w-6 h-6" />}
              className="cursor-pointer shadow-md"
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
              className="cursor-pointer shadow-md"
            >
              Hoàn thành bài luyện nói & Xem kết quả
            </AppButton>
          )}
        </div>
      )}
    </div>
  );
};
