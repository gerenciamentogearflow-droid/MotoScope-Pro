const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const regexImage = /if \(errorStr\.includes\("503"\) \|\| errorStr\.includes\("high demand"\) \|\| errorStr\.includes\("UNAVAILABLE"\)\) \{/g;
const replacementImage = `if (errorStr.includes("503") || errorStr.includes("high demand") || errorStr.includes("UNAVAILABLE") || errorStr.includes("429") || errorStr.includes("Too Many Requests") || errorStr.includes("quota") || errorStr.includes("RESOURCE_EXHAUSTED")) {`;

code = code.replace(regexImage, replacementImage);
fs.writeFileSync('server.ts', code);
console.log("Replaced successfully!");
