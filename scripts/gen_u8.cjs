const u8Lessons = [
  {
    id: "u8-l1",
    unitId: "unit-8",
    title: "Lesson 1",
    vietnameseTitle: "Bài 1: School Supplies (Dụng cụ học tập)",
    description: "Học từ vựng dụng cụ học tập và mẫu câu 'Where was the folder? It was on the table.'",
    vocabulary: [
      { id: "u8l1-v1", word: "folder", phonetic: "/ˈfoʊl.dɚ/", vietnameseMeaning: "kẹp tài liệu", meaning_vi: "kẹp tài liệu", image: "/images/unit8/lesson1/folder.png", audioUrl: "/audio/unit8/lesson1/folder.mp3", audio: "/audio/unit8/lesson1/folder.mp3", exampleSentence: "Where was the folder?", example: "Where was the folder?" },
      { id: "u8l1-v2", word: "lunchbox", phonetic: "/ˈlʌntʃ.bɑːks/", vietnameseMeaning: "hộp cơm trưa", meaning_vi: "hộp cơm trưa", image: "/images/unit8/lesson1/lunchbox.png", audioUrl: "/audio/unit8/lesson1/lunchbox.mp3", audio: "/audio/unit8/lesson1/lunchbox.mp3", exampleSentence: "The lunchbox was on the table.", example: "The lunchbox was on the table." },
      { id: "u8l1-v3", word: "water bottle", phonetic: "/ˈwɑː.t̬ɚ ˌbɑː.t̬əl/", vietnameseMeaning: "bình nước", meaning_vi: "bình nước", image: "/images/unit8/lesson1/water_bottle.png", audioUrl: "/audio/unit8/lesson1/water_bottle.mp3", audio: "/audio/unit8/lesson1/water_bottle.mp3", exampleSentence: "A water bottle was on the desk.", example: "A water bottle was on the desk." },
      { id: "u8l1-v4", word: "dictionary", phonetic: "/ˈdɪk.ʃən.er.i/", vietnameseMeaning: "từ điển", meaning_vi: "từ điển", image: "/images/unit8/lesson1/dictionary.png", audioUrl: "/audio/unit8/lesson1/dictionary.mp3", audio: "/audio/unit8/lesson1/dictionary.mp3", exampleSentence: "The dictionary was on the shelf.", example: "The dictionary was on the shelf." },
      { id: "u8l1-v5", word: "calculator", phonetic: "/ˈkæl.kjə.leɪ.t̬ɚ/", vietnameseMeaning: "máy tính cầm tay", meaning_vi: "máy tính cầm tay", image: "/images/unit8/lesson1/calculator.png", audioUrl: "/audio/unit8/lesson1/calculator.mp3", audio: "/audio/unit8/lesson1/calculator.mp3", exampleSentence: "A calculator was on the table.", example: "A calculator was on the table." },
      { id: "u8l1-v6", word: "stapler", phonetic: "/ˈsteɪ.plɚ/", vietnameseMeaning: "cái dập ghim", meaning_vi: "cái dập ghim", image: "/images/unit8/lesson1/stapler.png", audioUrl: "/audio/unit8/lesson1/stapler.mp3", audio: "/audio/unit8/lesson1/stapler.mp3", exampleSentence: "The stapler was on the desk.", example: "The stapler was on the desk." }
    ],
    modelPattern: {
      id: "u8l1-m1",
      title: "Where Was Item Pattern",
      pattern: "Where was the folder? It was on the table. / What was on the table? A folder was on the table.",
      image: "/images/unit8/lesson1/pattern.png",
      audioUrl: "/audio/unit8/lesson1/pattern.mp3",
      audio: "/audio/unit8/lesson1/pattern.mp3",
      dialogue: [
        { speaker: "Danny", text: "Where was the folder?", vietnameseMeaning: "Kẹp tài liệu đã ở đâu?", audioUrl: "/audio/unit8/lesson1/d1.mp3" },
        { speaker: "Emma", text: "It was on the table.", vietnameseMeaning: "Nó đã ở trên bàn.", audioUrl: "/audio/unit8/lesson1/d2.mp3" }
      ],
      vietnameseExplanation: "'Where was the...?' dùng hỏi vị trí đồ vật ở số ít trong quá khứ. 'What was on the table?' hỏi vật gì ở trên bàn."
    },
    practiceQuestions: [
      { id: "u8l1-q1", type: "picture-select", questionText: "Look at the picture and choose 'calculator':", options: ["calculator", "dictionary", "stapler"], optionImages: ["/images/unit8/lesson1/calculator.png", "/images/unit8/lesson1/dictionary.png", "/images/unit8/lesson1/stapler.png"], correctAnswer: "calculator", explanation_vi: "Đúng. 'calculator' nghĩa là máy tính cầm tay.", vietnameseExplanation: "Đúng. 'calculator' nghĩa là máy tính cầm tay." },
      { id: "u8l1-q2", type: "picture-select", questionText: "Select the picture for 'lunchbox':", options: ["lunchbox", "folder", "water bottle"], optionImages: ["/images/unit8/lesson1/lunchbox.png", "/images/unit8/lesson1/folder.png", "/images/unit8/lesson1/water_bottle.png"], correctAnswer: "lunchbox", explanation_vi: "Đúng. 'lunchbox' nghĩa là hộp cơm trưa.", vietnameseExplanation: "Đúng. 'lunchbox' nghĩa là hộp cơm trưa." },
      { id: "u8l1-q3", type: "multiple-choice", questionText: "What does 'dictionary' mean in Vietnamese?", options: ["Từ điển", "Hộp cơm", "Cái dập ghim", "Bình nước"], correctAnswer: "Từ điển", explanation_vi: "Đúng. 'dictionary' nghĩa là từ điển.", vietnameseExplanation: "Đúng. 'dictionary' nghĩa là từ điển." },
      { id: "u8l1-q4", type: "listening", questionText: "Listen and choose the school supply:", promptAudioUrl: "/audio/unit8/lesson1/water_bottle.mp3", options: ["water bottle", "folder", "stapler"], correctAnswer: "water bottle", explanation_vi: "Đúng. Âm thanh đọc từ 'water bottle'.", vietnameseExplanation: "Đúng. Âm thanh đọc từ 'water bottle'." },
      { id: "u8l1-q5", type: "matching", questionText: "Match items with Vietnamese meanings:", matchingPairs: [
        { leftId: "l1", leftText: "folder", rightId: "r1", rightText: "kẹp tài liệu" },
        { leftId: "l2", leftText: "lunchbox", rightId: "r2", rightText: "hộp cơm trưa" },
        { leftId: "l3", leftText: "stapler", rightId: "r3", rightText: "cái dập ghim" }
      ], correctAnswer: "folder-kẹp tài liệu, lunchbox-hộp cơm trưa, stapler-cái dập ghim", explanation_vi: "Đúng. Nối chính xác các dụng cụ học tập.", vietnameseExplanation: "Đúng. Nối chính xác các dụng cụ học tập." },
      { id: "u8l1-q6", type: "fill-in-blank", questionText: "Where was the _____ (bình nước)?", correctAnswer: "water bottle", explanation_vi: "Đúng. 'water bottle' nghĩa là bình nước.", vietnameseExplanation: "Đúng. 'water bottle' nghĩa là bình nước." },
      { id: "u8l1-q7", type: "multiple-choice", questionText: "A: Where was the folder? B: It _____ on the desk.", options: ["was", "is", "were"], correctAnswer: "was", explanation_vi: "Đúng. Quá khứ danh từ số ít dùng 'was'.", vietnameseExplanation: "Đúng. Quá khứ danh từ số ít dùng 'was'." },
      { id: "u8l1-q8", type: "multiple-choice", questionText: "What was on the table? A _____ was on the table.", options: ["calculator", "calculators", "calculating"], correctAnswer: "calculator", explanation_vi: "Đúng. Sau 'A' cần danh từ số ít 'calculator'.", vietnameseExplanation: "Đúng. Sau 'A' cần danh từ số ít 'calculator'." },
      { id: "u8l1-q9", type: "multiple-choice", questionText: "Where was the stapler? It was on the desk.", options: ["It was on the desk.", "It is on the desk.", "It were on the desk."], correctAnswer: "It was on the desk.", explanation_vi: "Đúng. Cấu trúc câu trả lời vị trí quá khứ đúng.", vietnameseExplanation: "Đúng. Cấu trúc câu trả lời vị trí quá khứ đúng." },
      { id: "u8l1-q10", type: "multiple-choice", questionText: "A dictionary _____ on the chair yesterday.", options: ["was", "were", "are"], correctAnswer: "was", explanation_vi: "Đúng. 'A dictionary' là số ít nên đi với 'was'.", vietnameseExplanation: "Đúng. 'A dictionary' là số ít nên đi với 'was'." }
    ],
    speakingTask: {
      id: "u8l1-s",
      promptText: "1. Read: folder | 2. Read: calculator | 3. Read: Where was the water bottle? It was on the table. | 4. Answer: What was on the table? -> A dictionary was on the table. | 5. Role-play: Where was the stapler? -> It was on the desk.",
      vietnamesePrompt: "Luyện nói 5 bài tập chủ đề dụng cụ học tập.",
      image: "/images/unit8/lesson1/speaking.png",
      referenceAudioUrl: "/audio/unit8/lesson1/speaking.mp3",
      sampleAnswer: "folder. calculator. Where was the water bottle? It was on the table. A dictionary was on the table. It was on the desk.",
      keywordsToDetect: ["folder", "calculator", "bottle", "dictionary", "stapler"],
      tasks: [
        { id: "u8l1-s1", taskNumber: 1, type: "read-word", promptText: "Read vocabulary: 'folder'", vietnamesePrompt: "Nhiệm vụ 1: Đọc từ 'folder'", image: "/images/unit8/lesson1/folder.png", referenceAudioUrl: "/audio/unit8/lesson1/folder.mp3", sampleAnswer: "folder", keywordsToDetect: ["folder"] },
        { id: "u8l1-s2", taskNumber: 2, type: "read-word", promptText: "Read vocabulary: 'calculator'", vietnamesePrompt: "Nhiệm vụ 2: Đọc từ 'calculator'", image: "/images/unit8/lesson1/calculator.png", referenceAudioUrl: "/audio/unit8/lesson1/calculator.mp3", sampleAnswer: "calculator", keywordsToDetect: ["calculator"] },
        { id: "u8l1-s3", taskNumber: 3, type: "read-sentence", promptText: "Read sentence: 'Where was the water bottle? It was on the table.'", vietnamesePrompt: "Nhiệm vụ 3: Đọc hỏi đáp vị trí", image: "/images/unit8/lesson1/water_bottle.png", referenceAudioUrl: "/audio/unit8/lesson1/sentence.mp3", sampleAnswer: "Where was the water bottle? It was on the table.", keywordsToDetect: ["water", "bottle", "table"] },
        { id: "u8l1-s4", taskNumber: 4, type: "answer-question", promptText: "Answer: 'What was on the table?'", vietnamesePrompt: "Nhiệm vụ 4: Trả lời đồ vật trên bàn", image: "/images/unit8/lesson1/dictionary.png", referenceAudioUrl: "/audio/unit8/lesson1/question.mp3", sampleAnswer: "A dictionary was on the table.", keywordsToDetect: ["dictionary", "table"] },
        { id: "u8l1-s5", taskNumber: 5, type: "role-play", promptText: "Role-play: 'Where was the stapler?' -> 'It was on the desk.'", vietnamesePrompt: "Nhiệm vụ 5: Đóng vai trả lời vị trí cái dập ghim", image: "/images/unit8/lesson1/stapler.png", referenceAudioUrl: "/audio/unit8/lesson1/roleplay.mp3", sampleAnswer: "It was on the desk.", keywordsToDetect: ["desk", "stapler"] }
      ]
    },
    completed: {
      title: "Chúc mừng bạn đã hoàn thành Bài 1!",
      subtitle: "Unit 8: Things We Use - Lesson 1: School Supplies",
      badgeImage: "/images/badges/u8l1_star.png",
      encouragementVi: "Tuyệt vời! Bạn đã nhớ được các dụng cụ học tập và mẫu câu hỏi vị trí 'Where was the...?'!",
      unlockedNext: "Lesson 2: Art Supplies"
    }
  },
  {
    id: "u8-l2",
    unitId: "unit-8",
    title: "Lesson 2",
    vietnameseTitle: "Bài 2: Art Supplies (Dụng cụ mỹ thuật)",
    description: "Học dụng cụ mỹ thuật và mẫu câu 'There were some/weren't any magazines on the table.'",
    vocabulary: [
      { id: "u8l2-v1", word: "magazine", phonetic: "/ˌmæɡ.əˈziːn/", vietnameseMeaning: "tạp chí", meaning_vi: "tạp chí", image: "/images/unit8/lesson2/magazine.png", audioUrl: "/audio/unit8/lesson2/magazine.mp3", audio: "/audio/unit8/lesson2/magazine.mp3", exampleSentence: "There were some magazines on the table.", example: "There were some magazines on the table." },
      { id: "u8l2-v2", word: "poster", phonetic: "/ˈpoʊ.stɚ/", vietnameseMeaning: "tranh áp phích", meaning_vi: "tranh áp phích", image: "/images/unit8/lesson2/poster.png", audioUrl: "/audio/unit8/lesson2/poster.mp3", audio: "/audio/unit8/lesson2/poster.mp3", exampleSentence: "There were some posters on the wall.", example: "There were some posters on the wall." },
      { id: "u8l2-v3", word: "pencil sharpener", phonetic: "/ˈpen.səl ˌʃɑːr.pən.ɚ/", vietnameseMeaning: "cái gọt bút chì", meaning_vi: "cái gọt bút chì", image: "/images/unit8/lesson2/pencil_sharpener.png", audioUrl: "/audio/unit8/lesson2/pencil_sharpener.mp3", audio: "/audio/unit8/lesson2/pencil_sharpener.mp3", exampleSentence: "Where was the pencil sharpener?", example: "Where was the pencil sharpener?" },
      { id: "u8l2-v4", word: "paintbrush", phonetic: "/ˈpeɪnt.brʌʃ/", vietnameseMeaning: "cọ vẽ", meaning_vi: "cọ vẽ", image: "/images/unit8/lesson2/paintbrush.png", audioUrl: "/audio/unit8/lesson2/paintbrush.mp3", audio: "/audio/unit8/lesson2/paintbrush.mp3", exampleSentence: "There were paintbrushes in the box.", example: "There were paintbrushes in the box." },
      { id: "u8l2-v5", word: "glue stick", phonetic: "/ˈɡluː stɪk/", vietnameseMeaning: "keo dán thỏi", meaning_vi: "keo dán thỏi", image: "/images/unit8/lesson2/glue_stick.png", audioUrl: "/audio/unit8/lesson2/glue_stick.mp3", audio: "/audio/unit8/lesson2/glue_stick.mp3", exampleSentence: "Is there a glue stick?", example: "Is there a glue stick?" },
      { id: "u8l2-v6", word: "scissors", phonetic: "/ˈsɪz.ɚz/", vietnameseMeaning: "cái kéo", meaning_vi: "cái kéo", image: "/images/unit8/lesson2/scissors.png", audioUrl: "/audio/unit8/lesson2/scissors.mp3", audio: "/audio/unit8/lesson2/scissors.mp3", exampleSentence: "There were some scissors on the desk.", example: "There were some scissors on the desk." }
    ],
    modelPattern: {
      id: "u8l2-m1",
      title: "There Were Some/Weren't Any Pattern",
      pattern: "There were some/weren't any magazines on the table. / Were there any magazines on the table? Yes, there were. / No, there weren't.",
      image: "/images/unit8/lesson2/pattern.png",
      audioUrl: "/audio/unit8/lesson2/pattern.mp3",
      audio: "/audio/unit8/lesson2/pattern.mp3",
      dialogue: [
        { speaker: "Danny", text: "Were there any magazines on the table?", vietnameseMeaning: "Có tạp chí nào trên bàn không?", audioUrl: "/audio/unit8/lesson2/d1.mp3" },
        { speaker: "Emma", text: "Yes, there were.", vietnameseMeaning: "Có, có một vài quyển.", audioUrl: "/audio/unit8/lesson2/d2.mp3" }
      ],
      vietnameseExplanation: "'There were some...' dùng khẳng định số nhiều ở quá khứ. 'There weren't any...' dùng phủ định. 'Were there any...?' dùng hỏi nghi vấn."
    },
    practiceQuestions: [
      { id: "u8l2-q1", type: "multiple-choice", questionText: "What does 'scissors' mean?", options: ["Cái kéo", "Cọ vẽ", "Keo dán thỏi", "Tranh áp phích"], correctAnswer: "Cái kéo", explanation_vi: "Đúng. 'scissors' nghĩa là cái kéo.", vietnameseExplanation: "Đúng. 'scissors' nghĩa là cái kéo." },
      { id: "u8l2-q2", type: "multiple-choice", questionText: "There _____ some posters on the wall yesterday.", options: ["were", "was", "is"], correctAnswer: "were", explanation_vi: "Đúng. 'posters' là số nhiều quá khứ nên đi với 'were'.", vietnameseExplanation: "Đúng. 'posters' là số nhiều quá khứ nên đi với 'were'." },
      { id: "u8l2-q3", type: "multiple-choice", questionText: "There weren't _____ magazines on the table.", options: ["any", "some", "a"], correctAnswer: "any", explanation_vi: "Đúng. Trong câu phủ định dùng 'any'.", vietnameseExplanation: "Đúng. Trong câu phủ định dùng 'any'." },
      { id: "u8l2-q4", type: "listening", questionText: "Listen and select art supply:", promptAudioUrl: "/audio/unit8/lesson2/paintbrush.mp3", options: ["paintbrush", "glue stick", "scissors"], correctAnswer: "paintbrush", explanation_vi: "Đúng. Bạn nghe thấy từ 'paintbrush'.", vietnameseExplanation: "Đúng. Bạn nghe thấy từ 'paintbrush'." },
      { id: "u8l2-q5", type: "multiple-choice", questionText: "Were there any glue sticks? Yes, there _____.", options: ["were", "was", "are"], correctAnswer: "were", explanation_vi: "Đúng. Khẳng định số nhiều ngắn là 'Yes, there were.'", vietnameseExplanation: "Đúng. Khẳng định số nhiều ngắn là 'Yes, there were.'" },
      { id: "u8l2-q6", type: "fill-in-blank", questionText: "There were some _____ (cái kéo) on the desk.", correctAnswer: "scissors", explanation_vi: "Đúng. 'scissors' nghĩa là cái kéo.", vietnameseExplanation: "Đúng. 'scissors' nghĩa là cái kéo." },
      { id: "u8l2-q7", type: "multiple-choice", questionText: "Arrange correctly: 'There / magazines / were / some / table / on / the'", options: ["There were some magazines on the table.", "There magazines were some on table.", "Were some magazines there on table."], correctAnswer: "There were some magazines on the table.", explanation_vi: "Đúng. Thứ tự câu khẳng định 'There were some + N_plural + place'.", vietnameseExplanation: "Đúng. Thứ tự câu khẳng định 'There were some + N_plural + place'." },
      { id: "u8l2-q8", type: "multiple-choice", questionText: "A: Were there any pencil sharpeners? B: No, there _____.", options: ["weren't.", "wasn't.", "don't."], correctAnswer: "weren't.", explanation_vi: "Đúng. Phủ định số nhiều ngắn là 'No, there weren't.'", vietnameseExplanation: "Đúng. Phủ định số nhiều ngắn là 'No, there weren't.'" },
      { id: "u8l2-q9", type: "picture-select", questionText: "Select picture for 'paintbrush':", options: ["paintbrush", "poster", "magazine"], optionImages: ["/images/unit8/lesson2/paintbrush.png", "/images/unit8/lesson2/poster.png", "/images/unit8/lesson2/magazine.png"], correctAnswer: "paintbrush", explanation_vi: "Đúng. Hình ảnh hiển thị chiếc cọ vẽ.", vietnameseExplanation: "Đúng. Hình ảnh hiển thị chiếc cọ vẽ." },
      { id: "u8l2-q10", type: "multiple-choice", questionText: "Were there any posters on the wall? Yes, _____.", options: ["there were", "they were", "it was"], correctAnswer: "there were", explanation_vi: "Đúng. Trả lời đầy đủ 'Yes, there were.'", vietnameseExplanation: "Đúng. Trả lời đầy đủ 'Yes, there were.'" }
    ],
    speakingTask: {
      id: "u8l2-s",
      promptText: "1. Read: scissors | 2. Read: paintbrush | 3. Read: There were some posters on the wall. | 4. Answer: Were there any magazines on the table? -> Yes, there were. | 5. Role-play: Were there any pencil sharpeners? -> No, there weren't.",
      vietnamesePrompt: "Thực hành 5 nhiệm vụ luyện nói dụng cụ mỹ thuật.",
      image: "/images/unit8/lesson2/speaking.png",
      referenceAudioUrl: "/audio/unit8/lesson2/speaking.mp3",
      sampleAnswer: "scissors. paintbrush. There were some posters on the wall. Yes, there were. No, there weren't.",
      keywordsToDetect: ["scissors", "paintbrush", "posters", "yes", "no"],
      tasks: [
        { id: "u8l2-s1", taskNumber: 1, type: "read-word", promptText: "Read vocabulary: 'scissors'", vietnamesePrompt: "Nhiệm vụ 1: Đọc từ 'scissors'", image: "/images/unit8/lesson2/scissors.png", referenceAudioUrl: "/audio/unit8/lesson2/scissors.mp3", sampleAnswer: "scissors", keywordsToDetect: ["scissors"] },
        { id: "u8l2-s2", taskNumber: 2, type: "read-word", promptText: "Read vocabulary: 'paintbrush'", vietnamesePrompt: "Nhiệm vụ 2: Đọc từ 'paintbrush'", image: "/images/unit8/lesson2/paintbrush.png", referenceAudioUrl: "/audio/unit8/lesson2/paintbrush.mp3", sampleAnswer: "paintbrush", keywordsToDetect: ["paintbrush"] },
        { id: "u8l2-s3", taskNumber: 3, type: "read-sentence", promptText: "Read sentence: 'There were some posters on the wall.'", vietnamesePrompt: "Nhiệm vụ 3: Đọc câu có 'there were some'", image: "/images/unit8/lesson2/poster.png", referenceAudioUrl: "/audio/unit8/lesson2/sentence.mp3", sampleAnswer: "There were some posters on the wall.", keywordsToDetect: ["posters", "wall"] },
        { id: "u8l2-s4", taskNumber: 4, type: "answer-question", promptText: "Answer: 'Were there any magazines on the table?'", vietnamesePrompt: "Nhiệm vụ 4: Trả lời câu hỏi có tạp chí không", image: "/images/unit8/lesson2/magazine.png", referenceAudioUrl: "/audio/unit8/lesson2/question.mp3", sampleAnswer: "Yes, there were.", keywordsToDetect: ["yes", "were"] },
        { id: "u8l2-s5", taskNumber: 5, type: "role-play", promptText: "Role-play: 'Were there any pencil sharpeners?' -> 'No, there weren't.'", vietnamesePrompt: "Nhiệm vụ 5: Đóng vai trả lời phủ định", image: "/images/unit8/lesson2/pencil_sharpener.png", referenceAudioUrl: "/audio/unit8/lesson2/roleplay.mp3", sampleAnswer: "No, there weren't.", keywordsToDetect: ["no", "weren't"] }
      ]
    },
    completed: {
      title: "Chúc mừng bạn đã hoàn thành Bài 2!",
      subtitle: "Unit 8: Things We Use - Lesson 2: Art Supplies",
      badgeImage: "/images/badges/u8l2_star.png",
      encouragementVi: "Tuyệt vời! Bạn đã nắm vững cấu trúc 'There were some / weren't any'!",
      unlockedNext: "Lesson 3: Story (Let's Clean Up!)"
    }
  },
  {
    id: "u8-l3",
    unitId: "unit-8",
    title: "Lesson 3",
    vietnameseTitle: "Bài 3: Story (Let's Clean Up!)",
    description: "Đọc câu chuyện dọn dẹp phòng, học mẫu câu hỏi đánh vần 'How do you spell \"Saturday\"? S-A-T-U-R-D-A-Y.' và tinh thần giúp đỡ (Be helpful).",
    vocabulary: [
      { id: "u8l3-v1", word: "spell", phonetic: "/spel/", vietnameseMeaning: "đánh vần", meaning_vi: "đánh vần", image: "/images/unit8/lesson3/spell.png", audioUrl: "/audio/unit8/lesson3/spell.mp3", audio: "/audio/unit8/lesson3/spell.mp3", exampleSentence: "How do you spell Saturday?", example: "How do you spell Saturday?" },
      { id: "u8l3-v2", word: "Saturday", phonetic: "/ˈsæt̬.ɚ.deɪ/", vietnameseMeaning: "Thứ Bảy", meaning_vi: "Thứ Bảy", image: "/images/unit8/lesson3/saturday.png", audioUrl: "/audio/unit8/lesson3/saturday.mp3", audio: "/audio/unit8/lesson3/saturday.mp3", exampleSentence: "Today is Saturday.", example: "Today is Saturday." },
      { id: "u8l3-v3", word: "clean up", phonetic: "/kliːn ʌp/", vietnameseMeaning: "dọn dẹp", meaning_vi: "dọn dẹp", image: "/images/unit8/lesson3/clean_up.png", audioUrl: "/audio/unit8/lesson3/clean_up.mp3", audio: "/audio/unit8/lesson3/clean_up.mp3", exampleSentence: "Let's clean up!", example: "Let's clean up!" },
      { id: "u8l3-v4", word: "helpful", phonetic: "/ˈhelp.fəl/", vietnameseMeaning: "hay giúp đỡ", meaning_vi: "hay giúp đỡ", image: "/images/unit8/lesson3/helpful.png", audioUrl: "/audio/unit8/lesson3/helpful.mp3", audio: "/audio/unit8/lesson3/helpful.mp3", exampleSentence: "Be helpful.", example: "Be helpful." }
    ],
    modelPattern: {
      id: "u8l3-m1",
      title: "Spelling Words Pattern",
      pattern: "How do you spell 'Saturday'? S-A-T-U-R-D-A-Y.",
      image: "/images/unit8/lesson3/pattern.png",
      audioUrl: "/audio/unit8/lesson3/pattern.mp3",
      audio: "/audio/unit8/lesson3/pattern.mp3",
      dialogue: [
        { speaker: "Danny", text: "How do you spell 'Saturday'?", vietnameseMeaning: "Bạn đánh vần từ 'Saturday' như thế nào?", audioUrl: "/audio/unit8/lesson3/d1.mp3" },
        { speaker: "Emma", text: "S-A-T-U-R-D-A-Y.", vietnameseMeaning: "S-A-T-U-R-D-A-Y.", audioUrl: "/audio/unit8/lesson3/d2.mp3" }
      ],
      vietnameseExplanation: "'How do you spell...?' dùng để hỏi cách đánh vần một từ tiếng Anh. Bài học khuyên chúng ta hãy luôn giúp đỡ người khác (Be helpful)."
    },
    practiceQuestions: [
      { id: "u8l3-q1", type: "multiple-choice", questionText: "How do you spell 'Saturday'?", options: ["S-A-T-U-R-D-A-Y", "S-U-N-D-A-Y", "M-O-N-D-A-Y"], correctAnswer: "S-A-T-U-R-D-A-Y", explanation_vi: "Đúng. Đánh vần từng chữ cái từ 'Saturday'.", vietnameseExplanation: "Đúng. Đánh vần từng chữ cái từ 'Saturday'." },
      { id: "u8l3-q2", type: "multiple-choice", questionText: "What value is emphasized in Lesson 3?", options: ["Be helpful.", "Be quiet.", "Be brave."], correctAnswer: "Be helpful.", explanation_vi: "Đúng. Giá trị bài học mang lại là hãy biết giúp đỡ (Be helpful).", vietnameseExplanation: "Đúng. Giá trị bài học mang lại là hãy biết giúp đỡ (Be helpful)." },
      { id: "u8l3-q3", type: "multiple-choice", questionText: "What does 'spell' mean?", options: ["Đánh vần", "Viết thư", "Đọc sách"], correctAnswer: "Đánh vần", explanation_vi: "Đúng. 'spell' nghĩa là đánh vần.", vietnameseExplanation: "Đúng. 'spell' nghĩa là đánh vần." },
      { id: "u8l3-q4", type: "multiple-choice", questionText: "What does 'clean up' mean?", options: ["Dọn dẹp", "Làm bẩn", "Sơn tường"], correctAnswer: "Dọn dẹp", explanation_vi: "Đúng. 'clean up' nghĩa là dọn dẹp.", vietnameseExplanation: "Đúng. 'clean up' nghĩa là dọn dẹp." },
      { id: "u8l3-q5", type: "multiple-choice", questionText: "What day is 'Saturday'?", options: ["Thứ Bảy", "Chủ Nhật", "Thứ Hai"], correctAnswer: "Thứ Bảy", explanation_vi: "Đúng. 'Saturday' nghĩa là Thứ Bảy.", vietnameseExplanation: "Đúng. 'Saturday' nghĩa là Thứ Bảy." },
      { id: "u8l3-q6", type: "multiple-choice", questionText: "'How do you spell...' is used to ask for letters of a word. True or False?", options: ["True", "False"], correctAnswer: "True", explanation_vi: "Đúng. Mẫu câu dùng để hỏi các chữ cái cấu thành từ.", vietnameseExplanation: "Đúng. Mẫu câu dùng để hỏi các chữ cái cấu thành từ." },
      { id: "u8l3-q7", type: "multiple-choice", questionText: "A: How do you spell 'Saturday'? B: _____", options: ["S-A-T-U-R-D-A-Y", "It is on Saturday.", "Yes, I can."], correctAnswer: "S-A-T-U-R-D-A-Y", explanation_vi: "Đúng. Trả lời bằng cách đọc các chữ cái.", vietnameseExplanation: "Đúng. Trả lời bằng cách đọc các chữ cái." },
      { id: "u8l3-q8", type: "fill-in-blank", questionText: "How do you _____ (đánh vần) 'Saturday'?", correctAnswer: "spell", explanation_vi: "Đúng. 'spell' nghĩa là đánh vần.", vietnameseExplanation: "Đúng. 'spell' nghĩa là đánh vần." },
      { id: "u8l3-q9", type: "listening", questionText: "Listen to the spelled word:", promptAudioUrl: "/audio/unit8/lesson3/saturday.mp3", options: ["Saturday", "Sunday", "Friday"], correctAnswer: "Saturday", explanation_vi: "Đúng. Âm thanh đọc đánh vần từ 'Saturday'.", vietnameseExplanation: "Đúng. Âm thanh đọc đánh vần từ 'Saturday'." },
      { id: "u8l3-q10", type: "multiple-choice", questionText: "Being helpful means:", options: ["Assisting others when they need help", "Sitting alone", "Leaving trash"], correctAnswer: "Assisting others when they need help", explanation_vi: "Đúng. 'helpful' là biết giúp đỡ mọi người.", vietnameseExplanation: "Đúng. 'helpful' là biết giúp đỡ mọi người." }
    ],
    speakingTask: {
      id: "u8l3-s",
      promptText: "1. Read: spell | 2. Read: Saturday | 3. Read: How do you spell 'Saturday'? | 4. Answer: How do you spell 'Saturday'? -> S-A-T-U-R-D-A-Y. | 5. Role-play: Let's clean up! -> OK. Be helpful.",
      vietnamesePrompt: "Luyện nói 5 bài tập đánh vần và giao tiếp câu chuyện.",
      image: "/images/unit8/lesson3/speaking.png",
      referenceAudioUrl: "/audio/unit8/lesson3/speaking.mp3",
      sampleAnswer: "spell. Saturday. How do you spell Saturday? S-A-T-U-R-D-A-Y. OK. Be helpful.",
      keywordsToDetect: ["spell", "Saturday", "S", "helpful"],
      tasks: [
        { id: "u8l3-s1", taskNumber: 1, type: "read-word", promptText: "Read vocabulary: 'spell'", vietnamesePrompt: "Nhiệm vụ 1: Đọc từ 'spell'", image: "/images/unit8/lesson3/spell.png", referenceAudioUrl: "/audio/unit8/lesson3/spell.mp3", sampleAnswer: "spell", keywordsToDetect: ["spell"] },
        { id: "u8l3-s2", taskNumber: 2, type: "read-word", promptText: "Read vocabulary: 'Saturday'", vietnamesePrompt: "Nhiệm vụ 2: Đọc từ 'Saturday'", image: "/images/unit8/lesson3/saturday.png", referenceAudioUrl: "/audio/unit8/lesson3/saturday.mp3", sampleAnswer: "Saturday", keywordsToDetect: ["Saturday"] },
        { id: "u8l3-s3", taskNumber: 3, type: "read-sentence", promptText: "Read sentence: 'How do you spell Saturday?'", vietnamesePrompt: "Nhiệm vụ 3: Đọc câu hỏi đánh vần", image: "/images/unit8/lesson3/pattern.png", referenceAudioUrl: "/audio/unit8/lesson3/sentence.mp3", sampleAnswer: "How do you spell Saturday?", keywordsToDetect: ["spell", "Saturday"] },
        { id: "u8l3-s4", taskNumber: 4, type: "answer-question", promptText: "Answer: 'How do you spell Saturday?'", vietnamesePrompt: "Nhiệm vụ 4: Đánh vần chữ cái", image: "/images/unit8/lesson3/saturday.png", referenceAudioUrl: "/audio/unit8/lesson3/question.mp3", sampleAnswer: "S-A-T-U-R-D-A-Y", keywordsToDetect: ["S", "A", "T", "U", "R", "D", "Y"] },
        { id: "u8l3-s5", taskNumber: 5, type: "role-play", promptText: "Role-play: 'Let's clean up!' -> 'OK. Be helpful.'", vietnamesePrompt: "Nhiệm vụ 5: Đóng vai dọn dẹp phòng", image: "/images/unit8/lesson3/clean_up.png", referenceAudioUrl: "/audio/unit8/lesson3/roleplay.mp3", sampleAnswer: "OK. Be helpful.", keywordsToDetect: ["ok", "helpful"] }
      ]
    },
    completed: {
      title: "Chúc mừng bạn đã hoàn thành Bài 3!",
      subtitle: "Unit 8: Things We Use - Lesson 3: Story (Let's Clean Up!)",
      badgeImage: "/images/badges/u8l3_star.png",
      encouragementVi: "Tuyệt vời! Bạn đã biết cách hỏi đánh vần từ vựng trong tiếng Anh!",
      unlockedNext: "Lesson 4: Social Studies (Technology)"
    }
  },
  {
    id: "u8-l4",
    unitId: "unit-8",
    title: "Lesson 4",
    vietnameseTitle: "Bài 4: Social Studies (Technology - Công nghệ)",
    description: "Học thiết bị công nghệ và mẫu câu 'There weren't any cell phones in 1940. There were phones like this.'",
    vocabulary: [
      { id: "u8l4-v1", word: "cell phone", phonetic: "/ˈsel foʊn/", vietnameseMeaning: "điện thoại di động", meaning_vi: "điện thoại di động", image: "/images/unit8/lesson4/cell_phone.png", audioUrl: "/audio/unit8/lesson4/cell_phone.mp3", audio: "/audio/unit8/lesson4/cell_phone.mp3", exampleSentence: "There weren't any cell phones in 1940.", example: "There weren't any cell phones in 1940." },
      { id: "u8l4-v2", word: "laptop", phonetic: "/ˈlæp.tɑːp/", vietnameseMeaning: "máy tính xách tay", meaning_vi: "máy tính xách tay", image: "/images/unit8/lesson4/laptop.png", audioUrl: "/audio/unit8/lesson4/laptop.mp3", audio: "/audio/unit8/lesson4/laptop.mp3", exampleSentence: "I use a laptop.", example: "I use a laptop." },
      { id: "u8l4-v3", word: "digital TV", phonetic: "/ˌdɪdʒ.ə.t̬əl ˌtiːˈviː/", vietnameseMeaning: "TV kỹ thuật số", meaning_vi: "TV kỹ thuật số", image: "/images/unit8/lesson4/digital_tv.png", audioUrl: "/audio/unit8/lesson4/digital_tv.mp3", audio: "/audio/unit8/lesson4/digital_tv.mp3", exampleSentence: "There were digital TVs.", example: "There were digital TVs." },
      { id: "u8l4-v4", word: "digital camera", phonetic: "/ˌdɪdʒ.ə.t̬əl ˈkæm.rə/", vietnameseMeaning: "máy ảnh kỹ thuật số", meaning_vi: "máy ảnh kỹ thuật số", image: "/images/unit8/lesson4/digital_camera.png", audioUrl: "/audio/unit8/lesson4/digital_camera.mp3", audio: "/audio/unit8/lesson4/digital_camera.mp3", exampleSentence: "She has a digital camera.", example: "She has a digital camera." }
    ],
    modelPattern: {
      id: "u8l4-m1",
      title: "Technology in the Past Pattern",
      pattern: "There weren't any cell phones in 1940. There were phones like this.",
      image: "/images/unit8/lesson4/pattern.png",
      audioUrl: "/audio/unit8/lesson4/pattern.mp3",
      audio: "/audio/unit8/lesson4/pattern.mp3",
      dialogue: [
        { speaker: "Danny", text: "Were there cell phones in 1940?", vietnameseMeaning: "Đã có điện thoại di động vào năm 1940 chưa?", audioUrl: "/audio/unit8/lesson4/d1.mp3" },
        { speaker: "Emma", text: "No, there weren't. There were phones like this.", vietnameseMeaning: "Chưa có. Đã có những chiếc điện thoại như thế này.", audioUrl: "/audio/unit8/lesson4/d2.mp3" }
      ],
      vietnameseExplanation: "'There weren't any...' dùng để nói về thiết bị công nghệ chưa xuất hiện trong quá khứ."
    },
    practiceQuestions: [
      { id: "u8l4-q1", type: "multiple-choice", questionText: "There _____ any cell phones in 1940.", options: ["weren't", "wasn't", "isn't"], correctAnswer: "weren't", explanation_vi: "Đúng. 'cell phones' số nhiều trong quá khứ phủ định là 'weren't'.", vietnameseExplanation: "Đúng. 'cell phones' số nhiều trong quá khứ phủ định là 'weren't'." },
      { id: "u8l4-q2", type: "multiple-choice", questionText: "What is 'laptop' in Vietnamese?", options: ["Máy tính xách tay", "Điện thoại di động", "TV kỹ thuật số"], correctAnswer: "Máy tính xách tay", explanation_vi: "Đúng. 'laptop' nghĩa là máy tính xách tay.", vietnameseExplanation: "Đúng. 'laptop' nghĩa là máy tính xách tay." },
      { id: "u8l4-q3", type: "multiple-choice", questionText: "A: Were there laptops in 1940? B: No, there _____.", options: ["weren't", "wasn't", "don't"], correctAnswer: "weren't", explanation_vi: "Đúng. Phủ định ngắn số nhiều: 'No, there weren't.'", vietnameseExplanation: "Đúng. Phủ định ngắn số nhiều: 'No, there weren't.'" },
      { id: "u8l4-q4", type: "listening", questionText: "Listen and choose device:", promptAudioUrl: "/audio/unit8/lesson4/digital_camera.mp3", options: ["digital camera", "digital TV", "laptop"], correctAnswer: "digital camera", explanation_vi: "Đúng. Âm thanh đọc từ 'digital camera'.", vietnameseExplanation: "Đúng. Âm thanh đọc từ 'digital camera'." },
      { id: "u8l4-q5", type: "picture-select", questionText: "Select picture for 'cell phone':", options: ["cell phone", "laptop", "digital TV"], optionImages: ["/images/unit8/lesson4/cell_phone.png", "/images/unit8/lesson4/laptop.png", "/images/unit8/lesson4/digital_tv.png"], correctAnswer: "cell phone", explanation_vi: "Đúng. Bức tranh hiển thị điện thoại di động.", vietnameseExplanation: "Đúng. Bức tranh hiển thị điện thoại di động." },
      { id: "u8l4-q6", type: "fill-in-blank", questionText: "There were phones like _____ (như thế này).", correctAnswer: "this", explanation_vi: "Đúng. 'like this' nghĩa là như thế này.", vietnameseExplanation: "Đúng. 'like this' nghĩa là như thế này." },
      { id: "u8l4-q7", type: "multiple-choice", questionText: "Complete sentence: 'There _____ digital TVs in 1940.'", options: ["weren't any", "was some", "is no"], correctAnswer: "weren't any", explanation_vi: "Đúng. Chưa có TV kỹ thuật số năm 1940: 'weren't any'.", vietnameseExplanation: "Đúng. Chưa có TV kỹ thuật số năm 1940: 'weren't any'." },
      { id: "u8l4-q8", type: "multiple-choice", questionText: "A: Were there phones in 1940? B: Yes, _____.", options: ["there were", "they were", "there was"], correctAnswer: "there were", explanation_vi: "Đúng. Đã có điện thoại bàn năm 1940: 'Yes, there were.'", vietnameseExplanation: "Đúng. Đã có điện thoại bàn năm 1940: 'Yes, there were.'" },
      { id: "u8l4-q9", type: "multiple-choice", questionText: "Mixed Review: 'In 1940, there were no laptops, but there _____ books.'", options: ["were", "was", "are"], correctAnswer: "were", explanation_vi: "Đúng. 'books' số nhiều quá khứ dùng 'were'.", vietnameseExplanation: "Đúng. 'books' số nhiều quá khứ dùng 'were'." },
      { id: "u8l4-q10", type: "multiple-choice", questionText: "Unit Review: Which device is used to take photos?", options: ["digital camera", "digital TV", "calculator"], correctAnswer: "digital camera", explanation_vi: "Đúng. 'digital camera' dùng để chụp ảnh.", vietnameseExplanation: "Đúng. 'digital camera' dùng để chụp ảnh." }
    ],
    speakingTask: {
      id: "u8l4-s",
      promptText: "1. Read: cell phone | 2. Read: laptop | 3. Read: There weren't any cell phones in 1940. | 4. Answer: Were there laptops in 1940? -> No, there weren't. | 5. Role-play: There were phones like this.",
      vietnamesePrompt: "Thực hành 5 bài tập luyện nói về lịch sử công nghệ.",
      image: "/images/unit8/lesson4/speaking.png",
      referenceAudioUrl: "/audio/unit8/lesson4/speaking.mp3",
      sampleAnswer: "cell phone. laptop. There weren't any cell phones in 1940. No, there weren't. There were phones like this.",
      keywordsToDetect: ["cell", "phone", "laptop", "1940", "phones"],
      tasks: [
        { id: "u8l4-s1", taskNumber: 1, type: "read-word", promptText: "Read vocabulary: 'cell phone'", vietnamesePrompt: "Nhiệm vụ 1: Đọc từ 'cell phone'", image: "/images/unit8/lesson4/cell_phone.png", referenceAudioUrl: "/audio/unit8/lesson4/cell_phone.mp3", sampleAnswer: "cell phone", keywordsToDetect: ["cell", "phone"] },
        { id: "u8l4-s2", taskNumber: 2, type: "read-word", promptText: "Read vocabulary: 'laptop'", vietnamesePrompt: "Nhiệm vụ 2: Đọc từ 'laptop'", image: "/images/unit8/lesson4/laptop.png", referenceAudioUrl: "/audio/unit8/lesson4/laptop.mp3", sampleAnswer: "laptop", keywordsToDetect: ["laptop"] },
        { id: "u8l4-s3", taskNumber: 3, type: "read-sentence", promptText: "Read sentence: 'There weren't any cell phones in 1940.'", vietnamesePrompt: "Nhiệm vụ 3: Đọc câu công nghệ quá khứ", image: "/images/unit8/lesson4/pattern.png", referenceAudioUrl: "/audio/unit8/lesson4/sentence.mp3", sampleAnswer: "There weren't any cell phones in 1940.", keywordsToDetect: ["cell", "phones", "1940"] },
        { id: "u8l4-s4", taskNumber: 4, type: "answer-question", promptText: "Answer: 'Were there laptops in 1940?'", vietnamesePrompt: "Nhiệm vụ 4: Trả lời câu hỏi có laptop không", image: "/images/unit8/lesson4/laptop.png", referenceAudioUrl: "/audio/unit8/lesson4/question.mp3", sampleAnswer: "No, there weren't.", keywordsToDetect: ["no", "weren't"] },
        { id: "u8l4-s5", taskNumber: 5, type: "role-play", promptText: "Role-play: 'There were phones like this.'", vietnamesePrompt: "Nhiệm vụ 5: Đóng vai giới thiệu điện thoại cổ", image: "/images/unit8/lesson4/speaking.png", referenceAudioUrl: "/audio/unit8/lesson4/roleplay.mp3", sampleAnswer: "There were phones like this.", keywordsToDetect: ["phones", "like", "this"] }
      ]
    },
    completed: {
      title: "Chúc mừng bạn đã hoàn thành Bài 4!",
      subtitle: "Unit 8: Things We Use - Lesson 4: Social Studies (Technology)",
      badgeImage: "/images/badges/u8l4_star.png",
      encouragementVi: "Xuất sắc! Bạn đã hoàn thành toàn bộ chương trình Unit 8!",
      unlockedNext: "Check Up 4 (Review Units 7 & 8)"
    }
  }
];

module.exports = u8Lessons;
