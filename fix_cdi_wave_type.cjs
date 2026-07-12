const fs = require('fs');
let dbCode = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');
const arrayStr = dbCode.replace('export const componentsDB = ', '').replace(/;\n$/, '');
const db = JSON.parse(arrayStr);

const idx = db.findIndex(c => c.id === 'ignition-coil-secondary-cdi');
if (idx !== -1) {
  db[idx].waveType = 'ignition-secondary-cdi';
  console.log("Updated waveType to ignition-secondary-cdi");
}

fs.writeFileSync('src/data/componentsDB.ts', 'export const componentsDB = ' + JSON.stringify(db, null, 2) + ';\n');
