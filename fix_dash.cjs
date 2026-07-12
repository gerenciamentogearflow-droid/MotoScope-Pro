const fs = require('fs');

const file = 'src/components/Dashboard.tsx';
let content = fs.readFileSync(file, 'utf-8');

content = content.replace(/  useBackButton.*\n/, '');

// Find the last useState
const lines = content.split('\n');
let lastUseStateIdx = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('useState(') || lines[i].includes('useState<')) {
    lastUseStateIdx = i;
  }
}

lines.splice(lastUseStateIdx + 1, 0, '  useBackButton(activeTab !== "home" && !selectedDidacticGroup && !selectedRealSignalComponent && !selectedMultimeterComponent && !selectedBrandParameters && !selectedBrandWorksheet && !selectedBrandPinouts && !showVariantModal && !showUserSettings && !showCkpDifferences, () => setActiveTab("home"));');

fs.writeFileSync(file, lines.join('\n'));
