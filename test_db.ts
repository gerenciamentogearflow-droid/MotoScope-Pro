import { componentsDB } from './src/data/componentsDB';
console.log('Length:', componentsDB.length);
console.log('Has undefined:', componentsDB.some(c => !c));
console.log('Undefined indexes:', componentsDB.map((c, i) => !c ? i : -1).filter(i => i !== -1));
