const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');

// Helper to load existing JSON
function loadJson(filename) {
  const filepath = path.join(dataDir, filename);
  if (fs.existsSync(filepath)) {
    return JSON.parse(fs.readFileSync(filepath, 'utf8'));
  }
  return {};
}

// Helper to save JSON
function saveJson(filename, obj) {
  const filepath = path.join(dataDir, filename);
  fs.writeFileSync(filepath, JSON.stringify(obj, null, 2), 'utf8');
  console.log(`Saved ${filename}`);
}

// Load existing files
const courseData = loadJson('courseData.json');
const vocabulary = loadJson('vocabulary.json');
const pattern = loadJson('pattern.json');
const practice = loadJson('practice.json');
const speaking = loadJson('speaking.json');
const completed = loadJson('completed.json');

console.log("Loaded existing files successfully.");
