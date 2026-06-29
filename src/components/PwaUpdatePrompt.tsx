import React, { useEffect, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { Download, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Altere esta versão sempre que quiser forçar o aviso de atualização
const APP_VERSION = '1.0.2';

export function PwaUpdatePrompt() {
  const [manualRefresh, setManualRefresh] = useState(false);

  useEffect(() => {
    const savedVersion = localStorage.getItem('app-version');
    if (savedVersion !== APP_VERSION) {
      setManualRefresh(true);
    }
  }, []);

  const handleForceUpdate = () => {
    localStorage.setItem('app-version', APP_VERSION);
    setManualRefresh(false);
    
    // Clear all service worker caches
    if ('caches' in window) {
      caches.keys().then((names) => {
        for (let name of names) caches.delete(name);
      });
    }
    
    // Reload the page completely to bypass cache
    window.location.reload();
  };

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ', r);
      if (r) {
        r.update().catch(console.error);
        setInterval(() => {
          r.update().catch(console.error);
        }, 10 * 60 * 1000);
      }
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  const showPrompt = needRefresh || manualRefresh;

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 left-4 right-4 z-[100] md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-md bg-white border border-gray-200 shadow-2xl rounded-2xl p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="bg-red-100 p-2 rounded-full text-red-600">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Atualização Disponível</p>
              <p className="text-xs text-gray-500">Nova versão ({APP_VERSION}) do aplicativo encontrada.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (needRefresh) {
                  updateServiceWorker(true).then(() => {
                    handleForceUpdate();
                  });
                } else {
                  handleForceUpdate();
                }
              }}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors"
            >
              Atualizar
            </button>
            <button
              onClick={() => {
                setNeedRefresh(false);
                setManualRefresh(false);
              }}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
