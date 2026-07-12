const fs = require('fs');
let code = fs.readFileSync('dist/server.cjs', 'utf-8');

// The exported variables might not be easily accessible if it automatically runs startServer()
// But wait, the file has `var componentsDB = [ ... ];`
// Let's use a regex to extract the JSON-like array.
// Because it's minified or bundled, it might be named differently or have no newlines.

const match = code.match(/var componentsDB = (\[.*?\]);\n/s);
if (match) {
  // Try evaluating just that part
  const fn = new Function('return ' + match[1]);
  const db = fn();
  fs.writeFileSync('src/data/componentsDB.ts', 'export const componentsDB = ' + JSON.stringify(db, null, 2) + ';\n');
  console.log('Recovered!');
} else {
  console.log('Not found with simple match, trying another way.');
  // find the index of "var componentsDB = "
  const idx = code.indexOf("componentsDB = [");
  if (idx !== -1) {
     const start = idx + "componentsDB = ".length;
     // find the end of the array. Let's just find the closing bracket followed by semicolon.
     // we can parse it carefully.
     console.log("Found at", start);
  }
}
