import React, { createContext, useContext, useState, useEffect } from 'react';
import { CourseData, Unit, Lesson } from '../types/course';
import { courseService } from '../services/courseService';

interface CourseContextType {
  courseData: CourseData;
  isLoading: boolean;
  error: string | null;
  units: Unit[];
  getUnitById: (unitId: string) => Unit | undefined;
  getLessonById: (unitId: string, lessonId: string) => { unit: Unit; lesson: Lesson } | undefined;
  getNextLesson: (unitId: string, lessonId: string) => { unitId: string; lessonId: string } | undefined;
  reloadCourseData: () => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [courseData, setCourseData] = useState<CourseData>(() => courseService.getCourseData());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const reloadCourseData = () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = courseService.getCourseData();
      setCourseData(data);
    } catch (err) {
      setError('Failed to load course schema. Please check network/JSON file.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    reloadCourseData();
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courseData,
        isLoading,
        error,
        units: courseData.units,
        getUnitById: (id) => courseService.getUnitById(id),
        getLessonById: (uId, lId) => courseService.getLessonById(uId, lId),
        getNextLesson: (uId, lId) => courseService.getNextLesson(uId, lId),
        reloadCourseData,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const ctx = useContext(CourseContext);
  if (!ctx) throw new Error('useCourse must be used within CourseProvider');
  return ctx;
};
