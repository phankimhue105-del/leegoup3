import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useProgress } from '../context/ProgressContext';
import { Header } from '../components/common/Header';
import { ModelPatternCard } from '../components/modelPattern/ModelPatternCard';
import { EmptyState } from '../components/common/EmptyState';
import { TeacherIntroCard } from '../components/common/TeacherIntroCard';
import { ChevronLeft } from 'lucide-react';

interface ModelPatternPageProps {
  onOpenSettings?: () => void;
}

export const ModelPatternPage: React.FC<ModelPatternPageProps> = ({ onOpenSettings }) => {
  const { unitId, lessonId } = useParams<{ unitId: string; lessonId: string }>();
  const { getLessonById } = useCourse();
  const { markSectionCompleted } = useProgress();
  const navigate = useNavigate();

  const lessonData = unitId && lessonId ? getLessonById(unitId, lessonId) : undefined;

  if (!lessonData) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header onOpenSettings={onOpenSettings} />
        <main className="max-w-2xl mx-auto p-8">
          <EmptyState
            title="Không tìm thấy mẫu câu"
            onRetry={() => navigate('/units')}
            actionText="Trở về bài học"
          />
        </main>
      </div>
    );
  }

  const { unit, lesson } = lessonData;

  const handleComplete = () => {
    markSectionCompleted(lesson.id, 'model-pattern');
    navigate(`/units/${unit.id}/lessons/${lesson.id}/practice`);
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
          englishText="Great! Now let's practice reading and listening to these model pattern dialogs."
          vietnameseText="Tốt lắm! Bây giờ chúng ta hãy cùng luyện nghe và đọc các đoạn hội thoại mẫu câu nhé."
        />

        {/* Model Pattern Component */}
        <ModelPatternCard
          modelPattern={lesson.modelPattern}
          onComplete={handleComplete}
        />
      </main>
    </div>
  );
};
