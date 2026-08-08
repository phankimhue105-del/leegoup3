import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';
import { useCourse } from '../../context/CourseContext';
import { Settings, BarChart3, Home, LogOut } from 'lucide-react';
import { CurriculumMap } from './CurriculumMap';

interface HeaderProps {
  onOpenSettings?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSettings }) => {
  const { user } = useAuth();
  const { progressState, isSectionUnlocked } = useProgress();
  const { units } = useCourse();
  const navigate = useNavigate();
  const location = useLocation();

  const { unitId, lessonId } = useParams<{ unitId: string; lessonId?: string }>();
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);

  // Active Lesson Context Info
  const currentUnit = units.find((u) => u.id === unitId);
  const currentLesson = currentUnit?.lessons.find((l) => l.id === lessonId);

  // Stepper active calculation
  const currentPath = location.pathname;
  let activeSection: 'vocabulary' | 'model-pattern' | 'practice' | 'speaking' | 'completed' | 'none' = 'none';
  if (currentPath.endsWith('/vocabulary')) activeSection = 'vocabulary';
  else if (currentPath.endsWith('/model-pattern')) activeSection = 'model-pattern';
  else if (currentPath.endsWith('/practice')) activeSection = 'practice';
  else if (currentPath.endsWith('/speaking')) activeSection = 'speaking';
  else if (currentPath.endsWith('/completed')) activeSection = 'completed';

  const steps: { type: typeof activeSection; label: string }[] = [
    { type: 'vocabulary', label: 'Vocabulary' },
    { type: 'model-pattern', label: 'Model Pattern' },
    { type: 'practice', label: 'Practice' },
    { type: 'speaking', label: 'Speaking' },
    { type: 'completed', label: 'Completed' },
  ];

  const unlockedCount = progressState.achievements.filter((a) => a.isUnlocked).length;

  return (
    <div className="relative">
      {/* ROW 1 — DARK NAVY STUDENT BAR */}
      <div className="bg-slate-950 text-slate-300 px-4 sm:px-8 py-2.5 text-xs font-extrabold flex justify-between items-center select-none">
        {/* Left: Student Profile */}
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span>
            Student: <span className="text-white font-black">{user?.name || 'Học sinh'}</span>
          </span>
          <span>
            Class: <span className="text-white font-black">{user?.grade || 'Lớp 3'}</span>
          </span>
          <span>
            ⭐ Stars: <span className="text-amber-400 font-black">{progressState.totalStars}</span>
          </span>
        </div>
        
        {/* Right: Gamification Badges */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            🔥 <span className="text-white">{progressState.streakDays} Day</span>
          </span>
          <span className="flex items-center gap-1">
            ⭐ <span className="text-white">{progressState.totalStars} Stars</span>
          </span>
          <span className="flex items-center gap-1">
            🏅 <span className="text-white">{unlockedCount} Badges</span>
          </span>
        </div>
      </div>

      {/* ROW 2 — MAIN BRAND / LESSON HEADER */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        {/* Left Side: Hamburger & Lesson Info */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCurriculumOpen(true)}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
            aria-label="Open Curriculum Map"
          >
            <span className="text-2xl font-bold">☰</span>
          </button>
          
          {unitId ? (
            <div>
              <h2 className="text-xs font-black text-rose-600 uppercase tracking-wider font-heading leading-tight">
                {currentUnit?.title || 'UNIT'}: {currentUnit?.subtitle}
              </h2>
              <h3 className="text-[11px] font-bold text-slate-500 mt-0.5 leading-tight">
                {currentLesson?.title || 'Lesson'}: {currentLesson?.vietnameseTitle}
              </h3>
            </div>
          ) : (
            <div>
              <h2 className="text-xs font-black text-rose-600 uppercase tracking-wider font-heading leading-tight">
                LEAGO ENGLISH
              </h2>
              <h3 className="text-[11px] font-bold text-slate-500 mt-0.5 leading-tight">
                Learning Portal
              </h3>
            </div>
          )}
        </div>

        {/* Center: Branding Logo */}
        <div className="flex flex-col items-center text-center select-none">
          <div className="flex items-center gap-2">
            <span className="bg-rose-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded-md">LG</span>
            <span className="font-extrabold text-sm text-slate-800 font-heading">LeeGo English Explorer AI</span>
          </div>
          <span className="hidden md:inline text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
            Everybody Up 3 Learning System
          </span>
        </div>

        {/* Right Side: Small Secondary Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => navigate('/home')}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-rose-600 transition-colors cursor-pointer"
            title="Trang chủ"
          >
            <Home className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigate('/report')}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-rose-600 transition-colors cursor-pointer"
            title="Báo cáo học tập"
          >
            <BarChart3 className="w-4 h-4" />
          </button>
          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-rose-600 transition-colors cursor-pointer"
              title="Cài đặt"
            >
              <Settings className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => navigate('/login')}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
            title="Đăng xuất"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ROW 3 — LEARNING STEPPER */}
      {unitId && lessonId && (
        <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-8 py-3.5 flex justify-center items-center overflow-x-auto gap-2 scrollbar-none">
          {steps.map((step, idx) => {
            const isActive = activeSection === step.type;
            const isUnlocked = true;
            const path = `/units/${unitId}/lessons/${lessonId}/${step.type}`;

            return (
              <React.Fragment key={step.type}>
                <button
                  onClick={() => {
                    if (isUnlocked) navigate(path);
                  }}
                  disabled={!isUnlocked}
                  className={`px-5 py-2 rounded-full text-xs transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-rose-500 text-white font-black shadow-md scale-102 cursor-pointer'
                      : isUnlocked
                      ? 'bg-white text-slate-600 hover:bg-slate-100 font-bold border border-slate-200 cursor-pointer'
                      : 'bg-slate-100 text-slate-400 border border-slate-200 opacity-60 cursor-not-allowed'
                  }`}
                >
                  {step.label}
                </button>
                {idx < steps.length - 1 && (
                  <span className="text-slate-300 font-bold select-none px-1 text-sm">→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}

      {/* Curriculum Map Slide-Out Drawer */}
      <CurriculumMap
        isOpen={isCurriculumOpen}
        onClose={() => setIsCurriculumOpen(false)}
      />
    </div>
  );
};
