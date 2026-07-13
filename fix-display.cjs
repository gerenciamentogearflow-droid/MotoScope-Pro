const fs = require('fs');
let code = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf8');

code = code.replace(/const playAudioForPhase = \(phaseId: number\) => \{/g, 'const playAudioForPhase = (phaseId: number, textToSpeak?: string) => {');
code = code.replace(/globalAudioPlayer\.play\(audioId\);/g, 'globalAudioPlayer.play(audioId, textToSpeak);');
code = code.replace(/playAudioForPhase\(phase\.id\);/g, 'playAudioForPhase(phase.id, phase.description);');

fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', code);
