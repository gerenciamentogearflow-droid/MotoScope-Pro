const fs = require('fs');
let code = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf8');

// Remove the old axes block
const oldAxesRegex = /\{\/\* Axes Indicators \*\/\}[\s\S]*?\{\/\* HTML Overlay for Channel Indicators \*\/\}/;
code = code.replace(oldAxesRegex, '{/* HTML Overlay for Channel Indicators */}');

// Find the start of the return statement
const returnStartRegex = /return \(\s*<div\s*ref=\{containerRef\}\s*className=\{`(.*?)`\}\s*>/;
const match = code.match(returnStartRegex);

if (match) {
    const originalClasses = match[1];
    // Remove mx-auto and max-w-4xl from inner container since they will be on the outer wrapper
    let newInnerClasses = originalClasses.replace(' mx-auto', '').replace(' max-w-4xl', '').replace(' w-full', ' w-full');
    
    // We want the outer wrapper to have the sizing
    const newWrapper = `return (
    <div className={\`relative \${isFullscreen ? "h-screen w-full" : "max-w-4xl mx-auto pl-6 sm:pl-8 pb-6 sm:pb-8"}\`}>
      {/* Axes Indicators (Outside) */}
      {!isFullscreen && (
        <>
          {/* Y Axis */}
          <div className="absolute left-0 top-0 bottom-8 w-6 sm:w-8 flex flex-col items-center justify-center pointer-events-none opacity-60">
            <div className="text-[10px] sm:text-[12px] font-bold text-gray-700 mb-1">Y</div>
            <ArrowUp className="w-3 h-3 text-gray-700 -mb-1 z-10" />
            <div className="w-[1.5px] h-3/4 bg-gray-400"></div>
          </div>

          {/* T Axis */}
          <div className="absolute bottom-0 left-6 sm:left-8 right-0 h-6 sm:h-8 flex items-center justify-center pointer-events-none opacity-60">
            <div className="w-3/4 h-[1.5px] bg-gray-400"></div>
            <ArrowRight className="w-3 h-3 text-gray-700 -ml-1 z-10" />
            <div className="text-[10px] sm:text-[12px] font-bold text-gray-700 ml-1">T</div>
          </div>
          
          {/* Origin Point */}
          <div className="absolute left-[10px] sm:left-[14px] bottom-[10px] sm:bottom-[14px] w-[5px] h-[5px] rounded-full bg-gray-400 opacity-60 pointer-events-none"></div>
        </>
      )}

      <div 
        ref={containerRef}
        className={\`${newInnerClasses}\`}
      >`;
      
    code = code.replace(returnStartRegex, newWrapper);
    
    // Find the very last closing div of the component and add an extra closing div
    const lastClosingDivRegex = /<\/div>\s*<\/div>\s*\);\s*\}/;
    code = code.replace(lastClosingDivRegex, '    </div>\n    </div>\n  );\n}');

    fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', code);
    console.log("Updated axes successfully!");
} else {
    console.log("Could not find return statement");
}
