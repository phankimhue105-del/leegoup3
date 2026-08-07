const cu4Lesson = {
  id: "cu4-l1",
  unitId: "checkup-4",
  title: "Check Up 4 Lesson",
  vietnameseTitle: "Bài Ôn Tập Check Up 4 (Units 7 & 8)",
  description: "Ôn tập kiến thức từ vựng và ngữ pháp từ Unit 7 (Out and About) và Unit 8 (Things We Use).",
  vocabulary: [
    { id: "cu4-v1", word: "amusement park", phonetic: "/əˈmjuːz.mənt pɑːrk/", vietnameseMeaning: "công viên giải trí", meaning_vi: "công viên giải trí", image: "/images/checkup4/amusement_park.png", audioUrl: "/audio/checkup4/amusement_park.mp3", audio: "/audio/checkup4/amusement_park.mp3", exampleSentence: "They were at the amusement park.", example: "They were at the amusement park." },
    { id: "cu4-v2", word: "calculator", phonetic: "/ˈkæl.kjə.leɪ.t̬ɚ/", vietnameseMeaning: "máy tính cầm tay", meaning_vi: "máy tính cầm tay", image: "/images/checkup4/calculator.png", audioUrl: "/audio/checkup4/calculator.mp3", audio: "/audio/checkup4/calculator.mp3", exampleSentence: "A calculator was on the table.", example: "A calculator was on the table." }
  ],
  modelPattern: {
    id: "cu4-m1",
    title: "Check Up 4 Review Pattern",
    pattern: "Where were they yesterday? They were at the bookstore. / Were there any scissors on the desk? Yes, there were.",
    image: "/images/checkup4/pattern.png",
    audioUrl: "/audio/checkup4/pattern.mp3",
    audio: "/audio/checkup4/pattern.mp3",
    dialogue: [
      { speaker: "Danny", text: "Where was he yesterday?", vietnameseMeaning: "Cậu ấy đã ở đâu ngày hôm qua?", audioUrl: "/audio/checkup4/d1.mp3" },
      { speaker: "Emma", text: "He was at the aquarium. There were some fish there.", vietnameseMeaning: "Cậu ấy đã ở thủy cung. Đã có vài con cá ở đó.", audioUrl: "/audio/checkup4/d2.mp3" }
    ],
    vietnameseExplanation: "Ôn tập tổng hợp thì quá khứ đơn với động từ to be (was/were) và cấu trúc có/không có đồ vật (there were / there weren't)."
  },
  practiceQuestions: [
    {
      id: "cu4-q1",
      type: "multiple-choice",
      questionText: "Unit 7 Vocabulary: What does 'amusement park' mean?",
      options: ["Công viên giải trí", "Bãi biển", "Bảo tàng", "Hiệu thuốc"],
      correctAnswer: "Công viên giải trí",
      explanation_vi: "Đúng. 'amusement park' nghĩa là công viên giải trí.",
      vietnameseExplanation: "Đúng. 'amusement park' nghĩa là công viên giải trí."
    },
    {
      id: "cu4-q2",
      type: "multiple-choice",
      questionText: "Unit 8 Vocabulary: What is 'calculator' in Vietnamese?",
      options: ["Máy tính cầm tay", "Từ điển", "Hộp cơm trưa", "Cái dập ghim"],
      correctAnswer: "Máy tính cầm tay",
      explanation_vi: "Đúng. 'calculator' nghĩa là máy tính cầm tay.",
      vietnameseExplanation: "Đúng. 'calculator' nghĩa là máy tính cầm tay."
    },
    {
      id: "cu4-q3",
      type: "multiple-choice",
      questionText: "Unit 7 Grammar: 'Where _____ he yesterday? He was at the museum.'",
      options: ["was", "were", "is", "are"],
      correctAnswer: "was",
      explanation_vi: "Đúng. Chủ ngữ 'he' ở quá khứ đi với 'was'.",
      vietnameseExplanation: "Đúng. Chủ ngữ 'he' ở quá khứ đi với 'was'."
    },
    {
      id: "cu4-q4",
      type: "multiple-choice",
      questionText: "Unit 8 Grammar: 'There _____ some magazines on the table.'",
      options: ["were", "was", "is", "are"],
      correctAnswer: "were",
      explanation_vi: "Đúng. 'magazines' danh từ số nhiều quá khứ đi với 'were'.",
      vietnameseExplanation: "Đúng. 'magazines' danh từ số nhiều quá khứ đi với 'were'."
    },
    {
      id: "cu4-q5",
      type: "listening",
      questionText: "Listen and choose the location:",
      promptAudioUrl: "/audio/checkup4/bookstore.mp3",
      options: ["bookstore", "pharmacy", "coffee shop"],
      correctAnswer: "bookstore",
      explanation_vi: "Đúng. Đoạn âm thanh đọc từ 'bookstore'.",
      vietnameseExplanation: "Đúng. Đoạn âm thanh đọc từ 'bookstore'."
    },
    {
      id: "cu4-q6",
      type: "multiple-choice",
      questionText: "Reading: 'How was the weather yesterday? It was sunny.' How was the weather yesterday?",
      options: ["It was sunny.", "It was rainy.", "It was cloudy.", "It was snowy."],
      correctAnswer: "It was sunny.",
      explanation_vi: "Đúng. Theo đoạn văn thời tiết hôm qua trời nắng (sunny).",
      vietnameseExplanation: "Đúng. Theo đoạn văn thời tiết hôm qua trời nắng (sunny)."
    },
    {
      id: "cu4-q7",
      type: "multiple-choice",
      questionText: "Dialogue: A: 'Were there cell phones in 1940?' B: '_____'",
      options: ["No, there weren't.", "Yes, there is.", "No, it wasn't.", "Yes, they do."],
      correctAnswer: "No, there weren't.",
      explanation_vi: "Đúng. Phủ định ngắn số nhiều quá khứ: 'No, there weren't.'",
      vietnameseExplanation: "Đúng. Phủ định ngắn số nhiều quá khứ: 'No, there weren't.'"
    },
    {
      id: "cu4-q8",
      type: "multiple-choice",
      questionText: "Mixed Review: 'Where was the stapler yesterday? It _____ on the desk.'",
      options: ["was", "were", "is", "are"],
      correctAnswer: "was",
      explanation_vi: "Đúng. 'the stapler' danh từ số ít quá khứ đi với 'was'.",
      vietnameseExplanation: "Đúng. 'the stapler' danh từ số ít quá khứ đi với 'was'."
    }
  ],
  speakingTask: {
    id: "cu4-s",
    promptText: "1. Vocabulary: amusement park | 2. Sentence Pattern: They were at the bookstore yesterday. | 3. Question & Answer: Where was the calculator? -> It was on the desk. | 4. Dialogue: Were there any scissors? -> Yes, there were. | 5. Role-play: How was the weather yesterday? -> It was sunny.",
    vietnamesePrompt: "Thực hành 5 bài tập nói tổng hợp cho Check Up 4.",
    image: "/images/checkup4/speaking.png",
    referenceAudioUrl: "/audio/checkup4/speaking.mp3",
    sampleAnswer: "amusement park. They were at the bookstore yesterday. It was on the desk. Yes, there were. It was sunny.",
    keywordsToDetect: ["park", "bookstore", "desk", "were", "sunny"],
    tasks: [
      { id: "cu4-s1", taskNumber: 1, type: "read-word", promptText: "Read vocabulary: 'amusement park'", vietnamesePrompt: "Nhiệm vụ 1: Đọc từ 'amusement park'", image: "/images/checkup4/amusement_park.png", referenceAudioUrl: "/audio/checkup4/amusement_park.mp3", sampleAnswer: "amusement park", keywordsToDetect: ["amusement", "park"] },
      { id: "cu4-s2", taskNumber: 2, type: "read-sentence", promptText: "Read sentence: 'They were at the bookstore yesterday.'", vietnamesePrompt: "Nhiệm vụ 2: Đọc câu vị trí quá khứ", image: "/images/checkup4/bookstore.png", referenceAudioUrl: "/audio/checkup4/sentence.mp3", sampleAnswer: "They were at the bookstore yesterday.", keywordsToDetect: ["bookstore", "yesterday"] },
      { id: "cu4-s3", taskNumber: 3, type: "answer-question", promptText: "Answer: 'Where was the calculator?'", vietnamesePrompt: "Nhiệm vụ 3: Trả lời vị trí máy tính", image: "/images/checkup4/calculator.png", referenceAudioUrl: "/audio/checkup4/question.mp3", sampleAnswer: "It was on the desk.", keywordsToDetect: ["desk", "was"] },
      { id: "cu4-s4", taskNumber: 4, type: "role-play", promptText: "Role-play: 'Were there any scissors?' -> 'Yes, there were.'", vietnamesePrompt: "Nhiệm vụ 4: Đóng vai trả lời sự tồn tại đồ vật", image: "/images/checkup4/scissors.png", referenceAudioUrl: "/audio/checkup4/roleplay.mp3", sampleAnswer: "Yes, there were.", keywordsToDetect: ["yes", "were"] },
      { id: "cu4-s5", taskNumber: 5, type: "role-play", promptText: "Role-play: 'How was the weather yesterday?' -> 'It was sunny.'", vietnamesePrompt: "Nhiệm vụ 5: Đóng vai trả lời thời tiết", image: "/images/checkup4/sunny.png", referenceAudioUrl: "/audio/checkup4/roleplay2.mp3", sampleAnswer: "It was sunny.", keywordsToDetect: ["sunny", "was"] }
    ]
  },
  completed: {
    title: "Chúc mừng bạn đã hoàn thành Check Up 4!",
    subtitle: "Check Up 4 - Ôn tập Units 7 & 8",
    badgeImage: "/images/badges/checkup4_trophy.png",
    encouragementVi: "Xuất sắc! Bạn đã vượt qua bài Check Up 4 ôn tập Units 7 & 8!",
    unlockedNext: "YLE Practice (Cambridge Movers Test)"
  }
};

module.exports = cu4Lesson;
