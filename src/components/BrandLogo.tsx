import React from 'react';

interface BrandLogoProps {
  brand: string;
  className?: string;
}

export function BrandLogo({ brand, className = "" }: BrandLogoProps) {
  if (brand === "Honda") {
    return (
      <div className={`flex flex-col items-center justify-center bg-[#CC0000] rounded-lg w-full h-full ${className}`}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg" 
          alt="Honda Logo" 
          className="w-3/5 h-3/5 object-contain brightness-0 invert mb-[1px]"
          referrerPolicy="no-referrer"
        />
        <span className="text-white font-black text-[7px] tracking-widest leading-none">HONDA</span>
      </div>
    );
  }
  
  if (brand === "Yamaha") {
    return (
      <div className={`flex flex-col items-center justify-center bg-[#0033A0] rounded-lg w-full h-full ${className}`}>
        <span className="text-white font-black text-[10px] tracking-tighter leading-none mt-1">YAMAHA</span>
        <span className="text-white font-bold text-[5px] tracking-[0.2em] mt-0.5">RACING</span>
      </div>
    );
  }

  if (brand === "Shineray") {
    return (
      <div className={`flex flex-col items-center justify-center bg-[#050505] rounded-lg w-full h-full border border-gray-300 dark:border-gray-600 ${className}`}>
        <span className="text-white font-black text-[9px] tracking-wider leading-none">SHINERAY</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 font-bold rounded-lg w-full h-full ${className}`}>
      {brand.slice(0, 3).toUpperCase()}
    </div>
  );
}
