const fs = require('fs');
let code = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf8');

// The file currently has 2 closing divs before the end. We need 3.
const regex = /<\/div>\s*<\/div>\s*\);\s*\}/;
if (regex.test(code)) {
    code = code.replace(regex, '    </div>\n    </div>\n    </div>\n  );\n}');
    fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', code);
    console.log("Added missing closing div");
} else {
    console.log("Could not find the end pattern");
}
