const fs = require('fs');

function cleanAndFix(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find the exact line: export function Name(props) {
  // and inject after it
  const lines = content.split('\n');
  const outLines = [];
  
  let injected = false;
  for (let i=0; i<lines.length; i++) {
    outLines.push(lines[i]);
    if (lines[i].startsWith('export function ') && lines[i].includes('{') && !injected) {
       outLines.push('  useBackButton(true, onBack);');
       injected = true;
    }
  }
  
  fs.writeFileSync(filePath, outLines.join('\n'));
}

const files = [
  'src/components/ComponentDetail.tsx',
  'src/components/MultimeterDetail.tsx',
  'src/components/DiagnosticParametersView.tsx',
  'src/components/DiagnosticWorksheetView.tsx',
  'src/components/PinoutsView.tsx',
  'src/components/OscilloscopeCourseView.tsx',
  'src/components/RealSignalsList.tsx'
];

for (const f of files) {
  cleanAndFix(f);
}
