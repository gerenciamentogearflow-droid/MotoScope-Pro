const fs = require('fs');

const file = 'src/components/Dashboard.tsx';
let content = fs.readFileSync(file, 'utf-8');

const hookLines = `
  useBackButton(!!showVariantModal, () => setShowVariantModal(null));
  useBackButton(!!showUserSettings, () => setShowUserSettings(false));
  useBackButton(showCkpDifferences, () => setShowCkpDifferences(false));
  useBackButton(!!selectedDidacticGroup, () => setSelectedDidacticGroup(null));
`;

content = content.replace('  useBackButton(activeTab !== "home" && !selectedDidacticGroup && !selectedRealSignalComponent && !selectedMultimeterComponent && !selectedBrandParameters && !selectedBrandWorksheet && !selectedBrandPinouts && !showVariantModal && !showUserSettings && !showCkpDifferences, () => setActiveTab("home"));', '  useBackButton(activeTab !== "home" && !selectedDidacticGroup && !selectedRealSignalComponent && !selectedMultimeterComponent && !selectedBrandParameters && !selectedBrandWorksheet && !selectedBrandPinouts && !showVariantModal && !showUserSettings && !showCkpDifferences, () => setActiveTab("home"));\n' + hookLines);

fs.writeFileSync(file, content);
