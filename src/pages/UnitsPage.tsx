import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useProgress } from '../context/ProgressContext';
import { Header } from '../components/common/Header';
import { BottomNav } from '../components/common/BottomNav';
import { UnitCard } from '../components/units/UnitCard';
import { BookOpen, CheckCircle2, Award, Filter } from 'lucide-react';

interface UnitsPageProps {
  onOpenSettings?: () => void;
}

export const UnitsPage: React.FC<UnitsPageProps> = ({ onOpenSettings }) => {
  const { units } = useCourse();
  const { isLessonUnlocked } = useProgress();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'all' | 'standard' | 'checkup' | 'yle'>('all');

  const filteredUnits = units.filter((u) => {
    if (activeTab === 'all') return true;
    return u.type === activeTab;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-24 md:pb-12">
      <Header onOpenSettings={onOpenSettings} />

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* Header Title Banner */}
        <div className="space-y-2">
          <h2 className="text-3xl font-black font-heading text-slate-800">
            Chương Trình Học Everybody Up 3
          </h2>
          <p className="text-sm font-semibold text-slate-500">
            Chọn chủ đề bài học để xem chi tiết từ vựng, mẫu câu và bài tập thực hành.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Tất cả chủ đề ({units.length})
          </button>

          <button
            onClick={() => setActiveTab('standard')}
            className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'standard'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Units 1 – 8
          </button>

          <button
            onClick={() => setActiveTab('checkup')}
            className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'checkup'
                ? 'bg-rose-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            Check Up 1 – 4
          </button>

          <button
            onClick={() => setActiveTab('yle')}
            className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'yle'
                ? 'bg-teal-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Award className="w-4 h-4" />
            YLE Practice Test
          </button>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUnits.map((unit) => (
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
      </main>

      <BottomNav />
    </div>
  );
};
