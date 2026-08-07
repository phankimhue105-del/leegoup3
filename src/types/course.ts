/**
 * Course Data Types for Everybody Up 3 (Oxford 2nd Edition)
 * All content must be dynamically driven from JSON schemas.
 */

export type UnitType = 'standard' | 'checkup' | 'yle';

export interface VocabularyItem {
  id: string;
  word: string;
  phonetic?: string;
  vietnameseMeaning: string;
  image: string;
  audioUrl?: string;
  exampleSentence: string;
}

export interface DialogueLine {
  speaker: string;
  text: string;
  vietnameseMeaning: string;
  audioUrl?: string;
}

export interface ModelPattern {
  id: string;
  title: string;
  pattern: string;
  image: string;
  dialogue: DialogueLine[];
  vietnameseExplanation: string;
  audioUrl?: string;
}

export type QuestionType =
  | 'multiple-choice'
  | 'matching'
  | 'fill-in-blank'
  | 'listening'
  | 'picture-select';

export interface MatchingPair {
  leftId: string;
  leftText: string;
  leftImage?: string;
  rightId: string;
  rightText: string;
}

export interface PracticeQuestion {
  id: string;
  type: QuestionType;
  questionText: string;
  promptAudioUrl?: string;
  questionImage?: string;
  options?: string[]; // For multiple choice, listening, picture-select
  optionImages?: string[]; // For picture-select
  correctAnswer: string | string[]; // Single option string or ordered string array
  matchingPairs?: MatchingPair[]; // For matching type
  vietnameseExplanation: string;
}

export interface SpeakingTask {
  id: string;
  promptText: string;
  vietnamesePrompt: string;
  referenceAudioUrl?: string;
  image: string;
  keywordsToDetect?: string[];
  sampleAnswer: string;
}

export type LessonSectionType = 'vocabulary' | 'model-pattern' | 'practice' | 'speaking';

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  vietnameseTitle: string;
  description: string;
  vocabulary: VocabularyItem[];
  modelPattern: ModelPattern;
  practiceQuestions: PracticeQuestion[];
  speakingTask: SpeakingTask;
}

export interface Unit {
  id: string;
  title: string;
  subtitle: string;
  vietnameseTitle: string;
  type: UnitType;
  colorHex: string;
  iconName: string;
  bannerImage: string;
  lessons: Lesson[];
}

export interface CourseData {
  courseId: string;
  courseTitle: string;
  gradeLevel: string;
  publisher: string;
  version: string;
  units: Unit[];
}
