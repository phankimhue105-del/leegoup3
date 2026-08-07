import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { useCourse } from '../context/CourseContext';
import { Header } from '../components/common/Header';
import { BottomNav } from '../components/common/BottomNav';
import { Card } from '../components/common/Card';
import { AppButton } from '../components/common/AppButton';
import { UnitCard } from '../components/units/UnitCard';
import { ProgressBar } from '../components/common/ProgressBar';
import { Sparkles, Flame, Play, Trophy, Award, BookOpen, Clock, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onOpenSettings?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenSettings }) => {
  const { user } = useAuth();
  const { progressState, getCourseCompletionPercentage } = useProgress();
  const { units } = useCourse();
  const navigate = useNavigate();

  const completionPct = getCourseCompletionPercentage();

  // Continue learning target (Unit 1 Lesson 1 by default)
  const continueUnitId = 'unit-1';
  const continueLessonId = 'u1-l1';

  return (
    <div className="min-h-screen bg-slate-50 pb-24 md:pb-12">
      <Header onOpenSettings={onOpenSettings} />

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* Welcome Student Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 z-10 text-center md:text-left">
            <span className="inline-block bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest text-indigo-100">
              {user?.grade || 'Lớp 3 / Grade 3'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight">
              Chào mừng, {user?.name || 'Bảo Nam'}! 👋
            </h2>
            <p className="text-sm sm:text-base font-semibold text-indigo-100 max-w-xl">
              Cùng khám phá kho từ vựng và bài thực hành Tiếng Anh Everybody Up 3 hôm nay nhé!
            </p>

            {/* Quick Continue Learning Button */}
            <div className="pt-2 flex justify-center md:justify-start">
              <AppButton
                onClick={() => navigate(`/units/${continueUnitId}`)}
                variant="secondary"
                size="lg"
                icon={<Play className="w-5 h-5 fill-white" />}
              >
                Tiếp tục bài học gần nhất
              </AppButton>
            </div>
          </div>

          {/* Progress gauge card inside banner */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-white w-full md:w-80 space-y-3 shrink-0">
            <div className="flex justify-between items-center text-xs font-bold text-indigo-100 uppercase tracking-wider">
              <span>Tổng tiến độ khoá học</span>
              <span>{completionPct}%</span>
            </div>
            <ProgressBar progress={completionPct} colorClass="bg-amber-400" heightClass="h-4" />
            <div className="flex justify-between text-xs font-bold text-indigo-200 pt-1">
              <span>{progressState.totalStars} Stars</span>
              <span>{progressState.totalTimeMinutes} phút học</span>
            </div>
          </div>
        </div>

        {/* Dashboard Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="flex items-center gap-4 p-5">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
              <Flame className="w-7 h-7 fill-orange-500" />
            </div>
            <div>
              <p className="text-2xl font-black font-heading text-slate-800">
                {progressState.streakDays} ngày
              </p>
              <p className="text-xs font-bold text-slate-500">Chuỗi học tập</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4 p-5">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-7 h-7 fill-amber-400" />
            </div>
            <div>
              <p className="text-2xl font-black font-heading text-slate-800">
                {progressState.totalStars} ngôi sao
              </p>
              <p className="text-xs font-bold text-slate-500">Thành tích thu thập</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4 p-5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-7 h-7" />
            </div>
            <div>
              <p className="text-2xl font-black font-heading text-slate-800">12 / 16</p>
              <p className="text-xs font-bold text-slate-500">Bài đã hoàn thành</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4 p-5">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <p className="text-2xl font-black font-heading text-slate-800">
                {progressState.totalTimeMinutes} phút
              </p>
              <p className="text-xs font-bold text-slate-500">Thời gian luyện tập</p>
            </div>
          </Card>
        </div>

        {/* Course Units Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-extrabold font-heading text-slate-800">
                Danh Sách Bài Học (Units)
              </h3>
              <p className="text-xs font-semibold text-slate-500">
                Toàn bộ 8 Units, Check Up và YLE Practice theo sách giáo khoa
              </p>
            </div>
            <AppButton
              onClick={() => navigate('/units')}
              variant="outline"
              size="sm"
              icon={<ChevronRight className="w-4 h-4" />}
            >
              Xem tất cả
            </AppButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.slice(0, 6).map((unit) => (
              <UnitCard
                key={unit.id}
                unit={unit}
                completedLessons={unit.lessons.length}
                totalLessons={unit.lessons.length}
                isUnlocked={true}
                onClick={() => navigate(`/units/${unit.id}`)}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity & Badges Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h4 className="text-lg font-extrabold font-heading text-slate-800 flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-600" />
                Hoạt Động Gần Đây (Recent Activity)
              </h4>
              <span className="text-xs font-bold text-slate-400">Placeholder Data</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                    U1
                  </div>
                  <div>
                    <p className="font-extrabold text-sm text-slate-800">Unit 1 - Lesson 1: First Day</p>
                    <p className="text-xs font-bold text-slate-500">Hoàn thành bài luyện nói • 3 Stars</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-400">Hôm nay</span>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                    U2
                  </div>
                  <div>
                    <p className="font-extrabold text-sm text-slate-800">Unit 2 - Lesson 1: Places</p>
                    <p className="text-xs font-bold text-slate-500">Thực hành trắc nghiệm • 85%</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-400">Hôm qua</span>
              </div>
            </div>
          </Card>

          {/* Badges preview */}
          <Card className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h4 className="text-lg font-extrabold font-heading text-slate-800 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                Huy Chương Đạt Được
              </h4>
              <button
                onClick={() => navigate('/report')}
                className="text-xs font-bold text-indigo-600 hover:underline"
              >
                Tất cả
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              {progressState.achievements.slice(0, 3).map((badge) => (
                <div
                  key={badge.id}
                  className="p-3 bg-amber-50/60 rounded-2xl border border-amber-200/60 space-y-1"
                >
                  <Trophy className="w-8 h-8 text-amber-500 mx-auto" />
                  <p className="text-xs font-extrabold text-amber-900 truncate">
                    {badge.vietnameseTitle}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};
