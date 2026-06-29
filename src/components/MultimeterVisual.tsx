import React from 'react';
import { motion } from 'framer-motion';

type Setting = "OHM_200" | "OHM_2000" | "OHM_20K" | "DCV_20" | "DCV_2000m" | "ACV_200" | "off" | string;

interface MultimeterVisualProps {
  setting: Setting;
}

export function MultimeterVisual({ setting }: MultimeterVisualProps) {
  const getAngle = () => {
    switch (setting) {
      case 'off': return 0;
      case 'DCV_2000m': return 35;
      case 'DCV_20': return 60;
      case 'ACV_200': return 120;
      case 'OHM_200': return -130;
      case 'OHM_2000': return -90;
      case 'OHM_20K': return -50;
      default: return 0;
    }
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
      default: return setting;
    }
  };

  const isOhm = setting.includes('OHM') || setting.includes('ohms');

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-gray-300/80 my-4 shadow-sm">
      <div className="mb-4 text-center">
        <h4 className="text-gray-600 font-medium text-xs mb-1 uppercase tracking-wider">Ajuste do Multímetro</h4>
        <p className="text-blue-600 font-bold text-base">
          {getSettingText()}
        </p>
      </div>
      
      {/* Multimeter Body */}
      <div className="relative w-52 h-[340px] bg-[#2a2a2a] rounded-xl border-[6px] border-[#1e1e1e] shadow-2xl flex flex-col items-center p-4">
        
        {/* Screen */}
        <div className="w-full h-16 bg-[#8FA49A] rounded mb-5 flex items-center justify-end px-3 shadow-inner border border-gray-900/10">
          <span className="font-mono text-3xl text-gray-900/90 font-bold tracking-widest drop-shadow-sm">
            {isOhm ? "1 .  " : "0.00"}
          </span>
        </div>
        
        {/* Dial Area */}
        <div className="relative w-36 h-36 bg-[#222] rounded-full flex items-center justify-center shadow-inner border-[3px] border-[#111]">
          
          {/* Labels around the dial - positioned with absolute layout based on angles */}
          {/* Top (OFF) */}
          <span className="absolute -top-3 text-[10px] font-black text-red-500">OFF</span>
          
          {/* Right side (Voltage DC) */}
          <span className="absolute top-2 right-2 text-[9px] font-bold text-white">2000m</span>
          <span className="absolute top-9 -right-3 text-[10px] font-bold text-white">20</span>
          <span className="absolute top-14 -right-5 text-[10px] font-bold text-white">200</span>
          <span className="absolute bottom-6 -right-6 text-[10px] font-bold text-white">1000</span>
          <span className="absolute top-4 -right-7 text-[12px] font-black text-white">V⎓</span>
          
          {/* Left side (Resistance) */}
          <span className="absolute top-1 left-2 text-[10px] font-bold text-white">200k</span>
          <span className="absolute top-7 -left-3 text-[10px] font-bold text-white">20k</span>
          <span className="absolute top-16 -left-5 text-[10px] font-bold text-white">2000</span>
          <span className="absolute bottom-4 -left-3 text-[10px] font-bold text-white">200</span>
          <span className="absolute top-10 -left-8 text-[12px] font-black text-white">Ω</span>
          
          {/* Knob */}
          <motion.div 
            className="w-[84px] h-[84px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.5)] relative flex items-center justify-center border-2 border-gray-800"
            initial={{ rotate: 0 }}
            animate={{ rotate: getAngle() }}
            transition={{ type: "spring", stiffness: 50, damping: 12 }}
          >
            {/* Pointer notch/triangle */}
            <div className="absolute top-0 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[14px] border-l-transparent border-r-transparent border-b-white -mt-1 drop-shadow-md"></div>
            {/* Knob grip detail */}
            <div className="w-[50px] h-[50px] bg-[#1a1a1a] rounded-full border border-[#0a0a0a] shadow-inner flex items-center justify-center">
               <div className="w-8 h-8 bg-[#222] rounded-full border border-gray-300"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Ports */}
        <div className="absolute bottom-4 w-full flex justify-around px-2">
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-bold text-gray-600 mb-1">10A</span>
            <div className="w-8 h-8 rounded-full bg-gray-50 border-2 border-gray-300 flex items-center justify-center shadow-inner">
              <div className="w-4 h-4 rounded-full bg-black shadow-inner"></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-bold text-gray-600 mb-1">COM</span>
            <div className="w-8 h-8 rounded-full bg-gray-50 border-2 border-gray-300 flex items-center justify-center shadow-inner">
              <div className="w-4 h-4 rounded-full bg-black shadow-inner"></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-bold text-red-500 mb-1">VΩmA</span>
            <div className="w-8 h-8 rounded-full bg-gray-50 border-2 border-red-900/40 flex items-center justify-center shadow-inner">
              <div className="w-4 h-4 rounded-full bg-red-600/90 shadow-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
