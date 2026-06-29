import React, { useState } from "react";
import { ComponentData } from "../types";
import { ArrowLeft, Zap, Info, Activity, Thermometer } from "lucide-react";
import { motion } from "motion/react";
import { MultimeterVisual } from "./MultimeterVisual";

interface MultimeterDetailProps {
  component: ComponentData;
  onBack: () => void;
}

export function MultimeterDetail({ component, onBack }: MultimeterDetailProps) {
  const [displayType, setDisplayType] = useState<"min" | "max" | null>(null);

  if (!component.multimeter) {
    return (
      <div className="min-h-screen bg-transparent text-gray-900 flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Dados de multímetro indisponíveis para este componente.</p>
          <button onClick={onBack} className="text-red-600 font-bold">Voltar</button>
        </div>
      </div>
    );
  }

  const mm = component.multimeter;
  
  let currentDisplayValue: number | string | undefined = undefined;
  if (displayType === "min" && mm.minValue !== undefined) {
    currentDisplayValue = mm.minValue;
  } else if (displayType === "max" && mm.maxValue !== undefined) {
    currentDisplayValue = mm.maxValue;
  }

  return (
    <div className="min-h-screen bg-transparent text-gray-900 flex flex-col">
      <header className="px-6 pt-12 pb-5 border-b border-gray-200/80">
        <div className="max-w-3xl mx-auto w-full">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold mb-6 active:scale-95 transition-all text-sm w-fit bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-xl border border-gray-200/60 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </button>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-600/10 text-orange-600 border border-orange-600/20 rounded-2xl shadow-lg shadow-orange-500/10">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">{component.name}</h1>
              <p className="text-xs text-orange-600/80 font-bold tracking-widest uppercase mt-1">Teste com Multímetro</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6 pb-12 overflow-y-auto max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Visual Multimeter Component */}
          <div className="flex flex-col gap-6 py-8 px-4 bg-white border border-gray-200/60 shadow-sm rounded-[2rem] overflow-hidden items-center backdrop-blur-sm shadow-xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl" />
             <MultimeterVisual setting={mm.setting as any} />
             
             {mm.minValue !== undefined && mm.maxValue !== undefined && (
               <div className="flex gap-4 mt-4 w-full max-w-[320px] relative z-10">
                 <button
                   onClick={() => setDisplayType(displayType === "min" ? null : "min")}
                   className={`flex-1 py-3.5 px-5 rounded-2xl font-bold transition-all text-sm flex justify-between items-center border ${displayType === "min" ? "bg-orange-500 text-black border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.4)]" : "bg-white text-gray-600 border-black/10 hover:bg-gray-100"}`}
                 >
                   <span>Mínimo</span>
                   {displayType === "min" && <span className="text-xs opacity-70 font-mono font-bold tracking-wider">{mm.minValue}{mm.unit}</span>}
                 </button>
                 <button
                   onClick={() => setDisplayType(displayType === "max" ? null : "max")}
                   className={`flex-1 py-3.5 px-5 rounded-2xl font-bold transition-all text-sm flex justify-between items-center border ${displayType === "max" ? "bg-orange-500 text-black border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.4)]" : "bg-white text-gray-600 border-black/10 hover:bg-gray-100"}`}
                 >
                   <span>Máximo</span>
                   {displayType === "max" && <span className="text-xs opacity-70 font-mono font-bold tracking-wider">{mm.maxValue}{mm.unit}</span>}
                 </button>
               </div>
             )}
          </div>

          {mm.temperatureObservation && (
            <div className="bg-blue-500/5 border border-blue-600/20 rounded-3xl p-6 flex gap-4">
              <Thermometer className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-900/90 leading-relaxed">
                <strong className="text-blue-600 block mb-1 uppercase tracking-widest text-[11px]">Temperatura / Observação:</strong>
                {mm.temperatureObservation}
              </p>
            </div>
          )}

          {mm.variesByModel && (
            <div className="bg-orange-500/5 border border-orange-600/20 rounded-3xl p-6 flex gap-4">
              <Info className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
              <p className="text-sm text-orange-900/90 leading-relaxed">
                <strong className="text-orange-600 block mb-1 uppercase tracking-widest text-[11px]">Nota Importante:</strong>
                Os valores exatos podem variar dependendo do modelo/ano. Consulte o manual de serviço específico para confirmar tolerâncias.
              </p>
            </div>
          )}

          <section className="bg-white border border-gray-200/60 shadow-sm rounded-3xl p-6 md:p-8">
            <h2 className="text-sm font-bold text-red-600 mb-5 flex items-center gap-2 uppercase tracking-widest">
              <Activity className="w-4 h-4" />
              Como Testar
            </h2>
            <div className="prose prose-invert max-w-none text-gray-700">
              <p className="leading-relaxed whitespace-pre-wrap">
                {mm.instructions}
              </p>
            </div>
          </section>

          <section className="bg-white border border-gray-200/60 shadow-sm rounded-3xl p-6 md:p-8">
            <h2 className="text-sm font-bold text-emerald-600 mb-5 flex items-center gap-2 uppercase tracking-widest">
              <Zap className="w-4 h-4" />
              Valores Esperados
            </h2>
            <div className="bg-white border border-gray-200/60 shadow-sm rounded-2xl p-5">
              <p className="text-gray-800 leading-relaxed whitespace-pre-wrap font-mono text-sm">
                {mm.expectedValues}
              </p>
            </div>
          </section>

        </motion.div>
      </main>
    </div>
  );
}
