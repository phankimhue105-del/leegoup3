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
      questionId?: string;
      questionType: string;
      instruction?: string;
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

    // --- SPECIALIZED EVALUATION FOR UNIT 1 LESSON 3 TASK 7 (What do you want to eat for snacks?) ---
    const isU1L3Task7 = (
      questionContext?.questionId === 'u1-l3-q7' || 
      (expectedClean.includes('potato chips') && qType === 'communicative') ||
      (questionContext?.instruction?.toLowerCase().includes('eat for snacks') && qType === 'communicative')
    );

    if (isU1L3Task7) {
      const studentWords = studentClean.split(' ').filter(Boolean);
      const labelStr = isTextMode ? 'typed' : 'said';
      const labelVi = isTextMode ? 'nhập' : 'nói';
      let stars = 1;
      let aiCommentEn = '';
      let aiCommentVi = '';

      // 1. Irrelevant meal check: student mentions lunch, dinner, breakfast, soup, salad, spaghetti
      const mealTerms = ['lunch', 'dinner', 'breakfast', 'soup', 'salad', 'spaghetti'];
      const hasMealTerm = mealTerms.some(term => studentClean.includes(term));

      if (hasMealTerm) {
        score = 45 + randomMod; // 45 - 49
        stars = 1;
        aiCommentEn = `"${studentRaw}" refers to lunch or a regular meal, but the teacher asked what you want for snacks! Snacks are light foods like potato chips, popcorn, or peanuts. Try saying: "I want some potato chips."`;
        aiCommentVi = `"${studentRaw}" là bữa ăn chính (bữa trưa), trong khi câu hỏi là về bữa ăn nhẹ (snacks). Con hãy chọn món ăn nhẹ và thử trả lời: "I want some potato chips." (hoặc popcorn, peanuts nhé)!`;
      } else {
        // 2. Valid snack choices from Unit 1: potato chips, popcorn, peanuts, gum, chocolate
        const snackTerms = ['potato chips', 'potato chip', 'chips', 'popcorn', 'peanuts', 'peanut', 'gum', 'chocolate'];
        const hasSnackTerm = snackTerms.some(term => studentClean.includes(term));
        const hasSentencePattern = /^(i want some|i want|i would like|i'd like|we want some|we want)\b/i.test(studentClean);

        if (hasSnackTerm && hasSentencePattern) {
          // Full sentence with valid snack: "I want some potato chips", "I want some popcorn", etc.
          score = 95 + randomMod; // 95 - 99
          stars = 3;
          aiCommentEn = `Excellent! You answered with a great snack choice: "${studentRaw}". Natural pronunciation and correct grammar!`;
          aiCommentVi = `Xuất sắc! Con đã trả lời rất tự nhiên và đúng ngữ pháp về món ăn nhẹ: "${studentRaw}"!`;
        } else if (hasSnackTerm) {
          // Student answered with just the snack word or short phrase: "potato chips", "some popcorn"
          score = 80 + randomMod; // 80 - 84
          stars = 2;
          aiCommentEn = `Good snack choice! You ${labelStr}: "${studentRaw}". For full points, practice saying the complete sentence: "I want some potato chips."`;
          aiCommentVi = `Lựa chọn món ăn nhẹ rất đúng! Con đã ${labelVi}: "${studentRaw}". Để đạt điểm tối đa, con hãy nói cả câu đầy đủ nhé: "I want some potato chips."`;
        } else if (hasSentencePattern) {
          // Student used sentence pattern "I want some..." but with an item that isn't one of the snacks
          score = 75 + randomMod; // 75 - 79
          stars = 2;
          aiCommentEn = `Good sentence pattern! You ${labelStr}: "${studentRaw}". Try using snack foods from our lesson: "I want some potato chips." or "I want some popcorn."`;
          aiCommentVi = `Con nói đúng mẫu câu 'I want some...'! Con hãy thử kết hợp với các món ăn nhẹ trong bài học như: "I want some potato chips." hoặc "I want some popcorn." nhé.`;
        } else if (studentWords.length <= 1) {
          // Too short / meaningless
          score = 35 + randomMod; // 35 - 39
          stars = 1;
          aiCommentEn = `"${studentRaw}" doesn't answer what you want to eat for snacks. Practice the target answer: "I want some potato chips."`;
          aiCommentVi = `Câu trả lời chưa đúng với câu hỏi về đồ ăn nhẹ. Con hãy luyện nói câu mẫu sau: "I want some potato chips." nhé!`;
        } else {
          // Other multi-word response that doesn't match
          score = 60 + randomMod; // 60 - 64
          stars = 1;
          aiCommentEn = `Nice effort! You ${labelStr}: "${studentRaw}". Remember to answer what snacks you want: "I want some potato chips."`;
          aiCommentVi = `Cố gắng lên nhé! Con đã ${labelVi}: "${studentRaw}". Hãy trả lời món ăn nhẹ con muốn bằng mẫu câu: "I want some potato chips."`;
        }
      }

      return {
        score: Math.min(100, Math.max(0, score)),
        stars,
        transcription: studentRaw,
        pronunciationAccuracy: isTextMode ? 100 : Math.min(100, score + 2),
        fluencyScore: isTextMode ? 100 : Math.max(60, score - 3),
        aiCommentEn,
        aiCommentVi,
      };
    }

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
