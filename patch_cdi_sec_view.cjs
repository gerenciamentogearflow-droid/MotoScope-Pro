const fs = require('fs');
let content = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf-8');

const regexOldWave = /case "ignition-secondary-cdi":\s*\/\/ [^\n]*\s*return "M 0 80 L 35 80 L 35.5 5 L 36 45 L 48 46 L 50 44 L 53 46 L 56 44 L 58 46 L 58.5 25 L 59.5 90 L 61 70 L 62.5 85 L 64 75 L 65.5 80 L 100 80";/;
const newWave = `case "ignition-secondary-cdi":
        // Ignition Coil Secondary CDI: 0kV -> No Dwell -> Sharp Spark Spike -> Multi-oscillation Burn Line -> Ringing -> 0kV
        return "M 0 80 L 35 80 L 35.2 5 L 35.5 50 L 36 20 L 36.5 75 L 37.5 30 L 39 80 L 41 45 L 43 80 L 46 65 L 49 80 L 100 80";`;

content = content.replace(regexOldWave, newWave);

fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', content);
