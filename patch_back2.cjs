const fs = require('fs');

function fix(filePath, searchStr) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove the bad insertion
  content = content.replace('  useBackButton(true, onBack); ', '');
  
  // Now add it correctly
  // Look for `export function ComponentName(....) {`
  const regex = new RegExp(`(export function ${searchStr}\\([^)]+\\)\\s*\\{)`, 'm');
  content = content.replace(regex, `$1\n  useBackButton(true, onBack);\n`);

  fs.writeFileSync(filePath, content);
  console.log('Fixed ' + filePath);
}

fix('src/components/ComponentDetail.tsx', 'ComponentDetail');
fix('src/components/MultimeterDetail.tsx', 'MultimeterDetail');
fix('src/components/DiagnosticParametersView.tsx', 'DiagnosticParametersView');
fix('src/components/DiagnosticWorksheetView.tsx', 'DiagnosticWorksheetView');
fix('src/components/PinoutsView.tsx', 'PinoutsView');
fix('src/components/OscilloscopeCourseView.tsx', 'OscilloscopeCourseView');
fix('src/components/RealSignalsList.tsx', 'RealSignalsList');

