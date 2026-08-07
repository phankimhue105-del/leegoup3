const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');

function loadJson(name) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, name), 'utf8'));
}

function saveJson(name, data) {
  fs.writeFileSync(path.join(dataDir, name), JSON.stringify(data, null, 2), 'utf8');
  console.log(`Saved ${name}`);
}

const courseData = loadJson('courseData.json');
const vocabularyDict = loadJson('vocabulary.json');
const patternDict = loadJson('pattern.json');
const practiceDict = loadJson('practice.json');
const speakingDict = loadJson('speaking.json');
const completedDict = loadJson('completed.json');

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
    const dictKey = getDictKey(unit.id, lesson.id);
    if (!dictKey) return;

    if (vocabularyDict[dictKey]) {
      lesson.vocabulary = vocabularyDict[dictKey];
    }
    if (patternDict[dictKey]) {
      lesson.modelPattern = patternDict[dictKey];
    }
    if (practiceDict[dictKey]) {
      lesson.practiceQuestions = practiceDict[dictKey];
    }
    if (speakingDict[dictKey]) {
      lesson.speakingTask = speakingDict[dictKey];
    }
    if (completedDict[dictKey]) {
      lesson.completed = completedDict[dictKey];
    }
  });
});

saveJson('courseData.json', courseData);
console.log('courseData.json successfully synchronized with all dictionaries!');
