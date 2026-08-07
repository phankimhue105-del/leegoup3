import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useProgress } from '../context/ProgressContext';
import { Header } from '../components/common/Header';
import { VocabularyCard } from '../components/vocabulary/VocabularyCard';
import { EmptyState } from '../components/common/EmptyState';
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
    // Proceed to next workflow section: model-pattern
    navigate(`/units/${unit.id}/lessons/${lesson.id}/model-pattern`);
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
          <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Phần 1/4 • Vocabulary
          </span>
          <h1 className="text-3xl font-black font-heading text-slate-800">
            Từ Vựng Bài Học ({unit.title})
          </h1>
        </div>

        {/* Vocabulary Flashcard Component */}
        <VocabularyCard
          vocabularyList={lesson.vocabulary}
          onComplete={handleComplete}
        />
      </main>
    </div>
  );
};
