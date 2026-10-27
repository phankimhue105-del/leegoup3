import courseDataRaw from '../data/courseData.json';
import practiceDict from '../data/practice.json';
import { CourseData, Unit, Lesson, PracticeQuestion } from '../types/course';

// Audited, pedagogical, text-based practice questions for Unit 1 (Lessons 1-4)
const UNIT1_PRACTICE_QUESTIONS: Record<string, PracticeQuestion[]> = {
  "u1-l1": [
    {
      "id": "u1l1-q1",
      "type": "multiple-choice",
      "questionText": "What is 'bỏng ngô' in English?",
      "options": [
        "gum",
        "chocolate",
        "popcorn"
      ],
      "correctAnswer": "popcorn",
      "vietnameseExplanation": "'Bỏng ngô' trong tiếng Anh là popcorn."
    },
    {
      "id": "u1l1-q2",
      "type": "multiple-choice",
      "questionText": "What is 'sô-cô-la' in English?",
      "options": [
        "chocolate",
        "peanuts",
        "soda"
      ],
      "correctAnswer": "chocolate",
      "vietnameseExplanation": "'Sô-cô-la' trong tiếng Anh là chocolate."
    },
    {
      "id": "u1l1-q3",
      "type": "multiple-choice",
      "questionText": "What does 'soda' mean in Vietnamese?",
      "options": [
        "Sữa tươi",
        "Nước ngọt có ga",
        "Nước ép táo"
      ],
      "correctAnswer": "Nước ngọt có ga",
      "vietnameseExplanation": "'soda' có nghĩa là nước ngọt có ga."
    },
    {
      "id": "u1l1-q4",
      "type": "listening",
      "questionText": "Listen and choose the word you hear:",
      "promptAudioUrl": "/audio/unit1/lesson1/gum.mp3",
      "options": [
        "peanuts",
        "potato chips",
        "gum"
      ],
      "correctAnswer": "gum",
      "vietnameseExplanation": "Từ phát âm là 'gum' (kẹo cao su)."
    },
    {
      "id": "u1l1-q5",
      "type": "matching",
      "questionText": "Match the words with their Vietnamese meanings:",
      "matchingPairs": [
        {
          "leftId": "l1",
          "leftText": "gum",
          "rightId": "r1",
          "rightText": "kẹo cao su"
        },
        {
          "leftId": "l2",
          "leftText": "peanuts",
          "rightId": "r2",
          "rightText": "đậu phộng"
        },
        {
          "leftId": "l3",
          "leftText": "popcorn",
          "rightId": "r3",
          "rightText": "bỏng ngô"
        }
      ],
      "correctAnswer": "gum-kẹo cao su, peanuts-đậu phộng, popcorn-bỏng ngô",
      "vietnameseExplanation": "Đã ghép nối chính xác các từ vựng với nghĩa tiếng Việt."
    },
    {
      "id": "u1l1-q6",
      "type": "multiple-choice",
      "questionText": "Complete the sentence: 'He _____ some potato chips.'",
      "options": [
        "want",
        "wants",
        "wanting"
      ],
      "correctAnswer": "wants",
      "vietnameseExplanation": "Chủ ngữ ngôi thứ ba số ít 'He' đi với động từ chia 'wants'."
    },
    {
      "id": "u1l1-q7",
      "type": "multiple-choice",
      "questionText": "Choose the correct answer for the dialogue: A: 'What do you want?' B: '_____'",
      "options": [
        "I want some peanuts.",
        "Yes, I do.",
        "No, thanks."
      ],
      "correctAnswer": "I want some peanuts.",
      "vietnameseExplanation": "Hỏi 'What do you want?' trả lời bằng 'I want some...'."
    },
    {
      "id": "u1l1-q8",
      "type": "multiple-choice",
      "questionText": "Choose the correct word: 'She doesn't want _____ soda.'",
      "options": [
        "some",
        "any",
        "a"
      ],
      "correctAnswer": "any",
      "vietnameseExplanation": "Dùng 'any' trong câu phủ định với 'doesn't want'."
    },
    {
      "id": "u1l1-q9",
      "type": "multiple-choice",
      "questionText": "Choose the correct sentence: \"Họ muốn một ít đậu phộng.\"",
      "options": [
        "They want some popcorn.",
        "They want some gum.",
        "They want some peanuts."
      ],
      "correctAnswer": "They want some peanuts.",
      "vietnameseExplanation": "'They want some peanuts.' có nghĩa là họ muốn một ít đậu phộng."
    },
    {
      "id": "u1l1-q10",
      "type": "multiple-choice",
      "questionText": "Mixed Review: Which sentence is grammatically correct?",
      "options": [
        "He wants some chocolate.",
        "He want some chocolate.",
        "He wanting some chocolate."
      ],
      "correctAnswer": "He wants some chocolate.",
      "vietnameseExplanation": "Chủ ngữ 'He' cần động từ thêm -s ('wants')."
    }
  ],
  "u1-l2": [
    {
      "id": "u1l2-q1",
      "type": "multiple-choice",
      "questionText": "What is 'củ cà rốt' in English?",
      "options": [
        "onion",
        "carrot",
        "cabbage"
      ],
      "correctAnswer": "carrot",
      "vietnameseExplanation": "'Carrot' có nghĩa là củ cà rốt."
    },
    {
      "id": "u1l2-q2",
      "type": "multiple-choice",
      "questionText": "What is 'bắp cải' in English?",
      "options": [
        "potato",
        "tomato",
        "cabbage"
      ],
      "correctAnswer": "cabbage",
      "vietnameseExplanation": "'Cabbage' có nghĩa là bắp cải."
    },
    {
      "id": "u1l2-q3",
      "type": "multiple-choice",
      "questionText": "What does 'onion' mean in Vietnamese?",
      "options": [
        "Củ hành tây",
        "Củ tỏi",
        "Bắp cải"
      ],
      "correctAnswer": "Củ hành tây",
      "vietnameseExplanation": "'onion' có nghĩa là củ hành tây."
    },
    {
      "id": "u1l2-q4",
      "type": "listening",
      "questionText": "Listen and choose the word you hear:",
      "promptAudioUrl": "/audio/unit1/lesson2/tomato.mp3",
      "options": [
        "potato",
        "pepper",
        "tomato"
      ],
      "correctAnswer": "tomato",
      "vietnameseExplanation": "Từ được đọc là 'tomato' (quả cà chua)."
    },
    {
      "id": "u1l2-q5",
      "type": "matching",
      "questionText": "Match the words with their meanings:",
      "matchingPairs": [
        {
          "leftId": "l1",
          "leftText": "pepper",
          "rightId": "r1",
          "rightText": "ớt chuông"
        },
        {
          "leftId": "l2",
          "leftText": "potato",
          "rightId": "r2",
          "rightText": "khoai tây"
        },
        {
          "leftId": "l3",
          "leftText": "tomato",
          "rightId": "r3",
          "rightText": "cà chua"
        }
      ],
      "correctAnswer": "pepper-ớt chuông, potato-khoai tây, tomato-cà chua",
      "vietnameseExplanation": "Đã ghép nối chính xác các từ vựng với nghĩa tiếng Việt."
    },
    {
      "id": "u1l2-q6",
      "type": "multiple-choice",
      "questionText": "Complete the sentence: 'Do you need _____ peppers?'",
      "options": [
        "some",
        "any",
        "a"
      ],
      "correctAnswer": "any",
      "vietnameseExplanation": "Dùng 'any' trong câu hỏi nghi vấn với danh từ số nhiều."
    },
    {
      "id": "u1l2-q7",
      "type": "multiple-choice",
      "questionText": "Choose the response: A: 'Do you need any carrots?' B: '_____' ",
      "options": [
        "Yes, we do.",
        "Yes, I am.",
        "No, it isn't."
      ],
      "correctAnswer": "Yes, we do.",
      "vietnameseExplanation": "Câu hỏi 'Do you need...?' trả lời bằng 'Yes, we do.' hoặc 'No, we don't.'."
    },
    {
      "id": "u1l2-q8",
      "type": "multiple-choice",
      "questionText": "Choose the correct word: 'What _____ they need?'",
      "options": [
        "does",
        "are",
        "do"
      ],
      "correctAnswer": "do",
      "vietnameseExplanation": "Chủ ngữ 'they' đi với trợ động từ 'do' trong câu hỏi."
    },
    {
      "id": "u1l2-q9",
      "type": "multiple-choice",
      "questionText": "Choose the correct sentence: \"Họ cần một ít khoai tây.\"",
      "options": [
        "They need some potatoes.",
        "They need some carrots.",
        "They need some onions."
      ],
      "correctAnswer": "They need some potatoes.",
      "vietnameseExplanation": "'They need some potatoes.' có nghĩa là họ cần một ít khoai tây."
    },
    {
      "id": "u1l2-q10",
      "type": "multiple-choice",
      "questionText": "Mixed Review: Choose the correct article: 'They need _____ carrot.'",
      "options": [
        "an",
        "a",
        "some"
      ],
      "correctAnswer": "a",
      "vietnameseExplanation": "'carrot' số ít bắt đầu bằng phụ âm nên đi với 'a'."
    }
  ],
  "u1-l3": [
    {
      "id": "u1l3-q1",
      "type": "multiple-choice",
      "questionText": "What is 'món súp' in English?",
      "options": [
        "soup",
        "salad",
        "spaghetti"
      ],
      "correctAnswer": "soup",
      "vietnameseExplanation": "'Soup' có nghĩa là món súp."
    },
    {
      "id": "u1l3-q2",
      "type": "multiple-choice",
      "questionText": "What is 'mỳ Ý' in English?",
      "options": [
        "soup",
        "salad",
        "spaghetti"
      ],
      "correctAnswer": "spaghetti",
      "vietnameseExplanation": "'Spaghetti' có nghĩa là món mỳ Ý."
    },
    {
      "id": "u1l3-q3",
      "type": "multiple-choice",
      "questionText": "What does 'healthy' mean?",
      "options": [
        "Ngon miệng",
        "Lành mạnh / Tốt cho sức khỏe",
        "Nóng hổi"
      ],
      "correctAnswer": "Lành mạnh / Tốt cho sức khỏe",
      "vietnameseExplanation": "'healthy' có nghĩa là lành mạnh, tốt cho sức khỏe."
    },
    {
      "id": "u1l3-q4",
      "type": "listening",
      "questionText": "Listen and choose what is asked for lunch:",
      "promptAudioUrl": "/audio/unit1/lesson3/lunch.mp3",
      "options": [
        "breakfast",
        "lunch",
        "dinner"
      ],
      "correctAnswer": "lunch",
      "vietnameseExplanation": "Băng thu âm nói về bữa trưa ('lunch')."
    },
    {
      "id": "u1l3-q5",
      "type": "matching",
      "questionText": "Match story words with meanings:",
      "matchingPairs": [
        {
          "leftId": "l1",
          "leftText": "lunch",
          "rightId": "r1",
          "rightText": "bữa ăn trưa"
        },
        {
          "leftId": "l2",
          "leftText": "healthy",
          "rightId": "r2",
          "rightText": "lành mạnh"
        },
        {
          "leftId": "l3",
          "leftText": "try",
          "rightId": "r3",
          "rightText": "thử"
        }
      ],
      "correctAnswer": "lunch-bữa ăn trưa, healthy-lành mạnh, try-thử",
      "vietnameseExplanation": "Đã nối đúng các từ vựng trong câu chuyện."
    },
    {
      "id": "u1l3-q6",
      "type": "multiple-choice",
      "questionText": "Complete the phrase: 'That _____ good!'",
      "options": [
        "sounds",
        "sound",
        "sounding"
      ],
      "correctAnswer": "sounds",
      "vietnameseExplanation": "Cụm từ chuẩn khen ngợi là 'That sounds good!'."
    },
    {
      "id": "u1l3-q7",
      "type": "multiple-choice",
      "questionText": "Choose the response: A: 'What's for lunch?' B: '_____' ",
      "options": [
        "I like blue.",
        "Yes, please.",
        "Soup and salad."
      ],
      "correctAnswer": "Soup and salad.",
      "vietnameseExplanation": "Trả lời tên các món ăn cho bữa trưa: 'Soup and salad.'."
    },
    {
      "id": "u1l3-q8",
      "type": "multiple-choice",
      "questionText": "Complete the value sentence: 'Be _____!'",
      "options": [
        "healthy",
        "angry",
        "sad"
      ],
      "correctAnswer": "healthy",
      "vietnameseExplanation": "Thông điệp sức khỏe trong bài học là 'Be healthy!'."
    },
    {
      "id": "u1l3-q9",
      "type": "multiple-choice",
      "questionText": "What is 'món rau trộn' in English?",
      "options": [
        "soup",
        "salad",
        "spaghetti"
      ],
      "correctAnswer": "salad",
      "vietnameseExplanation": "'Salad' có nghĩa là món rau trộn salad."
    },
    {
      "id": "u1l3-q10",
      "type": "multiple-choice",
      "questionText": "Mixed Review: What does the story encourage you to do?",
      "options": [
        "Don't eat it!",
        "Go away!",
        "Just try it!"
      ],
      "correctAnswer": "Just try it!",
      "vietnameseExplanation": "Tên câu chuyện là 'Just try it!' khuyên ta thử món mới."
    }
  ],
  "u1-l4": [
    {
      "id": "u1l4-q1",
      "type": "multiple-choice",
      "questionText": "What is 'món trứng ốp lết' in English?",
      "options": [
        "smoothie",
        "omelet",
        "milkshake"
      ],
      "correctAnswer": "omelet",
      "vietnameseExplanation": "'Omelet' có nghĩa là món trứng ốp lết."
    },
    {
      "id": "u1l4-q2",
      "type": "multiple-choice",
      "questionText": "What is 'món sinh tố' in English?",
      "options": [
        "smoothie",
        "fruit salad",
        "omelet"
      ],
      "correctAnswer": "smoothie",
      "vietnameseExplanation": "'Smoothie' có nghĩa là món sinh tố."
    },
    {
      "id": "u1l4-q3",
      "type": "multiple-choice",
      "questionText": "Choose the correct article: '_____ omelet'",
      "options": [
        "a",
        "some",
        "an"
      ],
      "correctAnswer": "an",
      "vietnameseExplanation": "'omelet' bắt đầu bằng nguyên âm 'o' nên dùng mạo từ 'an'."
    },
    {
      "id": "u1l4-q4",
      "type": "listening",
      "questionText": "Listen and choose the drink mentioned:",
      "promptAudioUrl": "/audio/unit1/lesson4/milkshake.mp3",
      "options": [
        "milkshake",
        "smoothie",
        "soda"
      ],
      "correctAnswer": "milkshake",
      "vietnameseExplanation": "Tên thức uống được đọc là 'milkshake' (sữa lắc)."
    },
    {
      "id": "u1l4-q5",
      "type": "matching",
      "questionText": "Match the cooking terms:",
      "matchingPairs": [
        {
          "leftId": "l1",
          "leftText": "omelet",
          "rightId": "r1",
          "rightText": "trứng rán"
        },
        {
          "leftId": "l2",
          "leftText": "smoothie",
          "rightId": "r2",
          "rightText": "sinh tố"
        },
        {
          "leftId": "l3",
          "leftText": "milkshake",
          "rightId": "r3",
          "rightText": "sữa lắc"
        }
      ],
      "correctAnswer": "omelet-trứng rán, smoothie-sinh tố, milkshake-sữa lắc",
      "vietnameseExplanation": "Các món ăn và nghĩa ghép đúng hoàn toàn."
    },
    {
      "id": "u1l4-q6",
      "type": "multiple-choice",
      "questionText": "Complete: 'I want to _____ a smoothie.'",
      "options": [
        "makes",
        "making",
        "make"
      ],
      "correctAnswer": "make",
      "vietnameseExplanation": "Sau 'want to' là động từ nguyên thể 'make'."
    },
    {
      "id": "u1l4-q7",
      "type": "multiple-choice",
      "questionText": "Choose the response: A: 'What do you want to make?' B: '_____' ",
      "options": [
        "I like fruit.",
        "I want to make fruit salad.",
        "Yes, I do."
      ],
      "correctAnswer": "I want to make fruit salad.",
      "vietnameseExplanation": "Trả lời đúng cấu trúc 'I want to make...': 'I want to make fruit salad.'."
    },
    {
      "id": "u1l4-q8",
      "type": "multiple-choice",
      "questionText": "Choose the correct form: 'She _____ to make a milkshake.'",
      "options": [
        "want",
        "wanting",
        "wants"
      ],
      "correctAnswer": "wants",
      "vietnameseExplanation": "Ngôi 'She' đi với động từ thêm -s ('wants')."
    },
    {
      "id": "u1l4-q9",
      "type": "multiple-choice",
      "questionText": "Choose the correct sentence: \"Chúng tôi muốn làm món salad hoa quả.\"",
      "options": [
        "We want to make fruit salad.",
        "We want to make an omelet.",
        "We want to make a smoothie."
      ],
      "correctAnswer": "We want to make fruit salad.",
      "vietnameseExplanation": "'We want to make fruit salad.' có nghĩa là chúng tôi muốn làm món salad hoa quả."
    },
    {
      "id": "u1l4-q10",
      "type": "multiple-choice",
      "questionText": "Mixed Review: Fill in the subject: '_____ want to make an omelet.'",
      "options": [
        "He",
        "I",
        "She"
      ],
      "correctAnswer": "I",
      "vietnameseExplanation": "Động từ 'want' ở dạng nguyên thể phù hợp với ngôi 'I'."
    }
  ]
};

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
   * Cleans, sanitizes, and enforces pedagogical rigor for practice questions.
   */
  private preprocessCourseData() {
    // 1. Authoritative Synchronization for Unit 1 Practice Questions from practiceDict (src/data/practice.json)
    const unit1 = this.courseData.units.find((u) => u.id === 'unit-1');
    if (unit1) {
      const pDict = practiceDict as Record<string, PracticeQuestion[]>;
      unit1.lessons.forEach((lesson) => {
        const dictKey = `unit1_lesson${lesson.id.replace('u1-l', '')}`;
        if (pDict[dictKey]) {
          lesson.practiceQuestions = [...pDict[dictKey]];
        } else if (UNIT1_PRACTICE_QUESTIONS[lesson.id]) {
          lesson.practiceQuestions = [...UNIT1_PRACTICE_QUESTIONS[lesson.id]];
        }
      });
    }

    // Direct synchronization for Unit 3 Practice Questions from practiceDict
    const unit3 = this.courseData.units.find((u) => u.id === 'unit-3');
    if (unit3) {
      const pDict = practiceDict as Record<string, PracticeQuestion[]>;
      unit3.lessons.forEach((lesson) => {
        const dictKey = `unit3_lesson${lesson.id.replace('u3-l', '')}`;
        if (pDict[dictKey]) {
          lesson.practiceQuestions = [...pDict[dictKey]];
        }
      });
    }

    // Direct synchronization for Unit 4 Practice Questions from practiceDict
    const unit4 = this.courseData.units.find((u) => u.id === 'unit-4');
    if (unit4) {
      const pDict = practiceDict as Record<string, PracticeQuestion[]>;
      unit4.lessons.forEach((lesson) => {
        const dictKey = `unit4_lesson${lesson.id.replace('u4-l', '')}`;
        if (pDict[dictKey]) {
          lesson.practiceQuestions = [...pDict[dictKey]];
        }
      });
    }

    // Direct synchronization for Unit 5 Practice Questions from practiceDict
    const unit5 = this.courseData.units.find((u) => u.id === 'unit-5');
    if (unit5) {
      const pDict = practiceDict as Record<string, PracticeQuestion[]>;
      unit5.lessons.forEach((lesson) => {
        const dictKey = `unit5_lesson${lesson.id.replace('u5-l', '')}`;
        if (pDict[dictKey]) {
          lesson.practiceQuestions = [...pDict[dictKey]];
        }
      });
    }

    // Direct synchronization for Unit 6 Practice Questions from practiceDict
    const unit6 = this.courseData.units.find((u) => u.id === 'unit-6');
    if (unit6) {
      const pDict = practiceDict as Record<string, PracticeQuestion[]>;
      unit6.lessons.forEach((lesson) => {
        const dictKey = `unit6_lesson${lesson.id.replace('u6-l', '')}`;
        if (pDict[dictKey]) {
          lesson.practiceQuestions = [...pDict[dictKey]];
        }
      });
    }

    // Direct synchronization for Unit 7 Practice Questions from practiceDict
    const unit7 = this.courseData.units.find((u) => u.id === 'unit-7');
    if (unit7) {
      const pDict = practiceDict as Record<string, PracticeQuestion[]>;
      unit7.lessons.forEach((lesson) => {
        const dictKey = `unit7_lesson${lesson.id.replace('u7-l', '')}`;
        if (pDict[dictKey]) {
          lesson.practiceQuestions = [...pDict[dictKey]];
        }
      });
    }

    // Direct synchronization for Unit 8 Practice Questions from practiceDict
    const unit8 = this.courseData.units.find((u) => u.id === 'unit-8');
    if (unit8) {
      const pDict = practiceDict as Record<string, PracticeQuestion[]>;
      unit8.lessons.forEach((lesson) => {
        const dictKey = `unit8_lesson${lesson.id.replace('u8-l', '')}`;
        if (pDict[dictKey]) {
          lesson.practiceQuestions = [...pDict[dictKey]];
        }
      });
    }

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
      // For Unit 1, Unit 3, Unit 4, Unit 5, Unit 6, Unit 7 and Unit 8, preserve the authoritative questions directly
      if (unit.id === 'unit-1' || unit.id === 'unit-3' || unit.id === 'unit-4' || unit.id === 'unit-5' || unit.id === 'unit-6' || unit.id === 'unit-7' || unit.id === 'unit-8') {
        return;
      }

      unit.lessons.forEach((lesson) => {
        if (lesson.practiceQuestions) {
          const vocabWords = (lesson.vocabulary || []).map((v) => v.word);
          const getVocabImageLocal = (word: string) => {
            const v = (lesson.vocabulary || []).find((x) => x.word.toLowerCase() === word.toLowerCase());
            return v ? v.image : '';
          };

          const processedQuestions = lesson.practiceQuestions.map((q, qIdx) => {
            // Normalise type mapping & prompts
            if (q.type === 'multiple-choice') {
              if (q.questionImage && unit.id === 'yle-practice') {
                q.questionText = "Look at the picture and choose the correct word:";
              } else if (q.questionImage && !q.questionText) {
                q.questionText = "Look at the picture and choose the correct word:";
              } else if (q.questionText && q.questionText.toLowerCase().includes('choose the picture')) {
                q.type = 'picture-select';
              }
            }

            if (q.type === 'picture-select') {
              if (
                q.questionText &&
                (q.questionText.toLowerCase().includes('picture') ||
                 q.questionText.toLowerCase().includes('sentence') ||
                 q.questionText.toLowerCase().includes('which person') ||
                 q.questionText.startsWith('Look at the picture') ||
                 q.id === 'u3l1-q1')
              ) {
                // Preserve explicit customized prompt
              } else {
                const vnMeaning = getVietnameseMeaning(q.correctAnswer as string);
                q.questionText = `Choose the picture for '${vnMeaning}':`;
              }
            } else if (q.type === 'listening') {
              q.questionText = "Listen and choose the word you hear:";
            } else if (q.type === 'matching') {
              q.questionText = "Match the words with their Vietnamese meanings:";
            }

            // Validate options and distractors for MC, image select, and listening
            if (q.type === 'picture-select') {
              const correct = q.correctAnswer;
              const correctStr = Array.isArray(correct) ? correct[0] : correct;

              // Keep options and optionImages strictly paired together
              let pairs: { opt: string; img: string }[] = [];
              if (q.options && q.optionImages && q.options.length === q.optionImages.length) {
                pairs = q.options.map((opt, i) => ({
                  opt,
                  img: q.optionImages![i] || getVocabImageLocal(opt) || getVocabImageGlobal(opt) || ''
                }));
              } else if (q.options) {
                pairs = q.options.map((opt) => ({
                  opt,
                  img: getVocabImageLocal(opt) || getVocabImageGlobal(opt) || ''
                }));
              }

              // Ensure correct answer is present
              if (!pairs.some((p) => p.opt.toLowerCase() === correctStr.toLowerCase())) {
                pairs.push({
                  opt: correctStr,
                  img: getVocabImageLocal(correctStr) || getVocabImageGlobal(correctStr) || ''
                });
              }

              // De-duplicate pairs by opt
              const seenOpts = new Set<string>();
              pairs = pairs.filter((p) => {
                const key = p.opt.toLowerCase();
                if (seenOpts.has(key)) return false;
                seenOpts.add(key);
                return true;
              });

              // Limit to 3 options for picture-select
              if (pairs.length > 3) {
                const correctPair = pairs.find((p) => p.opt.toLowerCase() === correctStr.toLowerCase())!;
                const otherPairs = pairs.filter((p) => p.opt.toLowerCase() !== correctStr.toLowerCase());
                pairs = [correctPair, ...otherPairs.slice(0, 2)];
              }

              // Shuffle pairs together so opt and img NEVER desync!
              if (q.id !== 'u3l1-q1' && q.id !== 'u3l3-q9' && q.id !== 'u3l4-q9') {
                pairs.sort(() => (qIdx % 2 === 0 ? 1 : -1) * 0.5);
              }

              q.options = pairs.map((p) => p.opt);
              q.optionImages = pairs.map((p) => {
                if (p.img && p.img.includes('/')) return p.img;
                const local = getVocabImageLocal(p.opt);
                if (local && local.includes('/')) return local;
                const global = getVocabImageGlobal(p.opt);
                if (global && global.includes('/')) return global;
                return '';
              });
            } else if (q.type === 'multiple-choice' || q.type === 'listening') {
              const correct = q.correctAnswer;
              const correctStr = Array.isArray(correct) ? correct[0] : correct;

              if (q.options && q.options.length >= 2) {
                if (!q.options.some((o) => o.toLowerCase() === correctStr.toLowerCase())) {
                  q.options.push(correctStr);
                }
                q.options = Array.from(new Set(q.options));

                const maxOpts = q.type === 'multiple-choice' ? q.options.length : 3;
                if (q.options.length > maxOpts) {
                  const others = q.options.filter((o) => o.toLowerCase() !== correctStr.toLowerCase());
                  q.options = [correctStr, ...others.slice(0, maxOpts - 1)];
                }
                if (q.id !== 'u3l1-q9') {
                  q.options = q.options.sort(() => (qIdx % 2 === 0 ? 1 : -1) * 0.5);
                }
              } else {
                let distractors = vocabWords.filter((w) => w.toLowerCase() !== correctStr.toLowerCase());

                if (distractors.length < 2) {
                  distractors = [...distractors, 'popcorn', 'gum', 'chocolate', 'peanuts', 'tomato', 'onion'].filter(
                    (w) => w.toLowerCase() !== correctStr.toLowerCase()
                  );
                }

                const uniqueDistractors: string[] = [];
                distractors.forEach((d) => {
                  if (!uniqueDistractors.some((x) => x.toLowerCase() === d.toLowerCase()) && uniqueDistractors.length < 2) {
                    uniqueDistractors.push(d);
                  }
                });

                const sortedOptions = [correctStr, ...uniqueDistractors].sort(() => (qIdx % 2 === 0 ? 1 : -1) * 0.5);
                q.options = sortedOptions;
              }
            }

            // Matching pairs validation
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

          // Strict Validation Layer
          lesson.practiceQuestions = processedQuestions.filter((q) => {
            if (!q.id || !q.type || !q.questionText) return false;

            if (['multiple-choice', 'picture-select', 'listening'].includes(q.type)) {
              if (!q.options || q.options.length < 2) return false;
              const correctStr = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;
              if (!q.options.some((o) => o.toLowerCase() === correctStr.toLowerCase())) return false;

              const isVietnamese = (text: string) => {
                const regex = /[áàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđ]/i;
                return regex.test(text);
              };

              const hasVi = q.options.some((o) => isVietnamese(o));
              const hasEn = q.options.some((o) => !isVietnamese(o) && /^[a-zA-Z\s,.'"-]+$/.test(o));
              if (hasVi && hasEn) {
                return false;
              }

              if (q.type === 'picture-select') {
                if (!q.optionImages || q.optionImages.length !== q.options.length) return false;
                for (const img of q.optionImages) {
                  if (
                    !img ||
                    img === 'vocab' ||
                    !img.includes('/') ||
                    img.toLowerCase().includes('unavailable') ||
                    img.toLowerCase().includes('placeholder')
                  ) {
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
