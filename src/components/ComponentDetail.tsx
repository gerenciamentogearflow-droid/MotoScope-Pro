import React, { useState } from "react";
import { ComponentData } from "../types";
import { OscilloscopeDisplay } from "./OscilloscopeDisplay";
import {
  ArrowLeft,
  Sliders,
  Info,
  Zap,
  Settings2,
  Activity,
  Cable,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ComponentDetailProps {
  component: ComponentData;
  onBack: () => void;
}

export function ComponentDetail({ component, onBack }: ComponentDetailProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "oscilloscope">(
    "overview",
  );

  return (
    <div className="min-h-screen bg-transparent text-gray-900 flex flex-col">
      <header className="px-6 pt-12 pb-5 border-b border-gray-200/80">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2.5 rounded-xl hover:bg-gray-100 border border-transparent hover:border-gray-200/80 text-gray-600 hover:text-gray-900 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold tracking-tight leading-tight text-gray-900">
                {component.name}
              </h1>
              <span
                className={`inline-block mt-1 text-[11px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border ${component.type === "sensor" ? "bg-red-600/10 text-red-600 border-red-600/20" : "bg-orange-600/10 text-orange-600 border-orange-600/20"}`}
              >
                {component.type === "sensor" ? "Sensor" : "Atuador"}
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex mt-8 bg-white p-1.5 rounded-2xl border border-gray-200/60 shadow-sm">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex-1 flex justify-center items-center gap-2 py-2.5 text-sm font-semibold rounded-xl transition-all ${activeTab === "overview" ? "bg-gray-200 text-gray-900 shadow-md shadow-black/50" : "text-gray-600 hover:text-gray-700 hover:bg-gray-100"}`}
            >
              <Info className="w-4 h-4" /> Funcionamento
            </button>
            <button
              onClick={() => setActiveTab("oscilloscope")}
              className={`flex-1 flex justify-center items-center gap-2 py-2.5 text-sm font-semibold rounded-xl transition-all ${activeTab === "oscilloscope" ? "bg-red-600/10 text-red-600 shadow-md shadow-black/50 border border-red-600/20" : "text-gray-600 hover:text-gray-700 hover:bg-gray-100"}`}
            >
              <Activity className="w-4 h-4" /> Osciloscópio
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full w-full">
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="p-5 space-y-6 pb-12"
            >
              <section className="bg-white border border-gray-200/60 shadow-sm rounded-3xl p-6 md:p-8">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-4 uppercase tracking-widest">
                  <Info className="w-4 h-4" /> Descrição Técnica
                </h3>
                <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
                  {component.fullDescription}
                </p>
              </section>

              {component.connectionInstructions && (
                <section className="bg-red-600/5 border border-red-600/20 rounded-3xl p-6 md:p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <Cable className="w-32 h-32 text-red-600" />
                  </div>
                  <h3 className="flex items-center gap-2 text-base font-bold text-red-600 mb-4">
                    <Cable className="w-5 h-5" /> Conexão do Osciloscópio
                  </h3>
                  <p className="text-red-600/80 text-base leading-relaxed whitespace-pre-wrap relative z-10">
                    {component.connectionInstructions}
                  </p>
                </section>
              )}
            </motion.div>
          )}

          {activeTab === "oscilloscope" && (
            <motion.div
              key="oscilloscope"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="p-5 space-y-8 pb-12"
            >
              <OscilloscopeDisplay component={component} />

              <section className="bg-white border border-gray-200/60 shadow-sm rounded-3xl overflow-hidden backdrop-blur-sm">
                <div className="bg-white px-6 py-4 flex items-center gap-3 border-b border-gray-200/80">
                  <Settings2 className="w-5 h-5 text-red-600" />
                  <h3 className="font-semibold text-gray-900">
                    Setup de Captura Base
                  </h3>
                </div>
                <div className="p-6 grid grid-cols-2 gap-y-8 gap-x-6">
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-600 mb-1.5 font-semibold">
                      Tempo / Div
                    </span>
                    <span className="font-mono text-lg font-bold text-gray-900 tracking-tight">
                      {component.oscilloscopeSetup.timeDiv}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-600 mb-1.5 font-semibold">
                      Tensão / Div
                    </span>
                    <span className="font-mono text-lg font-bold text-gray-900 tracking-tight">
                      {component.oscilloscopeSetup.voltageDiv}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-600 mb-1.5 font-semibold">
                      Trigger
                    </span>
                    <span className="font-mono text-lg font-bold text-gray-900 tracking-tight">
                      {component.oscilloscopeSetup.triggerEdge}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-600 mb-1.5 font-semibold">
                      Modo / Nível
                    </span>
                    <span className="font-mono text-lg font-bold text-gray-900 tracking-tight">
                      {component.oscilloscopeSetup.triggerMode} @{" "}
                      {component.oscilloscopeSetup.triggerLevel}
                    </span>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-red-600 mb-6 px-2">
                  <Zap className="w-4 h-4" /> Análise de Sinal (Fases)
                </h3>

                {component.waveformPhases ? (
                  <div className="grid gap-4">
                    {component.waveformPhases.map((phase) => (
                      <div
                        key={phase.id}
                        className="bg-white border border-gray-200/60 shadow-sm hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg transition-colors rounded-3xl p-6 flex gap-5 items-start"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-600 font-bold">
                          {phase.id}
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-semibold mb-2 text-lg">
                            {phase.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    ))}

                    <div className="mt-4 bg-white border border-gray-200/60 shadow-sm rounded-3xl p-6">
                      <p className="text-gray-600 text-sm leading-relaxed italic border-l-2 border-gray-300 pl-4">
                        {component.waveformExplanation}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-gray-200/60 shadow-sm rounded-3xl p-6 md:p-8">
                    <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                      {component.waveformExplanation}
                    </p>
                  </div>
                )}
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
