import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useProgress } from '../context/ProgressContext';
import { Header } from '../components/common/Header';
import { PracticeEngine } from '../components/practice/PracticeEngine';
import { EmptyState } from '../components/common/EmptyState';
import { ChevronLeft } from 'lucide-react';

interface PracticePageProps {
  onOpenSettings?: () => void;
}

export const PracticePage: React.FC<PracticePageProps> = ({ onOpenSettings }) => {
  const { unitId, lessonId } = useParams<{ unitId: string; lessonId: string }>();
  const { getLessonById } = useCourse();
  const { markSectionCompleted, saveLessonResult } = useProgress();
  const navigate = useNavigate();

  const lessonData = unitId && lessonId ? getLessonById(unitId, lessonId) : undefined;

  if (!lessonData) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header onOpenSettings={onOpenSettings} />
        <main className="max-w-2xl mx-auto p-8">
          <EmptyState
            title="Không tìm thấy bài thực hành"
            onRetry={() => navigate('/units')}
            actionText="Trở về bài học"
          />
        </main>
      </div>
    );
  }

  const { unit, lesson } = lessonData;

  const handleComplete = (score: number) => {
    markSectionCompleted(lesson.id, 'practice');
    saveLessonResult(lesson.id, score, 0); // Save practice score
    // Proceed to next workflow section: speaking
    navigate(`/units/${unit.id}/lessons/${lesson.id}/speaking`);
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
          <span className="text-xs font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            Phần 3/4 • Practice Quiz Engine
          </span>
          <h1 className="text-3xl font-black font-heading text-slate-800">
            Bài Tập Thực Hành ({unit.title})
          </h1>
        </div>

        {/* Practice Engine Quiz Renderer */}
        <PracticeEngine
          questions={lesson.practiceQuestions}
          onComplete={handleComplete}
        />
      </main>
    </div>
  );
};
