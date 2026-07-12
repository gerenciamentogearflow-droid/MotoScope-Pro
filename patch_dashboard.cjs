const fs = require('fs');

const file = 'src/components/Dashboard.tsx';
let content = fs.readFileSync(file, 'utf-8');

if (!content.includes('import { useBackButton }')) {
  content = content.replace('import React', 'import { useBackButton } from "../hooks/useBackButton";\nimport React');
}

// export function Dashboard(
const regex = /(export function Dashboard\([^)]+\)\s*\{)/;
content = content.replace(regex, `$1\n  useBackButton(activeTab !== "home" && !selectedDidacticGroup && !selectedRealSignalComponent && !selectedMultimeterComponent && !selectedBrandParameters && !selectedBrandWorksheet && !selectedBrandPinouts && !showVariantModal && !showUserSettings && !showCkpDifferences, () => setActiveTab("home"));\n`);

fs.writeFileSync(file, content);
