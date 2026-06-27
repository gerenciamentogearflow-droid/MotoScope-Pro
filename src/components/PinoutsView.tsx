import React, { useState } from "react";
import { ArrowLeft, ChevronDown, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { hondaPinouts } from "../data/hondaPinouts";
import { yamahaPinouts } from "../data/yamahaPinouts";
import { shinerayPinouts } from "../data/shinerayPinouts";

interface PinoutsViewProps {
  brand: string;
  onBack: () => void;
}

const colorMap: Record<string, string> = {
  "preto": "#18181b",
  "branco": "#f8fafc",
  "vermelho": "#ef4444",
  "verde": "#22c55e",
  "verde claro": "#86efac",
  "azul": "#3b82f6",
  "amarelo": "#eab308",
  "rosa": "#ec4899",
  "marrom": "#78350f",
  "laranja": "#f97316",
  "cinza": "#9ca3af",
  "roxo": "#a855f7"
};

const getHexFromColorName = (name: string) => {
  return colorMap[name.toLowerCase().trim()] || "transparent";
};

const WireColorVisualizer = ({ colorString }: { colorString: string }) => {
  if (!colorString || colorString.toUpperCase() === "VAZIO") {
    return <span className="text-zinc-600 text-xs italic font-medium">VAZIO</span>;
  }

  const parts = colorString.split("/").map(p => p.trim());
  
  return (
    <div className="flex items-center justify-center">
      <div className="flex rounded-md overflow-hidden border border-zinc-600 w-12 h-6 shrink-0 shadow-sm relative" title={colorString}>
        {parts.map((p, idx) => (
          <div
            key={idx}
            className="flex-1 h-full"
            style={{ backgroundColor: getHexFromColorName(p) }}
          />
        ))}
      </div>
    </div>
  );
};

export function PinoutsView({ brand, onBack }: PinoutsViewProps) {
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);

  const getModelsByBrand = () => {
    switch (brand) {
      case "Honda": return hondaPinouts;
      case "Yamaha": return yamahaPinouts;
      case "Shineray": return shinerayPinouts;
      default: return [];
    }
  };

  const models = getModelsByBrand().slice().sort((a, b) => a.name.localeCompare(b.name));
  const selectedModel = models.find(m => m.id === selectedModelId);

  if (selectedModel) {
    return (
      <div className="min-h-screen bg-transparent text-zinc-100 flex flex-col">
        <header className="px-6 pt-12 pb-5 border-b border-white/5">
          <div className="flex items-center gap-4 max-w-4xl mx-auto w-full">
            <button
              onClick={() => setSelectedModelId(null)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-zinc-300 hover:text-white transition-all active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight line-clamp-1">
                {selectedModel.name}
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-rose-500 font-bold mt-0.5">Diagramas de Pinagem</p>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-10 pb-12">
            
            {selectedModel.modules.map((mod, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-sm font-bold text-rose-400 uppercase tracking-widest border-b border-white/5 pb-2">
                  {mod.name}
                </h3>
                
                {mod.pinout.length > 0 ? (
                  <div className="overflow-x-auto rounded-[1.5rem] border border-white/5 bg-zinc-900/40 backdrop-blur-sm shadow-xl">
                    <table className="w-full text-xs sm:text-sm text-left">
                      <thead className="bg-black/60 text-zinc-400">
                        <tr>
                          <th className="px-4 py-4 font-semibold uppercase tracking-wider text-[11px] w-16 text-center">Pino</th>
                          <th className="px-4 py-4 font-semibold uppercase tracking-wider text-[11px] w-48 text-center">Cor do Fio</th>
                          <th className="px-4 py-4 font-semibold uppercase tracking-wider text-[11px]">Função / Ligação</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {mod.pinout.map((p: any, pIdx) => (
                          <tr key={pIdx} className="hover:bg-white/5 transition-colors">
                            <td className="px-4 py-4 text-zinc-100 font-mono text-center font-bold">{p.pin}</td>
                            <td className="px-4 py-4 align-middle">
                              <WireColorVisualizer colorString={p.color} />
                            </td>
                            <td className="px-4 py-4 text-zinc-400">{p.function}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-12 bg-zinc-900/40 rounded-3xl border border-white/5">
                    <p className="text-zinc-500">Tabela vazia. Aguardando dados das imagens.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // List of models
  return (
    <div className="min-h-screen bg-transparent text-zinc-100 flex flex-col">
      <header className="px-6 pt-12 pb-5 border-b border-white/5">
        <div className="flex items-center gap-4 max-w-4xl mx-auto w-full">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-zinc-300 hover:text-white transition-all active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">
              Pinagens: <span className="text-rose-400">{brand}</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-0.5">Selecione o Modelo</p>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-8 pb-12">
          
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest px-2">Modelos Disponíveis</h2>
            {models.length === 0 ? (
               <div className="text-center py-16 bg-zinc-900/40 rounded-3xl border border-white/5">
                 <p className="text-zinc-400">Nenhum modelo de pinagem cadastrado para {brand} ainda.</p>
               </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {models.map(model => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModelId(model.id)}
                    className="group w-full flex items-center justify-between p-5 bg-zinc-900/40 border border-white/5 rounded-2xl text-left hover:bg-zinc-800/60 hover:border-white/10 transition-all shadow-sm active:scale-[0.98]"
                  >
                    <span className="text-base font-semibold text-white group-hover:text-rose-50 transition-colors">{model.name}</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-rose-500/10 transition-colors">
                      <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 -rotate-90 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
