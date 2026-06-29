import * as fs from 'fs';

const filePath = 'src/components/Dashboard.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/text-emerald-400/g, 'text-emerald-600');
content = content.replace(/bg-emerald-500\/10/g, 'bg-emerald-600\/10');
content = content.replace(/border-emerald-500\/20/g, 'border-emerald-600\/20');
content = content.replace(/from-emerald-500\/5/g, 'from-emerald-600\/5');

// also replace text-emerald-100 to text-emerald-700
content = content.replace(/text-emerald-100/g, 'text-emerald-700');

fs.writeFileSync(filePath, content);
console.log('Fixed emerald colors');
