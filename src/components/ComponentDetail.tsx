import React, { useState } from "react";
import { useBackButton } from "../hooks/useBackButton";
import { ComponentData } from "../types";
import { OscilloscopeDisplay } from "./OscilloscopeDisplay";
import { WhatsAppAudioPlayer } from "./WhatsAppAudioPlayer";
import { globalAudioPlayer } from "../lib/audioPlayer";
import {
  ArrowLeft,
  Play,
  Square,
  Sliders,
  Info,
  Zap,
  Settings2,
  Activity,
  Cable,
  GraduationCap,
  X,
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
    useBackButton(true, onBack);
  
  React.useEffect(() => {
    return () => {
      globalAudioPlayer.stop();
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100 flex flex-col">
      <header className="px-6 pt-12 pb-5 border-b border-gray-200 dark:border-[#2A3B5C]/80">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2.5 rounded-xl hover:bg-gray-100 dark:bg-[#232F46] border border-transparent hover:border-gray-200 dark:border-[#2A3B5C]/80 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-gray-100 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold tracking-tight leading-tight text-gray-900 dark:text-gray-100">
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
          <div className="flex mt-8 bg-white dark:bg-[#1A2235] p-1.5 rounded-2xl border border-gray-200 dark:border-[#2A3B5C]/60 shadow-sm">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex-1 flex justify-center items-center gap-2 py-2.5 text-sm font-semibold rounded-xl transition-all ${activeTab === "overview" ? "bg-gray-200 dark:bg-[#232F46] text-gray-900 dark:text-gray-100 shadow-md shadow-black/50" : "text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:bg-[#232F46]"}`}
            >
              <Info className="w-4 h-4" /> Funcionamento
            </button>
            <button
              onClick={() => setActiveTab("oscilloscope")}
              className={`flex-1 flex justify-center items-center gap-2 py-2.5 text-sm font-semibold rounded-xl transition-all ${activeTab === "oscilloscope" ? "bg-red-600/10 text-red-600 shadow-md shadow-black/50 border border-red-600/20" : "text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:bg-[#232F46]"}`}
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
              <section className="bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-[#2A3B5C]/60 shadow-sm rounded-3xl p-6 md:p-8">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-widest">
                  <Info className="w-4 h-4" /> Descrição Técnica
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed whitespace-pre-wrap">
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

              {component.detailedTeacherExplanation && (
                <div className="mt-4 mb-4">
                  <WhatsAppAudioPlayer audioId={`${component.id}-explanation`} textToSpeak={component.detailedTeacherExplanation} />
                </div>
              )}


              <section className="bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-[#2A3B5C]/60 shadow-sm rounded-3xl overflow-hidden backdrop-blur-sm">
                <div className="bg-white dark:bg-[#1A2235] px-6 py-4 flex items-center gap-3 border-b border-gray-200 dark:border-[#2A3B5C]/80">
                  <Settings2 className="w-5 h-5 text-red-600" />
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    Setup de Captura Base
                  </h3>
                </div>
                <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6">
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-1.5 font-semibold">
                      Tempo / Div
                    </span>
                    <span className="font-mono text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                      {component.oscilloscopeSetup.timeDiv}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-1.5 font-semibold">
                      Tensão / Div
                    </span>
                    <span className="font-mono text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                      {component.oscilloscopeSetup.voltageDiv}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-1.5 font-semibold">
                      Trigger
                    </span>
                    <span className="font-mono text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                      {component.oscilloscopeSetup.triggerEdge}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-1.5 font-semibold">
                      Modo / Nível
                    </span>
                    <span className="font-mono text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                      {component.oscilloscopeSetup.triggerMode} @{" "}
                      {component.oscilloscopeSetup.triggerLevel}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-1.5 font-semibold">
                      Acoplamento
                    </span>
                    <span className="font-mono text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                      {component.oscilloscopeSetup.coupling || "DC"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-1.5 font-semibold">
                      Eixo
                    </span>
                    <span className="font-mono text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                      {component.oscilloscopeSetup.axis || "Y/T"}
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
                        className="bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-[#2A3B5C]/60 shadow-sm hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg transition-colors rounded-3xl p-6 flex gap-5 items-start"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-600 font-bold">
                          {phase.id}
                        </div>
                        <div>
                          <h4 className="text-gray-900 dark:text-gray-100 font-semibold mb-2 text-lg">
                            {phase.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    ))}

                    <div className="mt-4 bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-[#2A3B5C]/60 shadow-sm rounded-3xl p-6">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed italic border-l-2 border-gray-300 dark:border-[#3D5280] pl-4">
                        {component.waveformExplanation}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-[#2A3B5C]/60 shadow-sm rounded-3xl p-6 md:p-8">
                    <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed whitespace-pre-line">
                      {component.waveformExplanation}
                    </p>
                  </div>
                )}
              </section>

              <section className="bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-[#2A3B5C]/60 shadow-sm rounded-3xl overflow-hidden mt-8">
                <div className="bg-gray-50 dark:bg-[#232F46] px-6 py-4 border-b border-gray-200 dark:border-[#2A3B5C]/80">
                  <h3 className="flex items-center gap-2 font-bold text-gray-900 dark:text-gray-100">
                    <Activity className="w-5 h-5 text-red-600" /> Parâmetros de Medição (Menu Parameter)
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Guia de configuração para leitura dos valores na tela do osciloscópio.</p>
                </div>

                <div className="p-6 border-b border-gray-100">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">O que ativar para o teste do(a) {component.name}?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 bg-blue-50 text-blue-800 p-3 rounded-xl border border-blue-100">
                      <strong>Dica:</strong> Em vez de ativar "A-on" (que polui a tela com todos os valores), ative individualmente apenas os parâmetros recomendados abaixo usando o menu do seu osciloscópio para uma análise mais limpa.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                      {(() => {
                        const getParameterDetails = (waveType: string, componentName: string) => {
                          switch(waveType) {
                            case "injector":
                              return [
                                { id: "Wid-", name: "Wid- (Largura de Pulso Negativa)", reason: "Mede o Tempo de Injeção exato (em milissegundos). Como o módulo aciona o bico por negativo, o tempo que o sinal fica em nível baixo é o tempo que o bico fica aberto injetando combustível.", observe: "Verifique se o tempo aumenta ao acelerar a moto e diminui na desaceleração." },
                                { id: "Vmax", name: "Vmax (Tensão Máxima)", reason: "Mede o Pico Indutivo. Quando o módulo corta o negativo para fechar o bico, a bobina interna gera um pico de alta tensão.", observe: "Observe se o pico atinge valores saudáveis (normalmente entre 60V e 100V). Picos muito baixos indicam bico em curto ou defeito no módulo." },
                                { id: "Freq", name: "Freq (Frequência)", reason: "Mostra a frequência de acionamento do bico.", observe: "Deve acompanhar a rotação do motor (RPM). Se o valor estiver irregular, pode haver falha de sincronismo." }
                              ];
                            case "ignition":
                              return [
                                { id: "Vmax", name: "Vmax (Tensão Máxima)", reason: "Mede o Pico Indutivo da bobina primária. Quando o módulo corta a corrente, ocorre o disparo da faísca e um retorno de alta tensão.", observe: "Observe se o pico atinge a voltagem correta (geralmente de 250V a 400V). Falta de pico indica bobina ou módulo com defeito." },
                                { id: "Wid-", name: "Wid- (Dwell)", reason: "Mede o tempo de carregamento (Dwell) da bobina de ignição. O módulo aterra a bobina para carregá-la.", observe: "O tempo de Dwell costuma ficar em torno de 2 a 4 ms. Tempos muito longos esquentam a bobina; tempos curtos geram faísca fraca." },
                                { id: "Freq", name: "Freq (Frequência)", reason: "Monitora os ciclos de disparo.", observe: "Acompanha diretamente o RPM do motor. Usado para confirmar se o módulo está mandando sinal no tempo certo." }
                              ];
                            case "sine-gap":
                            case "sine":
                              return [
                                { id: "Vp-p", name: "Vp-p (Tensão Pico a Pico)", reason: "Mede a força total do sinal gerado pelo sensor (da crista mais alta ao vale mais baixo). Sensores indutivos geram sua própria tensão.", observe: "O valor de Vp-p deve aumentar consideravelmente ao acelerar. Se o sinal estiver fraco, verifique a distância (gap) do sensor até a roda fônica." },
                                { id: "Freq", name: "Freq (Frequência)", reason: "Lê a velocidade de passagem dos dentes da roda fônica.", observe: "Deve subir de forma estável e progressiva ao acelerar. Variações bruscas sem mudança no acelerador indicam falha no sensor ou roda fônica danificada." },
                                { id: "Vmax", name: "Vmax (Tensão Máxima)", reason: "Pico máximo positivo gerado.", observe: "Ajuda a confirmar o alinhamento e a intensidade do pulso de sincronismo (dente faltante)." },
                                ...(waveType === "sine" ? [{ id: "Vrms", name: "Vrms (Tensão RMS)", reason: "Mede a tensão média eficaz, igual a um multímetro.", observe: "Ideal para medir a saída do Estator em CA. O Vrms deve subir ao acelerar." }] : [])
                              ];
                            case "square-gap":
                            case "square":
                              return [
                                { id: "Freq", name: "Freq (Frequência)", reason: "Mede a velocidade da roda fônica ou eixo.", observe: "Deve ser estável na marcha lenta e subir linearmente ao acelerar. Saltos de frequência indicam mau contato ou sensor defeituoso." },
                                { id: "Vmax", name: "Vmax (Tensão Máxima)", reason: "Confirma a tensão de alimentação e de sinal de retorno do sensor Hall.", observe: "Sensores Hall geralmente trabalham chaveando para 5V ou 12V. O Vmax deve ser constante (ex: 5V cravados)." },
                                { id: "Duty+", name: "Duty+ (Ciclo Positivo)", reason: "Verifica a proporção dos dentes da roda fônica.", observe: "Para rodas fônicas simétricas, deve se manter estável (próximo a 50%)." }
                              ];
                            case "pwm":
                              return [
                                { id: "Duty-", name: "Duty- ou Duty+ (Ciclo de Trabalho)", reason: "Verifica o tempo que o módulo mantém o atuador ligado para controlar sua posição ou fluxo. Válvulas IACV (marcha lenta) geralmente são controladas por Duty-.", observe: "O valor em % deve variar conforme o módulo tenta corrigir a marcha lenta ou o atuador é exigido." },
                                { id: "Freq", name: "Freq (Frequência)", reason: "Mostra a frequência do sinal PWM gerado pelo módulo.", observe: "Geralmente a frequência do PWM é fixa (ex: 250Hz, 500Hz). Não deve oscilar; apenas o Duty muda." },
                                { id: "Vmax", name: "Vmax (Tensão Máxima)", reason: "Confirma a tensão de pico do circuito.", observe: "Normalmente será a tensão de bateria (12-14V)." }
                              ];
                            case "tps":
                            case "map":
                              return [
                                { id: "Vmax", name: "Vmax (Tensão Máxima)", reason: "Mostra a voltagem máxima alcançada durante o teste.", observe: `No teste do ${componentName}, ao acelerar até o fim (ou vácuo mínimo), deve chegar próximo a 4.5V a 4.8V (se for 5V de alimentação).` },
                                { id: "Vmin", name: "Vmin (Tensão Mínima)", reason: "Mostra a voltagem mínima com o componente em repouso.", observe: `Com o acelerador solto ou motor desligado (vácuo máximo), o valor deve ficar em torno de 0.5V a 0.8V. Não deve ser 0V absoluto.` },
                                { id: "Avg", name: "Avg (Tensão Média)", reason: "Mede a tensão contínua lida no momento, estabilizando pequenas flutuações.", observe: "Observe se o valor sobe e desce de forma suave e sem interrupções (buracos) ao mover o acelerador ou variar a pressão." }
                              ];
                            case "lambda":
                              return [
                                { id: "Vmax", name: "Vmax (Tensão Máxima)", reason: "Verifica o pico de mistura rica.", observe: "Deve atingir entre 800mV e 900mV (0.8V a 0.9V) indicando mistura rica." },
                                { id: "Vmin", name: "Vmin (Tensão Mínima)", reason: "Verifica o pico inferior de mistura pobre.", observe: "Deve descer entre 100mV e 200mV (0.1V a 0.2V) indicando mistura pobre." },
                                { id: "Freq", name: "Freq (Frequência)", reason: "Mede a velocidade de alternância entre rico e pobre.", observe: "Uma sonda saudável alterna várias vezes por segundo. Se a frequência for muito baixa (lenta), a sonda pode estar 'preguiçosa' ou contaminada." },
                                { id: "Avg", name: "Avg (Tensão Média)", reason: "Mede a média geral da mistura.", observe: "Deve ficar oscilando em torno do centro (450mV) em uma situação de controle de malha fechada." }
                              ];
                            case "dc-ripple":
                              return [
                                { id: "Vmax", name: "Vmax (Tensão Máxima)", reason: "Mede o pico máximo de tensão gerado pelo retificador.", observe: "Não deve ultrapassar a voltagem de corte (geralmente 14.8V). Acima disso sobrecarrega a bateria." },
                                { id: "Vmin", name: "Vmin (Tensão Mínima)", reason: "Mede a queda mínima nos vales do ripple.", observe: "Se cair muito abaixo da média, indica falha em algum diodo do retificador ou fase do estator." },
                                { id: "Avg", name: "Avg (Tensão Média)", reason: "A tensão contínua real de carregamento da bateria.", observe: "Com o motor acelerado, deve estar entre 13.5V e 14.8V." }
                              ];
                            default:
                              return [
                                { id: "Vmax", name: "Vmax (Tensão Máxima)", reason: "Mostra a voltagem máxima alcançada.", observe: "Verifique se a voltagem corresponde ao esperado para o sistema (ex: 5V ou 12V)." },
                                { id: "Freq", name: "Freq (Frequência)", reason: "Mede ciclos por segundo de qualquer variação no sinal.", observe: "Verifique se há leitura estável se o sinal for periódico." },
                                { id: "Duty+", name: "Duty+ (Ciclo Positivo)", reason: "Mede a proporção positiva do sinal.", observe: "Ajuda a identificar a variação de sinais PWM genéricos." }
                              ];
                          }
                        };
                        
                        const params = getParameterDetails(component.waveType, component.name);
                        return params.map(param => (
                          <div key={param.id} className="bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-[#2A3B5C] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="bg-red-600/10 text-red-700 border border-red-600/20 px-3 py-1.5 rounded-lg text-sm font-bold tracking-wide">
                                {param.name}
                              </span>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <strong className="text-gray-900 dark:text-gray-100 block text-sm mb-1">Por que ativar?</strong>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{param.reason}</p>
                              </div>
                              <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                                <strong className="text-amber-900 block text-sm mb-1">O que observar no teste:</strong>
                                <p className="text-amber-800 text-sm leading-relaxed">{param.observe}</p>
                              </div>
                            </div>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50/30">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">Glossário Completo de Parâmetros</h4>
                  <div className="flex flex-col gap-3">
                    {[
                      { button: "A-on", meaning: "All On (Todos Ligados)", desc: "Liga todos os parâmetros na tela simultaneamente. (Não recomendado, polui a visão).", color: "text-gray-900 dark:text-gray-100" },
                      { button: "A-off", meaning: "All Off (Todos Desligados)", desc: "Limpa a tela escondendo todos os parâmetros.", color: "text-gray-900 dark:text-gray-100" },
                      { button: "Freq", meaning: "Frequência", desc: "Mede giros/velocidade. Essencial para testar CKP e sensores de velocidade da roda (ABS).", color: "text-blue-600" },
                      { button: "Peri", meaning: "Período", desc: "Tempo de um ciclo completo. Inverso da Frequência.", color: "text-gray-900 dark:text-gray-100" },
                      { button: "Duty+", meaning: "Duty Cycle Positivo (%)", desc: "Informa a % do tempo que o sinal fica ligado em nível alto (positivo).", color: "text-gray-900 dark:text-gray-100" },
                      { button: "Duty-", meaning: "Duty Cycle Negativo (%)", desc: "Informa a % do tempo que o sinal fica ligado em nível baixo (negativo). Comum em válvulas IACV controladas por negativo.", color: "text-gray-900 dark:text-gray-100" },
                      { button: "Wid+", meaning: "Largura de Pulso Positivo", desc: "O tempo exato (em milissegundos) que o componente recebe sinal positivo.", color: "text-gray-900 dark:text-gray-100" },
                      { button: "Wid-", meaning: "Largura de Pulso Negativo", desc: <><strong className="text-gray-900 dark:text-gray-100">Crucial para Injeção.</strong> Mede o <strong className="text-gray-900 dark:text-gray-100">Tempo de Injeção (ms)</strong>, pois o módulo aciona o injetor via negativo. Também serve para medir o Dwell da bobina.</>, color: "text-red-600" },
                      { button: "Vmax", meaning: "Tensão Máxima", desc: "Mostra picos altos. Vital para ver o pico indutivo de Injetores (ex: 60V-100V) e Bobinas de Ignição (ex: 300V-400V).", color: "text-green-600" },
                      { button: "Vmin", meaning: "Tensão Mínima", desc: "O ponto de tensão mais baixo. Avalia quedas excessivas ou aterramento ruim.", color: "text-gray-900 dark:text-gray-100" },
                      { button: "Vp-p", meaning: "Tensão Pico a Pico", desc: <>A distância total de Vmax a Vmin. <strong className="text-gray-900 dark:text-gray-100">A melhor leitura para o CKP Indutivo</strong>, pois avalia o vigor do sinal completo de ponta a ponta.</>, color: "text-purple-600" },
                      { button: "Amp", meaning: "Amplitude", desc: "Amplitude central do sinal, semelhante ao Vp-p mas pode ignorar ruídos extremos (spikes).", color: "text-gray-900 dark:text-gray-100" },
                      { button: "Vrms", meaning: "Tensão RMS", desc: <>O mesmo valor lido num multímetro (tensão eficaz). Muito usado ao testar tensão alternada de saída do <strong className="text-gray-900 dark:text-gray-100">Estator</strong>.</>, color: "text-gray-900 dark:text-gray-100" },
                      { button: "Avg", meaning: "Tensão Média", desc: <>Usado para ver a tensão constante em sinais lentos/analógicos (<strong className="text-gray-900 dark:text-gray-100">TPS, Sonda Lambda, MAP</strong>).</>, color: "text-gray-900 dark:text-gray-100" }
                    ].map((item) => (
                      <div key={item.button} className="bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-[#2A3B5C] p-4 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-6 hover:shadow-md transition-shadow">
                        <div className="md:w-32 flex-shrink-0">
                          <span className={`font-mono font-bold ${item.color} bg-gray-50 dark:bg-[#232F46] px-2 py-1 rounded border border-gray-100`}>
                            {item.button}
                          </span>
                        </div>
                        <div className="md:w-56 font-semibold text-gray-800 dark:text-gray-200 text-sm">
                          {item.meaning}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm flex-1 leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    ))}
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
