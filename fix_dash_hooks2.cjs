const fs = require('fs');

const file = 'src/components/Dashboard.tsx';
let content = fs.readFileSync(file, 'utf-8');

content = content.replace(/ && !selectedDidacticGroup/g, '');
content = content.replace(/.*useBackButton\(!!selectedDidacticGroup.*\n/g, '');

fs.writeFileSync(file, content);
