import { ComponentData } from "../types";

export const componentsDB: ComponentData[] = [
  {
    id: "cdi-dc",
    name: "CDI DC (Ignição Capacitiva)",
    type: "actuator",
    shortDescription: "Módulo de ignição alimentado pela bateria (12V) que descarrega energia na bobina.",
    fullDescription:
      "O CDI DC (Corrente Contínua) possui um conversor interno que eleva os 12V da bateria para cerca de 200V a 400V, armazenando em um capacitor. Ao receber o sinal do CKP, ele descarrega essa energia instantaneamente no primário da bobina de ignição, gerando a faísca. A grande diferença para o CDI AC é que a alimentação vem da bateria pós-chave e não do estator.",
    oscilloscopeSetup: {
      timeDiv: "5ms a 10ms",
      voltageDiv: "50V a 100V (Atenção: picos podem passar de 200V, use atenuador!)",
      triggerEdge: "Subida",
      triggerMode: "Normal",
      triggerLevel: "20V a 50V",
    },
    connectionInstructions:
      "Conecte a garra jacaré preta ao negativo da bateria ou chassi. Conecte a ponta de prova (canal 1), OBRIGATORIAMENTE com atenuador (ex: 20:1) se não suportar altas tensões, no fio que vai do CDI para a Bobina de Ignição.",
    waveformExplanation:
      "A forma de onda de saída do CDI DC para a bobina é semelhante à do CDI AC: um pico de tensão positivo de curtíssima duração, seguido de oscilações amortecidas.\n\nComportamento em Falhas:\n• Sem pico de tensão: Verifique se chegam 12V no CDI (pós-chave). Sem bateria carregada, o CDI DC não funciona.\n• Oscilação muito curta: Curto no primário da bobina de ignição ou fuga de corrente no sistema de ignição.",
    waveformPhases: [
      {
        id: 1,
        title: "Disparo do Capacitor",
        description: "O CDI libera a energia armazenada (elevada a partir dos 12V) para o primário da bobina de ignição.",
        x: 20,
        y: 20,
        labelX: 10,
        labelY: 10,
      },
      {
        id: 2,
        title: "Oscilação Amortecida",
        description: "Dissipação da energia restante no circuito da bobina após o disparo principal.",
        x: 30,
        y: 60,
        labelX: 40,
        labelY: 80,
      }
    ],
    waveType: "cdi",
    multimeter: {
      setting: "Tensão Contínua (DCV) e Pico de Tensão (Peak Hold)",
      instructions: "1. No fio de alimentação do CDI, meça tensão contínua (deve ter próximo de 12V).\n2. No fio de saída para a bobina, use adaptador de Pico (Peak Hold) para capturar o pico de disparo na partida.",
      expectedValue: "Alimentação 12V constante (DCV). Disparo com pico alto na partida (Peak)."
    },
    symptoms: [
      "Motor não pega se a bateria estiver descarregada",
      "Cortes em aceleração caso haja queda de tensão 12V",
      "Moto apaga subitamente"
    ],
  },

  {
    id: "ckp-indutivo",
    name: "Sensor CKP (Rotação) - Indutivo",
    type: "sensor",
    shortDescription: "Mede a rotação do motor e Ponto Morto Superior (PMS).",
    fullDescription:
      "O sensor de rotação indutivo é um gerador de corrente alternada. Ele cria um campo magnético que é alterado pela passagem dos dentes da roda fônica. A lacuna de dentes indica para a ECU a posição exata do virabrequim (PMS). A amplitude do sinal aumenta conforme a aceleração da moto.",
    oscilloscopeSetup: {
      timeDiv: "10ms a 20ms",
      voltageDiv: "5V a 10V (pode gerar mais de 50V em alta rotação)",
      triggerEdge: "Subida ou Descida",
      triggerMode: "Normal",
      triggerLevel: "2V a 5V",
    },
    connectionInstructions:
      "Conecte a garra jacaré preta no negativo da bateria ou em um bom ponto de aterramento do motor. Com a ponta de prova (canal 1), espete o fio de sinal do sensor CKP. Geralmente o sensor possui dois fios (sinal e referência negativa), meça nos dois se não souber qual é o de sinal.\n\n⚠️ IMPORTANTE: Só após realizar todas as conexões físicas do osciloscópio, LIGUE a chave de ignição e dê a partida no motor para realizar o teste.",
    waveformExplanation:
      `Imagine que o sensor de rotação (CKP) é como um microfone escutando os dentes da engrenagem do motor passarem. Toda vez que um dente de metal passa perto dele, ele gera uma onda no gráfico. 

Se a moto estiver na marcha lenta, as ondas ficam baixinhas. Se você acelerar, as ondas crescem e ficam mais espremidas, porque os dentes estão passando muito mais rápido. 

Comportamento e Defeitos:
• **Ondas Tortas ou Menores**: Pode indicar que a engrenagem (roda fônica) está torta, amassada ou tem sujeira metálica grudada no sensor.
• **Onda não cresce ao acelerar**: O sensor pode estar fraco ou muito longe da engrenagem.
• **O 'Buraco' (Gap)**: É o espaço sem dente na engrenagem. É a referência principal! Se o módulo não ver esse buraco perfeitamente desenhado na tela, ele não sabe a hora de dar a faísca e a moto não liga.`,
    waveformPhases: [
      {
        id: 1,
        title: "Aproximação do Dente (+)",
        description:
          `O dente de metal começa a passar perto do sensor, 'puxando' a linha do gráfico para cima. Se essa subida estiver fraca ou irregular, a roda fônica pode estar torta ou o sensor muito distante.`,
        x: 20,
        y: 35,
        labelX: 20,
        labelY: 10,
      },
      {
        id: 2,
        title: "Alinhamento / Cruzamento Zero (0V)",
        description:
          `O meio do dente está exatamente em frente ao sensor. Neste exato milissegundo, a força magnética não varia, então a linha cruza perfeitamente a marca de zero (0V). É aqui que o módulo 'lê' a posição com precisão.`,
        x: 24,
        y: 50,
        labelX: 10,
        labelY: 50,
      },
      {
        id: 3,
        title: "Afastamento do Dente (-)",
        description:
          `O dente vai se afastando e a linha desce rapidamente para a parte negativa. Se a descida não for simétrica com a subida, pode haver sujeira (limalha) no sensor distorcendo o campo.`,
        x: 28,
        y: 65,
        labelX: 28,
        labelY: 90,
      },
      {
        id: 4,
        title: "Sincronismo / Falha (Gap)",
        description:
          `O 'buraco' na engrenagem (falha de dentes) passa pelo sensor. Esse espaço longo gera a perturbação maior e serve para avisar o módulo: 'O pistão chegou no topo!'. Se não estiver perfeitamente desenhado, a moto não liga.`,
        x: 59,
        y: 25,
        labelX: 59,
        labelY: 10,
      },
    ],
    waveType: "sine-gap",
    multimeter: {
      setting: "OHM_2000",
      instructions: "Desconecte o sensor. Use a escala de Resistência (Ohms 2000). Meça entre os dois pinos do sensor. Para testar o sinal, conecte o sensor, coloque na escala de Tensão AC (200V) e dê a partida.",
      expectedValues: "Resistência: ~150 a 300 Ohms. Sinal Tensão AC: 1.5V a 5V+ durante a partida.",
      variesByModel: true,
      minValue: 150,
      maxValue: 300,
      unit: "Ω",
      temperatureObservation: "Recomenda-se medir a frio (20°C). Em muitos casos de defeito, ao esquentar o motor a resistência tende ao infinito (circuito aberto).",
    },
  },
  {
    id: "ckp-hall",
    name: "Sensor CKP (Rotação) - Hall",
    type: "sensor",
    shortDescription: "Sensor digital de rotação e fase.",
    fullDescription:
      "O sensor de efeito Hall emite um sinal digital (onda quadrada) para a ECU. Ele precisa de alimentação (geralmente 5V ou 12V), um aterramento e emite o sinal. É muito comum em motos modernas (ex: Honda) para controle ultrapreciso.",
    oscilloscopeSetup: {
      timeDiv: "10ms a 20ms",
      voltageDiv: "2V",
      triggerEdge: "Subida",
      triggerMode: "Normal",
      triggerLevel: "2.5V",
    },
    connectionInstructions:
      "Aterre a garra preta do osciloscópio no negativo da bateria. Identifique os fios do sensor (Alimentação 5V/12V, Terra e Sinal). Espete a ponta de prova do canal 1 no fio de Sinal. Você pode confirmar a alimentação espetando no fio positivo (deve ser uma linha reta de 5V ou 12V).\n\n⚠️ IMPORTANTE: Só após conectar as garras e espetar as agulhas com segurança, LIGUE a chave de ignição para alimentar o sensor e realizar o teste.",
    waveformExplanation:
      `O sensor Hall é mais moderno. Em vez de ler os dentes como um microfone criando ondas suaves, ele funciona como um 'interruptor' super rápido (Liga/Desliga). Ele entrega a informação já mastigada para o módulo em formato de quadrados perfeitos.

Comportamento e Defeitos:
• **Tamanho Fixo**: Não importa o quanto você acelere a moto, a altura do quadrado nunca muda. O que muda é que eles ficam mais finos e rápidos.
• **Problema de Aterramento (Fio Terra)**: A parte de baixo da onda DEVE encostar perfeitamente no 0V. Se ela ficar flutuando (não chegar no zero), o fio terra está com mau contato, e a moto vai falhar ou apagar do nada.
• **Cantos Arredondados**: Os cantos do quadrado devem ser retos como uma parede. Se começarem a ficar curvos, o sensor está 'cansado' ou o fio do sinal está com muita resistência (oxidado).`,
    waveformPhases: [
      {
        id: 1,
        title: "Nível Lógico Baixo (0V)",
        description:
          `O sensor encosta o sinal no 'terra' (0V). Atenção: se a linha inferior não ficar cravada no zero (flutuando acima), o fio terra tem mau contato, causando falhas graves em alta rotação.`,
        x: 15,
        y: 80,
        labelX: 15,
        labelY: 95,
      },
      {
        id: 2,
        title: "Borda de Subida/Descida",
        description:
          `Mudança instantânea de estado. Em um sensor bom, essa linha vertical é reta como uma parede. Se começar a ficar levemente curvada, o sensor está fadigado ou há excesso de resistência no fio.`,
        x: 21,
        y: 50,
        labelX: 8,
        labelY: 50,
      },
      {
        id: 3,
        title: "Nível Lógico Alto (Vref)",
        description:
          `A parte alta da onda (tensão de referência, 5V ou 12V). Deve ser uma linha plana e estável. Tremulações ou quedas aqui indicam mau funcionamento do regulador do módulo de injeção.`,
        x: 25,
        y: 20,
        labelX: 25,
        labelY: 5,
      },
      {
        id: 4,
        title: "Gap de Sincronismo",
        description:
          `A falha (buraco) na engrenagem gera esse patamar muito mais longo. É a assinatura de que o pistão chegou ao ponto morto superior, o referencial absoluto para injetar e dar faísca.`,
        x: 53,
        y: 80,
        labelX: 53,
        labelY: 95,
      },
    ],
    waveType: "square-gap",
    multimeter: {
      setting: "DCV_20",
      instructions: "Com a chave ligada e o sensor conectado: Meça a alimentação (escala de 20V DC) entre o positivo e terra. Meça o sinal espetando o fio de sinal e girando a roda levemente.",
      expectedValues: "Alimentação: 5V ou 12V. Sinal (Tensão DC): Oscila entre 0V e a tensão de alimentação (5V ou 12V) a cada dente.",
      variesByModel: true,
      minValue: 0,
      maxValue: 5,
      unit: "V",
      temperatureObservation: "Diferente do indutivo, não costuma ser afetado por temperatura, mas conectores sujos podem causar resistência que varia com a dilatação térmica.",
    },
  },
  {
    id: "injector",
    name: "Bico Injetor",
    type: "actuator",
    shortDescription: "Atuador eletromagnético que injeta combustível.",
    fullDescription:
      "O injetor é uma válvula solenoide. Ele recebe 12V constante (pós-chave ou relé) e a ECU controla o tempo de injeção aterrando o circuito (pulsando o negativo).",
    oscilloscopeSetup: {
      timeDiv: "1ms a 2ms",
      voltageDiv: "20V",
      triggerEdge: "Descida",
      triggerMode: "Normal",
      triggerLevel: "10V",
    },
    connectionInstructions:
      "Conecte a garra preta no negativo da bateria. No bico injetor há dois fios: um recebe alimentação constante (12V) e o outro é o pulso negativo controlado pela ECU. Espete a ponta de prova (canal 1) no fio de pulso negativo.\n\n⚠️ IMPORTANTE: Só após finalizar as conexões das garras e agulhas, LIGUE a chave de ignição e funcione o motor para realizar o teste.",
    waveformExplanation:
      `O bico injetor é uma 'torneira elétrica' com uma mola super forte dentro. O gráfico mostra exatamente a briga entre a força elétrica puxando para abrir a torneira, e a força da mola empurrando para fechar.

Comportamento e Defeitos:
• **Tempo de Abertura (Pulso 0V)**: É a largura da parte de baixo do gráfico. Se a moto estiver fria ou você acelerar, o módulo alarga essa parte para jogar mais combustível.
• **O Pico Alto (Flyback)**: Quando o módulo desliga o bico, a energia dá um 'coice' para cima (pode chegar a quase 100V). Se esse pico estiver muito baixinho (ex: só vai até 30V), a bobina de dentro do bico está queimando (em curto).
• **A 'Corcovinha' (Pintle Bump)**: O detalhe mais valioso! Aquela ondinha no meio da descida mostra o exato milissegundo em que a agulha de metal bateu no fundo fechando o bico. Se essa corcova sumir, significa que o bico travou aberto ou a mola quebrou (defeito mecânico grave, mesmo a parte elétrica estando boa!).`,
    waveformPhases: [
      {
        id: 1,
        title: "Repouso / Tensão de Alimentação",
        description:
          `Bico em repouso. A tensão da bateria está no circuito aguardando o módulo. O valor ideal deve estar entre um mínimo de 12V e um máximo de 14.5V (com motor ligado). Valores abaixo do mínimo indicam problema no relé ou fiação.`,
        x: 15,
        y: 70,
        labelX: 15,
        labelY: 50,
      },
      {
        id: 2,
        title: "Abertura (Tempo de Injeção)",
        description:
          `O módulo 'liga' o bico aterrando o fio (0V). Quanto mais larga for essa área baixa, mais combustível é injetado. Tempo padrão: de 2.0ms a 4.0ms em marcha lenta (mínimo típico). Em acelerações rápidas, pode chegar a um máximo de 10ms a 15ms. Se não encostar no 0V, o aterramento interno do módulo está comprometido.`,
        x: 42,
        y: 90,
        labelX: 42,
        labelY: 75,
      },
      {
        id: 3,
        title: "Pico Indutivo (Flyback)",
        description:
          `O módulo 'desliga' o bico. O campo magnético colapsa e cria um pico altíssimo. O pico ideal de tensão (Flyback) deve ter um mínimo de 60V e um máximo em torno de 100V. Se esse pico for muito baixo (ex: só sobe até 30V, abaixo do mínimo), a bobina do injetor está em curto.`,
        x: 55.5,
        y: 15,
        labelX: 45,
        labelY: 15,
      },
      {
        id: 4,
        title: "Fechamento Mecânico (Pintle Bump)",
        description:
          `A 'corcovinha' (Pintle Bump): O detalhe mais valioso! Mostra o momento exato em que a agulha de metal fecha fisicamente impulsionada pela mola. Se essa ondinha sumir, o bico travou mecanicamente ou a mola quebrou.`,
        x: 58.5,
        y: 48,
        labelX: 70,
        labelY: 25,
      },
      {
        id: 5,
        title: "Estabilização",
        description:
          `A energia se dissipa e o bico volta a descansar nos 12V. Uma linha limpa indica que não há interferências no chicote.`,
        x: 85,
        y: 70,
        labelX: 85,
        labelY: 50,
      },
    ],
    waveType: "injector",
    multimeter: {
      setting: "OHM_200",
      instructions: "Desconecte o bico. Escala de Resistência (Ohms 200). Meça entre os pinos do bico. Para testar pulso, use LED de teste (caneta polaridade), pois o multímetro não pega a velocidade do pulso.",
      expectedValues: "Resistência: Normalmente entre 10 a 15 Ohms (podendo variar para injetores de baixa impedância).",
      variesByModel: true,
      minValue: 10,
      maxValue: 15,
      unit: "Ω",
      temperatureObservation: "A resistência deve ser medida preferencialmente com motor frio. Bobinas fadigadas podem entrar em curto ou abrir quando aquecidas.",
    },
  },
  {
    id: "ignition-coil-secondary",
    name: "Bobina de Ignição (Secundário)",
    type: "actuator",
    shortDescription: "Forma de onda de alta tensão medida no cabo de vela usando pinça capacitiva.",
    fullDescription:
      "A onda do secundário da bobina reflete diretamente o que está acontecendo dentro da câmara de combustão. Utilizando uma pinça capacitiva presa ao cabo de vela (ou uma pinça COP para bobinas tipo caneta), você consegue ler tensões que chegam a 30.000V. A análise desse gráfico é a forma definitiva de diagnosticar falhas de queima, misturas ricas/pobres, velas desgastadas ou cabos em curto.",
    oscilloscopeSetup: {
      timeDiv: "1ms a 2ms",
      voltageDiv: "Usar pinça capacitiva (geralmente configura-se o canal para 10kV ou 20kV).",
      triggerEdge: "Subida (Rising) ou Descida dependendo da polaridade da centelha",
      triggerMode: "Normal",
      triggerLevel: "3kV a 5kV (ajuste para capturar a queima)",
    },
    connectionInstructions:
      "Obrigatório o uso de Pinça Capacitiva (Secundário) ou Pinça COP. Prenda a pinça ao redor do cabo de vela (ou sobre a bobina COP). Conecte o aterramento da pinça no negativo da bateria ou chassi. Se o gráfico ficar de cabeça para baixo, ative a opção 'Inverter' (Invert) no osciloscópio.",
    waveformExplanation:
      `O gráfico do secundário é muito parecido com o do primário, mas as tensões são gigantes (escala de kV) e o foco da análise é a linha de queima.

• **Tensão de Disparo (Spike)**: É a voltagem que a bobina precisou gerar para romper o espaço (folga) da vela. Velas gastas ou mistura pobre exigem tensão muito alta.
• **Tempo e Linha de Queima (Burn Line)**: Mostra quanto tempo a faísca durou dentro do cilindro. Se a linha for muito curta ou cheia de ruídos, a centelha está se apagando precocemente.
• **Oscilações Residuais**: Igual ao primário, mostra a saúde da bobina após a queima.`,
    waveformPhases: [
      {
        id: 1,
        title: "Carregamento (Dwell Secundário)",
        description: "Espelho do primário. A energia está se acumulando na bobina. O tempo deve ser igual ao do primário.",
        x: 30,
        y: 80,
        labelX: 30,
        labelY: 95,
      },
      {
        id: 2,
        title: "Tensão de Disparo (Spike)",
        description: "É a força necessária para romper a resistência do ar na vela. O pico sobe até romper a folga (geralmente de 10kV a 15kV). Picos acima de 20kV indicam folga excessiva ou cabos ruins. Picos muito curtos indicam curto-circuito.",
        x: 46,
        y: 5,
        labelX: 35,
        labelY: 15,
      },
      {
        id: 3,
        title: "Linha de Queima (Burn Line)",
        description: "O momento exato em que a faísca está acesa queimando a mistura ar-combustível. Deve durar entre 1.0ms e 2.0ms e ser o mais plana possível. Oscilações fortes aqui indicam mistura incorreta, bico sujo ou turbulência na câmara.",
        x: 52,
        y: 45,
        labelX: 52,
        labelY: 25,
      },
      {
        id: 4,
        title: "Pendente (Extinção)",
        description: "O final da queima. A faísca apaga e a linha cai rapidamente de volta para a tensão da bateria.",
        x: 58.5,
        y: 25,
        labelX: 68,
        labelY: 15,
      },
      {
        id: 5,
        title: "Oscilações Residuais",
        description: "Energia dissipando no circuito após a faísca se apagar. A ausência dessas oscilações indica um curto-circuito interno nas espiras da bobina.",
        x: 62.5,
        y: 70,
        labelX: 75,
        labelY: 85,
      }
    ],
    waveType: "ignition",
    multimeter: {
      setting: "OHM_20K",
      instructions: "Com o multímetro em Ohms 20k, meça a resistência do enrolamento secundário da bobina (entre a saída de alta tensão para o cabo de vela e um dos pinos do primário ou a carcaça).",
      expectedValues: "Geralmente entre 10 kΩ e 15 kΩ (consulte o manual).",
      variesByModel: true,
      minValue: 10000,
      maxValue: 15000,
      unit: "Ω",
      temperatureObservation: "A resistência pode subir quando a bobina esquenta e abrir o circuito internamente se houver defeito."
    },
  },
  {
    id: "ignition-coil",
    name: "Bobina de Ignição (Primário)",
    type: "actuator",
    shortDescription: "Eleva a tensão para gerar a centelha na vela.",
    fullDescription:
      "A bobina é um transformador. Medimos o circuito primário. Assim como o injetor, a ECU (ou módulo de ignição) aterra o primário para carregar a bobina (tempo de Dwell) e corta para gerar a alta tensão que será induzida para o secundário (vela).",
    oscilloscopeSetup: {
      timeDiv: "1ms",
      voltageDiv: "50V a 100V",
      triggerEdge: "Descida",
      triggerMode: "Normal",
      triggerLevel: "10V",
    },
    connectionInstructions:
      "Use um atenuador 20:1 ou a pinça capacitiva para evitar queimar seu osciloscópio, pois o pico indutivo pode passar de 400V. Conecte a garra preta no negativo. Espete a ponta de prova (com atenuador) no fio de controle (pulso negativo da ECU) no conector primário da bobina.\n\n⚠️ IMPORTANTE: Só após todas as conexões estarem devidamente presas, LIGUE a chave de ignição e funcione o motor para realizar o teste.",
    waveformExplanation:
      `O gráfico da bobina de ignição é como um 'eletrocardiograma' do coração do motor. Ele conta tudo sobre a força da faísca e como o combustível está queimando lá dentro do cilindro.

Comportamento e Defeitos (Preste muita atenção aqui):
• **Tempo de Carregamento (Linha de Baixo)**: É o tempo que a bobina fica acumulando força. 
• **O Tamanho da Faísca (Linha de Queima)**: Se a linha reta no meio for muito curta no tempo (menos de 0.8ms), a queima está fraca e a moto perde força. Isso acontece quando as velas estão muito gastas ou a mistura está muito pobre.
• **Pico Inicial Muito Alto**: Se a linha saltar lá pro alto e o tempo de queima for curtíssimo, significa que tem muita resistência para a faísca pular. Pode ser cabo de vela partido ou vela com o gap (folga) enorme.
• **As Ondinhas Finais (Oscilações Residuais)**: Essenciais! Mostram a energia que sobrou 'balançando' depois que a faísca apagou. Se essas ondinhas sumirem ou ficarem curtas e tortas, é tiro certo: **a bobina está em curto ou vazando corrente (fuga de faísca)**. Troque a bobina.`,
    waveformPhases: [
      {
        id: 1,
        title: "Carregamento (Dwell)",
        description:
          `A central (ECU/módulo) envia o sinal negativo (terra) para a bobina e a tensão cai para zero. É a central que decide o tempo exato de carregamento (tempo de Dwell). Durante esse período, a bobina está acumulando energia magnética. Um tempo de carga insuficiente resulta em uma faísca fraca. Tempo de Dwell: varia entre o mínimo de 2.0ms até o máximo de 4.5ms a 5.0ms (dependendo da moto).`,
        x: 30,
        y: 80,
        labelX: 30,
        labelY: 95,
      },
      {
        id: 2,
        title: "Tensão de Disparo (Spike)",
        description:
          `O módulo corta o terra e ocorre o Disparo (Spike). A tensão sobe violentamente para vencer a resistência do ar na vela. O pico ideal de tensão no primário varia entre um mínimo de 250V e um máximo de 400V. Um pico muito baixo indica bobina fraca; muito alto indica resistência excessiva (cabo rompido ou vela com folga gigante).`,
        x: 46,
        y: 5,
        labelX: 35,
        labelY: 15,
      },
      {
        id: 3,
        title: "Linha de Queima (Spark Line)",
        description:
          `Linha de Queima (Spark Line): A faísca está acesa! A altura (tensão) indica o esforço para queimar, e o comprimento (tempo) mostra a duração da centelha. O tempo ideal de queima tem um mínimo de 1.2ms e um máximo de 2.0ms. Linhas tortuosas ou com tempos abaixo de 0.8ms indicam mistura pobre ou velas muito desgastadas.`,
        x: 52,
        y: 45,
        labelX: 52,
        labelY: 25,
      },
      {
        id: 4,
        title: "Pendente (Extinção)",
        description:
          `A energia não sustenta mais a faísca e o arco se apaga (Extinção). Se o fim for abrupto e sem dar esse pequeno salto, preste atenção, pode estar ocorrendo fuga de centelha para o motor (curto).`,
        x: 58.5,
        y: 25,
        labelX: 68,
        labelY: 15,
      },
      {
        id: 5,
        title: "Oscilações Residuais",
        description:
          `Oscilações Residuais: É a energia que sobrou 'balançando' no circuito. Uma bobina impecável mostra de 3 a 5 ondinhas perfeitas. Se o residual encurtar, tiver apenas 1 ondinha, ou sumir por completo, a bobina está fatalmente em curto e precisa ser trocada!`,
        x: 62.5,
        y: 70,
        labelX: 75,
        labelY: 85,
      },
    ],
    waveType: "ignition",
    multimeter: {
      setting: "OHM_200",
      instructions: "Desconecte a bobina. Com o multímetro em Ohms 200, meça o enrolamento primário (entre os dois pinos menores). Com o multímetro em Ohms 20k, meça o enrolamento secundário (entre a saída para a vela e um dos pinos menores ou terra).",
      expectedValues: "Primário: ~2 a 5 Ohms. Secundário: ~10k a 15k Ohms (sem cachimbo).",
      variesByModel: true,
      minValue: 2,
      maxValue: 5,
      unit: "Ω",
      temperatureObservation: "Bobinas com defeito muitas vezes apresentam falhas apenas após aquecerem (resistência infinita). Teste a frio e logo após a falha se manifestar (quente).",
    },
  },
  {
    id: "tps",
    name: "Sensor TPS (Borboleta)",
    type: "sensor",
    shortDescription: "Mede a abertura do acelerador.",
    fullDescription:
      "O TPS é um potenciômetro alimentado com 5V pela ECU. Ele varia a resistência conforme você acelera a moto, enviando um sinal de tensão de retorno (geralmente de 0.4V a 4.5V) para a ECU saber a demanda de carga do piloto.",
    oscilloscopeSetup: {
      timeDiv: "200ms a 500ms",
      voltageDiv: "1V",
      triggerEdge: "Subida",
      triggerMode: "Auto",
      triggerLevel: "1V",
    },
    connectionInstructions:
      "Aterre a garra preta no negativo da bateria. O TPS possui três fios (5V, Terra e Sinal). Espete a ponta de prova no fio de sinal. Gire o acelerador lentamente e observe a rampa de tensão subindo no osciloscópio.\n\n⚠️ IMPORTANTE: Conecte todas as garras e espete o fio com a chave desligada. Só então LIGUE a chave de ignição (o motor não precisa funcionar) para alimentar o potenciômetro e realizar o teste.",
    waveformExplanation:
      `O TPS (Sensor de Posição da Borboleta) é como o 'botão de volume' de um rádio, mas conectado no cabo do acelerador. Ele avisa o módulo o quanto você quer acelerar.

Comportamento e Defeitos:
• **A Rampa**: Conforme você acelera devagarzinho com a moto desligada, a linha deve subir fazendo uma rampa perfeita e super lisa, do zero ao máximo.
• **Defeito de Pista Gasta**: Se bem no meio da rampa a linha der um pulo para baixo (cair pro zero) e voltar rapidamente, isso significa que a trilha por onde o contato passa está raspada/gasta. O módulo se perde na hora, corta o combustível naquele momento e a moto dá aquele famoso 'buraco' (engasga e dá soco) bem naquela posição do acelerador.`,
    waveformPhases: [
      {
        id: 1,
        title: "Marcha Lenta",
        description: `Acelerador solto, tensão estável e baixa. O valor mínimo é geralmente de 0.4V e o máximo tolerável na marcha lenta é de 0.8V (aprox. 0.5V típico). Qualquer flutuação com a mão parada acusa desgaste.`,
        x: 10,
        y: 85,
        labelX: 10,
        labelY: 70,
      },
      {
        id: 2,
        title: "Aceleração",
        description: `Ao acelerar, a linha sobe como uma rampa lisa e perfeita. Quedas instantâneas para zero durante a subida acusam trilha raspada/gasta. Isso fará o módulo cortar o bico e a moto engasgar violentamente nessa posição do acelerador.`,
        x: 50,
        y: 50,
        labelX: 40,
        labelY: 35,
      },
      {
        id: 3,
        title: "Carga Máxima (WOT)",
        description: `Acelerador no máximo (WOT). A linha fica reta no topo, pedindo carga máxima do motor. A tensão atinge o seu valor máximo, com o mínimo tolerável de 4.2V e o pico máximo em torno de 4.8V a 5.0V.`,
        x: 90,
        y: 15,
        labelX: 90,
        labelY: 30,
      },
    ],
    waveType: "tps",
    multimeter: {
      setting: "DCV_20",
      instructions: "Chave ligada, motor desligado. Escala de 20V DC. 1) Verifique alimentação (5V) e Terra (0V). 2) Espete o fio de sinal e acelere o punho devagar até o fim.",
      expectedValues: "Alimentação: ~5.0V. Sinal: Inicia em ~0.4V a 0.7V e sobe gradativamente, sem falhas, até ~4.5V em aceleração máxima.",
      variesByModel: true,
      minValue: 0.4,
      maxValue: 4.5,
      unit: "V",
      temperatureObservation: "Não sofre tanta variação térmica. Com defeitos, ocorre queda para 0V durante o curso do punho (trilha danificada).",
    },
  },
  {
    id: "lambda",
    name: "Sonda Lambda (Oxigênio)",
    type: "sensor",
    shortDescription: "Mede a mistura Ar/Combustível no escape.",
    fullDescription:
      "A sonda lambda de Zircônia mede o oxigênio restante nos gases de escape. Ela gera sua própria voltagem (de 0.1V a 0.9V) em reação ao oxigênio. Mistura pobre = baixa tensão (~0.1V), Mistura rica = alta tensão (~0.9V).",
    oscilloscopeSetup: {
      timeDiv: "200ms a 500ms",
      voltageDiv: "200mV (0.2V)",
      triggerEdge: "Subida",
      triggerMode: "Auto",
      triggerLevel: "400mV",
    },
    connectionInstructions:
      "Conecte a garra preta no negativo da bateria (ou no fio terra do sensor, se preferir isolar o chicote). Identifique o fio de Sinal da sonda lambda (normalmente o fio preto, em sondas de 4 fios, ou o único fio solto nas antigas). Espete a ponta de prova.\n\n⚠️ IMPORTANTE: Só após fixar as garras e agulhas, funcione o motor e espere atingir a temperatura de trabalho para que a sonda comece a oscilar e gerar o sinal.",
    waveformExplanation:
      `A Sonda Lambda é o 'nariz' do sistema. Fica lá no escapamento cheirando se a queima do combustível foi boa (mistura ideal), gorda (muito combustível) ou magra (muito ar). 

Comportamento e Defeitos:
• **A Dança da Sonda**: Com o motor quente, a sonda boa tem que ficar dançando o tempo todo: sobe (rica) e desce (pobre) sem parar. Ela não pode ficar parada!
• **Sonda Lenta ou Travada**: Se o gráfico parecer 'preguiçoso', demorando muito para subir e descer, ou se ficar travado lá embaixo ou lá em cima em linha reta, a sonda está carbonizada (cheia de fuligem) ou estragada. Isso faz a moto beber muito combustível ou perder rendimento.
• **Atenção**: Uma sonda travada em 'pobre' (linha baixa) também pode ser culpa de uma entrada de ar falso ou bomba de combustível fraca. O gráfico não mente, ele mostra o que está acontecendo no motor!`,
    waveformPhases: [
      {
        id: 1,
        title: "Mistura Rica",
        description: `Sonda lá no alto. Detectou Mistura Rica (falta oxigênio, sobra gasolina). O valor deve atingir o pico máximo de tensão entre 800mV e 900mV (0.8V a 0.9V). Se ela travar apenas aqui e não descer mais, pode haver bicos gotejando.`,
        x: 15,
        y: 20,
        labelX: 15,
        labelY: 35,
      },
      {
        id: 2,
        title: "Transição",
        description: `A sonda deve cruzar o centro dinamicamente várias vezes por segundo. Transições muito lentas e preguiçosas revelam sonda carbonizada, que perdeu a sensibilidade de leitura rápida.`,
        x: 30,
        y: 50,
        labelX: 40,
        labelY: 50,
      },
      {
        id: 3,
        title: "Mistura Pobre",
        description: `Sonda lá embaixo. Detectou Mistura Pobre (sobra oxigênio). O valor deve cair ao pico mínimo de tensão entre 50mV e 150mV (0.05V a 0.15V). Se o sinal travar embaixo, investigue entrada de ar falso ou queima da sonda.`,
        x: 45,
        y: 80,
        labelX: 45,
        labelY: 65,
      },
    ],
    waveType: "lambda",
    multimeter: {
      setting: "DCV_20",
      instructions: "Motor ligado e quente! Escala de Tensão 20V DC. Espete o fio de sinal preto da sonda.",
      expectedValues: "Sinal DC: Deve oscilar constantemente entre ~0.1V (mistura pobre) e ~0.9V (mistura rica) em marcha lenta.",
      variesByModel: false,
      minValue: 0.1,
      maxValue: 0.9,
      unit: "V",
      temperatureObservation: "A sonda lambda SÓ FUNCIONA QUENTE (acima de 300°C). Com motor frio ou falha no aquecedor, a leitura ficará travada (aprox. 450mV).",
    },
  },
  {
    id: "lambda-heater",
    name: "Aquecedor da Sonda Lambda (O2)",
    type: "actuator",
    shortDescription: "Resistor interno para aquecimento rápido da sonda.",
    fullDescription:
      "As sondas lambda possuem um resistor de aquecimento interno. A ECU controla esse aquecedor usando PWM (modulação por largura de pulso) ou tensão contínua. Isso faz com que a sonda atinja a temperatura de trabalho rapidamente para reduzir as emissões com o motor frio.",
    oscilloscopeSetup: {
      timeDiv: "50ms a 100ms",
      voltageDiv: "5V a 10V",
      triggerEdge: "Descida",
      triggerMode: "Auto",
      triggerLevel: "5V",
    },
    connectionInstructions:
      "Aterre a garra preta do osciloscópio no negativo da bateria ou chassi. Identifique os dois fios do aquecedor da Sonda (geralmente de mesma cor, como branco ou preto). Um recebe 12V da bateria/relé, e o outro é aterrado pela ECU em pulsos (PWM). Espete a ponta de prova (Canal 1) neste fio de pulso negativo.\n\n⚠️ IMPORTANTE: Só após fazer as conexões com segurança, LIGUE a chave de ignição e funcione o motor para realizar o teste (preferencialmente em fase fria para analisar a ativação inicial).",
    waveformExplanation:
      `O aquecedor é uma resistência que fica dentro da Sonda Lambda para ela esquentar e começar a funcionar bem rápido assim que você liga a moto fria (a sonda só funciona quente).

Comportamento e Defeitos:
• **Controle do Módulo**: O gráfico vai ser uma onda quadrada pulsante. Quando a moto está fria, o módulo deixa a linha muito mais tempo embaixo (ligando o aquecedor). Conforme a moto esquenta, ele aperta as ondas.
• **Falta do 12V**: Se você olhar na tela e não ver a onda subindo até os 12V (ficar só lá embaixo travado), pode ter um fusível queimado ou fio partido cortando a energia.
• **Sinal Travado em 12V (Sem Pulsos)**: Se ficar só a linha reta no topo sem descer para zero, o fio que vai para a centralina (módulo) partiu, ou o próprio módulo queimou o circuito interno e parou de comandar o aquecedor.`,
    waveformPhases: [
      {
        id: 1,
        title: "Tensão de Alimentação",
        description: `Tensão de bateria aguardando no circuito. Verifique se chegam os saudáveis 12V a 14V. Tensões menores indicam queda no relé de injeção ou fios oxidados.`,
        x: 5,
        y: 20,
        labelX: 5,
        labelY: 35,
      },
      {
        id: 2,
        title: "Ativação (Tempo de Aterramento)",
        description: `O módulo aterra para aquecer a resistência da sonda (Duty Cycle). Uma ativação sólida com o motor frio é crucial para as emissões. Se a linha não descer bem ao 0V, o driver do módulo tem falha.`,
        x: 22,
        y: 80,
        labelX: 22,
        labelY: 65,
      },
      {
        id: 3,
        title: "Desativação",
        description: `A desativação do aquecedor (desliga para não superaquecer). O sinal deve retornar rapidamente aos 12V. Ausência do chaveamento liga a luz da injeção.`,
        x: 47,
        y: 20,
        labelX: 47,
        labelY: 35,
      },
    ],
    waveType: "pwm",
    multimeter: {
      setting: "OHM_200",
      instructions: "Desconecte a sonda lambda. Localize os dois fios da mesma cor (geralmente dois fios brancos ou dois fios pretos) que são do aquecedor. Use a escala de Resistência (Ohms 200) e meça entre eles.",
      expectedValues: "Resistência do Aquecedor: Geralmente entre 4 a 15 Ohms, variando pelo fabricante.",
      variesByModel: true,
      minValue: 4,
      maxValue: 15,
      unit: "Ω",
      temperatureObservation: "A medição do aquecedor deve ser feita SEMPRE A FRIO (temperatura ambiente), pois a resistência PTC sobe drasticamente com a temperatura.",
    },
  },
  {
    id: "map",
    name: "Sensor MAP",
    type: "sensor",
    shortDescription: "Sensor de Pressão Absoluta do Coletor.",
    fullDescription:
      "O sensor MAP mede o vácuo dentro do coletor de admissão. Alimentado com 5V, sua tensão de resposta varia conforme a borboleta abre ou fecha e os pistões sugam o ar.",
    oscilloscopeSetup: {
      timeDiv: "50ms a 100ms",
      voltageDiv: "1V",
      triggerEdge: "Subida",
      triggerMode: "Auto",
      triggerLevel: "2.5V",
    },
    connectionInstructions:
      "Aterre a garra preta no negativo da bateria. O MAP possui três fios (Alimentação 5V, Terra e Sinal). Espete a ponta de prova no fio de Sinal.\n\n⚠️ IMPORTANTE: Conecte garras e pontas de prova com o veículo desligado. Somente depois disso, LIGUE a chave de ignição e funcione o motor para gerar vácuo e iniciar a leitura. Observe a variação ao acelerar subitamente o motor.",
    waveformExplanation:
      `O Sensor MAP mede a 'respiração' e o vácuo do motor. Quando o pistão desce puxando ar, ele cria um vácuo no coletor, e o MAP avisa isso ao módulo.

Comportamento e Defeitos:
• **Em Marcha Lenta**: O buraco de entrada (borboleta) está quase fechado, mas o pistão continua sugando. Isso gera MUITO vácuo, puxando a tensão do gráfico lá pra baixo.
• **Acelerada Rápida (Soco no Acelerador)**: Quando você acelera tudo de uma vez, entra muito ar de sopetão. O vácuo some, a pressão interna iguala com o ar da rua, e o gráfico dá um pulo gigante para cima na tela.
• **Soltando o Acelerador**: Ao soltar em alta velocidade (desaceleração), a borboleta fecha na mesma hora, mas o motor lá dentro ainda está girando rápido e sugando como um louco. O vácuo vai ao máximo e a linha cai até o chão.
• **Problema de Válvulas**: Se na marcha lenta o gráfico ficar todo tremido, pipocando pra cima e pra baixo sem parar, indica falha mecânica no motor (ex: válvula presa, carbonizada ou sem folga não vedando direito).`,
    waveformPhases: [
      {
        id: 1,
        title: "Marcha Lenta",
        description: `Marcha lenta. A borboleta quase fechada faz os pistões gerarem um vácuo brutal, puxando a tensão do sensor. O valor deve oscilar entre o mínimo de 1.0V e o máximo de 1.5V em uma moto perfeita. Gráfico com tremulações absurdas indicam válvulas desreguladas.`,
        x: 10,
        y: 70,
        labelX: 10,
        labelY: 55,
      },
      {
        id: 2,
        title: "Aceleração Rápida",
        description:
          `Acelerada súbita (Snap Throttle). O ar entra violento, o vácuo desaparece num piscar de olhos e a pressão equaliza. Uma subida lenta demais pode ser mangueira do MAP rachada (furo minúsculo) ou sensor engasgado de sujeira.`,
        x: 25,
        y: 55,
        labelX: 25,
        labelY: 40,
      },
      {
        id: 3,
        title: "WOT (Borboleta Aberta)",
        description: `Aceleração máxima. A pressão se equipara à atmosfera do ambiente. Serve para testar se há restrição no escape (catalisador entupido) ou na caixa de filtro de ar.`,
        x: 40,
        y: 40,
        labelX: 40,
        labelY: 25,
      },
      {
        id: 4,
        title: "Desaceleração",
        description:
          `Você corta o acelerador em alto giro. A borboleta fecha com o motor girando a 10.000 RPM sugando tudo! O vácuo vai ao extremo (Cut-off) cortando a injeção até as rotações caírem.`,
        x: 70,
        y: 80,
        labelX: 70,
        labelY: 95,
      },
    ],
    waveType: "map",
    multimeter: {
      setting: "DCV_20",
      instructions: "Chave ligada, motor desligado (para repouso), depois motor ligado. Escala 20V DC. Teste alimentação 5V e terra. Depois espete o fio de sinal.",
      expectedValues: "Alimentação: ~5.0V. Sinal DC: ~2.8V a 3V (repouso, pressão atm), caindo para ~1.0V a 1.5V com motor em marcha lenta (vácuo).",
      variesByModel: true,
      minValue: 1.0,
      maxValue: 3.0,
      unit: "V",
      temperatureObservation: "Medições devem ser estáveis e não sofrem muita influência da temperatura do motor.",
    },
  },
  {
    id: "abs-indutivo",
    name: "Sensor ABS - Indutivo",
    type: "sensor",
    shortDescription: "Mede a velocidade da roda usando roda fônica.",
    fullDescription:
      "O sensor ABS indutivo é semelhante ao CKP indutivo. Ele gera uma Corrente Alternada (AC) cuja frequência e amplitude aumentam conforme a roda gira mais rápido. Se comunica com o módulo do ABS para evitar o travamento das rodas.",
    oscilloscopeSetup: {
      timeDiv: "20ms a 50ms",
      voltageDiv: "1V a 5V",
      triggerEdge: "Subida ou Descida",
      triggerMode: "Normal",
      triggerLevel: "1V",
    },
    connectionInstructions:
      "TESTE NA MOTO: Conecte a garra jacaré preta no negativo da bateria ou em um bom ponto de aterramento. Espete o fio de sinal do sensor ABS (geralmente na roda dianteira ou traseira). Meça com a roda girando.\n\nTESTE EM BANCADA (Roda Girando ou Furadeira):\n1. Pode testar o sensor no lugar, levantando a roda e girando-a com a mão para gerar o sinal.\n2. Para testar fora, prenda uma roda fônica ou dente metálico em uma furadeira e gire próximo à ponta do sensor para simular a roda girando.\n\n⚠️ IMPORTANTE: Conecte o equipamento com a moto desligada. Para realizar o teste e obter leitura no sistema da moto, LIGUE a chave de ignição após todas as conexões estarem firmes.",
    waveformExplanation:
      `O sensor de ABS indutivo funciona igualzinho ao CKP Indutivo do motor, mas ele fica nas rodas. Ele gera sua própria energia (ondas suaves) conforme os espacinhos do disco do ABS passam por ele.

Comportamento e Defeitos:
• **Lendo Rotação**: Ao girar a roda com a mão, você vai ver a onda se formando na tela. Se girar rápido, as ondas crescem.
• **Sinal Fraco**: Se as ondas ficarem minúsculas, quase uma linha reta, significa que o sensor está muito distante do disco do ABS, ou perdeu a força magnética. A luz do ABS vai acender no painel.
• **Roda Fônica Empenada**: Se o desenho ficar 'balançando', com umas ondas altas e outras baixinhas em sequência, a grade do ABS (roda fônica) sofreu uma pancada e está empenada, raspando ou distanciando a cada volta.`,
    waveformPhases: [
      {
        id: 1,
        title: "Aproximação do Dente (+)",
        description: `Leitura analógica do movimento da roda. A parte sólida (dente de metal do ABS) induz pico positivo. Quanto mais rápida a moto estiver, maior será esse pico em voltagem.`,
        x: 20,
        y: 35,
        labelX: 20,
        labelY: 10,
      },
      {
        id: 2,
        title: "Cruzamento Zero (0V)",
        description: `A passagem por zero, momento crítico de precisão para calcular o algoritmo de frenagem para evitar o travamento da roda no solo.`,
        x: 24,
        y: 50,
        labelX: 10,
        labelY: 50,
      },
      {
        id: 3,
        title: "Afastamento do Dente (-)",
        description: `Pico negativo, o dente se afasta. Se as ondas ao longo do giro da roda subirem e descerem em alturas desiguais (padrão flutuante), o disco de leitura do ABS (roda fônica) sofreu pancada e está empenado!`,
        x: 28,
        y: 65,
        labelX: 28,
        labelY: 90,
      },
    ],
    waveType: "sine",
    multimeter: {
      setting: "OHM_2000",
      instructions: "Desconecte o sensor ABS. Multímetro na escala de Resistência (Ohms 2000). Meça entre os dois pinos do sensor. Como é um sensor indutivo (roda dentada), a resistência indicará a saúde da bobina interna.",
      expectedValues: "Resistência: ~1000 a 2000 Ohms. Valor pode variar entre motos (consulte o manual). Tensão AC (rodando a roda): Deve gerar pequena voltagem (0.1V a 1V+).",
      variesByModel: true,
      minValue: 1000,
      maxValue: 2000,
      unit: "Ω",
      temperatureObservation: "A resistência das bobinas de sensores de roda pode alterar levemente ao esquentar, testar a frio é o procedimento padrão.",
    },
  },
  {
    id: "abs-hall",
    name: "Sensor ABS - Ativo (Hall)",
    type: "sensor",
    shortDescription: "Sensor ABS digital, gera onda quadrada.",
    fullDescription:
      "O sensor ABS ativo utiliza elemento Hall ou Magnetoresistivo para ler uma roda fônica ou um anel magnético no rolamento. Ele gera um sinal digital de onda quadrada limpa, mesmo em baixíssimas velocidades. É muito superior ao indutivo em precisão.",
    oscilloscopeSetup: {
      timeDiv: "20ms a 50ms",
      voltageDiv: "2V",
      triggerEdge: "Subida",
      triggerMode: "Normal",
      triggerLevel: "2.5V",
    },
    connectionInstructions:
      "TESTE NA MOTO: Aterre a garra preta do osciloscópio no negativo da bateria. Identifique os fios do sensor ABS. Espete a ponta de prova do canal 1 no fio de Sinal.\n\nTESTE EM BANCADA (Roda Girando ou Furadeira):\n1. Levante a roda e gire-a com a mão.\n2. Para testar fora, alimente o sensor com a tensão correta (geralmente 12V). Gire uma roda fônica ou ímã multipolar (anexo a uma furadeira) próximo ao sensor para ver a onda quadrada.\n\n⚠️ IMPORTANTE: Conecte tudo com a ignição desligada. LIGUE a chave de ignição somente após as conexões estarem prontas para que o módulo alimente o sensor com segurança.",
    waveformExplanation:
      `O sensor de ABS Hall é a versão digital. Ele envia para o módulo do freio ondas quadradas perfeitas. A maioria das motos hoje usa este tipo.

Comportamento e Defeitos:
• **Giro da Roda**: Mesmo girando a roda bem devagarinho, a onda quadrada sobe e desce da mesma altura. O que muda é apenas o espaçamento entre elas.
• **Ondas Inconstantes ou Amassadas**: Se os quadrados começarem a perder a forma, não encostando no zero, é um indicativo forte de sujeira extrema no sensor, mal contato no conector, ou problema nos fios de alimentação (esse sensor precisa de energia, geralmente de 5 a 12V, para funcionar).`,
    waveformPhases: [
      {
        id: 1,
        title: "Nível Lógico Baixo (0V)",
        description: `Fio de sinal vai a 0V indicando dente lido. Tem que ser limpo. Uma falha aqui muitas vezes resulta de ferrugem no sensor isolando o contato.`,
        x: 20,
        y: 80,
        labelX: 20,
        labelY: 95,
      },
      {
        id: 2,
        title: "Borda de Subida",
        description: `Bordas perfeitas em 90 graus para evitar qualquer erro de cálculo do módulo ABS de que a roda possivelmente parou (travou).`,
        x: 25,
        y: 50,
        labelX: 10,
        labelY: 50,
      },
      {
        id: 3,
        title: "Nível Lógico Alto",
        description: `Crista alta do sinal digital. Fica alerta: ruídos esquisitos nessa parte de cima costumam acusar chicote machucado roçando no quadro da moto acompanhando o trabalho da suspensão.`,
        x: 32,
        y: 20,
        labelX: 32,
        labelY: 10,
      },
    ],
    waveType: "square",
    multimeter: {
      setting: "DCV_20",
      instructions: "Chave ligada. Multímetro em DC 20V. Meça tensão de alimentação do sensor (geralmente 12V). Para sinal, conecte a roda e gire lentamente. Requer equipamento específico para leitura correta do pulso rápido, mas pode observar variação na tensão DC média.",
      expectedValues: "Alimentação: 12V (ou 5V dependendo do sistema). Sinal DC: Variação discreta ou valor médio (ex: 6V). Osciloscópio é necessário para diagnóstico preciso.",
      variesByModel: true,
    },
  },
  {
    id: "estator",
    name: "Estator (Gerador)",
    type: "sensor",
    shortDescription: "Gera a energia AC (Corrente Alternada) da moto.",
    fullDescription: "O estator é o coração do sistema elétrico. Ele converte energia mecânica em energia elétrica (Corrente Alternada - AC). Escolha a configuração de fases para ver os detalhes e testes.",
    oscilloscopeSetup: {
      timeDiv: "5ms a 10ms",
      voltageDiv: "20V a 50V",
      triggerEdge: "Subida",
      triggerMode: "Auto",
      triggerLevel: "0V",
    },
    waveformExplanation: `O Estator é como a usina de força da moto (funciona como o alternador do carro). Dentro dele existem bobinas. Quando o ímã gira, ele produz eletricidade em formato de Corrente Alternada (ondas que vão para o lado positivo e negativo sem parar).

Comportamento Geral:
A altura das ondas é o que importa! Em marcha lenta a onda é menor. Ao acelerar a moto a uns 5000 RPM, essa onda deve dar pulos gigantes (podendo passar de 100 Volts). Se você acelerar e o gráfico não subir acompanhando o motor, as bobinas dentro do motor estão queimadas, e a moto logo vai descarregar a bateria.`,
    waveType: "sine",
    multimeter: {
      setting: "ACV_200",
      instructions: "Selecione o tipo de estator para ver as instruções.",
      expectedValues: "Varia conforme o tipo de estator.",
      variesByModel: true,
    }
  },
  {
    id: "estator-1f",
    name: "Estator - 1 Fase (Monofásico)",
    type: "sensor",
    shortDescription: "Estator com apenas uma bobina ou uma saída de fase.",
    fullDescription: "No sistema monofásico, o estator gera Corrente Alternada (AC) através de um fio, utilizando o chassi (terra) como retorno. A amplitude da tensão sobe conforme a aceleração da motocicleta.",
    oscilloscopeSetup: {
      timeDiv: "5ms",
      voltageDiv: "20V",
      triggerEdge: "Subida",
      triggerMode: "Auto",
      triggerLevel: "0V",
    },
    connectionInstructions: "Aterre a garra preta do osciloscópio no negativo da bateria ou no chassi do motor. Espete a ponta de prova (Canal 1) no fio de saída de luz/carga do estator (consulte o manual de serviço para a cor correta, frequentemente amarelo ou branco).\n\n⚠️ IMPORTANTE: O teste é feito com a moto em funcionamento. Cuidado com fios expostos.",
    waveformExplanation: `O Estator Monofásico tem apenas uma fase (um caminho de energia). Você verá uma onda de energia (AC) bem limpa.

Comportamento e Defeitos:
• **Baixa Tensão**: Se você acelerar e a onda não passar de 20 ou 30 Volts de altura total, as espiras estão em curto ou queimadas, ou o próprio ímã do magneto perdeu o magnetismo. 
• **Ondas Deformadas**: Se o gráfico não parecer uma onda redondinha (senoidal), e estiver todo quadrado ou falhado, as bobinas estão em curto-circuito com a carcaça (massa) do motor.`,
    waveformPhases: [
      { id: 1, title: "Semiciclo Positivo", description: `Semiciclo positivo da geração. Você acelera, esse morro cresce proporcionalmente! Se ficar 'anão' travado nos 20V em giro alto, o magnetismo do volante acabou ou a bobina está em curto.`, x: 25, y: 20, labelX: 25, labelY: 10 },
      { id: 2, title: "Cruzamento Zero (0V)", description: `O momento exato que um ímã norte-sul do volante passa e o outro assume.`, x: 50, y: 50, labelX: 40, labelY: 50 },
      { id: 3, title: "Semiciclo Negativo", description: `Semiciclo negativo. Esta onda para baixo deve ser perfeitamente espelhada com a de cima. Assimetrias grosseiras acusam que o isolamento interno do estator derreteu e a energia está vazando para o motor.`, x: 75, y: 80, labelX: 75, labelY: 90 }
    ],
    waveType: "sine",
    hidden: true,
    multimeter: {
      setting: "ACV_200",
      instructions: "Multímetro em Tensão AC (200V). Desconecte o estator. Meça entre o fio de saída e o terra/chassi com o motor ligado.",
      expectedValues: "Tensão AC: Varia de ~20V (marcha lenta) até mais de 60V (acelerando).",
      variesByModel: true,
      minValue: 20,
      maxValue: 60,
      unit: "V",
      temperatureObservation: "A tensão sobe com a rotação, independentemente da temperatura térmica. Uma bobina com defeito pode falhar quando aquecida.",
    },
  },
  {
    id: "estator-2f",
    name: "Estator - 2 Fases (Bifásico)",
    type: "sensor",
    shortDescription: "Estator com bobina flutuante, duas saídas.",
    fullDescription: "O sistema bifásico (ou monofásico de onda completa) não possui aterramento interno. Ambas as extremidades da bobina saem do motor. A tensão é medida entre esses dois fios.",
    oscilloscopeSetup: {
      timeDiv: "5ms",
      voltageDiv: "20V a 50V",
      triggerEdge: "Subida",
      triggerMode: "Auto",
      triggerLevel: "0V",
    },
    connectionInstructions: "Desconecte o plugue do retificador se quiser medir sem carga, ou meça conectado. Conecte a garra preta no Fio A do estator e a ponta de prova (Canal 1) no Fio B do estator (geralmente dois fios da mesma cor, ex: amarelos ou rosas). \n\n⚠️ IMPORTANTE: Como não há referência ao terra do chassi, não aterre a garra preta na bateria. Ligue a garra preta em um fio do estator e a ponta no outro.",
    waveformExplanation: `Aqui nós colocamos os dois canais do osciloscópio (Canal 1 e 2) nos dois fios amarelos/brancos que sobem do estator.

Comportamento e Defeitos:
• **O Espelho Perfeito**: Você vai ver duas ondas, uma para cima e outra para baixo (elas são invertidas). O grande segredo aqui é que a altura (tamanho) de UMA tem que ser EXATAMENTE IGUAL a da OUTRA. 
• **Fase Queimada (Defeito)**: Se você ver a onda Ciano gigantesca e a onda Magenta pequenininha, bingo! Uma parte das bobinas fritou, entrou em curto e não gera mais energia.`,
    waveformPhases: [
      { id: 1, title: "Fase 1 (Ciano)", description: `Onda do fio Amarelo (Fase 1). Ela dita o limite para a outra.`, x: 25, y: 20, labelX: 25, labelY: 10 },
      { id: 2, title: "Fase 2 (Magenta)", description: `Onda do fio Rosa/Branco (Fase 2). Atenção máxima: A amplitude (altura) da fase 2 e da fase 1 devem ser exatamente iguais! Se a onda Ciano estiver no teto e a Magenta estiver pequenininha, essa segunda bobina do estator entrou em curto e morreu.`, x: 25, y: 80, labelX: 25, labelY: 90 }
    ],
    waveType: "sine",
    hidden: true,
    multimeter: {
      setting: "ACV_200",
      instructions: "Multímetro em Tensão AC (200V). Desconecte o estator. Meça entre os dois fios que sobem do estator (motor ligado).",
      expectedValues: "Tensão AC: Varia de ~20V (marcha lenta) a 80V+ (acelerando). Resistência: Menos de 1 a 3 Ohms (motor desligado). Não deve haver continuidade com o terra.",
      variesByModel: true,
      minValue: 20,
      maxValue: 80,
      unit: "V",
      temperatureObservation: "Bobinas com espiras em curto ou aterramento acidental podem falhar após o motor esquentar e dilatar o cobre.",
    },
  },
  {
    id: "estator-3f",
    name: "Estator - 3 Fases (Trifásico)",
    type: "sensor",
    shortDescription: "Sistema trifásico usado em motos maiores, 3 fios amarelos.",
    fullDescription: "O estator trifásico possui 3 bobinas independentes ligadas em estrela ou triângulo. Ele sai do motor com 3 fios, geralmente da mesma cor (ex: 3 fios amarelos). Fornece energia muito mais estável e potente.",
    oscilloscopeSetup: {
      timeDiv: "5ms a 10ms",
      voltageDiv: "20V a 50V",
      triggerEdge: "Subida",
      triggerMode: "Auto",
      triggerLevel: "0V",
    },
    connectionInstructions: "Você deve testar as 3 combinações de fios: (1-2, 1-3, 2-3). Para o teste 1-2: Conecte a garra preta no Fio 1 e a ponta de prova (Canal 1) no Fio 2. Repita o processo para as outras combinações. \n\n⚠️ IMPORTANTE: Se o seu osciloscópio tem dois canais, você pode ver 2 fases sobrepostas. O teste de fuga para terra é essencial: garra no motor, ponta em cada um dos 3 fios (nenhum deve gerar onda).",
    waveformExplanation: `O Trifásico é o sistema das motos maiores, gera muito mais energia usando 3 fases cruzadas. Precisaríamos de 3 canais no osciloscópio.

Comportamento e Defeitos:
• **O Equilíbrio das Fases**: Assim como no bifásico, o segredo é a altura dos picos. As três ondas devem estar sempre da mesma altura em qualquer rotação.
• **Falta de uma Fase**: Se uma das linhas estiver morta (quase reta) e as outras duas subindo e descendo, ou se ela tiver a metade da altura das outras, o estator está danificado e precisa de substituição ou recondicionamento.`,
    waveformPhases: [
      { id: 1, title: "Fase 1 (Ciano)", description: `Fase 1. Primeira linha de alimentação pesada da motocicleta.`, x: 21, y: 20, labelX: 21, labelY: 10 },
      { id: 2, title: "Fase 2 (Magenta)", description: `Fase 2. Segue os passos da primeira preenchendo a falta de energia.`, x: 26, y: 80, labelX: 26, labelY: 90 },
      { id: 3, title: "Fase 3 (Amarela)", description: `Fase 3. O equilíbrio absoluto. As 3 ondas trabalhando juntas em defasagem precisam apresentar a mesma altura (Voltagem). Se a amarela for a única a não subir de amplitude ao acelerar, o estator Trifásico está condenado e deverá ser reenrolado/trocado.`, x: 31, y: 20, labelX: 31, labelY: 10 }
    ],
    waveType: "sine",
    hidden: true,
    multimeter: {
      setting: "ACV_200",
      instructions: "Multímetro em Tensão AC (200V). Desconecte o estator. Meça combinando os 3 fios (A com B, A com C, B com C) com o motor ligado.",
      expectedValues: "Tensão AC: Varia de ~20V a 80V+ (acelerando). Os valores das três medições devem ser muito parecidos. Resistência: Menos de 1 Ohm entre eles. Não deve haver continuidade com o terra.",
      variesByModel: true,
      minValue: 20,
      maxValue: 80,
      unit: "V",
      temperatureObservation: "Estatores fadigados, após o aquecimento do óleo do motor, podem entrar em curto e apresentar queda repentina de tensão em uma ou mais fases.",
    },
  },
  {
    id: "retificador",
    name: "Retificador de Voltagem (Regulador/Retificador)",
    type: "sensor",
    shortDescription: "Converte AC do estator em DC e regula a tensão (13.5V a 14.8V).",
    fullDescription: "O Retificador/Regulador tem duas funções essenciais: 1) Retificar a Corrente Alternada (AC) gerada pelo estator transformando-a em Corrente Contínua (DC). 2) Regular a voltagem, cortando excessos para manter entre 13.5V e 14.8V, protegendo a bateria e módulos. Se falhar, a bateria descarrega ou ferve pelo excesso de carga.",
    oscilloscopeSetup: {
      timeDiv: "2ms a 5ms",
      voltageDiv: "5V a 10V",
      triggerEdge: "Subida",
      triggerMode: "Auto",
      triggerLevel: "0V",
    },
    connectionInstructions: "Conecte a garra preta do osciloscópio no terminal negativo da bateria. Espete a ponta de prova (Canal 1) no fio positivo de saída do retificador (geralmente vermelho ou vermelho/branco) OU diretamente no polo positivo da bateria.\n\n⚠️ IMPORTANTE: O teste é feito com a moto ligada. Acelere a moto a 3000-5000 RPM e observe o comportamento da onda.",
    waveformExplanation: `O Retificador/Regulador é o porteiro da bateria. Ele recebe aquela energia maluca do estator (Corrente Alternada que sobe e desce) e converte em energia lisa e contínua (Corrente Contínua a 14V) para carregar a bateria.

Comportamento e Defeitos:
• **A Linha Base**: Você vai ver uma linha reta flutuando perto de 14 Volts.
• **Os Dentes de Serra (Ripple)**: Em cima dessa linha reta, você verá umas ondinhas pequenas (ripple). Isso é normal, é a sobra da conversão de energia.
• **Diodo Queimado (Defeito)**: Se essas ondinhas ficarem GIGANTES, passando de 1 Volt de altura de diferença, ou se der picos enormes para baixo, os diodos internos do retificador queimaram. Ele está vazando energia ruim (Alternada) para a bateria, o que ferve e estraga a bateria em poucos dias.
• **Excesso de Carga**: Se a linha reta subir para 16V, 17V ou mais acelerando, o regulador não está cortando e vai fritar a bateria e os módulos eletrônicos.`,
    waveformPhases: [
      { id: 1, title: "Tensão de Carga", description: `É a Corrente Contínua domada (DC). O retificador limpa a bagunça do estator e entrega os 14V contínuos para recarregar a bateria. Abaixo de 13V o sistema não alimenta a moto; Acima de 15V o retificador está fritando e destruirá sua bateria (excesso de carga).`, x: 25, y: 30, labelX: 25, labelY: 20 },
      { id: 2, title: "Ripple de Diodos", description: `Ripple de Diodos. São esses dentes de serra minúsculos (resíduos AC). Se eles assumirem alturas enormes, rasgando o gráfico para cima e para baixo (excedendo 1V a 2V de Ripple), os diodos internos furaram e estão deixando energia alternada matar a bateria.`, x: 75, y: 30, labelX: 75, labelY: 40 }
    ],
    waveType: "dc-ripple",
    multimeter: {
      setting: "DCV_20",
      instructions: "Motor ligado, acelerado a ~4000 RPM. Multímetro em DC 20V. Meça a tensão diretamente nos polos da bateria. Para medir fuga, com motor desligado, desconecte o negativo da bateria e coloque o multímetro em série na escala de 10A (DCA).",
      expectedValues: "Tensão de Carga: Entre 13.5V e 14.8V. Fuga de corrente: Máximo aceitável em torno de 1mA a 3mA (consulte manual da moto).",
      variesByModel: true,
      minValue: 13.5,
      maxValue: 14.8,
      unit: "V",
      temperatureObservation: "Alguns retificadores com defeito param de regular a tensão (ou param de carregar) após esquentarem. Avalie frio e quente (após ligar a ventoinha).",
    },
  },
  {
    id: "ignition-timing",
    name: "Avanço de Ignição (Sincronismo CKP x Bobina)",
    type: "sensor",
    shortDescription: "Mede se a faísca está acontecendo no momento exato para dar força ao motor.",
    fullDescription: "O Avanço de Ignição é o 'maestro' do motor: ele diz o momento exato em que a vela deve soltar a faísca. Para a moto ter força total, a faísca precisa acontecer um pouquinho ANTES do pistão chegar no topo (PMS). Usamos o osciloscópio para ver isso acontecendo ao vivo! Um canal mostra a posição do motor e o outro mostra a faísca. Se ela acontecer na hora errada, a moto fica fraca, esquenta muito ou faz barulho de 'grilo'.",
    oscilloscopeSetup: {
      timeDiv: "5ms a 10ms",
      voltageDiv: "CH1: 10V (CKP) | CH2: 50V (Bobina)",
      triggerEdge: "Descida (Canal 2)",
      triggerMode: "Normal",
      triggerLevel: "10V (Canal 2)",
    },
    connectionInstructions: "Como ligar o osciloscópio (Siga o passo a passo com calma):\n1. Fio Preto (Terra): Ligue no negativo da bateria ou no chassi da moto.\n2. CANAL 1 (Azul): Coloque no fio de sinal do Sensor CKP (mede a rotação, fica no estator).\n3. CANAL 2 (Rosa): Coloque no fio de pulso negativo da Bobina de Ignição.\n\n⚠️ ATENÇÃO: É OBRIGATÓRIO usar um Atenuador (ex: 20:1) na ponta do Canal 2! A bobina gera picos de energia muito altos que podem queimar o seu osciloscópio se não usar atenuador.\n\nTeste: Ligue a moto e deixe em marcha lenta. A tela mostrará a onda do motor e o disparo da bobina para você comparar o sincronismo entre eles.",
    waveformExplanation: `O Avanço de Ignição é a relação de 'Sincronismo' entre duas coisas cruciais: Onde o motor está (Sensor CKP) e a hora que o módulo manda dar o choque na vela (Bobina).

Comportamento e Defeitos como Professor:
• **A Dança Coreografada**: Para o motor ter força, a faísca NUNCA pode acontecer na hora que o pistão já está lá no alto. A gasolina demora uns milissegundos para pegar fogo e expandir. Então o módulo manda a faísca (Linha Rosa dá o pico) um pouco ANTES da marca do pistão no topo (Buraco da Onda Azul).
• **Fora de Ponto**: Se você acelerar a moto, o módulo naturalmente joga o pico da faísca ainda MAIS PARA TRÁS (Avanço). Se ele jogar para FRENTE, caindo dentro do buraco da onda azul ou depois dele, a moto fica manca, o escapamento dá estouros e o motor perde toda a força. Isso geralmente é defeito na chaveta do magneto ou no próprio módulo, que endoidou e está mandando faísca atrasada.`,
    waveformPhases: [
      { id: 1, title: "Sinal do Motor (CKP)", description: `A leitura dos dentes do eixo do motor. O platô do meio (espaço sem ondas) é a marca referencial física. Avise o aluno: O fim do buraco é o pistão no topo absoluto.`, x: 25, y: 50, labelX: 25, labelY: 30, waveId: "ckp" },
      { id: 2, title: "Carregando Bobina", description: `O Dwell do módulo saturando a bobina antes da faísca fatal. O tempo típico de Dwell tem um mínimo de 2.0ms e um máximo em torno de 4.5ms a 5.0ms.`, x: 33, y: 80, labelX: 30, labelY: 95, waveId: "ign" },
      { id: 3, title: "FOGO! (Avanço)", description: `A explosão (Pico Indutivo de avanço). Regra de Ouro: Este pulso Rosa DEVE explodir para cima um pouco ANTES do espaço azul do CKP. Ao acelerar, ele deve afastar-se ainda mais para trás do buraco. Se ocorrer o inverso e ele se aproximar, o sincronismo está falhando e a força do motor sumirá.`, x: 43, y: 5, labelX: 35, labelY: 15, waveId: "ign" },
      { id: 4, title: "Pistão no Topo (Gap)", description: `A indicação do Pistão Morto Superior. Se a faísca (Rosa) acontecer DENTRO do buraco ou depois (à direita) dele, a moto está irremediavelmente fora de ponto ou o sistema eletrônico está corrompido, e pode 'dar tiro' (estouros no escapamento).`, x: 60, y: 50, labelX: 60, labelY: 30, waveId: "ckp" }
    ],
    waveType: "ignition-timing",
    multimeter: {
      setting: "NA",
      instructions: "O multímetro não consegue ler o avanço de ignição pois depende da relação de TEMPO entre dois eventos super rápidos. Essa medição deve ser feita EXCLUSIVAMENTE com o osciloscópio (usando 2 canais) ou com pistola estroboscópica (lâmpada de ponto).",
      expectedValues: "Não se aplica.",
      variesByModel: true,
    },
  },
  {
    id: "cdi-ac",
    name: "CDI AC (Ignição Capacitiva)",
    type: "actuator",
    shortDescription: "Módulo de ignição de motos carburadas (descarrega energia na bobina).",
    fullDescription:
      "O CDI (Capacitor Discharge Ignition) armazena a energia gerada pela bobina de força do estator em um capacitor interno e, ao receber o sinal do sensor de pulso (CKP), descarrega essa energia (um pulso de tensão positiva de alta voltagem) instantaneamente no primário da bobina de ignição, gerando a faísca na vela.",
    oscilloscopeSetup: {
      timeDiv: "5ms a 10ms",
      voltageDiv: "50V a 100V (Atenção: picos podem passar de 200V, use atenuador!)",
      triggerEdge: "Subida",
      triggerMode: "Normal",
      triggerLevel: "20V a 50V",
    },
    connectionInstructions:
      "Conecte a garra jacaré preta ao negativo da bateria ou chassi. Conecte a ponta de prova (canal 1), OBRIGATORIAMENTE com atenuador (ex: 20:1) se não suportar altas tensões, no fio que vai do CDI para a Bobina de Ignição (geralmente Preto/Amarelo na Honda).",
    waveformExplanation:
      "A forma de onda do CDI é um pico de tensão extremamente alto e de curtíssima duração. É a descarga do capacitor. Logo após o pico principal, podem ocorrer algumas oscilações amortecidas. Diferente da ignição TCI (indutiva), não há o longo tempo de 'dwell' (carregamento) antes do disparo, a subida de tensão é instantânea.\n\nComportamento em Falhas:\n• Pico muito baixo ou inexistente: O CDI pode não estar recebendo alimentação do estator (bobina de força), o capacitor interno estourou, ou não está recebendo sinal do CKP (pulso).\n• Sem oscilação residual (amortecida): Pode indicar um curto-circuito no primário da bobina de ignição, que drena a energia muito rápido sem criar ressonância.",
    waveformPhases: [
      {
        id: 1,
        title: "Disparo do Capacitor",
        description: "O momento exato em que o CDI libera a energia (100V a 400V) para o primário da bobina de ignição.",
        x: 20,
        y: 20,
        labelX: 10,
        labelY: 10,
      },
      {
        id: 2,
        title: "Oscilação Amortecida",
        description: "Dissipação da energia restante entre a bobina e o capacitor após a faísca.",
        x: 30,
        y: 60,
        labelX: 40,
        labelY: 80,
      }
    ],
    waveType: "cdi",
    multimeter: {
      setting: "Pico de Tensão (Peak Hold) em VDC ou Multímetro com Adaptador de Pico",
      instructions: "1. Conecte a ponta preta ao terra (chassi ou negativo da bateria).\n2. Conecte a ponta vermelha no fio de saída do CDI para a bobina de ignição (ex: Preto/Amarelo).\n3. Dê partida no motor (start ou pedal).",
      expectedValues: "Mínimo de 100V de pico (varia conforme o modelo e estado do estator).",
      variesByModel: true,
    },
  }
];
