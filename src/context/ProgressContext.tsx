import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProgressState, LessonProgress } from '../types/progress';
import { progressService } from '../services/progressService';
import { LessonSectionType } from '../types/course';

interface ProgressContextType {
  progressState: UserProgressState;
  getLessonProgress: (lessonId: string) => LessonProgress | undefined;
  markSectionCompleted: (lessonId: string, section: LessonSectionType) => void;
  saveLessonResult: (lessonId: string, practiceScore: number, speakingScore: number) => void;
  isSectionUnlocked: (lessonId: string, section: LessonSectionType) => boolean;
  isLessonUnlocked: (lessonId: string) => boolean;
  getCourseCompletionPercentage: () => number;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progressState, setProgressState] = useState<UserProgressState>(() =>
    progressService.loadProgress()
  );

  useEffect(() => {
    progressService.saveProgress(progressState);
  }, [progressState]);

  const getLessonProgress = (lessonId: string): LessonProgress | undefined => {
    return progressState.lessonProgressMap[lessonId];
  };

  const markSectionCompleted = (lessonId: string, section: LessonSectionType) => {
    setProgressState((prev) => {
      const existing = prev.lessonProgressMap[lessonId] || {
        lessonId,
        completedSections: { vocabulary: false, 'model-pattern': false, practice: false, speaking: false },
        isCompleted: false,
        practiceScore: 0,
        speakingScore: 0,
        starsEarned: 0,
        lastStudiedAt: new Date().toISOString(),
      };

      const updatedSections = {
        ...existing.completedSections,
        [section]: true,
      };

      const isCompleted =
        updatedSections.vocabulary &&
        updatedSections['model-pattern'] &&
        updatedSections.practice &&
        updatedSections.speaking;

      return {
        ...prev,
        lessonProgressMap: {
          ...prev.lessonProgressMap,
          [lessonId]: {
            ...existing,
            completedSections: updatedSections,
            isCompleted,
            lastStudiedAt: new Date().toISOString(),
          },
        },
      };
    });
  };

  const saveLessonResult = (lessonId: string, practiceScore: number, speakingScore: number) => {
    const stars = progressService.calculateStars(practiceScore, speakingScore);

    setProgressState((prev) => {
      const existing = prev.lessonProgressMap[lessonId] || {
        lessonId,
        completedSections: { vocabulary: true, 'model-pattern': true, practice: true, speaking: true },
        isCompleted: true,
        practiceScore: 0,
        speakingScore: 0,
        starsEarned: 0,
        lastStudiedAt: new Date().toISOString(),
      };

      const starsDiff = Math.max(0, stars - existing.starsEarned);

      return {
        ...prev,
        totalStars: prev.totalStars + starsDiff,
        totalTimeMinutes: prev.totalTimeMinutes + 12,
        lessonProgressMap: {
          ...prev.lessonProgressMap,
          [lessonId]: {
            ...existing,
            practiceScore: Math.max(existing.practiceScore, practiceScore),
            speakingScore: Math.max(existing.speakingScore, speakingScore),
            starsEarned: Math.max(existing.starsEarned, stars),
            isCompleted: true,
            lastStudiedAt: new Date().toISOString(),
          },
        },
      };
    });
  };

  const isSectionUnlocked = (lessonId: string, section: LessonSectionType): boolean => {
    const prog = getLessonProgress(lessonId);
    return progressService.isSectionUnlocked(prog, section);
  };

  const isLessonUnlocked = (lessonId: string): boolean => {
    return progressService.isLessonUnlocked(lessonId, progressState.lessonProgressMap);
  };

  const getCourseCompletionPercentage = (): number => {
    const completedCount = Object.values(progressState.lessonProgressMap).filter((p: LessonProgress) => p.isCompleted).length;
    // Estimated 16 total lessons across course
    return Math.min(100, Math.round((completedCount / 16) * 100));
  };

  const resetProgress = () => {
    const defaultState = progressService.loadProgress();
    setProgressState(defaultState);
  };

  return (
    <ProgressContext.Provider
      value={{
        progressState,
        getLessonProgress,
        markSectionCompleted,
        saveLessonResult,
        isSectionUnlocked,
        isLessonUnlocked,
        getCourseCompletionPercentage,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
};
