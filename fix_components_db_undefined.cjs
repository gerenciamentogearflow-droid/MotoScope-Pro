const fs = require('fs');
let content = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');

// There must be a trailing comma somewhere causing an undefined element.
// Let's replace any instances of ,, or },\s*} or similar.
const components = require('./dist/server.cjs').componentsDB;
console.log(components.map((c, i) => !c ? i : -1).filter(i => i !== -1));
