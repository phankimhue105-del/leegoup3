import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useProgress } from '../context/ProgressContext';
import { Header } from '../components/common/Header';
import { BottomNav } from '../components/common/BottomNav';
import { LessonFlowStep } from '../components/lessons/LessonFlowStep';
import { EmptyState } from '../components/common/EmptyState';
import { AppButton } from '../components/common/AppButton';
import { LessonSectionType } from '../types/course';
import { ChevronLeft, CheckCircle } from 'lucide-react';

interface LessonOverviewPageProps {
  onOpenSettings?: () => void;
}

export const LessonOverviewPage: React.FC<LessonOverviewPageProps> = ({ onOpenSettings }) => {
  const { unitId } = useParams<{ unitId: string }>();
  const { getUnitById } = useCourse();
  const { getLessonProgress, isSectionUnlocked } = useProgress();
  const navigate = useNavigate();

  const unit = unitId ? getUnitById(unitId) : undefined;
  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number>(0);

  if (!unit || !unit.lessons || unit.lessons.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header onOpenSettings={onOpenSettings} />
        <main className="max-w-4xl mx-auto p-8">
          <EmptyState
            title="Không tìm thấy bài học"
            description="Chủ đề bạn yêu cầu hiện không có trong hệ thống dữ liệu."
            onRetry={() => navigate('/units')}
            actionText="Quay lại danh sách Unit"
          />
        </main>
      </div>
    );
  }

  const activeLesson = unit.lessons[selectedLessonIndex] || unit.lessons[0];
  const lessonProg = getLessonProgress(activeLesson.id);

  const sections: {
    type: LessonSectionType;
    title: string;
    vietnameseTitle: string;
    description: string;
  }[] = [
    {
      type: 'vocabulary',
      title: 'Vocabulary',
      vietnameseTitle: 'Từ Vựng Mới',
      description: 'Học từ mới qua flashcard tương tác, hình ảnh & phát âm chuẩn.',
    },
    {
      type: 'model-pattern',
      title: 'Model Pattern',
      vietnameseTitle: 'Mẫu Cầu Giao Tiếp',
      description: 'Thực hành hội thoại mẫu & giải thích cấu trúc ngữ pháp.',
    },
    {
      type: 'practice',
      title: 'Practice Quiz',
      vietnameseTitle: 'Bài Tập Thực Hành',
      description: 'Luyện tập qua các dạng câu hỏi trắc nghiệm, nối từ & điền từ.',
    },
    {
      type: 'speaking',
      title: 'AI Speaking',
      vietnameseTitle: 'Luyện Nói Với AI',
      description: 'Ghi âm phát âm trực tiếp & nhận đánh giá phản xạ từ AI Studio.',
    },
  ];

  const handleNavigateToSection = (sectionType: LessonSectionType) => {
    navigate(`/units/${unit.id}/lessons/${activeLesson.id}/${sectionType}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24 md:pb-12">
      <Header onOpenSettings={onOpenSettings} />

      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* Top Back Navigation Button */}
        <div>
          <button
            onClick={() => navigate('/units')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Quay lại danh sách Units</span>
          </button>
        </div>

        {/* Unit Header Banner */}
        <div
          className="rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-2 relative overflow-hidden"
          style={{ backgroundColor: unit.colorHex }}
        >
          <span className="text-xs font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full inline-block">
            {unit.title}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-heading tracking-tight">
            {unit.subtitle}
          </h1>
          <p className="text-base font-bold text-white/90">🇻🇳 {unit.vietnameseTitle}</p>
        </div>

        {/* Lesson Selector Tabs (if unit has multiple lessons) */}
        {unit.lessons.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {unit.lessons.map((l, idx) => (
              <button
                key={l.id}
                onClick={() => setSelectedLessonIndex(idx)}
                className={`px-5 py-3 rounded-2xl text-sm font-extrabold font-heading transition-all whitespace-nowrap cursor-pointer ${
                  selectedLessonIndex === idx
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {l.title}: {l.vietnameseTitle}
              </button>
            ))}
          </div>
        )}

        {/* Required 5-Step Workflow Card Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold font-heading text-slate-800">
              Cấu Trúc Bài Học ({activeLesson.title})
            </h2>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-xl">
              Quy trình 5 phần bắt buộc
            </span>
          </div>

          <div className="space-y-4">
            {sections.map((sec) => {
              const unlocked = isSectionUnlocked(activeLesson.id, sec.type);
              const completed = !!lessonProg?.completedSections[sec.type];

              return (
                <LessonFlowStep
                  key={sec.type}
                  type={sec.type}
                  title={sec.title}
                  vietnameseTitle={sec.vietnameseTitle}
                  description={sec.description}
                  isUnlocked={unlocked}
                  isCompleted={completed}
                  onClick={() => handleNavigateToSection(sec.type)}
                />
              );
            })}

            {/* Step 5: Completed Section Card */}
            <div
              onClick={() => {
                if (lessonProg?.isCompleted) {
                  navigate(`/units/${unit.id}/lessons/${activeLesson.id}/completed`);
                }
              }}
              className={`p-6 sm:p-8 rounded-3xl border border-slate-100 flex items-center justify-between transition-all ${
                lessonProg?.isCompleted
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg cursor-pointer'
                  : 'bg-slate-100 text-slate-400 opacity-60'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center font-bold">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold font-heading">5. Lesson Completed</h3>
                  <p className="text-sm font-semibold opacity-90">
                    {lessonProg?.isCompleted
                      ? `Đã hoàn thành • Đạt ${lessonProg.starsEarned} Stars`
                      : 'Hoàn thành 4 phần trên để mở khóa báo cáo tổng kết bài.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};
