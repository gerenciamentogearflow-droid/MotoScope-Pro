const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf-8');

const oldModal = `        {/* Modal de Seleção de Estator */}
        <AnimatePresence>
          {showStatorModal !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-end sm:items-center justify-center sm:p-4"
              onClick={() => setShowStatorModal(null)}
            >
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 w-full sm:w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl p-6 pb-12 sm:pb-6 shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6 sm:hidden"></div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 font-bold">Qual o tipo de estator?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Selecione a configuração de fases da motocicleta para ver os testes específicos.</p>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => handleStatorSelection("estator-1f")}
                    className="w-full bg-white dark:bg-gray-900 hover:bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded-xl text-left transition-colors flex items-center gap-4"
                  >
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 font-bold">Monofásico (1 Fase)</h4>
                      <p className="text-sm text-gray-500">Motos de baixa cilindrada, 1 saída principal.</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleStatorSelection("estator-2f")}
                    className="w-full bg-white dark:bg-gray-900 hover:bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded-xl text-left transition-colors flex items-center gap-4"
                  >
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 font-bold">Bifásico (2 Fases)</h4>
                      <p className="text-sm text-gray-500">Motos intermediárias, sistema sem aterramento.</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleStatorSelection("estator-3f")}
                    className="w-full bg-white dark:bg-gray-900 hover:bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded-xl text-left transition-colors flex items-center gap-4"
                  >
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg">
                      <Radio className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 font-bold">Trifásico (3 Fases)</h4>
                      <p className="text-sm text-gray-500">Motos de média/alta cilindrada.</p>
                    </div>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>`;

const newModal = `        {/* Modal de Seleção de Variante */}
        <AnimatePresence>
          {showVariantModal !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-end sm:items-center justify-center sm:p-4"
              onClick={() => setShowVariantModal(null)}
            >
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 w-full sm:w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl p-6 pb-12 sm:pb-6 shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6 sm:hidden"></div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 font-bold">{showVariantModal.groupComp.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{showVariantModal.groupComp.fullDescription || "Selecione o tipo de sistema para ver os testes específicos."}</p>
                
                <div className="space-y-3">
                  {showVariantModal.groupComp.variants?.map(variant => (
                    <button 
                      key={variant.id}
                      onClick={() => handleVariantSelection(variant.id)}
                      className="w-full bg-white dark:bg-gray-900 hover:bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded-xl text-left transition-colors flex items-center gap-4"
                    >
                      <div className={\`p-2 rounded-lg \${showVariantModal.groupComp.type === "sensor" ? "bg-red-100 dark:bg-red-900/30 text-red-600" : "bg-orange-100 dark:bg-orange-900/30 text-orange-600"}\`}>
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 font-bold">{variant.name}</h4>
                        {variant.description && <p className="text-sm text-gray-500">{variant.description}</p>}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>`;

if (content.includes('showStatorModal !== null')) {
  content = content.replace(oldModal, newModal);
}

fs.writeFileSync('src/components/Dashboard.tsx', content);
