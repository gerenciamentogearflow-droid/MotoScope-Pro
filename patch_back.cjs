const fs = require('fs');

function addUseBackButton(filePath, searchStr, componentParamsStr) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes('useBackButton(true, onBack)')) return;

  if (!content.includes('import { useBackButton }')) {
    content = content.replace('import React', 'import { useBackButton } from "../hooks/useBackButton";\nimport React');
  }

  // E.g., export function ComponentDetail({ component, onBack }: ComponentDetailProps) {
  // Let's replace the opening brace
  const regex = new RegExp(`(export function ${searchStr}[^\\{]+\\{)`, 'm');
  content = content.replace(regex, `$1\n  useBackButton(true, onBack);\n`);

  fs.writeFileSync(filePath, content);
  console.log('Patched ' + filePath);
}

addUseBackButton('src/components/ComponentDetail.tsx', 'ComponentDetail');
addUseBackButton('src/components/MultimeterDetail.tsx', 'MultimeterDetail');
addUseBackButton('src/components/DiagnosticParametersView.tsx', 'DiagnosticParametersView');
addUseBackButton('src/components/DiagnosticWorksheetView.tsx', 'DiagnosticWorksheetView');
addUseBackButton('src/components/PinoutsView.tsx', 'PinoutsView');
addUseBackButton('src/components/OscilloscopeCourseView.tsx', 'OscilloscopeCourseView');
addUseBackButton('src/components/RealSignalsList.tsx', 'RealSignalsList');

