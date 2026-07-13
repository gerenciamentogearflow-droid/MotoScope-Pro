import { componentsDB } from "./src/data/componentsDB";
const bad = componentsDB.filter(c => !c.name || typeof c.name !== 'string');
console.log("Missing name:", bad.length);
