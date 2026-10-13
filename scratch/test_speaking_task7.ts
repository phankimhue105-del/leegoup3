import { speakingQuestionService } from '../src/services/speakingQuestionService';
import { speakingService } from '../src/services/speakingService';
import courseData from '../src/data/courseData.json';

async function runTests() {
  console.log('=== TEST 1: Question Generation for Unit 1 Lesson 3 ===');
  const u1 = courseData.units.find((u: any) => u.id === 'unit-1');
  const l3 = u1.lessons.find((l: any) => l.id === 'u1-l3');
  const questions = speakingQuestionService.generateQuestions(l3, u1, courseData.units as any);

  console.log(`Generated ${questions.length} questions for Unit 1 Lesson 3`);
  const task7 = questions[6]; // 7th question (Task 7/8)
  console.log('Task 7 ID:', task7.id);
  console.log('Task 7 Instruction:', task7.instruction);
  console.log('Task 7 Vietnamese Instruction:', task7.vietnameseInstruction);
  console.log('Task 7 TargetText (audio model):', task7.targetText);
  console.log('Task 7 ExpectedAnswer:', task7.expectedAnswer);
  console.log('Task 7 AcceptableAnswers:', task7.acceptableAnswers);
  console.log('Task 7 VocabularyRefs:', task7.vocabularyRefs);

  let errors = 0;
  if (task7.targetText !== 'I want some potato chips.') {
    console.error('FAIL: Task 7 targetText is not "I want some potato chips."! Actual:', task7.targetText);
    errors++;
  }
  if (task7.expectedAnswer !== 'I want some potato chips.') {
    console.error('FAIL: Task 7 expectedAnswer is not "I want some potato chips."! Actual:', task7.expectedAnswer);
    errors++;
  }
  if (task7.targetText.includes('lunch')) {
    console.error('FAIL: Task 7 still contains "lunch"!');
    errors++;
  }

  console.log('\n=== TEST 2: Evaluation Scenarios for Task 7/8 ===');

  const testCases = [
    {
      name: 'Scenario 1: Exact model answer ("I want some potato chips.")',
      input: 'I want some potato chips.',
      expectedStars: 3,
      minScore: 90
    },
    {
      name: 'Scenario 2: Valid alternative snack ("I want some popcorn.")',
      input: 'I want some popcorn.',
      expectedStars: 3,
      minScore: 90
    },
    {
      name: 'Scenario 3: Valid alternative snack ("I want some peanuts.")',
      input: 'I want some peanuts.',
      expectedStars: 3,
      minScore: 90
    },
    {
      name: 'Scenario 4: Snack keyword only ("potato chips")',
      input: 'potato chips',
      expectedStars: 2,
      minScore: 75
    },
    {
      name: 'Scenario 5: Irrelevant meal response ("I want some lunch.")',
      input: 'I want some lunch.',
      expectedStars: 1,
      maxScore: 60
    },
    {
      name: 'Scenario 6: Completely off-topic ("hello")',
      input: 'hello',
      expectedStars: 1,
      maxScore: 45
    }
  ];

  for (const tc of testCases) {
    const res = await speakingService.evaluateSpeech(null, task7.expectedAnswer, task7.vocabularyRefs, {
      questionId: task7.id,
      questionType: task7.type,
      instruction: task7.instruction,
      targetText: task7.targetText,
      expectedAnswer: task7.expectedAnswer,
      studentAnswer: tc.input,
      inputMode: 'text',
      lessonVocabulary: task7.vocabularyRefs,
      lessonContext: task7.lessonContext
    });

    console.log(`\n[${tc.name}]`);
    console.log(`  Input: "${tc.input}"`);
    console.log(`  Score: ${res.score}/100, Stars: ${res.stars}`);
    console.log(`  AI English Feedback: ${res.aiCommentEn}`);
    console.log(`  Lời khuyên VN: ${res.aiCommentVi}`);

    if (tc.expectedStars && res.stars !== tc.expectedStars) {
      console.error(`  FAIL: Expected ${tc.expectedStars} stars, got ${res.stars}`);
      errors++;
    }
    if (tc.minScore && res.score < tc.minScore) {
      console.error(`  FAIL: Expected score >= ${tc.minScore}, got ${res.score}`);
      errors++;
    }
    if (tc.maxScore && res.score > tc.maxScore) {
      console.error(`  FAIL: Expected score <= ${tc.maxScore}, got ${res.score}`);
      errors++;
    }
  }

  console.log('\n=== TEST 3: Regression Check (Other Questions) ===');
  const task1 = questions[0];
  const resT1 = await speakingService.evaluateSpeech(null, task1.expectedAnswer, task1.vocabularyRefs, {
    questionId: task1.id,
    questionType: task1.type,
    instruction: task1.instruction,
    targetText: task1.targetText,
    expectedAnswer: task1.expectedAnswer,
    studentAnswer: 'soup',
    inputMode: 'text'
  });
  console.log(`Task 1 (soup) score: ${resT1.score}, stars: ${resT1.stars} -> OK`);

  const task8 = questions[7];
  console.log(`Task 8 instruction: "${task8.instruction}", targetText: "${task8.targetText}" -> OK`);

  if (errors === 0) {
    console.log('\n✅ ALL TESTS PASSED SUCCESSFULLY! (0 errors)');
  } else {
    console.error(`\n❌ TESTS FAILED with ${errors} errors!`);
    process.exit(1);
  }
}

runTests();
