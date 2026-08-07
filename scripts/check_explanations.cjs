const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');

function load(name) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, name), 'utf8'));
}

function save(name, data) {
  fs.writeFileSync(path.join(dataDir, name), JSON.stringify(data, null, 2), 'utf8');
}

const practiceDict = load('practice.json');
const courseData = load('courseData.json');

let fixedCount = 0;

function cleanExplanation(text) {
  if (!text) return "Đúng. Bạn đã chọn câu trả lời chính xác!";
  let str = text.trim();
  // Remove example sentences if present in explanation to keep concise
  str = str.replace(/Ví dụ:.*$/i, '').trim();
  
  const words = str.split(/\s+/);
  if (words.length > 20) {
    str = words.slice(0, 20).join(' ') + '...';
    fixedCount++;
  }
  return str;
}

Object.keys(practiceDict).forEach((key) => {
  const list = practiceDict[key];
  if (Array.isArray(list)) {
    list.forEach((q) => {
      if (q.explanation_vi) {
        q.explanation_vi = cleanExplanation(q.explanation_vi);
      } else if (q.vietnameseExplanation) {
        q.explanation_vi = cleanExplanation(q.vietnameseExplanation);
      } else {
        q.explanation_vi = "Đúng. Bạn đã chọn câu trả lời chính xác!";
      }
      q.vietnameseExplanation = q.explanation_vi;
    });
  }
});

courseData.units.forEach((unit) => {
  unit.lessons.forEach((lesson) => {
    if (lesson.practiceQuestions) {
      lesson.practiceQuestions.forEach((q) => {
        if (q.explanation_vi) {
          q.explanation_vi = cleanExplanation(q.explanation_vi);
        } else if (q.vietnameseExplanation) {
          q.explanation_vi = cleanExplanation(q.vietnameseExplanation);
        } else {
          q.explanation_vi = "Đúng. Bạn đã chọn câu trả lời chính xác!";
        }
        q.vietnameseExplanation = q.explanation_vi;
      });
    }
  });
});

save('practice.json', practiceDict);
save('courseData.json', courseData);

console.log(`Audited all explanations! Fixed/trimmed ${fixedCount} explanation(s) to guarantee <= 20 words.`);
