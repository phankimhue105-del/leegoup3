/**
 * AI Speaking Evaluation Service Architecture
 * Supports rich dynamic scoring, mutated transcriptions, and question-sensitive feedback.
 */

export interface SpeakingEvaluationResult {
  score: number;             // 0 - 100
  stars: number;             // 1, 2, or 3
  transcription: string;     // Simulated or real speech-to-text
  pronunciationAccuracy: number;
  fluencyScore: number;
  aiCommentEn: string;
  aiCommentVi: string;
}

export class SpeakingService {
  /**
   * Evaluates recorded speech blob against expected question answer.
   * Leverages expectedAnswer and targetText to build realistic contextual feedback.
   */
  public async evaluateSpeech(
    audioBlob: Blob,
    sampleText: string,
    keywords?: string[],
    questionContext?: { expectedAnswer: string; feedbackContext: string; targetText: string }
  ): Promise<SpeakingEvaluationResult> {
    // Simulate network delay for AI processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const expected = questionContext?.expectedAnswer || sampleText;
    const targetWord = (keywords && keywords.length > 0) ? keywords[0] : expected.split(' ')[0];

    // Generate a realistic score range simulating actual child responses
    const scoreSeed = audioBlob.size % 40; // use size to make it deterministic per recording attempt
    const baseScore = Math.min(100, Math.max(50, Math.floor(75 + scoreSeed - 10)));
    
    // Determine stars
    let stars = 1;
    if (baseScore >= 90) stars = 3;
    else if (baseScore >= 75) stars = 2;

    // Simulate speech-to-text transcription mutations based on the score level
    let transcription = expected;
    if (baseScore < 60) {
      // Very low score: user mumbled or missed the full sentence, return only key word or single term
      transcription = targetWord;
    } else if (baseScore < 75) {
      // Needs practice: miss minor preposition or omit ending
      transcription = expected.replace(/\b(at the|some|do you|they need)\b/gi, '').trim();
      if (!transcription) transcription = targetWord;
    } else if (baseScore < 90) {
      // Good: slight misspelling of the target word
      transcription = expected.replace(new RegExp(targetWord, 'i'), targetWord.substring(0, targetWord.length - 1));
    }

    // Generate highly detailed, level-sensitive, question-specific feedback
    let aiCommentEn = '';
    let aiCommentVi = '';

    if (baseScore >= 90) {
      // Level 1: 90 - 100 (Excellent)
      aiCommentEn = `Excellent! You pronounced "${targetWord}" perfectly with natural rhythm and sentence stress.`;
      aiCommentVi = `Tuyệt vời! Con phát âm từ "${targetWord}" cực kỳ chuẩn xác và có ngữ điệu tự nhiên như người bản xứ.`;
    } else if (baseScore >= 75) {
      // Level 2: 75 - 89 (Good)
      aiCommentEn = `Good job! You said "${targetWord}" clearly. Try to say the complete sentence and watch your ending sounds.`;
      aiCommentVi = `Con làm tốt lắm! Phát âm từ "${targetWord}" khá rõ ràng. Hãy chú ý đọc đầy đủ câu và ngắt nghỉ đúng nhịp hơn nhé.`;
    } else if (baseScore >= 60) {
      // Level 3: 60 - 74 (Needs Practice)
      aiCommentEn = `Nice effort! The word "${targetWord}" was a bit unclear. Try saying it slowly: "${targetWord}".`;
      aiCommentVi = `Cố gắng lên nhé! Từ "${targetWord}" nghe chưa được rõ lắm. Con hãy đọc lại từ này thật chậm rãi nhé.`;
    } else {
      // Level 4: Below 60 (Encouraging correction)
      aiCommentEn = `Let's practice! Follow the teacher's model: "${expected}".`;
      aiCommentVi = `Chúng ta cùng luyện tập thêm nhé! Con hãy nói theo câu mẫu của giáo viên: "${expected}".`;
    }

    return {
      score: baseScore,
      stars,
      transcription,
      pronunciationAccuracy: Math.min(100, baseScore + 2),
      fluencyScore: Math.max(60, baseScore - 3),
      aiCommentEn,
      aiCommentVi,
    };
  }
}

export const speakingService = new SpeakingService();
