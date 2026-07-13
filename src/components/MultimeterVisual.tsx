import React from 'react';
import { motion } from 'framer-motion';

type Setting = "OHM_200" | "OHM_2000" | "OHM_20K" | "DCV_20" | "DCV_2000m" | "ACV_200" | "off" | string;

interface MultimeterVisualProps {
  setting: Setting;
  displayValue?: number | string;
}

export function MultimeterVisual({ setting, displayValue }: MultimeterVisualProps) {
  
  const labels = [
    { id: 'off', label: 'OFF', color: 'text-white font-bold', angle: 0 },
    { id: 'ACV_750', label: '750', color: 'text-white', angle: 18 },
    { id: 'ACV_200', label: '200', color: 'text-white', angle: 36 },
    { id: 'DCA_200u', label: '200µ', color: 'text-white', angle: 54 },
    { id: 'DCA_2000u', label: '2000µ', color: 'text-white', angle: 72 },
    { id: 'DCA_20m', label: '20m', color: 'text-white', angle: 90 },
    { id: 'DCA_200m', label: '200m', color: 'text-white', angle: 108 },
    { id: 'DCA_10A', label: '10A', color: 'text-red-500 font-bold', angle: 126 },
    { id: 'hFE', label: 'hFE', color: 'text-blue-400', angle: 144 },
    { id: 'Continuity', label: '►|', color: 'text-white', angle: 162 },
    { id: 'OHM_200', label: '200', color: 'text-emerald-400', angle: 180 },
    { id: 'OHM_2000', label: '2000', color: 'text-emerald-400', angle: 198 },
    { id: 'OHM_20K', label: '20k', color: 'text-emerald-400', angle: 216 },
    { id: 'OHM_200K', label: '200k', color: 'text-emerald-400', angle: 234 },
    { id: 'OHM_2000K', label: '2000k', color: 'text-emerald-400', angle: 252 },
    { id: 'DCV_200m', label: '200m', color: 'text-white', angle: 270 },
    { id: 'DCV_2000m', label: '2000m', color: 'text-white', angle: 288 },
    { id: 'DCV_20', label: '20', color: 'text-white', angle: 306 },
    { id: 'DCV_200', label: '200', color: 'text-white', angle: 324 },
    { id: 'DCV_1000', label: '1000', color: 'text-white', angle: 342 }
  ];

  const getAngle = () => {
    let found = labels.find(l => l.id === setting);
    if (found) return found.angle;
    
    if (setting === 'DCV_2000m' || setting === '2v_dc') return 288;
    if (setting === 'DCV_20' || setting === '20v_dc') return 306;
    if (setting === 'ACV_200') return 36;
    if (setting === 'OHM_200' || setting === '200_ohms') return 180;
    if (setting === 'OHM_2000' || setting === '2000_ohms') return 198;
    if (setting === 'OHM_20K' || setting === '20k_ohms') return 216;
    return 0;
  };

  const getSettingText = () => {
    switch (setting) {
      case 'OHM_200': return "200 Ω (Resistência)";
      case 'OHM_2000': return "2000 Ω (Resistência)";
      case 'OHM_20K': return "20k Ω (Resistência)";
      case 'DCV_20': return "20V DC (Tensão Contínua)";
      case 'DCV_2000m': return "2000m / 2V DC (Tensão)";
      case 'ACV_200': return "200V AC (Tensão Alternada)";
      case 'off': return "Desligado";
      default: 
        if (setting === '200_ohms') return "200 Ω (Resistência)";
        if (setting === '2000_ohms') return "2000 Ω (Resistência)";
        if (setting === '20k_ohms') return "20k Ω (Resistência)";
        if (setting === '20v_dc') return "20V DC (Tensão)";
        if (setting === '2v_dc') return "2000m / 2V DC";
        return setting;
    }
  };

  const isOhm = setting.includes('OHM') || setting.includes('ohms');

  const groups = [
    { label: 'ACV', angle: 27, radius: 106, color: 'text-white' }, 
    { label: 'DCA', angle: 81, radius: 106, color: 'text-white' }, 
    { label: 'Ω', angle: 216, radius: 106, color: 'text-emerald-400' }, 
    { label: 'DCV', angle: 306, radius: 106, color: 'text-white' }
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-300 dark:border-[#3D5280]/80 my-4 shadow-sm w-full max-w-sm mx-auto">
      <div className="mb-4 text-center">
        <h4 className="text-gray-600 dark:text-gray-400 font-medium text-xs mb-1 uppercase tracking-wider">Ajuste do Multímetro</h4>
        <p className="text-blue-600 font-bold text-base">
          {getSettingText()}
        </p>
      </div>
      
      {/* Multimeter Body */}
      <div className="relative w-[280px] h-[480px] bg-[#1a1a1a] rounded-xl border-[4px] border-[#0a0a0a] shadow-2xl flex flex-col p-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-xl"></div>
        
        {/* Screen Area */}
        <div className="w-full flex flex-col items-center mb-4 mt-2">
          <div className="w-[85%] h-[65px] bg-[#8a9e92] rounded flex items-center justify-end px-4 shadow-[inset_0_3px_8px_rgba(0,0,0,0.5)] border-[2px] border-[#111] relative">
            <span className="absolute top-1 left-2 text-[10px] text-gray-800 dark:text-gray-200 font-bold">HV</span>
            <span className="font-mono text-[42px] text-black/90 font-bold tracking-widest leading-none drop-shadow-sm translate-y-1">
              {displayValue !== undefined ? displayValue : (isOhm ? "1 .  " : "0.00")}
            </span>
          </div>
        </div>
        
        {/* Dial Area */}
        <div className="w-full flex justify-center mb-2">
          <div className="relative w-[220px] h-[220px] rounded-full flex items-center justify-center">
            
            {/* Labels and Detents */}
            {labels.map((item) => {
              const theta = (item.angle - 90) * (Math.PI / 180);
              const rLabel = 85; 
              const rDetent = 65; 
              const cx = 110;
              const cy = 110;
              
              const xLabel = cx + rLabel * Math.cos(theta);
              const yLabel = cy + rLabel * Math.sin(theta);
              
              const xDetent = cx + rDetent * Math.cos(theta);
              const yDetent = cy + rDetent * Math.sin(theta);
              
              return (
                <React.Fragment key={item.id}>
                  {/* Detent Dot */}
                  <div 
                    className="absolute w-[3px] h-[3px] bg-white dark:bg-gray-900 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-70"
                    style={{ left: `${xDetent}px`, top: `${yDetent}px` }}
                  />
                  {/* Label */}
                  <div 
                    className={`absolute text-[11px] font-bold ${item.color} transform -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap`}
                    style={{ left: `${xLabel}px`, top: `${yLabel}px` }}
                  >
                    {item.label}
                  </div>
                </React.Fragment>
              );
            })}

            {/* Group Labels */}
            {groups.map((g, i) => {
              const theta = (g.angle - 90) * (Math.PI / 180);
              const x = 110 + g.radius * Math.cos(theta);
              const y = 110 + g.radius * Math.sin(theta);
              return (
                <div 
                  key={`group-${i}`}
                  className={`absolute text-[13px] font-black ${g.color} transform -translate-x-1/2 -translate-y-1/2 tracking-wider`}
                  style={{ left: `${x}px`, top: `${y}px` }}
                >
                  {g.label}
                </div>
              );
            })}

            {/* Knob */}
            <motion.div 
              className="w-[110px] h-[110px] rounded-full relative flex items-center justify-center z-10"
              initial={{ rotate: 0 }}
              animate={{ rotate: getAngle() }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
            >
              {/* Dial Base */}
              <div className="absolute inset-0 bg-[#1c1c1c] rounded-full border-[2px] border-[#0a0a0a] shadow-[0_5px_15px_rgba(0,0,0,0.9)]"></div>
              
              {/* Pointer handle */}
              <div className="absolute w-[20px] h-[100px] bg-[#222] rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.8)] border border-[#111] flex justify-center">
                 <div className="w-[3px] h-[12px] bg-white dark:bg-gray-900 mt-1.5 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
              </div>
              
              {/* Center Cap */}
              <div className="absolute w-[44px] h-[44px] bg-[#1a1a1a] rounded-full border border-[#111] shadow-inner"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Section: hFE & Ports */}
        <div className="w-full flex-1 relative mt-2">
          
          {/* hFE Socket (Bottom Left) */}
          <div className="absolute left-1 bottom-6 w-[60px] h-[60px] bg-[#0047AB] rounded-full border-[3px] border-[#111] shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center p-1">
             <div className="text-[7px] text-white font-bold leading-none mb-1 mt-1">NPN PNP</div>
             <div className="grid grid-cols-4 gap-[2px] w-[80%] h-[40%] px-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-black rounded-full w-full h-full shadow-inner"></div>
                ))}
             </div>
             <div className="text-[7px] text-white font-bold leading-none mt-1">E B C E</div>
          </div>
          <div className="absolute left-6 bottom-2 text-[10px] font-bold text-white">hFE</div>

          {/* DT-830B Logo (Bottom Leftish) */}
          <div className="absolute left-[72px] bottom-5 flex flex-col">
            <span className="text-[14px] font-black text-white tracking-widest leading-none">DT-830B</span>
            <span className="text-[7px] text-white font-bold tracking-widest mt-1">DIGITAL</span>
            <span className="text-[7px] text-white font-bold tracking-widest">MULTIMETER</span>
          </div>
          
          {/* Ports (Bottom Right) */}
          <div className="absolute right-0 bottom-0 flex flex-col items-end justify-end space-y-3 pb-2 pr-1">
            
            {/* 10ADC Port */}
            <div className="flex items-center gap-2">
              <div className="text-right flex flex-col">
                <span className="text-[10px] font-bold text-white leading-none mb-[2px]">10ADC</span>
                <span className="text-[6px] text-white leading-none">10Amax</span>
                <span className="text-[6px] text-white leading-none">UNFUSED</span>
              </div>
              <div className="w-[22px] h-[22px] rounded-full bg-[#cc0000] border-[2px] border-[#333] flex items-center justify-center shadow-inner relative">
                 <div className="w-[10px] h-[10px] bg-black rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"></div>
              </div>
            </div>
            
            {/* VΩmA Port */}
            <div className="flex items-center gap-2">
              <div className="text-right flex flex-col">
                <span className="text-[10px] font-bold text-red-500 leading-none mb-[2px]">VΩmA</span>
                <span className="text-[6px] text-white leading-none">750VAC</span>
                <span className="text-[6px] text-white leading-none">1000VDC</span>
                <span className="text-[6px] text-white leading-none">200mAmax</span>
              </div>
              <div className="w-[22px] h-[22px] rounded-full bg-[#cc0000] border-[2px] border-[#333] flex items-center justify-center shadow-inner relative">
                 <div className="w-[10px] h-[10px] bg-black rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"></div>
              </div>
            </div>
            
            {/* COM Port */}
            <div className="flex items-center gap-2">
              <div className="text-right flex flex-col">
                <span className="text-[10px] font-bold text-white leading-none mb-[2px]">COM</span>
                <span className="text-[6px] text-white leading-none">500V max</span>
                <span className="text-[6px] text-white leading-none">⏚</span>
              </div>
              <div className="w-[22px] h-[22px] rounded-full bg-[#222] border-[2px] border-[#111] flex items-center justify-center shadow-inner">
                 <div className="w-[10px] h-[10px] bg-black rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}


