/**
 * AI Speaking Evaluation Service Architecture
 * Algorithmic evaluation based on inputMode, question type, expected answers, and keywords.
 */

export interface SpeakingEvaluationResult {
  score: number;             // 0 - 100
  stars: number;             // 1, 2, or 3
  transcription: string;     // Transcription of student response
  pronunciationAccuracy: number;
  fluencyScore: number;
  aiCommentEn: string;
  aiCommentVi: string;
}

export class SpeakingService {
  /**
   * Evaluates student answer against expected question answer.
   * studentAnswer is either pre-transcribed from web Speech API or typed directly via keyboard fallback.
   */
  public async evaluateSpeech(
    audioBlob: Blob | null,
    sampleText: string,
    keywords?: string[],
    questionContext?: {
      questionType: string;
      targetText: string;
      expectedAnswer: string;
      studentAnswer?: string;
      inputMode: 'speech' | 'text';
      lessonVocabulary?: string[];
      modelPattern?: string;
      lessonContext?: string;
    }
  ): Promise<SpeakingEvaluationResult> {
    // Simulate minor network delay for AI analysis
    await new Promise((resolve) => setTimeout(resolve, 800));

    const expected = (questionContext?.expectedAnswer || sampleText).trim();
    const studentRaw = (questionContext?.studentAnswer || '').trim();
    const isTextMode = questionContext?.inputMode === 'text';

    // If speech mode is used and the transcript is completely empty, throw an error to trigger retry
    if (!isTextMode && !studentRaw) {
      throw new Error('No transcript received. Please try speaking again or use keyboard input.');
    }

    // Normalize text helper
    const normalize = (txt: string) =>
      txt
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    const expectedClean = normalize(expected);
    const studentClean = normalize(studentRaw);
    const qType = questionContext?.questionType || 'vocabulary';

    let score = 0;
    const sizeSeed = audioBlob ? audioBlob.size : Date.now();
    const randomMod = (sizeSeed % 5);

    // --- ALGORITHMIC EVALUATION BY QUESTION TYPE ---
    if (qType === 'vocabulary') {
      // Single word pronunciation check
      if (studentClean === expectedClean) {
        score = 95 + randomMod; // 95 - 100
      } else if (expectedClean.length >= 3 && studentClean.startsWith(expectedClean.substring(0, 3))) {
        score = 72 + randomMod; // 72 - 77 (partial match)
      } else {
        score = 35 + randomMod; // 35 - 40 (incorrect word)
      }
    } else if (qType === 'vocabulary_context' || qType === 'model_pattern') {
      // Sentence reading check (word-by-word ratio)
      const expectedWords = expectedClean.split(' ');
      const studentWords = studentClean.split(' ');
      
      let matchCount = 0;
      expectedWords.forEach(w => {
        if (studentWords.includes(w)) {
          matchCount++;
        }
      });
      
      const matchRatio = expectedWords.length > 0 ? (matchCount / expectedWords.length) : 0;
      if (matchRatio >= 0.95) {
        score = 94 + randomMod; // 94 - 99
      } else {
        score = Math.floor(40 + (matchRatio * 50) + randomMod); // e.g., 4 out of 5 words = 80-84
      }
    } else {
      // Role-play / communicative check (length + keyword relevance)
      const studentWords = studentClean.split(' ');
      if (studentClean.length === 0 || studentWords.length <= 1) {
        score = 30 + randomMod; // 30 - 35 (too short)
      } else {
        // Look for keywords (from vocabulary list) or semantic match
        let hasKeyword = false;
        if (keywords && keywords.length > 0) {
          hasKeyword = keywords.some(k => studentClean.includes(normalize(k)));
        }
        
        if (hasKeyword) {
          score = 90 + randomMod; // 90 - 95 (excellent and context-relevant)
        } else {
          // General understandable answer
          score = 75 + randomMod; // 75 - 80 (good alternative answer)
        }
      }
    }

    // Ensure score boundaries
    score = Math.min(100, Math.max(0, score));

    // Calculate stars
    let stars = 1;
    if (score >= 90) stars = 3;
    else if (score >= 75) stars = 2;

    // --- LEVEL-SENSITIVE FEEDBACK ---
    let aiCommentEn = '';
    let aiCommentVi = '';

    const labelStr = isTextMode ? 'typed' : 'said';
    const labelVi = isTextMode ? 'nhập' : 'nói';

    if (score >= 90) {
      aiCommentEn = `Excellent! You ${labelStr}: "${studentRaw}". High accuracy and proper sentence context.`;
      aiCommentVi = `Xuất sắc! Con đã ${labelVi} chính xác: "${studentRaw}". Thể hiện phản xạ rất tốt!`;
    } else if (score >= 75) {
      aiCommentEn = `Good job! You ${labelStr}: "${studentRaw}". Try to include all grammatical parts or speak clearer next time.`;
      aiCommentVi = `Khá tốt! Con đã ${labelVi}: "${studentRaw}". Hãy chú ý thêm mạo từ hoặc phát âm rõ chữ hơn một chút nữa nhé.`;
    } else if (score >= 60) {
      aiCommentEn = `Nice effort! You ${labelStr}: "${studentRaw}". Make sure to say the complete target sentence: "${expected}".`;
      aiCommentVi = `Cố gắng lên nhé! Con đã ${labelVi}: "${studentRaw}". Con hãy cố gắng luyện nói/nhập đúng câu mẫu: "${expected}".`;
    } else {
      aiCommentEn = `Keep practicing! Try reading the correct sentence pattern: "${expected}".`;
      aiCommentVi = `Cố gắng luyện tập thêm nào! Con hãy thử luyện nói câu mẫu sau: "${expected}".`;
    }

    return {
      score,
      stars,
      transcription: studentRaw,
      pronunciationAccuracy: isTextMode ? 100 : Math.min(100, score + 2),
      fluencyScore: isTextMode ? 100 : Math.max(60, score - 3),
      aiCommentEn,
      aiCommentVi,
    };
  }
}

export const speakingService = new SpeakingService();
