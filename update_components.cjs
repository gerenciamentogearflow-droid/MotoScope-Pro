const fs = require('fs');
let content = fs.readFileSync('src/data/componentsDB.ts', 'utf8');

const idsWithAC = ["ckp-indutivo", "abs-indutivo", "estator", "estator-1f", "estator-2f", "estator-3f"];

let parts = content.split('id: "');
for (let i = 1; i < parts.length; i++) {
    let id = parts[i].substring(0, parts[i].indexOf('"'));
    let coupling = idsWithAC.includes(id) ? "AC" : "DC";
    let axis = "Y/T";
    
    let setupStart = parts[i].indexOf('oscilloscopeSetup: {');
    if (setupStart !== -1) {
        let setupEnd = parts[i].indexOf('},', setupStart);
        let setupContent = parts[i].substring(setupStart, setupEnd + 2);
        
        if (!setupContent.includes('coupling:')) {
            let newSetupContent = setupContent.replace('  },', `    coupling: "${coupling}",\n    axis: "${axis}"\n  },`);
            parts[i] = parts[i].replace(setupContent, newSetupContent);
        }
    }
}

fs.writeFileSync('src/data/componentsDB.ts', parts.join('id: "'));
console.log("Updated componentsDB.ts");
