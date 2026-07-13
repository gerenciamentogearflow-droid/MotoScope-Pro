const fs = require('fs');
let code = fs.readFileSync('src/data/componentsDB.ts', 'utf8');
code = code.replace('export const componentsDB: ComponentData[] = ', 'module.exports = ');
code = code.replace(/import .*?;\n/g, ''); // remove imports
try {
  const vm = require('vm');
  const script = new vm.Script(code);
  console.log("Parsed successfully!");
} catch (e) {
  console.error("Parse error:", e.message);
  console.error(e.stack.split('\n').slice(0,3).join('\n'));
}
