import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useProgress } from '../context/ProgressContext';
import { Header } from '../components/common/Header';
import { SpeakingCard } from '../components/speaking/SpeakingCard';
import { EmptyState } from '../components/common/EmptyState';
import { TeacherIntroCard } from '../components/common/TeacherIntroCard';
import { ChevronLeft } from 'lucide-react';

interface SpeakingPageProps {
  onOpenSettings?: () => void;
}

export const SpeakingPage: React.FC<SpeakingPageProps> = ({ onOpenSettings }) => {
  const { unitId, lessonId } = useParams<{ unitId: string; lessonId: string }>();
  const { getLessonById } = useCourse();
  const { markSectionCompleted, saveLessonResult, getLessonProgress } = useProgress();
  const navigate = useNavigate();

  const lessonData = unitId && lessonId ? getLessonById(unitId, lessonId) : undefined;

  if (!lessonData) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header onOpenSettings={onOpenSettings} />
        <main className="max-w-2xl mx-auto p-8">
          <EmptyState
            title="Không tìm thấy bài luyện nói"
            onRetry={() => navigate('/units')}
            actionText="Trở về bài học"
          />
        </main>
      </div>
    );
  }

  const { unit, lesson } = lessonData;
  const currentProg = getLessonProgress(lesson.id);

  const handleComplete = (speakingScore: number) => {
    markSectionCompleted(lesson.id, 'speaking');
    saveLessonResult(lesson.id, currentProg?.practiceScore || 85, speakingScore);
    navigate(`/units/${unit.id}/lessons/${lesson.id}/completed`);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-16">
      <Header onOpenSettings={onOpenSettings} />

      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-6">
        {/* Back navigation */}
        <div>
          <button
            onClick={() => navigate(`/units/${unit.id}/lessons/${lesson.id}`)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-rose-600 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Quay lại {lesson.title}</span>
          </button>
        </div>

        {/* Teacher AI introduction */}
        <TeacherIntroCard
          englishText="Amazing! Now speak these sentences aloud to practice your pronunciation with our AI teacher."
          vietnameseText="Rất tốt! Bây giờ hãy đọc to các câu này để luyện phát âm cùng với giáo viên AI nhé."
        />

        {/* AI Speaking Card Component */}
        <SpeakingCard
          task={lesson.speakingTask}
          onComplete={handleComplete}
        />
      </main>
    </div>
  );
};
