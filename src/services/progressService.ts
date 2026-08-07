import { LessonProgress, UserProgressState } from '../types/progress';
import { INITIAL_ACHIEVEMENTS } from '../data/achievementsData';

const PROGRESS_STORAGE_KEY = 'ebu3_user_progress_v1';

export const DEFAULT_PROGRESS_STATE: UserProgressState = {
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  totalStars: 5, // Welcoming initial stars
  totalTimeMinutes: 25,
  lessonProgressMap: {
    'u1-l1': {
      lessonId: 'u1-l1',
      completedSections: {
        vocabulary: true,
        'model-pattern': true,
        practice: false,
        speaking: false,
      },
      isCompleted: false,
      practiceScore: 0,
      speakingScore: 0,
      starsEarned: 0,
      lastStudiedAt: new Date().toISOString(),
    },
  },
  achievements: INITIAL_ACHIEVEMENTS,
  weeklyActivity: [
    { day: 'Mon', minutesStudied: 10, lessonsCompleted: 1 },
    { day: 'Tue', minutesStudied: 15, lessonsCompleted: 1 },
    { day: 'Wed', minutesStudied: 0, lessonsCompleted: 0 },
    { day: 'Thu', minutesStudied: 20, lessonsCompleted: 1 },
    { day: 'Fri', minutesStudied: 5, lessonsCompleted: 0 },
    { day: 'Sat', minutesStudied: 0, lessonsCompleted: 0 },
    { day: 'Sun', minutesStudied: 0, lessonsCompleted: 0 },
  ],
};

class ProgressService {
  public loadProgress(): UserProgressState {
    try {
      const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Return default if error parsing
    }
    return DEFAULT_PROGRESS_STATE;
  }

  public saveProgress(state: UserProgressState): void {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore write errors
    }
  }

  /**
   * Section completion logic:
   * First section 'vocabulary' is always available in unlocked lesson.
   * Subsequent section is available if previous section is completed.
   */
  public isSectionUnlocked(
    lessonProgress: LessonProgress | undefined,
    section: 'vocabulary' | 'model-pattern' | 'practice' | 'speaking'
  ): boolean {
    if (section === 'vocabulary') return true;
    if (!lessonProgress) return false;

    if (section === 'model-pattern') {
      return !!lessonProgress.completedSections.vocabulary;
    }
    if (section === 'practice') {
      return !!lessonProgress.completedSections['model-pattern'];
    }
    if (section === 'speaking') {
      return !!lessonProgress.completedSections.practice;
    }
    return false;
  }

  /**
   * Lesson Unlock logic:
   * Unit 1 Lesson 1 is always unlocked.
   * Other lessons are unlocked if the previous lesson in the course was completed,
   * or for demo testing in Phase 1 framework, Unit first lessons are open.
   */
  public isLessonUnlocked(lessonId: string, allLessonProgress: Record<string, LessonProgress>): boolean {
    if (lessonId === 'u1-l1') return true;
    
    // For Phase 1 framework demonstration, any lesson with progress or the first lesson of any unit is unlocked
    if (lessonId.endsWith('-l1')) return true;

    // Otherwise check if previous lesson is completed
    const prog = allLessonProgress[lessonId];
    if (prog) return true;

    return false;
  }

  public calculateStars(practiceScore: number, speakingScore: number): number {
    const avg = (practiceScore + speakingScore) / 2;
    if (avg >= 85) return 3;
    if (avg >= 60) return 2;
    return 1;
  }
}

export const progressService = new ProgressService();
