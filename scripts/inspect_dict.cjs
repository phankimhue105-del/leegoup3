const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');

function loadJson(name) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, name), 'utf8'));
}

const courseData = loadJson('courseData.json');
const practiceDict = loadJson('practice.json');
const speakingDict = loadJson('speaking.json');

console.log('--- Inspecting Units 1 to 6 in courseData vs Dictionaries ---');

courseData.units.forEach((unit) => {
  if (['unit-1', 'unit-2', 'unit-3', 'unit-4', 'unit-5', 'unit-6', 'checkup-1', 'checkup-2', 'checkup-3'].includes(unit.id)) {
    console.log(`\nUnit: ${unit.id}`);
    unit.lessons.forEach((l) => {
      console.log(`  Lesson ${l.id}: courseData practice count=${l.practiceQuestions?.length || 0}, speakingTask=${Boolean(l.speakingTask)}, speaking tasks count=${l.speakingTask?.tasks?.length || 0}`);
    });
  }
});

console.log('\nKeys in practice.json:');
console.log(Object.keys(practiceDict));

console.log('\nKeys in speaking.json:');
console.log(Object.keys(speakingDict));
