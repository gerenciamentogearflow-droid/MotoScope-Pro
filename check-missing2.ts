import { componentsDB } from './src/data/componentsDB';

function check() {
  const missing = [];
  const checkComp = (c) => {
    if (c.multimeter && !c.multimeter.teacherExplanation) {
      missing.push(c.id);
    }
    if (c.variants) {
      c.variants.forEach(checkComp);
    }
  };
  componentsDB.forEach(checkComp);
  console.log("Missing teacherExplanation:", missing);
}
check();
