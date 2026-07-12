const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

code = code.replace(/config:\s*\{\s*,/g, 'config: {');
code = code.replace(/,\s*,/g, ',');

fs.writeFileSync('server.ts', code);
