import React from 'react';
import { Unit } from '../../types/course';
import { Card } from '../common/Card';
import { BookOpen, MapPin, Apple, Building, Briefcase, Trophy, Smile, CloudSun, CheckCircle2, Award, Lock, ChevronRight } from 'lucide-react';

interface UnitCardProps {
  unit: Unit;
  completedLessons: number;
  totalLessons: number;
  isUnlocked: boolean;
  onClick: () => void;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  BookOpen,
  MapPin,
  Apple,
  Building,
  Briefcase,
  Trophy,
  Smile,
  CloudSun,
  CheckCircle2,
  Award,
};

export const UnitCard: React.FC<UnitCardProps> = ({
  unit,
  completedLessons,
  totalLessons,
  isUnlocked,
  onClick,
}) => {
  const IconComponent = iconMap[unit.iconName] || BookOpen;

  return (
    <Card
      onClick={isUnlocked ? onClick : undefined}
      hoverable={isUnlocked}
      className={`relative overflow-hidden transition-all ${
        !isUnlocked ? 'opacity-65 grayscale bg-slate-50' : ''
      }`}
    >
      {/* Top Banner Accent strip */}
      <div
        className="absolute top-0 left-0 right-0 h-3"
        style={{ backgroundColor: unit.colorHex }}
      />

      <div className="pt-2 space-y-4">
        {/* Header row: Unit Tag & Lock/Unlock Badge */}
        <div className="flex items-center justify-between">
          <span
            className="text-xs font-black font-heading px-3 py-1 rounded-xl text-white shadow-2xs"
            style={{ backgroundColor: unit.colorHex }}
          >
            {unit.title}
          </span>

          {isUnlocked ? (
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
              {completedLessons} / {totalLessons} bài
            </span>
          ) : (
            <div className="flex items-center gap-1 text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg">
              <Lock className="w-3.5 h-3.5" />
              Chưa mở
            </div>
          )}
        </div>

        {/* Title & Subtitle */}
        <div className="flex items-start gap-3">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md"
            style={{ backgroundColor: unit.colorHex }}
          >
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold font-heading text-slate-800 leading-snug">
              {unit.subtitle}
            </h3>
            <p className="text-xs font-semibold text-slate-500">
              🇻🇳 {unit.vietnameseTitle}
            </p>
          </div>
        </div>

        {/* Progress bar or Unlock action */}
        {isUnlocked ? (
          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-indigo-600 flex items-center gap-1">
              Bắt đầu học ngay
              <ChevronRight className="w-4 h-4" />
            </span>
            {completedLessons === totalLessons && totalLessons > 0 && (
              <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                Hoàn thành
              </span>
            )}
          </div>
        ) : (
          <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-slate-400">
            Cần hoàn thành các bài học trước
          </div>
        )}
      </div>
    </Card>
  );
};
