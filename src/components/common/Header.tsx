import React, { useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';
import { useCourse } from '../../context/CourseContext';
import { Sparkles, Flame, Settings, User, BookOpen, BarChart3 } from 'lucide-react';
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

  // Default Landing Page Header (Home, Units, Report pages)
  if (!unitId) {
    return (
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Brand Logo & Title */}
          <Link to="/home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold font-heading text-slate-800 leading-tight">
                Everybody Up 3
              </h1>
              <p className="text-xs font-semibold text-indigo-600">Oxford English 2nd Edition</p>
            </div>
          </Link>

          {/* Center: Navigation shortcuts for desktop */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50 p-1.5 rounded-2xl border border-slate-200/60 text-sm font-bold">
            <Link
              to="/home"
              className="px-4 py-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-white transition-all"
            >
              Trang chủ
            </Link>
            <Link
              to="/units"
              className="px-4 py-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-white transition-all"
            >
              Các bài học
            </Link>
            <Link
              to="/report"
              className="px-4 py-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-white transition-all flex items-center gap-1.5"
            >
              <BarChart3 className="w-4 h-4" />
              Báo cáo
            </Link>
          </nav>

          {/* Right: Gamification Badges & Student Avatar */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-200/60 px-3 py-1.5 rounded-2xl text-orange-600 text-sm font-extrabold shadow-xs">
              <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />
              <span>{progressState.streakDays} ngày</span>
            </div>

            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/60 px-3 py-1.5 rounded-2xl text-amber-700 text-sm font-extrabold shadow-xs">
              <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400" />
              <span>{progressState.totalStars}</span>
            </div>

            <button
              onClick={onOpenSettings}
              className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              title="Cài đặt"
            >
              <Settings className="w-5 h-5" />
            </button>

            <Link
              to="/login"
              className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-2xl hover:bg-slate-100 transition-colors"
              title="Đổi tài khoản"
            >
              {user?.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-9 h-9 rounded-xl object-cover border-2 border-indigo-500 shadow-xs"
                />
              ) : (
                <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <User className="w-5 h-5" />
                </div>
              )}
              <span className="hidden lg:inline text-sm font-bold text-slate-700 max-w-[100px] truncate">
                {user?.name || 'Học sinh'}
              </span>
            </Link>
          </div>
        </div>
      </header>
    );
  }

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

  return (
    <div className="relative">
      {/* 1. TOP DARK NAVIGATION BAR */}
      <div className="bg-slate-900 text-slate-300 px-4 sm:px-8 py-2 text-xs font-bold flex justify-between items-center border-b border-slate-800 select-none">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span>
            Student: <span className="text-white">{user?.name || 'Bảo Nam'}</span>
          </span>
          <span>
            Class: <span className="text-white">{user?.grade || 'Lớp 3 / Grade 3'}</span>
          </span>
          <span>
            ⭐ Stars: <span className="text-amber-400">{progressState.totalStars}</span>
          </span>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-700 hover:border-slate-500 px-2.5 py-0.5 rounded text-[10px]"
        >
          LOGOUT
        </button>
      </div>

      {/* 2. SECOND HEADER ROW */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        {/* Left: Unit & Lesson details with Hamburger menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCurriculumOpen(true)}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
            aria-label="Open Curriculum Map"
          >
            <span className="text-2xl font-bold">☰</span>
          </button>
          <div>
            <h2 className="text-sm font-black text-rose-600 uppercase tracking-wider font-heading">
              {currentUnit?.title || 'UNIT'}: {currentUnit?.subtitle}
            </h2>
            <h3 className="text-xs font-bold text-slate-500">
              {currentLesson?.title || 'Lesson'}: {currentLesson?.vietnameseTitle}
            </h3>
          </div>
        </div>

        {/* Middle: Brand Slogan */}
        <div className="hidden lg:flex flex-col items-center text-center select-none">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded-md">LG</span>
            <span className="font-extrabold text-sm text-slate-800 font-heading">LeeGo English Explorer AI</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
            Learn with Joy – Grow with Confidence
          </span>
        </div>

        {/* Right: Gamification Badges */}
        <div className="flex items-center gap-2 select-none">
          <span className="flex items-center gap-1 bg-orange-50 border border-orange-200/50 px-3 py-1 rounded-xl text-orange-600 text-xs font-extrabold shadow-3xs">
            🔥 {progressState.streakDays} Day
          </span>
          <span className="flex items-center gap-1 bg-amber-50 border border-amber-200/50 px-3 py-1 rounded-xl text-amber-700 text-xs font-extrabold shadow-3xs">
            ⭐ {progressState.totalStars} Stars
          </span>
          <span className="flex items-center gap-1 bg-purple-50 border border-purple-200/50 px-3 py-1 rounded-xl text-purple-700 text-xs font-extrabold shadow-3xs">
            🏅 {progressState.achievements.filter((a) => a.isUnlocked).length} Badges
          </span>
        </div>
      </div>

      {/* 3. LESSON PROGRESS NAVIGATION */}
      {lessonId && (
        <div className="bg-slate-100 border-b border-slate-200 px-4 sm:px-8 py-3.5 flex justify-center items-center overflow-x-auto gap-2 scrollbar-none">
          {steps.map((step, idx) => {
            const isActive = activeSection === step.type;
            const isUnlocked = isSectionUnlocked(lessonId, step.type);
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
                      ? 'bg-rose-600 text-white font-black shadow-md scale-102 cursor-pointer'
                      : isUnlocked
                      ? 'bg-white text-slate-600 hover:bg-slate-50 font-bold border border-slate-200 cursor-pointer'
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

      {/* 4. CURRICULUM MAP DRAWER & OVERLAY */}
      <CurriculumMap
        isOpen={isCurriculumOpen}
        onClose={() => setIsCurriculumOpen(false)}
      />
    </div>
  );
};
