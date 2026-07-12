const fs = require('fs');
const files = [
  'src/components/ComponentDetail.tsx',
  'src/components/Dashboard.tsx',
  'src/components/MultimeterDetail.tsx',
  'src/components/DiagnosticParametersView.tsx',
  'src/components/DiagnosticWorksheetView.tsx',
  'src/components/PinoutsView.tsx',
  'src/components/OscilloscopeCourseView.tsx',
  'src/components/RealSignalsList.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  if (!content.includes('useBackButton')) {
    content = content.replace('import React', 'import { useBackButton } from "../hooks/useBackButton";\nimport React');
    // If it doesn't have import React, just add it at top
    if (!content.includes('import { useBackButton }')) {
      content = 'import { useBackButton } from "../hooks/useBackButton";\n' + content;
    }
    
    // Find the component declaration and inject useBackButton
    // This is tricky for different files, so let's do it specifically.
  }
}
