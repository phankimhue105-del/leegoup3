const yleData = {
  practiceQuestions: [
    // 1-5: Vocabulary
    {
      id: "yle-q1",
      type: "multiple-choice",
      questionText: "Movers Vocab 1: What snack is made from corn and eaten at movies?",
      options: ["popcorn", "gum", "peanuts", "chocolate"],
      correctAnswer: "popcorn",
      explanation_vi: "Đúng. 'popcorn' nghĩa là bỏng ngô.",
      vietnameseExplanation: "Đúng. 'popcorn' nghĩa là bỏng ngô.",
      questionImage: "/images/yle/popcorn.png"
    },
    {
      id: "yle-q2",
      type: "multiple-choice",
      questionText: "Movers Vocab 2: Who works at a supermarket taking payments?",
      options: ["cashier", "librarian", "server", "vet"],
      correctAnswer: "cashier",
      explanation_vi: "Đúng. 'cashier' là nhân viên thu ngân.",
      vietnameseExplanation: "Đúng. 'cashier' là nhân viên thu ngân.",
      questionImage: "/images/yle/cashier.png"
    },
    {
      id: "yle-q3",
      type: "multiple-choice",
      questionText: "Movers Vocab 3: Which chore means cleaning the floor with a broom?",
      options: ["sweep the floor", "vacuum the carpet", "wash the dishes", "make my bed"],
      correctAnswer: "sweep the floor",
      explanation_vi: "Đúng. 'sweep the floor' nghĩa là quét nhà.",
      vietnameseExplanation: "Đúng. 'sweep the floor' nghĩa là quét nhà.",
      questionImage: "/images/yle/sweep_floor.png"
    },
    {
      id: "yle-q4",
      type: "multiple-choice",
      questionText: "Movers Vocab 4: Where do people go to see marine animals and fish?",
      options: ["aquarium", "museum", "hotel", "bookstore"],
      correctAnswer: "aquarium",
      explanation_vi: "Đúng. 'aquarium' nghĩa là thủy cung.",
      vietnameseExplanation: "Đúng. 'aquarium' nghĩa là thủy cung.",
      questionImage: "/images/yle/aquarium.png"
    },
    {
      id: "yle-q5",
      type: "multiple-choice",
      questionText: "Movers Vocab 5: Which tool do you use to cut paper?",
      options: ["scissors", "stapler", "calculator", "folder"],
      correctAnswer: "scissors",
      explanation_vi: "Đúng. 'scissors' nghĩa là cái kéo.",
      vietnameseExplanation: "Đúng. 'scissors' nghĩa là cái kéo.",
      questionImage: "/images/yle/scissors.png"
    },

    // 6-10: Grammar
    {
      id: "yle-q6",
      type: "multiple-choice",
      questionText: "Movers Grammar 1: She _____ some chocolate.",
      options: ["wants", "want", "wanting", "is want"],
      correctAnswer: "wants",
      explanation_vi: "Đúng. 'She' đi với động từ thêm 's' -> 'wants'.",
      vietnameseExplanation: "Đúng. 'She' đi với động từ thêm 's' -> 'wants'.",
      questionImage: "/images/yle/grammar1.png"
    },
    {
      id: "yle-q7",
      type: "multiple-choice",
      questionText: "Movers Grammar 2: Where _____ the cashier work? The cashier works at the supermarket.",
      options: ["does", "do", "is", "are"],
      correctAnswer: "does",
      explanation_vi: "Đúng. Trợ động từ hỏi nghề nghiệp số ít là 'does'.",
      vietnameseExplanation: "Đúng. Trợ động từ hỏi nghề nghiệp số ít là 'does'.",
      questionImage: "/images/yle/grammar2.png"
    },
    {
      id: "yle-q8",
      type: "multiple-choice",
      questionText: "Movers Grammar 3: Danny is _____ than Julie.",
      options: ["taller", "tall", "tallest", "more tall"],
      correctAnswer: "taller",
      explanation_vi: "Đúng. So sánh hơn tính từ ngắn dùng 'taller'.",
      vietnameseExplanation: "Đúng. So sánh hơn tính từ ngắn dùng 'taller'.",
      questionImage: "/images/yle/grammar3.png"
    },
    {
      id: "yle-q9",
      type: "multiple-choice",
      questionText: "Movers Grammar 4: Where _____ they yesterday? They were at the beach.",
      options: ["were", "was", "are", "did"],
      correctAnswer: "were",
      explanation_vi: "Đúng. 'They' quá khứ đi với 'were'.",
      vietnameseExplanation: "Đúng. 'They' quá khứ đi với 'were'.",
      questionImage: "/images/yle/grammar4.png"
    },
    {
      id: "yle-q10",
      type: "multiple-choice",
      questionText: "Movers Grammar 5: There _____ any laptops in 1940.",
      options: ["weren't", "wasn't", "isn't", "don't"],
      correctAnswer: "weren't",
      explanation_vi: "Đúng. Phủ định số nhiều quá khứ là 'weren't'.",
      vietnameseExplanation: "Đúng. Phủ định số nhiều quá khứ là 'weren't'.",
      questionImage: "/images/yle/grammar5.png"
    },

    // 11-14: Reading
    {
      id: "yle-q11",
      type: "multiple-choice",
      questionText: "Movers Reading 1: 'Yesterday was sunny. Anna went to the park and played with her friends.' What was the weather yesterday?",
      options: ["sunny", "rainy", "stormy", "snowy"],
      correctAnswer: "sunny",
      explanation_vi: "Đúng. Thời tiết được miêu tả là 'sunny' (nắng).",
      vietnameseExplanation: "Đúng. Thời tiết được miêu tả là 'sunny' (nắng).",
      questionImage: "/images/yle/reading1.png"
    },
    {
      id: "yle-q12",
      type: "multiple-choice",
      questionText: "Movers Reading 2: 'Tom is helpful. He always cleans his room before school.' When does Tom clean his room?",
      options: ["before school", "after school", "at night", "on Sunday"],
      correctAnswer: "before school",
      explanation_vi: "Đúng. Đoạn văn nêu Tom dọn phòng 'before school'.",
      vietnameseExplanation: "Đúng. Đoạn văn nêu Tom dọn phòng 'before school'.",
      questionImage: "/images/yle/reading2.png"
    },
    {
      id: "yle-q13",
      type: "multiple-choice",
      questionText: "Movers Reading 3: 'The marble is harder than the ball.' Which object is harder?",
      options: ["The marble", "The ball", "The pillow", "The box"],
      correctAnswer: "The marble",
      explanation_vi: "Đúng. 'marble' (viên bi) cứng hơn quả bóng.",
      vietnameseExplanation: "Đúng. 'marble' (viên bi) cứng hơn quả bóng.",
      questionImage: "/images/yle/reading3.png"
    },
    {
      id: "yle-q14",
      type: "multiple-choice",
      questionText: "Movers Reading 4: 'Let's meet at five o'clock at the bookstore.' Where will they meet?",
      options: ["at the bookstore", "at the museum", "at the pool", "at the hotel"],
      correctAnswer: "at the bookstore",
      explanation_vi: "Đúng. Nơi hẹn gặp là 'at the bookstore' (hiệu sách).",
      vietnameseExplanation: "Đúng. Nơi hẹn gặp là 'at the bookstore' (hiệu sách).",
      questionImage: "/images/yle/reading4.png"
    },

    // 15-17: Listening
    {
      id: "yle-q15",
      type: "listening",
      questionText: "Movers Listening 1: Listen and choose the correct word:",
      promptAudioUrl: "/audio/yle/listening_gum.mp3",
      options: ["gum", "popcorn", "peanuts"],
      correctAnswer: "gum",
      explanation_vi: "Đúng. Bạn nghe thấy từ 'gum'.",
      vietnameseExplanation: "Đúng. Bạn nghe thấy từ 'gum'.",
      questionImage: "/images/yle/listening1.png"
    },
    {
      id: "yle-q16",
      type: "listening",
      questionText: "Movers Listening 2: Listen and choose the location:",
      promptAudioUrl: "/audio/yle/listening_aquarium.mp3",
      options: ["aquarium", "museum", "hotel"],
      correctAnswer: "aquarium",
      explanation_vi: "Đúng. Bạn nghe thấy từ 'aquarium'.",
      vietnameseExplanation: "Đúng. Bạn nghe thấy từ 'aquarium'.",
      questionImage: "/images/yle/listening2.png"
    },
    {
      id: "yle-q17",
      type: "listening",
      questionText: "Movers Listening 3: Listen and choose the school item:",
      promptAudioUrl: "/audio/yle/listening_calculator.mp3",
      options: ["calculator", "dictionary", "stapler"],
      correctAnswer: "calculator",
      explanation_vi: "Đúng. Bạn nghe thấy từ 'calculator'.",
      vietnameseExplanation: "Đúng. Bạn nghe thấy từ 'calculator'.",
      questionImage: "/images/yle/listening3.png"
    },

    // 18-20: Mixed Review
    {
      id: "yle-q18",
      type: "multiple-choice",
      questionText: "Movers Review 1: A: 'Do you want to come over?' B: '_____'",
      options: ["Sure. When?", "No, I don't want gum.", "It is sunny.", "I was at home."],
      correctAnswer: "Sure. When?",
      explanation_vi: "Đúng. Đáp lại lời mời sang nhà chơi: 'Sure. When?'",
      vietnameseExplanation: "Đúng. Đáp lại lời mời sang nhà chơi: 'Sure. When?'",
      questionImage: "/images/yle/review1.png"
    },
    {
      id: "yle-q19",
      type: "multiple-choice",
      questionText: "Movers Review 2: How do you spell 'Saturday'?",
      options: ["S-A-T-U-R-D-A-Y", "S-U-N-D-A-Y", "S-A-T-U-R-D-A-I"],
      correctAnswer: "S-A-T-U-R-D-A-Y",
      explanation_vi: "Đúng. Đánh vần từ 'Saturday' chính xác.",
      vietnameseExplanation: "Đúng. Đánh vần từ 'Saturday' chính xác.",
      questionImage: "/images/yle/review2.png"
    },
    {
      id: "yle-q20",
      type: "multiple-choice",
      questionText: "Movers Review 3: Which job flies planes?",
      options: ["pilot", "cook", "salesperson", "vet"],
      correctAnswer: "pilot",
      explanation_vi: "Đúng. 'pilot' (phi công) là người lái máy bay.",
      vietnameseExplanation: "Đúng. 'pilot' (phi công) là người lái máy bay.",
      questionImage: "/images/yle/review3.png"
    }
  ],

  speakingTasks: [
    { id: "yle-s1", taskNumber: 1, type: "read-word", promptText: "Read vocabulary: 'popcorn'", vietnamesePrompt: "Nhiệm vụ 1: Đọc từ 'popcorn'", image: "/images/yle/popcorn.png", referenceAudioUrl: "/audio/yle/s1.mp3", sampleAnswer: "popcorn", keywordsToDetect: ["popcorn"] },
    { id: "yle-s2", taskNumber: 2, type: "read-word", promptText: "Read vocabulary: 'dictionary'", vietnamesePrompt: "Nhiệm vụ 2: Đọc từ 'dictionary'", image: "/images/yle/dictionary.png", referenceAudioUrl: "/audio/yle/s2.mp3", sampleAnswer: "dictionary", keywordsToDetect: ["dictionary"] },
    { id: "yle-s3", taskNumber: 3, type: "read-sentence", promptText: "Read sentence: 'The cashier works at the supermarket.'", vietnamesePrompt: "Nhiệm vụ 3: Đọc câu nơi làm việc", image: "/images/yle/cashier.png", referenceAudioUrl: "/audio/yle/s3.mp3", sampleAnswer: "The cashier works at the supermarket.", keywordsToDetect: ["cashier", "supermarket"] },
    { id: "yle-s4", taskNumber: 4, type: "read-sentence", promptText: "Read sentence: 'The marble is harder than the ball.'", vietnamesePrompt: "Nhiệm vụ 4: Đọc câu so sánh", image: "/images/yle/marble.png", referenceAudioUrl: "/audio/yle/s4.mp3", sampleAnswer: "The marble is harder than the ball.", keywordsToDetect: ["marble", "harder"] },
    { id: "yle-s5", taskNumber: 5, type: "answer-question", promptText: "Answer question: 'What do you want?'", vietnamesePrompt: "Nhiệm vụ 5: Trả lời đồ muốn ăn", image: "/images/yle/gum.png", referenceAudioUrl: "/audio/yle/s5.mp3", sampleAnswer: "I want some gum.", keywordsToDetect: ["want", "gum"] },
    { id: "yle-s6", taskNumber: 6, type: "answer-question", promptText: "Answer question: 'Where was he yesterday?'", vietnamesePrompt: "Nhiệm vụ 6: Trả lời địa điểm quá khứ", image: "/images/yle/beach.png", referenceAudioUrl: "/audio/yle/s6.mp3", sampleAnswer: "He was at the beach.", keywordsToDetect: ["beach", "was"] },
    { id: "yle-s7", taskNumber: 7, type: "describe-picture", promptText: "Describe picture: 'In this picture, the boy is taller than the girl.'", vietnamesePrompt: "Nhiệm vụ 7: Miêu tả bức tranh so sánh chiều cao", image: "/images/yle/taller.png", referenceAudioUrl: "/audio/yle/s7.mp3", sampleAnswer: "The boy is taller than the girl.", keywordsToDetect: ["boy", "taller", "girl"] },
    { id: "yle-s8", taskNumber: 8, type: "complete-dialogue", promptText: "Complete dialogue: 'Let's meet here at five o'clock.' -> 'OK. See you then.'", vietnamesePrompt: "Nhiệm vụ 8: Hoàn thành hội thoại hẹn giờ", image: "/images/yle/clock.png", referenceAudioUrl: "/audio/yle/s8.mp3", sampleAnswer: "OK. See you then.", keywordsToDetect: ["ok", "see", "then"] },
    { id: "yle-s9", taskNumber: 9, type: "role-play", promptText: "Role-play: 'Do you want to come over?' -> 'Sure. After school.'", vietnamesePrompt: "Nhiệm vụ 9: Đóng vai trả lời lời mời", image: "/images/yle/come_over.png", referenceAudioUrl: "/audio/yle/s9.mp3", sampleAnswer: "Sure. After school.", keywordsToDetect: ["sure", "after", "school"] },
    { id: "yle-s10", taskNumber: 10, type: "free-speaking", promptText: "Free speaking: 'Tell me about your favorite school supply.'", vietnamesePrompt: "Nhiệm vụ 10: Nói tự do về dụng cụ học tập yêu thích", image: "/images/yle/pencil_sharpener.png", referenceAudioUrl: "/audio/yle/s10.mp3", sampleAnswer: "My favorite school supply is my pencil sharpener.", keywordsToDetect: ["favorite", "pencil", "sharpener"] }
  ],

  lesson: {
    id: "yle-l1",
    unitId: "yle-practice",
    title: "Cambridge Movers Practice Test",
    vietnameseTitle: "Bài Thi Mẫu Cambridge Movers",
    description: "Tổng hợp 20 câu hỏi luyện tập chuẩn Cambridge Movers và 10 nhiệm vụ nói đánh giá phản xạ toàn diện.",
    vocabulary: [
      { id: "yle-v1", word: "popcorn", phonetic: "/ˈpɑːp.kɔːrn/", vietnameseMeaning: "bỏng ngô", meaning_vi: "bỏng ngô", image: "/images/yle/popcorn.png", audioUrl: "/audio/yle/popcorn.mp3", audio: "/audio/yle/popcorn.mp3", exampleSentence: "I want popcorn.", example: "I want popcorn." },
      { id: "yle-v2", word: "cashier", phonetic: "/kæˈʃɪr/", vietnameseMeaning: "thu ngân", meaning_vi: "thu ngân", image: "/images/yle/cashier.png", audioUrl: "/audio/yle/cashier.mp3", audio: "/audio/yle/cashier.mp3", exampleSentence: "The cashier works at the supermarket.", example: "The cashier works at the supermarket." },
      { id: "yle-v3", word: "dictionary", phonetic: "/ˈdɪk.ʃən.er.i/", vietnameseMeaning: "từ điển", meaning_vi: "từ điển", image: "/images/yle/dictionary.png", audioUrl: "/audio/yle/dictionary.mp3", audio: "/audio/yle/dictionary.mp3", exampleSentence: "I have a dictionary.", example: "I have a dictionary." },
      { id: "yle-v4", word: "aquarium", phonetic: "/əˈkweə.ri.əm/", vietnameseMeaning: "thủy cung", meaning_vi: "thủy cung", image: "/images/yle/aquarium.png", audioUrl: "/audio/yle/aquarium.mp3", audio: "/audio/yle/aquarium.mp3", exampleSentence: "We were at the aquarium.", example: "We were at the aquarium." }
    ],
    modelPattern: {
      id: "yle-m1",
      title: "Movers Final Review Pattern",
      pattern: "Reviewing all key grammar patterns from Units 1 to 8: Wants, Works at, Taller than, Was/Were, There were/weren't.",
      image: "/images/yle/pattern.png",
      audioUrl: "/audio/yle/pattern.mp3",
      audio: "/audio/yle/pattern.mp3",
      dialogue: [
        { speaker: "Examiner", text: "Where were you yesterday?", vietnameseMeaning: "Hôm qua em đã ở đâu?", audioUrl: "/audio/yle/d1.mp3" },
        { speaker: "Candidate", text: "I was at the beach. It was sunny.", vietnameseMeaning: "Em đã ở bãi biển. Trời có nắng.", audioUrl: "/audio/yle/d2.mp3" }
      ],
      vietnameseExplanation: "Bài ôn tập chuẩn hóa Cambridge Movers đánh giá tổng hợp kỹ năng nghe, đọc, viết và nói từ Unit 1 đến Unit 8."
    },
    completed: {
      title: "Chúc mừng bạn đã hoàn thành YLE Practice Test!",
      subtitle: "Cambridge Movers Practice Test (Units 1 - 8)",
      badgeImage: "/images/badges/yle_trophy.png",
      encouragementVi: "Xuất sắc! Bạn đã hoàn thành toàn bộ khóa học Everybody Up 3!",
      unlockedNext: "Hoàn thành khóa học"
    }
  }
};

module.exports = yleData;
