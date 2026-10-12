const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');
const practicePath = path.join(dataDir, 'practice.json');
const courseDataPath = path.join(dataDir, 'courseData.json');

const practice = JSON.parse(fs.readFileSync(practicePath, 'utf8'));
const courseData = JSON.parse(fs.readFileSync(courseDataPath, 'utf8'));

let failures = 0;

console.log('=== VALIDATING UNIT 1 PRACTICE QUESTIONS ===\n');

for (let l = 1; l <= 4; l++) {
  const pList = practice[`unit1_lesson${l}`];
  const u1 = courseData.units.find(u => u.id === 'unit-1');
  const cdLesson = u1 ? u1.lessons.find(x => x.id === `u1-l${l}`) : null;
  const cdList = cdLesson ? cdLesson.practiceQuestions : [];

  console.log(`Checking Lesson ${l}:`);
  console.log(`  practice.json count: ${pList ? pList.length : 0} questions`);
  console.log(`  courseData.json count: ${cdList ? cdList.length : 0} questions`);

  if (!pList || pList.length !== 10) {
    console.error(`  [FAIL] practice.json Lesson ${l} count is not 10!`);
    failures++;
  }
  if (!cdList || cdList.length !== 10) {
    console.error(`  [FAIL] courseData.json Lesson ${l} count is not 10!`);
    failures++;
  }

  // Check consistency between practice.json and courseData.json
  if (JSON.stringify(pList) !== JSON.stringify(cdList)) {
    console.error(`  [FAIL] Lesson ${l} questions in practice.json and courseData.json do not match!`);
    failures++;
  }

  pList.forEach((q, idx) => {
    // 1. No picture-select
    if (q.type === 'picture-select') {
      console.error(`  [FAIL] Q${idx + 1} (${q.id}) is still 'picture-select'!`);
      failures++;
    }

    // 2. No "choose the picture" in prompt
    if (q.questionText.toLowerCase().includes('choose the picture')) {
      console.error(`  [FAIL] Q${idx + 1} (${q.id}) contains 'choose the picture': ${q.questionText}`);
      failures++;
    }

    // 3. No fill-in-blank
    if (q.type === 'fill-in-blank') {
      console.error(`  [FAIL] Q${idx + 1} (${q.id}) is still 'fill-in-blank'!`);
      failures++;
    }

    // 4. Multiple-choice format: exactly 3 options, correctAnswer in options
    if (q.type === 'multiple-choice') {
      if (!q.options || q.options.length !== 3) {
        console.error(`  [FAIL] Q${idx + 1} (${q.id}) has ${q.options ? q.options.length : 0} options (expected 3)`);
        failures++;
      }
      if (!q.options.includes(q.correctAnswer)) {
        console.error(`  [FAIL] Q${idx + 1} (${q.id}) correctAnswer "${q.correctAnswer}" not in options!`);
        failures++;
      }
    }

    // 5. Explanation does not start with "Đúng"
    const exp = q.vietnameseExplanation || q.explanation_vi || '';
    if (exp.toLowerCase().startsWith('đúng')) {
      console.error(`  [FAIL] Q${idx + 1} (${q.id}) explanation starts with 'Đúng': ${exp}`);
      failures++;
    }
  });

  console.log(`  Lesson ${l} validation completed.\n`);
}

if (failures === 0) {
  console.log('========================================================');
  console.log('✅ ALL UNIT 1 PRACTICE VALIDATION CHECKS PASSED (0 ERRORS)');
  console.log('========================================================');
} else {
  console.error(`❌ VALIDATION FAILED with ${failures} error(s).`);
  process.exit(1);
}
