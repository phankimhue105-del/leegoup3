import courseDataRaw from '../data/courseData.json';
import { CourseData, Unit, Lesson } from '../types/course';

class CourseService {
  private courseData: CourseData;

  constructor() {
    this.courseData = courseDataRaw as CourseData;
    this.preprocessCourseData();
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

  /**
   * Cleans, sanitizes, and shuffles practice questions on-the-fly to enforce pedagogical rigor.
   */
  private preprocessCourseData() {
    this.courseData.units.forEach((unit) => {
      unit.lessons.forEach((lesson) => {
        if (lesson.practiceQuestions) {
          lesson.practiceQuestions = lesson.practiceQuestions.map((q, qIdx) => {
            const vocabWords = (lesson.vocabulary || []).map(v => v.word);
            const getVocabImage = (word: string) => {
              const v = (lesson.vocabulary || []).find(x => x.word.toLowerCase() === word.toLowerCase());
              return v ? v.image : word;
            };

            // 1. Normalise type mapping & prompts
            if (q.type === 'multiple-choice') {
              if (q.questionImage) {
                q.questionText = "Look at the picture and choose the correct word:";
              } else if (q.questionText.toLowerCase().includes('picture')) {
                q.type = 'picture-select';
              }
            }

            if (q.type === 'picture-select') {
              q.questionText = `Choose the picture for '${q.correctAnswer}':`;
            } else if (q.type === 'listening') {
              q.questionText = "Listen and choose the word you hear:";
            } else if (q.type === 'matching') {
              q.questionText = "Match the words with their Vietnamese meanings:";
            }

            // 2. Validate options and distractors for MC, image select, and listening
            if (q.type === 'multiple-choice' || q.type === 'picture-select' || q.type === 'listening') {
              const correct = q.correctAnswer;
              
              // Detect dialogue and grammar sentence questions
              const isGrammarOrDialogue = q.questionText.toLowerCase().includes('grammatically correct') || 
                                          q.questionText.toLowerCase().includes('dialogue');
              const isSentenceAnswer = correct.includes(' ') && correct.trim().split(/\s+/).length > 2;
              const shouldPreserveOptions = isGrammarOrDialogue || isSentenceAnswer;

              if (shouldPreserveOptions && q.options && q.options.length > 0) {
                // Ensure options contain the correct answer
                if (!q.options.some(o => o.toLowerCase() === correct.toLowerCase())) {
                  q.options.push(correct);
                }
                const uniqueOptions = Array.from(new Set(q.options));
                // Slice exactly 3 options if there are more (ensuring correct answer is included)
                if (uniqueOptions.length > 3) {
                  const others = uniqueOptions.filter(o => o.toLowerCase() !== correct.toLowerCase());
                  q.options = [correct, others[0], others[1]];
                } else {
                  q.options = uniqueOptions;
                }
                // Shuffle
                q.options = q.options.sort(() => (qIdx % 2 === 0 ? 1 : -1) * 0.5);
              } else {
                // Vocabulary-based question options generation
                let distractors = vocabWords.filter(w => w.toLowerCase() !== correct.toLowerCase());

                // If lesson contains insufficient vocabulary items, insert standard defaults
                if (distractors.length < 2) {
                  distractors = [...distractors, 'popcorn', 'gum', 'chocolate', 'peanuts', 'tomato', 'onion'].filter(
                    w => w.toLowerCase() !== correct.toLowerCase()
                  );
                }

                // De-duplicate distractors
                const uniqueDistractors: string[] = [];
                distractors.forEach((d) => {
                  if (!uniqueDistractors.some(x => x.toLowerCase() === d.toLowerCase()) && uniqueDistractors.length < 2) {
                    uniqueDistractors.push(d);
                  }
                });

                // Construct the clean options array
                const sortedOptions = [correct, ...uniqueDistractors].sort(() => (qIdx % 2 === 0 ? 1 : -1) * 0.5);
                q.options = sortedOptions;
              }

              // Pair correct options to optionImages for image-select questions
              if (q.type === 'picture-select') {
                q.optionImages = q.options.map(opt => getVocabImage(opt));
              }
            }

            // 3. Structurally validate matching question pairs
            if (q.type === 'matching') {
              if (!q.matchingPairs || q.matchingPairs.length === 0) {
                q.matchingPairs = (lesson.vocabulary || []).slice(0, 3).map((v) => ({
                  leftText: v.word,
                  rightText: v.vietnameseMeaning
                }));
              }
            }

            return q;
          });
        }
      });
    });
  }
}

export const courseService = new CourseService();
