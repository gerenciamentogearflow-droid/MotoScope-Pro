const fs = require('fs');
let code = fs.readFileSync('src/data/componentsDB.ts', 'utf8');
code = code.replace('export const componentsDB: ComponentData[] = ', 'module.exports = ');
code = code.replace(/import .*?;\n/g, ''); // remove imports
try {
  eval(code);
  console.log("Parsed successfully!");
} catch (e) {
  console.error("Parse error:", e.message);
  // to get line number:
  const stack = e.stack.split('\n');
  console.error(stack[0], stack[1]);
}
