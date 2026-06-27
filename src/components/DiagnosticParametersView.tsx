import React, { useState, useEffect } from "react";
import { DiagnosticModel } from "../types";
import { ArrowLeft, ChevronDown, Info, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DiagnosticParametersViewProps {
  brand: string;
  models: DiagnosticModel[];
  onBack: () => void;
}

const legendData: Record<string, string> = {
  "AL": "Teste de alimentação ou teste de entrada",
  "CC": "Teste de curto circuito",
  "CA": "Teste de circuito aberto",
  "SN": "Teste de sinal ou teste de saída",
  "RS": "Teste de resistência",
  "PR": "Teste de pressão",
  "VZ": "Teste de vazão",
  "PV": "Teste de pico",
  "(S)": "Quando o resultado do teste deve ser SIM",
  "(N)": "Quando o resultado do teste deve ser NÃO",
  "Contín.": "Refere-se a teste de continuidade",
  "Volt. Bat": "Refere-se a voltagem da bateria",
  "V": "Unidade de medida 'Voltagem'",
  "Osc.": "Quando o resultado do teste deve ser oscilando entre o padrão estabelecido"
};

export function DiagnosticParametersView({ brand, models, onBack }: DiagnosticParametersViewProps) {
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);
  const [selectedAbbr, setSelectedAbbr] = useState<{ key: string; description: string } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedModelId]);

  const handleAbbrClick = (text: string) => {
    // Try to find if any legend key is in the text (exact match for types, or partial for others)
    const exactMatch = legendData[text];
    if (exactMatch) {
      setSelectedAbbr({ key: text, description: exactMatch });
      return;
    }
    
    // For padrao which might contain "(S)", "Contín.", etc.
    const foundKey = Object.keys(legendData).find(key => text.includes(key));
    if (foundKey) {
      setSelectedAbbr({ key: foundKey, description: legendData[foundKey] });
    }
  };

  const selectedModel = models.find(m => m.id === selectedModelId);

  // Reusable modal for abbreviations
  const abbrModal = (
    <AnimatePresence>
      {selectedAbbr && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedAbbr(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 max-w-sm w-full shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-mono font-bold text-cyan-400">
                {selectedAbbr.key}
              </h3>
              <button
                onClick={() => setSelectedAbbr(null)}
                className="p-2 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-zinc-300 text-base leading-relaxed">
              {selectedAbbr.description}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

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
              <p className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold mt-0.5">Especificações Técnicas</p>
            </div>
          </div>
        </header>

        <main key={selectedModel.id} className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-10 pb-12">
            {selectedModel.tables.map((table, tIdx) => (
              <div key={tIdx} className="space-y-4">
                <h3 className="text-sm font-bold text-cyan-400 flex items-center justify-between uppercase tracking-widest border-b border-white/5 pb-2">
                  <span>{table.name}</span>
                  {table.notes && (
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                      {table.notes}
                    </span>
                  )}
                </h3>
                <div className="overflow-x-auto rounded-[1.5rem] border border-white/5 bg-zinc-900/40 backdrop-blur-sm shadow-xl">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <thead className="bg-black/60 text-zinc-400">
                      <tr>
                        <th className="px-4 py-4 font-semibold uppercase tracking-wider text-[11px]">Padrão</th>
                        <th className="px-4 py-4 font-semibold uppercase tracking-wider text-[11px]">Localização</th>
                        <th className="px-4 py-4 font-semibold uppercase tracking-wider text-[11px] text-center">Tipo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {table.rows.map((row, rIdx) => {
                        // Replace hyphen with newline ' a ' newline for numeric ranges to avoid confusion with minus sign and stack them
                        const formattedPadrao = row.padrao.replace(/(\d+(?:,\d+)?)\s*-\s*(\d+(?:,\d+)?)/g, "$1\n a \n$2");
                        
                        // Highlight recognizable abbreviations in row.padrao
                        let padraoDisplay: React.ReactNode = formattedPadrao;
                        const matchKey = Object.keys(legendData).find(k => formattedPadrao.includes(k));
                        if (matchKey) {
                          const parts = formattedPadrao.split(matchKey);
                          padraoDisplay = (
                            <>
                              {parts[0]}
                              <button 
                                onClick={(e) => { e.stopPropagation(); handleAbbrClick(matchKey); }}
                                className="text-cyan-400 underline decoration-cyan-400/50 underline-offset-2 active:text-cyan-300 inline-block"
                              >
                                {matchKey}
                              </button>
                              {parts[1]}
                            </>
                          );
                        }

                        const formattedLocalizacao = row.localizacao.replace(/\s+\+/g, '\u00A0+').replace(/\s+\-/g, '\u00A0-');

                        return (
                        <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                          <td className="px-4 py-4 text-zinc-100 font-mono text-[11px] sm:text-xs whitespace-pre-line text-center sm:text-left">
                            {padraoDisplay}
                          </td>
                          <td className="px-4 py-4 text-zinc-300 text-[11px] sm:text-xs">{formattedLocalizacao}</td>
                          <td className="px-4 py-4 text-center">
                            <button 
                              onClick={() => handleAbbrClick(row.tipo)}
                              className="inline-block px-2 py-1 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 active:scale-95 rounded text-cyan-400 font-mono font-bold text-[10px] transition-all cursor-pointer"
                            >
                              {row.tipo}
                            </button>
                          </td>
                        </tr>
                      )})}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </main>
        
        {abbrModal}
      </div>
    );
  }

  // If no model is selected, show the list of models + legend
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
              Parâmetros: <span className="text-cyan-400">{brand}</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-0.5">Selecione o Modelo</p>
          </div>
        </div>
      </header>

      <main key="list" className="flex-1 p-4 md:p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-8 pb-12">
          
          {/* Legendas e Abreviações */}
          <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-sm font-bold text-cyan-400 mb-4 flex items-center gap-2 uppercase tracking-widest">
              <Info className="w-4 h-4" />
              Legenda de Siglas e Abreviações
            </h2>
            <p className="text-sm text-cyan-200/60 mb-6">
              Toque em qualquer sigla na tabela para ver o seu significado, ou consulte a lista abaixo:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {Object.entries(legendData).map(([key, desc]) => (
                <div key={key} className="flex items-start gap-3 text-sm">
                  <span className="font-mono font-bold text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20 text-[11px] mt-0.5">{key}</span>
                  <span className="text-zinc-300/80 leading-snug">{desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest px-2">Modelos Disponíveis</h2>
            {models.length === 0 ? (
               <div className="text-center py-16 bg-zinc-900/40 rounded-3xl border border-white/5">
                 <p className="text-zinc-400">Nenhum modelo cadastrado para {brand}.</p>
               </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {models.map(model => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModelId(model.id)}
                    className="group w-full flex items-center justify-between p-5 bg-zinc-900/40 border border-white/5 rounded-2xl text-left hover:bg-zinc-800/60 hover:border-white/10 transition-all shadow-sm active:scale-[0.98]"
                  >
                    <span className="text-base font-semibold text-white group-hover:text-cyan-50 transition-colors">{model.name}</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                      <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 -rotate-90 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      {abbrModal}
    </div>
  );
}