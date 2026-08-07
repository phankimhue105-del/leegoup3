const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');

function loadJson(name) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, name), 'utf8'));
}

const courseData = loadJson('courseData.json');
const vocabulary = loadJson('vocabulary.json');
const pattern = loadJson('pattern.json');
const practice = loadJson('practice.json');
const speaking = loadJson('speaking.json');
const completed = loadJson('completed.json');

console.log('=== STARTING APPLICATION DATA AUDIT ===\n');

let issueCount = 0;

function reportIssue(category, msg) {
  issueCount++;
  console.log(`[ISSUE] [${category}] ${msg}`);
}

// 1. Units Check
console.log(`Units found: ${courseData.units.length}`);
if (courseData.units.length !== 13) {
  reportIssue('UNITS', `Expected 13 unit entries (8 standard + 4 checkups + 1 YLE practice), found ${courseData.units.length}`);
}

let totalStandardLessons = 0;
let totalCheckUps = 0;
let totalYle = 0;

courseData.units.forEach((unit) => {
  console.log(`Unit ${unit.id} (${unit.title} - ${unit.type}): ${unit.lessons.length} lesson(s)`);
  if (unit.type === 'standard') {
    totalStandardLessons += unit.lessons.length;
    if (unit.lessons.length !== 4) {
      reportIssue('LESSON_COUNT', `Unit ${unit.id} has ${unit.lessons.length} lessons, expected 4.`);
    }
  } else if (unit.type === 'checkup') {
    totalCheckUps += unit.lessons.length;
  } else if (unit.type === 'yle') {
    totalYle += unit.lessons.length;
  }
});

console.log(`\nTotals -> Standard lessons: ${totalStandardLessons}, CheckUps: ${totalCheckUps}, YLE: ${totalYle}`);

// 2. Inspect Lessons in Dictionary & CourseData
courseData.units.forEach((unit) => {
  unit.lessons.forEach((lesson) => {
    const lId = lesson.id;
    // Check practice questions
    const qs = lesson.practiceQuestions || [];
    const targetQCount = unit.type === 'standard' ? 10 : unit.type === 'checkup' ? 8 : 20;

    if (qs.length !== targetQCount) {
      reportIssue('PRACTICE_COUNT', `Lesson ${lId} in unit ${unit.id} has ${qs.length} practice questions (expected ${targetQCount}).`);
    }

    // Check Question duplicates and explanations
    const qTexts = new Set();
    const qIds = new Set();

    qs.forEach((q, idx) => {
      if (!q.id) reportIssue('PRACTICE_SCHEMA', `Lesson ${lId} question #${idx+1} missing ID`);
      if (qIds.has(q.id)) reportIssue('PRACTICE_DUPLICATE_ID', `Lesson ${lId} duplicate question ID ${q.id}`);
      qIds.add(q.id);

      if (qTexts.has(q.questionText)) {
        reportIssue('PRACTICE_DUPLICATE_TEXT', `Lesson ${lId} duplicate question text: "${q.questionText}"`);
      }
      qTexts.add(q.questionText);

      // Explanation check
      const exp = q.explanation_vi || q.vietnameseExplanation;
      if (!exp) {
        reportIssue('EXPLANATION_MISSING', `Lesson ${lId} Q#${q.id} missing explanation_vi`);
      } else {
        const wordCount = exp.trim().split(/\s+/).length;
        if (wordCount > 20) {
          reportIssue('EXPLANATION_LENGTH', `Lesson ${lId} Q#${q.id} explanation has ${wordCount} words (>20 words): "${exp}"`);
        }
      }

      if (!q.correctAnswer) {
        reportIssue('CORRECT_ANSWER_MISSING', `Lesson ${lId} Q#${q.id} missing correctAnswer`);
      }
    });

    // Check speaking task
    const st = lesson.speakingTask;
    const targetSpkCount = unit.type === 'yle' ? 10 : 5;
    if (!st || !st.tasks) {
      reportIssue('SPEAKING_MISSING', `Lesson ${lId} missing speaking tasks structure`);
    } else if (st.tasks.length !== targetSpkCount) {
      reportIssue('SPEAKING_COUNT', `Lesson ${lId} speaking task count is ${st.tasks.length} (expected ${targetSpkCount})`);
    } else {
      st.tasks.forEach((task, tIdx) => {
        if (!task.sampleAnswer) reportIssue('SPEAKING_SAMPLE', `Lesson ${lId} task #${tIdx+1} missing sampleAnswer`);
        if (!task.keywordsToDetect || task.keywordsToDetect.length === 0) {
          reportIssue('SPEAKING_KEYWORDS', `Lesson ${lId} task #${tIdx+1} missing keywordsToDetect`);
        }
      });
    }

    // Check vocabulary
    const voc = lesson.vocabulary || [];
    if (unit.type === 'standard' && voc.length < 4) {
      reportIssue('VOCAB_COUNT', `Lesson ${lId} has only ${voc.length} vocabulary words`);
    }
  });
});

console.log(`\n=== AUDIT COMPLETED WITH ${issueCount} ISSUE(S) ===\n`);
