const fs = require('fs');
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
  let content = fs.readFileSync(f, 'utf-8');
  content = content.replace(/\{\s*useBackButton\(true,\s*onBack\);\s*/, '{ ');
  fs.writeFileSync(f, content);
}
