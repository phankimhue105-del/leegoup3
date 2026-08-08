import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';

interface LessonOverviewPageProps {
  onOpenSettings?: () => void;
}

export const LessonOverviewPage: React.FC<LessonOverviewPageProps> = ({ onOpenSettings }) => {
  const { unitId, lessonId } = useParams<{ unitId: string; lessonId?: string }>();
  const { getUnitById } = useCourse();
  const navigate = useNavigate();

  const unit = unitId ? getUnitById(unitId) : undefined;

  React.useEffect(() => {
    if (unit) {
      const activeLessonId = lessonId || unit.lessons[0]?.id;
      if (activeLessonId) {
        navigate(`/units/${unit.id}/lessons/${activeLessonId}/vocabulary`, { replace: true });
      }
    } else {
      // Fallback redirect if unit is invalid
      navigate('/home', { replace: true });
    }
  }, [unit, unitId, lessonId, navigate]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center select-none">
      <div className="text-center font-black text-sm text-rose-500 animate-pulse font-heading">
        Loading Lesson Content...
      </div>
    </div>
  );
};
