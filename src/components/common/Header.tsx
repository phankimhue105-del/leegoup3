import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';
import { Sparkles, Flame, Settings, User, BookOpen, BarChart3 } from 'lucide-react';

interface HeaderProps {
  onOpenSettings?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSettings }) => {
  const { user } = useAuth();
  const { progressState } = useProgress();
  const navigate = useNavigate();

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
          {/* Flame streak */}
          <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-200/60 px-3 py-1.5 rounded-2xl text-orange-600 text-sm font-extrabold shadow-xs">
            <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />
            <span>{progressState.streakDays} ngày</span>
          </div>

          {/* Stars badge */}
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/60 px-3 py-1.5 rounded-2xl text-amber-700 text-sm font-extrabold shadow-xs">
            <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400" />
            <span>{progressState.totalStars}</span>
          </div>

          {/* Settings button */}
          <button
            onClick={onOpenSettings}
            className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            title="Cài đặt"
          >
            <Settings className="w-5 h-5" />
          </button>

          {/* User profile avatar link */}
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
};
