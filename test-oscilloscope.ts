import { componentsDB } from "./src/data/componentsDB";
const bad = componentsDB.filter(c => !c.oscilloscopeSetup || typeof c.oscilloscopeSetup !== 'object');
console.log("Missing oscilloscopeSetup:", bad.length);
