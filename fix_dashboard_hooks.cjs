const fs = require('fs');

const file = 'src/components/Dashboard.tsx';
let content = fs.readFileSync(file, 'utf-8');

// The line currently has a giant condition for activeTab !== "home"
content = content.replace(/useBackButton\(activeTab !== "home".*?\);/, 'useBackButton(activeTab !== "home", () => setActiveTab("home"));');

fs.writeFileSync(file, content);
