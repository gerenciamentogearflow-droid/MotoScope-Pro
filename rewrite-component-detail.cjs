const fs = require('fs');

let content = fs.readFileSync('src/components/ComponentDetail.tsx', 'utf-8');

// 1. Add import
if (!content.includes('WhatsAppAudioPlayer')) {
  content = content.replace(
    'import { OscilloscopeDisplay } from "./OscilloscopeDisplay";',
    'import { OscilloscopeDisplay } from "./OscilloscopeDisplay";\nimport { WhatsAppAudioPlayer } from "./WhatsAppAudioPlayer";'
  );
}

// 2. Remove states
content = content.replace(/const \[showExplanation, setShowExplanation\] = useState\(false\);\n/, '');
content = content.replace(/const \[isPlayingAudio, setIsPlayingAudio\] = useState\(false\);\n/, '');

// 3. Fix useBackButton
content = content.replace(
  /useBackButton\(!showExplanation, onBack\);\n  useBackButton\(showExplanation, \(\) => {\n    globalAudioPlayer\.stop\(\);\n    setIsPlayingAudio\(false\);\n    setShowExplanation\(false\);\n  }\);/g,
  'useBackButton(true, onBack);'
);

// 4. Replace button with audio player
const buttonRegex = /\{component\.detailedTeacherExplanation && \(\s*<button\s*onClick=\{\(\) => setShowExplanation\(true\)\}\s*className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-md rounded-2xl p-4 flex items-center justify-center gap-3 transition-all"\s*>\s*<GraduationCap className="w-6 h-6" \/>\s*<span className="font-semibold text-lg">Explicação Detalhada \(Aulão\)<\/span>\s*<\/button>\s*\)\}/g;

const audioPlayerReplacement = `{component.detailedTeacherExplanation && (
                <div className="mt-4 mb-4">
                  <WhatsAppAudioPlayer audioId={\`\${component.id}-explanation\`} textToSpeak={component.detailedTeacherExplanation} />
                </div>
              )}`;

content = content.replace(buttonRegex, audioPlayerReplacement);

// 5. Remove the modal
const modalStart = '<AnimatePresence>\n          {showExplanation && (';
const modalRegex = /<AnimatePresence>\s*\{showExplanation && \(\s*<motion\.div[\s\S]*?<\/AnimatePresence>/g;

content = content.replace(modalRegex, '');

fs.writeFileSync('src/components/ComponentDetail.tsx', content);

console.log("Rewrite completed");
