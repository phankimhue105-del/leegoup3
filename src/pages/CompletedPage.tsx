import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useCourse } from '../context/CourseContext';
import { useProgress } from '../context/ProgressContext';
import { useAudio } from '../context/AudioContext';
import { Header } from '../components/common/Header';
import { Card } from '../components/common/Card';
import { AppButton } from '../components/common/AppButton';
import { StarRating } from '../components/common/StarRating';
import { Trophy, CheckCircle2, Home, BarChart3, ArrowRight } from 'lucide-react';

interface CompletedPageProps {
  onOpenSettings?: () => void;
}

export const CompletedPage: React.FC<CompletedPageProps> = ({ onOpenSettings }) => {
  const { unitId, lessonId } = useParams<{ unitId: string; lessonId: string }>();
  const { getLessonById, getNextLesson } = useCourse();
  const { getLessonProgress } = useProgress();
  const { playEffect } = useAudio();
  const navigate = useNavigate();

  const lessonData = unitId && lessonId ? getLessonById(unitId, lessonId) : undefined;
  const nextTarget = unitId && lessonId ? getNextLesson(unitId, lessonId) : undefined;

  const lessonProg = lessonId ? getLessonProgress(lessonId) : undefined;

  useEffect(() => {
    // Fire celebration confetti & fanfare audio
    playEffect('fanfare');
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // Confetti fallback
    }
  }, []);

  const practiceScore = lessonProg?.practiceScore || 90;
  const speakingScore = lessonProg?.speakingScore || 88;
  const starsEarned = lessonProg?.starsEarned || 3;

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <Header onOpenSettings={onOpenSettings} />

      <main className="max-w-2xl mx-auto px-4 sm:px-8 py-8 space-y-6 text-center">
        {/* Celebration Banner Card */}
        <Card className="bg-gradient-to-b from-indigo-600 to-purple-700 text-white p-8 sm:p-10 space-y-6 shadow-xl">
          <div className="w-20 h-20 rounded-3xl bg-amber-400 text-amber-950 flex items-center justify-center mx-auto shadow-lg animate-bounce">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-indigo-100">
              Xuất Sắc! Hoàn Thành Bài Học
            </span>
            <h1 className="text-3xl sm:text-4xl font-black font-heading tracking-tight">
              Lesson Completed!
            </h1>
            <p className="text-sm font-semibold text-indigo-100">
              Bạn đã hoàn tất xuất sắc cả 4 phần học của bài hôm nay 🎉
            </p>
          </div>

          {/* Stars display */}
          <div className="flex justify-center pt-2">
            <StarRating stars={starsEarned} size="xl" animated />
          </div>
        </Card>

        {/* Score Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-5 text-center space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase">Từ vựng (Vocab)</span>
            <div className="flex items-center justify-center gap-1.5 text-emerald-600 font-extrabold text-lg">
              <CheckCircle2 className="w-5 h-5" />
              <span>100% Thuộc</span>
            </div>
          </Card>

          <Card className="p-5 text-center space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase">Điểm thực hành</span>
            <p className="text-2xl font-black font-heading text-indigo-600">
              {practiceScore} / 100
            </p>
          </Card>

          <Card className="p-5 text-center space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase">Phản xạ nói AI</span>
            <p className="text-2xl font-black font-heading text-pink-600">
              {speakingScore} / 100
            </p>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          {nextTarget && (
            <AppButton
              onClick={() => navigate(`/units/${nextTarget.unitId}`)}
              variant="success"
              size="xl"
              fullWidth
              icon={<ArrowRight className="w-6 h-6" />}
            >
              Tiếp tục bài học tiếp theo
            </AppButton>
          )}

          <div className="grid grid-cols-2 gap-3">
            <AppButton
              onClick={() => navigate('/home')}
              variant="outline"
              size="lg"
              icon={<Home className="w-5 h-5" />}
            >
              Trang chủ
            </AppButton>

            <AppButton
              onClick={() => navigate('/report')}
              variant="primary"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Xem báo cáo
            </AppButton>
          </div>
        </div>
      </main>
    </div>
  );
};
