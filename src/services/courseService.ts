import courseDataRaw from '../data/courseData.json';
import { CourseData, Unit, Lesson } from '../types/course';

class CourseService {
  private courseData: CourseData;

  constructor() {
    this.courseData = courseDataRaw as CourseData;
  }

  public getCourseData(): CourseData {
    return this.courseData;
  }

  public getAllUnits(): Unit[] {
    return this.courseData.units;
  }

  public getUnitById(unitId: string): Unit | undefined {
    return this.courseData.units.find((u) => u.id === unitId);
  }

  public getLessonById(unitId: string, lessonId: string): { unit: Unit; lesson: Lesson } | undefined {
    const unit = this.getUnitById(unitId);
    if (!unit) return undefined;
    const lesson = unit.lessons.find((l) => l.id === lessonId);
    if (!lesson) return undefined;
    return { unit, lesson };
  }

  public getNextLesson(unitId: string, currentLessonId: string): { unitId: string; lessonId: string } | undefined {
    const unitIndex = this.courseData.units.findIndex((u) => u.id === unitId);
    if (unitIndex === -1) return undefined;

    const unit = this.courseData.units[unitIndex];
    const lessonIndex = unit.lessons.findIndex((l) => l.id === currentLessonId);

    // If next lesson in same unit
    if (lessonIndex !== -1 && lessonIndex < unit.lessons.length - 1) {
      return { unitId: unit.id, lessonId: unit.lessons[lessonIndex + 1].id };
    }

    // Next unit's first lesson
    if (unitIndex < this.courseData.units.length - 1) {
      const nextUnit = this.courseData.units[unitIndex + 1];
      if (nextUnit.lessons.length > 0) {
        return { unitId: nextUnit.id, lessonId: nextUnit.lessons[0].id };
      }
    }

    return undefined;
  }
}

export const courseService = new CourseService();
