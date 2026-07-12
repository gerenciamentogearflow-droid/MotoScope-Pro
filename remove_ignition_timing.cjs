const fs = require('fs');
let code = fs.readFileSync('src/data/componentsDB.ts', 'utf8');

// The component starts at `  {\n    id: "ignition-timing",` and ends at `    },\n  },\n  {\n    id: "cdi-ac",`
// Let's use string manipulation to remove it.

const startStr = '  {\n    id: "ignition-timing",';
const endStr = '    },\n  },\n  {\n    id: "cdi-ac",';

const startIndex = code.indexOf(startStr);
const endIndex = code.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
  // We want to keep `  {\n    id: "cdi-ac",`
  const textToRemove = code.substring(startIndex, endIndex + 10);
  code = code.replace(textToRemove, '');
  fs.writeFileSync('src/data/componentsDB.ts', code);
  console.log("Removed ignition-timing component successfully!");
} else {
  console.log("Could not find the component to remove");
}
