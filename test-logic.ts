import { componentsDB } from './src/data/componentsDB';

const expectedAudios = componentsDB.flatMap(c => 
  c.waveformPhases ? c.waveformPhases.map(p => `${c.id}-phase-${p.id}`) : []
);
console.log(expectedAudios.length, expectedAudios);
