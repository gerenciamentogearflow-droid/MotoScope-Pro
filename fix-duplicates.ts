import fs from 'fs';

let content = fs.readFileSync('src/data/componentsDB.ts', 'utf8');
// To fix duplicate properties, let's use regex to remove the second occurrence of "teacherExplanation" in a block
// But parsing JSON is much safer if it is valid TS object? No, it's a TS file exporting an object.
// We can just format the file and write a simple script to strip duplicates

const lines = content.split('\n');
const fixedLines = [];
let inMultimeter = false;
let seenTeacher = false;

for (let line of lines) {
  if (line.includes('"multimeter": {')) {
     inMultimeter = true;
     seenTeacher = false;
  }
  
  if (inMultimeter) {
     if (line.includes('"teacherExplanation":')) {
        if (seenTeacher) {
           // Skip duplicate
           continue;
        } else {
           seenTeacher = true;
        }
     }
  }
  
  if (inMultimeter && line.match(/^\s*\},?\s*$/)) {
     inMultimeter = false;
     seenTeacher = false;
  }
  
  fixedLines.push(line);
}

fs.writeFileSync('src/data/componentsDB.ts', fixedLines.join('\n'));
