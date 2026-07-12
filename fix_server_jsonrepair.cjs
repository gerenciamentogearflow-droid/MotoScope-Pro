const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const regex = /try \{\n\s*const parsed = JSON\.parse\(cleanedText\);\n\s*res\.json\(\{ translatedSegments: parsed \}\);\n\s*\} catch \(e\) \{/g;
const replacement = `try {
        let parsed;
        try {
          parsed = JSON.parse(cleanedText);
        } catch (parseError) {
          console.warn("JSON parse failed, attempting jsonrepair...", parseError);
          parsed = JSON.parse(jsonrepair(cleanedText));
        }
        res.json({ translatedSegments: parsed });
      } catch (e) {`;

code = code.replace(regex, replacement);

const regexImage = /res\.json\(\{ translatedBlocks: JSON\.parse\(cleanedText\) \}\);/g;
const replacementImage = `        let parsed;
        try {
          parsed = JSON.parse(cleanedText);
        } catch (parseError) {
          console.warn("JSON parse failed, attempting jsonrepair...", parseError);
          parsed = JSON.parse(jsonrepair(cleanedText));
        }
        res.json({ translatedBlocks: parsed });`;

code = code.replace(regexImage, replacementImage);

fs.writeFileSync('server.ts', code);
console.log("Replaced successfully!");
