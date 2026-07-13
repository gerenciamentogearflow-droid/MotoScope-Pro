const fs = require('fs');

async function main() {
  const content = fs.readFileSync('./src/data/componentsDB.ts', 'utf8');
  // I can just compile it to JS on the fly or just use regex to extract id, name, setting, instructions, expectedValues
}
main();
