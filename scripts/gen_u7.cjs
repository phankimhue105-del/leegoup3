const fs = require('fs');
const path = require('path');

const u7Lessons = [
  {
    id: "u7-l1",
    unitId: "unit-7",
    title: "Lesson 1",
    vietnameseTitle: "Bài 1: Places to Go (Các địa điểm vui chơi)",
    description: "Học từ vựng các địa điểm và mẫu câu 'Where was he/she yesterday? He/She was at the beach.'",
    vocabulary: [
      { id: "u7l1-v1", word: "beach", phonetic: "/biːtʃ/", vietnameseMeaning: "bãi biển", meaning_vi: "bãi biển", image: "/images/unit7/lesson1/beach.png", audioUrl: "/audio/unit7/lesson1/beach.mp3", audio: "/audio/unit7/lesson1/beach.mp3", exampleSentence: "He was at the beach yesterday.", example: "He was at the beach yesterday." },
      { id: "u7l1-v2", word: "aquarium", phonetic: "/əˈkweə.ri.əm/", vietnameseMeaning: "thủy cung", meaning_vi: "thủy cung", image: "/images/unit7/lesson1/aquarium.png", audioUrl: "/audio/unit7/lesson1/aquarium.mp3", audio: "/audio/unit7/lesson1/aquarium.mp3", exampleSentence: "She was at the aquarium.", example: "She was at the aquarium." },
      { id: "u7l1-v3", word: "amusement park", phonetic: "/əˈmjuːz.mənt pɑːrk/", vietnameseMeaning: "công viên giải trí", meaning_vi: "công viên giải trí", image: "/images/unit7/lesson1/amusement_park.png", audioUrl: "/audio/unit7/lesson1/amusement_park.mp3", audio: "/audio/unit7/lesson1/amusement_park.mp3", exampleSentence: "They were at the amusement park.", example: "They were at the amusement park." },
      { id: "u7l1-v4", word: "museum", phonetic: "/mjuːˈziː.əm/", vietnameseMeaning: "bảo tàng", meaning_vi: "bảo tàng", image: "/images/unit7/lesson1/museum.png", audioUrl: "/audio/unit7/lesson1/museum.mp3", audio: "/audio/unit7/lesson1/museum.mp3", exampleSentence: "He was at the museum.", example: "He was at the museum." },
      { id: "u7l1-v5", word: "hotel", phonetic: "/hoʊˈtel/", vietnameseMeaning: "khách sạn", meaning_vi: "khách sạn", image: "/images/unit7/lesson1/hotel.png", audioUrl: "/audio/unit7/lesson1/hotel.mp3", audio: "/audio/unit7/lesson1/hotel.mp3", exampleSentence: "She was at the hotel.", example: "She was at the hotel." },
      { id: "u7l1-v6", word: "pool", phonetic: "/puːl/", vietnameseMeaning: "bể bơi", meaning_vi: "bể bơi", image: "/images/unit7/lesson1/pool.png", audioUrl: "/audio/unit7/lesson1/pool.mp3", audio: "/audio/unit7/lesson1/pool.mp3", exampleSentence: "We were at the pool.", example: "We were at the pool." }
    ],
    modelPattern: {
      id: "u7l1-m1",
      title: "Where Someone Was Pattern",
      pattern: "Where was he/she yesterday? He/She was at the beach. / Was he/she at the beach yesterday? Yes, he/she was. / No, he/she wasn't. He/She was at the aquarium.",
      image: "/images/unit7/lesson1/pattern.png",
      audioUrl: "/audio/unit7/lesson1/pattern.mp3",
      audio: "/audio/unit7/lesson1/pattern.mp3",
      dialogue: [
        { speaker: "Danny", text: "Where was he yesterday?", vietnameseMeaning: "Cậu ấy đã ở đâu ngày hôm qua?", audioUrl: "/audio/unit7/lesson1/d1.mp3" },
        { speaker: "Emma", text: "He was at the beach.", vietnameseMeaning: "Cậu ấy đã ở bãi biển.", audioUrl: "/audio/unit7/lesson1/d2.mp3" }
      ],
      vietnameseExplanation: "'Where was he/she yesterday?' dùng để hỏi vị trí của một người trong quá khứ. Trả lời bằng 'He/She was at...'."
    },
    practiceQuestions: [
      {
        id: "u7l1-q1",
        type: "picture-select",
        questionText: "Look at the picture and choose the word for 'bãi biển':",
        options: ["beach", "aquarium", "museum"],
        optionImages: ["/images/unit7/lesson1/beach.png", "/images/unit7/lesson1/aquarium.png", "/images/unit7/lesson1/museum.png"],
        correctAnswer: "beach",
        explanation_vi: "Đúng. 'beach' nghĩa là bãi biển.",
        vietnameseExplanation: "Đúng. 'beach' nghĩa là bãi biển."
      },
      {
        id: "u7l1-q2",
        type: "picture-select",
        questionText: "Select the correct picture for 'aquarium':",
        options: ["aquarium", "pool", "hotel"],
        optionImages: ["/images/unit7/lesson1/aquarium.png", "/images/unit7/lesson1/pool.png", "/images/unit7/lesson1/hotel.png"],
        correctAnswer: "aquarium",
        explanation_vi: "Đúng. 'aquarium' nghĩa là thủy cung.",
        vietnameseExplanation: "Đúng. 'aquarium' nghĩa là thủy cung."
      },
      {
        id: "u7l1-q3",
        type: "multiple-choice",
        questionText: "What does 'amusement park' mean?",
        options: ["Công viên giải trí", "Bãi biển", "Bảo tàng", "Khách sạn"],
        correctAnswer: "Công viên giải trí",
        explanation_vi: "Đúng. 'amusement park' có nghĩa là công viên giải trí.",
        vietnameseExplanation: "Đúng. 'amusement park' có nghĩa là công viên giải trí."
      },
      {
        id: "u7l1-q4",
        type: "listening",
        questionText: "Listen and choose the location you hear:",
        promptAudioUrl: "/audio/unit7/lesson1/museum.mp3",
        options: ["museum", "hotel", "pool"],
        correctAnswer: "museum",
        explanation_vi: "Đúng. Âm thanh đọc từ 'museum'.",
        vietnameseExplanation: "Đúng. Âm thanh đọc từ 'museum'."
      },
      {
        id: "u7l1-q5",
        type: "matching",
        questionText: "Match the words with their Vietnamese meanings:",
        matchingPairs: [
          { leftId: "l1", leftText: "beach", rightId: "r1", rightText: "bãi biển" },
          { leftId: "l2", leftText: "aquarium", rightId: "r2", rightText: "thủy cung" },
          { leftId: "l3", leftText: "pool", rightId: "r3", rightText: "bể bơi" }
        ],
        correctAnswer: "beach-bãi biển, aquarium-thủy cung, pool-bể bơi",
        explanation_vi: "Đúng. Bạn đã ghép đúng từ vựng.",
        vietnameseExplanation: "Đúng. Bạn đã ghép đúng từ vựng."
      },
      {
        id: "u7l1-q6",
        type: "fill-in-blank",
        questionText: "He was at the _____ (bảo tàng) yesterday.",
        correctAnswer: "museum",
        explanation_vi: "Đúng. 'museum' nghĩa là bảo tàng.",
        vietnameseExplanation: "Đúng. 'museum' nghĩa là bảo tàng."
      },
      {
        id: "u7l1-q7",
        type: "multiple-choice",
        questionText: "Dialogue: A: 'Where was she yesterday?' B: '_____' (ở bể bơi)",
        options: ["She was at the pool.", "She is at the pool.", "He was at the pool."],
        correctAnswer: "She was at the pool.",
        explanation_vi: "Đúng. Câu trả lời quá khứ cho 'she' là 'She was at the pool.'",
        vietnameseExplanation: "Đúng. Câu trả lời quá khứ cho 'she' là 'She was at the pool.'"
      },
      {
        id: "u7l1-q8",
        type: "multiple-choice",
        questionText: "Was he at the hotel yesterday? No, he _____.",
        options: ["wasn't", "isn't", "don't"],
        correctAnswer: "wasn't",
        explanation_vi: "Đúng. Phủ định quá khứ của 'was' là 'wasn't'.",
        vietnameseExplanation: "Đúng. Phủ định quá khứ của 'was' là 'wasn't'."
      },
      {
        id: "u7l1-q9",
        type: "multiple-choice",
        questionText: "Where was he yesterday? (Bãi biển)",
        options: ["He was at the beach.", "He was at the museum.", "She was at the beach."],
        correctAnswer: "He was at the beach.",
        explanation_vi: "Đúng. 'He was at the beach' nghĩa là cậu ấy đã ở bãi biển.",
        vietnameseExplanation: "Đúng. 'He was at the beach' nghĩa là cậu ấy đã ở bãi biển."
      },
      {
        id: "u7l1-q10",
        type: "multiple-choice",
        questionText: "Was she at the aquarium yesterday? Yes, she _____.",
        options: ["was", "is", "were"],
        correctAnswer: "was",
        explanation_vi: "Đúng. Trả lời khẳng định ngắn 'Yes, she was.'",
        vietnameseExplanation: "Đúng. Trả lời khẳng định ngắn 'Yes, she was.'"
      }
    ],
    speakingTask: {
      id: "u7l1-s",
      promptText: "1. Read: beach | 2. Read: aquarium | 3. Read: He was at the beach yesterday. | 4. Answer: Where was she yesterday? -> She was at the museum. | 5. Role-play: Was he at the pool? -> No, he wasn't.",
      vietnamesePrompt: "Thực hành 5 nhiệm vụ nói: Đọc từ vựng, đọc câu và đóng vai trả lời.",
      image: "/images/unit7/lesson1/speaking.png",
      referenceAudioUrl: "/audio/unit7/lesson1/speaking.mp3",
      sampleAnswer: "beach. aquarium. He was at the beach yesterday. She was at the museum. No, he wasn't.",
      keywordsToDetect: ["beach", "aquarium", "museum", "was", "no"],
      tasks: [
        { id: "u7l1-s1", taskNumber: 1, type: "read-word", promptText: "Read vocabulary: 'beach'", vietnamesePrompt: "Nhiệm vụ 1: Đọc từ 'beach'", image: "/images/unit7/lesson1/beach.png", referenceAudioUrl: "/audio/unit7/lesson1/beach.mp3", sampleAnswer: "beach", keywordsToDetect: ["beach"] },
        { id: "u7l1-s2", taskNumber: 2, type: "read-word", promptText: "Read vocabulary: 'aquarium'", vietnamesePrompt: "Nhiệm vụ 2: Đọc từ 'aquarium'", image: "/images/unit7/lesson1/aquarium.png", referenceAudioUrl: "/audio/unit7/lesson1/aquarium.mp3", sampleAnswer: "aquarium", keywordsToDetect: ["aquarium"] },
        { id: "u7l1-s3", taskNumber: 3, type: "read-sentence", promptText: "Read sentence: 'He was at the beach yesterday.'", vietnamesePrompt: "Nhiệm vụ 3: Đọc câu về vị trí quá khứ", image: "/images/unit7/lesson1/speaking.png", referenceAudioUrl: "/audio/unit7/lesson1/sentence.mp3", sampleAnswer: "He was at the beach yesterday.", keywordsToDetect: ["beach", "yesterday"] },
        { id: "u7l1-s4", taskNumber: 4, type: "answer-question", promptText: "Answer: 'Where was she yesterday?'", vietnamesePrompt: "Nhiệm vụ 4: Trả lời câu hỏi nơi chốn", image: "/images/unit7/lesson1/museum.png", referenceAudioUrl: "/audio/unit7/lesson1/question.mp3", sampleAnswer: "She was at the museum.", keywordsToDetect: ["museum", "was"] },
        { id: "u7l1-s5", taskNumber: 5, type: "role-play", promptText: "Role-play: 'Was he at the pool yesterday?' -> 'No, he wasn't.'", vietnamesePrompt: "Nhiệm vụ 5: Đóng vai trả lời phủ định", image: "/images/unit7/lesson1/hotel.png", referenceAudioUrl: "/audio/unit7/lesson1/roleplay.mp3", sampleAnswer: "No, he wasn't. He was at the hotel.", keywordsToDetect: ["no", "wasn't", "hotel"] }
      ]
    },
    completed: {
      title: "Chúc mừng bạn đã hoàn thành Bài 1!",
      subtitle: "Unit 7: Out and About - Lesson 1: Places to Go",
      badgeImage: "/images/badges/u7l1_star.png",
      encouragementVi: "Tuyệt vời! Bạn đã thuộc các địa điểm giải trí và câu hỏi 'Where was he/she yesterday?'!",
      unlockedNext: "Lesson 2: Places to Go (Cửa hàng & dịch vụ)"
    }
  },
  {
    id: "u7-l2",
    unitId: "unit-7",
    title: "Lesson 2",
    vietnameseTitle: "Bài 2: Places to Go (Cửa hàng & dịch vụ)",
    description: "Học từ vựng về các cửa hàng và mẫu câu 'Where were they yesterday? They were at the bookstore.'",
    vocabulary: [
      { id: "u7l2-v1", word: "bookstore", phonetic: "/ˈbʊk.stɔːr/", vietnameseMeaning: "hiệu sách", meaning_vi: "hiệu sách", image: "/images/unit7/lesson2/bookstore.png", audioUrl: "/audio/unit7/lesson2/bookstore.mp3", audio: "/audio/unit7/lesson2/bookstore.mp3", exampleSentence: "They were at the bookstore.", example: "They were at the bookstore." },
      { id: "u7l2-v2", word: "pharmacy", phonetic: "/ˈfɑːr.mə.si/", vietnameseMeaning: "hiệu thuốc", meaning_vi: "hiệu thuốc", image: "/images/unit7/lesson2/pharmacy.png", audioUrl: "/audio/unit7/lesson2/pharmacy.mp3", audio: "/audio/unit7/lesson2/pharmacy.mp3", exampleSentence: "She was at the pharmacy.", example: "She was at the pharmacy." },
      { id: "u7l2-v3", word: "toy store", phonetic: "/ˈtɔɪ stɔːr/", vietnameseMeaning: "cửa hàng đồ chơi", meaning_vi: "cửa hàng đồ chơi", image: "/images/unit7/lesson2/toy_store.png", audioUrl: "/audio/unit7/lesson2/toy_store.mp3", audio: "/audio/unit7/lesson2/toy_store.mp3", exampleSentence: "We were at the toy store.", example: "We were at the toy store." },
      { id: "u7l2-v4", word: "hair salon", phonetic: "/ˈheər səˌlɑːn/", vietnameseMeaning: "tiệm cắt tóc", meaning_vi: "tiệm cắt tóc", image: "/images/unit7/lesson2/hair_salon.png", audioUrl: "/audio/unit7/lesson2/hair_salon.mp3", audio: "/audio/unit7/lesson2/hair_salon.mp3", exampleSentence: "He was at the hair salon.", example: "He was at the hair salon." },
      { id: "u7l2-v5", word: "coffee shop", phonetic: "/ˈkɑː.fi ʃɑːp/", vietnameseMeaning: "quán cà phê", meaning_vi: "quán cà phê", image: "/images/unit7/lesson2/coffee_shop.png", audioUrl: "/audio/unit7/lesson2/coffee_shop.mp3", audio: "/audio/unit7/lesson2/coffee_shop.mp3", exampleSentence: "They were at the coffee shop.", example: "They were at the coffee shop." },
      { id: "u7l2-v6", word: "flower shop", phonetic: "/ˈflaʊ.ɚ ʃɑːp/", vietnameseMeaning: "cửa hàng hoa", meaning_vi: "cửa hàng hoa", image: "/images/unit7/lesson2/flower_shop.png", audioUrl: "/audio/unit7/lesson2/flower_shop.mp3", audio: "/audio/unit7/lesson2/flower_shop.mp3", exampleSentence: "She was at the flower shop.", example: "She was at the flower shop." }
    ],
    modelPattern: {
      id: "u7l2-m1",
      title: "Where Were They Pattern",
      pattern: "Where were they yesterday? They were at the bookstore. / Were they at the bookstore yesterday? Yes, they were. / No, they weren't. They were at the pharmacy.",
      image: "/images/unit7/lesson2/pattern.png",
      audioUrl: "/audio/unit7/lesson2/pattern.mp3",
      audio: "/audio/unit7/lesson2/pattern.mp3",
      dialogue: [
        { speaker: "Danny", text: "Where were they yesterday?", vietnameseMeaning: "Họ đã ở đâu ngày hôm qua?", audioUrl: "/audio/unit7/lesson2/d1.mp3" },
        { speaker: "Emma", text: "They were at the bookstore.", vietnameseMeaning: "Họ đã ở hiệu sách.", audioUrl: "/audio/unit7/lesson2/d2.mp3" }
      ],
      vietnameseExplanation: "'Where were they yesterday?' hỏi địa điểm của nhiều người trong quá khứ. Trả lời bằng 'They were at...'."
    },
    practiceQuestions: [
      { id: "u7l2-q1", type: "multiple-choice", questionText: "What is 'pharmacy' in Vietnamese?", options: ["Hiệu thuốc", "Cửa hàng đồ chơi", "Quán cà phê", "Hiệu sách"], correctAnswer: "Hiệu thuốc", explanation_vi: "Đúng. 'pharmacy' có nghĩa là hiệu thuốc.", vietnameseExplanation: "Đúng. 'pharmacy' có nghĩa là hiệu thuốc." },
      { id: "u7l2-q2", type: "multiple-choice", questionText: "Where _____ they yesterday?", options: ["were", "was", "are", "is"], correctAnswer: "were", explanation_vi: "Đúng. Chủ ngữ 'they' ở quá khứ đi với động từ 'were'.", vietnameseExplanation: "Đúng. Chủ ngữ 'they' ở quá khứ đi với động từ 'were'." },
      { id: "u7l2-q3", type: "multiple-choice", questionText: "They _____ at the coffee shop yesterday.", options: ["were", "was", "is", "are"], correctAnswer: "were", explanation_vi: "Đúng. 'They' đi với 'were' ở thì quá khứ.", vietnameseExplanation: "Đúng. 'They' đi với 'were' ở thì quá khứ." },
      { id: "u7l2-q4", type: "listening", questionText: "Listen and choose the store name:", promptAudioUrl: "/audio/unit7/lesson2/toy_store.mp3", options: ["toy store", "hair salon", "flower shop"], correctAnswer: "toy store", explanation_vi: "Đúng. Bạn nghe thấy từ 'toy store'.", vietnameseExplanation: "Đúng. Bạn nghe thấy từ 'toy store'." },
      { id: "u7l2-q5", type: "multiple-choice", questionText: "Were they at the hair salon? Yes, they _____.", options: ["were", "was", "are", "do"], correctAnswer: "were", explanation_vi: "Đúng. Khẳng định ngắn số nhiều: 'Yes, they were.'", vietnameseExplanation: "Đúng. Khẳng định ngắn số nhiều: 'Yes, they were.'" },
      { id: "u7l2-q6", type: "fill-in-blank", questionText: "They were at the _____ (cửa hàng hoa) yesterday.", correctAnswer: "flower shop", explanation_vi: "Đúng. 'flower shop' nghĩa là cửa hàng hoa.", vietnameseExplanation: "Đúng. 'flower shop' nghĩa là cửa hàng hoa." },
      { id: "u7l2-q7", type: "multiple-choice", questionText: "Choose the correct sentence structure:", options: ["They were at the bookstore.", "They at the bookstore were.", "Were they at bookstore."], correctAnswer: "They were at the bookstore.", explanation_vi: "Đúng. Cấu trúc câu khẳng định đúng ngữ pháp.", vietnameseExplanation: "Đúng. Cấu trúc câu khẳng định đúng ngữ pháp." },
      { id: "u7l2-q8", type: "multiple-choice", questionText: "A: Were they at the toy store yesterday? B: No, they _____.", options: ["weren't. They were at the pharmacy.", "wasn't.", "don't."], correctAnswer: "weren't. They were at the pharmacy.", explanation_vi: "Đúng. Phủ định quá khứ số nhiều là 'weren't'.", vietnameseExplanation: "Đúng. Phủ định quá khứ số nhiều là 'weren't'." },
      { id: "u7l2-q9", type: "picture-select", questionText: "Select the picture for 'coffee shop':", options: ["coffee shop", "bookstore", "pharmacy"], optionImages: ["/images/unit7/lesson2/coffee_shop.png", "/images/unit7/lesson2/bookstore.png", "/images/unit7/lesson2/pharmacy.png"], correctAnswer: "coffee shop", explanation_vi: "Đúng. Hình ảnh thể hiện 'coffee shop'.", vietnameseExplanation: "Đúng. Hình ảnh thể hiện 'coffee shop'." },
      { id: "u7l2-q10", type: "multiple-choice", questionText: "Where were they yesterday? They _____ at the hair salon.", options: ["were", "was", "are", "don't"], correctAnswer: "were", explanation_vi: "Đúng. 'They' đi với 'were' trong câu miêu tả quá khứ.", vietnameseExplanation: "Đúng. 'They' đi với 'were' trong câu miêu tả quá khứ." }
    ],
    speakingTask: {
      id: "u7l2-s",
      promptText: "1. Read: bookstore | 2. Read: pharmacy | 3. Read: They were at the coffee shop yesterday. | 4. Answer: Where were they yesterday? -> They were at the toy store. | 5. Role-play: Were they at the hair salon? -> Yes, they were.",
      vietnamesePrompt: "Luyện nói 5 bài tập: Đọc từ, đọc câu và đóng vai.",
      image: "/images/unit7/lesson2/speaking.png",
      referenceAudioUrl: "/audio/unit7/lesson2/speaking.mp3",
      sampleAnswer: "bookstore. pharmacy. They were at the coffee shop yesterday. They were at the toy store. Yes, they were.",
      keywordsToDetect: ["bookstore", "pharmacy", "coffee", "toy", "were"],
      tasks: [
        { id: "u7l2-s1", taskNumber: 1, type: "read-word", promptText: "Read vocabulary: 'bookstore'", vietnamesePrompt: "Nhiệm vụ 1: Đọc từ 'bookstore'", image: "/images/unit7/lesson2/bookstore.png", referenceAudioUrl: "/audio/unit7/lesson2/bookstore.mp3", sampleAnswer: "bookstore", keywordsToDetect: ["bookstore"] },
        { id: "u7l2-s2", taskNumber: 2, type: "read-word", promptText: "Read vocabulary: 'pharmacy'", vietnamesePrompt: "Nhiệm vụ 2: Đọc từ 'pharmacy'", image: "/images/unit7/lesson2/pharmacy.png", referenceAudioUrl: "/audio/unit7/lesson2/pharmacy.mp3", sampleAnswer: "pharmacy", keywordsToDetect: ["pharmacy"] },
        { id: "u7l2-s3", taskNumber: 3, type: "read-sentence", promptText: "Read sentence: 'They were at the coffee shop yesterday.'", vietnamesePrompt: "Nhiệm vụ 3: Đọc câu về vị trí số nhiều", image: "/images/unit7/lesson2/coffee_shop.png", referenceAudioUrl: "/audio/unit7/lesson2/sentence.mp3", sampleAnswer: "They were at the coffee shop yesterday.", keywordsToDetect: ["coffee", "shop", "yesterday"] },
        { id: "u7l2-s4", taskNumber: 4, type: "answer-question", promptText: "Answer: 'Where were they yesterday?'", vietnamesePrompt: "Nhiệm vụ 4: Trả lời câu hỏi nơi chốn", image: "/images/unit7/lesson2/toy_store.png", referenceAudioUrl: "/audio/unit7/lesson2/question.mp3", sampleAnswer: "They were at the toy store.", keywordsToDetect: ["toy", "store", "were"] },
        { id: "u7l2-s5", taskNumber: 5, type: "role-play", promptText: "Role-play: 'Were they at the hair salon yesterday?' -> 'Yes, they were.'", vietnamesePrompt: "Nhiệm vụ 5: Đóng vai trả lời khẳng định", image: "/images/unit7/lesson2/hair_salon.png", referenceAudioUrl: "/audio/unit7/lesson2/roleplay.mp3", sampleAnswer: "Yes, they were.", keywordsToDetect: ["yes", "were"] }
      ]
    },
    completed: {
      title: "Chúc mừng bạn đã hoàn thành Bài 2!",
      subtitle: "Unit 7: Out and About - Lesson 2: Places to Go",
      badgeImage: "/images/badges/u7l2_star.png",
      encouragementVi: "Tuyệt vời! Bạn đã thành thạo mẫu câu hỏi vị trí số nhiều 'Where were they yesterday?'!",
      unlockedNext: "Lesson 3: Story (Mike's Watch)"
    }
  },
  {
    id: "u7-l3",
    unitId: "unit-7",
    title: "Lesson 3",
    vietnameseTitle: "Bài 3: Story (Mike's Watch)",
    description: "Đọc câu chuyện Mike's Watch, học mẫu câu hẹn giờ 'Let's meet here at five o'clock.' và bài học đúng giờ.",
    vocabulary: [
      { id: "u7l3-v1", word: "meet", phonetic: "/miːt/", vietnameseMeaning: "gặp mặt", meaning_vi: "gặp mặt", image: "/images/unit7/lesson3/meet.png", audioUrl: "/audio/unit7/lesson3/meet.mp3", audio: "/audio/unit7/lesson3/meet.mp3", exampleSentence: "Let's meet at five o'clock.", example: "Let's meet at five o'clock." },
      { id: "u7l3-v2", word: "five o'clock", phonetic: "/faɪv əˈklɑːk/", vietnameseMeaning: "5 giờ", meaning_vi: "5 giờ", image: "/images/unit7/lesson3/five_oclock.png", audioUrl: "/audio/unit7/lesson3/five_oclock.mp3", audio: "/audio/unit7/lesson3/five_oclock.mp3", exampleSentence: "It is five o'clock.", example: "It is five o'clock." },
      { id: "u7l3-v3", word: "watch", phonetic: "/wɑːtʃ/", vietnameseMeaning: "đồng hồ đeo tay", meaning_vi: "đồng hồ đeo tay", image: "/images/unit7/lesson3/watch.png", audioUrl: "/audio/unit7/lesson3/watch.mp3", audio: "/audio/unit7/lesson3/watch.mp3", exampleSentence: "This is my watch.", example: "This is my watch." },
      { id: "u7l3-v4", word: "see you then", phonetic: "/siː juː ðen/", vietnameseMeaning: "gặp lại bạn sau", meaning_vi: "gặp lại bạn sau", image: "/images/unit7/lesson3/see_you_then.png", audioUrl: "/audio/unit7/lesson3/see_you_then.mp3", audio: "/audio/unit7/lesson3/see_you_then.mp3", exampleSentence: "OK. See you then.", example: "OK. See you then." }
    ],
    modelPattern: {
      id: "u7l3-m1",
      title: "Making Appointments Pattern",
      pattern: "Let's meet here at five o'clock. OK. See you then.",
      image: "/images/unit7/lesson3/pattern.png",
      audioUrl: "/audio/unit7/lesson3/pattern.mp3",
      audio: "/audio/unit7/lesson3/pattern.mp3",
      dialogue: [
        { speaker: "Mike", text: "Let's meet here at five o'clock.", vietnameseMeaning: "Hãy gặp nhau ở đây lúc 5 giờ nhé.", audioUrl: "/audio/unit7/lesson3/d1.mp3" },
        { speaker: "Danny", text: "OK. See you then.", vietnameseMeaning: "Được rồi. Hẹn gặp lại bạn lúc đó.", audioUrl: "/audio/unit7/lesson3/d2.mp3" }
      ],
      vietnameseExplanation: "'Let's meet here at...' dùng để hẹn giờ gặp mặt. Bài học nhắc nhở học sinh luôn đúng giờ (Be on time)."
    },
    practiceQuestions: [
      { id: "u7l3-q1", type: "multiple-choice", questionText: "What time do Mike and Danny agree to meet?", options: ["At five o'clock", "At four o'clock", "At six o'clock"], correctAnswer: "At five o'clock", explanation_vi: "Đúng. Mike và Danny hẹn gặp lúc 5 giờ (five o'clock).", vietnameseExplanation: "Đúng. Mike và Danny hẹn gặp lúc 5 giờ (five o'clock)." },
      { id: "u7l3-q2", type: "multiple-choice", questionText: "What value does Lesson 3 teach?", options: ["Be on time.", "Be helpful.", "Be friendly."], correctAnswer: "Be on time.", explanation_vi: "Đúng. Bài học khuyên chúng ta hãy luôn đúng giờ (Be on time).", vietnameseExplanation: "Đúng. Bài học khuyên chúng ta hãy luôn đúng giờ (Be on time)." },
      { id: "u7l3-q3", type: "multiple-choice", questionText: "What does 'watch' mean in this lesson?", options: ["Đồng hồ đeo tay", "Tivi", "Máy ảnh"], correctAnswer: "Đồng hồ đeo tay", explanation_vi: "Đúng. 'watch' nghĩa là đồng hồ đeo tay.", vietnameseExplanation: "Đúng. 'watch' nghĩa là đồng hồ đeo tay." },
      { id: "u7l3-q4", type: "multiple-choice", questionText: "What does 'meet' mean?", options: ["Gặp mặt", "Chạy bộ", "Ăn uống"], correctAnswer: "Gặp mặt", explanation_vi: "Đúng. 'meet' nghĩa là gặp mặt.", vietnameseExplanation: "Đúng. 'meet' nghĩa là gặp mặt." },
      { id: "u7l3-q5", type: "multiple-choice", questionText: "What does 'See you then' mean?", options: ["Hẹn gặp lại bạn lúc đó.", "Rất vui gặp bạn.", "Chào buổi sáng."], correctAnswer: "Hẹn gặp lại bạn lúc đó.", explanation_vi: "Đúng. 'See you then' nghĩa là hẹn gặp lại lúc đó.", vietnameseExplanation: "Đúng. 'See you then' nghĩa là hẹn gặp lại lúc đó." },
      { id: "u7l3-q6", type: "multiple-choice", questionText: "'Let's meet here at five o'clock.' - Is this making an appointment?", options: ["True", "False"], correctAnswer: "True", explanation_vi: "Đúng. Đây là câu đưa ra lời hẹn gặp.", vietnameseExplanation: "Đúng. Đây là câu đưa ra lời hẹn gặp." },
      { id: "u7l3-q7", type: "multiple-choice", questionText: "A: Let's meet here at five o'clock. B: _____", options: ["OK. See you then.", "Thank you.", "You're welcome."], correctAnswer: "OK. See you then.", explanation_vi: "Đúng. Phản hồi lời hẹn: 'OK. See you then.'", vietnameseExplanation: "Đúng. Phản hồi lời hẹn: 'OK. See you then.'" },
      { id: "u7l3-q8", type: "fill-in-blank", questionText: "Let's _____ (gặp) at five o'clock.", correctAnswer: "meet", explanation_vi: "Đúng. 'meet' nghĩa là gặp mặt.", vietnameseExplanation: "Đúng. 'meet' nghĩa là gặp mặt." },
      { id: "u7l3-q9", type: "listening", questionText: "Listen to the response line:", promptAudioUrl: "/audio/unit7/lesson3/see_you_then.mp3", options: ["See you then", "See you tomorrow", "Good night"], correctAnswer: "See you then", explanation_vi: "Đúng. Mẫu câu phát ra là 'See you then'.", vietnameseExplanation: "Đúng. Mẫu câu phát ra là 'See you then'." },
      { id: "u7l3-q10", type: "multiple-choice", questionText: "Why is it good to be on time?", options: ["It shows respect and responsibility.", "Because we have a watch.", "Because it's sunny."], correctAnswer: "It shows respect and responsibility.", explanation_vi: "Đúng. Đúng giờ thể hiện sự tôn trọng và trách nhiệm.", vietnameseExplanation: "Đúng. Đúng giờ thể hiện sự tôn trọng và trách nhiệm." }
    ],
    speakingTask: {
      id: "u7l3-s",
      promptText: "1. Read: watch | 2. Read: meet | 3. Read: Let's meet here at five o'clock. | 4. Answer: What time should we meet? -> At five o'clock. | 5. Role-play: Let's meet here at five o'clock. -> OK. See you then.",
      vietnamesePrompt: "Luyện nói 5 bài tập theo cốt truyện.",
      image: "/images/unit7/lesson3/speaking.png",
      referenceAudioUrl: "/audio/unit7/lesson3/speaking.mp3",
      sampleAnswer: "watch. meet. Let's meet here at five o'clock. At five o'clock. OK. See you then.",
      keywordsToDetect: ["watch", "meet", "five", "clock", "then"],
      tasks: [
        { id: "u7l3-s1", taskNumber: 1, type: "read-word", promptText: "Read vocabulary: 'watch'", vietnamesePrompt: "Nhiệm vụ 1: Đọc từ 'watch'", image: "/images/unit7/lesson3/watch.png", referenceAudioUrl: "/audio/unit7/lesson3/watch.mp3", sampleAnswer: "watch", keywordsToDetect: ["watch"] },
        { id: "u7l3-s2", taskNumber: 2, type: "read-word", promptText: "Read vocabulary: 'meet'", vietnamesePrompt: "Nhiệm vụ 2: Đọc từ 'meet'", image: "/images/unit7/lesson3/meet.png", referenceAudioUrl: "/audio/unit7/lesson3/meet.mp3", sampleAnswer: "meet", keywordsToDetect: ["meet"] },
        { id: "u7l3-s3", taskNumber: 3, type: "read-sentence", promptText: "Read sentence: 'Let's meet here at five o'clock.'", vietnamesePrompt: "Nhiệm vụ 3: Đọc câu hẹn gặp", image: "/images/unit7/lesson3/five_oclock.png", referenceAudioUrl: "/audio/unit7/lesson3/sentence.mp3", sampleAnswer: "Let's meet here at five o'clock.", keywordsToDetect: ["meet", "five", "clock"] },
        { id: "u7l3-s4", taskNumber: 4, type: "answer-question", promptText: "Answer: 'What time should we meet?'", vietnamesePrompt: "Nhiệm vụ 4: Trả lời giờ hẹn", image: "/images/unit7/lesson3/five_oclock.png", referenceAudioUrl: "/audio/unit7/lesson3/question.mp3", sampleAnswer: "At five o'clock.", keywordsToDetect: ["five", "clock"] },
        { id: "u7l3-s5", taskNumber: 5, type: "role-play", promptText: "Role-play: 'Let's meet here at five o'clock.' -> 'OK. See you then.'", vietnamesePrompt: "Nhiệm vụ 5: Đóng vai trả lời hẹn giờ", image: "/images/unit7/lesson3/speaking.png", referenceAudioUrl: "/audio/unit7/lesson3/roleplay.mp3", sampleAnswer: "OK. See you then.", keywordsToDetect: ["ok", "see", "then"] }
      ]
    },
    completed: {
      title: "Chúc mừng bạn đã hoàn thành Bài 3!",
      subtitle: "Unit 7: Out and About - Lesson 3: Story (Mike's Watch)",
      badgeImage: "/images/badges/u7l3_star.png",
      encouragementVi: "Tuyệt vời! Bạn đã học được bài học 'Be on time' và cách hẹn giờ gặp bạn bè!",
      unlockedNext: "Lesson 4: Science (Weather)"
    }
  },
  {
    id: "u7-l4",
    unitId: "unit-7",
    title: "Lesson 4",
    vietnameseTitle: "Bài 4: Science (Weather - Thời tiết)",
    description: "Học từ vựng thời tiết và mẫu câu 'How's the weather today? It's sunny. / How was the weather yesterday? It was sunny.'",
    vocabulary: [
      { id: "u7l4-v1", word: "sunny", phonetic: "/ˈsʌn.i/", vietnameseMeaning: "có nắng", meaning_vi: "có nắng", image: "/images/unit7/lesson4/sunny.png", audioUrl: "/audio/unit7/lesson4/sunny.mp3", audio: "/audio/unit7/lesson4/sunny.mp3", exampleSentence: "It is sunny today.", example: "It is sunny today." },
      { id: "u7l4-v2", word: "rainy", phonetic: "/ˈreɪ.ni/", vietnameseMeaning: "có mưa", meaning_vi: "có mưa", image: "/images/unit7/lesson4/rainy.png", audioUrl: "/audio/unit7/lesson4/rainy.mp3", audio: "/audio/unit7/lesson4/rainy.mp3", exampleSentence: "It was rainy yesterday.", example: "It was rainy yesterday." },
      { id: "u7l4-v3", word: "cloudy", phonetic: "/ˈklaʊ.di/", vietnameseMeaning: "nhiều mây", meaning_vi: "nhiều mây", image: "/images/unit7/lesson4/cloudy.png", audioUrl: "/audio/unit7/lesson4/cloudy.mp3", audio: "/audio/unit7/lesson4/cloudy.mp3", exampleSentence: "It is cloudy today.", example: "It is cloudy today." },
      { id: "u7l4-v4", word: "windy", phonetic: "/ˈwɪn.di/", vietnameseMeaning: "nhiều gió", meaning_vi: "nhiều gió", image: "/images/unit7/lesson4/windy.png", audioUrl: "/audio/unit7/lesson4/windy.mp3", audio: "/audio/unit7/lesson4/windy.mp3", exampleSentence: "It was windy on Monday.", example: "It was windy on Monday." },
      { id: "u7l4-v5", word: "stormy", phonetic: "/ˈstɔːr.mi/", vietnameseMeaning: "có bão", meaning_vi: "có bão", image: "/images/unit7/lesson4/stormy.png", audioUrl: "/audio/unit7/lesson4/stormy.mp3", audio: "/audio/unit7/lesson4/stormy.mp3", exampleSentence: "It was stormy yesterday.", example: "It was stormy yesterday." },
      { id: "u7l4-v6", word: "snowy", phonetic: "/ˈsnoʊ.i/", vietnameseMeaning: "có tuyết", meaning_vi: "có tuyết", image: "/images/unit7/lesson4/snowy.png", audioUrl: "/audio/unit7/lesson4/snowy.mp3", audio: "/audio/unit7/lesson4/snowy.mp3", exampleSentence: "It is snowy in winter.", example: "It is snowy in winter." }
    ],
    modelPattern: {
      id: "u7l4-m1",
      title: "Asking About Weather Pattern",
      pattern: "How's the weather today? It's sunny. / How was the weather yesterday/on Monday? It was sunny.",
      image: "/images/unit7/lesson4/pattern.png",
      audioUrl: "/audio/unit7/lesson4/pattern.mp3",
      audio: "/audio/unit7/lesson4/pattern.mp3",
      dialogue: [
        { speaker: "Danny", text: "How was the weather yesterday?", vietnameseMeaning: "Thời tiết hôm qua thế nào?", audioUrl: "/audio/unit7/lesson4/d1.mp3" },
        { speaker: "Emma", text: "It was sunny.", vietnameseMeaning: "Trời đã có nắng.", audioUrl: "/audio/unit7/lesson4/d2.mp3" }
      ],
      vietnameseExplanation: "'How's the weather today?' hỏi thời tiết hiện tại. 'How was the weather yesterday?' hỏi thời tiết trong quá khứ."
    },
    practiceQuestions: [
      { id: "u7l4-q1", type: "multiple-choice", questionText: "How _____ the weather yesterday?", options: ["was", "is", "were"], correctAnswer: "was", explanation_vi: "Đúng. Thì quá khứ hỏi thời tiết số ít dùng 'was'.", vietnameseExplanation: "Đúng. Thì quá khứ hỏi thời tiết số ít dùng 'was'." },
      { id: "u7l4-q2", type: "multiple-choice", questionText: "What is 'stormy' in Vietnamese?", options: ["Có bão", "Có tuyết", "Có nắng"], correctAnswer: "Có bão", explanation_vi: "Đúng. 'stormy' nghĩa là có bão.", vietnameseExplanation: "Đúng. 'stormy' nghĩa là có bão." },
      { id: "u7l4-q3", type: "multiple-choice", questionText: "How's the weather today? It _____ sunny.", options: ["is", "was", "were"], correctAnswer: "is", explanation_vi: "Đúng. Hỏi hiện tại 'today' trả lời dùng 'is'.", vietnameseExplanation: "Đúng. Hỏi hiện tại 'today' trả lời dùng 'is'." },
      { id: "u7l4-q4", type: "listening", questionText: "Listen and choose the weather type:", promptAudioUrl: "/audio/unit7/lesson4/snowy.mp3", options: ["snowy", "rainy", "windy"], correctAnswer: "snowy", explanation_vi: "Đúng. Bạn nghe thấy từ 'snowy'.", vietnameseExplanation: "Đúng. Bạn nghe thấy từ 'snowy'." },
      { id: "u7l4-q5", type: "picture-select", questionText: "Select the picture for 'windy':", options: ["windy", "sunny", "stormy"], optionImages: ["/images/unit7/lesson4/windy.png", "/images/unit7/lesson4/sunny.png", "/images/unit7/lesson4/stormy.png"], correctAnswer: "windy", explanation_vi: "Đúng. Bức tranh thể hiện thời tiết nhiều gió.", vietnameseExplanation: "Đúng. Bức tranh thể hiện thời tiết nhiều gió." },
      { id: "u7l4-q6", type: "fill-in-blank", questionText: "How was the weather on Monday? It was _____ (nhiều mây).", correctAnswer: "cloudy", explanation_vi: "Đúng. 'cloudy' nghĩa là nhiều mây.", vietnameseExplanation: "Đúng. 'cloudy' nghĩa là nhiều mây." },
      { id: "u7l4-q7", type: "multiple-choice", questionText: "How was the weather _____? It was rainy.", options: ["yesterday", "today", "now"], correctAnswer: "yesterday", explanation_vi: "Đúng. 'was' đi với từ chỉ quá khứ 'yesterday'.", vietnameseExplanation: "Đúng. 'was' đi với từ chỉ quá khứ 'yesterday'." },
      { id: "u7l4-q8", type: "multiple-choice", questionText: "A: How's the weather today? B: It's _____.", options: ["sunny", "was sunny", "were sunny"], correctAnswer: "sunny", explanation_vi: "Đúng. Cấu trúc trả lời hiện tại 'It's + tính từ thời tiết'.", vietnameseExplanation: "Đúng. Cấu trúc trả lời hiện tại 'It's + tính từ thời tiết'." },
      { id: "u7l4-q9", type: "multiple-choice", questionText: "Yesterday it was _____, so I took an umbrella.", options: ["rainy", "sunny", "dry"], correctAnswer: "rainy", explanation_vi: "Đúng. 'rainy' (có mưa) nên cần mang dù.", vietnameseExplanation: "Đúng. 'rainy' (có mưa) nên cần mang dù." },
      { id: "u7l4-q10", type: "multiple-choice", questionText: "Unit Review: Which pair is opposite in weather temperature?", options: ["sunny and snowy", "cloudy and windy", "rainy and stormy"], correctAnswer: "sunny and snowy", explanation_vi: "Đúng. 'sunny' (nắng) và 'snowy' (tuyết) đối lập khí hậu.", vietnameseExplanation: "Đúng. 'sunny' và 'snowy' đối lập khí hậu." }
    ],
    speakingTask: {
      id: "u7l4-s",
      promptText: "1. Read: sunny | 2. Read: stormy | 3. Read: How was the weather on Monday? It was windy. | 4. Answer: How's the weather today? -> It's cloudy. | 5. Role-play: How was the weather yesterday? -> It was rainy.",
      vietnamesePrompt: "Thực hành 5 bài tập luyện nói chủ đề thời tiết.",
      image: "/images/unit7/lesson4/speaking.png",
      referenceAudioUrl: "/audio/unit7/lesson4/speaking.mp3",
      sampleAnswer: "sunny. stormy. How was the weather on Monday? It was windy. It's cloudy. It was rainy.",
      keywordsToDetect: ["sunny", "stormy", "windy", "cloudy", "rainy"],
      tasks: [
        { id: "u7l4-s1", taskNumber: 1, type: "read-word", promptText: "Read vocabulary: 'sunny'", vietnamesePrompt: "Nhiệm vụ 1: Đọc từ 'sunny'", image: "/images/unit7/lesson4/sunny.png", referenceAudioUrl: "/audio/unit7/lesson4/sunny.mp3", sampleAnswer: "sunny", keywordsToDetect: ["sunny"] },
        { id: "u7l4-s2", taskNumber: 2, type: "read-word", promptText: "Read vocabulary: 'stormy'", vietnamesePrompt: "Nhiệm vụ 2: Đọc từ 'stormy'", image: "/images/unit7/lesson4/stormy.png", referenceAudioUrl: "/audio/unit7/lesson4/stormy.mp3", sampleAnswer: "stormy", keywordsToDetect: ["stormy"] },
        { id: "u7l4-s3", taskNumber: 3, type: "read-sentence", promptText: "Read sentence: 'How was the weather on Monday? It was windy.'", vietnamesePrompt: "Nhiệm vụ 3: Đọc câu thời tiết quá khứ", image: "/images/unit7/lesson4/windy.png", referenceAudioUrl: "/audio/unit7/lesson4/sentence.mp3", sampleAnswer: "How was the weather on Monday? It was windy.", keywordsToDetect: ["weather", "Monday", "windy"] },
        { id: "u7l4-s4", taskNumber: 4, type: "answer-question", promptText: "Answer: 'How's the weather today?'", vietnamesePrompt: "Nhiệm vụ 4: Trả lời thời tiết hôm nay", image: "/images/unit7/lesson4/cloudy.png", referenceAudioUrl: "/audio/unit7/lesson4/question.mp3", sampleAnswer: "It's cloudy.", keywordsToDetect: ["cloudy"] },
        { id: "u7l4-s5", taskNumber: 5, type: "role-play", promptText: "Role-play: 'How was the weather yesterday?' -> 'It was rainy.'", vietnamesePrompt: "Nhiệm vụ 5: Đóng vai trả lời thời tiết hôm qua", image: "/images/unit7/lesson4/rainy.png", referenceAudioUrl: "/audio/unit7/lesson4/roleplay.mp3", sampleAnswer: "It was rainy.", keywordsToDetect: ["rainy"] }
      ]
    },
    completed: {
      title: "Chúc mừng bạn đã hoàn thành Bài 4!",
      subtitle: "Unit 7: Out and About - Lesson 4: Science (Weather)",
      badgeImage: "/images/badges/u7l4_star.png",
      encouragementVi: "Xuất sắc! Bạn đã hoàn thành toàn bộ Unit 7 về các địa điểm và thời tiết!",
      unlockedNext: "Unit 8: Things We Use"
    }
  }
];

module.exports = u7Lessons;
