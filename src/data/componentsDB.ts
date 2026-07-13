import { ComponentData } from "../types";
export const componentsDB: ComponentData[] = [
  {
    "id": "group-ckp",
    "name": "Sensor de Rotação (CKP / Pulso)",
    "type": "sensor",
    "shortDescription": "Sinais de rotação, fase e PMS (Indutivo, Hall ou Pulso).",
    "fullDescription": "Escolha o tipo de sensor de rotação utilizado na motocicleta para ver os detalhes e testes.",
    "oscilloscopeSetup": {
      "timeDiv": "",
      "voltageDiv": "",
      "triggerEdge": "",
      "triggerMode": "",
      "triggerLevel": "",
      "coupling": ""
    },
    "waveformExplanation": "",
    "waveType": "",
    "isGroup": true,
    "variants": [
      {
        "id": "ckp-indutivo",
        "detailedTeacherExplanation": "Sensor de Rotação e Fase CKP do tipo Indutivo. O eixo vertical mede a voltagem e o horizontal o tempo. \n\nEste sensor funciona como um pequeno gerador. Ele fica lendo a passagem dos dentes da roda fônica do motor. Quando um dente passa por ele, o magnetismo muda e o sensor gera uma onda suave que sobe e desce. Por isso, no osciloscópio, o sinal é uma sequência contínua de ondas senoidais, parecendo montanhas e vales.\n\nA amplitude, ou seja, a altura da onda, depende da rotação do motor. Em marcha lenta, as ondas têm cerca de 5 a 10 volts. Se você acelerar, as ondas vão se espremer e a voltagem vai subir bastante, podendo passar dos 50 volts. \n\nO mais importante desse gráfico é o ponto de falha, ou roda fônica. No meio dessas ondas contínuas, você notará que a onda fica muito esticada e atinge um pico bem maior. Esse é o espaço sem dentes na roda fônica, que serve para avisar o módulo: 'Ei, o pistão está chegando no topo!'. Se houver ruídos nessa onda longa, ou se ela sumir, a moto perde a referência de ponto, falha, ou simplesmente não pega.",
        "name": "Indutivo (Injetada TCI)"
      },
      {
        "id": "ckp-hall",
        "detailedTeacherExplanation": "Sensor de Rotação e Fase CKP do tipo Efeito Hall ou Ativo. O eixo Y é voltagem e o X é tempo.\n\nDiferente do indutivo que gera sua própria energia, o sensor Hall recebe alimentação do módulo, geralmente 5 ou 12 volts, e entrega um sinal perfeitamente quadrado. No osciloscópio, o gráfico não tem curvas, são linhas retas que vão do zero ao topo, formando retângulos, o famoso sinal digital.\n\nCada retângulo perfeito indica a passagem de um dente da roda fônica. Uma grande vantagem do sensor Hall é que a altura do sinal (a voltagem) nunca muda, não importa se o motor está devagar ou acelerando muito. \n\nA falha da roda fônica é representada por um espaço muito mais largo (uma parte baixa do gráfico mais longa). Se os 'dentes' quadrados estiverem com as bordas arredondadas ou o sinal não cair até zerar, o sensor pode estar defeituoso ou há sujeira magnética na ponta dele, enganando a injeção eletrônica.",
        "name": "Efeito Hall (Injetada)"
      },
      {
        "id": "ckp-pulso-carburada",
        "detailedTeacherExplanation": "Sensor de Pulso ou Bobina de Pulso para motos carburadas. O eixo Y é voltagem, eixo X é o tempo.\n\nEste é o sistema mais simples de rotação, geralmente com apenas um ou dois pequenos ressaltos no volante do motor. Diferente de uma roda fônica cheia de dentes, a bobina de pulso fica inerte a maior parte do tempo. O gráfico mostrará uma longa linha reta no zero.\n\nQuando o ressalto do volante passa pelo sensor, você verá um pico agudo positivo e um pico negativo rapidamente (ou vice-versa), e depois o sinal volta a ficar reto no zero. É literalmente um pulso rápido!\n\nA altura desse pico varia de 2 a 10 volts, dependendo da rotação. Se a moto não dá faísca, e o osciloscópio mostrar que essa linha não tem pulso, apenas um traço reto contínuo, a bobina de pulso está queimada ou o fio se partiu, e o CDI não sabe a hora de mandar a centelha.",
        "name": "Bobina de Pulso (Carburada CDI)"
      }
    ]
  },
  {
    "id": "group-ignition-secondary",
    "name": "Bobina de Ignição (Secundário)",
    "detailedTeacherExplanation": "Bem-vindo à análise do Secundário da Bobina de Ignição. Aqui estamos medindo a altíssima tensão que vai direto para a vela de ignição, usando uma pinça especial no cabo de vela. O eixo vertical mede os quilovolts, ou seja, milhares de volts, e o horizontal o tempo.\n\nO gráfico do secundário é o raio-X perfeito da saúde da queima de combustível. Ele começa com a linha de repouso. Em seguida, temos a linha de carregamento, refletindo o Dwell do primário. \n\nEntão, ocorre o disparo! A linha sobe numa agulha finíssima, alcançando de 10 mil a 20 mil volts. Essa é a tensão necessária para romper a resistência do ar e do combustível e criar a centelha. Esse é o pico de disparo.\n\nLogo após o pico, a linha cai para um platô mais baixo, por volta de 1 a 2 mil volts. Essa é a famosa linha de queima ou tempo de queima. Ela dura alguns milissegundos. Se essa linha estiver muito curta, a mistura pode estar pobre ou a bobina fraca. Se estiver muito enrugada, pode haver defeito na vela ou nos cabos.\n\nQuando a queima termina, a linha cai e forma as oscilações residuais, as ondinhas que indicam que sobrou energia na bobina. Uma bobina saudável sempre tem oscilações residuais. Analise sempre: Pico de disparo alto, linha de queima reta e de bom tamanho, e oscilações residuais no final.",
    "type": "actuator",
    "shortDescription": "Forma de onda de alta tensão medida no cabo de vela usando pinça.",
    "fullDescription": "Escolha o tipo de sistema de ignição da motocicleta para ver a forma de onda do secundário (cabo de vela).",
    "oscilloscopeSetup": {
      "timeDiv": "",
      "voltageDiv": "",
      "triggerEdge": "",
      "triggerMode": "",
      "triggerLevel": "",
      "coupling": ""
    },
    "waveformExplanation": "",
    "waveType": "",
    "isGroup": true,
    "variants": [
      {
        "id": "ignition-coil-secondary",
        "detailedTeacherExplanation": "Este é o sinal do Secundário da Bobina de Ignição para sistemas Injetados, o TCI. Estamos captando a altíssima tensão do cabo de vela. O eixo vertical mostra quilovolts e o horizontal, o tempo.\n\nNo início, a linha desce suavemente mostrando o carregamento magnético da bobina. Quando o módulo corta o primário, o gráfico dá um salto violento para cima, a linha de disparo, chegando muitas vezes a 15 mil volts. Esse pico gigantesco é a energia rasgando a mistura de ar e combustível para iniciar o fogo.\n\nImediatamente após o pico, a linha despenca e estabiliza num patamar horizontal. Este patamar é a Linha de Queima, o momento em que a faísca está acesa entre os eletrodos da vela, durando geralmente cerca de 1 a 2 milissegundos. Fique de olho nela! Uma linha de queima inclinada para cima indica resistência excessiva, como um cabo de vela rompido ou vela gasta.\n\nQuando a faísca apaga, a linha cai e forma ondas decrescentes chamadas de Oscilações Residuais. Sem essas ondinhas no final, a bobina está em curto-circuito interno e precisa ser trocada.",
        "name": "Injetada (TCI)"
      },
      {
        "id": "ignition-coil-secondary-cdi",
        "detailedTeacherExplanation": "Aqui vemos o sinal do Secundário para um sistema de ignição Carburada com módulo CDI. Usando uma pinça no cabo de vela, medimos a tensão no eixo vertical e o tempo no eixo horizontal.\n\nNo CDI, o gráfico secundário é bem mais agressivo e curto do que no TCI. Você não vê a fase lenta de carregamento. O gráfico sai do zero e explode imediatamente num pico altíssimo, positivo e negativo. O capacitor do CDI envia um soco de energia, e a bobina multiplica isso para milhares de volts.\n\nA característica principal do sinal secundário do CDI é que ele tem múltiplas agulhas finas subindo e descendo, parecendo uma mola apertada, com uma duração muito curta. Não existe aquela 'linha de queima' plana e longa como nas motos injetadas. A faísca do CDI é extremamente intensa, mas muito rápida.\n\nProblemas comuns aqui envolvem o pico principal estar muito baixo. Isso pode significar vela encharcada, bobina de ignição em curto ou um CDI fraco que não consegue descarregar o capacitor corretamente.",
        "name": "Carburada (CDI) - Pinça Capacitiva"
      },
      {
        "id": "ignition-coil-secondary-cdi-prox",
        "detailedTeacherExplanation": "Secundário por Aproximação. Quando a pinça não entra, a gente apenas encosta a ponta do osciloscópio no cabo. O sinal não terá voltagem real calculada, mas o formato revela a saúde da queima e se existe aquela oscilação residual salvadora indicando que a bobina está boa.",
        "name": "Carburada (CDI) - Aproximação"
      }
    ]
  },
  {
    "id": "group-ignition-primary",
    "name": "Bobina de Ignição (Primário)",
    "type": "actuator",
    "shortDescription": "Sinal elétrico de controle da bobina (12V ou descarga de CDI).",
    "fullDescription": "Escolha o tipo de sistema de ignição da motocicleta para ver o sinal do primário da bobina de ignição.",
    "oscilloscopeSetup": {
      "timeDiv": "",
      "voltageDiv": "",
      "triggerEdge": "",
      "triggerMode": "",
      "triggerLevel": "",
      "coupling": ""
    },
    "waveformExplanation": "",
      "detailedTeacherExplanation": "Bem-vindo ao estudo da Bobina de Ignição, lado Primário. O primário é a porta de entrada da energia. Vamos analisar o sinal em detalhes no osciloscópio. O eixo vertical, o Y, mede a voltagem. O eixo horizontal, o X, mede o tempo. \n\nNo momento inicial, você vê a linha subir e estabilizar em 12 volts ou cair a 0 volts, dependendo do sistema, mostrando que o módulo começou a carregar a bobina. Essa fase reta e contínua é o tempo de carregamento, conhecido como tempo de Dwell. É o tempo que a bobina tem para criar o campo magnético.\n\nLogo em seguida, ocorre o corte abrupto dessa alimentação pelo módulo. É aí que a mágica acontece. A linha dá um salto violento para cima, criando um pico gigantesco, muitas vezes passando dos 300 ou 400 volts. Esse é o momento do disparo, também chamado de Flyback. Essa energia induz a altíssima tensão no secundário para gerar a faísca na vela.\n\nDepois do pico de disparo, o sinal cai rapidamente e começa a tremer, formando pequenas ondinhas chamadas de oscilações residuais. Essas ondinhas são o resto da energia se dissipando. Se você vir o carregamento, o pico de disparo forte e as ondinhas no final, parabéns, a bobina e o módulo estão saudáveis! Se faltarem as ondinhas, a bobina pode estar em curto. Se não houver o pico, o capacitor do módulo ou a própria bobina podem estar danificados. Fique sempre de olho nesses três momentos: Carregamento, Pico de Disparo e Oscilação Residual.",
    "waveType": "",
    "isGroup": true,
    "variants": [
      {
        "id": "ignition-coil",
        "detailedTeacherExplanation": "Neste gráfico da Bobina de Ignição Primária do tipo TCI, Injetada, o eixo vertical mede a voltagem e o horizontal o tempo. No início, a linha está na voltagem da bateria, cerca de 12 a 14 volts. \n\nQuando o módulo decide carregar a bobina, ele aterra o circuito, e a linha cai instantaneamente para quase zero volts. Essa fase reta embaixo é o tempo de Dwell, o período em que a bobina está se enchendo de energia magnética.\n\nDe repente, o módulo corta esse aterramento. Sem o terra, o campo magnético colapsa violentamente e gera um pico gigantesco de tensão, que salta a linha para cima de 300 a 400 volts! Esse é o pico de disparo primário ou Flyback.\n\nImediatamente após o pico, a vela solta a faísca (o que vemos como a linha de queima) e, logo depois que a queima acaba, a energia que sobrou na bobina se dissipa, formando ondulações no gráfico, as chamadas oscilações residuais. Se o sinal tiver um Dwell limpo, um pico de disparo bem alto e essas ondinhas no final, seu sistema primário de ignição está perfeito. Falta de ondinhas indica espiras em curto na bobina.",
        "name": "Injetada (TCI - 12V Dwell)"
      },
      {
        "id": "cdi-dc",
        "detailedTeacherExplanation": "Aqui temos o Primário da Bobina de Ignição para motos Carburadas com módulo CDI alimentado por Bateria, o famoso CDI DC. No osciloscópio, o eixo Y é a tensão e o X é o tempo.\n\nDiferente do TCI, o CDI tem um capacitor interno que guarda energia e descarrega tudo de uma vez na bobina. O gráfico começa no zero, pois a bobina está em repouso. De repente, no momento exato do ponto de ignição, vemos um pico finíssimo e altíssimo, que dispara lá para cima, passando facilmente de 200 volts. \n\nEsse é o momento em que o capacitor do CDI injetou toda a sua carga no primário da bobina. É um evento extremamente rápido, dura frações de milissegundo. Imediatamente após esse pico positivo, o sinal costuma dar um rebote negativo, caindo abaixo de zero e depois oscilando até zerar novamente. \n\nO que analisar aqui? A altura desse primeiro pico! Se ele estiver baixinho, com menos de 100 volts, o CDI está com defeito e não está carregando o capacitor direito, ou a bateria da moto está fraca, já que esse CDI precisa de 12 volts contínuos para trabalhar.",
        "name": "Carburada (CDI DC - Bateria)"
      },
      {
        "id": "cdi-ac",
        "detailedTeacherExplanation": "Nesta tela, analisamos o Primário da Bobina de Ignição de um sistema CDI AC, aquele CDI antigo alimentado diretamente pelo estator, sem depender da bateria. O eixo Y é voltagem, o eixo X é tempo.\n\nAssim como no CDI de bateria, o funcionamento baseia-se num disparo rápido de um capacitor interno. A linha do gráfico fica zerada e, de forma repentina, dispara em um pico vertiginoso que cruza a tela, chegando a 150 ou 200 volts num instante mínimo. Esse é o despejo de energia na bobina.\n\nApós esse salto violento, a tensão rebota para baixo de zero, formando picos negativos, e oscila até estabilizar no centro novamente. Como esse sistema depende da energia gerada pelo estator (bobina de força), se esse pico no primário estiver fraco ou inexistente, você deve primeiro investigar se o estator está mandando a voltagem alternada (AC) correta para alimentar o CDI. Se a alimentação chega e o pico primário sai fraco, o defeito está no módulo CDI.",
        "name": "Carburada (CDI AC - Estator)"
      }
    ]
  },
  {
    "id": "cdi-dc",
    "detailedTeacherExplanation": "Aqui temos o Primário da Bobina de Ignição para motos Carburadas com módulo CDI alimentado por Bateria, o famoso CDI DC. No osciloscópio, o eixo Y é a tensão e o X é o tempo.\n\nDiferente do TCI, o CDI tem um capacitor interno que guarda energia e descarrega tudo de uma vez na bobina. O gráfico começa no zero, pois a bobina está em repouso. De repente, no momento exato do ponto de ignição, vemos um pico finíssimo e altíssimo, que dispara lá para cima, passando facilmente de 200 volts. \n\nEsse é o momento em que o capacitor do CDI injetou toda a sua carga no primário da bobina. É um evento extremamente rápido, dura frações de milissegundo. Imediatamente após esse pico positivo, o sinal costuma dar um rebote negativo, caindo abaixo de zero e depois oscilando até zerar novamente. \n\nO que analisar aqui? A altura desse primeiro pico! Se ele estiver baixinho, com menos de 100 volts, o CDI está com defeito e não está carregando o capacitor direito, ou a bateria da moto está fraca, já que esse CDI precisa de 12 volts contínuos para trabalhar.",
    "hidden": true,
    "name": "Bobina de Ignição (Primário) - Carburada (CDI DC)",
    "type": "actuator",
    "shortDescription": "Módulo de ignição alimentado pela bateria (12V) que descarrega energia na bobina.",
    "fullDescription": "O CDI DC (Corrente Contínua) possui um conversor interno que eleva os 12V da bateria para cerca de 200V a 400V, armazenando em um capacitor. Ao receber o sinal do CKP, ele descarrega essa energia instantaneamente no primário da bobina de ignição, gerando a faísca. A grande diferença para o CDI AC é que a alimentação vem da bateria pós-chave e não do estator.",
    "oscilloscopeSetup": {
      "timeDiv": "5ms a 10ms",
      "voltageDiv": "50V a 100V (Atenção: picos podem passar de 200V, use atenuador!)",
      "triggerEdge": "Subida",
      "triggerMode": "Normal",
      "triggerLevel": "20V a 50V",
      "coupling": "DC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Conecte a garra jacaré preta ao negativo da bateria ou chassi. Conecte a ponta de prova (canal 1), OBRIGATORIAMENTE com atenuador (ex: 20:1) se não suportar altas tensões, no fio que vai do CDI para a Bobina de Ignição.",
    "waveformExplanation": "A forma de onda de saída do CDI DC para a bobina é semelhante à do CDI AC: um pico de tensão positivo de curtíssima duração, seguido de oscilações amortecidas.\n\nComportamento em Falhas:\n• Sem pico de tensão: Verifique se chegam 12V no CDI (pós-chave). Sem bateria carregada, o CDI DC não funciona.\n• Oscilação muito curta: Curto no primário da bobina de ignição ou fuga de corrente no sistema de ignição.",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Disparo do Capacitor",
        "description": "O CDI libera a energia armazenada (elevada a partir dos 12V) para o primário da bobina de ignição.",
        "x": 20,
        "y": 20,
        "labelX": 10,
        "labelY": 10
      },
      {
        "id": 2,
        "title": "Oscilação Amortecida",
        "description": "Dissipação da energia restante no circuito da bobina após o disparo principal.",
        "x": 30,
        "y": 60,
        "labelX": 40,
        "labelY": 80
      }
    ],
    "waveType": "cdi",
    "multimeter": {
      "setting": "Tensão Contínua (DCV) e Pico de Tensão (Peak Hold)",
      "instructions": "1. No fio de alimentação do CDI, meça tensão contínua (deve ter próximo de 12V).\n2. No fio de saída para a bobina, use adaptador de Pico (Peak Hold) para capturar o pico de disparo na partida.",
      "expectedValues": "Alimentação 12V constante (DCV). Disparo com pico alto na partida (Peak).",
      "variesByModel": false,
      "teacherExplanation": "Para o diagnóstico do Sensor de Rotação, conhecido como CKP ou Bobina de Pulso, a verificação precisa no multímetro é crucial porque esta peça é o 'maestro' do motor, ditando o momento da faísca e da injeção. Ao medir na escala de resistência ou verificar a voltagem de pico, estamos atestando a saúde magnética e o isolamento do cobre. Um valor muito baixo significa que o verniz protetor derreteu, criando um curto-circuito que enfraquece o sinal gerado. Já o circuito aberto indica fio rompido, cortando 100% da leitura e apagando o motor. O grande segredo da oficina está na temperatura: materiais dilatam no calor. Se a moto falha depois de rodar, é a expansão térmica abrindo uma trinca no sensor; portanto, teste-o a quente para não condenar a peça errada."
    },
    "symptoms": [
      "Motor não pega se a bateria estiver descarregada",
      "Cortes em aceleração caso haja queda de tensão 12V",
      "Moto apaga subitamente"
    ]
  },
  {
    "id": "ckp-indutivo",
    "detailedTeacherExplanation": "Sensor de Rotação e Fase CKP do tipo Indutivo. O eixo vertical mede a voltagem e o horizontal o tempo. \n\nEste sensor funciona como um pequeno gerador. Ele fica lendo a passagem dos dentes da roda fônica do motor. Quando um dente passa por ele, o magnetismo muda e o sensor gera uma onda suave que sobe e desce. Por isso, no osciloscópio, o sinal é uma sequência contínua de ondas senoidais, parecendo montanhas e vales.\n\nA amplitude, ou seja, a altura da onda, depende da rotação do motor. Em marcha lenta, as ondas têm cerca de 5 a 10 volts. Se você acelerar, as ondas vão se espremer e a voltagem vai subir bastante, podendo passar dos 50 volts. \n\nO mais importante desse gráfico é o ponto de falha, ou roda fônica. No meio dessas ondas contínuas, você notará que a onda fica muito esticada e atinge um pico bem maior. Esse é o espaço sem dentes na roda fônica, que serve para avisar o módulo: 'Ei, o pistão está chegando no topo!'. Se houver ruídos nessa onda longa, ou se ela sumir, a moto perde a referência de ponto, falha, ou simplesmente não pega.",
    "hidden": true,
    "name": "Sensor CKP (Rotação) - Indutivo (Injetada)",
    "type": "sensor",
    "shortDescription": "Mede a rotação do motor e Ponto Morto Superior (PMS).",
    "fullDescription": "O sensor de rotação indutivo é um gerador de corrente alternada. Ele cria um campo magnético que é alterado pela passagem dos dentes da roda fônica. A lacuna de dentes indica para a ECU a posição exata do virabrequim (PMS). A amplitude do sinal aumenta conforme a aceleração da moto.",
    "oscilloscopeSetup": {
      "timeDiv": "10ms a 20ms",
      "voltageDiv": "5V a 10V (pode gerar mais de 50V em alta rotação)",
      "triggerEdge": "Subida ou Descida",
      "triggerMode": "Normal",
      "triggerLevel": "2V a 5V",
      "coupling": "AC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Conecte a garra jacaré preta no negativo da bateria ou em um bom ponto de aterramento do motor. Com a ponta de prova (canal 1), espete o fio de sinal do sensor CKP. Geralmente o sensor possui dois fios (sinal e referência negativa), meça nos dois se não souber qual é o de sinal.\n\n⚠️ IMPORTANTE: Só após realizar todas as conexões físicas do osciloscópio, LIGUE a chave de ignição e dê a partida no motor para realizar o teste.",
    "waveformExplanation": "Imagine que o sensor de rotação (CKP) é como um microfone escutando os dentes da engrenagem do motor passarem. Toda vez que um dente de metal passa perto dele, ele gera uma onda no gráfico. \n\nSe a moto estiver na marcha lenta, as ondas ficam baixinhas. Se você acelerar, as ondas crescem e ficam mais espremidas, porque os dentes estão passando muito mais rápido. \n\nComportamento e Defeitos:\n• **Ondas Tortas ou Menores**: Pode indicar que a engrenagem (roda fônica) está torta, amassada ou tem sujeira metálica grudada no sensor.\n• **Onda não cresce ao acelerar**: O sensor pode estar fraco ou muito longe da engrenagem.\n• **O 'Buraco' (Gap)**: É o espaço sem dente na engrenagem. É a referência principal! Se o módulo não ver esse buraco perfeitamente desenhado na tela, ele não sabe a hora de dar a faísca e a moto não liga.",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Aproximação do Dente (+)",
        "description": "O dente de metal começa a passar perto do sensor, 'puxando' a linha do gráfico para cima. Se essa subida estiver fraca ou irregular, a roda fônica pode estar torta ou o sensor muito distante.",
        "x": 20,
        "y": 35,
        "labelX": 20,
        "labelY": 10
      },
      {
        "id": 2,
        "title": "Alinhamento / Cruzamento Zero (0V)",
        "description": "O meio do dente está exatamente em frente ao sensor. Neste exato milissegundo, a força magnética não varia, então a linha cruza perfeitamente a marca de zero (0V). É aqui que o módulo 'lê' a posição com precisão.",
        "x": 24,
        "y": 50,
        "labelX": 10,
        "labelY": 50
      },
      {
        "id": 3,
        "title": "Afastamento do Dente (-)",
        "description": "O dente vai se afastando e a linha desce rapidamente para a parte negativa. Se a descida não for simétrica com a subida, pode haver sujeira (limalha) no sensor distorcendo o campo.",
        "x": 28,
        "y": 65,
        "labelX": 28,
        "labelY": 90
      },
      {
        "id": 4,
        "title": "Sincronismo / Falha (Gap)",
        "description": "O 'buraco' na engrenagem (falha de dentes) passa pelo sensor. Esse espaço longo gera a perturbação maior e serve para avisar o módulo: 'O pistão chegou no topo!'. Se não estiver perfeitamente desenhado, a moto não liga.",
        "x": 59,
        "y": 25,
        "labelX": 59,
        "labelY": 10
      }
    ],
    "waveType": "sine-gap",
    "multimeter": {
      "teacherExplanation": "Para o diagnóstico do Sensor CKP Indutivo, a escala de 2000 Ohms é utilizada porque estamos medindo a resistência de uma bobina magnética densa. Ele converte a passagem dos dentes da roda fônica em pulsos de Tensão AC para a centralina (ECU). Um desvio da resistência para baixo (ex: 50 Ohms) evidencia um curto-circuito interno: o isolamento do fio esmaltado cedeu, a corrente 'pula' caminho, e o sinal gerado torna-se fraco, dificultando o reconhecimento pela ECU. Uma resistência infinita indica circuito aberto, a bobina se partiu internamente. A engenharia alerta: este sensor fica mergulhado em óleo quente no estator. Se a moto corta a ignição após esquentar, isso ocorre porque o fio dilata no calor e separa fisicamente no ponto rompido. É imperativo repetir o teste Ohms logo após a moto apresentar o defeito na rua, ainda com o motor pelando de quente.",
      "setting": "OHM_2000",
      "instructions": "Desconecte o sensor. Use a escala de Resistência (Ohms 2000). Meça entre os dois pinos do sensor. Para testar o sinal, conecte o sensor, coloque na escala de Tensão AC (200V) e dê a partida.",
      "expectedValues": "Resistência: ~150 a 300 Ohms. Sinal Tensão AC: 1.5V a 5V+ durante a partida.",
      "variesByModel": true,
      "minValue": 150,
      "maxValue": 300,
      "unit": "Ω",
      "temperatureObservation": "Recomenda-se medir a frio (20°C). Em muitos casos de defeito, ao esquentar o motor a resistência tende ao infinito (circuito aberto).",
    }
  },
  {
    "id": "ckp-pulso-carburada",
    "detailedTeacherExplanation": "Sensor de Pulso ou Bobina de Pulso para motos carburadas. O eixo Y é voltagem, eixo X é o tempo.\n\nEste é o sistema mais simples de rotação, geralmente com apenas um ou dois pequenos ressaltos no volante do motor. Diferente de uma roda fônica cheia de dentes, a bobina de pulso fica inerte a maior parte do tempo. O gráfico mostrará uma longa linha reta no zero.\n\nQuando o ressalto do volante passa pelo sensor, você verá um pico agudo positivo e um pico negativo rapidamente (ou vice-versa), e depois o sinal volta a ficar reto no zero. É literalmente um pulso rápido!\n\nA altura desse pico varia de 2 a 10 volts, dependendo da rotação. Se a moto não dá faísca, e o osciloscópio mostrar que essa linha não tem pulso, apenas um traço reto contínuo, a bobina de pulso está queimada ou o fio se partiu, e o CDI não sabe a hora de mandar a centelha.",
    "hidden": true,
    "name": "Sensor de Pulso (CKP) - Carburada",
    "type": "sensor",
    "shortDescription": "Sensor indutivo simples que lê um único ressalto por volta.",
    "fullDescription": "Nas motos carburadas (como Titan 150 2004-2008, CG 125, etc.), o sensor de rotação é chamado frequentemente de 'Bobina de Pulso'. Diferente dos sistemas de injeção que leem vários dentes (roda fônica), este sensor lê apenas um longo ressalto no volante magnético. Ele gera um pulso positivo e um pulso negativo por revolução, informando ao CDI o momento de disparar a centelha.",
    "oscilloscopeSetup": {
      "timeDiv": "10ms a 20ms",
      "voltageDiv": "2V a 5V",
      "triggerEdge": "Subida ou Descida",
      "triggerMode": "Normal",
      "triggerLevel": "1V a 2V",
      "coupling": "AC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Conecte a garra jacaré preta no negativo da bateria ou chassi. Espete a ponta de prova no fio de sinal da bobina de pulso (frequentemente Azul/Amarelo na Honda). Dê a partida no motor.",
    "waveformExplanation": "O gráfico mostra apenas uma 'lombada' positiva e uma descida negativa a cada volta completa do motor.\n\n• **Pulso Positivo**: Ocorre quando a ponta do ressalto no volante magnético passa pelo sensor.\n• **Caminho Reto**: Enquanto o ressalto longo está passando (ou enquanto não há ressalto), o sinal volta a 0V.\n• **Pulso Negativo**: Ocorre quando o final do ressalto se afasta do sensor. A distância entre os pulsos indica a rotação. Se o sinal for fraco, o CDI não reconhece e a moto não dá faísca.",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Aproximação do Ressalto (+)",
        "description": "A ponta inicial do ressalto do volante passa pelo sensor, gerando um pico de tensão positivo.",
        "x": 35,
        "y": 20,
        "labelX": 25,
        "labelY": 10
      },
      {
        "id": 2,
        "title": "Afastamento do Ressalto (-)",
        "description": "O final do ressalto se afasta do sensor, induzindo uma tensão negativa de amplitude semelhante.",
        "x": 65,
        "y": 80,
        "labelX": 75,
        "labelY": 90
      }
    ],
    "waveType": "pulse-single",
    "multimeter": {
      "teacherExplanation": "Para o diagnóstico da Bobina de Pulso de motos carburadas, a escala de 2000 Ohms é o parâmetro padrão para investigar o estado do micro-estator magnético que sinaliza ao CDI a hora do disparo da centelha. Fisicamente, estamos aferindo se a fiação extremamente fina que forma o rolo da bobina mantém a resistência entre 100 e 300 Ohms. Se você registrar uma resistência zero ou muito próxima a isso, o diagnóstico é um curto interno causado por atrito, oxidação ou superaquecimento, impedindo que o pulso chegue com a voltagem necessária ao CDI. Por outro lado, um multímetro sem leitura denota que o circuito feneceu. Uma falha comum em carburadas é a oxidação agressiva nos conectores que sobem do motor. Sempre meça a bobina de pulso desconectada para não sofrer interferência do chicote elétrico e verifique se o conector não está apresentando isolamento por zinabre (zinco oxidado) ou carbonização do contato.",
      "setting": "OHM_2000",
      "instructions": "Com o sensor desconectado, meça a resistência entre o fio de sinal e o negativo (ou os dois fios do sensor).",
      "expectedValues": "Resistência geralmente entre 100 e 300 Ohms (ex: Honda Titan 150).",
      "variesByModel": true,
      "minValue": 100,
      "maxValue": 300,
      "unit": "Ω",
      "temperatureObservation": "Meça a frio. Quando esquenta pode apresentar circuito aberto em caso de defeito.",
    }
  },
  {
    "id": "ckp-hall",
    "detailedTeacherExplanation": "Sensor de Rotação e Fase CKP do tipo Efeito Hall ou Ativo. O eixo Y é voltagem e o X é tempo.\n\nDiferente do indutivo que gera sua própria energia, o sensor Hall recebe alimentação do módulo, geralmente 5 ou 12 volts, e entrega um sinal perfeitamente quadrado. No osciloscópio, o gráfico não tem curvas, são linhas retas que vão do zero ao topo, formando retângulos, o famoso sinal digital.\n\nCada retângulo perfeito indica a passagem de um dente da roda fônica. Uma grande vantagem do sensor Hall é que a altura do sinal (a voltagem) nunca muda, não importa se o motor está devagar ou acelerando muito. \n\nA falha da roda fônica é representada por um espaço muito mais largo (uma parte baixa do gráfico mais longa). Se os 'dentes' quadrados estiverem com as bordas arredondadas ou o sinal não cair até zerar, o sensor pode estar defeituoso ou há sujeira magnética na ponta dele, enganando a injeção eletrônica.",
    "hidden": true,
    "name": "Sensor CKP (Rotação) - Hall",
    "type": "sensor",
    "shortDescription": "Sensor digital de rotação e fase.",
    "fullDescription": "O sensor de efeito Hall emite um sinal digital (onda quadrada) para a ECU. Ele precisa de alimentação (geralmente 5V ou 12V), um aterramento e emite o sinal. É muito comum em motos modernas (ex: Honda) para controle ultrapreciso.",
    "oscilloscopeSetup": {
      "timeDiv": "10ms a 20ms",
      "voltageDiv": "2V",
      "triggerEdge": "Subida",
      "triggerMode": "Normal",
      "triggerLevel": "2.5V",
      "coupling": "DC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Aterre a garra preta do osciloscópio no negativo da bateria. Identifique os fios do sensor (Alimentação 5V/12V, Terra e Sinal). Espete a ponta de prova do canal 1 no fio de Sinal. Você pode confirmar a alimentação espetando no fio positivo (deve ser uma linha reta de 5V ou 12V).\n\n⚠️ IMPORTANTE: Só após conectar as garras e espetar as agulhas com segurança, LIGUE a chave de ignição para alimentar o sensor e realizar o teste.",
    "waveformExplanation": "O sensor Hall é mais moderno. Em vez de ler os dentes como um microfone criando ondas suaves, ele funciona como um 'interruptor' super rápido (Liga/Desliga). Ele entrega a informação já mastigada para o módulo em formato de quadrados perfeitos.\n\nComportamento e Defeitos:\n• **Tamanho Fixo**: Não importa o quanto você acelere a moto, a altura do quadrado nunca muda. O que muda é que eles ficam mais finos e rápidos.\n• **Problema de Aterramento (Fio Terra)**: A parte de baixo da onda DEVE encostar perfeitamente no 0V. Se ela ficar flutuando (não chegar no zero), o fio terra está com mau contato, e a moto vai falhar ou apagar do nada.\n• **Cantos Arredondados**: Os cantos do quadrado devem ser retos como uma parede. Se começarem a ficar curvos, o sensor está 'cansado' ou o fio do sinal está com muita resistência (oxidado).",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Nível Lógico Baixo (0V)",
        "description": "O sensor encosta o sinal no 'terra' (0V). Atenção: se a linha inferior não ficar cravada no zero (flutuando acima), o fio terra tem mau contato, causando falhas graves em alta rotação.",
        "x": 15,
        "y": 80,
        "labelX": 15,
        "labelY": 95
      },
      {
        "id": 2,
        "title": "Borda de Subida/Descida",
        "description": "Mudança instantânea de estado. Em um sensor bom, essa linha vertical é reta como uma parede. Se começar a ficar levemente curvada, o sensor está fadigado ou há excesso de resistência no fio.",
        "x": 21,
        "y": 50,
        "labelX": 8,
        "labelY": 50
      },
      {
        "id": 3,
        "title": "Nível Lógico Alto (Vref)",
        "description": "A parte alta da onda (tensão de referência, 5V ou 12V). Deve ser uma linha plana e estável. Tremulações ou quedas aqui indicam mau funcionamento do regulador do módulo de injeção.",
        "x": 25,
        "y": 20,
        "labelX": 25,
        "labelY": 5
      },
      {
        "id": 4,
        "title": "Gap de Sincronismo",
        "description": "A falha (buraco) na engrenagem gera esse patamar muito mais longo. É a assinatura de que o pistão chegou ao ponto morto superior, o referencial absoluto para injetar e dar faísca.",
        "x": 53,
        "y": 80,
        "labelX": 53,
        "labelY": 95
      }
    ],
    "waveType": "square-gap",
    "multimeter": {
      "teacherExplanation": "Para o diagnóstico do Sensor CKP tipo Hall, a abordagem muda de Resistência para Tensão DC (na escala de 20V) porque este não é um sensor indutivo passivo, e sim um chip eletrônico (semicondutor) ativo que precisa de alimentação. Fisicamente, estamos medindo se o CDI ou a injeção está enviando os 5V ou 12V necessários para energizar o cristal de Efeito Hall. No pino de sinal, queremos ver uma comutação on/off nítida ao girar a roda. Se o multímetro aponta alimentação zerada, o problema não está no sensor, mas no chicote rompido ou na própria central com defeito de fonte interna. Se a alimentação está OK, mas o sinal não oscila ao girar o motor, significa que o semicondutor do chip queimou e o sensor entrou em colapso. O sensor Hall é extremamente sensível à voltagem instável; verifique picos de carga do retificador que costumam ser a causa principal da queima prematura deste componente em motos premium.",
      "setting": "DCV_20",
      "instructions": "Com a chave ligada e o sensor conectado: Meça a alimentação (escala de 20V DC) entre o positivo e terra. Meça o sinal espetando o fio de sinal e girando a roda levemente.",
      "expectedValues": "Alimentação: 5V ou 12V. Sinal (Tensão DC): Oscila entre 0V e a tensão de alimentação (5V ou 12V) a cada dente.",
      "variesByModel": true,
      "minValue": 0,
      "maxValue": 5,
      "unit": "V",
      "temperatureObservation": "Diferente do indutivo, não costuma ser afetado por temperatura, mas conectores sujos podem causar resistência que varia com a dilatação térmica.",
    }
  },
  {
    "id": "injector",
    "detailedTeacherExplanation": "Chegou a hora do Bico Injetor! Um atuador vital.\n\nO que acontece no gráfico?\nO módulo manda 12V constante para um lado do bico. Quando quer injetar, ele aterra o outro pino.\n1. A linha cai a 0V (ou próximo de zero) -> O bico abriu.\n2. O tempo que a linha fica embaixo é o Tempo de Injeção (largura do pulso - Ti).\n3. Quando o módulo corta o terra, a bobina do bico gera um pico de alta tensão indutiva (flyback), que pode chegar a 60V, 80V ou mais, depois estabiliza em 12V.\n\nOnde pegar as falhas:\n- Motor falhando? Veja se o Tempo de Injeção acompanha a aceleração. Ele deve aumentar na acelerada brusca e diminuir na desaceleração (cut-off, onde o pulso pode até sumir).\n- Pico de Flyback: Se o pico de tensão ao fechar o bico for muito baixo (ex: menos de 30V), a bobina interna do bico está em curto! Isso faz o bico ficar lento ou aquecer demais o módulo.\n- Bico gotejando (problema mecânico): O osciloscópio avalia a parte elétrica. O bico pode ter uma onda elétrica perfeita, mas a agulha travada aberta, afogando a moto.\n- Falta de 12V: Se a linha de base não está cravada na voltagem da bateria, verifique relés e chicote, a alimentação está fraca!",
    "name": "Bico Injetor",
    "type": "actuator",
    "shortDescription": "Atuador eletromagnético que injeta combustível.",
    "fullDescription": "O injetor é uma válvula solenoide. Ele recebe 12V constante (pós-chave ou relé) e a ECU controla o tempo de injeção aterrando o circuito (pulsando o negativo).",
    "oscilloscopeSetup": {
      "timeDiv": "1ms a 2ms",
      "voltageDiv": "20V",
      "triggerEdge": "Descida",
      "triggerMode": "Normal",
      "triggerLevel": "10V",
      "coupling": "DC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Conecte a garra preta no negativo da bateria. No bico injetor há dois fios: um recebe alimentação constante (12V) e o outro é o pulso negativo controlado pela ECU. Espete a ponta de prova (canal 1) no fio de pulso negativo.\n\n⚠️ IMPORTANTE: Só após finalizar as conexões das garras e agulhas, LIGUE a chave de ignição e funcione o motor para realizar o teste.",
    "waveformExplanation": "O bico injetor é uma 'torneira elétrica' com uma mola super forte dentro. O gráfico mostra exatamente a briga entre a força elétrica puxando para abrir a torneira, e a força da mola empurrando para fechar.\n\nComportamento e Defeitos:\n• **Tempo de Abertura (Pulso 0V)**: É a largura da parte de baixo do gráfico. Se a moto estiver fria ou você acelerar, o módulo alarga essa parte para jogar mais combustível.\n• **O Pico Alto (Flyback)**: Quando o módulo desliga o bico, a energia dá um 'coice' para cima (pode chegar a quase 100V). Se esse pico estiver muito baixinho (ex: só vai até 30V), a bobina de dentro do bico está queimando (em curto).\n• **A 'Corcovinha' (Pintle Bump)**: O detalhe mais valioso! Aquela ondinha no meio da descida mostra o exato milissegundo em que a agulha de metal bateu no fundo fechando o bico. Se essa corcova sumir, significa que o bico travou aberto ou a mola quebrou (defeito mecânico grave, mesmo a parte elétrica estando boa!).",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Repouso / Tensão de Alimentação",
        "description": "Bico em repouso. A tensão da bateria está no circuito aguardando o módulo. O valor ideal deve estar entre um mínimo de 12V e um máximo de 14.5V (com motor ligado). Valores abaixo do mínimo indicam problema no relé ou fiação.",
        "x": 15,
        "y": 70,
        "labelX": 15,
        "labelY": 50
      },
      {
        "id": 2,
        "title": "Abertura (Tempo de Injeção)",
        "description": "O módulo 'liga' o bico aterrando o fio (0V). Quanto mais larga for essa área baixa, mais combustível é injetado. Tempo padrão: de 2.0ms a 4.0ms em marcha lenta (mínimo típico). Em acelerações rápidas, pode chegar a um máximo de 10ms a 15ms. Se não encostar no 0V, o aterramento interno do módulo está comprometido.",
        "x": 42,
        "y": 90,
        "labelX": 42,
        "labelY": 75
      },
      {
        "id": 3,
        "title": "Pico Indutivo (Flyback)",
        "description": "O módulo 'desliga' o bico. O campo magnético colapsa e cria um pico altíssimo. O pico ideal de tensão (Flyback) deve ter um mínimo de 60V e um máximo em torno de 100V. Se esse pico for muito baixo (ex: só sobe até 30V, abaixo do mínimo), a bobina do injetor está em curto.",
        "x": 55.5,
        "y": 15,
        "labelX": 45,
        "labelY": 15
      },
      {
        "id": 4,
        "title": "Fechamento Mecânico (Pintle Bump)",
        "description": "A 'corcovinha' (Pintle Bump): O detalhe mais valioso! Mostra o momento exato em que a agulha de metal fecha fisicamente impulsionada pela mola. Se essa ondinha sumir, o bico travou mecanicamente ou a mola quebrou.",
        "x": 58.5,
        "y": 48,
        "labelX": 70,
        "labelY": 25
      },
      {
        "id": 5,
        "title": "Estabilização",
        "description": "A energia se dissipa e o bico volta a descansar nos 12V. Uma linha limpa indica que não há interferências no chicote.",
        "x": 85,
        "y": 70,
        "labelX": 85,
        "labelY": 50
      }
    ],
    "waveType": "injector",
    "multimeter": {
      "teacherExplanation": "Para o diagnóstico do Bico Injetor, adotamos a escala de 200 Ohms porque ele não passa de uma válvula solenóide – ou seja, um eletroímã simples que levanta a agulha de injeção ao receber um pulso negativo da ECU. Ao medir os dois pinos, verificamos a integridade desse eletroímã. Esperamos valores pequenos, normalmente entre 10 e 15 Ohms. Uma leitura de zero Ohms denuncia um injetor em curto total, o que é um risco fatal, pois a alta corrente gerada queimará irreversivelmente o driver (transistor) do bico dentro da injeção eletrônica (ECU). Uma resistência altíssima relata a queima da bobina solenóide, travando o injetor fechado e empobrecendo drasticamente a mistura. Dica técnica de ouro: muitas vezes o injetor marca os 12 Ohms perfeitos a frio. Mas como a peça absorve todo o calor do cabeçote do motor, a resistência aumenta (lei da termodinâmica em condutores). O teste real da bobina do injetor deve ser refeito a quente, logo após a moto apresentar falha na subida de giro, atestando se a inércia eletromagnética não está sofrendo um atraso térmico.",
      "setting": "OHM_200",
      "instructions": "Desconecte o bico. Escala de Resistência (Ohms 200). Meça entre os pinos do bico. Para testar pulso, use LED de teste (caneta polaridade), pois o multímetro não pega a velocidade do pulso.",
      "expectedValues": "Resistência: Normalmente entre 10 a 15 Ohms (podendo variar para injetores de baixa impedância).",
      "variesByModel": true,
      "minValue": 10,
      "maxValue": 15,
      "unit": "Ω",
      "temperatureObservation": "A resistência deve ser medida preferencialmente com motor frio. Bobinas fadigadas podem entrar em curto ou abrir quando aquecidas.",
    }
  },
  {
    "id": "ignition-coil-secondary",
    "detailedTeacherExplanation": "Este é o sinal do Secundário da Bobina de Ignição para sistemas Injetados, o TCI. Estamos captando a altíssima tensão do cabo de vela. O eixo vertical mostra quilovolts e o horizontal, o tempo.\n\nNo início, a linha desce suavemente mostrando o carregamento magnético da bobina. Quando o módulo corta o primário, o gráfico dá um salto violento para cima, a linha de disparo, chegando muitas vezes a 15 mil volts. Esse pico gigantesco é a energia rasgando a mistura de ar e combustível para iniciar o fogo.\n\nImediatamente após o pico, a linha despenca e estabiliza num patamar horizontal. Este patamar é a Linha de Queima, o momento em que a faísca está acesa entre os eletrodos da vela, durando geralmente cerca de 1 a 2 milissegundos. Fique de olho nela! Uma linha de queima inclinada para cima indica resistência excessiva, como um cabo de vela rompido ou vela gasta.\n\nQuando a faísca apaga, a linha cai e forma ondas decrescentes chamadas de Oscilações Residuais. Sem essas ondinhas no final, a bobina está em curto-circuito interno e precisa ser trocada.",
    "hidden": true,
    "name": "Bobina de Ignição (Secundário) - Injetada (TCI)",
    "type": "actuator",
    "shortDescription": "Forma de onda de alta tensão medida no cabo de vela usando pinça capacitiva.",
    "fullDescription": "A onda do secundário da bobina reflete diretamente o que está acontecendo dentro da câmara de combustão. Utilizando uma pinça capacitiva presa ao cabo de vela (ou uma pinça COP para bobinas tipo caneta), você consegue ler tensões que chegam a 30.000V. A análise desse gráfico é a forma definitiva de diagnosticar falhas de queima, misturas ricas/pobres, velas desgastadas ou cabos em curto.",
    "oscilloscopeSetup": {
      "timeDiv": "1ms a 2ms",
      "voltageDiv": "Usar pinça capacitiva (geralmente configura-se o canal para 10kV ou 20kV).",
      "triggerEdge": "Subida (Rising) ou Descida dependendo da polaridade da centelha",
      "triggerMode": "Normal",
      "triggerLevel": "3kV a 5kV (ajuste para capturar a queima)",
      "coupling": "DC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Obrigatório o uso de Pinça Capacitiva (Secundário) ou Pinça COP. Prenda a pinça ao redor do cabo de vela (ou sobre a bobina COP). Conecte o aterramento da pinça no negativo da bateria ou chassi. Se o gráfico ficar de cabeça para baixo, ative a opção 'Inverter' (Invert) no osciloscópio.",
    "waveformExplanation": "O gráfico do **Secundário** é a leitura real da alta tensão que vai para a vela. Ao contrário do primário que começa em 12V e cai, o secundário começa em 0V e tem um formato ligeiramente diferente no disparo.\n\n• **Tensão de Disparo (Spike)**: É a voltagem colossal que a bobina precisou gerar para romper a resistência do ar e pular a faísca (chega a 10kV ~ 30kV). Velas muito gastas exigem força excessiva e o pico sobe demais.\n• **Tempo e Linha de Queima (Burn Line)**: Mostra o exato momento e o tempo que a faísca ficou acesa queimando a mistura. Se for muito curta ou tremer demais, a centelha está 'apagando' cedo (mistura pobre, bico sujo).\n• **Oscilações Residuais**: Revela a saúde interna da bobina. Ausência dessas ondinhas é sinal de curto nas espiras internas.",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Pico de Fechamento",
        "description": "Pequena oscilação (geralmente negativa) gerada no momento exato em que o módulo aterra o circuito primário para iniciar o carregamento.",
        "x": 15.5,
        "y": 90,
        "labelX": 15.5,
        "labelY": 95
      },
      {
        "id": 2,
        "title": "Carregamento (Dwell Secundário)",
        "description": "Espelho do primário. A energia está se acumulando na bobina. O tempo deve ser igual ao do primário.",
        "x": 31,
        "y": 80,
        "labelX": 31,
        "labelY": 70
      },
      {
        "id": 3,
        "title": "Tensão de Disparo (Spike)",
        "description": "É a força necessária para romper a resistência do ar na vela. O pico sobe até romper a folga (geralmente de 10kV a 15kV). Picos acima de 20kV indicam folga excessiva ou cabos ruins. Picos muito curtos indicam curto-circuito.",
        "x": 45.5,
        "y": 5,
        "labelX": 35,
        "labelY": 15
      },
      {
        "id": 4,
        "title": "Linha de Queima (Burn Line)",
        "description": "O momento exato em que a faísca está acesa queimando a mistura ar-combustível. Deve durar entre 1.0ms e 2.0ms e ser o mais plana possível. Oscilações fortes aqui indicam mistura incorreta, bico sujo ou turbulência na câmara.",
        "x": 52,
        "y": 45,
        "labelX": 52,
        "labelY": 25
      },
      {
        "id": 5,
        "title": "Pendente e Ressonância",
        "description": "O final da queima. A faísca apaga e a energia restante se dissipa gerando oscilações (sinal de bobina boa).",
        "x": 62.5,
        "y": 80,
        "labelX": 75,
        "labelY": 80
      }
    ],
    "waveType": "ignition-secondary",
    "multimeter": {
      "teacherExplanation": "Para o diagnóstico da Bobina de Ignição Injetada no enrolamento secundário, é exigida a escala de 20k (vinte mil) Ohms, refletindo uma característica de engenharia vital: o secundário tem milhares e milhares de voltas de fio ultrafino para elevar os reles 12 Volts da bateria para tensões altíssimas (acima de 25.000 Volts). Fisicamente, estamos atestando que essa imensa espiral de cobre condutivo, que vai do terminal até o cabo de vela, não se fundiu internamente nem se rompeu. Leituras muito curtas (abaixo de 10k Ohms) acusam que espiras encostaram umas nas outras por derretimento do verniz protetor, reduzindo o número efetivo de voltas e, fatalmente, produzindo uma faísca amarela e fraca. Leituras infinitas significam ruptura do secundário. O grande fator mecânico oculto aqui é o cachimbo (terminal de vela). Muitos mecânicos medem a resistência secundária pelo próprio cachimbo. Porém, ele possui um resistor interno que oxida frequentemente, multiplicando a resistência. Sempre realize a medição direta no fio sem o terminal de vela antes de condenar uma bobina cara de motos com sistema TCI.",
      "setting": "OHM_20K",
      "instructions": "Com o multímetro em Ohms 20k, meça a resistência do enrolamento secundário da bobina (entre a saída de alta tensão para o cabo de vela e um dos pinos do primário ou a carcaça).",
      "expectedValues": "Geralmente entre 10 kΩ e 15 kΩ (consulte o manual).",
      "variesByModel": true,
      "minValue": 10000,
      "maxValue": 15000,
      "unit": "Ω",
      "temperatureObservation": "A resistência pode subir quando a bobina esquenta e abrir o circuito internamente se houver defeito.",
    }
  },
  {
    "id": "ignition-coil-secondary-cdi",
    "detailedTeacherExplanation": "Aqui vemos o sinal do Secundário para um sistema de ignição Carburada com módulo CDI. Usando uma pinça no cabo de vela, medimos a tensão no eixo vertical e o tempo no eixo horizontal.\n\nNo CDI, o gráfico secundário é bem mais agressivo e curto do que no TCI. Você não vê a fase lenta de carregamento. O gráfico sai do zero e explode imediatamente num pico altíssimo, positivo e negativo. O capacitor do CDI envia um soco de energia, e a bobina multiplica isso para milhares de volts.\n\nA característica principal do sinal secundário do CDI é que ele tem múltiplas agulhas finas subindo e descendo, parecendo uma mola apertada, com uma duração muito curta. Não existe aquela 'linha de queima' plana e longa como nas motos injetadas. A faísca do CDI é extremamente intensa, mas muito rápida.\n\nProblemas comuns aqui envolvem o pico principal estar muito baixo. Isso pode significar vela encharcada, bobina de ignição em curto ou um CDI fraco que não consegue descarregar o capacitor corretamente.",
    "hidden": true,
    "name": "Bobina de Ignição (Secundário) - Carburada (CDI)",
    "type": "actuator",
    "shortDescription": "Forma de onda de alta tensão medida no cabo de vela em motos carburadas (CDI).",
    "fullDescription": "A onda do secundário em motos carburadas (com sistema CDI) apresenta uma diferença considerável em relação às motos injetadas. Como estamos apenas capturando a indução do cabo de vela (prendendo a pinça indutiva/capacitiva sobre ele), o sinal exibirá exatamente o comportamento induzido pela descarga capacitiva: um disparo repentino sem Dwell (tempo de carregamento prévio) e uma linha de queima com fortes oscilações, refletindo a dissipação ultrarrápida da energia do CDI.",
    "oscilloscopeSetup": {
      "timeDiv": "1ms a 2ms",
      "voltageDiv": "Usar pinça capacitiva (geralmente canal em 10kV ou 20kV).",
      "triggerEdge": "Subida (Rising) ou Descida dependendo da polaridade da centelha",
      "triggerMode": "Normal",
      "triggerLevel": "3kV a 5kV (ajuste para capturar a queima)",
      "coupling": "DC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Obrigatório o uso de Pinça Capacitiva (Secundário). Prenda a pinça ao redor do cabo de vela. Conecte o aterramento da pinça no negativo da bateria, chassi ou bloco do motor. Se o gráfico ficar de cabeça para baixo, ative a opção 'Inverter' (Invert) no osciloscópio.",
    "waveformExplanation": "O gráfico do **Secundário do CDI** (motos carburadas) captura a altíssima tensão induzida no cabo de vela. Diferente do sistema TCI (injetadas), o CDI descarrega a energia do capacitor no primário instantaneamente, sem tempo de carregamento (Dwell).\n\n• **Tensão de Disparo (Spike)**: A tensão sobe quase instantaneamente para 20kV-30kV, gerando a centelha inicial para romper o ar.\n• **Tempo de Queima Curto**: Como a energia de um CDI é despejada muito rapidamente, a linha de queima dura muito pouco tempo (frequentemente menos de 0.5ms) e possui muita oscilação.\n• **Oscilações Residuais**: Dissipação da energia restante após a queima.",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Tensão de Disparo (Spike)",
        "description": "Pico instantâneo gerado pela descarga do capacitor do CDI. Não há 'Dwell' antes.",
        "x": 20.5,
        "y": 5,
        "labelX": 10,
        "labelY": 15
      },
      {
        "id": 2,
        "title": "Tempo de Queima (Burn Line)",
        "description": "Período muito curto e ruidoso onde a faísca está ocorrendo.",
        "x": 24,
        "y": 48,
        "labelX": 35,
        "labelY": 35
      },
      {
        "id": 3,
        "title": "Oscilações Finais",
        "description": "Ressonância para dissipar a energia remanescente após a faísca apagar.",
        "x": 30,
        "y": 40,
        "labelX": 45,
        "labelY": 80
      }
    ],
    "waveType": "ignition-secondary-cdi",
    "multimeter": {
      "teacherExplanation": "Para o diagnóstico da Bobina de Ignição Secundária (sistemas CDI), utilizamos a escala Ohms 20k para avaliar se a peça que amplifica o disparo capacitivo está íntegra. Em motos menores carburadas com CDI, essa bobina amplifica a descarga de um capacitor (que armazena a faísca e a joga instantaneamente). Ao medir entre a saída de alta tensão e o pino primário, buscamos em média 3 a 15k Ohms. O CDI envia um pulso fortíssimo e rápido; se o verniz isolante da bobina cede e gera um micro curto-circuito, a resistência cai e a tensão final cai pela metade, causando os temíveis pipocos no carburador ao exigir o motor na reta. Se registrar um valor 'infinito', o cabo se partiu ou carbonizou na sua junção com a bobina. Muitas vezes o cabo de alta tensão fica rígido e cria microfissuras pelo tempo de exposição aos hidrocarbonetos e radiação térmica do motor. Remova alguns centímetros do cabo de vela, refaça o contato cravando na bobina e meça novamente para separar a falha real da bobina versus o mau contato mecânico do cabo.",
      "setting": "OHM_20K",
      "instructions": "Com o multímetro em Ohms 20k, meça a resistência do enrolamento secundário da bobina (entre a saída de alta tensão e o pino do primário ou a carcaça).",
      "expectedValues": "Geralmente entre 3 kΩ e 15 kΩ dependendo da moto carburada (consulte o manual).",
      "variesByModel": true,
      "minValue": 3000,
      "maxValue": 15000,
      "unit": "Ω",
      "temperatureObservation": "A resistência pode subir quando a bobina esquenta.",
    }
  },
  {
    "id": "ignition-coil",
    "detailedTeacherExplanation": "Neste gráfico da Bobina de Ignição Primária do tipo TCI, Injetada, o eixo vertical mede a voltagem e o horizontal o tempo. No início, a linha está na voltagem da bateria, cerca de 12 a 14 volts. \n\nQuando o módulo decide carregar a bobina, ele aterra o circuito, e a linha cai instantaneamente para quase zero volts. Essa fase reta embaixo é o tempo de Dwell, o período em que a bobina está se enchendo de energia magnética.\n\nDe repente, o módulo corta esse aterramento. Sem o terra, o campo magnético colapsa violentamente e gera um pico gigantesco de tensão, que salta a linha para cima de 300 a 400 volts! Esse é o pico de disparo primário ou Flyback.\n\nImediatamente após o pico, a vela solta a faísca (o que vemos como a linha de queima) e, logo depois que a queima acaba, a energia que sobrou na bobina se dissipa, formando ondulações no gráfico, as chamadas oscilações residuais. Se o sinal tiver um Dwell limpo, um pico de disparo bem alto e essas ondinhas no final, seu sistema primário de ignição está perfeito. Falta de ondinhas indica espiras em curto na bobina.",
    "hidden": true,
    "name": "Bobina de Ignição (Primário) - Injetada (TCI)",
    "type": "actuator",
    "shortDescription": "Eleva a tensão para gerar a centelha na vela.",
    "fullDescription": "A bobina é um transformador. Medimos o circuito primário. Assim como o injetor, a ECU (ou módulo de ignição) aterra o primário para carregar a bobina (tempo de Dwell) e corta para gerar a alta tensão que será induzida para o secundário (vela).",
    "oscilloscopeSetup": {
      "timeDiv": "1ms",
      "voltageDiv": "50V a 100V",
      "triggerEdge": "Descida",
      "triggerMode": "Normal",
      "triggerLevel": "10V",
      "coupling": "DC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Use um atenuador 20:1 ou a pinça capacitiva para evitar queimar seu osciloscópio, pois o pico indutivo pode passar de 400V. Conecte a garra preta no negativo. Espete a ponta de prova (com atenuador) no fio de controle (pulso negativo da ECU) no conector primário da bobina.\n\n⚠️ IMPORTANTE: Só após todas as conexões estarem devidamente presas, LIGUE a chave de ignição e funcione o motor para realizar o teste.",
    "waveformExplanation": "O gráfico do **Primário** mostra o controle elétrico da bobina. Diferente do secundário, aqui medimos o circuito de 12V sendo aterrado pelo módulo.\n\n• **Tempo de Carregamento (Dwell)**: O módulo aterra o circuito, a tensão cai para 0V. A bobina acumula força magnética.\n• **Pico de Disparo (Spike)**: O módulo corta o aterramento. O campo magnético desmorona e gera um pico de até 400V! Se esse pico for muito baixo, a bobina está ruim.\n• **Linha de Queima**: O reflexo da faísca na vela. Se durar menos que 0.8ms, a centelha está fraca (velas gastas ou mistura pobre).\n• **Oscilações Residuais**: A energia que sobra 'balança' no final. Se sumirem, a bobina está em curto (fuga de faísca). Troque a bobina.",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Carregamento (Dwell)",
        "description": "A central (ECU/módulo) envia o sinal negativo (terra) para a bobina e a tensão cai para zero. É a central que decide o tempo exato de carregamento (tempo de Dwell). Durante esse período, a bobina está acumulando energia magnética. Um tempo de carga insuficiente resulta em uma faísca fraca. Tempo de Dwell: varia entre o mínimo de 2.0ms até o máximo de 4.5ms a 5.0ms (dependendo da moto).",
        "x": 30,
        "y": 80,
        "labelX": 30,
        "labelY": 95
      },
      {
        "id": 2,
        "title": "Tensão de Disparo (Spike)",
        "description": "O módulo corta o terra e ocorre o Disparo (Spike). A tensão sobe violentamente para vencer a resistência do ar na vela. O pico ideal de tensão no primário varia entre um mínimo de 250V e um máximo de 400V. Um pico muito baixo indica bobina fraca; muito alto indica resistência excessiva (cabo rompido ou vela com folga gigante).",
        "x": 46,
        "y": 5,
        "labelX": 35,
        "labelY": 15
      },
      {
        "id": 3,
        "title": "Linha de Queima (Spark Line)",
        "description": "Linha de Queima (Spark Line): A faísca está acesa! A altura (tensão) indica o esforço para queimar, e o comprimento (tempo) mostra a duração da centelha. O tempo ideal de queima tem um mínimo de 1.2ms e um máximo de 2.0ms. Linhas tortuosas ou com tempos abaixo de 0.8ms indicam mistura pobre ou velas muito desgastadas.",
        "x": 52,
        "y": 45,
        "labelX": 52,
        "labelY": 25
      },
      {
        "id": 4,
        "title": "Pendente (Extinção)",
        "description": "A energia não sustenta mais a faísca e o arco se apaga (Extinção). Se o fim for abrupto e sem dar esse pequeno salto, preste atenção, pode estar ocorrendo fuga de centelha para o motor (curto).",
        "x": 58.5,
        "y": 25,
        "labelX": 68,
        "labelY": 15
      },
      {
        "id": 5,
        "title": "Oscilações Residuais",
        "description": "Oscilações Residuais: É a energia que sobrou 'balançando' no circuito. Uma bobina impecável mostra de 3 a 5 ondinhas perfeitas. Se o residual encurtar, tiver apenas 1 ondinha, ou sumir por completo, a bobina está fatalmente em curto e precisa ser trocada!",
        "x": 62.5,
        "y": 70,
        "labelX": 75,
        "labelY": 85
      }
    ],
    "waveType": "ignition",
    "multimeter": {
      "setting": "OHM_200",
      "instructions": "Desconecte a bobina. Com o multímetro em Ohms 200, meça o enrolamento primário (entre os dois pinos menores). Com o multímetro em Ohms 20k, meça o enrolamento secundário (entre a saída para a vela e um dos pinos menores ou terra).",
      "expectedValues": "Primário: ~2 a 5 Ohms. Secundário: ~10k a 15k Ohms (sem cachimbo).",
      "variesByModel": true,
      "minValue": 2,
      "maxValue": 5,
      "unit": "Ω",
      "temperatureObservation": "Bobinas com defeito muitas vezes apresentam falhas apenas após aquecerem (resistência infinita). Teste a frio e logo após a falha se manifestar (quente).",
      "teacherExplanation": "Para o diagnóstico primário da Bobina de Ignição em sistemas injeção (TCI), trabalhamos na escala restrita de 200 Ohms porque este circuito (o primário) possui baixíssima resistência (de 2 a 5 Ohms). Ele recebe 12 Volts direto da bateria e a injeção eletrônica fecha e abre o terra para carregar a bobina. Esse teste físico garante que não existe resistência adicional bloqueando o fluxo de 12V. Se medir zero absoluto, é um curto e o driver da ECU da injeção pode torrar pela ausência de barreira ôhmica. Se marcar valores altos (acima de 10 Ohms), a bobina sofreu severo estresse térmico ou oxidação nos terminais, e a central vai registrar um erro de ignição. Atenção extra aos terminais das bobinas caneta (direto na vela) em esportivas ou motos mais densas: a umidade entra pelos conectores pequenos de ignição que ressecam e causa oxidação nos terminais. Lixe levemente os pinos e insista numa aferição firme, a resistência do multímetro do mecânico precisa estar previamente calibrada em 0 Ohms antes desse teste de tão baixa resistência, senão acusará falhas fantasmas."
    }
  },
  {
    "id": "tps",
    "detailedTeacherExplanation": "Sensor de Posição da Borboleta (TPS) - O acelerador eletrônico da moto!\n\nO que ele é?\nUm simples potenciômetro. O módulo manda 5V e ele devolve um valor que varia de acordo com a aceleração. Geralmente começa perto de 0.5V (fechado) e vai até quase 4.5V (aberto 100%).\n\nComo achar defeito (A prova dos 9):\n- Teste com a chave ligada e motor desligado.\n- Configure o tempo da tela para ficar bem lento (ex: 1 ou 2 segundos por divisão).\n- Acelere o punho BEM DEVAGAR, desde o repouso até o máximo, e depois volte devagar.\n- O que ver no gráfico? A linha deve subir suavemente como uma rampa lisa e descer igual.\n- O DEFEITO: Se no meio da subida a linha der um 'pulo' para baixo ou para cima (um chiado/ruído), a pista do sensor está gasta (arranhada) exatamente naquela posição do acelerador. É aí que a moto engasga e dá 'buracos' na aceleração quando o cliente segura o punho naquela posição. Limpar raramente resolve a longo prazo, a troca é recomendada.",
    "name": "Sensor TPS (Borboleta)",
    "type": "sensor",
    "shortDescription": "Mede a abertura do acelerador.",
    "fullDescription": "O TPS é um potenciômetro alimentado com 5V pela ECU. Ele varia a resistência conforme você acelera a moto, enviando um sinal de tensão de retorno (geralmente de 0.4V a 4.5V) para a ECU saber a demanda de carga do piloto.",
    "oscilloscopeSetup": {
      "timeDiv": "200ms a 500ms",
      "voltageDiv": "1V",
      "triggerEdge": "Subida",
      "triggerMode": "Auto",
      "triggerLevel": "1V",
      "coupling": "DC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Aterre a garra preta no negativo da bateria. O TPS possui três fios (5V, Terra e Sinal). Espete a ponta de prova no fio de sinal. Gire o acelerador lentamente e observe a rampa de tensão subindo no osciloscópio.\n\n⚠️ IMPORTANTE: Conecte todas as garras e espete o fio com a chave desligada. Só então LIGUE a chave de ignição (o motor não precisa funcionar) para alimentar o potenciômetro e realizar o teste.",
    "waveformExplanation": "O TPS (Sensor de Posição da Borboleta) é como o 'botão de volume' de um rádio, mas conectado no cabo do acelerador. Ele avisa o módulo o quanto você quer acelerar.\n\nComportamento e Defeitos:\n• **A Rampa**: Conforme você acelera devagarzinho com a moto desligada, a linha deve subir fazendo uma rampa perfeita e super lisa, do zero ao máximo.\n• **Defeito de Pista Gasta**: Se bem no meio da rampa a linha der um pulo para baixo (cair pro zero) e voltar rapidamente, isso significa que a trilha por onde o contato passa está raspada/gasta. O módulo se perde na hora, corta o combustível naquele momento e a moto dá aquele famoso 'buraco' (engasga e dá soco) bem naquela posição do acelerador.",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Marcha Lenta",
        "description": "Acelerador solto, tensão estável e baixa. O valor mínimo é geralmente de 0.4V e o máximo tolerável na marcha lenta é de 0.8V (aprox. 0.5V típico). Qualquer flutuação com a mão parada acusa desgaste.",
        "x": 10,
        "y": 85,
        "labelX": 10,
        "labelY": 70
      },
      {
        "id": 2,
        "title": "Aceleração",
        "description": "Ao acelerar, a linha sobe como uma rampa lisa e perfeita. Quedas instantâneas para zero durante a subida acusam trilha raspada/gasta. Isso fará o módulo cortar o bico e a moto engasgar violentamente nessa posição do acelerador.",
        "x": 50,
        "y": 50,
        "labelX": 40,
        "labelY": 35
      },
      {
        "id": 3,
        "title": "Carga Máxima (WOT)",
        "description": "Acelerador no máximo (WOT). A linha fica reta no topo, pedindo carga máxima do motor. A tensão atinge o seu valor máximo, com o mínimo tolerável de 4.2V e o pico máximo em torno de 4.8V a 5.0V.",
        "x": 90,
        "y": 15,
        "labelX": 90,
        "labelY": 30
      }
    ],
    "waveType": "tps",
    "multimeter": {
      "setting": "DCV_20",
      "instructions": "Chave ligada, motor desligado. Escala de 20V DC. 1) Verifique alimentação (5V) e Terra (0V). 2) Espete o fio de sinal e acelere o punho devagar até o fim.",
      "expectedValues": "Alimentação: ~5.0V. Sinal: Inicia em ~0.4V a 0.7V e sobe gradativamente, sem falhas, até ~4.5V em aceleração máxima.",
      "variesByModel": true,
      "minValue": 0.4,
      "maxValue": 4.5,
      "unit": "V",
      "temperatureObservation": "Não sofre tanta variação térmica. Com defeitos, ocorre queda para 0V durante o curso do punho (trilha danificada).",
      "teacherExplanation": "Para o diagnóstico do TPS (Sensor de Posição da Borboleta), utilizamos a escala DCV 20V porque este é um sensor resistivo variável (potenciômetro). Ao rotacionar a aceleração, uma pista resistiva interna desliza contra um cursor metálico, enviando para a ECU uma resposta de tensão (de 0.5V em marcha lenta a 4.5V acelerado). Nós testamos fisicamente se há saltos nessa variação elétrica! Caso o sinal tenha 'buracos' - caindo para 0V de repente ao chegar na metade da rotação - é porque a pista de carbono desgastou fisicamente no ponto mais usado pelo piloto (em torno de 30 a 50 por cento de aceleração). Um TPS riscado causa trancos e cortes misteriosos quando você mantém a velocidade de cruzeiro. Nunca confie no multímetro digital básico se o número não mudar rápido o suficiente para enxergar o 'buraco'. Acelere bem milimetricamente, observando cada variação decimal. Se a alimentação dos 5 Volts da central (fios de ponta do conector) estiverem falhando, significa pane no chicote entre a injeção e o corpo de aceleração, não condene o TPS."
    }
  },
  {
    "id": "lambda",
    "detailedTeacherExplanation": "Sonda Lambda (Sensor de Oxigênio) do tipo Zircônia (convencional).\n\nO detetive da mistura ar-combustível! Ela fica no escapamento 'cheirando' os gases.\n- Gera tensão entre 0.1V (Mistura Pobre) e 0.9V (Mistura Rica).\n- No osciloscópio, com o motor quente em marcha lenta, ela deve oscilar o tempo todo como uma senoide suave, de cima para baixo.\n\nDicas preciosas:\n- Temperatura: A sonda só funciona quente (acima de 300°C). Se o gráfico for uma linha reta no meio (ex: 0.45V) com a moto já quente, o sensor pode estar inoperante ou o aquecedor dela (se tiver) queimou.\n- Tempo de resposta: O mais importante! Ela deve ir do rico ao pobre rápido (menos de 300 milissegundos). Sondas velhas e carbonizadas ficam 'preguiçosas', a onda fica lenta e arredondada. O consumo da moto vai nas alturas e falha na retomada.\n- Travou rico? (Sempre lá em cima, 0.8V). O módulo está injetando demais, pode ser bico vazando ou filtro de ar entupido.\n- Travou pobre? (Sempre em 0.1V). Pode ser falta de pressão de bomba de combustível, bico sujo ou entrada de ar falsa no coletor. A sonda não está mentindo, ela só mostra a consequência!",
    "name": "Sonda Lambda (Oxigênio)",
    "type": "sensor",
    "shortDescription": "Mede a mistura Ar/Combustível no escape.",
    "fullDescription": "A sonda lambda de Zircônia mede o oxigênio restante nos gases de escape. Ela gera sua própria voltagem (de 0.1V a 0.9V) em reação ao oxigênio. Mistura pobre = baixa tensão (~0.1V), Mistura rica = alta tensão (~0.9V).",
    "oscilloscopeSetup": {
      "timeDiv": "200ms a 500ms",
      "voltageDiv": "200mV (0.2V)",
      "triggerEdge": "Subida",
      "triggerMode": "Auto",
      "triggerLevel": "400mV",
      "coupling": "DC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Conecte a garra preta no negativo da bateria (ou no fio terra do sensor, se preferir isolar o chicote). Identifique o fio de Sinal da sonda lambda (normalmente o fio preto, em sondas de 4 fios, ou o único fio solto nas antigas). Espete a ponta de prova.\n\n⚠️ IMPORTANTE: Só após fixar as garras e agulhas, funcione o motor e espere atingir a temperatura de trabalho para que a sonda comece a oscilar e gerar o sinal.",
    "waveformExplanation": "A Sonda Lambda é o 'nariz' do sistema. Fica lá no escapamento cheirando se a queima do combustível foi boa (mistura ideal), gorda (muito combustível) ou magra (muito ar). \n\nComportamento e Defeitos:\n• **A Dança da Sonda**: Com o motor quente, a sonda boa tem que ficar dançando o tempo todo: sobe (rica) e desce (pobre) sem parar. Ela não pode ficar parada!\n• **Sonda Lenta ou Travada**: Se o gráfico parecer 'preguiçoso', demorando muito para subir e descer, ou se ficar travado lá embaixo ou lá em cima em linha reta, a sonda está carbonizada (cheia de fuligem) ou estragada. Isso faz a moto beber muito combustível ou perder rendimento.\n• **Atenção**: Uma sonda travada em 'pobre' (linha baixa) também pode ser culpa de uma entrada de ar falso ou bomba de combustível fraca. O gráfico não mente, ele mostra o que está acontecendo no motor!",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Mistura Rica",
        "description": "Sonda lá no alto. Detectou Mistura Rica (falta oxigênio, sobra gasolina). O valor deve atingir o pico máximo de tensão entre 800mV e 900mV (0.8V a 0.9V). Se ela travar apenas aqui e não descer mais, pode haver bicos gotejando.",
        "x": 15,
        "y": 20,
        "labelX": 15,
        "labelY": 35
      },
      {
        "id": 2,
        "title": "Transição",
        "description": "A sonda deve cruzar o centro dinamicamente várias vezes por segundo. Transições muito lentas e preguiçosas revelam sonda carbonizada, que perdeu a sensibilidade de leitura rápida.",
        "x": 30,
        "y": 50,
        "labelX": 40,
        "labelY": 50
      },
      {
        "id": 3,
        "title": "Mistura Pobre",
        "description": "Sonda lá embaixo. Detectou Mistura Pobre (sobra oxigênio). O valor deve cair ao pico mínimo de tensão entre 50mV e 150mV (0.05V a 0.15V). Se o sinal travar embaixo, investigue entrada de ar falso ou queima da sonda.",
        "x": 45,
        "y": 80,
        "labelX": 45,
        "labelY": 65
      }
    ],
    "waveType": "lambda",
    "multimeter": {
      "setting": "DCV_20",
      "instructions": "Motor ligado e quente! Escala de Tensão 20V DC. Espete o fio de sinal preto da sonda.",
      "expectedValues": "Sinal DC: Deve oscilar constantemente entre ~0.1V (mistura pobre) e ~0.9V (mistura rica) em marcha lenta.",
      "variesByModel": false,
      "minValue": 0.1,
      "maxValue": 0.9,
      "unit": "V",
      "temperatureObservation": "A sonda lambda SÓ FUNCIONA QUENTE (acima de 300°C). Com motor frio ou falha no aquecedor, a leitura ficará travada (aprox. 450mV).",
      "teacherExplanation": "Para o diagnóstico da Sonda Lambda (Oxigênio), utilizamos a escala de Tensão DC em 20V com o motor ligado e aquecido. A sonda é um gerador galvânico: a cerâmica de zircônio em seu interior reage à diferença de oxigênio entre o escapamento e o ambiente, gerando sua própria voltagem. Medimos no fio preto de sinal a resposta dinâmica dessa reação química. O valor deve oscilar de 0.1V (pobre, muito ar) a 0.9V (rica, muito combustível). Se travar em um valor estático (ex: 0.4V), o sensor está envenenado por chumbo ou fuligem, perdendo a capacidade de reação catalítica. Se não gerar voltagem alguma (0V), a cerâmica quebrou ou o circuito está aberto. Uma dica térmica: a sonda de zircônio só opera acima de 300 graus Celsius. Um diagnóstico prematuro com escapamento frio vai apontar sonda morta, o que é um falso positivo. Sempre espere o motor atingir a temperatura operacional ideal antes de condenar uma sonda que não oscila."
    }
  },
  {
    "id": "lambda-heater",
    "detailedTeacherExplanation": "Aquecedor da Sonda Lambda (Heater).\n\nPor que existe? Para a sonda atingir 300°C rapidamente e começar a trabalhar logo após a partida, diminuindo as emissões.\n\nComo o módulo controla?\nGeralmente enviando um sinal PWM (Pulse Width Modulation - onda quadrada que varia a largura) no pino negativo do aquecedor, que recebe 12V constante no outro pino.\n\nTeste na prática:\n- Na partida fria, o pulso negativo é largo (fica mais tempo em 0V), aquecendo muito.\n- Conforme a sonda esquenta com os gases do escape, o módulo afina o pulso (menos tempo em 0V) para não derreter o aquecedor.\n- Se a linha não pulsar e ficar travada em 12V, o módulo não está acionando, ou há fio partido.\n- Se a resistência interna do aquecedor queimar (comum de acontecer), o módulo detecta e acende a luz de injeção. Com o osciloscópio e um alicate amperímetro, você veria que não há consumo de corrente, apesar do PWM estar presente.",
    "name": "Aquecedor da Sonda Lambda (O2)",
    "type": "actuator",
    "shortDescription": "Resistor interno para aquecimento rápido da sonda.",
    "fullDescription": "As sondas lambda possuem um resistor de aquecimento interno. A ECU controla esse aquecedor usando PWM (modulação por largura de pulso) ou tensão contínua. Isso faz com que a sonda atinja a temperatura de trabalho rapidamente para reduzir as emissões com o motor frio.",
    "oscilloscopeSetup": {
      "timeDiv": "50ms a 100ms",
      "voltageDiv": "5V a 10V",
      "triggerEdge": "Descida",
      "triggerMode": "Auto",
      "triggerLevel": "5V",
      "coupling": "DC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Aterre a garra preta do osciloscópio no negativo da bateria ou chassi. Identifique os dois fios do aquecedor da Sonda (geralmente de mesma cor, como branco ou preto). Um recebe 12V da bateria/relé, e o outro é aterrado pela ECU em pulsos (PWM). Espete a ponta de prova (Canal 1) neste fio de pulso negativo.\n\n⚠️ IMPORTANTE: Só após fazer as conexões com segurança, LIGUE a chave de ignição e funcione o motor para realizar o teste (preferencialmente em fase fria para analisar a ativação inicial).",
    "waveformExplanation": "O aquecedor é uma resistência que fica dentro da Sonda Lambda para ela esquentar e começar a funcionar bem rápido assim que você liga a moto fria (a sonda só funciona quente).\n\nComportamento e Defeitos:\n• **Controle do Módulo**: O gráfico vai ser uma onda quadrada pulsante. Quando a moto está fria, o módulo deixa a linha muito mais tempo embaixo (ligando o aquecedor). Conforme a moto esquenta, ele aperta as ondas.\n• **Falta do 12V**: Se você olhar na tela e não ver a onda subindo até os 12V (ficar só lá embaixo travado), pode ter um fusível queimado ou fio partido cortando a energia.\n• **Sinal Travado em 12V (Sem Pulsos)**: Se ficar só a linha reta no topo sem descer para zero, o fio que vai para a centralina (módulo) partiu, ou o próprio módulo queimou o circuito interno e parou de comandar o aquecedor.",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Tensão de Alimentação",
        "description": "Tensão de bateria aguardando no circuito. Verifique se chegam os saudáveis 12V a 14V. Tensões menores indicam queda no relé de injeção ou fios oxidados.",
        "x": 5,
        "y": 20,
        "labelX": 5,
        "labelY": 35
      },
      {
        "id": 2,
        "title": "Ativação (Tempo de Aterramento)",
        "description": "O módulo aterra para aquecer a resistência da sonda (Duty Cycle). Uma ativação sólida com o motor frio é crucial para as emissões. Se a linha não descer bem ao 0V, o driver do módulo tem falha.",
        "x": 22,
        "y": 80,
        "labelX": 22,
        "labelY": 65
      },
      {
        "id": 3,
        "title": "Desativação",
        "description": "A desativação do aquecedor (desliga para não superaquecer). O sinal deve retornar rapidamente aos 12V. Ausência do chaveamento liga a luz da injeção.",
        "x": 47,
        "y": 20,
        "labelX": 47,
        "labelY": 35
      }
    ],
    "waveType": "pwm",
    "multimeter": {
      "setting": "OHM_200",
      "instructions": "Desconecte a sonda lambda. Localize os dois fios da mesma cor (geralmente dois fios brancos ou dois fios pretos) que são do aquecedor. Use a escala de Resistência (Ohms 200) e meça entre eles.",
      "expectedValues": "Resistência do Aquecedor: Geralmente entre 4 a 15 Ohms, variando pelo fabricante.",
      "variesByModel": true,
      "minValue": 4,
      "maxValue": 15,
      "unit": "Ω",
      "temperatureObservation": "A medição do aquecedor deve ser feita SEMPRE A FRIO (temperatura ambiente), pois a resistência PTC sobe drasticamente com a temperatura.",
      "teacherExplanation": "Para o diagnóstico do Aquecedor da Sonda Lambda, a escala Ohms 200 é fundamental. Diferente do sinal, o aquecedor é um mero resistor de PTC embutido na base da sonda (fios brancos ou pretos repetidos). Sua função é levar a cerâmica rapidamente a 300 graus Celsius na partida a frio, reduzindo emissões. Ao medir entre os dois fios, esperamos de 4 a 15 Ohms. Uma resistência infinita indica circuito aberto: a resistência trincou devido à dilatação térmica extrema ou colapso mecânico. Uma resistência próxima a zero evidencia um curto na bobina de aquecimento, o que invariavelmente desarma fusíveis ou queima o pino de controle na ECU. Se a sonda marcar um valor absurdamente alto, o resistor perdeu eficiência. Sem o aquecedor perfeito, a moto engasga nos primeiros minutos e a injeção acusa falha de sonda imediatamente."
    }
  },
  {
    "id": "map",
    "detailedTeacherExplanation": "Sensor MAP (Pressão Absoluta do Coletor). O pulmão do motor.\n\nEle mede o vácuo dentro do coletor de admissão. Em marcha lenta, a borboleta está quase fechada, o pistão puxa e cria muito vácuo -> Voltagem do sensor fica baixa (ex: 1.0V a 1.5V).\nSe acelerar fundo, a borboleta abre, entra pressão atmosférica -> O vácuo some, a voltagem sobe para perto de 4.0V ou mais.\n\nO pulo do gato no diagnóstico:\n- O sinal do MAP flutua bastante junto com as válvulas abrindo e fechando, por isso você vê uma ondinha acompanhando a admissão.\n- Se as válvulas estiverem presas (sem folga) ou fora do ponto, o vácuo no coletor fica irregular! O sinal do MAP fica cheio de picos esquisitos e muito instável na marcha lenta. Você diagnostica problema mecânico do motor usando o sinal elétrico do MAP!\n- Entradas falsas de ar (borrachinha rachada) farão a linha do MAP ficar mais alta que o normal em marcha lenta, fazendo a moto injetar muito combustível e afogar.",
    "name": "Sensor MAP",
    "type": "sensor",
    "shortDescription": "Sensor de Pressão Absoluta do Coletor.",
    "fullDescription": "O sensor MAP mede o vácuo dentro do coletor de admissão. Alimentado com 5V, sua tensão de resposta varia conforme a borboleta abre ou fecha e os pistões sugam o ar.",
    "oscilloscopeSetup": {
      "timeDiv": "50ms a 100ms",
      "voltageDiv": "1V",
      "triggerEdge": "Subida",
      "triggerMode": "Auto",
      "triggerLevel": "2.5V",
      "coupling": "DC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Aterre a garra preta no negativo da bateria. O MAP possui três fios (Alimentação 5V, Terra e Sinal). Espete a ponta de prova no fio de Sinal.\n\n⚠️ IMPORTANTE: Conecte garras e pontas de prova com o veículo desligado. Somente depois disso, LIGUE a chave de ignição e funcione o motor para gerar vácuo e iniciar a leitura. Observe a variação ao acelerar subitamente o motor.",
    "waveformExplanation": "O Sensor MAP mede a 'respiração' e o vácuo do motor. Quando o pistão desce puxando ar, ele cria um vácuo no coletor, e o MAP avisa isso ao módulo.\n\nComportamento e Defeitos:\n• **Em Marcha Lenta**: O buraco de entrada (borboleta) está quase fechado, mas o pistão continua sugando. Isso gera MUITO vácuo, puxando a tensão do gráfico lá pra baixo.\n• **Acelerada Rápida (Soco no Acelerador)**: Quando você acelera tudo de uma vez, entra muito ar de sopetão. O vácuo some, a pressão interna iguala com o ar da rua, e o gráfico dá um pulo gigante para cima na tela.\n• **Soltando o Acelerador**: Ao soltar em alta velocidade (desaceleração), a borboleta fecha na mesma hora, mas o motor lá dentro ainda está girando rápido e sugando como um louco. O vácuo vai ao máximo e a linha cai até o chão.\n• **Problema de Válvulas**: Se na marcha lenta o gráfico ficar todo tremido, pipocando pra cima e pra baixo sem parar, indica falha mecânica no motor (ex: válvula presa, carbonizada ou sem folga não vedando direito).",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Marcha Lenta",
        "description": "Marcha lenta. A borboleta quase fechada faz os pistões gerarem um vácuo brutal, puxando a tensão do sensor. O valor deve oscilar entre o mínimo de 1.0V e o máximo de 1.5V em uma moto perfeita. Gráfico com tremulações absurdas indicam válvulas desreguladas.",
        "x": 10,
        "y": 70,
        "labelX": 10,
        "labelY": 55
      },
      {
        "id": 2,
        "title": "Aceleração Rápida",
        "description": "Acelerada súbita (Snap Throttle). O ar entra violento, o vácuo desaparece num piscar de olhos e a pressão equaliza. Uma subida lenta demais pode ser mangueira do MAP rachada (furo minúsculo) ou sensor engasgado de sujeira.",
        "x": 25,
        "y": 55,
        "labelX": 25,
        "labelY": 40
      },
      {
        "id": 3,
        "title": "WOT (Borboleta Aberta)",
        "description": "Aceleração máxima. A pressão se equipara à atmosfera do ambiente. Serve para testar se há restrição no escape (catalisador entupido) ou na caixa de filtro de ar.",
        "x": 40,
        "y": 40,
        "labelX": 40,
        "labelY": 25
      },
      {
        "id": 4,
        "title": "Desaceleração",
        "description": "Você corta o acelerador em alto giro. A borboleta fecha com o motor girando a 10.000 RPM sugando tudo! O vácuo vai ao extremo (Cut-off) cortando a injeção até as rotações caírem.",
        "x": 70,
        "y": 80,
        "labelX": 70,
        "labelY": 95
      }
    ],
    "waveType": "map",
    "multimeter": {
      "setting": "DCV_20",
      "instructions": "Chave ligada, motor desligado (para repouso), depois motor ligado. Escala 20V DC. Teste alimentação 5V e terra. Depois espete o fio de sinal.",
      "expectedValues": "Alimentação: ~5.0V. Sinal DC: ~2.8V a 3V (repouso, pressão atm), caindo para ~1.0V a 1.5V com motor em marcha lenta (vácuo).",
      "variesByModel": true,
      "minValue": 1,
      "maxValue": 3,
      "unit": "V",
      "temperatureObservation": "Medições devem ser estáveis e não sofrem muita influência da temperatura do motor.",
      "teacherExplanation": "Para o diagnóstico do Sensor MAP (Pressão Absoluta do Coletor), a escala DCV 20V é a escolha correta porque este é um sensor piezoelétrico alimentado. Internamente, existe um diafragma de silício com resistores que mudam a voltagem de saída (sinal) quando a pressão ou vácuo do motor entorta a pastilha de silício. Com a ignição ligada e motor parado (pressão atmosférica plena), esperamos próximo de 3 Volts. Ao dar partida e fechar a borboleta (marcha lenta), o motor cria um vácuo potente que suga a pastilha para baixo, e o sinal cai mecanicamente para perto de 1.0V a 1.5V. Se o sinal travar em 5V ou 0V independente da aceleração, o chip piezoelétrico partiu-se ou o furo de sucção na ponta está completamente entupido com borra de óleo ou carvão do TBI. Dica de oficina: se o MAP estiver com valores anormais, verifique primeiro por furos na mangueira ou guarnições de borracha da base do corpo de injeção que permitam ar extra, o que descalibra a pressão absoluta."
    }
  },
  {
    "id": "group-abs",
    "name": "Sensor ABS (Velocidade de Roda)",
    "type": "sensor",
    "shortDescription": "Mede a velocidade da roda para o sistema anti-travamento.",
    "fullDescription": "Escolha o tipo de sensor ABS utilizado na motocicleta para ver os detalhes e testes.",
    "oscilloscopeSetup": {
      "timeDiv": "",
      "voltageDiv": "",
      "triggerEdge": "",
      "triggerMode": "",
      "triggerLevel": "",
      "coupling": ""
    },
    "waveformExplanation": "",
    "waveType": "",
    "isGroup": true,
    "variants": [
      {
        "id": "abs-indutivo",
        "detailedTeacherExplanation": "Sensor de Velocidade de Roda ABS do tipo Indutivo (Passivo). Eixo vertical para voltagem e horizontal para tempo.\n\nEle opera exatamente com a mesma física do sensor de rotação indutivo do motor. Ele lê os furinhos ou dentes do disco do ABS na roda. Conforme a roda gira, o sensor gera ondas suaves que sobem e descem, criando uma corrente alternada contínua.\n\nQuanto mais rápido a roda gira, maior a altura e a frequência das ondinhas. Se a roda estiver parada, o sinal é uma linha morta no zero. \n\nNo diagnóstico, você deve girar a roda na mão e procurar por imperfeições nessas ondinhas. Se no meio de um padrão perfeito, uma onda estiver muito maior, achatada, ou picotada, significa que a roda fônica do ABS sofreu um impacto, está amassada ou com muita sujeira magnética agarrada. O módulo do ABS percebe essa onda feia e desliga o freio ABS por segurança, acendendo a luz no painel.",
        "name": "Passivo (Indutivo - Analógico)"
      },
      {
        "id": "abs-hall",
        "detailedTeacherExplanation": "Sensor de Velocidade de Roda ABS do tipo Hall (Ativo ou Magnetoresistivo). Eixo Y voltagem e eixo X tempo.\n\nEste é um sensor eletrônico avançado que requer alimentação. Ele não gera ondinhas senoidais; ele produz uma onda digital em formato quadrado, variando a voltagem (por exemplo, de 0 para 5 volts) ou, em muitos casos modernos, variando a corrente em miliamperes. \n\nGirando a roda, o osciloscópio desenhará uma sequência de caixotes perfeitos. A vantagem gigante desse sensor é que ele consegue ler movimentos incrivelmente lentos da roda com precisão total e sem perder a voltagem.\n\nQualquer caixote (onda quadrada) que apareça mais largo que o normal ou com uma falha na sua formação indica que há um problema físico na roda fônica magnética ou que a distância do sensor para a roda fônica (o entreferro) está errada, possivelmente devido a um rolamento de roda estourado.",
        "name": "Ativo (Efeito Hall/Magnetoresistivo - Digital)"
      }
    ]
  },
  {
    "id": "abs-indutivo",
    "detailedTeacherExplanation": "Sensor de Velocidade de Roda ABS do tipo Indutivo (Passivo). Eixo vertical para voltagem e horizontal para tempo.\n\nEle opera exatamente com a mesma física do sensor de rotação indutivo do motor. Ele lê os furinhos ou dentes do disco do ABS na roda. Conforme a roda gira, o sensor gera ondas suaves que sobem e descem, criando uma corrente alternada contínua.\n\nQuanto mais rápido a roda gira, maior a altura e a frequência das ondinhas. Se a roda estiver parada, o sinal é uma linha morta no zero. \n\nNo diagnóstico, você deve girar a roda na mão e procurar por imperfeições nessas ondinhas. Se no meio de um padrão perfeito, uma onda estiver muito maior, achatada, ou picotada, significa que a roda fônica do ABS sofreu um impacto, está amassada ou com muita sujeira magnética agarrada. O módulo do ABS percebe essa onda feia e desliga o freio ABS por segurança, acendendo a luz no painel.",
    "hidden": true,
    "name": "Sensor ABS - Indutivo",
    "type": "sensor",
    "shortDescription": "Mede a velocidade da roda usando roda fônica.",
    "fullDescription": "O sensor ABS indutivo é semelhante ao CKP indutivo. Ele gera uma Corrente Alternada (AC) cuja frequência e amplitude aumentam conforme a roda gira mais rápido. Se comunica com o módulo do ABS para evitar o travamento das rodas.",
    "oscilloscopeSetup": {
      "timeDiv": "20ms a 50ms",
      "voltageDiv": "1V a 5V",
      "triggerEdge": "Subida ou Descida",
      "triggerMode": "Normal",
      "triggerLevel": "1V",
      "coupling": "AC",
      "axis": "Y/T"
    },
    "connectionInstructions": "TESTE NA MOTO: Conecte a garra jacaré preta no negativo da bateria ou em um bom ponto de aterramento. Espete o fio de sinal do sensor ABS (geralmente na roda dianteira ou traseira). Meça com a roda girando.\n\nTESTE EM BANCADA (Roda Girando ou Furadeira):\n1. Pode testar o sensor no lugar, levantando a roda e girando-a com a mão para gerar o sinal.\n2. Para testar fora, prenda uma roda fônica ou dente metálico em uma furadeira e gire próximo à ponta do sensor para simular a roda girando.\n\n⚠️ IMPORTANTE: Conecte o equipamento com a moto desligada. Para realizar o teste e obter leitura no sistema da moto, LIGUE a chave de ignição após todas as conexões estarem firmes.",
    "waveformExplanation": "O sensor de ABS indutivo funciona igualzinho ao CKP Indutivo do motor, mas ele fica nas rodas. Ele gera sua própria energia (ondas suaves) conforme os espacinhos do disco do ABS passam por ele.\n\nComportamento e Defeitos:\n• **Lendo Rotação**: Ao girar a roda com a mão, você vai ver a onda se formando na tela. Se girar rápido, as ondas crescem.\n• **Sinal Fraco**: Se as ondas ficarem minúsculas, quase uma linha reta, significa que o sensor está muito distante do disco do ABS, ou perdeu a força magnética. A luz do ABS vai acender no painel.\n• **Roda Fônica Empenada**: Se o desenho ficar 'balançando', com umas ondas altas e outras baixinhas em sequência, a grade do ABS (roda fônica) sofreu uma pancada e está empenada, raspando ou distanciando a cada volta.",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Aproximação do Dente (+)",
        "description": "Leitura analógica do movimento da roda. A parte sólida (dente de metal do ABS) induz pico positivo. Quanto mais rápida a moto estiver, maior será esse pico em voltagem.",
        "x": 20,
        "y": 35,
        "labelX": 20,
        "labelY": 10
      },
      {
        "id": 2,
        "title": "Cruzamento Zero (0V)",
        "description": "A passagem por zero, momento crítico de precisão para calcular o algoritmo de frenagem para evitar o travamento da roda no solo.",
        "x": 24,
        "y": 50,
        "labelX": 10,
        "labelY": 50
      },
      {
        "id": 3,
        "title": "Afastamento do Dente (-)",
        "description": "Pico negativo, o dente se afasta. Se as ondas ao longo do giro da roda subirem e descerem em alturas desiguais (padrão flutuante), o disco de leitura do ABS (roda fônica) sofreu pancada e está empenado!",
        "x": 28,
        "y": 65,
        "labelX": 28,
        "labelY": 90
      }
    ],
    "waveType": "sine",
    "multimeter": {
      "setting": "OHM_2000",
      "instructions": "Desconecte o sensor ABS. Multímetro na escala de Resistência (Ohms 2000). Meça entre os dois pinos do sensor. Como é um sensor indutivo (roda dentada), a resistência indicará a saúde da bobina interna.",
      "expectedValues": "Resistência: ~1000 a 2000 Ohms. Valor pode variar entre motos (consulte o manual). Tensão AC (rodando a roda): Deve gerar pequena voltagem (0.1V a 1V+).",
      "variesByModel": true,
      "minValue": 1000,
      "maxValue": 2000,
      "unit": "Ω",
      "temperatureObservation": "A resistência das bobinas de sensores de roda pode alterar levemente ao esquentar, testar a frio é o procedimento padrão.",
      "teacherExplanation": "Para o diagnóstico do TPS (Sensor de Posição da Borboleta), utilizamos a escala DCV 20V porque este é um sensor resistivo variável (potenciômetro). Ao rotacionar a aceleração, uma pista resistiva interna desliza contra um cursor metálico, enviando para a ECU uma resposta de tensão (de 0.5V em marcha lenta a 4.5V acelerado). Nós testamos fisicamente se há saltos nessa variação elétrica! Caso o sinal tenha 'buracos' - caindo para 0V de repente ao chegar na metade da rotação - é porque a pista de carbono desgastou fisicamente no ponto mais usado pelo piloto (em torno de 30 a 50 por cento de aceleração). Um TPS riscado causa trancos e cortes misteriosos quando você mantém a velocidade de cruzeiro. Nunca confie no multímetro digital básico se o número não mudar rápido o suficiente para enxergar o 'buraco'. Acelere bem milimetricamente, observando cada variação decimal. Se a alimentação dos 5 Volts da central (fios de ponta do conector) estiverem falhando, significa pane no chicote entre a injeção e o corpo de aceleração, não condene o TPS."
    }
  },
  {
    "id": "abs-hall",
    "detailedTeacherExplanation": "Sensor de Velocidade de Roda ABS do tipo Hall (Ativo ou Magnetoresistivo). Eixo Y voltagem e eixo X tempo.\n\nEste é um sensor eletrônico avançado que requer alimentação. Ele não gera ondinhas senoidais; ele produz uma onda digital em formato quadrado, variando a voltagem (por exemplo, de 0 para 5 volts) ou, em muitos casos modernos, variando a corrente em miliamperes. \n\nGirando a roda, o osciloscópio desenhará uma sequência de caixotes perfeitos. A vantagem gigante desse sensor é que ele consegue ler movimentos incrivelmente lentos da roda com precisão total e sem perder a voltagem.\n\nQualquer caixote (onda quadrada) que apareça mais largo que o normal ou com uma falha na sua formação indica que há um problema físico na roda fônica magnética ou que a distância do sensor para a roda fônica (o entreferro) está errada, possivelmente devido a um rolamento de roda estourado.",
    "hidden": true,
    "name": "Sensor ABS - Ativo (Hall)",
    "type": "sensor",
    "shortDescription": "Sensor ABS digital, gera onda quadrada.",
    "fullDescription": "O sensor ABS ativo utiliza elemento Hall ou Magnetoresistivo para ler uma roda fônica ou um anel magnético no rolamento. Ele gera um sinal digital de onda quadrada limpa, mesmo em baixíssimas velocidades. É muito superior ao indutivo em precisão.",
    "oscilloscopeSetup": {
      "timeDiv": "20ms a 50ms",
      "voltageDiv": "2V",
      "triggerEdge": "Subida",
      "triggerMode": "Normal",
      "triggerLevel": "2.5V",
      "coupling": "DC",
      "axis": "Y/T"
    },
    "connectionInstructions": "TESTE NA MOTO: Aterre a garra preta do osciloscópio no negativo da bateria. Identifique os fios do sensor ABS. Espete a ponta de prova do canal 1 no fio de Sinal.\n\nTESTE EM BANCADA (Roda Girando ou Furadeira):\n1. Levante a roda e gire-a com a mão.\n2. Para testar fora, alimente o sensor com a tensão correta (geralmente 12V). Gire uma roda fônica ou ímã multipolar (anexo a uma furadeira) próximo ao sensor para ver a onda quadrada.\n\n⚠️ IMPORTANTE: Conecte tudo com a ignição desligada. LIGUE a chave de ignição somente após as conexões estarem prontas para que o módulo alimente o sensor com segurança.",
    "waveformExplanation": "O sensor de ABS Hall é a versão digital. Ele envia para o módulo do freio ondas quadradas perfeitas. A maioria das motos hoje usa este tipo.\n\nComportamento e Defeitos:\n• **Giro da Roda**: Mesmo girando a roda bem devagarinho, a onda quadrada sobe e desce da mesma altura. O que muda é apenas o espaçamento entre elas.\n• **Ondas Inconstantes ou Amassadas**: Se os quadrados começarem a perder a forma, não encostando no zero, é um indicativo forte de sujeira extrema no sensor, mal contato no conector, ou problema nos fios de alimentação (esse sensor precisa de energia, geralmente de 5 a 12V, para funcionar).",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Nível Lógico Baixo (0V)",
        "description": "Fio de sinal vai a 0V indicando dente lido. Tem que ser limpo. Uma falha aqui muitas vezes resulta de ferrugem no sensor isolando o contato.",
        "x": 20,
        "y": 80,
        "labelX": 20,
        "labelY": 95
      },
      {
        "id": 2,
        "title": "Borda de Subida",
        "description": "Bordas perfeitas em 90 graus para evitar qualquer erro de cálculo do módulo ABS de que a roda possivelmente parou (travou).",
        "x": 25,
        "y": 50,
        "labelX": 10,
        "labelY": 50
      },
      {
        "id": 3,
        "title": "Nível Lógico Alto",
        "description": "Crista alta do sinal digital. Fica alerta: ruídos esquisitos nessa parte de cima costumam acusar chicote machucado roçando no quadro da moto acompanhando o trabalho da suspensão.",
        "x": 32,
        "y": 20,
        "labelX": 32,
        "labelY": 10
      }
    ],
    "waveType": "square",
    "multimeter": {
      "teacherExplanation": "Para o diagnóstico do Sensor ABS Hall (Sensor Ativo de Freio), configuramos o multímetro em Tensão DC 20V. Estes são sensores ativos, o que significa que internamente são circuitos complexos projetados para detectar as oscilações de fluxo magnético geradas pela roda fônica (dentes no freio) e transformá-las em uma tensão oscilante que sobe de 0 a 12V e retorna rapidamente ao mínimo. Quando testamos, primeiro garantimos a voltagem de alimentação (12V ou 5V), provando que o módulo do ABS não está com a alimentação elétrica cortada por um fusível. A dificuldade surge ao testar o sinal da roda girando: os multímetros não conseguem processar pulsos tão rápidos quanto um osciloscópio, por isso, só conseguimos ver uma tensão média. Porém, isso é suficiente. Se a tensão ficar cravada no zero com a roda girando rápido, o chip Hall no sensor rompeu ou a fiação foi mordida pela carenagem do garfo. Se tivermos a variação intermitente de sinal com a suspensão trabalhando, você diagnostica um chicote rompido na emenda flexível (do guidão e suspensão).",
      "setting": "DCV_20",
      "instructions": "Chave ligada. Multímetro em DC 20V. Meça tensão de alimentação do sensor (geralmente 12V). Para sinal, conecte a roda e gire lentamente. Requer equipamento específico para leitura correta do pulso rápido, mas pode observar variação na tensão DC média.",
      "expectedValues": "Alimentação: 12V (ou 5V dependendo do sistema). Sinal DC: Variação discreta ou valor médio (ex: 6V). Osciloscópio é necessário para diagnóstico preciso.",
      "variesByModel": true
    }
  },
  {
    "id": "estator",
    "name": "Estator (Gerador)",
    "isGroup": true,
    "variants": [
      {
        "id": "estator-1f",
        "detailedTeacherExplanation": "Estator Monofásico. O eixo vertical indica a voltagem, e o horizontal, o tempo.\n\nEste é o gerador mais simples, composto por uma única bobina longa ligada ao terra. Ele produz Corrente Alternada (AC). O sinal no osciloscópio é a clássica onda senoidal, subindo e descendo acima e abaixo do eixo zero. Parece o movimento de uma corda batendo.\n\nO diagnóstico é direto: conecte na saída do estator com a moto ligada. Em marcha lenta, as ondinhas devem ter uma voltagem razoável, digamos 20 a 30 volts. Conforme você acelera a moto, essas ondas precisam ficar muito mais espremidas (aumento de frequência) e muito mais altas, podendo chegar a 80 ou 100 volts! \n\nSe você acelera fundo e o gráfico não sobe de tamanho, e as ondas ficam 'murchas' perto dos 20 volts, a bobina do estator sofreu curto-circuito ou o imã do volante perdeu o magnetismo. É o principal motivo da bateria não carregar.",
        "name": "1 Fase (Monofásico)"
      },
      {
        "id": "estator-2f",
        "detailedTeacherExplanation": "Estator Bifásico. Eixo vertical medindo tensão, eixo horizontal medindo tempo.\n\nNeste sistema, não temos o aterramento interno no motor. O estator gera energia em duas pontas, mandando ambas para o retificador. Para testar perfeitamente, você usaria dois canais do osciloscópio.\n\nO que você vai ver na tela são duas linhas de ondas senoidais (subindo e descendo alternadamente). A dica mestre desse diagnóstico é: As duas ondas têm que ser espelhadas e idênticas em altura!\n\nSe você acelerar a moto e uma das fases crescer para 60 volts, mas a outra fase ficar agarrada nos 20 volts e não subir de jeito nenhum, você tem certeza absoluta de que há um curto-circuito interno naquela bobina do estator, e ele precisará ser substituído ou recondicionado.",
        "name": "2 Fases (Bifásico)"
      },
      {
        "id": "estator-3f",
        "detailedTeacherExplanation": "Estator Trifásico. O peso pesado da geração de energia na moto. Eixo Y para voltagem, eixo X para tempo.\n\nDele saem três fios amarelos (geralmente), enviando três fases de energia pesada em corrente alternada para suprir injeção, faróis pesados e acessórios. Com o osciloscópio, o cenário ideal é ligar nos três fios usando canais separados. \n\nVocê verá um belo gráfico com três ondas senoidais trançadas umas sobre as outras. O segredo de uma análise precisa aqui é o equilíbrio. As três ondas devem ter exatamente o mesmo tamanho e responder juntas quando você acelera a moto, ultrapassando facilmente os 60 ou 70 volts.\n\nSe uma das ondas aparecer encolhida no gráfico, desproporcional às outras duas, significa que aquela fase derreteu o verniz interno e entrou em curto. A energia gerada cai drasticamente, o retificador sofre, e a bateria seca rápido.",
        "name": "3 Fases (Trifásico)"
      }
    ],
    "type": "sensor",
    "shortDescription": "Gera a energia AC (Corrente Alternada) da moto.",
    "fullDescription": "O estator é o coração do sistema elétrico. Ele converte energia mecânica em energia elétrica (Corrente Alternada - AC). Escolha a configuração de fases para ver os detalhes e testes.",
    "oscilloscopeSetup": {
      "timeDiv": "5ms a 10ms",
      "voltageDiv": "20V a 50V",
      "triggerEdge": "Subida",
      "triggerMode": "Auto",
      "triggerLevel": "0V",
      "coupling": "AC",
      "axis": "Y/T"
    },
    "waveformExplanation": "O Estator é como a usina de força da moto (funciona como o alternador do carro). Dentro dele existem bobinas. Quando o ímã gira, ele produz eletricidade em formato de Corrente Alternada (ondas que vão para o lado positivo e negativo sem parar).\n\nComportamento Geral:\nA altura das ondas é o que importa! Em marcha lenta a onda é menor. Ao acelerar a moto a uns 5000 RPM, essa onda deve dar pulos gigantes (podendo passar de 100 Volts). Se você acelerar e o gráfico não subir acompanhando o motor, as bobinas dentro do motor estão queimadas, e a moto logo vai descarregar a bateria.",
    "waveType": "sine",
    "multimeter": {
      "teacherExplanation": "Para o diagnóstico do Estator Trifásico, padrão em motos de média/alta cilindrada e sistemas modernos de injeção, configuramos o aparelho para ACV 200. Com três pernas elétricas (frequentemente amarelas ou brancas), formamos uma estrela ou delta eletromagnético que produz carga limpa. É fundamental realizar as 3 medições cruzadas com a moto acionada e atestar simetria - ex: 80V em todas. Se apenas uma cruzada estiver em 25V e as outras altíssimas, essa bobina isolada fritou sob pressão térmica ou excesso de óleo impuro abrasivo. Pense na engenharia do lubrificante! Muitas queimas de estator originam-se em motores operando com baixo volume de óleo ou contaminação extrema. O fio de cobre isolado esquenta absurdamente; o banho de óleo age como refrigerante dielétrico (isolador térmico). Teste sem óleo esfriando o núcleo significa estator torrado ou fase rompida sem retorno.",
      "setting": "ACV_200",
      "instructions": "Selecione o tipo de estator para ver as instruções.",
      "expectedValues": "Varia conforme o tipo de estator.",
      "variesByModel": true




    }
  },
  {
    "id": "ignition-coil-secondary-cdi-prox",
    "detailedTeacherExplanation": "Secundário por Aproximação. Quando a pinça não entra, a gente apenas encosta a ponta do osciloscópio no cabo. O sinal não terá voltagem real calculada, mas o formato revela a saúde da queima e se existe aquela oscilação residual salvadora indicando que a bobina está boa.",
    "hidden": true,
    "name": "Bobina de Ignição (Secundário) - Carburada (Aproximação)",
    "type": "actuator",
    "shortDescription": "Sinal induzido capturado aproximando a ponta de prova do cabo de vela.",
    "fullDescription": "Em motos carburadas (CDI), outra forma de capturar o sinal do secundário é simplesmente aproximando a ponta de prova comum (sem pinça) do cabo de vela. Como estamos pegando apenas a indução eletromagnética que vaza do cabo, o sinal tem um formato característico: um pico acentuado, seguido do tempo de queima e ressonâncias (como a segunda faísca) da bobina.",
    "oscilloscopeSetup": {
      "timeDiv": "1ms a 2ms",
      "voltageDiv": "500mV a 1V (pois é apenas indução do campo)",
      "triggerEdge": "Subida ou Descida",
      "triggerMode": "Normal",
      "triggerLevel": "Varia (ajuste conforme a amplitude captada)",
      "coupling": "DC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Utilize a ponta de prova padrão do osciloscópio (canal 1). Aterre a garra preta no chassi ou negativo da bateria. Aproxime a ponta positiva do cabo de vela, sem perfurar ou desencapar. Mova a ponta até encontrar o melhor sinal.",
    "waveformExplanation": "O gráfico capturado por **Aproximação** revela a interferência eletromagnética gerada pela alta tensão do cabo de vela, mostrando detalhes físicos da descarga capacitiva.\n\n• **Pico de Disparo Inicial**: O primeiro grande salto ocorre no momento exato em que o capacitor do CDI (já carregado pelo estator ou bateria) é descarregado instantaneamente no primário da bobina. Isso induz a alta tensão necessária para romper a resistência do ar na vela.\n\n• **Pico Reverso e Tempo de Queima**: Imediatamente após o rompimento da faísca, a tensão sofre uma inversão brusca e vai para a parte negativa do gráfico. A rampa suave que tenta subir de volta à linha zero é o **Tempo de Queima da Faísca**. É neste momento que a mistura ar-combustível está sendo inflamada.\n\n• **O Segundo Pico (Ressonância LC)**: Você notará que, após a queima, surge um segundo pico ou oscilação menor. **Por que isso acontece sem que o CDI precise ser recarregado?** Isso ocorre devido ao efeito de **Ressonância LC (Circuito Tanque)**. A bobina de ignição (Indutor - L) e o capacitor do CDI (Capacitor - C) formam um circuito elétrico fechado. Quando a energia principal da faísca termina, a energia magnética que sobrou na bobina colapsa e retorna pelo fio, recarregando o capacitor internamente de forma invertida por uma fração de milissegundo. O capacitor, então, descarrega essa energia de volta na bobina, gerando esse segundo pico indutivo (o \"repique\"). A energia fica \"batendo e voltando\" (ringing) entre a bobina e o CDI até se dissipar. A presença clara desse segundo pico é um excelente indicativo: mostra que o enrolamento da bobina está saudável e não possui curtos internos (que matariam essa ressonância).",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Pico de Disparo Inicial",
        "description": "Salto de tensão rápido gerado pela descarga do capacitor do CDI.",
        "x": 35.1,
        "y": 5,
        "labelX": 25,
        "labelY": 15
      },
      {
        "id": 2,
        "title": "Pico Reverso e Início",
        "description": "A inversão rápida do fluxo magnético joga a tensão para baixo.",
        "x": 35.2,
        "y": 95,
        "labelX": 20,
        "labelY": 90
      },
      {
        "id": 3,
        "title": "Tempo de Queima",
        "description": "Rampa suave (em direção ao zero) onde a energia é dissipada em forma de faísca.",
        "x": 43,
        "y": 63,
        "labelX": 35,
        "labelY": 75
      },
      {
        "id": 4,
        "title": "O Segundo Pico (Ressonância)",
        "description": "A energia restante bate e volta entre a bobina e o CDI, gerando o segundo pico sem nova recarga externa.",
        "x": 52,
        "y": 50,
        "labelX": 62,
        "labelY": 40
      }
    ],
    "waveType": "ignition-secondary-cdi-prox"
  },
  {
    "id": "estator-1f",
    "detailedTeacherExplanation": "Estator Monofásico. O eixo vertical indica a voltagem, e o horizontal, o tempo.\n\nEste é o gerador mais simples, composto por uma única bobina longa ligada ao terra. Ele produz Corrente Alternada (AC). O sinal no osciloscópio é a clássica onda senoidal, subindo e descendo acima e abaixo do eixo zero. Parece o movimento de uma corda batendo.\n\nO diagnóstico é direto: conecte na saída do estator com a moto ligada. Em marcha lenta, as ondinhas devem ter uma voltagem razoável, digamos 20 a 30 volts. Conforme você acelera a moto, essas ondas precisam ficar muito mais espremidas (aumento de frequência) e muito mais altas, podendo chegar a 80 ou 100 volts! \n\nSe você acelera fundo e o gráfico não sobe de tamanho, e as ondas ficam 'murchas' perto dos 20 volts, a bobina do estator sofreu curto-circuito ou o imã do volante perdeu o magnetismo. É o principal motivo da bateria não carregar.",
    "name": "Estator - 1 Fase (Monofásico)",
    "type": "sensor",
    "shortDescription": "Estator com apenas uma bobina ou uma saída de fase.",
    "fullDescription": "No sistema monofásico, o estator gera Corrente Alternada (AC) através de um fio, utilizando o chassi (terra) como retorno. A amplitude da tensão sobe conforme a aceleração da motocicleta.",
    "oscilloscopeSetup": {
      "timeDiv": "5ms",
      "voltageDiv": "20V",
      "triggerEdge": "Subida",
      "triggerMode": "Auto",
      "triggerLevel": "0V",
      "coupling": "AC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Aterre a garra preta do osciloscópio no negativo da bateria ou no chassi do motor. Espete a ponta de prova (Canal 1) no fio de saída de luz/carga do estator (consulte o manual de serviço para a cor correta, frequentemente amarelo ou branco).\n\n⚠️ IMPORTANTE: O teste é feito com a moto em funcionamento. Cuidado com fios expostos.",
    "waveformExplanation": "O Estator Monofásico tem apenas uma fase (um caminho de energia). Você verá uma onda de energia (AC) bem limpa.\n\nComportamento e Defeitos:\n• **Baixa Tensão**: Se você acelerar e a onda não passar de 20 ou 30 Volts de altura total, as espiras estão em curto ou queimadas, ou o próprio ímã do magneto perdeu o magnetismo. \n• **Ondas Deformadas**: Se o gráfico não parecer uma onda redondinha (senoidal), e estiver todo quadrado ou falhado, as bobinas estão em curto-circuito com a carcaça (massa) do motor.",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Semiciclo Positivo",
        "description": "Semiciclo positivo da geração. Você acelera, esse morro cresce proporcionalmente! Se ficar 'anão' travado nos 20V em giro alto, o magnetismo do volante acabou ou a bobina está em curto.",
        "x": 25,
        "y": 20,
        "labelX": 25,
        "labelY": 10
      },
      {
        "id": 2,
        "title": "Cruzamento Zero (0V)",
        "description": "O momento exato que um ímã norte-sul do volante passa e o outro assume.",
        "x": 50,
        "y": 50,
        "labelX": 40,
        "labelY": 50
      },
      {
        "id": 3,
        "title": "Semiciclo Negativo",
        "description": "Semiciclo negativo. Esta onda para baixo deve ser perfeitamente espelhada com a de cima. Assimetrias grosseiras acusam que o isolamento interno do estator derreteu e a energia está vazando para o motor.",
        "x": 75,
        "y": 80,
        "labelX": 75,
        "labelY": 90
      }
    ],
    "waveType": "sine",
    "hidden": true,
    "multimeter": {
      "teacherExplanation": "Para o diagnóstico do Secundário da Bobina de Ignição em circuitos CDI (próximo do limite da vela), os mecânicos usam Ohms 20k. É a medição direta da bobina que envia a tensão explosiva à câmara de combustão. Sem leitura da resistência no terminal que entrega ao cachimbo? Uma ruptura profunda de fio, muitas vezes próxima do fim da bobina com acúmulo de carbono e tensão. Os valores, variando usualmente até 15k Ohms, são essenciais para formar o pulso. Valores próximos de 0k (fio torrado colado em si mesmo) resultam na ausência de ignição. Desconfie severamente das oscilações de umidade em motos que andaram sem proteção, forçando a isolação e o desmonte prévio da tampa da bobina de pulso e suas resinas de selagem de baixa qualidade, ocasionando perdas crônicas intermitentes.",
      "setting": "ACV_200",
      "instructions": "Multímetro em Tensão AC (200V). Desconecte o estator. Meça entre o fio de saída e o terra/chassi com o motor ligado.",
      "expectedValues": "Tensão AC: Varia de ~20V (marcha lenta) até mais de 60V (acelerando).",
      "variesByModel": true,
      "minValue": 20,
      "maxValue": 60,
      "unit": "V",
      "temperatureObservation": "A tensão sobe com a rotação, independentemente da temperatura térmica. Uma bobina com defeito pode falhar quando aquecida.",
    }
  },
  {
    "id": "estator-2f",
    "detailedTeacherExplanation": "Estator Bifásico. Eixo vertical medindo tensão, eixo horizontal medindo tempo.\n\nNeste sistema, não temos o aterramento interno no motor. O estator gera energia em duas pontas, mandando ambas para o retificador. Para testar perfeitamente, você usaria dois canais do osciloscópio.\n\nO que você vai ver na tela são duas linhas de ondas senoidais (subindo e descendo alternadamente). A dica mestre desse diagnóstico é: As duas ondas têm que ser espelhadas e idênticas em altura!\n\nSe você acelerar a moto e uma das fases crescer para 60 volts, mas a outra fase ficar agarrada nos 20 volts e não subir de jeito nenhum, você tem certeza absoluta de que há um curto-circuito interno naquela bobina do estator, e ele precisará ser substituído ou recondicionado.",
    "name": "Estator - 2 Fases (Bifásico)",
    "type": "sensor",
    "shortDescription": "Estator com bobina flutuante, duas saídas.",
    "fullDescription": "O sistema bifásico (ou monofásico de onda completa) não possui aterramento interno. Ambas as extremidades da bobina saem do motor. A tensão é medida entre esses dois fios.",
    "oscilloscopeSetup": {
      "timeDiv": "5ms",
      "voltageDiv": "20V a 50V",
      "triggerEdge": "Subida",
      "triggerMode": "Auto",
      "triggerLevel": "0V",
      "coupling": "AC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Desconecte o plugue do retificador se quiser medir sem carga, ou meça conectado. Conecte a garra preta no Fio A do estator e a ponta de prova (Canal 1) no Fio B do estator (geralmente dois fios da mesma cor, ex: amarelos ou rosas). \n\n⚠️ IMPORTANTE: Como não há referência ao terra do chassi, não aterre a garra preta na bateria. Ligue a garra preta em um fio do estator e a ponta no outro.",
    "waveformExplanation": "Aqui nós colocamos os dois canais do osciloscópio (Canal 1 e 2) nos dois fios amarelos/brancos que sobem do estator.\n\nComportamento e Defeitos:\n• **O Espelho Perfeito**: Você vai ver duas ondas, uma para cima e outra para baixo (elas são invertidas). O grande segredo aqui é que a altura (tamanho) de UMA tem que ser EXATAMENTE IGUAL a da OUTRA. \n• **Fase Queimada (Defeito)**: Se você ver a onda Ciano gigantesca e a onda Magenta pequenininha, bingo! Uma parte das bobinas fritou, entrou em curto e não gera mais energia.",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Fase 1 (Ciano)",
        "description": "Onda do fio Amarelo (Fase 1). Ela dita o limite para a outra.",
        "x": 25,
        "y": 20,
        "labelX": 25,
        "labelY": 10
      },
      {
        "id": 2,
        "title": "Fase 2 (Magenta)",
        "description": "Onda do fio Rosa/Branco (Fase 2). Atenção máxima: A amplitude (altura) da fase 2 e da fase 1 devem ser exatamente iguais! Se a onda Ciano estiver no teto e a Magenta estiver pequenininha, essa segunda bobina do estator entrou em curto e morreu.",
        "x": 25,
        "y": 80,
        "labelX": 25,
        "labelY": 90
      }
    ],
    "waveType": "sine",
    "hidden": true,
    "multimeter": {
      "teacherExplanation": "Para o diagnóstico avançado do Estator Bifásico, o multímetro entra em cena com Tensão Alternada de alta faixa (AC 200V). Estatores bifásicos possuem duas saídas principais que operam balanceadamente alimentando o retificador. A engenharia do motor em movimento a 5 mil RPM gera tensões superiores a 60V nestes dois pontos (geralmente dois fios amarelos ou rosa e amarelo). Medindo as fases simultaneamente, o desequilíbrio relata curtos-circuitos internos em um conjunto de bobinas ou a carbonização do fio por excesso prolongado de consumo elétrico na moto (excesso de faróis ou LED mal dimensionado). Adicionalmente, faça o teste de Resistência (Ohms 200) com o motor mudo (desligado): ambas as saídas não podem apresentar qualquer leitura em relação ao chassi, pois devem estar eletricamente flutuantes no sistema. Encontrou marcação para o terra? Estator queimado.",
      "setting": "ACV_200",
      "instructions": "Multímetro em Tensão AC (200V). Desconecte o estator. Meça entre os dois fios que sobem do estator (motor ligado).",
      "expectedValues": "Tensão AC: Varia de ~20V (marcha lenta) a 80V+ (acelerando). Resistência: Menos de 1 a 3 Ohms (motor desligado). Não deve haver continuidade com o terra.",
      "variesByModel": true,
      "minValue": 20,
      "maxValue": 80,
      "unit": "V",
      "temperatureObservation": "Bobinas com espiras em curto ou aterramento acidental podem falhar após o motor esquentar e dilatar o cobre.",
    }
  },
  {
    "id": "estator-3f",
    "detailedTeacherExplanation": "Estator Trifásico. O peso pesado da geração de energia na moto. Eixo Y para voltagem, eixo X para tempo.\n\nDele saem três fios amarelos (geralmente), enviando três fases de energia pesada em corrente alternada para suprir injeção, faróis pesados e acessórios. Com o osciloscópio, o cenário ideal é ligar nos três fios usando canais separados. \n\nVocê verá um belo gráfico com três ondas senoidais trançadas umas sobre as outras. O segredo de uma análise precisa aqui é o equilíbrio. As três ondas devem ter exatamente o mesmo tamanho e responder juntas quando você acelera a moto, ultrapassando facilmente os 60 ou 70 volts.\n\nSe uma das ondas aparecer encolhida no gráfico, desproporcional às outras duas, significa que aquela fase derreteu o verniz interno e entrou em curto. A energia gerada cai drasticamente, o retificador sofre, e a bateria seca rápido.",
    "name": "Estator - 3 Fases (Trifásico)",
    "type": "sensor",
    "shortDescription": "Sistema trifásico usado em motos maiores, 3 fios amarelos.",
    "fullDescription": "O estator trifásico possui 3 bobinas independentes ligadas em estrela ou triângulo. Ele sai do motor com 3 fios, geralmente da mesma cor (ex: 3 fios amarelos). Fornece energia muito mais estável e potente.",
    "oscilloscopeSetup": {
      "timeDiv": "5ms a 10ms",
      "voltageDiv": "20V a 50V",
      "triggerEdge": "Subida",
      "triggerMode": "Auto",
      "triggerLevel": "0V",
      "coupling": "AC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Você deve testar as 3 combinações de fios: (1-2, 1-3, 2-3). Para o teste 1-2: Conecte a garra preta no Fio 1 e a ponta de prova (Canal 1) no Fio 2. Repita o processo para as outras combinações. \n\n⚠️ IMPORTANTE: Se o seu osciloscópio tem dois canais, você pode ver 2 fases sobrepostas. O teste de fuga para terra é essencial: garra no motor, ponta em cada um dos 3 fios (nenhum deve gerar onda).",
    "waveformExplanation": "O Trifásico é o sistema das motos maiores, gera muito mais energia usando 3 fases cruzadas. Precisaríamos de 3 canais no osciloscópio.\n\nComportamento e Defeitos:\n• **O Equilíbrio das Fases**: Assim como no bifásico, o segredo é a altura dos picos. As três ondas devem estar sempre da mesma altura em qualquer rotação.\n• **Falta de uma Fase**: Se uma das linhas estiver morta (quase reta) e as outras duas subindo e descendo, ou se ela tiver a metade da altura das outras, o estator está danificado e precisa de substituição ou recondicionamento.",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Fase 1 (Ciano)",
        "description": "Fase 1. Primeira linha de alimentação pesada da motocicleta.",
        "x": 21,
        "y": 20,
        "labelX": 21,
        "labelY": 10
      },
      {
        "id": 2,
        "title": "Fase 2 (Magenta)",
        "description": "Fase 2. Segue os passos da primeira preenchendo a falta de energia.",
        "x": 26,
        "y": 80,
        "labelX": 26,
        "labelY": 90
      },
      {
        "id": 3,
        "title": "Fase 3 (Amarela)",
        "description": "Fase 3. O equilíbrio absoluto. As 3 ondas trabalhando juntas em defasagem precisam apresentar a mesma altura (Voltagem). Se a amarela for a única a não subir de amplitude ao acelerar, o estator Trifásico está condenado e deverá ser reenrolado/trocado.",
        "x": 31,
        "y": 20,
        "labelX": 31,
        "labelY": 10
      }
    ],
    "waveType": "sine",
    "hidden": true,
    "multimeter": {
      "setting": "ACV_200",
      "instructions": "Multímetro em Tensão AC (200V). Desconecte o estator. Meça combinando os 3 fios (A com B, A com C, B com C) com o motor ligado.",
      "expectedValues": "Tensão AC: Varia de ~20V a 80V+ (acelerando). Os valores das três medições devem ser muito parecidos. Resistência: Menos de 1 Ohm entre eles. Não deve haver continuidade com o terra.",
      "variesByModel": true,
      "minValue": 20,
      "maxValue": 80,
      "unit": "V",
      "temperatureObservation": "Estatores fadigados, após o aquecimento do óleo do motor, podem entrar em curto e apresentar queda repentina de tensão em uma ou mais fases.",
      "teacherExplanation": "Para o diagnóstico do Estator Trifásico, padrão em motos de média/alta cilindrada e sistemas modernos de injeção, configuramos o aparelho para ACV 200. Com três pernas elétricas (frequentemente amarelas ou brancas), formamos uma estrela ou delta eletromagnético que produz carga limpa. É fundamental realizar as 3 medições cruzadas com a moto acionada e atestar simetria - ex: 80V em todas. Se apenas uma cruzada estiver em 25V e as outras altíssimas, essa bobina isolada fritou sob pressão térmica ou excesso de óleo impuro abrasivo. Pense na engenharia do lubrificante! Muitas queimas de estator originam-se em motores operando com baixo volume de óleo ou contaminação extrema. O fio de cobre isolado esquenta absurdamente; o banho de óleo age como refrigerante dielétrico (isolador térmico). Teste sem óleo esfriando o núcleo significa estator torrado ou fase rompida sem retorno."
    }
  },
  {
    "id": "retificador",
    "detailedTeacherExplanation": "Regulador / Retificador de Voltagem.\n\nEle pega aquela onda bagunçada e alternada do estator e transforma em Corrente Contínua (DC) limpinha, limitada a cerca de 14.5V, para não explodir a bateria e os módulos.\n\nTestando no osciloscópio:\n- Pontas direto nos bornes da bateria. Moto ligada em marcha lenta e acelerando.\n- O que esperar: Uma linha DC reta, próximo a 14.2V, com 'ondulações' muito pequenas no topo (ripple).\n- DEFEITO 1 (Diodo queimado): Se você ver 'dentes' fundos na linha DC ou tensão muito baixa, a conversão falhou, a bateria não carrega.\n- DEFEITO 2 (Regulador pifou): Acelerando a moto, a linha passa dos 15V, 16V, 17V! Desligue rápido! O retificador não está cortando o excesso. Isso ferve a bateria e queima lâmpadas e módulos de injeção. É o pior cenário!\n- Falso Defeito: Bateria viciada não absorve energia. A tensão pode pular rápido para 14V e a linha ficar cheia de ruídos bizarros. Teste com uma bateria sabidamente boa antes de condenar o retificador.",
    "name": "Retificador de Voltagem (Regulador/Retificador)",
    "type": "sensor",
    "shortDescription": "Converte AC do estator em DC e regula a tensão (13.5V a 14.8V).",
    "fullDescription": "O Retificador/Regulador tem duas funções essenciais: 1) Retificar a Corrente Alternada (AC) gerada pelo estator transformando-a em Corrente Contínua (DC). 2) Regular a voltagem, cortando excessos para manter entre 13.5V e 14.8V, protegendo a bateria e módulos. Se falhar, a bateria descarrega ou ferve pelo excesso de carga.",
    "oscilloscopeSetup": {
      "timeDiv": "2ms a 5ms",
      "voltageDiv": "5V a 10V",
      "triggerEdge": "Subida",
      "triggerMode": "Auto",
      "triggerLevel": "0V",
      "coupling": "DC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Conecte a garra preta do osciloscópio no terminal negativo da bateria. Espete a ponta de prova (Canal 1) no fio positivo de saída do retificador (geralmente vermelho ou vermelho/branco) OU diretamente no polo positivo da bateria.\n\n⚠️ IMPORTANTE: O teste é feito com a moto ligada. Acelere a moto a 3000-5000 RPM e observe o comportamento da onda.",
    "waveformExplanation": "O Retificador/Regulador é o porteiro da bateria. Ele recebe aquela energia maluca do estator (Corrente Alternada que sobe e desce) e converte em energia lisa e contínua (Corrente Contínua a 14V) para carregar a bateria.\n\nComportamento e Defeitos:\n• **A Linha Base**: Você vai ver uma linha reta flutuando perto de 14 Volts.\n• **Os Dentes de Serra (Ripple)**: Em cima dessa linha reta, você verá umas ondinhas pequenas (ripple). Isso é normal, é a sobra da conversão de energia.\n• **Diodo Queimado (Defeito)**: Se essas ondinhas ficarem GIGANTES, passando de 1 Volt de altura de diferença, ou se der picos enormes para baixo, os diodos internos do retificador queimaram. Ele está vazando energia ruim (Alternada) para a bateria, o que ferve e estraga a bateria em poucos dias.\n• **Excesso de Carga**: Se a linha reta subir para 16V, 17V ou mais acelerando, o regulador não está cortando e vai fritar a bateria e os módulos eletrônicos.",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Tensão de Carga",
        "description": "É a Corrente Contínua domada (DC). O retificador limpa a bagunça do estator e entrega os 14V contínuos para recarregar a bateria. Abaixo de 13V o sistema não alimenta a moto; Acima de 15V o retificador está fritando e destruirá sua bateria (excesso de carga).",
        "x": 25,
        "y": 30,
        "labelX": 25,
        "labelY": 20
      },
      {
        "id": 2,
        "title": "Ripple de Diodos",
        "description": "Ripple de Diodos. São esses dentes de serra minúsculos (resíduos AC). Se eles assumirem alturas enormes, rasgando o gráfico para cima e para baixo (excedendo 1V a 2V de Ripple), os diodos internos furaram e estão deixando energia alternada matar a bateria.",
        "x": 75,
        "y": 30,
        "labelX": 75,
        "labelY": 40
      }
    ],
    "waveType": "dc-ripple",
    "multimeter": {
      "setting": "DCV_20",
      "instructions": "Motor ligado, acelerado a ~4000 RPM. Multímetro em DC 20V. Meça a tensão diretamente nos polos da bateria. Para medir fuga, com motor desligado, desconecte o negativo da bateria e coloque o multímetro em série na escala de 10A (DCA).",
      "expectedValues": "Tensão de Carga: Entre 13.5V e 14.8V. Fuga de corrente: Máximo aceitável em torno de 1mA a 3mA (consulte manual da moto).",
      "variesByModel": true,
      "minValue": 13.5,
      "maxValue": 14.8,
      "unit": "V",
      "temperatureObservation": "Alguns retificadores com defeito param de regular a tensão (ou param de carregar) após esquentarem. Avalie frio e quente (após ligar a ventoinha).",
      "teacherExplanation": "Para o diagnóstico do Retificador/Regulador de Voltagem, o equipamento deve figurar em DC 20V, ou seja, Corrente Contínua - a energia real consumida pelo módulo, lâmpadas e injetores. O estator bombeou uma confusão massiva de Corrente Alternada, o regulador tem a exata engenharia de usar uma ponte de Diodos para transformar AC em DC, e transistores retificadores em paralelo cortam (retificam em calor pra suas aletas de metal) qualquer pico acima de 14.8 Volts. Ao aferir sob os polos da bateria com aceleração, se passar de 15 Volts, os semicondutores transistores do regulador queimaram abertos, e a bateria irá explodir seus ácidos, destruindo injeção e módulo ABS da motocicleta (fenômeno de excesso de voltagem). Se travar cravado em 12.3V e não reagir com o punho, os Diodos estão em colapso completo. Aletas de refrigeração cheias de lama nas off-road impedem a troca de calor, queimando a peça fatalmente. Teste de fuga: um retificador estourado costuma roubar carga (bateria descarregada matinal) mesmo desligado."
    }
  },
  {
    "id": "cdi-ac",
    "detailedTeacherExplanation": "Nesta tela, analisamos o Primário da Bobina de Ignição de um sistema CDI AC, aquele CDI antigo alimentado diretamente pelo estator, sem depender da bateria. O eixo Y é voltagem, o eixo X é tempo.\n\nAssim como no CDI de bateria, o funcionamento baseia-se num disparo rápido de um capacitor interno. A linha do gráfico fica zerada e, de forma repentina, dispara em um pico vertiginoso que cruza a tela, chegando a 150 ou 200 volts num instante mínimo. Esse é o despejo de energia na bobina.\n\nApós esse salto violento, a tensão rebota para baixo de zero, formando picos negativos, e oscila até estabilizar no centro novamente. Como esse sistema depende da energia gerada pelo estator (bobina de força), se esse pico no primário estiver fraco ou inexistente, você deve primeiro investigar se o estator está mandando a voltagem alternada (AC) correta para alimentar o CDI. Se a alimentação chega e o pico primário sai fraco, o defeito está no módulo CDI.",
    "hidden": true,
    "name": "Bobina de Ignição (Primário) - Carburada (CDI AC)",
    "type": "actuator",
    "shortDescription": "Módulo de ignição de motos carburadas (descarrega energia na bobina).",
    "fullDescription": "O CDI (Capacitor Discharge Ignition) armazena a energia gerada pela bobina de força do estator em um capacitor interno e, ao receber o sinal do sensor de pulso (CKP), descarrega essa energia (um pulso de tensão positiva de alta voltagem) instantaneamente no primário da bobina de ignição, gerando a faísca na vela.",
    "oscilloscopeSetup": {
      "timeDiv": "5ms a 10ms",
      "voltageDiv": "50V a 100V (Atenção: picos podem passar de 200V, use atenuador!)",
      "triggerEdge": "Subida",
      "triggerMode": "Normal",
      "triggerLevel": "20V a 50V",
      "coupling": "DC",
      "axis": "Y/T"
    },
    "connectionInstructions": "Conecte a garra jacaré preta ao negativo da bateria ou chassi. Conecte a ponta de prova (canal 1), OBRIGATORIAMENTE com atenuador (ex: 20:1) se não suportar altas tensões, no fio que vai do CDI para a Bobina de Ignição (geralmente Preto/Amarelo na Honda).",
    "waveformExplanation": "A forma de onda do CDI é um pico de tensão extremamente alto e de curtíssima duração. É a descarga do capacitor. Logo após o pico principal, podem ocorrer algumas oscilações amortecidas. Diferente da ignição TCI (indutiva), não há o longo tempo de 'dwell' (carregamento) antes do disparo, a subida de tensão é instantânea.\n\nComportamento em Falhas:\n• Pico muito baixo ou inexistente: O CDI pode não estar recebendo alimentação do estator (bobina de força), o capacitor interno estourou, ou não está recebendo sinal do CKP (pulso).\n• Sem oscilação residual (amortecida): Pode indicar um curto-circuito no primário da bobina de ignição, que drena a energia muito rápido sem criar ressonância.",
    "waveformPhases": [
      {
        "id": 1,
        "title": "Disparo do Capacitor",
        "description": "O momento exato em que o CDI libera a energia (100V a 400V) para o primário da bobina de ignição.",
        "x": 20,
        "y": 20,
        "labelX": 10,
        "labelY": 10
      },
      {
        "id": 2,
        "title": "Oscilação Amortecida",
        "description": "Dissipação da energia restante entre a bobina e o capacitor após a faísca.",
        "x": 30,
        "y": 60,
        "labelX": 40,
        "labelY": 80
      }
    ],
    "waveType": "cdi",
    "multimeter": {
      "teacherExplanation": "Para diagnosticar o fornecimento de Primário da Bobina oriundo de um CDI Alimentado por Corrente Alternada (AC), os testes básicos do multímetro de resistência são imprecisos, forçando o uso da escala de Pico de Voltagem (Adaptador de Peak Hold em DC ou a função Peak no multímetro apropriado). A natureza da centelha é descarregar um capacitor gigantesco com pulso rápido de milionésimos de segundo. Se você aferir a ponta amarela saindo do CDI, deve acusar os famigerados picos acima de 100V indo para a bobina com o virabrequim girando a motor de partida. A falta do pico expõe que o estator AC, que devia alimentar o capacitor pelo fio preto e vermelho primário, sofreu isolamento deficiente, reduzindo ou retardando o carregamento da centelha, gerando perdas e 'buraqueira' nas retas (sintomas de excesso ou falta nas curvas magnéticas). Sem pico capturado no seu diagnóstico? É diagnóstico sem rumo e sem conserto.",
      "setting": "Pico de Tensão (Peak Hold) em VDC ou Multímetro com Adaptador de Pico",
      "instructions": "1. Conecte a ponta preta ao terra (chassi ou negativo da bateria).\n2. Conecte a ponta vermelha no fio de saída do CDI para a bobina de ignição (ex: Preto/Amarelo).\n3. Dê partida no motor (start ou pedal).",
      "expectedValues": "Mínimo de 100V de pico (varia conforme o modelo e estado do estator).",
      "variesByModel": true
    }
  }
];