const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');

const practicePath = path.join(dataDir, 'practice.json');
const courseDataPath = path.join(dataDir, 'courseData.json');

const practice = JSON.parse(fs.readFileSync(practicePath, 'utf8'));
const courseData = JSON.parse(fs.readFileSync(courseDataPath, 'utf8'));

// Audited, pedagogically sound, multiple-choice questions for Unit 1 (Lessons 1-4)
const unit1Questions = {
  unit1_lesson1: [
    {
      "id": "u1l1-q1",
      "type": "multiple-choice",
      "questionText": "What is 'bỏng ngô' in English?",
      "options": [
        "popcorn",
        "gum",
        "chocolate"
      ],
      "correctAnswer": "popcorn",
      "explanation_vi": "'Bỏng ngô' trong tiếng Anh là popcorn.",
      "vietnameseExplanation": "'Bỏng ngô' trong tiếng Anh là popcorn."
    },
    {
      "id": "u1l1-q2",
      "type": "multiple-choice",
      "questionText": "What is 'sô-cô-la' in English?",
      "options": [
        "chocolate",
        "peanuts",
        "soda"
      ],
      "correctAnswer": "chocolate",
      "explanation_vi": "'Sô-cô-la' trong tiếng Anh là chocolate.",
      "vietnameseExplanation": "'Sô-cô-la' trong tiếng Anh là chocolate."
    },
    {
      "id": "u1l1-q3",
      "type": "multiple-choice",
      "questionText": "What does 'soda' mean in Vietnamese?",
      "options": [
        "Nước ngọt có ga",
        "Sữa tươi",
        "Nước ép táo"
      ],
      "correctAnswer": "Nước ngọt có ga",
      "explanation_vi": "'soda' có nghĩa là nước ngọt có ga.",
      "vietnameseExplanation": "'soda' có nghĩa là nước ngọt có ga."
    },
    {
      "id": "u1l1-q4",
      "type": "listening",
      "questionText": "Listen and choose the word you hear:",
      "promptAudioUrl": "/audio/unit1/lesson1/gum.mp3",
      "options": [
        "gum",
        "peanuts",
        "potato chips"
      ],
      "correctAnswer": "gum",
      "explanation_vi": "Từ phát âm là 'gum' (kẹo cao su).",
      "vietnameseExplanation": "Từ phát âm là 'gum' (kẹo cao su)."
    },
    {
      "id": "u1l1-q5",
      "type": "matching",
      "questionText": "Match the words with their Vietnamese meanings:",
      "matchingPairs": [
        {
          "leftId": "l1",
          "leftText": "gum",
          "rightId": "r1",
          "rightText": "kẹo cao su"
        },
        {
          "leftId": "l2",
          "leftText": "peanuts",
          "rightId": "r2",
          "rightText": "đậu phộng"
        },
        {
          "leftId": "l3",
          "leftText": "popcorn",
          "rightId": "r3",
          "rightText": "bỏng ngô"
        }
      ],
      "correctAnswer": "gum-kẹo cao su, peanuts-đậu phộng, popcorn-bỏng ngô",
      "explanation_vi": "Đã ghép nối chính xác các từ vựng với nghĩa tiếng Việt.",
      "vietnameseExplanation": "Đã ghép nối chính xác các từ vựng với nghĩa tiếng Việt."
    },
    {
      "id": "u1l1-q6",
      "type": "multiple-choice",
      "questionText": "Complete the sentence: 'He _____ some potato chips.'",
      "options": [
        "wants",
        "want",
        "wanting"
      ],
      "correctAnswer": "wants",
      "explanation_vi": "Chủ ngữ ngôi thứ ba số ít 'He' đi với động từ chia 'wants'.",
      "vietnameseExplanation": "Chủ ngữ ngôi thứ ba số ít 'He' đi với động từ chia 'wants'."
    },
    {
      "id": "u1l1-q7",
      "type": "multiple-choice",
      "questionText": "Choose the correct answer for the dialogue: A: 'What do you want?' B: '_____'",
      "options": [
        "I want some peanuts.",
        "Yes, I do.",
        "No, thanks."
      ],
      "correctAnswer": "I want some peanuts.",
      "explanation_vi": "Hỏi 'What do you want?' trả lời bằng 'I want some...'.",
      "vietnameseExplanation": "Hỏi 'What do you want?' trả lời bằng 'I want some...'."
    },
    {
      "id": "u1l1-q8",
      "type": "multiple-choice",
      "questionText": "Choose the correct word: 'She doesn't want _____ soda.'",
      "options": [
        "any",
        "some",
        "a"
      ],
      "correctAnswer": "any",
      "explanation_vi": "Dùng 'any' trong câu phủ định với 'doesn't want'.",
      "vietnameseExplanation": "Dùng 'any' trong câu phủ định với 'doesn't want'."
    },
    {
      "id": "u1l1-q9",
      "type": "multiple-choice",
      "questionText": "Choose the correct sentence: \"Họ muốn một ít đậu phộng.\"",
      "options": [
        "They want some peanuts.",
        "They want some popcorn.",
        "They want some gum."
      ],
      "correctAnswer": "They want some peanuts.",
      "explanation_vi": "'They want some peanuts.' có nghĩa là họ muốn một ít đậu phộng.",
      "vietnameseExplanation": "'They want some peanuts.' có nghĩa là họ muốn một ít đậu phộng."
    },
    {
      "id": "u1l1-q10",
      "type": "multiple-choice",
      "questionText": "Mixed Review: Which sentence is grammatically correct?",
      "options": [
        "He wants some chocolate.",
        "He want some chocolate.",
        "He wanting some chocolate."
      ],
      "correctAnswer": "He wants some chocolate.",
      "explanation_vi": "Chủ ngữ 'He' cần động từ thêm -s ('wants').",
      "vietnameseExplanation": "Chủ ngữ 'He' cần động từ thêm -s ('wants')."
    }
  ],

  unit1_lesson2: [
    {
      "id": "u1l2-q1",
      "type": "multiple-choice",
      "questionText": "What is 'củ cà rốt' in English?",
      "options": [
        "carrot",
        "onion",
        "cabbage"
      ],
      "correctAnswer": "carrot",
      "explanation_vi": "'Carrot' có nghĩa là củ cà rốt.",
      "vietnameseExplanation": "'Carrot' có nghĩa là củ cà rốt."
    },
    {
      "id": "u1l2-q2",
      "type": "multiple-choice",
      "questionText": "What is 'bắp cải' in English?",
      "options": [
        "cabbage",
        "potato",
        "tomato"
      ],
      "correctAnswer": "cabbage",
      "explanation_vi": "'Cabbage' có nghĩa là bắp cải.",
      "vietnameseExplanation": "'Cabbage' có nghĩa là bắp cải."
    },
    {
      "id": "u1l2-q3",
      "type": "multiple-choice",
      "questionText": "What does 'onion' mean in Vietnamese?",
      "options": [
        "Củ hành tây",
        "Củ tỏi",
        "Bắp cải"
      ],
      "correctAnswer": "Củ hành tây",
      "explanation_vi": "'onion' có nghĩa là củ hành tây.",
      "vietnameseExplanation": "'onion' có nghĩa là củ hành tây."
    },
    {
      "id": "u1l2-q4",
      "type": "listening",
      "questionText": "Listen and choose the word you hear:",
      "promptAudioUrl": "/audio/unit1/lesson2/tomato.mp3",
      "options": [
        "tomato",
        "potato",
        "pepper"
      ],
      "correctAnswer": "tomato",
      "explanation_vi": "Từ được đọc là 'tomato' (quả cà chua).",
      "vietnameseExplanation": "Từ được đọc là 'tomato' (quả cà chua)."
    },
    {
      "id": "u1l2-q5",
      "type": "matching",
      "questionText": "Match the words with their meanings:",
      "matchingPairs": [
        {
          "leftId": "l1",
          "leftText": "pepper",
          "rightId": "r1",
          "rightText": "ớt chuông"
        },
        {
          "leftId": "l2",
          "leftText": "potato",
          "rightId": "r2",
          "rightText": "khoai tây"
        },
        {
          "leftId": "l3",
          "leftText": "tomato",
          "rightId": "r3",
          "rightText": "cà chua"
        }
      ],
      "correctAnswer": "pepper-ớt chuông, potato-khoai tây, tomato-cà chua",
      "explanation_vi": "Đã ghép nối chính xác các từ vựng với nghĩa tiếng Việt.",
      "vietnameseExplanation": "Đã ghép nối chính xác các từ vựng với nghĩa tiếng Việt."
    },
    {
      "id": "u1l2-q6",
      "type": "multiple-choice",
      "questionText": "Complete the sentence: 'Do you need _____ peppers?'",
      "options": [
        "any",
        "some",
        "a"
      ],
      "correctAnswer": "any",
      "explanation_vi": "Dùng 'any' trong câu hỏi nghi vấn với danh từ số nhiều.",
      "vietnameseExplanation": "Dùng 'any' trong câu hỏi nghi vấn với danh từ số nhiều."
    },
    {
      "id": "u1l2-q7",
      "type": "multiple-choice",
      "questionText": "Choose the response: A: 'Do you need any carrots?' B: '_____' ",
      "options": [
        "Yes, we do.",
        "Yes, I am.",
        "No, it isn't."
      ],
      "correctAnswer": "Yes, we do.",
      "explanation_vi": "Câu hỏi 'Do you need...?' trả lời bằng 'Yes, we do.' hoặc 'No, we don't.'.",
      "vietnameseExplanation": "Câu hỏi 'Do you need...?' trả lời bằng 'Yes, we do.' hoặc 'No, we don't.'."
    },
    {
      "id": "u1l2-q8",
      "type": "multiple-choice",
      "questionText": "Choose the correct word: 'What _____ they need?'",
      "options": [
        "do",
        "does",
        "are"
      ],
      "correctAnswer": "do",
      "explanation_vi": "Chủ ngữ 'they' đi với trợ động từ 'do' trong câu hỏi.",
      "vietnameseExplanation": "Chủ ngữ 'they' đi với trợ động từ 'do' trong câu hỏi."
    },
    {
      "id": "u1l2-q9",
      "type": "multiple-choice",
      "questionText": "Choose the correct sentence: \"Họ cần một ít khoai tây.\"",
      "options": [
        "They need some potatoes.",
        "They need some carrots.",
        "They need some onions."
      ],
      "correctAnswer": "They need some potatoes.",
      "explanation_vi": "'They need some potatoes.' có nghĩa là họ cần một ít khoai tây.",
      "vietnameseExplanation": "'They need some potatoes.' có nghĩa là họ cần một ít khoai tây."
    },
    {
      "id": "u1l2-q10",
      "type": "multiple-choice",
      "questionText": "Mixed Review: Choose the correct article: 'They need _____ carrot.'",
      "options": [
        "a",
        "an",
        "some"
      ],
      "correctAnswer": "a",
      "explanation_vi": "'carrot' số ít bắt đầu bằng phụ âm nên đi với 'a'.",
      "vietnameseExplanation": "'carrot' số ít bắt đầu bằng phụ âm nên đi với 'a'."
    }
  ],

  unit1_lesson3: [
    {
      "id": "u1l3-q1",
      "type": "multiple-choice",
      "questionText": "What is 'món súp' in English?",
      "options": [
        "soup",
        "salad",
        "spaghetti"
      ],
      "correctAnswer": "soup",
      "explanation_vi": "'Soup' có nghĩa là món súp.",
      "vietnameseExplanation": "'Soup' có nghĩa là món súp."
    },
    {
      "id": "u1l3-q2",
      "type": "multiple-choice",
      "questionText": "What is 'mỳ Ý' in English?",
      "options": [
        "spaghetti",
        "soup",
        "salad"
      ],
      "correctAnswer": "spaghetti",
      "explanation_vi": "'Spaghetti' có nghĩa là món mỳ Ý.",
      "vietnameseExplanation": "'Spaghetti' có nghĩa là món mỳ Ý."
    },
    {
      "id": "u1l3-q3",
      "type": "multiple-choice",
      "questionText": "What does 'healthy' mean?",
      "options": [
        "Lành mạnh / Tốt cho sức khỏe",
        "Ngon miệng",
        "Nóng hổi"
      ],
      "correctAnswer": "Lành mạnh / Tốt cho sức khỏe",
      "explanation_vi": "'healthy' có nghĩa là lành mạnh, tốt cho sức khỏe.",
      "vietnameseExplanation": "'healthy' có nghĩa là lành mạnh, tốt cho sức khỏe."
    },
    {
      "id": "u1l3-q4",
      "type": "listening",
      "questionText": "Listen and choose what is asked for lunch:",
      "promptAudioUrl": "/audio/unit1/lesson3/lunch.mp3",
      "options": [
        "lunch",
        "breakfast",
        "dinner"
      ],
      "correctAnswer": "lunch",
      "explanation_vi": "Băng thu âm nói về bữa trưa ('lunch').",
      "vietnameseExplanation": "Băng thu âm nói về bữa trưa ('lunch')."
    },
    {
      "id": "u1l3-q5",
      "type": "matching",
      "questionText": "Match story words with meanings:",
      "matchingPairs": [
        {
          "leftId": "l1",
          "leftText": "lunch",
          "rightId": "r1",
          "rightText": "bữa ăn trưa"
        },
        {
          "leftId": "l2",
          "leftText": "healthy",
          "rightId": "r2",
          "rightText": "lành mạnh"
        },
        {
          "leftId": "l3",
          "leftText": "try",
          "rightId": "r3",
          "rightText": "thử"
        }
      ],
      "correctAnswer": "lunch-bữa ăn trưa, healthy-lành mạnh, try-thử",
      "explanation_vi": "Đã nối đúng các từ vựng trong câu chuyện.",
      "vietnameseExplanation": "Đã nối đúng các từ vựng trong câu chuyện."
    },
    {
      "id": "u1l3-q6",
      "type": "multiple-choice",
      "questionText": "Complete the phrase: 'That _____ good!'",
      "options": [
        "sounds",
        "sound",
        "sounding"
      ],
      "correctAnswer": "sounds",
      "explanation_vi": "Cụm từ chuẩn khen ngợi là 'That sounds good!'.",
      "vietnameseExplanation": "Cụm từ chuẩn khen ngợi là 'That sounds good!'."
    },
    {
      "id": "u1l3-q7",
      "type": "multiple-choice",
      "questionText": "Choose the response: A: 'What's for lunch?' B: '_____' ",
      "options": [
        "Soup and salad.",
        "I like blue.",
        "Yes, please."
      ],
      "correctAnswer": "Soup and salad.",
      "explanation_vi": "Trả lời tên các món ăn cho bữa trưa: 'Soup and salad.'.",
      "vietnameseExplanation": "Trả lời tên các món ăn cho bữa trưa: 'Soup and salad.'."
    },
    {
      "id": "u1l3-q8",
      "type": "multiple-choice",
      "questionText": "Complete the value sentence: 'Be _____!'",
      "options": [
        "healthy",
        "angry",
        "sad"
      ],
      "correctAnswer": "healthy",
      "explanation_vi": "Thông điệp sức khỏe trong bài học là 'Be healthy!'.",
      "vietnameseExplanation": "Thông điệp sức khỏe trong bài học là 'Be healthy!'."
    },
    {
      "id": "u1l3-q9",
      "type": "multiple-choice",
      "questionText": "What is 'món rau trộn' in English?",
      "options": [
        "salad",
        "soup",
        "spaghetti"
      ],
      "correctAnswer": "salad",
      "explanation_vi": "'Salad' có nghĩa là món rau trộn salad.",
      "vietnameseExplanation": "'Salad' có nghĩa là món rau trộn salad."
    },
    {
      "id": "u1l3-q10",
      "type": "multiple-choice",
      "questionText": "Mixed Review: What does the story encourage you to do?",
      "options": [
        "Just try it!",
        "Don't eat it!",
        "Go away!"
      ],
      "correctAnswer": "Just try it!",
      "explanation_vi": "Tên câu chuyện là 'Just try it!' khuyên ta thử món mới.",
      "vietnameseExplanation": "Tên câu chuyện là 'Just try it!' khuyên ta thử món mới."
    }
  ],

  unit1_lesson4: [
    {
      "id": "u1l4-q1",
      "type": "multiple-choice",
      "questionText": "What is 'món trứng ốp lết' in English?",
      "options": [
        "omelet",
        "smoothie",
        "milkshake"
      ],
      "correctAnswer": "omelet",
      "explanation_vi": "'Omelet' có nghĩa là món trứng ốp lết.",
      "vietnameseExplanation": "'Omelet' có nghĩa là món trứng ốp lết."
    },
    {
      "id": "u1l4-q2",
      "type": "multiple-choice",
      "questionText": "What is 'món sinh tố' in English?",
      "options": [
        "smoothie",
        "fruit salad",
        "omelet"
      ],
      "correctAnswer": "smoothie",
      "explanation_vi": "'Smoothie' có nghĩa là món sinh tố.",
      "vietnameseExplanation": "'Smoothie' có nghĩa là món sinh tố."
    },
    {
      "id": "u1l4-q3",
      "type": "multiple-choice",
      "questionText": "Choose the correct article: '_____ omelet'",
      "options": [
        "an",
        "a",
        "some"
      ],
      "correctAnswer": "an",
      "explanation_vi": "'omelet' bắt đầu bằng nguyên âm 'o' nên dùng mạo từ 'an'.",
      "vietnameseExplanation": "'omelet' bắt đầu bằng nguyên âm 'o' nên dùng mạo từ 'an'."
    },
    {
      "id": "u1l4-q4",
      "type": "listening",
      "questionText": "Listen and choose the drink mentioned:",
      "promptAudioUrl": "/audio/unit1/lesson4/milkshake.mp3",
      "options": [
        "milkshake",
        "smoothie",
        "soda"
      ],
      "correctAnswer": "milkshake",
      "explanation_vi": "Tên thức uống được đọc là 'milkshake' (sữa lắc).",
      "vietnameseExplanation": "Tên thức uống được đọc là 'milkshake' (sữa lắc)."
    },
    {
      "id": "u1l4-q5",
      "type": "matching",
      "questionText": "Match the cooking terms:",
      "matchingPairs": [
        {
          "leftId": "l1",
          "leftText": "omelet",
          "rightId": "r1",
          "rightText": "trứng rán"
        },
        {
          "leftId": "l2",
          "leftText": "smoothie",
          "rightId": "r2",
          "rightText": "sinh tố"
        },
        {
          "leftId": "l3",
          "leftText": "milkshake",
          "rightId": "r3",
          "rightText": "sữa lắc"
        }
      ],
      "correctAnswer": "omelet-trứng rán, smoothie-sinh tố, milkshake-sữa lắc",
      "explanation_vi": "Các món ăn và nghĩa ghép đúng hoàn toàn.",
      "vietnameseExplanation": "Các món ăn và nghĩa ghép đúng hoàn toàn."
    },
    {
      "id": "u1l4-q6",
      "type": "multiple-choice",
      "questionText": "Complete: 'I want to _____ a smoothie.'",
      "options": [
        "make",
        "makes",
        "making"
      ],
      "correctAnswer": "make",
      "explanation_vi": "Sau 'want to' là động từ nguyên thể 'make'.",
      "vietnameseExplanation": "Sau 'want to' là động từ nguyên thể 'make'."
    },
    {
      "id": "u1l4-q7",
      "type": "multiple-choice",
      "questionText": "Choose the response: A: 'What do you want to make?' B: '_____' ",
      "options": [
        "I want to make fruit salad.",
        "I like fruit.",
        "Yes, I do."
      ],
      "correctAnswer": "I want to make fruit salad.",
      "explanation_vi": "Trả lời đúng cấu trúc 'I want to make...': 'I want to make fruit salad.'.",
      "vietnameseExplanation": "Trả lời đúng cấu trúc 'I want to make...': 'I want to make fruit salad.'."
    },
    {
      "id": "u1l4-q8",
      "type": "multiple-choice",
      "questionText": "Choose the correct form: 'She _____ to make a milkshake.'",
      "options": [
        "wants",
        "want",
        "wanting"
      ],
      "correctAnswer": "wants",
      "explanation_vi": "Ngôi 'She' đi với động từ thêm -s ('wants').",
      "vietnameseExplanation": "Ngôi 'She' đi với động từ thêm -s ('wants')."
    },
    {
      "id": "u1l4-q9",
      "type": "multiple-choice",
      "questionText": "Choose the correct sentence: \"Chúng tôi muốn làm món salad hoa quả.\"",
      "options": [
        "We want to make fruit salad.",
        "We want to make an omelet.",
        "We want to make a smoothie."
      ],
      "correctAnswer": "We want to make fruit salad.",
      "explanation_vi": "'We want to make fruit salad.' có nghĩa là chúng tôi muốn làm món salad hoa quả.",
      "vietnameseExplanation": "'We want to make fruit salad.' có nghĩa là chúng tôi muốn làm món salad hoa quả."
    },
    {
      "id": "u1l4-q10",
      "type": "multiple-choice",
      "questionText": "Mixed Review: Fill in the subject: '_____ want to make an omelet.'",
      "options": [
        "I",
        "He",
        "She"
      ],
      "correctAnswer": "I",
      "explanation_vi": "Động từ 'want' ở dạng nguyên thể phù hợp với ngôi 'I'.",
      "vietnameseExplanation": "Động từ 'want' ở dạng nguyên thể phù hợp với ngôi 'I'."
    }
  ]
};

// 1. Update practice.json
practice.unit1_lesson1 = unit1Questions.unit1_lesson1;
practice.unit1_lesson2 = unit1Questions.unit1_lesson2;
practice.unit1_lesson3 = unit1Questions.unit1_lesson3;
practice.unit1_lesson4 = unit1Questions.unit1_lesson4;

fs.writeFileSync(practicePath, JSON.stringify(practice, null, 2), 'utf8');
console.log('Successfully updated practice.json for Unit 1!');

// 2. Update courseData.json
const unit1 = courseData.units.find(u => u.id === 'unit-1');
if (unit1) {
  unit1.lessons.forEach(l => {
    if (l.id === 'u1-l1') l.practiceQuestions = unit1Questions.unit1_lesson1;
    if (l.id === 'u1-l2') l.practiceQuestions = unit1Questions.unit1_lesson2;
    if (l.id === 'u1-l3') l.practiceQuestions = unit1Questions.unit1_lesson3;
    if (l.id === 'u1-l4') l.practiceQuestions = unit1Questions.unit1_lesson4;
  });
  fs.writeFileSync(courseDataPath, JSON.stringify(courseData, null, 2), 'utf8');
  console.log('Successfully updated courseData.json for Unit 1!');
} else {
  console.error('Error: unit-1 not found in courseData.json');
}
