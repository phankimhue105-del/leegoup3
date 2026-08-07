import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { Header } from '../components/common/Header';
import { BottomNav } from '../components/common/BottomNav';
import { Card } from '../components/common/Card';
import { StarRating } from '../components/common/StarRating';
import { Sparkles, Trophy, Clock, BookOpen, BarChart2, Award, ChevronLeft } from 'lucide-react';

interface LearningReportPageProps {
  onOpenSettings?: () => void;
}

export const LearningReportPage: React.FC<LearningReportPageProps> = ({ onOpenSettings }) => {
  const { user } = useAuth();
  const { progressState, getCourseCompletionPercentage } = useProgress();
  const navigate = useNavigate();

  const completionPct = getCourseCompletionPercentage();

  return (
    <div className="min-h-screen bg-slate-50 pb-24 md:pb-12">
      <Header onOpenSettings={onOpenSettings} />

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* Top Back Navigation */}
        <div>
          <button
            onClick={() => navigate('/home')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Quay lại Trang chủ</span>
          </button>
        </div>

        {/* Profile Summary Header Card */}
        <Card className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <img
              src={user?.avatarUrl}
              alt={user?.name}
              className="w-20 h-20 rounded-3xl object-cover border-4 border-white/30 shadow-md shrink-0"
            />
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                Báo cáo kết quả học tập
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-heading">
                {user?.name || 'Bảo Nam'}
              </h1>
              <p className="text-xs font-bold text-indigo-200">
                {user?.schoolName || 'Trường Tiểu Học Nguyễn Du'} • {user?.grade}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl text-center border border-white/20">
              <p className="text-2xl font-black font-heading">{progressState.totalStars}</p>
              <p className="text-xs font-bold text-indigo-200">Tổng Stars</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl text-center border border-white/20">
              <p className="text-2xl font-black font-heading">{completionPct}%</p>
              <p className="text-xs font-bold text-indigo-200">Tiến độ khoá</p>
            </div>
          </div>
        </Card>

        {/* Dashboard Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="p-5 space-y-1">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Bài đã học</span>
            </div>
            <p className="text-3xl font-black font-heading text-slate-800">12 / 16</p>
            <p className="text-xs font-semibold text-slate-400">Lesson completed</p>
          </Card>

          <Card className="p-5 space-y-1">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
              <BarChart2 className="w-4 h-4" />
              <span>Đ.B Thực hành trung bình</span>
            </div>
            <p className="text-3xl font-black font-heading text-slate-800">88%</p>
            <p className="text-xs font-semibold text-slate-400">Average Practice Score</p>
          </Card>

          <Card className="p-5 space-y-1">
            <div className="flex items-center gap-2 text-pink-600 font-bold text-xs uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Đ.B Phản xạ nói AI</span>
            </div>
            <p className="text-3xl font-black font-heading text-slate-800">85%</p>
            <p className="text-xs font-semibold text-slate-400">Average Speaking Score</p>
          </Card>

          <Card className="p-5 space-y-1">
            <div className="flex items-center gap-2 text-purple-600 font-bold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Thời gian tích luỹ</span>
            </div>
            <p className="text-3xl font-black font-heading text-slate-800">
              {progressState.totalTimeMinutes}m
            </p>
            <p className="text-xs font-semibold text-slate-400">Total Learning Time</p>
          </Card>
        </div>

        {/* Weekly Activity Bar Chart */}
        <Card className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-xl font-extrabold font-heading text-slate-800">
                Thời Gian Học Trong Tuần (Weekly Activity)
              </h3>
              <p className="text-xs font-semibold text-slate-500">
                Theo dõi phút luyện tập Tiếng Anh từ Thứ Hai đến Chủ Nhật
              </p>
            </div>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-xl">
              Tuần này
            </span>
          </div>

          {/* Bar Chart Visualizer */}
          <div className="h-48 flex items-end justify-between gap-2 sm:gap-6 pt-6 px-4">
            {progressState.weeklyActivity.map((act) => {
              const maxMin = 30;
              const heightPct = Math.min(100, Math.round((act.minutesStudied / maxMin) * 100));

              return (
                <div key={act.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <span className="text-xs font-extrabold text-indigo-600 font-heading">
                    {act.minutesStudied > 0 ? `${act.minutesStudied}m` : ''}
                  </span>
                  <div className="w-full max-w-[36px] bg-slate-100 rounded-2xl overflow-hidden h-full flex items-end">
                    <div
                      style={{ height: `${heightPct}%` }}
                      className="w-full bg-gradient-to-t from-indigo-500 to-purple-500 rounded-2xl transition-all duration-500"
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-500">{act.day}</span>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Badges & Achievements Grid */}
        <Card className="p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-extrabold font-heading text-slate-800">
              Danh Sách Huy Chương & Thành Tích (Achievements)
            </h3>
            <p className="text-xs font-semibold text-slate-500">
              Mở khóa các danh hiệu bằng cách chăm chỉ luyện tập hàng ngày
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {progressState.achievements.map((ach) => (
              <div
                key={ach.id}
                className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-sm text-slate-800">{ach.vietnameseTitle}</h4>
                  <p className="text-xs font-semibold text-slate-500 leading-tight">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>

      <BottomNav />
    </div>
  );
};
