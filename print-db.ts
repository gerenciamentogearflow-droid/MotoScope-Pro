import { componentsDB } from './src/data/componentsDB';

function extract(comps) {
  for (const c of comps) {
    if (c.multimeter) {
       console.log(`ID: ${c.id}`);
       console.log(`Name: ${c.name}`);
       console.log(`Setting: ${c.multimeter.setting}`);
       console.log(`Instr: ${c.multimeter.instructions}`);
       console.log(`Expected: ${c.multimeter.expectedValues}`);
       console.log('---');
    }
    if (c.variants) {
       extract(c.variants);
    }
  }
}

extract(componentsDB);
