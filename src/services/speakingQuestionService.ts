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
    const patternText = lesson.modelPattern?.pattern || lesson.speakingTask?.sampleAnswer || "I want some gum.";
    
    // Extract a cleaner pattern sentence from "Question? Answer."
    let basePatternResponse = patternText;
    let basePatternQuestion = "What do you want?";
    if (patternText.includes('?')) {
      const parts = patternText.split('?');
      basePatternQuestion = parts[0].trim() + '?';
      basePatternResponse = parts[1]?.trim() || basePatternResponse;
    }

    const dialogue = lesson.modelPattern?.dialogue || [];
    const dialogueQ = dialogue[0]?.text || basePatternQuestion;
    const dialogueA = dialogue[1]?.text || basePatternResponse;

    const topic = unit.title;

    // Helper to get vocab safely with fallback
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

    // Q1 - Vocabulary Recognition / Pronunciation
    const v1 = getVocab(0);
    questions.push({
      id: `${lesson.id}-q1`,
      type: 'vocabulary',
      instruction: `Say the vocabulary word: "${v1.word}"`,
      vietnameseInstruction: `Nói từ vựng sau: "${v1.word}"`,
      targetText: v1.word,
      expectedAnswer: v1.word,
      acceptableAnswers: [v1.word],
      vocabularyRefs: [v1.word],
      lessonContext: `Vocabulary pronunciation from ${lesson.title}`,
      difficulty: 1,
      image: v1.image,
      feedbackContext: `Practice pronouncing the single word "${v1.word}". Try saying it clearly.`
    });

    // Q2 - Vocabulary in Context
    const v2 = getVocab(1);
    questions.push({
      id: `${lesson.id}-q2`,
      type: 'vocabulary_context',
      instruction: `Say the sentence: "${v2.exampleSentence}"`,
      vietnameseInstruction: `Nói câu sau: "${v2.exampleSentence}"`,
      targetText: v2.exampleSentence,
      expectedAnswer: v2.exampleSentence,
      acceptableAnswers: [v2.exampleSentence],
      vocabularyRefs: [v2.word],
      lessonContext: `Vocabulary context sentence from ${lesson.title}`,
      difficulty: 2,
      image: v2.image,
      feedbackContext: `Practice saying the full vocabulary context sentence: "${v2.exampleSentence}".`
    });

    // Q3 - Model Pattern - Controlled Practice
    questions.push({
      id: `${lesson.id}-q3`,
      type: 'model_pattern',
      instruction: `Say the pattern sentence: "${basePatternResponse}"`,
      vietnameseInstruction: `Luyện nói mẫu câu chính: "${basePatternResponse}"`,
      targetText: basePatternResponse,
      expectedAnswer: basePatternResponse,
      acceptableAnswers: [basePatternResponse],
      vocabularyRefs: [v1.word],
      modelPatternRef: lesson.modelPattern?.id,
      lessonContext: `Target model pattern sentence from ${lesson.title}`,
      difficulty: 2,
      image: lesson.modelPattern?.image || lesson.speakingTask?.image,
      feedbackContext: `Say the lesson's core sentence structure: "${basePatternResponse}".`
    });

    // Q4 - Model Pattern with a New Cue
    const v3 = getVocab(2);
    // Substitution logic: replace vocab[0] with vocab[2] in the base sentence
    let newCueText = basePatternResponse;
    const oldWord = v1.word;
    const newWord = v3.word;
    if (oldWord && newWord) {
      try {
        const regex = new RegExp(oldWord, 'gi');
        newCueText = basePatternResponse.replace(regex, newWord);
      } catch {
        newCueText = `${basePatternResponse} and ${newWord}`;
      }
    }
    questions.push({
      id: `${lesson.id}-q4`,
      type: 'model_pattern',
      instruction: `Say the pattern with the new word "${v3.word}": "${newCueText}"`,
      vietnameseInstruction: `Nói mẫu câu với từ thay thế mới "${v3.word}": "${newCueText}"`,
      targetText: newCueText,
      expectedAnswer: newCueText,
      acceptableAnswers: [newCueText],
      vocabularyRefs: [v3.word],
      modelPatternRef: lesson.modelPattern?.id,
      lessonContext: `Sentence pattern substitution using "${v3.word}"`,
      difficulty: 3,
      image: v3.image,
      feedbackContext: `Replace the previous item with "${v3.word}" to say: "${newCueText}".`
    });

    // Q5 - Guided Response
    questions.push({
      id: `${lesson.id}-q5`,
      type: 'guided_response',
      instruction: `Answer the question: "${basePatternQuestion}"`,
      vietnameseInstruction: `Trả lời câu hỏi sau: "${basePatternQuestion}"`,
      targetText: basePatternResponse,
      expectedAnswer: basePatternResponse,
      acceptableAnswers: [basePatternResponse, basePatternResponse.replace(/[.!?]/g, '')],
      vocabularyRefs: [v1.word],
      modelPatternRef: lesson.modelPattern?.id,
      lessonContext: `Guided response to question: "${basePatternQuestion}"`,
      difficulty: 3,
      image: lesson.modelPattern?.image || lesson.speakingTask?.image,
      feedbackContext: `Answer the question "${basePatternQuestion}" with the model sentence "${basePatternResponse}".`
    });

    // Q6 - Lesson Context / Communicative Practice
    questions.push({
      id: `${lesson.id}-q6`,
      type: 'contextual',
      instruction: `Role-play. Answer the question: "${dialogueQ}"`,
      vietnameseInstruction: `Đóng vai hội thoại. Trả lời câu hỏi: "${dialogueQ}"`,
      targetText: dialogueA,
      expectedAnswer: dialogueA,
      acceptableAnswers: [dialogueA],
      vocabularyRefs: [v2.word],
      lessonContext: `Dialogue context practice from ${lesson.title}`,
      difficulty: 4,
      image: lesson.modelPattern?.image || lesson.speakingTask?.image,
      feedbackContext: `Respond to the conversational prompt "${dialogueQ}" with "${dialogueA}".`
    });

    // Q7 - Mixed Vocabulary + Model Pattern
    const v4 = getVocab(3);
    const q7Sentence = v4.exampleSentence;
    questions.push({
      id: `${lesson.id}-q7`,
      type: 'mixed',
      instruction: `Say a complete sentence using the word "${v4.word}": "${q7Sentence}"`,
      vietnameseInstruction: `Nói câu hoàn chỉnh với từ "${v4.word}": "${q7Sentence}"`,
      targetText: q7Sentence,
      expectedAnswer: q7Sentence,
      acceptableAnswers: [q7Sentence],
      vocabularyRefs: [v4.word],
      lessonContext: `Communicative mixed practice with "${v4.word}"`,
      difficulty: 4,
      image: v4.image,
      feedbackContext: `Practice pronouncing the mixed vocabulary sentence containing "${v4.word}".`
    });

    // Q8 - Final Communicative Challenge
    const lastVoc = getVocab(4);
    let finalPrompt = `Talk about ${topic}: "${lastVoc.exampleSentence}"`;
    let finalExpected = lastVoc.exampleSentence;
    
    questions.push({
      id: `${lesson.id}-q8`,
      type: 'communicative',
      instruction: finalPrompt,
      vietnameseInstruction: `Thử thách cuối cùng: Trả lời câu nói sau: "${lastVoc.exampleSentence}"`,
      targetText: finalExpected,
      expectedAnswer: finalExpected,
      acceptableAnswers: [finalExpected],
      vocabularyRefs: [lastVoc.word],
      lessonContext: `Final lesson challenge about ${topic}`,
      difficulty: 5,
      image: lastVoc.image,
      feedbackContext: `Complete the final lesson challenge by speaking the sentence: "${finalExpected}".`
    });

    return questions;
  }

  private generateCheckupQuestions(lesson: Lesson, unit: Unit, allUnits: Unit[]): SpeakingQuestion[] {
    const reviewLessons = getReviewLessonsForCheckup(unit.id, allUnits);
    const questions: SpeakingQuestion[] = [];

    // Safe accessor for reviewed lessons
    const getReviewLesson = (idx: number): Lesson => {
      if (reviewLessons.length > 0) {
        return reviewLessons[idx % reviewLessons.length];
      }
      return lesson; // Fallback to checkup lesson itself
    };

    const l1 = getReviewLesson(0);
    const l2 = getReviewLesson(4);
    const l3 = getReviewLesson(1);
    const l4 = getReviewLesson(5);
    const l5 = getReviewLesson(2);
    const l6 = getReviewLesson(6);

    const v1 = l1.vocabulary?.[0] || { word: 'apple', image: '/images/fallback.png' };
    const v2 = l2.vocabulary?.[1] || { word: 'banana', image: '/images/fallback.png' };

    // Q1 - Vocabulary from earlier lesson
    questions.push({
      id: `${lesson.id}-q1`,
      type: 'vocabulary',
      instruction: `Review vocabulary. Say: "${v1.word}"`,
      vietnameseInstruction: `Ôn tập từ vựng. Đọc: "${v1.word}"`,
      targetText: v1.word,
      expectedAnswer: v1.word,
      acceptableAnswers: [v1.word],
      vocabularyRefs: [v1.word],
      lessonContext: `Vocabulary review from ${l1.title}`,
      difficulty: 2,
      image: v1.image,
      feedbackContext: `Say the reviewed word "${v1.word}" clearly.`
    });

    // Q2 - Vocabulary from another lesson
    questions.push({
      id: `${lesson.id}-q2`,
      type: 'vocabulary',
      instruction: `Review vocabulary. Say: "${v2.word}"`,
      vietnameseInstruction: `Ôn tập từ vựng khác. Đọc: "${v2.word}"`,
      targetText: v2.word,
      expectedAnswer: v2.word,
      acceptableAnswers: [v2.word],
      vocabularyRefs: [v2.word],
      lessonContext: `Vocabulary review from ${l2.title}`,
      difficulty: 2,
      image: v2.image,
      feedbackContext: `Say the second reviewed word "${v2.word}" clearly.`
    });

    // Q3 - Model Pattern from reviewed lessons
    const p3Text = l3.modelPattern?.dialogue?.[0]?.text || l3.modelPattern?.pattern || "I want some gum.";
    let p3Response = p3Text;
    if (p3Text.includes('?')) {
      p3Response = p3Text.split('?')[1]?.trim() || p3Text;
    }
    questions.push({
      id: `${lesson.id}-q3`,
      type: 'model_pattern',
      instruction: `Review pattern sentence: "${p3Response}"`,
      vietnameseInstruction: `Ôn tập mẫu câu: "${p3Response}"`,
      targetText: p3Response,
      expectedAnswer: p3Response,
      acceptableAnswers: [p3Response],
      vocabularyRefs: [l3.vocabulary?.[0]?.word || 'apple'],
      lessonContext: `Pattern sentence review from ${l3.title}`,
      difficulty: 3,
      image: l3.modelPattern?.image || l3.speakingTask?.image || '/images/fallback.png',
      feedbackContext: `Review and speak this target pattern sentence: "${p3Response}".`
    });

    // Q4 - Vocabulary + Model Pattern combination
    const p4Text = l4.modelPattern?.dialogue?.[0]?.text || l4.modelPattern?.pattern || "We need a carrot.";
    let p4Response = p4Text;
    if (p4Text.includes('?')) {
      p4Response = p4Text.split('?')[1]?.trim() || p4Text;
    }
    questions.push({
      id: `${lesson.id}-q4`,
      type: 'model_pattern',
      instruction: `Review pattern sentence: "${p4Response}"`,
      vietnameseInstruction: `Ôn tập mẫu câu phối hợp: "${p4Response}"`,
      targetText: p4Response,
      expectedAnswer: p4Response,
      acceptableAnswers: [p4Response],
      vocabularyRefs: [l4.vocabulary?.[0]?.word || 'banana'],
      lessonContext: `Pattern sentence review from ${l4.title}`,
      difficulty: 3,
      image: l4.modelPattern?.image || l4.speakingTask?.image || '/images/fallback.png',
      feedbackContext: `Review and speak this second target pattern sentence: "${p4Response}".`
    });

    // Q5 - Context/dialogue from reviewed lessons
    const dQ = l5.modelPattern?.dialogue?.[0]?.text || "Do you need any peppers?";
    const dA = l5.modelPattern?.dialogue?.[1]?.text || "Yes, we do.";
    questions.push({
      id: `${lesson.id}-q5`,
      type: 'contextual',
      instruction: `Conversational practice. Answer: "${dQ}"`,
      vietnameseInstruction: `Hội thoại ôn tập. Trả lời: "${dQ}"`,
      targetText: dA,
      expectedAnswer: dA,
      acceptableAnswers: [dA],
      vocabularyRefs: [l5.vocabulary?.[0]?.word || 'peppers'],
      lessonContext: `Conversational review from ${l5.title}`,
      difficulty: 4,
      image: l5.modelPattern?.image || l5.speakingTask?.image || '/images/fallback.png',
      feedbackContext: `Respond to the question "${dQ}" with "${dA}".`
    });

    // Q6 - Final mixed communicative task
    const finalSent = l6.vocabulary?.[0]?.exampleSentence || "I want some popcorn.";
    questions.push({
      id: `${lesson.id}-q6`,
      type: 'communicative',
      instruction: `Final review challenge: "${finalSent}"`,
      vietnameseInstruction: `Thử thách ôn tập cuối cùng: Nói câu sau: "${finalSent}"`,
      targetText: finalSent,
      expectedAnswer: finalSent,
      acceptableAnswers: [finalSent],
      vocabularyRefs: [l6.vocabulary?.[0]?.word || 'popcorn'],
      lessonContext: `Check-up communicative speaking test from ${l6.title}`,
      difficulty: 4,
      image: l6.vocabulary?.[0]?.image || '/images/fallback.png',
      feedbackContext: `Complete the Check-Up by pronouncing the final review challenge: "${finalSent}".`
    });

    return questions;
  }
}

export const speakingQuestionService = new SpeakingQuestionService();
