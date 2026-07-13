import fs from 'fs';

let content = fs.readFileSync('src/data/componentsDB.ts', 'utf8');

// The issue was:
// "temperatureObservation": "..."
// "teacherExplanation": "..."
//
// Let's find every line with "temperatureObservation" and make sure it has a comma if it's followed by "teacherExplanation".
// Same for "unit" if it's followed by "teacherExplanation".

// Since formatting is broken, let's just use regex over the whole file
content = content.replace(/"temperatureObservation": "([^"]+)"\s*"teacherExplanation"/g, '"temperatureObservation": "$1",\n      "teacherExplanation"');
content = content.replace(/"unit": "([^"]+)"\s*"teacherExplanation"/g, '"unit": "$1",\n      "teacherExplanation"');

fs.writeFileSync('src/data/componentsDB.ts', content);
