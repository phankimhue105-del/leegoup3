import React from 'react';
import { LessonSectionType } from '../../types/course';
import { Card } from '../common/Card';
import { BookOpen, MessageSquare, BrainCircuit, Mic, CheckCircle2, Lock, ArrowRight } from 'lucide-react';

interface LessonFlowStepProps {
  type: LessonSectionType;
  title: string;
  vietnameseTitle: string;
  description: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const sectionConfig = {
  vocabulary: {
    icon: BookOpen,
    color: 'from-indigo-500 to-indigo-600',
    bgBadge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  'model-pattern': {
    icon: MessageSquare,
    color: 'from-amber-500 to-amber-600',
    bgBadge: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  practice: {
    icon: BrainCircuit,
    color: 'from-emerald-500 to-emerald-600',
    bgBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  speaking: {
    icon: Mic,
    color: 'from-pink-500 to-pink-600',
    bgBadge: 'bg-pink-50 text-pink-700 border-pink-200',
  },
};

export const LessonFlowStep: React.FC<LessonFlowStepProps> = ({
  type,
  title,
  vietnameseTitle,
  description,
  isUnlocked,
  isCompleted,
  onClick,
}) => {
  const cfg = sectionConfig[type];
  const Icon = cfg.icon;

  return (
    <Card
      onClick={isUnlocked ? onClick : undefined}
      hoverable={isUnlocked}
      className={`relative overflow-hidden p-6 sm:p-8 transition-all ${
        !isUnlocked ? 'opacity-60 bg-slate-50' : 'bg-white'
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left: Icon & Description */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-3xl bg-gradient-to-br ${cfg.color} flex items-center justify-center text-white shrink-0 shadow-md`}
          >
            <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-800">
                {title}
              </h3>
              {isCompleted && (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-100" />
              )}
            </div>
            <p className="text-sm font-bold text-slate-600">🇻🇳 {vietnameseTitle}</p>
            <p className="text-xs font-medium text-slate-400 hidden sm:block">
              {description}
            </p>
          </div>
        </div>

        {/* Right: Status Action */}
        <div>
          {isUnlocked ? (
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-xs cursor-pointer">
              <ArrowRight className="w-6 h-6" />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
