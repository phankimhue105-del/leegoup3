/**
 * AI Speaking Evaluation Service Architecture
 * Isolated service interface designed for Phase 2 API / Gemini AI integration.
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
   * Evaluates recorded speech blob against reference task text.
   * Phase 1 uses simulated dynamic AI evaluation logic to mimic real model scores & comments.
   * Phase 2 will replace the inner call with backend Gemini Multimodal Speech API.
   */
  public async evaluateSpeech(
    audioBlob: Blob,
    sampleText: string,
    keywords?: string[]
  ): Promise<SpeakingEvaluationResult> {
    // Simulate network delay for AI processing
    await new Promise((resolve) => setTimeout(resolve, 1800));

    // Dynamic mock scoring based on audio size and keywords provided
    const audioSizeInBytes = audioBlob.size;
    const baseScore = Math.min(100, Math.max(70, Math.floor(80 + (audioSizeInBytes % 20))));
    
    // Calculate stars
    let stars = 1;
    if (baseScore >= 90) stars = 3;
    else if (baseScore >= 75) stars = 2;

    const transcription = sampleText; // Simulated transcription match

    let aiCommentEn = 'Great pronunciation! Clear pitch and rhythm.';
    let aiCommentVi = 'Phát âm rất rõ ràng! Ngắt nghỉ đúng nhịp và tự tin.';

    if (stars === 3) {
      aiCommentEn = 'Outstanding! Excellent accent, rhythm, and word stress.';
      aiCommentVi = 'Xuất sắc! Phát âm chuẩn xác, ngữ điệu tự nhiên như người bản xứ!';
    } else if (stars === 2) {
      aiCommentEn = 'Good job! Pay attention to ending consonants.';
      aiCommentVi = 'Con làm tốt lắm! Hãy chú ý phát âm âm cuối rõ hơn chút nữa nhé!';
    } else {
      aiCommentEn = 'Nice effort! Practice speaking a bit louder.';
      aiCommentVi = 'Cố gắng lên nhé! Con hãy nói to và rõ ràng hơn ở lần thử tiếp theo!';
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
