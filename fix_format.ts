import * as fs from 'fs';
import * as path from 'path';

const file = path.join(process.cwd(), 'src/data/hondaPinouts.ts');
let content = fs.readFileSync(file, 'utf8');

// Replace { pin: 1, color: ["Preto", "Azul"], description: "..." }
// with { pin: "1", color: "Preto/Azul", function: "..." }

// Let's parse the file properly using a regex that handles arrays of strings.

// Replace description: with function:
content = content.replace(/description:/g, 'function:');

// Replace pin: \d+, with pin: "\d+",
content = content.replace(/pin: (\d+),/g, 'pin: "$1",');

// Replace color: \["Preto", "Azul"\] with color: "Preto/Azul"
// Since regex for this is tricky, let's use a replacer function
content = content.replace(/color: (\[.*?\])/g, (match, arrayStr) => {
    try {
        const arr = JSON.parse(arrayStr.replace(/'/g, '"'));
        return `color: "${arr.join('/')}"`;
    } catch(e) {
        return match;
    }
});

fs.writeFileSync(file, content);
console.log("Fixed formatting.");
