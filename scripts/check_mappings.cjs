const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');

function load(file) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf8'));
}

const courseData = load('courseData.json');
const vocabularyDict = load('vocabulary.json');
const patternDict = load('pattern.json');
const practiceDict = load('practice.json');
const speakingDict = load('speaking.json');
const completedDict = load('completed.json');

console.log("=== Checking key mappings ===");

// Map lesson ID or unit index to dictionary keys
// e.g. u1-l1 -> unit1_lesson1
// cu1-l1 -> checkup_1
// u5-l1 -> unit5_lesson1
// yle-l1 -> yle_practice

function getDictKey(unitId, lessonId) {
  if (unitId === 'checkup-1' || lessonId === 'cu1-l1') return 'checkup_1';
  if (unitId === 'checkup-2' || lessonId === 'cu2-l1') return 'checkup_2';
  if (unitId === 'checkup-3' || lessonId === 'cu3-l1') return 'checkup_3';
  if (unitId === 'checkup-4' || lessonId === 'cu4-l1') return 'checkup_4';
  if (unitId === 'yle-practice' || lessonId === 'yle-l1') return 'yle_practice';

  const uMatch = unitId.match(/unit-(\d+)/);
  const lMatch = lessonId.match(/u\d+-l(\d+)/);
  if (uMatch && lMatch) {
    return `unit${uMatch[1]}_lesson${lMatch[1]}`;
  }
  return null;
}

courseData.units.forEach((unit) => {
  unit.lessons.forEach((lesson) => {
    const key = getDictKey(unit.id, lesson.id);
    const hasVoc = Boolean(vocabularyDict[key]);
    const hasPat = Boolean(patternDict[key]);
    const hasPrac = Boolean(practiceDict[key]);
    const hasSpk = Boolean(speakingDict[key]);
    const hasComp = Boolean(completedDict[key]);

    console.log(`${unit.id} / ${lesson.id} -> key: ${key}`);
    console.log(`  in dicts: voc=${hasVoc}, pat=${hasPat}, prac=${hasPrac} (${practiceDict[key]?.length || 0} qs), spk=${hasSpk} (${speakingDict[key]?.tasks?.length || 0} tasks), comp=${hasComp}`);
    console.log(`  in courseData: voc=${lesson.vocabulary?.length || 0}, pat=${Boolean(lesson.modelPattern)}, prac=${lesson.practiceQuestions?.length || 0}, spk=${Boolean(lesson.speakingTask)}, tasks=${lesson.speakingTask?.tasks?.length || 0}`);
  });
});
