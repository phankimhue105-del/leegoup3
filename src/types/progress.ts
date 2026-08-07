/**
 * Progress & Learning State Interfaces
 */

export interface LessonProgress {
  lessonId: string;
  completedSections: {
    vocabulary: boolean;
    'model-pattern': boolean;
    practice: boolean;
    speaking: boolean;
  };
  isCompleted: boolean;
  practiceScore: number; // 0 - 100
  speakingScore: number; // 0 - 100
  starsEarned: number;   // 1 - 3
  lastStudiedAt: string;
}

export interface UnitProgress {
  unitId: string;
  completedLessonsCount: number;
  totalLessonsCount: number;
  isCompleted: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  vietnameseTitle: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  isUnlocked: boolean;
}

export interface WeeklyActivity {
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  minutesStudied: number;
  lessonsCompleted: number;
}

export interface UserProgressState {
  streakDays: number;
  lastActiveDate: string;
  totalStars: number;
  totalTimeMinutes: number;
  lessonProgressMap: Record<string, LessonProgress>;
  achievements: Achievement[];
  weeklyActivity: WeeklyActivity[];
}
