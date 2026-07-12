const fs = require('fs');

const file = 'src/components/AdminPanel.tsx';
let content = fs.readFileSync(file, 'utf-8');

if (!content.includes('import { useBackButton }')) {
  content = content.replace('import React', 'import { useBackButton } from "../hooks/useBackButton";\nimport React');
}

const regex = /(export function AdminPanel\([^)]+\)\s*\{)/;
content = content.replace(regex, `$1\n  useBackButton(true, onBack);\n`);

fs.writeFileSync(file, content);
