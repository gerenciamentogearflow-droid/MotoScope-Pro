import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wifi, WifiOff, RefreshCw, CheckCircle2 } from 'lucide-react';
import { useRegisterSW } from 'virtual:pwa-register/react';

export function OfflineStatus() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <AnimatePresence>
      {(offlineReady || needRefresh) && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:w-96 z-[60] bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-2xl flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            {offlineReady ? (
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-red-600 animate-spin" />
              </div>
            )}
            
            <div>
              <p className="text-gray-900 font-medium text-sm">
                {offlineReady ? 'Dados Offline Prontos' : 'Nova atualização disponível'}
              </p>
              <p className="text-slate-600 text-xs mt-0.5">
                {offlineReady 
                  ? 'O app agora funciona sem internet.' 
                  : 'Atualize para baixar os dados mais recentes.'}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            {needRefresh && (
              <button
                onClick={() => updateServiceWorker(true)}
                className="bg-red-600 hover:bg-red-500 text-black px-4 py-2 rounded-lg text-xs font-bold transition-colors"
              >
                Atualizar
              </button>
            )}
            <button
              onClick={close}
              className="px-3 py-2 text-slate-600 hover:text-gray-900 transition-colors"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
