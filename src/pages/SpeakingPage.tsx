import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useProgress } from '../context/ProgressContext';
import { Header } from '../components/common/Header';
import { SpeakingCard } from '../components/speaking/SpeakingCard';
import { EmptyState } from '../components/common/EmptyState';
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
    // Proceed to 5th workflow step: Completed page
    navigate(`/units/${unit.id}/lessons/${lesson.id}/completed`);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <Header onOpenSettings={onOpenSettings} />

      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-6">
        {/* Back navigation */}
        <div>
          <button
            onClick={() => navigate(`/units/${unit.id}`)}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Quay lại {lesson.title}</span>
          </button>
        </div>

        {/* Section Title Banner */}
        <div className="text-center space-y-1">
          <span className="text-xs font-black uppercase tracking-wider text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
            Phần 4/4 • AI Speaking Assessment
          </span>
          <h1 className="text-3xl font-black font-heading text-slate-800">
            Luyện Phản Xạ Nói ({unit.title})
          </h1>
        </div>

        {/* AI Speaking Card Component */}
        <SpeakingCard
          task={lesson.speakingTask}
          onComplete={handleComplete}
        />
      </main>
    </div>
  );
};
