const fs = require('fs');
let code = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf8');

const regex = /<\/div>\s*<\/div>\s*\);\s*\}/;
console.log(code.match(regex));
