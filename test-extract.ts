import { componentsDB } from './src/data/componentsDB';

const extractAudios = (items) => {
  return items.flatMap(c => {
    const audios = c.waveformPhases ? c.waveformPhases.map(p => `${c.id}-phase-${p.id}`) : [];
    if (c.detailedTeacherExplanation) {
      audios.push(`${c.id}-explanation`);
    }
    if (c.variants) {
      audios.push(...extractAudios(c.variants));
    }
    return audios;
  });
};

const expectedAudios = extractAudios(componentsDB);
console.log(expectedAudios.length);
