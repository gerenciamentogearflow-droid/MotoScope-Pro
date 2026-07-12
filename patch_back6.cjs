const fs = require('fs');

function fixMultiLineProps(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace('  useBackButton(true, onBack);\n', '');
  
  // Find the end of the argument list where the actual block starts.
  // We can just use a regex.
  const regex = /(: [A-Za-z]+Props\)\s*\{)/;
  content = content.replace(regex, `$1\n  useBackButton(true, onBack);\n`);

  fs.writeFileSync(filePath, content);
}

fixMultiLineProps('src/components/DiagnosticParametersView.tsx');
fixMultiLineProps('src/components/RealSignalsList.tsx');
