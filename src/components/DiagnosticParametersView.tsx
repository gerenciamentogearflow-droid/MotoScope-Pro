import { useBackButton } from "../hooks/useBackButton";
import React, { useState, useEffect } from "react";
import { DiagnosticModel, ComponentData } from "../types";
import { ArrowLeft, ChevronDown, Info, X, Activity } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { OscilloscopeDisplay } from "./OscilloscopeDisplay";
import { MultimeterVisual } from "./MultimeterVisual";

interface DiagnosticParametersViewProps {
  brand: string;
  models: DiagnosticModel[];
  onBack: () => void;
}

const legendData: Record<string, string> = {
  AL: "Teste de alimentação ou teste de entrada",
  CC: "Teste de curto circuito",
  CA: "Teste de circuito aberto",
  SN: "Teste de sinal ou teste de saída",
  RS: "Teste de resistência",
  PV: "Pico de voltagem",
  MM: "Milímetros (Folga ou Medida)",
  PR: "Pressão (Bomba, Cilindro, etc)",
  VZ: "Vazão (Bomba, Bico, etc)",
  "PR/VZ": "Pressão e Vazão",
  "(S)": "Quando o resultado do teste deve ser SIM",
  "(N)": "Quando o resultado do teste deve ser NÃO",
  "Contín.": "Refere-se a teste de continuidade",
  "Volt. Bat": "Refere-se a voltagem da bateria",
  V: "Unidade de medida 'Voltagem'",
  "Osc.":
    "Quando o resultado do teste deve ser oscilando entre o padrão estabelecido",
};

const defaultTutorialData: Record<string, string[]> = {
  AL: [
    "Coloque o multímetro na escala de Corrente Contínua (VDC) ou Alternada (VAC) conforme o sistema.",
    "Conecte a ponta preta do multímetro no negativo da bateria ou em um bom aterramento no motor/chassi.",
    "Conecte a ponta vermelha no fio de alimentação que chega ao componente.",
    "Ligue a ignição (ou dê a partida no motor, se exigido) e verifique se a tensão está dentro do padrão de fábrica.",
    "",
    "DIAGNÓSTICO DE FALHAS:",
    "1. Sem alimentação (0V): Fio rompido, fusível queimado, relé defeituoso, mau contato nos conectores ou defeito no módulo que envia a alimentação.",
    "2. Alimentação abaixo do normal: Bateria fraca, resistência alta no circuito (fio oxidado, conector solto), excesso de consumo por outro componente no mesmo circuito.",
  ],
  RS: [
    "Certifique-se de que a ignição está DESLIGADA.",
    "Desconecte o componente do chicote elétrico. NUNCA meça resistência com o componente conectado, pois a leitura será falsa.",
    "Coloque o multímetro na escala de Resistência (Ohms - Ω) adequada.",
    "Meça a resistência diretamente nos terminais do componente.",
    "Atenção: A temperatura do motor influencia na leitura (especialmente estator, bobina, sensores ECT/EOT). Respeite a temperatura indicada no manual (geralmente motor frio).",
    "",
    "DIAGNÓSTICO DE FALHAS:",
    "1. Resistência Infinita (OL): O componente interno está rompido (circuito aberto). Requer substituição.",
    "2. Resistência Abaixo do Padrão: Curto-circuito interno nas espiras do enrolamento (ex: bobina ou estator com isolamento comprometido).",
    "3. Resistência Acima do Padrão: Oxidação nos terminais do componente, solda fria interna ou degradação do material condutor.",
  ],
  PV: [
    "É obrigatório o uso de um adaptador de Pico de Voltagem conectado ao multímetro (em VDC) ou um multímetro com função Peak Hold real.",
    "Conecte as pontas de prova em paralelo com o circuito (ex: fio de sinal da bobina de pulso e aterramento).",
    "Não desconecte o módulo CDI/ECU, a menos que o manual peça.",
    "Dê partida no motor (pelo motor de partida ou pedal, com força) ou acelere na rotação especificada.",
    "O valor exibido será a voltagem máxima de pico gerada. Compare com o padrão mínimo do manual.",
    "",
    "DIAGNÓSTICO DE FALHAS:",
    "1. Abaixo do padrão (Bobinas/Estator): Falha de isolamento, espiras em curto, ímã do volante desmagnetizado ou rotação de partida muito baixa.",
    "2. Abaixo do padrão (Sensores CKP/CMP): Folga excessiva entre o sensor e a roda fônica, sujeira (limalha) na ponta magnética, ou defeito no enrolamento interno.",
    "3. Zero Volts: Circuito interrompido, aterramento deficiente, falha grave no componente gerador do sinal.",
  ],
  CC: [
    "Ignição DESLIGADA.",
    "Desconecte ambas as extremidades do fio que será testado (para isolar o circuito).",
    "Coloque o multímetro na escala de Continuidade (Bipe) ou Resistência (Ohms).",
    "Conecte uma ponta no fio isolado e a outra ponta no negativo da bateria (ou chassi/motor).",
    "Se o multímetro emitir bipe ou apresentar continuidade (próximo de 0Ω), o fio está em curto-circuito com o terra (descascado encostando no chassi).",
    "",
    "DIAGNÓSTICO DE FALHAS:",
    "1. Continuidade com o Terra: Fio desencapado encostando no chassi metálico da moto, umidade nos conectores, fiação esmagada sob carenagens/tanque.",
    "2. Fio derretido: Em casos severos de curto-circuito (especialmente cabos positivos), a proteção falhou e o fio superaqueceu, fundindo o isolamento plástico.",
  ],
  CA: [
    "Ignição DESLIGADA.",
    "Coloque o multímetro na escala de Continuidade (Bipe) ou Resistência (Ohms).",
    "Conecte uma ponta do multímetro em uma extremidade do fio e a outra ponta na outra extremidade do mesmo fio.",
    "Deve haver continuidade (bipar ou marcar menos de 1Ω). Se não bipar e marcar 'OL' (Open Loop), o fio está rompido/quebrado internamente.",
    "",
    "DIAGNÓSTICO DE FALHAS:",
    "1. Circuito Aberto (Sem Continuidade): Fio partido internamente (muito comum em regiões de articulação do guidão), terminal quebrado ou solto de dentro do conector de plástico.",
    "2. Alta Resistência (Marcando valor alto e sem bip): Fio esmagado com filamentos rompidos (mas não totalmente cortado) ou severa oxidação (zinabre) na extensão do fio.",
  ],
  SN: [
    "Ignição LIGADA.",
    "Mantenha o sensor CONECTADO ao chicote. Use uma agulha fina por trás do conector (back-probe) para acessar o contato sem perfurar a isolação do fio.",
    "Multímetro em VDC. Ponta preta no terra do sensor (ou bateria), ponta vermelha na agulha no fio de sinal.",
    "Teste dinâmico: se for TPS, acelere suavemente e veja se a voltagem sobe sem cortes; se for sensor de velocidade, gire a roda devagar, etc.",
    "",
    "DIAGNÓSTICO DE FALHAS:",
    "1. Sinal Incorreto ou Travado: Sensor danificado internamente, falha no seu aterramento ou na tensão de alimentação (5V), componente mecânico emperrado (ex: borboleta não abrindo toda).",
    "2. Sinal com 'Buracos' ou Cortes: Pista resistiva gasta (TPS), mau contato no chicote, picos de vibração que cortam a conexão intermitentemente.",
    "3. Ausência de Sinal: Fio partido entre o sensor e o módulo, sensor totalmente inoperante.",
  ],
  MM: [
    "Utilize a ferramenta de precisão adequada: Calibrador de lâminas, paquímetro ou micrômetro.",
    "Ajuste ou posicione o componente conforme as instruções do manual.",
    "Insira a ferramenta de medição e verifique se a folga ou dimensão está dentro da tolerância do padrão de fábrica.",
    "",
    "DIAGNÓSTICO DE FALHAS:",
    "1. Medida Acima do Padrão: Desgaste mecânico natural das peças em atrito (cilindros, anéis, embreagem) ou parafusos afrouxando (aumentando a folga de válvulas).",
    "2. Medida Abaixo do Padrão: Assentamento das peças, retentores gastos, expansão térmica não prevista, ou sujeira impedindo o fechamento (diminuindo folga).",
  ],
  PR: [
    "Utilize o manômetro adequado para o sistema.",
    "Conecte a ferramenta no ponto de teste especificado.",
    "Acione o sistema e compare o valor máximo com o padrão de fábrica.",
    "",
    "DIAGNÓSTICO DE FALHAS:",
    "1. Pressão Baixa: Bomba desgastada, vazamento na linha, regulador de pressão danificado não retendo pressão (aberto).",
    "2. Pressão Alta: Regulador de pressão travado fechado ou mangueira de retorno obstruída/dobrada.",
    "3. Queda Rápida de Pressão: Vazamento por anéis de vedação ou sistema falhando em manter pressão residual (regulador não segurando a pressão de retorno).",
  ],
  VZ: [
    "BOMBA DE COMBUSTÍVEL: Conecte a mangueira de saída da bomba diretamente num proveta (recipiente graduado em ml).",
    "Desconecte a alimentação da bobina de ignição para evitar faísca.",
    "Faça um jumper no relé da bomba ou acione a ignição repetidas vezes para que a bomba funcione pelo tempo exato pedido no manual (geralmente 10 seg).",
    "Leia o volume coletado no proveta e compare com o mínimo estipulado.",
    "",
    "DIAGNÓSTICO DE FALHAS:",
    "1. Vazão Baixa: Bomba de combustível cansada/desgastada internamente, filtro/pré-filtro de combustível severamente obstruído, ou tensão elétrica chegando na bomba abaixo de 12V (mau contato, bateria fraca).",
    "2. Vazão Inexistente: Bomba travada ou queimada, fusível queimado, circuito interrompido ou módulo/relé não enviando o comando.",
  ],
  "PR/VZ": [
    "Necessário um manômetro de combustível que possua válvula de alívio e mangueira de descarte.",
    "Primeiro meça a Pressão do sistema com a válvula fechada (motor funcionando ou bomba acionada).",
    "Com a bomba acionada e o sistema pressurizado, abra a válvula de alívio despejando o combustível num proveta por 10 segundos.",
    "Este teste é excelente para pegar bombas de combustível 'cansadas' (vazão sob carga).",
    "",
    "DIAGNÓSTICO DE FALHAS:",
    "1. Pressão Boa / Vazão Baixa: O regulador de pressão e a vedação estão bons, mas a capacidade da bomba de deslocar volume sob resistência está comprometida (bomba desgastada ou filtro obstruído).",
    "2. Pressão Baixa / Vazão Alta: A bomba envia bastante volume, mas o regulador não está segurando a pressão no sistema (molas cansadas ou preso aberto).",
  ],
};

const pvIgnitionComponent: ComponentData = {
  id: "pv-ignition",
  name: "Bobina de Ignição",
  type: "actuator",
  shortDescription: "",
  fullDescription: "",
  waveType: "ignition",
  oscilloscopeSetup: {
    timeDiv: "5ms/div a 10ms/div",
    voltageDiv: "50V/div ou 100V/div",
    triggerMode: "Normal/Auto",
    triggerEdge: "Subida/Descida",
    triggerLevel: "Varia",
    coupling: "DC",
    axis: "Y/T",
  },
  waveformExplanation: "",
  waveformPhases: [
    {
      id: 1,
      title: "Dwell",
      description: "Carregamento da bobina.",
      x: 30,
      y: 80,
      labelX: 30,
      labelY: 90,
    },
    {
      id: 2,
      title: "Disparo",
      description: "Pico de tensão (Centelha).",
      x: 46,
      y: 10,
      labelX: 35,
      labelY: 10,
    },
    {
      id: 3,
      title: "Queima",
      description: "Tempo de queima da faísca.",
      x: 50,
      y: 48,
      labelX: 50,
      labelY: 35,
    },
    {
      id: 4,
      title: "Oscilações",
      description: "Dissipação de energia.",
      x: 64,
      y: 35,
      labelX: 75,
      labelY: 25,
    },
  ],
};

const getTutorialSteps = (tipo: string, localizacao: string): string[] => {
  const loc = localizacao.toUpperCase();

  if (tipo === "AL") {
    if (
      loc.includes("ESTATOR") ||
      loc.includes("V~") ||
      loc.includes("VAC") ||
      loc.includes("ALTERNADA")
    ) {
      return [
        "1. Desconecte o conector do estator ou siga a orientação do manual para medição.",
        "2. Coloque o multímetro na escala de Corrente Alternada (VAC ou V~), geralmente na escala de 200V~.",
        "3. Conecte as pontas de prova entre os fios do estator (fase com fase ou fase e terra, dependendo da moto).",
        "4. Funcione o motor na rotação especificada (marcha lenta ou acelerado, ex: 5000 RPM).",
        "5. A voltagem gerada deve atingir ou ultrapassar o padrão mínimo exigido.",
        "",
        "DIAGNÓSTICO DE FALHAS:",
        "1. Voltagem muito baixa ou zero: Uma ou mais bobinas do estator podem estar queimadas ou em curto. Pode haver desmagnetização do volante (raro).",
        "2. Voltagem de uma fase diferente das outras (em estator trifásico): Aquela fase específica do estator está queimada.",
      ];
    } else if (loc.includes("BATERIA") || loc.includes("CARGA")) {
      return [
        "1. Coloque o multímetro na escala de Corrente Contínua (VDC ou V⎓), geralmente em 20V.",
        "2. Conecte as pontas de prova nos terminais da bateria (Vermelha no positivo, Preta no negativo).",
        "3. Leia a tensão da bateria em repouso.",
        "4. Dê partida no motor, acelere gradativamente até a rotação de teste (ex: 5000 RPM) e observe a tensão máxima de carga.",
        "",
        "DIAGNÓSTICO DE FALHAS:",
        "1. Tensão de carga muito alta (ex: >15V): Regulador/Retificador defeituoso (não cortando a carga). Risco grave de queimar bateria, módulos e lâmpadas.",
        "2. Tensão não sobe acelerando: Problema no estator (não gerando), no regulador/retificador (não retificando/não liberando carga) ou fiação/aterramento defeituoso entre as peças.",
      ];
    }
  }

  if (tipo === "PR") {
    if (loc.includes("COMPRESSÃO") || loc.includes("CILINDRO")) {
      return [
        "1. Aqueça o motor até a temperatura normal de funcionamento.",
        "2. Desligue a ignição e remova a vela de ignição.",
        "3. Instale o manômetro de compressão no orifício da vela.",
        "4. ABRA TOTALMENTE O ACELERADOR.",
        "5. Dê partida contínua por alguns segundos até o ponteiro do manômetro parar de subir.",
        "6. Anote a pressão máxima e compare com o limite padrão de fábrica.",
        "",
        "DIAGNÓSTICO DE FALHAS:",
        "1. Pressão Baixa: Desgaste nos anéis de segmento/cilindro (teste colocando um pouco de óleo no cilindro - se subir a pressão, é anel), vazamento pelas sedes das válvulas (não assentando direito) ou junta do cabeçote queimada.",
      ];
    } else if (loc.includes("COMBUSTÍVEL") || loc.includes("BOMBA")) {
      return [
        "1. Conecte o manômetro de pressão em série com a linha de combustível.",
        "2. Ligue a ignição e aguarde a bomba pressurizar o sistema (ou funcione o motor na marcha lenta).",
        "3. Verifique se a pressão atinge o padrão de fábrica e se estabiliza.",
        "4. Acelere o motor e veja se a pressão se mantém firme sem grandes quedas.",
        "",
        "DIAGNÓSTICO DE FALHAS:",
        "1. Pressão Baixa: Refil da bomba gasto, vazamento interno nas mangueiras do conjunto, ou regulador de pressão com mola cansada (abrindo antes da hora).",
        "2. Pressão Alta: Filtro obstruído (se o teste for antes dele) ou regulador de pressão travado fechado.",
        "3. Pressão cai rápido ao desligar: Regulador de pressão não estanca ou bico injetor gotejando/vazando.",
      ];
    } else if (loc.includes("ÓLEO")) {
      return [
        "1. Remova o interruptor ou bujão de pressão de óleo do motor.",
        "2. Instale o manômetro no local.",
        "3. Funcione o motor até atingir a temperatura normal de operação.",
        "4. Verifique a pressão na rotação especificada pelo manual.",
        "",
        "DIAGNÓSTICO DE FALHAS:",
        "1. Baixa Pressão de Óleo: Bomba de óleo desgastada, folga excessiva nos mancais/bronzinas do motor (vazamento interno da pressão), filtro de óleo severamente entupido, ou válvula de alívio presa aberta.",
        "2. Alta Pressão: Válvula de alívio da bomba de óleo presa fechada ou obstrução grave nas galerias do motor.",
      ];
    }
  }

  if (tipo === "MM") {
    if (loc.includes("VÁLVULA")) {
      return [
        "1. O motor DEVE estar completamente frio.",
        "2. Coloque o pistão no PMS (Ponto Morto Superior) do tempo de compressão, alinhando as marcas no magneto e comando.",
        "3. Insira a lâmina exata do calibrador entre a válvula e o balancim/tucho.",
        "4. A lâmina deve passar com leve 'arrasto'. Se passar solta ou prender, o ajuste é necessário.",
        "",
        "DIAGNÓSTICO DE FALHAS:",
        "1. Válvula muito presa (sem folga): A válvula pode não fechar completamente, causando perda de compressão, marcha lenta irregular e risco de carbonização/queima da sede da válvula.",
        "2. Válvula muito solta: Excesso de ruído metálico (batida de válvula), alteração no tempo de abertura e fechamento das válvulas (perda de performance e maior consumo).",
      ];
    } else if (loc.includes("CILINDRO") || loc.includes("PISTÃO")) {
      return [
        "1. Utilize um súbito ou micrômetro.",
        "2. Meça o diâmetro em três posições diferentes (topo, meio, base) e em dois eixos cruzados (X e Y).",
        "3. Calcule a folga, ovalização e conicidade, comparando com o limite de serviço.",
        "",
        "DIAGNÓSTICO DE FALHAS:",
        "1. Acima do Limite de Serviço: Se o cilindro estiver excessivamente gasto, ovalizado ou cônico, haverá queima de óleo (fumaça azul) e perda de compressão. Requer retífica.",
      ];
    }
  }

  if (tipo === "PV") {
    if (loc.includes("BOBINA DE IGNIÇÃO")) {
      return [
        "COM MULTÍMETRO + ADAPTADOR DE PICO:",
        "1. Conecte o adaptador de pico de voltagem ao multímetro (escala de Corrente Contínua - VDC).",
        "2. Conecte as pontas de prova em paralelo com o primário da bobina de ignição e o terra.",
        "3. Dê partida no motor (pelo motor de partida ou pedal) e leia a voltagem máxima atingida.",
        "",
        "COM OSCILOSCÓPIO:",
        "1. Ajuste a tensão (Tensão/Div) para capturar picos altos, geralmente 50V/div ou 100V/div.",
        "2. Ajuste o tempo (Tempo/Div) para algo como 5ms/div a 10ms/div para ver o disparo da faísca.",
        "3. Trigger em modo Normal ou Auto, borda de subida/descida (conforme a polaridade do pulso).",
        "4. Conexão: É obrigatório o uso de atenuador (ex: 20:1) para não queimar o aparelho. Conecte a garra preta no negativo da bateria ou chassi e espete a ponta de prova (com o atenuador) no fio de sinal (pulso da ECU/CDI) do primário da bobina.",
        "5. Dê a partida ou funcione o motor e analise o pico indutivo na tela.",
        "6. PADRÃO DA ONDA: O sinal mostra a tensão da bateria no repouso, vai a 0V no carregamento (Dwell), sobe num pico vertical de alta tensão no disparo (podendo passar de 400V), estabiliza no tempo de queima (faísca) e finaliza com oscilações residuais voltando à tensão da bateria.",
        "",
        "DIAGNÓSTICO DE FALHAS:",
        "1. Pico abaixo do mínimo: Pode indicar resistência alta no circuito, fuga de centelha (cabo/cachimbo trincado), curto-circuito interno na bobina ou falha no aterramento/alimentação do módulo de ignição.",
        "2. Sem oscilações residuais: Se após o tempo de queima a onda não apresenta oscilações dissipando a energia, é um forte indício de curto-circuito interno nas espiras da bobina.",
      ];
    }
  }

  if (tipo === "-" || loc.includes("FUGA")) {
    if (loc.includes("FUGA")) {
      return [
        "1. Certifique-se de que a ignição da motocicleta está DESLIGADA.",
        "2. Desconecte o cabo negativo (-) da bateria.",
        "3. Coloque o multímetro na escala de Corrente Contínua (Ampères ou miliAmpères - mA). Atenção para usar os bornes corretos no multímetro para medição de corrente.",
        "4. Conecte a ponta vermelha do multímetro no cabo negativo do chicote (que foi solto) e a ponta preta no terminal negativo (-) da bateria (ligação em série).",
        "5. Leia a corrente de fuga. Se o valor for maior que o padrão máximo, há algum componente consumindo carga indevidamente com a moto desligada.",
        "",
        "DIAGNÓSTICO DE FALHAS:",
        "1. Fuga alta: Acessórios instalados incorretamente (rastreadores, alarmes diretos na bateria), retificador/regulador em curto, chave de ignição com contatos carbonizados conduzindo internamente ou curto-circuito em chicote úmido/esmagado.",
      ];
    }
  }

  return defaultTutorialData[tipo] || [];
};

function getMultimeterConfig(
  tipo: string,
  padrao: string,
): { setting: any; displayValue?: string } | null {
  if (tipo === "CC" || tipo === "CA" || tipo === "Contín.") {
    return { setting: "Continuity", displayValue: "0.00" };
  }

  const lowerPadrao = (padrao || "").toLowerCase();

  if (
    tipo === "AL" ||
    tipo === "SN" ||
    tipo === "Volt. Bat" ||
    tipo === "PV" ||
    lowerPadrao.includes("v") ||
    lowerPadrao.includes("volts") ||
    lowerPadrao.includes("vdc") ||
    lowerPadrao.includes("vac")
  ) {
    // If it's AC voltage
    if (
      lowerPadrao.includes("acv") ||
      lowerPadrao.includes("vac") ||
      lowerPadrao.includes("alternada") ||
      tipo === "PV"
    ) {
      return { setting: "ACV_200", displayValue: "0.00" };
    }
    // Default to DC
    return { setting: "DCV_20", displayValue: "0.00" };
  }

  if (
    tipo === "RS" ||
    lowerPadrao.includes("ohm") ||
    lowerPadrao.includes("ω") ||
    lowerPadrao.includes("kω")
  ) {
    let setting = "OHM_200";
    // Check if there are numbers
    const numMatch = (padrao || "").match(/(\d+[\.,]?\d*)/);
    if (numMatch) {
      let numStr = numMatch[1].replace(",", ".");
      let num = parseFloat(numStr);
      if (lowerPadrao.includes("k")) num *= 1000;

      if (num < 200) setting = "OHM_200";
      else if (num < 2000) setting = "OHM_2000";
      else if (num < 20000) setting = "OHM_20K";
      else if (num < 200000) setting = "OHM_200K";
      else setting = "OHM_2000K";
    }
    return { setting, displayValue: "1 .  " };
  }

  return null;
}

export function DiagnosticParametersView({ brand,
  models,
  onBack,
}: DiagnosticParametersViewProps) {
  useBackButton(true, onBack);

  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);
  const [selectedAbbr, setSelectedAbbr] = useState<{
    key: string;
    description: string;
  } | null>(null);
  const [selectedTutorial, setSelectedTutorial] = useState<{
    key: string;
    title: string;
    steps: string[];
    padrao: string;
  } | null>(null);
  const [selectedMultimeter, setSelectedMultimeter] = useState<{
    setting: any;
    displayValue?: string;
  } | null>(null);

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
    const foundKey = Object.keys(legendData).find((key) => text.includes(key));
    if (foundKey) {
      setSelectedAbbr({ key: foundKey, description: legendData[foundKey] });
    }
  };

  const selectedModel = models.find((m) => m.id === selectedModelId);

  // Reusable modal for abbreviations
  const abbrModal = (
    <AnimatePresence>
      {selectedAbbr && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white dark:bg-gray-900 backdrop-blur-sm"
          onClick={() => setSelectedAbbr(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-2xl p-6 max-w-sm w-full shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-mono font-bold text-red-600">
                {selectedAbbr.key}
              </h3>
              <button
                onClick={() => setSelectedAbbr(null)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              {selectedAbbr.description}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Reusable modal for multimeter
  const multimeterModal = (
    <AnimatePresence>
      {selectedMultimeter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedMultimeter(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 rounded-[2rem] p-6 max-w-sm w-full shadow-2xl flex flex-col items-center"
          >
            <div className="w-full flex justify-end mb-2">
              <button
                onClick={() => setSelectedMultimeter(null)}
                className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-8 text-center uppercase tracking-widest">
              Ajuste do Multímetro
            </h3>
            <div className="transform scale-[1.3] mb-12 origin-top">
              <MultimeterVisual
                setting={selectedMultimeter.setting}
                displayValue={selectedMultimeter.displayValue}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Reusable modal for tutorials
  const tutorialModal = (
    <AnimatePresence>
      {selectedTutorial && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white dark:bg-gray-900 backdrop-blur-sm"
          onClick={() => setSelectedTutorial(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-2xl p-6 max-w-md w-full shadow-2xl flex flex-col max-h-[85vh]"
          >
            <div className="flex items-center justify-between mb-6 shrink-0">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <Info className="w-5 h-5 text-red-600" />
                  Como testar - {selectedTutorial.title}
                </h3>
                <p className="text-xs text-red-600 font-mono mt-1">
                  TESTE TIPO: {selectedTutorial.key}
                </p>
              </div>
              <button
                onClick={() => setSelectedTutorial(null)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 rounded-full transition-colors self-start"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto pr-2 space-y-4">
              {selectedTutorial.steps.map((step, idx) => {
                const isHeader =
                  step.startsWith("COM ") ||
                  step.startsWith("TESTE ") ||
                  step.startsWith("DIAGNÓSTICO");
                const isSpacing = step === "";

                if (isSpacing) return <div key={idx} className="h-2" />;

                if (isHeader) {
                  return (
                    <div
                      key={idx}
                      className="mt-4 mb-1 border-b border-gray-200 dark:border-gray-700 pb-1"
                    >
                      <p className="font-bold text-red-600 text-xs tracking-wider">
                        {step}
                      </p>
                    </div>
                  );
                }

                let content = step;
                let numberStr = (idx + 1).toString();
                const match = step.match(/^(\d+)\.\s+(.*)/);
                let isWaveform = false;

                if (match) {
                  numberStr = match[1];
                  content = match[2];
                }

                if (content.startsWith("PADRÃO DA ONDA:")) {
                  numberStr = "";
                  isWaveform = true;
                  content = content.replace("PADRÃO DA ONDA:", "").trim();
                }

                return (
                  <div
                    key={idx}
                    className={`flex gap-3 ${isWaveform ? "flex-col bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700 mt-4" : ""}`}
                  >
                    <div className="flex gap-3">
                      {numberStr && (
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-600 text-xs font-bold font-mono mt-0.5">
                          {numberStr}
                        </div>
                      )}
                      <div className="flex-1">
                        {isWaveform && (
                          <p className="text-red-600 text-xs font-bold mb-1 flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5" />
                            PADRÃO DA ONDA
                          </p>
                        )}
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {content}
                        </p>
                      </div>
                    </div>
                    {isWaveform &&
                      selectedTutorial.title.includes("BOBINA DE IGNIÇÃO") && (
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700/80">
                          <OscilloscopeDisplay
                            component={pvIgnitionComponent}
                          />
                        </div>
                      )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (selectedModel) {
    return (
      <div className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100 flex flex-col">
        <header className="px-6 pt-12 pb-5 border-b border-gray-200 dark:border-gray-700/80">
          <div className="flex items-center gap-4 max-w-4xl mx-auto w-full">
            <button
              onClick={() => setSelectedModelId(null)}
              className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 shadow-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:text-gray-100 transition-all active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight line-clamp-1">
                {selectedModel.name}
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-red-600 font-bold mt-0.5">
                Especificações Técnicas
              </p>
            </div>
          </div>
        </header>

        <main
          key={selectedModel.id}
          className="flex-1 p-4 md:p-6 overflow-y-auto"
        >
          <div className="max-w-4xl mx-auto space-y-10 pb-12">
            {selectedModel.tables.map((table, tIdx) => (
              <div key={tIdx} className="space-y-4">
                <h3 className="text-sm font-bold text-red-600 flex items-center justify-between uppercase tracking-widest border-b border-gray-200 dark:border-gray-700/80 pb-2">
                  <span>{table.name}</span>
                  {table.notes && (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                      {table.notes}
                    </span>
                  )}
                </h3>
                <div className="overflow-x-auto rounded-[1.5rem] border border-gray-200 dark:border-gray-700/60 shadow-sm bg-white dark:bg-gray-900 backdrop-blur-sm shadow-xl">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <thead className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
                      <tr>
                        <th className="px-4 py-4 font-semibold uppercase tracking-wider text-[11px]">
                          Padrão
                        </th>
                        <th className="px-4 py-4 font-semibold uppercase tracking-wider text-[11px]">
                          Localização
                        </th>
                        <th className="px-4 py-4 font-semibold uppercase tracking-wider text-[11px] text-center">
                          Tipo
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {table.rows.map((row, rIdx) => {
                        // Replace hyphen with newline ' a ' newline for numeric ranges to avoid confusion with minus sign and stack them
                        const formattedPadrao = (row.padrao || "")
                          .replace(
                            /(\d+(?:,\d+)?)\s*-\s*(\d+(?:,\d+)?)/g,
                            "$1\n a \n$2",
                          )
                          .replace(
                            /(\d+(?:,\d+)?)\s*±\s*(\d+(?:,\d+)?)/g,
                            (match, p1, p2) => {
                              const base = parseFloat(p1.replace(",", "."));
                              const tol = parseFloat(p2.replace(",", "."));
                              const dec = Math.max(
                                p1.includes(",") ? p1.split(",")[1].length : 0,
                                p2.includes(",") ? p2.split(",")[1].length : 0,
                              );
                              const min = (base - tol)
                                .toFixed(dec)
                                .replace(".", ",");
                              const max = (base + tol)
                                .toFixed(dec)
                                .replace(".", ",");
                              return `Entre ${min} e ${max}\n(Ideal: ${p1})`;
                            },
                          );

                        // Highlight recognizable abbreviations in row.padrao
                        let padraoDisplay: React.ReactNode = formattedPadrao;
                        const matchKey = Object.keys(legendData).find((k) =>
                          formattedPadrao.includes(k),
                        );
                        if (matchKey) {
                          const parts = formattedPadrao.split(matchKey);
                          padraoDisplay = (
                            <>
                              {parts[0]}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAbbrClick(matchKey);
                                }}
                                className="text-red-600 underline decoration-red-600/50 underline-offset-2 active:text-cyan-700 inline-block"
                              >
                                {matchKey}
                              </button>
                              {parts[1]}
                            </>
                          );
                        }

                        const formattedLocalizacao = (row.localizacao || "")
                          .replace(/\s+\+/g, "\u00A0+")
                          .replace(/\s+\-/g, "\u00A0-");

                        return (
                          <tr
                            key={rIdx}
                            className="hover:bg-gray-100 dark:bg-gray-800 transition-colors"
                          >
                            <td className="px-4 py-4 text-gray-900 dark:text-gray-100 font-mono text-[11px] sm:text-xs whitespace-pre-line text-center sm:text-left">
                              {padraoDisplay}
                            </td>
                            <td className="px-4 py-4 text-gray-700 dark:text-gray-300 text-[11px] sm:text-xs">
                              {formattedLocalizacao}
                            </td>
                            <td className="px-4 py-4 text-center">
                              <div className="flex flex-col items-center gap-2">
                                <button
                                  onClick={() => handleAbbrClick(row.tipo)}
                                  className="inline-block px-2 py-1 bg-red-600/10 hover:bg-red-600/20 border border-red-600/20 active:scale-95 rounded text-red-600 font-mono font-bold text-[10px] transition-all cursor-pointer"
                                >
                                  {row.tipo}
                                </button>
                                {getTutorialSteps(row.tipo, row.localizacao)
                                  .length > 0 && (
                                  <button
                                    onClick={() =>
                                      setSelectedTutorial({
                                        key: row.tipo,
                                        title: row.localizacao,
                                        steps: getTutorialSteps(
                                          row.tipo,
                                          row.localizacao,
                                        ),
                                        padrao: row.padrao || "",
                                      })
                                    }
                                    className="w-full max-w-[90px] flex items-center justify-center gap-1.5 px-2 py-1.5 bg-red-600/10 hover:bg-red-600/20 text-red-600 rounded-md text-[10px] font-bold transition-colors border border-red-600/20"
                                  >
                                    <Info className="w-3 h-3" />
                                    Testar
                                  </button>
                                )}
                                {getMultimeterConfig(
                                  row.tipo,
                                  row.padrao || "",
                                ) && (
                                  <button
                                    onClick={() =>
                                      setSelectedMultimeter(
                                        getMultimeterConfig(
                                          row.tipo,
                                          row.padrao || "",
                                        ),
                                      )
                                    }
                                    className="w-full max-w-[90px] flex items-center justify-center gap-1.5 px-2 py-1.5 bg-blue-600/10 hover:bg-blue-600/20 text-blue-600 rounded-md text-[10px] font-bold transition-colors border border-blue-600/20"
                                  >
                                    <Activity className="w-3 h-3" />
                                    Multímetro
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </main>

        {abbrModal}
        {tutorialModal}
      </div>
    );
  }

  // If no model is selected, show the list of models + legend
  return (
    <div className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100 flex flex-col">
      <header className="px-6 pt-12 pb-5 border-b border-gray-200 dark:border-gray-700/80">
        <div className="flex items-center gap-4 max-w-4xl mx-auto w-full">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 shadow-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:text-gray-100 transition-all active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
              Parâmetros: <span className="text-red-600">{brand}</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-600 dark:text-gray-400 font-bold mt-0.5">
              Selecione o Modelo
            </p>
          </div>
        </div>
      </header>

      <main key="list" className="flex-1 p-4 md:p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-8 pb-12">
          {/* Legendas e Abreviações */}
          <div className="bg-red-600/5 border border-red-600/20 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-sm font-bold text-red-600 mb-4 flex items-center gap-2 uppercase tracking-widest">
              <Info className="w-4 h-4" />
              Legenda de Siglas e Abreviações
            </h2>
            <p className="text-sm text-red-600/60 mb-6">
              Toque em qualquer sigla na tabela para ver o seu significado, ou
              consulte a lista abaixo:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {Object.entries(legendData).map(([key, desc]) => (
                <div key={key} className="flex items-start gap-3 text-sm">
                  <span className="font-mono font-bold text-red-600 bg-red-600/10 px-1.5 py-0.5 rounded border border-red-600/20 text-[11px] mt-0.5">
                    {key}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300/80 leading-snug">{desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest px-2">
              Modelos Disponíveis
            </h2>
            {models.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700/60 shadow-sm">
                <p className="text-gray-600 dark:text-gray-400">
                  Nenhum modelo cadastrado para {brand}.
                </p>
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {models.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModelId(model.id)}
                    className="group w-full flex items-center justify-between p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700/60 shadow-sm rounded-2xl text-left hover:bg-gray-200 dark:bg-gray-700/60 hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg transition-all shadow-sm active:scale-[0.98]"
                  >
                    <span className="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-red-600 transition-colors">
                      {model.name}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-red-600/10 transition-colors">
                      <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-red-600 -rotate-90 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {abbrModal}
      {tutorialModal}
    </div>
  );
}
