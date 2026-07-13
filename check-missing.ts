import { componentsDB } from './src/data/componentsDB.ts';
const flattenComps = (items) => {
  return items.flatMap(c => c.variants ? [c, ...flattenComps(c.variants)] : [c]);
};
const allComps = flattenComps(componentsDB);
for (const comp of allComps) {
  if (comp.multimeter && !comp.multimeter.teacherExplanation) {
    console.log(`Missing: ${comp.id}`);
  }
}
