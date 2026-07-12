const fs = require('fs');
let dbCode = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');
const arrayStr = dbCode.replace('export const componentsDB = ', '').replace(/;\n$/, '');
const db = JSON.parse(arrayStr);

const tci = db.find(c => c.id === 'ignition-coil');
const cdidc = db.find(c => c.id === 'cdi-dc');
const cdiac = db.find(c => c.id === 'cdi-ac');

console.log("TCI:", tci.waveType);
console.log("CDI-DC:", cdidc.waveType);
console.log("CDI-AC:", cdiac.waveType);
