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
      <div className="min-h-screen bg-transparent text-zinc-100 flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-zinc-400 mb-4">Dados de multímetro indisponíveis para este componente.</p>
          <button onClick={onBack} className="text-cyan-500 font-bold">Voltar</button>
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
    <div className="min-h-screen bg-transparent text-zinc-100 flex flex-col">
      <header className="px-6 pt-12 pb-5 border-b border-white/5">
        <div className="max-w-3xl mx-auto w-full">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-400 hover:text-white font-semibold mb-6 active:scale-95 transition-all text-sm w-fit bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/5"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </button>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-2xl shadow-lg shadow-orange-500/10">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">{component.name}</h1>
              <p className="text-xs text-orange-400/80 font-bold tracking-widest uppercase mt-1">Teste com Multímetro</p>
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
          <div className="flex flex-col gap-6 py-8 px-4 bg-zinc-900/40 border border-white/5 rounded-[2rem] overflow-hidden items-center backdrop-blur-sm shadow-xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
             <MultimeterVisual setting={mm.setting} displayValue={currentDisplayValue} />
             
             {mm.minValue !== undefined && mm.maxValue !== undefined && (
               <div className="flex gap-4 mt-4 w-full max-w-[320px] relative z-10">
                 <button
                   onClick={() => setDisplayType(displayType === "min" ? null : "min")}
                   className={`flex-1 py-3.5 px-5 rounded-2xl font-bold transition-all text-sm flex justify-between items-center border ${displayType === "min" ? "bg-orange-500 text-black border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.4)]" : "bg-black/40 text-zinc-400 border-white/10 hover:bg-white/5"}`}
                 >
                   <span>Mínimo</span>
                   {displayType === "min" && <span className="text-xs opacity-70 font-mono font-bold tracking-wider">{mm.minValue}{mm.unit}</span>}
                 </button>
                 <button
                   onClick={() => setDisplayType(displayType === "max" ? null : "max")}
                   className={`flex-1 py-3.5 px-5 rounded-2xl font-bold transition-all text-sm flex justify-between items-center border ${displayType === "max" ? "bg-orange-500 text-black border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.4)]" : "bg-black/40 text-zinc-400 border-white/10 hover:bg-white/5"}`}
                 >
                   <span>Máximo</span>
                   {displayType === "max" && <span className="text-xs opacity-70 font-mono font-bold tracking-wider">{mm.maxValue}{mm.unit}</span>}
                 </button>
               </div>
             )}
          </div>

          {mm.temperatureObservation && (
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6 flex gap-4">
              <Thermometer className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-200/90 leading-relaxed">
                <strong className="text-blue-400 block mb-1 uppercase tracking-widest text-[11px]">Temperatura / Observação:</strong>
                {mm.temperatureObservation}
              </p>
            </div>
          )}

          {mm.variesByModel && (
            <div className="bg-orange-500/5 border border-orange-500/20 rounded-3xl p-6 flex gap-4">
              <Info className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" />
              <p className="text-sm text-orange-200/90 leading-relaxed">
                <strong className="text-orange-400 block mb-1 uppercase tracking-widest text-[11px]">Nota Importante:</strong>
                Os valores exatos podem variar dependendo do modelo/ano. Consulte o manual de serviço específico para confirmar tolerâncias.
              </p>
            </div>
          )}

          <section className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 md:p-8">
            <h2 className="text-sm font-bold text-cyan-400 mb-5 flex items-center gap-2 uppercase tracking-widest">
              <Activity className="w-4 h-4" />
              Como Testar
            </h2>
            <div className="prose prose-invert max-w-none text-zinc-300">
              <p className="leading-relaxed whitespace-pre-wrap">
                {mm.instructions}
              </p>
            </div>
          </section>

          <section className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 md:p-8">
            <h2 className="text-sm font-bold text-emerald-400 mb-5 flex items-center gap-2 uppercase tracking-widest">
              <Zap className="w-4 h-4" />
              Valores Esperados
            </h2>
            <div className="bg-black/40 border border-white/5 rounded-2xl p-5">
              <p className="text-zinc-200 leading-relaxed whitespace-pre-wrap font-mono text-sm">
                {mm.expectedValues}
              </p>
            </div>
          </section>

        </motion.div>
      </main>
    </div>
  );
}
