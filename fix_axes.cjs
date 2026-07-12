const fs = require('fs');
let code = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf8');

const target = `{/* HTML Overlay for Channel Indicators */}`;
const injection = `
          {/* Axes Indicators */}
          <div className="absolute bottom-4 left-4 flex flex-col items-start pointer-events-none z-30 opacity-60">
             {/* Y Axis */}
             <div className="flex flex-col items-center ml-[2px]">
                <div className="text-[10px] font-bold text-[#00FF00] leading-none mb-0.5">Y (Tensão)</div>
                <ArrowUp className="w-3 h-3 text-[#00FF00] -mb-1" />
                <div className="w-[1px] h-8 bg-[#00FF00]"></div>
             </div>
             {/* Origin and X/T Axis */}
             <div className="flex items-center -mt-[1px]">
                <div className="w-1 h-1 rounded-full bg-[#00FF00] ml-[0.5px]"></div>
                <div className="w-8 h-[1px] bg-[#00FF00] -ml-[1px]"></div>
                <ArrowRight className="w-3 h-3 text-[#00FF00] -ml-1" />
                <div className="text-[10px] font-bold text-[#00FF00] leading-none ml-1 mt-[1px]">T (Tempo)</div>
             </div>
          </div>
          
          {/* HTML Overlay for Channel Indicators */}`;

if (code.includes(target)) {
  code = code.replace(target, injection);
  fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', code);
  console.log("Injected axes successfully!");
} else {
  console.log("Could not find target");
}
