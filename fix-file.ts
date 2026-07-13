import fs from 'fs';

let content = fs.readFileSync('src/data/componentsDB.ts', 'utf8');

// I will use regex to fix up missing commas, or completely re-format
// A safe way: `npm install --no-save prettier` and format? Prettier won't format invalid JS.

// Let's replace any double `teacherExplanation` occurrences.
content = content.replace(/"teacherExplanation": "([^"]*)",\s*"teacherExplanation": "([^"]*)"/g, '"teacherExplanation": "$2"');
// Wait, the string contains newlines so `[^"]*` might not work without `s` flag or if there are unescaped quotes. But there shouldn't be unescaped quotes because I used JSON strings.
content = content.replace(/"teacherExplanation": "[\s\S]*?",\s*"teacherExplanation": "[\s\S]*?"/g, (match) => {
   // return only the first one
   const first = match.substring(0, match.indexOf('",\n') + '",\n'.length);
   return first.substring(0, first.length - 2); // remove comma
});

fs.writeFileSync('src/data/componentsDB.ts.bak', content);
