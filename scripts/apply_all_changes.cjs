const fs = require('fs');
const path = require('path');

const u7Lessons = require('./gen_u7.cjs');
const u8Lessons = require('./gen_u8.cjs');
const cu4Lesson = require('./gen_cu4.cjs');
const yleData = require('./gen_yle.cjs');

const dataDir = path.join(__dirname, '../src/data');

function readJson(filename) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, filename), 'utf8'));
}

function writeJson(filename, data) {
  fs.writeFileSync(path.join(dataDir, filename), JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${filename}`);
}

const courseData = readJson('courseData.json');
const vocabulary = readJson('vocabulary.json');
const pattern = readJson('pattern.json');
const practice = readJson('practice.json');
const speaking = readJson('speaking.json');
const completed = readJson('completed.json');

// 1. Build Unit 7
const unit7 = {
  id: "unit-7",
  title: "Unit 7",
  subtitle: "Out and About",
  vietnameseTitle: "Thế Giới Quay Cùng Em",
  type: "standard",
  colorHex: "#0284C7",
  iconName: "Compass",
  bannerImage: "/images/unit7/banner.png",
  lessons: u7Lessons
};

// 2. Build Unit 8
const unit8 = {
  id: "unit-8",
  title: "Unit 8",
  subtitle: "Things We Use",
  vietnameseTitle: "Đồ Dùng Hàng Ngày",
  type: "standard",
  colorHex: "#7C3AED",
  iconName: "Briefcase",
  bannerImage: "/images/unit8/banner.png",
  lessons: u8Lessons
};

// 3. Build Check Up 4
const checkup4 = {
  id: "checkup-4",
  title: "Check Up 4",
  subtitle: "Review Units 7 and 8",
  vietnameseTitle: "Ôn Tập Tổng Hợp Units 7 & 8",
  type: "checkup",
  colorHex: "#E11D48",
  iconName: "CheckCircle2",
  bannerImage: "/images/checkup4/banner.png",
  lessons: [cu4Lesson]
};

// 4. Build YLE Practice Unit
const yleUnit = {
  id: "yle-practice",
  title: "YLE Practice",
  subtitle: "Cambridge Movers Practice Test",
  vietnameseTitle: "Ôn Thi Cambridge Movers (Units 1 - 8)",
  type: "yle",
  colorHex: "#0D9488",
  iconName: "Award",
  bannerImage: "/images/yle/banner.png",
  lessons: [
    {
      ...yleData.lesson,
      practiceQuestions: yleData.practiceQuestions,
      speakingTask: {
        id: "yle-s",
        promptText: "10 Cambridge Movers Speaking Tasks reviewing Units 1 to 8.",
        vietnamesePrompt: "10 nhiệm vụ kiểm tra kỹ năng nói chuẩn Cambridge Movers.",
        image: "/images/yle/speaking.png",
        referenceAudioUrl: "/audio/yle/speaking.mp3",
        sampleAnswer: "Complete response covering all 10 tasks.",
        keywordsToDetect: ["popcorn", "dictionary", "cashier", "marble", "beach", "taller", "five", "school"],
        tasks: yleData.speakingTasks
      }
    }
  ]
};

// Merge into courseData.units (replace if already exists, else append)
const newUnits = [unit7, unit8, checkup4, yleUnit];

newUnits.forEach((u) => {
  const existingIdx = courseData.units.findIndex((item) => item.id === u.id);
  if (existingIdx !== -1) {
    courseData.units[existingIdx] = u;
  } else {
    courseData.units.push(u);
  }
});

// Update dictionary files
function registerLessonInDicts(keyName, lessonObj) {
  vocabulary[keyName] = lessonObj.vocabulary;
  pattern[keyName] = lessonObj.modelPattern;
  practice[keyName] = lessonObj.practiceQuestions;
  speaking[keyName] = lessonObj.speakingTask;
  completed[keyName] = lessonObj.completed;
}

// Register Unit 7
u7Lessons.forEach((l, idx) => {
  registerLessonInDicts(`unit7_lesson${idx + 1}`, l);
});

// Register Unit 8
u8Lessons.forEach((l, idx) => {
  registerLessonInDicts(`unit8_lesson${idx + 1}`, l);
});

// Register Check Up 4
registerLessonInDicts("checkup_4", cu4Lesson);

// Register YLE Practice
registerLessonInDicts("yle_practice", yleUnit.lessons[0]);

// Save all updated files
writeJson('courseData.json', courseData);
writeJson('vocabulary.json', vocabulary);
writeJson('pattern.json', pattern);
writeJson('practice.json', practice);
writeJson('speaking.json', speaking);
writeJson('completed.json', completed);

// Save dedicated YLE files
writeJson('yle_practice.json', { questions: yleData.practiceQuestions });
writeJson('yle_speaking.json', { tasks: yleData.speakingTasks, speakingTask: yleUnit.lessons[0].speakingTask });

console.log("ALL UNITS 7 & 8, CHECK UP 4, AND YLE PRACTICE CONTENT SUCCESSFULLY ADDED!");
