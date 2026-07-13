import { componentsDB } from "./src/data/componentsDB";
const bad = componentsDB.filter(c => !c.waveType || typeof c.waveType !== 'string');
console.log("Missing waveType:", bad.length);
