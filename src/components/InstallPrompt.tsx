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
        className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 md:w-96 z-50 bg-white dark:bg-gray-900 backdrop-blur-xl rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-black/10 flex flex-col gap-5 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-[2rem] -z-10" />

        <button 
          onClick={() => setDismissed(true)}
          className="absolute top-4 right-4 p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:bg-gray-800 rounded-full transition-all active:scale-95"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-4 pr-6">
          <div className="bg-gradient-to-br from-red-600/20 to-red-600/5 p-3 rounded-2xl border border-red-600/20 shadow-inner flex-shrink-0">
            <Download className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 tracking-tight">Instalar App</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mt-1">
              Adicione à tela inicial para acesso offline e melhor experiência.
            </p>
          </div>
        </div>

        {isInstallable ? (
          <button
            onClick={handleInstallClick}
            className="w-full bg-red-600 hover:bg-red-500 text-black font-bold py-3.5 px-4 rounded-2xl transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] active:scale-[0.98]"
          >
            Instalar Agora
          </button>
        ) : isIOS ? (
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl text-xs text-gray-700 dark:text-gray-300 border border-black/10 mt-1">
            <p className="flex items-center gap-2 mb-3 font-bold text-gray-900 dark:text-gray-100 uppercase tracking-widest text-[10px]">
              Instalação no iOS
            </p>
            <ol className="space-y-2.5">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center font-mono text-[10px] text-red-600 border border-gray-200 dark:border-[#2A3B5C]/60 shadow-sm">1</span>
                <span>Toque em <Share className="w-3.5 h-3.5 inline text-blue-600 mx-1" /> Compartilhar</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center font-mono text-[10px] text-red-600 border border-gray-200 dark:border-[#2A3B5C]/60 shadow-sm">2</span>
                <span>Selecione <PlusSquare className="w-3.5 h-3.5 inline text-gray-600 dark:text-gray-400 mx-1" /> Adicionar à Tela de Início</span>
              </li>
            </ol>
          </div>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}
