const fs = require('fs');
let code = fs.readFileSync('dist/assets/index-CQ5PqHT7.js', 'utf-8');

// The array starts at `const Jv=[{id:"group-`
// It ends somewhere. Since JS is tricky, let's extract it by finding `const Jv=[{id:"group-`
// and then balancing brackets, or better, we can replace `const Jv=` with `global.componentsDB = `
// and evaluate a substring.

let startIdx = code.indexOf('const Jv=[{id:"group-');
if (startIdx === -1) throw new Error("Not found");

let endIdx = -1;
let brackets = 0;
for (let i = startIdx + "const Jv=".length; i < code.length; i++) {
  if (code[i] === '[') brackets++;
  else if (code[i] === ']') {
    brackets--;
    if (brackets === 0) {
      endIdx = i + 1;
      break;
    }
  }
}

if (endIdx !== -1) {
  let arrayStr = code.substring(startIdx + "const Jv=".length, endIdx);
  // It might contain some React elements or missing variables? No, componentsDB is pure data.
  // Wait, does it have `waveType: "tps"` etc? Yes.
  // Let's eval it.
  try {
    let fn = new Function("return " + arrayStr);
    let db = fn();
    fs.writeFileSync('src/data/componentsDB.ts', 'export const componentsDB = ' + JSON.stringify(db, null, 2) + ';\n');
    console.log("Recovered " + db.length + " components!");
  } catch (e) {
    console.log("Eval failed:", e);
  }
}

