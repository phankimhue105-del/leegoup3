import { Lesson, Unit, VocabularyItem } from '../types/course';

export interface SpeakingQuestion {
  id: string;
  type: 'vocabulary' | 'vocabulary_context' | 'model_pattern' | 'guided_response' | 'contextual' | 'mixed' | 'communicative';
  instruction: string;
  vietnameseInstruction: string;
  targetText: string;
  expectedAnswer: string;
  acceptableAnswers: string[];
  vocabularyRefs: string[];
  modelPatternRef?: string;
  lessonContext: string;
  difficulty: number;
  image: string;
  feedbackContext: string;
}

// Extract review lessons for Check-Up units
function getReviewLessonsForCheckup(checkupUnitId: string, allUnits: Unit[]): Lesson[] {
  const reviewMap: Record<string, string[]> = {
    'checkup-1': ['unit-1', 'unit-2'],
    'checkup-2': ['unit-3', 'unit-4'],
    'checkup-3': ['unit-5', 'unit-6'],
    'checkup-4': ['unit-7', 'unit-8'],
  };

  const targetUnitIds = reviewMap[checkupUnitId] || ['unit-1', 'unit-2'];
  const lessons: Lesson[] = [];

  allUnits.forEach(u => {
    if (targetUnitIds.includes(u.id)) {
      lessons.push(...u.lessons);
    }
  });

  return lessons;
}

// Helper to generate a contextual roleplay question based on unit context
function getRoleplayQuestion(unitId: string, index: number, fallbackWord: string): { prompt: string; promptVi: string; expected: string } {
  const normalizedId = unitId.toLowerCase();
  
  if (normalizedId.includes('unit-1')) {
    // Food / snacks
    if (index === 0) {
      return {
        prompt: "What do you want to eat for snacks?",
        promptVi: "Con muốn ăn gì cho bữa nhẹ?",
        expected: `I want some ${fallbackWord || 'popcorn'}.`
      };
    } else {
      return {
        prompt: "What do you like to drink?",
        promptVi: "Con thích uống nước gì?",
        expected: "I like soda."
      };
    }
  } else if (normalizedId.includes('unit-2')) {
    // Occupations
    if (index === 0) {
      return {
        prompt: "What job do you want to do in the future?",
        promptVi: "Con muốn làm nghề nghiệp gì trong tương lai?",
        expected: `I want to be a ${fallbackWord || 'doctor'}.`
      };
    } else {
      return {
        prompt: "Where does your teacher work?",
        promptVi: "Giáo viên của con làm việc ở đâu?",
        expected: "The teacher works at the school."
      };
    }
  } else if (normalizedId.includes('unit-3')) {
    // Health / Illnesses
    if (index === 0) {
      return {
        prompt: "How do you feel when you have a cold?",
        promptVi: "Con cảm thấy thế nào khi bị cảm lạnh?",
        expected: "I feel very tired."
      };
    } else {
      return {
        prompt: "What should you do when you have a headache?",
        promptVi: "Con nên làm gì khi bị đau đầu?",
        expected: "I should take medicine."
      };
    }
  } else if (normalizedId.includes('unit-4')) {
    // Clothing
    if (index === 0) {
      return {
        prompt: "What clothes do you wear on a cold day?",
        promptVi: "Con mặc quần áo gì vào ngày lạnh?",
        expected: `I wear a ${fallbackWord || 'sweater'}.`
      };
    } else {
      return {
        prompt: "What is your favorite color of shirt?",
        promptVi: "Màu áo yêu thích của con là gì?",
        expected: "My favorite color is blue."
      };
    }
  } else if (normalizedId.includes('unit-5')) {
    // Places
    if (index === 0) {
      return {
        prompt: "Where do you like to go after school?",
        promptVi: "Con thích đi đâu sau giờ học?",
        expected: `I like to go to the ${fallbackWord || 'movie theater'}.`
      };
    } else {
      return {
        prompt: "What do you like to do at the amusement park?",
        promptVi: "Con thích làm gì ở công viên giải trí?",
        expected: "I like to watch a movie."
      };
    }
  } else if (normalizedId.includes('unit-6') || normalizedId.includes('unit-7') || normalizedId.includes('unit-8')) {
    // Home / Chores
    if (index === 0) {
      return {
        prompt: "What chores do you do to help at home?",
        promptVi: "Con làm việc nhà nào để giúp đỡ gia đình?",
        expected: `I ${fallbackWord || 'sweep the floor'}.`
      };
    } else {
      return {
        prompt: "Do you help your parents clean the room?",
        promptVi: "Con có giúp bố mẹ dọn phòng không?",
        expected: "Yes, I make my bed."
      };
    }
  }

  // Generic fallback
  return {
    prompt: `Do you like to learn about ${fallbackWord || 'English'}?`,
    promptVi: `Con có thích học về ${fallbackWord || 'Tiếng Anh'} không?`,
    expected: "Yes, I do."
  };
}

export class SpeakingQuestionService {
  /**
   * Generates exactly 8 questions for standard lessons, or exactly 6 questions for Check-Ups
   */
  public generateQuestions(lesson: Lesson, unit: Unit, allUnits: Unit[]): SpeakingQuestion[] {
    if (unit.type === 'checkup') {
      return this.generateCheckupQuestions(lesson, unit, allUnits);
    }
    return this.generateNormalQuestions(lesson, unit);
  }

  private generateNormalQuestions(lesson: Lesson, unit: Unit): SpeakingQuestion[] {
    const questions: SpeakingQuestion[] = [];
    const vocabList = lesson.vocabulary || [];
    
    const getVocab = (idx: number): VocabularyItem => {
      if (vocabList.length > 0) {
        return vocabList[idx % vocabList.length];
      }
      return {
        id: 'fallback-v',
        word: 'apple',
        vietnameseMeaning: 'quả táo',
        image: '/images/fallback.png',
        exampleSentence: 'I like apples.'
      };
    };

    const patternText = lesson.modelPattern?.pattern || lesson.speakingTask?.sampleAnswer || "I want some gum.";
    let basePatternResponse = patternText;
    if (patternText.includes('?')) {
      basePatternResponse = patternText.split('?')[1]?.trim() || basePatternResponse;
    }

    // --- Q1 to Q3: VOCABULARY PRONUNCIATION (SINGLE WORDS) ---
    for (let i = 0; i < 3; i++) {
      const vocab = getVocab(i);
      questions.push({
        id: `${lesson.id}-q${i + 1}`,
        type: 'vocabulary',
        instruction: `Read: "${vocab.word}"`,
        vietnameseInstruction: `Đọc từ vựng: "${vocab.word}"`,
        targetText: vocab.word,
        expectedAnswer: vocab.word,
        acceptableAnswers: [vocab.word],
        vocabularyRefs: [vocab.word],
        lessonContext: `Vocabulary word pronunciation of "${vocab.word}"`,
        difficulty: 1,
        image: vocab.image,
        feedbackContext: `Practice pronouncing the single word "${vocab.word}".`
      });
    }

    // --- Q4 to Q6: SENTENCE READING ---
    // Q4: Example Sentence of vocabulary item 0
    const v1 = getVocab(0);
    questions.push({
      id: `${lesson.id}-q4`,
      type: 'vocabulary_context',
      instruction: `Read: "${v1.exampleSentence}"`,
      vietnameseInstruction: `Đọc câu: "${v1.exampleSentence}"`,
      targetText: v1.exampleSentence,
      expectedAnswer: v1.exampleSentence,
      acceptableAnswers: [v1.exampleSentence],
      vocabularyRefs: [v1.word],
      lessonContext: `Sentence reading for vocabulary "${v1.word}"`,
      difficulty: 2,
      image: v1.image,
      feedbackContext: `Read the full vocabulary example sentence: "${v1.exampleSentence}".`
    });

    // Q5: Example Sentence of vocabulary item 1
    const v2 = getVocab(1);
    questions.push({
      id: `${lesson.id}-q5`,
      type: 'vocabulary_context',
      instruction: `Read: "${v2.exampleSentence}"`,
      vietnameseInstruction: `Đọc câu: "${v2.exampleSentence}"`,
      targetText: v2.exampleSentence,
      expectedAnswer: v2.exampleSentence,
      acceptableAnswers: [v2.exampleSentence],
      vocabularyRefs: [v2.word],
      lessonContext: `Sentence reading for vocabulary "${v2.word}"`,
      difficulty: 2,
      image: v2.image,
      feedbackContext: `Read the second vocabulary example sentence: "${v2.exampleSentence}".`
    });

    // Q6: Main model pattern sentence or dialogue response
    const pSentence = lesson.modelPattern?.dialogue?.[1]?.text || basePatternResponse;
    questions.push({
      id: `${lesson.id}-q6`,
      type: 'model_pattern',
      instruction: `Read: "${pSentence}"`,
      vietnameseInstruction: `Đọc câu: "${pSentence}"`,
      targetText: pSentence,
      expectedAnswer: pSentence,
      acceptableAnswers: [pSentence],
      vocabularyRefs: [v1.word],
      modelPatternRef: lesson.modelPattern?.id,
      lessonContext: `Target sentence structure reading`,
      difficulty: 3,
      image: lesson.modelPattern?.image || lesson.speakingTask?.image,
      feedbackContext: `Practice pronouncing the lesson model pattern sentence: "${pSentence}".`
    });

    // --- Q7 to Q8: ROLE-PLAY / PERSONAL RESPONSE ---
    for (let i = 0; i < 2; i++) {
      const vocabRef = getVocab(i + 2);
      const rp = getRoleplayQuestion(unit.id, i, vocabRef.word);
      questions.push({
        id: `${lesson.id}-q${i + 7}`,
        type: 'communicative',
        instruction: rp.prompt,
        vietnameseInstruction: rp.promptVi,
        targetText: rp.expected,
        expectedAnswer: rp.expected,
        acceptableAnswers: [], // Evaluated semantically (any matching keywords/lengths)
        vocabularyRefs: [vocabRef.word],
        lessonContext: `Communicative personal response practice`,
        difficulty: 4,
        image: vocabRef.image,
        feedbackContext: `Answer the question "${rp.prompt}" in your own words. Use "${vocabRef.word}" if applicable.`
      });
    }

    return questions;
  }

  private generateCheckupQuestions(lesson: Lesson, unit: Unit, allUnits: Unit[]): SpeakingQuestion[] {
    const reviewLessons = getReviewLessonsForCheckup(unit.id, allUnits);
    const questions: SpeakingQuestion[] = [];

    const getReviewLesson = (idx: number): Lesson => {
      if (reviewLessons.length > 0) {
        return reviewLessons[idx % reviewLessons.length];
      }
      return lesson;
    };

    const l1 = getReviewLesson(0);
    const l2 = getReviewLesson(4);
    const l3 = getReviewLesson(1);
    const l4 = getReviewLesson(5);
    const l5 = getReviewLesson(2);
    const l6 = getReviewLesson(6);

    const v1 = l1.vocabulary?.[0] || { word: 'apple', image: '/images/fallback.png' };
    const v2 = l2.vocabulary?.[1] || { word: 'banana', image: '/images/fallback.png' };

    // Q1-Q2: 2 vocabulary pronunciation questions
    questions.push({
      id: `${lesson.id}-q1`,
      type: 'vocabulary',
      instruction: `Read: "${v1.word}"`,
      vietnameseInstruction: `Đọc từ vựng: "${v1.word}"`,
      targetText: v1.word,
      expectedAnswer: v1.word,
      acceptableAnswers: [v1.word],
      vocabularyRefs: [v1.word],
      lessonContext: `Checkup word review of "${v1.word}"`,
      difficulty: 1,
      image: v1.image,
      feedbackContext: `Pronounce the vocabulary word "${v1.word}".`
    });

    questions.push({
      id: `${lesson.id}-q2`,
      type: 'vocabulary',
      instruction: `Read: "${v2.word}"`,
      vietnameseInstruction: `Đọc từ vựng: "${v2.word}"`,
      targetText: v2.word,
      expectedAnswer: v2.word,
      acceptableAnswers: [v2.word],
      vocabularyRefs: [v2.word],
      lessonContext: `Checkup word review of "${v2.word}"`,
      difficulty: 1,
      image: v2.image,
      feedbackContext: `Pronounce the vocabulary word "${v2.word}".`
    });

    // Q3-Q4: 2 complete sentence reading questions
    const p3 = l3.vocabulary?.[0]?.exampleSentence || "I want some gum.";
    questions.push({
      id: `${lesson.id}-q3`,
      type: 'vocabulary_context',
      instruction: `Read: "${p3}"`,
      vietnameseInstruction: `Đọc câu: "${p3}"`,
      targetText: p3,
      expectedAnswer: p3,
      acceptableAnswers: [p3],
      vocabularyRefs: [l3.vocabulary?.[0]?.word || 'apple'],
      lessonContext: `Checkup sentence reading from ${l3.title}`,
      difficulty: 2,
      image: l3.vocabulary?.[0]?.image || '/images/fallback.png',
      feedbackContext: `Read the full sentence: "${p3}".`
    });

    const p4 = l4.vocabulary?.[0]?.exampleSentence || "We need a carrot.";
    questions.push({
      id: `${lesson.id}-q4`,
      type: 'vocabulary_context',
      instruction: `Read: "${p4}"`,
      vietnameseInstruction: `Đọc câu: "${p4}"`,
      targetText: p4,
      expectedAnswer: p4,
      acceptableAnswers: [p4],
      vocabularyRefs: [l4.vocabulary?.[0]?.word || 'banana'],
      lessonContext: `Checkup sentence reading from ${l4.title}`,
      difficulty: 2,
      image: l4.vocabulary?.[0]?.image || '/images/fallback.png',
      feedbackContext: `Read the full sentence: "${p4}".`
    });

    // Q5-Q6: 2 role-play / personal-response questions
    const rp1 = getRoleplayQuestion(l5.unitId, 0, l5.vocabulary?.[0]?.word || 'school');
    questions.push({
      id: `${lesson.id}-q5`,
      type: 'communicative',
      instruction: rp1.prompt,
      vietnameseInstruction: rp1.promptVi,
      targetText: rp1.expected,
      expectedAnswer: rp1.expected,
      acceptableAnswers: [],
      vocabularyRefs: [l5.vocabulary?.[0]?.word || 'school'],
      lessonContext: `Checkup roleplay response practice`,
      difficulty: 3,
      image: l5.vocabulary?.[0]?.image || '/images/fallback.png',
      feedbackContext: `Answer the question: "${rp1.prompt}" in your own words.`
    });

    const rp2 = getRoleplayQuestion(l6.unitId, 1, l6.vocabulary?.[0]?.word || 'chores');
    questions.push({
      id: `${lesson.id}-q6`,
      type: 'communicative',
      instruction: rp2.prompt,
      vietnameseInstruction: rp2.promptVi,
      targetText: rp2.expected,
      expectedAnswer: rp2.expected,
      acceptableAnswers: [],
      vocabularyRefs: [l6.vocabulary?.[0]?.word || 'chores'],
      lessonContext: `Checkup roleplay response practice`,
      difficulty: 3,
      image: l6.vocabulary?.[0]?.image || '/images/fallback.png',
      feedbackContext: `Answer the question: "${rp2.prompt}" in your own words.`
    });

    return questions;
  }
}

export const speakingQuestionService = new SpeakingQuestionService();
