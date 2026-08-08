import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useProgress } from '../context/ProgressContext';
import { Header } from '../components/common/Header';
import { VocabularyCard } from '../components/vocabulary/VocabularyCard';
import { EmptyState } from '../components/common/EmptyState';
import { TeacherIntroCard } from '../components/common/TeacherIntroCard';
import { ChevronLeft } from 'lucide-react';

interface VocabularyPageProps {
  onOpenSettings?: () => void;
}

export const VocabularyPage: React.FC<VocabularyPageProps> = ({ onOpenSettings }) => {
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
            title="Không tìm thấy bài từ vựng"
            onRetry={() => navigate('/units')}
            actionText="Trở về bài học"
          />
        </main>
      </div>
    );
  }

  const { unit, lesson } = lessonData;

  const handleComplete = () => {
    markSectionCompleted(lesson.id, 'vocabulary');
    navigate(`/units/${unit.id}/lessons/${lesson.id}/model-pattern`);
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
          englishText="Let's learn some new words first! Click on the arrows to see all the flashcards."
          vietnameseText="Chúng ta hãy cùng học các từ vựng mới nhé! Bấm phím mũi tên để xem các thẻ từ vựng."
        />

        {/* Vocabulary Flashcard Component */}
        <VocabularyCard
          vocabularyList={lesson.vocabulary}
          onComplete={handleComplete}
        />
      </main>
    </div>
  );
};
