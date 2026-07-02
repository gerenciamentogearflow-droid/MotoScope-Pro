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

              <section className="bg-white border border-gray-200/60 shadow-sm rounded-3xl overflow-hidden mt-8">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200/80">
                  <h3 className="flex items-center gap-2 font-bold text-gray-900">
                    <Activity className="w-5 h-5 text-red-600" /> Parâmetros de Medição (Menu Parameter)
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Guia de configuração para leitura dos valores na tela do osciloscópio.</p>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">O que ativar para o teste do(a) {component.name}?</h4>
                    <div className="flex flex-wrap gap-2">
                      {(() => {
                        const recs = {
                          "sine": ["Freq (Frequência)", "Vp-p (Pico a Pico)", "Vmax", "Vrms"],
                          "sine-gap": ["Freq (Frequência)", "Vp-p (Pico a Pico)", "Vmax"],
                          "square": ["Freq (Frequência)", "Vmax", "Duty+"],
                          "square-gap": ["Freq (Frequência)", "Vmax", "Duty+"],
                          "injector": ["Wid- (Tempo de Injeção)", "Vmax (Pico Indutivo)", "Freq"],
                          "ignition": ["Vmax (Pico Indutivo)", "Freq", "Wid- (Dwell)"],
                          "pwm": ["Freq (Frequência)", "Duty- ou Duty+", "Vmax"],
                          "tps": ["Vmax", "Vmin", "Avg (Média)"],
                          "map": ["Vmax", "Vmin", "Avg (Média)"],
                          "dc-ripple": ["Vmax", "Vmin", "Avg (Média)"],
                          "lambda": ["Vmax", "Vmin", "Freq", "Avg (Média)"]
                        }[component.waveType] || ["Vmax", "Freq", "Duty+"];
                        
                        return recs.map(r => (
                          <span key={r} className="bg-red-600/10 text-red-700 border border-red-600/20 px-3 py-1.5 rounded-lg text-sm font-bold tracking-wide">
                            {r}
                          </span>
                        ));
                      })()}
                    </div>
                    <p className="text-sm text-gray-600 mt-3 bg-blue-50 text-blue-800 p-3 rounded-xl border border-blue-100">
                      <strong>Dica:</strong> Em vez de ativar "A-on" (que polui a tela com todos os valores), ative individualmente apenas os parâmetros recomendados acima usando o menu do seu osciloscópio para uma análise mais limpa.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-4 py-3 font-semibold text-gray-900 w-24">Botão</th>
                          <th className="px-4 py-3 font-semibold text-gray-900 w-48">Significado</th>
                          <th className="px-4 py-3 font-semibold text-gray-900">Para que serve na moto?</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-gray-700">
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 font-mono font-bold text-gray-900">A-on</td>
                          <td className="px-4 py-3">All On (Todos Ligados)</td>
                          <td className="px-4 py-3">Liga todos os parâmetros na tela simultaneamente. (Não recomendado, polui a visão).</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 font-mono font-bold text-gray-900">A-off</td>
                          <td className="px-4 py-3">All Off (Todos Desligados)</td>
                          <td className="px-4 py-3">Limpa a tela escondendo todos os parâmetros.</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 font-mono font-bold text-blue-600">Freq</td>
                          <td className="px-4 py-3">Frequência</td>
                          <td className="px-4 py-3">Mede giros/velocidade. Essencial para testar CKP e sensores de velocidade da roda (ABS).</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 font-mono font-bold text-gray-900">Peri</td>
                          <td className="px-4 py-3">Período</td>
                          <td className="px-4 py-3">Tempo de um ciclo completo. Inverso da Frequência.</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 font-mono font-bold text-gray-900">Duty+</td>
                          <td className="px-4 py-3">Duty Cycle Positivo (%)</td>
                          <td className="px-4 py-3">Informa a % do tempo que o sinal fica ligado em nível alto (positivo).</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 font-mono font-bold text-gray-900">Duty-</td>
                          <td className="px-4 py-3">Duty Cycle Negativo (%)</td>
                          <td className="px-4 py-3">Informa a % do tempo que o sinal fica ligado em nível baixo (negativo). Comum em válvulas IACV controladas por negativo.</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 font-mono font-bold text-gray-900">Wid+</td>
                          <td className="px-4 py-3">Largura de Pulso Positivo</td>
                          <td className="px-4 py-3">O tempo exato (em milissegundos) que o componente recebe sinal positivo.</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 font-mono font-bold text-red-600">Wid-</td>
                          <td className="px-4 py-3">Largura de Pulso Negativo</td>
                          <td className="px-4 py-3"><strong>Crucial para Injeção.</strong> Mede o <strong>Tempo de Injeção (ms)</strong>, pois o módulo aciona o injetor via negativo. Também serve para medir o Dwell da bobina.</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 font-mono font-bold text-green-600">Vmax</td>
                          <td className="px-4 py-3">Tensão Máxima</td>
                          <td className="px-4 py-3">Mostra picos altos. Vital para ver o pico indutivo de Injetores (ex: 60V-100V) e Bobinas de Ignição (ex: 300V-400V).</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 font-mono font-bold text-gray-900">Vmin</td>
                          <td className="px-4 py-3">Tensão Mínima</td>
                          <td className="px-4 py-3">O ponto de tensão mais baixo. Avalia quedas excessivas ou aterramento ruim.</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 font-mono font-bold text-purple-600">Vp-p</td>
                          <td className="px-4 py-3">Tensão Pico a Pico</td>
                          <td className="px-4 py-3">A distância total de Vmax a Vmin. <strong>A melhor leitura para o CKP Indutivo</strong>, pois avalia o vigor do sinal completo de ponta a ponta.</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 font-mono font-bold text-gray-900">Amp</td>
                          <td className="px-4 py-3">Amplitude</td>
                          <td className="px-4 py-3">Amplitude central do sinal, semelhante ao Vp-p mas pode ignorar ruídos extremos (spikes).</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 font-mono font-bold text-gray-900">Vrms</td>
                          <td className="px-4 py-3">Tensão RMS</td>
                          <td className="px-4 py-3">O mesmo valor lido num multímetro (tensão eficaz). Muito usado ao testar tensão alternada de saída do <strong>Estator</strong>.</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 font-mono font-bold text-gray-900">Avg</td>
                          <td className="px-4 py-3">Tensão Média</td>
                          <td className="px-4 py-3">Usado para ver a tensão constante em sinais lentos/analógicos (<strong>TPS, Sonda Lambda, MAP</strong>).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
