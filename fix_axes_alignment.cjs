const fs = require('fs');
let code = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf8');

const regex = /\{\/\* Axes Indicators \*\/\}[\s\S]*?\{\/\* HTML Overlay for Channel Indicators \*\/\}/;

const newBlock = `{/* Axes Indicators */}
          <div className="absolute bottom-4 left-4 flex flex-col items-start pointer-events-none z-30 opacity-75">
             {/* Y Axis */}
             <div className="flex flex-col items-center" style={{ marginLeft: '9px' }}>
                <div className="text-[12px] font-bold text-[#00FF00] leading-none mb-0.5">Y</div>
                <ArrowUp className="w-3 h-3 text-[#00FF00] -mb-1" />
                <div className="w-[1.5px] h-10 bg-[#00FF00]"></div>
             </div>
             {/* Origin and X/T Axis */}
             <div className="flex items-center" style={{ marginTop: '-1.5px', marginLeft: '7px' }}>
                <div className="w-[5.5px] h-[5.5px] rounded-full bg-[#00FF00]"></div>
                <div className="w-10 h-[1.5px] bg-[#00FF00] -ml-1"></div>
                <ArrowRight className="w-3 h-3 text-[#00FF00] -ml-1" />
                <div className="text-[12px] font-bold text-[#00FF00] leading-none ml-1">T</div>
             </div>
          </div>
          
          {/* HTML Overlay for Channel Indicators */}`;

if (regex.test(code)) {
  code = code.replace(regex, newBlock);
  fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', code);
  console.log("Updated axes alignment successfully!");
} else {
  console.log("Could not find block");
}
