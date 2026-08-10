import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useProgress } from '../context/ProgressContext';
import { Header } from '../components/common/Header';
import { BottomNav } from '../components/common/BottomNav';
import { Card } from '../components/common/Card';
import { AppImage } from '../components/common/AppImage';
import { BookOpen, CheckCircle2, Award, Play } from 'lucide-react';

interface UnitsPageProps {
  onOpenSettings?: () => void;
}

export const UnitsPage: React.FC<UnitsPageProps> = ({ onOpenSettings }) => {
  const { units } = useCourse();
  const { getLessonProgress } = useProgress();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'all' | 'standard' | 'checkup'>('all');

  const filteredUnits = units.filter((u) => {
    if (u.type === 'yle') return false;
    if (activeTab === 'all') return true;
    return u.type === activeTab;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-24 md:pb-12">
      <Header onOpenSettings={onOpenSettings} />

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-10">
        {/* Header Title Banner */}
        <div className="space-y-2 text-center sm:text-left">
          <h2 className="text-3xl font-black font-heading text-slate-800">
            Everybody Up 3: Units & Lessons
          </h2>
          <p className="text-sm font-semibold text-slate-500">
            Choose any lesson you want to learn. You can study in any order.
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


        </div>

        {/* Units & Lessons List */}
        <div className="space-y-12">
          {filteredUnits.map((unit) => {
            return (
              <div 
                key={unit.id} 
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-xs space-y-6"
              >
                {/* Unit Header Section */}
                <div 
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span 
                        className="text-xs font-black font-heading px-3 py-1 rounded-xl text-white shadow-2xs uppercase tracking-wide"
                        style={{ backgroundColor: unit.colorHex }}
                      >
                        {unit.title}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-800 leading-tight">
                        {unit.subtitle}
                      </h3>
                    </div>
                    <p className="text-sm font-bold text-slate-500">
                      🇻🇳 {unit.vietnameseTitle}
                    </p>
                  </div>
                  
                  <span className="text-xs font-black text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl shrink-0 self-start sm:self-center">
                    {unit.lessons.length} {unit.lessons.length === 1 ? 'Lesson' : 'Lessons'}
                  </span>
                </div>

                {/* Lessons Grid (arranged horizontally where width allows, responsive column layout) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {unit.lessons.map((lesson) => {
                    const lessonProg = getLessonProgress(lesson.id);
                    const isCompleted = !!lessonProg?.isCompleted;
                    const stars = lessonProg?.starsEarned || 0;
                    
                    // Resolve illustration dynamically using the first vocabulary item or model pattern
                    const illustration = lesson.vocabulary?.[0]?.image || lesson.modelPattern?.image || '';

                    return (
                      <Card
                        key={lesson.id}
                        onClick={() => navigate(`/units/${unit.id}/lessons/${lesson.id}`)}
                        hoverable
                        className="flex flex-col justify-between h-full hover:border-indigo-200 transition-all border border-slate-100 bg-slate-50/50 p-4"
                      >
                        <div className="space-y-4">
                          {/* Card Header: Lesson indicator & Progress status */}
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-black font-heading text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-lg uppercase tracking-wider">
                              {lesson.title}
                            </span>

                            {isCompleted ? (
                              <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                                ✓ Done
                              </span>
                            ) : stars > 0 ? (
                              <span className="text-xs font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                                ⭐ {stars} Star{stars === 1 ? '' : 's'}
                              </span>
                            ) : null}
                          </div>

                          {/* Card Image Illustration */}
                          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200/50 bg-white">
                            <AppImage
                              src={illustration}
                              alt={lesson.vietnameseTitle}
                              className="w-full h-full object-cover"
                              fallbackText={lesson.vietnameseTitle}
                            />
                          </div>

                          {/* Card Title & Desc */}
                          <div>
                            <h4 className="font-extrabold text-base text-slate-800 leading-snug">
                              {lesson.vietnameseTitle}
                            </h4>
                            <p className="text-xs font-semibold text-slate-500 mt-1 line-clamp-2">
                              {lesson.description || 'Vocabulary & Practice'}
                            </p>
                          </div>
                        </div>

                        {/* Start Action Button */}
                        <div className="pt-4 mt-auto">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/units/${unit.id}/lessons/${lesson.id}`);
                            }}
                            className={`w-full py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors ${
                              isCompleted
                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                            }`}
                          >
                            <Play className="w-3.5 h-3.5 fill-white" />
                            <span>START</span>
                          </button>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};
