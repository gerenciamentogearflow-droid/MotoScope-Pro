const fs = require('fs');

let dbCode = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');
const arrayStr = dbCode.replace('export const componentsDB = ', '').replace(/;\n$/, '');
const db = JSON.parse(arrayStr);

const cleanedDb = db.filter(c => c !== null && c !== undefined);

fs.writeFileSync('src/data/componentsDB.ts', 'export const componentsDB = ' + JSON.stringify(cleanedDb, null, 2) + ';\n');
console.log("Fixed nulls, removed " + (db.length - cleanedDb.length) + " items");
