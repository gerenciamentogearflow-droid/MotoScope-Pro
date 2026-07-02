import React from "react";
import { motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

interface SensorDifferencesModalProps {
  onClose: () => void;
}

export function SensorDifferencesModal({ onClose }: SensorDifferencesModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto py-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
          <div>
            <h3 className="font-bold text-xl text-gray-900 tracking-tight">Diferenças: Sensor Hall vs Indutivo</h3>
            <p className="text-sm text-gray-600 mt-1">Comparação detalhada de funcionamento para diagnóstico correto.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 hover:bg-gray-200 rounded-xl transition-colors text-gray-500 bg-white shadow-sm border border-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 md:p-8 overflow-y-auto max-h-[75vh]">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Indutivo */}
            <div className="bg-red-50/30 border border-red-100 rounded-3xl p-6 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <h4 className="font-bold text-2xl text-red-700 mb-6 flex items-center gap-2">
                Sensor Indutivo
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 border-b border-red-100 pb-1">Tipo de Sinal (Onda)</h5>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Analógico (Senoidal). <span className="text-gray-500 font-normal">A onda tem formato arredondado (ondulatório), variando entre tensões positivas e negativas.</span>
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 border-b border-red-100 pb-1">Funcionamento Base</h5>
                  <p className="text-gray-700 leading-relaxed">
                    Gera sua própria tensão elétrica ao detectar a variação do campo magnético quando há movimento metálico próximo. Não precisa de alimentação externa do módulo (ECU) para gerar o sinal.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 border-b border-red-100 pb-1">Fiação (Pinos)</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Geralmente possui <strong>2 fios</strong> (Sinal Positivo e Sinal Negativo).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Pode ter um 3º fio que serve apenas como <strong>Malha de Blindagem</strong> para evitar interferências.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 border-b border-red-100 pb-1">Comportamento (Amplitude)</h5>
                  <p className="text-gray-700 leading-relaxed bg-white/60 p-3 rounded-xl border border-red-50">
                    A voltagem do sinal (Vp-p) <strong>aumenta conforme a velocidade do movimento sobe</strong>. Por exemplo, na partida, pode gerar 2V a 5V; em alta rotação/velocidade, pode passar de 50V a 100V.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 border-b border-red-100 pb-1">Sensibilidade (Gap)</h5>
                  <p className="text-gray-700 leading-relaxed">
                    Muito sensível à distância (gap) entre a ponta do sensor e a peça móvel. Se ficar longe, o sinal fica muito fraco e a leitura falha.
                  </p>
                </div>
              </div>
            </div>

            {/* Hall */}
            <div className="bg-blue-50/30 border border-blue-100 rounded-3xl p-6 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <h4 className="font-bold text-2xl text-blue-700 mb-6 flex items-center gap-2">
                Sensor Hall
              </h4>

              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 border-b border-blue-100 pb-1">Tipo de Sinal (Onda)</h5>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Digital (Quadrada). <span className="text-gray-500 font-normal">A onda tem formato quadrado, chaveando abruptamente entre zero e a tensão máxima (0V ou 5V/12V).</span>
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 border-b border-blue-100 pb-1">Funcionamento Base</h5>
                  <p className="text-gray-700 leading-relaxed">
                    Funciona como um interruptor eletrônico. O sensor <strong>precisa receber energia</strong> da ECU para funcionar. Ele "chaveia" essa energia ao detectar a passagem metálica.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 border-b border-blue-100 pb-1">Fiação (Pinos)</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Sempre possui <strong>3 fios</strong> principais.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Fio 1: <strong>Alimentação (Positivo, ex: 5V, 9V ou 12V)</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Fio 2: <strong>Aterramento (Negativo)</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Fio 3: <strong>Sinal de Saída (Chaveamento)</strong></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 border-b border-blue-100 pb-1">Comportamento (Amplitude)</h5>
                  <p className="text-gray-700 leading-relaxed bg-white/60 p-3 rounded-xl border border-blue-50">
                    A voltagem do sinal (Vmax) <strong>é sempre constante (fixa)</strong>. Não importa a velocidade, a altura da onda será sempre a mesma (ex: 5V). Apenas a <strong>frequência</strong> muda.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 border-b border-blue-100 pb-1">Sensibilidade (Gap)</h5>
                  <p className="text-gray-700 leading-relaxed">
                    Menos sensível ao gap do que o indutivo, e consegue ler velocidades extremamente baixas (desde próximo a zero).
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-5 text-center">
             <h4 className="font-bold text-gray-900 mb-2">Resumo na Prática para o Mecânico</h4>
             <p className="text-gray-700">
               Se a onda for <strong>quadrada</strong> e a voltagem for <strong>fixa</strong>, é <strong>Hall</strong>. Se a onda for <strong>arredondada (sobe e desce)</strong> e a voltagem <strong>aumentar muito com a aceleração</strong>, é <strong>Indutivo</strong>.
             </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
