const fs = require('fs');

let content = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf8');

// Replace ignition wave
content = content.replace(
  /case "ignition":\s*\/\/[^\n]*\n\s*return "[^"]*";/,
  `case "ignition":
        // Ignition Coil: Dwell -> Spark Spike -> Burn Line (noisy) -> Extinguish -> Ringing
        return "M 0 60 L 15 60 L 15.5 80 L 45 80 L 45.5 -20 L 46 45 L 48 46 L 50 44 L 53 46 L 56 44 L 58 46 L 58.5 25 L 59.5 75 L 61 40 L 62.5 70 L 64 50 L 65.5 65 L 67 55 L 68.5 60 L 100 60";`
);

// Replace ignition-timing generator
content = content.replace(
  /const generateIgnPulseAt = \([\s\S]*?\};\s*const ignPath = `[^`]*`;/,
  `const generateIgnPulseAt = (baseX: number) => {
        const startX = baseX + 25;
        const dwellX = baseX + 25.5;
        const sparkEndX = baseX + 42;
        const sparkPeakX = baseX + 42.5;
        const sparkStartLineX = baseX + 43;
        const extinguishX = baseX + 48;
        const endX = baseX + 58;
        return \`L \${startX} 60 L \${dwellX} 80 L \${sparkEndX} 80 L \${sparkPeakX} -20 L \${sparkStartLineX} 45 L \${extinguishX} 46 L \${extinguishX+0.5} 25 L \${extinguishX+1.5} 75 L \${extinguishX+3} 40 L \${extinguishX+4.5} 70 L \${extinguishX+6} 50 L \${extinguishX+7.5} 65 L \${extinguishX+9} 55 L \${extinguishX+10} 60 L \${endX} 60\`;
      };

      const ignPath = \`M 0 60 \${generateIgnPulseAt(0)} L 100 60 \${generateIgnPulseAt(100)} L 200 60\`;`
);

fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', content, 'utf8');
console.log('Fixed OscilloscopeDisplay');
