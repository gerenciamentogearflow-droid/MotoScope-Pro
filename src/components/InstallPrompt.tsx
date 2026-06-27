import React, { useState } from 'react';
import { Download, X, Share, PlusSquare } from 'lucide-react';
import { useInstallPrompt } from '../hooks/useInstallPrompt';
import { motion, AnimatePresence } from 'motion/react';

export function InstallPrompt() {
  const { isInstallable, isIOS, isStandalone, handleInstallClick } = useInstallPrompt();
  const [dismissed, setDismissed] = useState(false);

  // If already installed, dismissed, or not mobile/installable, don't show
  // We'll also show it for iOS since it doesn't fire beforeinstallprompt
  if (isStandalone || dismissed) return null;
  
  const showPrompt = isInstallable || isIOS;
  if (!showPrompt) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 md:w-96 z-50 bg-black/80 backdrop-blur-xl rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col gap-5 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[2rem] -z-10" />

        <button 
          onClick={() => setDismissed(true)}
          className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all active:scale-95"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-4 pr-6">
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 p-3 rounded-2xl border border-cyan-500/20 shadow-inner flex-shrink-0">
            <Download className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-bold text-white tracking-tight">Instalar App</h3>
            <p className="text-zinc-400 text-xs leading-relaxed mt-1">
              Adicione à tela inicial para acesso offline e melhor experiência.
            </p>
          </div>
        </div>

        {isInstallable ? (
          <button
            onClick={handleInstallClick}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3.5 px-4 rounded-2xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-[0.98]"
          >
            Instalar Agora
          </button>
        ) : isIOS ? (
          <div className="bg-white/5 p-4 rounded-2xl text-xs text-zinc-300 border border-white/10 mt-1">
            <p className="flex items-center gap-2 mb-3 font-bold text-white uppercase tracking-widest text-[10px]">
              Instalação no iOS
            </p>
            <ol className="space-y-2.5">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-black/40 flex items-center justify-center font-mono text-[10px] text-cyan-400 border border-white/5">1</span>
                <span>Toque em <Share className="w-3.5 h-3.5 inline text-blue-400 mx-1" /> Compartilhar</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-black/40 flex items-center justify-center font-mono text-[10px] text-cyan-400 border border-white/5">2</span>
                <span>Selecione <PlusSquare className="w-3.5 h-3.5 inline text-zinc-400 mx-1" /> Adicionar à Tela de Início</span>
              </li>
            </ol>
          </div>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}
