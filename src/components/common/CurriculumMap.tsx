import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCourse } from '../../context/CourseContext';
import { X, Play } from 'lucide-react';

interface CurriculumMapProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CurriculumMap: React.FC<CurriculumMapProps> = ({ isOpen, onClose }) => {
  const { units } = useCourse();
  const navigate = useNavigate();
  const { unitId, lessonId } = useParams<{ unitId: string; lessonId?: string }>();

  // Sync scroll lock for Curriculum Map drawer
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Drawer Container */}
      <div
        className={`fixed top-0 right-0 h-full w-[360px] max-w-[90vw] bg-slate-50 z-50 shadow-2xl flex flex-col border-l border-slate-200 transition-transform duration-300 ease-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Red Header */}
        <div className="bg-rose-600 text-white p-5 flex justify-between items-center shrink-0 shadow-sm">
          <div>
            <h4 className="font-heading font-black text-base flex items-center gap-2">
              📖 LeeGo Curriculum Map
            </h4>
            <p className="text-[11px] font-bold text-rose-100 mt-0.5">
              Cambridge Young Learners Syllabus
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-rose-700 transition-colors text-white cursor-pointer"
            aria-label="Close Map"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Curriculum Map Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {units.map((unit) => {
            if (unit.type === 'yle') return null;

            // Check-Up card view
            if (unit.type === 'checkup') {
              return (
                <div
                  key={unit.id}
                  className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-5 rounded-2xl border border-amber-400/50 shadow-xs space-y-3"
                >
                  <div>
                    <h5 className="font-heading font-black text-sm flex items-center gap-1.5">
                      ✨ {unit.subtitle.toUpperCase()}
                    </h5>
                    <p className="text-[11px] font-bold opacity-90 mt-1">
                      {unit.vietnameseTitle}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      navigate(`/units/${unit.id}/lessons/${unit.lessons[0]?.id}`);
                    }}
                    className="w-full bg-white text-orange-600 hover:bg-slate-100 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-orange-600" />
                    <span>Play Check-Up Now</span>
                  </button>
                </div>
              );
            }



            // Standard Unit Card
            const isUnitActive = unit.id === unitId;

            return (
              <div
                key={unit.id}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs"
              >
                {/* Unit Header */}
                <div
                  className={`p-4 flex justify-between items-center ${
                    isUnitActive
                      ? 'bg-rose-600 text-white'
                      : 'bg-slate-100 text-slate-800 border-b border-slate-200'
                  }`}
                >
                  <div>
                    <h5 className="font-heading font-black text-xs uppercase tracking-wide">
                      {unit.title}
                    </h5>
                    <p className={`text-[11px] font-black ${isUnitActive ? 'text-rose-100' : 'text-slate-500'}`}>
                      {unit.subtitle}
                    </p>
                  </div>
                  {isUnitActive && (
                    <span className="bg-yellow-400 text-rose-950 text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                      ACTIVE
                    </span>
                  )}
                </div>

                {/* Lessons Rows */}
                <div className="divide-y divide-slate-100">
                  {unit.lessons.map((l) => {
                    const isLessonActive = l.id === lessonId;
                    const lessonIndex = l.title.replace('Lesson ', '');

                    return (
                      <div
                        key={l.id}
                        onClick={() => {
                          onClose();
                          navigate(`/units/${unit.id}/lessons/${l.id}`);
                        }}
                        className={`p-3.5 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50 transition-colors ${
                          isLessonActive ? 'border-2 border-rose-500 bg-rose-50/20' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {/* Circular number badge */}
                          <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-xs ${
                              isLessonActive
                                ? 'bg-rose-600 text-white'
                                : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {isLessonActive && <span className="mr-0.5 text-[10px]">🔴</span>}
                            {lessonIndex}
                          </span>

                          <div>
                            <h6 className="font-extrabold text-xs text-slate-800 leading-snug">
                              {l.title}: {l.vietnameseTitle}
                            </h6>
                            <p className="text-[10px] font-semibold text-slate-400 mt-0.5 line-clamp-1">
                              {l.description}
                            </p>
                          </div>
                        </div>

                        <span className="text-slate-400 font-extrabold text-sm pr-1">›</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
