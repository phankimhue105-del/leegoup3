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
    // Build global lookup maps of English words to Vietnamese meanings and images
    const vocabToVietnamese: Record<string, string> = {};
    const vocabToImage: Record<string, string> = {};

    this.courseData.units.forEach((unit) => {
      unit.lessons.forEach((lesson) => {
        if (lesson.vocabulary) {
          lesson.vocabulary.forEach((v) => {
            if (v.word) {
              const wordKey = v.word.toLowerCase().trim();
              if (v.vietnameseMeaning) {
                vocabToVietnamese[wordKey] = v.vietnameseMeaning;
              }
              if (v.image) {
                vocabToImage[wordKey] = v.image;
              }
            }
          });
        }
      });
    });

    const getVietnameseMeaning = (word: string): string => {
      return vocabToVietnamese[word.toLowerCase().trim()] || word;
    };

    const getVocabImageGlobal = (word: string): string => {
      return vocabToImage[word.toLowerCase().trim()] || '';
    };

    this.courseData.units.forEach((unit) => {
      unit.lessons.forEach((lesson) => {
        if (lesson.practiceQuestions) {
          const vocabWords = (lesson.vocabulary || []).map(v => v.word);
          const getVocabImageLocal = (word: string) => {
            const v = (lesson.vocabulary || []).find(x => x.word.toLowerCase() === word.toLowerCase());
            return v ? v.image : '';
          };

          const processedQuestions = lesson.practiceQuestions.map((q, qIdx) => {
            // 1. Normalise type mapping & prompts
            if (q.type === 'multiple-choice') {
              if (q.questionImage) {
                q.questionText = "Look at the picture and choose the correct word:";
              } else if (q.questionText.toLowerCase().includes('choose the picture')) {
                q.type = 'picture-select';
              }
            }

            if (q.type === 'picture-select') {
              const vnMeaning = getVietnameseMeaning(q.correctAnswer as string);
              q.questionText = `Choose the picture for '${vnMeaning}':`;
            } else if (q.type === 'listening') {
              q.questionText = "Listen and choose the word you hear:";
            } else if (q.type === 'matching') {
              q.questionText = "Match the words with their Vietnamese meanings:";
            }

            // 2. Validate options and distractors for MC, image select, and listening
            if (q.type === 'multiple-choice' || q.type === 'picture-select' || q.type === 'listening') {
              const correct = q.correctAnswer;
              const correctStr = Array.isArray(correct) ? correct[0] : correct;

              // If options are already defined in the JSON and valid, preserve and clean them
              if (q.options && q.options.length >= 2) {
                // Ensure options contain the correct answer
                if (!q.options.some(o => o.toLowerCase() === correctStr.toLowerCase())) {
                  q.options.push(correctStr);
                }
                q.options = Array.from(new Set(q.options));
                
                // Slice options to exact count
                const maxOpts = q.type === 'multiple-choice' ? q.options.length : 3;
                if (q.options.length > maxOpts) {
                  const others = q.options.filter(o => o.toLowerCase() !== correctStr.toLowerCase());
                  q.options = [correctStr, ...others.slice(0, maxOpts - 1)];
                }
                // Shuffle
                q.options = q.options.sort(() => (qIdx % 2 === 0 ? 1 : -1) * 0.5);
              } else {
                // FALLBACK ONLY: Vocabulary-based question options generation if missing
                let distractors = vocabWords.filter(w => w.toLowerCase() !== correctStr.toLowerCase());

                // If lesson contains insufficient vocabulary items, insert standard defaults
                if (distractors.length < 2) {
                  distractors = [...distractors, 'popcorn', 'gum', 'chocolate', 'peanuts', 'tomato', 'onion'].filter(
                    w => w.toLowerCase() !== correctStr.toLowerCase()
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
                const sortedOptions = [correctStr, ...uniqueDistractors].sort(() => (qIdx % 2 === 0 ? 1 : -1) * 0.5);
                q.options = sortedOptions;
              }

              // Pair correct options to optionImages for image-select questions
              if (q.type === 'picture-select') {
                const needsImagesResolving = !q.optionImages || 
                  q.optionImages.length !== q.options.length || 
                  q.optionImages.some(img => !img || img === 'vocab' || !img.includes('/'));

                if (needsImagesResolving) {
                  q.optionImages = q.options.map(opt => {
                    // Try local lesson vocab image first, then global map, then empty
                    const localImg = getVocabImageLocal(opt);
                    if (localImg && localImg.includes('/')) return localImg;
                    const globalImg = getVocabImageGlobal(opt);
                    if (globalImg && globalImg.includes('/')) return globalImg;
                    return '';
                  });
                }
              }
            }

            // 3. Structurally validate matching question pairs
            if (q.type === 'matching') {
              if (!q.matchingPairs || q.matchingPairs.length === 0) {
                q.matchingPairs = (lesson.vocabulary || []).slice(0, 3).map((v) => ({
                  leftId: v.id,
                  leftText: v.word,
                  rightId: v.id,
                  rightText: v.vietnameseMeaning
                }));
              }
            }

            return q;
          });

          // 4. Strict Validation Layer (Filter out invalid questions)
          lesson.practiceQuestions = processedQuestions.filter((q) => {
            if (!q.id || !q.type || !q.questionText) return false;

            if (['multiple-choice', 'picture-select', 'listening'].includes(q.type)) {
              if (!q.options || q.options.length < 2) return false;
              const correctStr = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;
              if (!q.options.some(o => o.toLowerCase() === correctStr.toLowerCase())) return false;

              // Validate no mixed languages in multiple choice options
              const isVietnamese = (text: string) => {
                const regex = /[áàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđ]/i;
                return regex.test(text);
              };

              const hasVi = q.options.some(o => isVietnamese(o));
              const hasEn = q.options.some(o => !isVietnamese(o) && /^[a-zA-Z\s,.'"-]+$/.test(o));
              if (hasVi && hasEn) {
                // Disallow mixed languages
                return false;
              }

              // Validate image select questions: no broken or placeholder images
              if (q.type === 'picture-select') {
                if (!q.optionImages || q.optionImages.length !== q.options.length) return false;
                for (const img of q.optionImages) {
                  if (!img || img === 'vocab' || !img.includes('/') || img.toLowerCase().includes('unavailable') || img.toLowerCase().includes('placeholder')) {
                    return false;
                  }
                }
              }
            }

            return true;
          });
        }
      });
    });
  }
}

export const courseService = new CourseService();
