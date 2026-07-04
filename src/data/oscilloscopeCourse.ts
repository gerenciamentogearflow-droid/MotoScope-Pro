export interface CourseLesson {
  id: string;
  title: string;
  content: string; // Markdown format
}

export interface CourseQuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface CourseQuiz {
  id: string;
  title: string;
  questions: CourseQuizQuestion[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  lessons: CourseLesson[];
  quiz?: CourseQuiz;
}

export const oscilloscopeCourse: CourseModule[] = [
  {
    id: "mod1",
    title: "Módulo 1: Fundamentos do Osciloscópio",
    description: "Entenda o que é um osciloscópio, para que serve e seus controles básicos.",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    lessons: [
      {
        id: "m1l1",
        title: "O que é um Osciloscópio?",
        content: `
# O que é um Osciloscópio?

O multímetro é uma ferramenta excelente, mas ele só consegue mostrar a **média** ou o valor absoluto de uma tensão em um determinado momento. Se a tensão variar muito rápido, o multímetro não consegue acompanhar.

É aí que entra o **Osciloscópio**. Ele é como uma "câmera de vídeo" para a eletricidade. Ele desenha um gráfico mostrando exatamente como a tensão (voltagem) está mudando ao longo do tempo.

### Eixos do Gráfico
- **Eixo Vertical (Y):** Representa a **Tensão (Volts)**. Quanto mais alto o traço, maior a voltagem.
- **Eixo Horizontal (X):** Representa o **Tempo**. O traço se move da esquerda para a direita ao longo do tempo.

Usando um osciloscópio, podemos ver ruídos, picos de tensão, interrupções (falhas) e o tempo exato que um componente fica ligado ou desligado.
        `
      },
      {
        id: "m1l2",
        title: "Tensão por Divisão (Volts/Div)",
        content: `
# Tensão por Divisão (Volts/Div)

A tela do osciloscópio é dividida em quadrados (um grid). O controle de **Volts/Div** diz ao osciloscópio quanto cada um desses quadrados representa na vertical.

Se você configurar para **5V/Div**:
- 1 quadrado na vertical = 5 Volts.
- 2 quadrados = 10 Volts.
- 3 quadrados = 15 Volts.

### Como ajustar:
Se o sinal for muito grande e sair da tela, você deve **aumentar** o valor de Volts/Div (ex: de 2V para 10V/Div) para "encolher" o gráfico.
Se o sinal for muito pequeno e difícil de ver, você **diminui** o valor (ex: de 5V para 1V/Div) para "ampliar" o sinal.
        `
      },
      {
        id: "m1l3",
        title: "Tempo por Divisão (Time/Div)",
        content: `
# Tempo por Divisão (Time/Div)

Assim como o Volts/Div ajusta a altura, o **Time/Div** (Tempo por divisão) ajusta a largura. Ele determina quanto tempo cada quadrado na horizontal representa.

Se você configurar para **10ms (milissegundos) / Div**:
- 1 quadrado na horizontal = 10ms.
- 10 quadrados (a tela toda) = 100ms.

### Como ajustar:
Se o sinal estiver muito espremido, parecendo um borrão, **diminua** o tempo (ex: de 50ms para 5ms) para "dar zoom" na horizontal.
Se você estiver vendo apenas uma linha reta ou apenas um pedaço do sinal, **aumente** o tempo para ver mais eventos acontecendo na mesma tela.
        `
      }
    ],
    quiz: {
      id: "q1",
      title: "Prova: Fundamentos do Osciloscópio",
      questions: [
        {
          question: "O que representa o eixo Vertical (Y) no gráfico do osciloscópio?",
          options: ["Tempo", "Tensão (Voltagem)", "Corrente", "Resistência"],
          correctAnswerIndex: 1
        },
        {
          question: "Se o sinal estiver saindo da tela na vertical (muito grande), o que você deve fazer?",
          options: ["Diminuir o Volts/Div", "Aumentar o Volts/Div", "Aumentar o Time/Div", "Desligar o osciloscópio"],
          correctAnswerIndex: 1
        },
        {
          question: "Se o sinal parecer um borrão muito espremido na tela, qual controle deve ser ajustado?",
          options: ["Aumentar o Time/Div", "Diminuir o Volts/Div", "Diminuir o Time/Div", "Mudar o canal"],
          correctAnswerIndex: 2
        }
      ]
    }
  },
  {
    id: "mod2",
    title: "Módulo 2: Configuração e Trigger",
    description: "Aprenda a congelar a imagem na tela e configurar pontas de prova.",
    imageUrl: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&q=80&w=800",
    lessons: [
      {
        id: "m2l1",
        title: "O que é Trigger?",
        content: `
# O que é o Trigger?

Sem o Trigger, os sinais rápidos passariam pela tela como um filme fora de sincronia. A imagem ficaria "correndo" da esquerda para a direita, impossível de analisar.

O **Trigger (Gatilho)** diz ao osciloscópio: *"Só comece a desenhar o gráfico quando o sinal atingir uma voltagem específica."*

### Configurações do Trigger:
1. **Source (Fonte):** Qual canal o osciloscópio vai observar para disparar o gatilho (CH1, CH2, etc).
2. **Level (Nível):** A voltagem exata em que o gatilho será disparado. (Ex: "Comece a desenhar quando a tensão chegar em 2.5V").
3. **Edge (Borda):**
   - **Subida (Rising/Positive):** O gatilho dispara quando a tensão passa pelo Nível indo de baixo para cima.
   - **Descida (Falling/Negative):** O gatilho dispara quando a tensão passa pelo Nível indo de cima para baixo.
        `
      },
      {
        id: "m2l2",
        title: "Modos de Trigger (Auto, Normal, Single)",
        content: `
# Modos de Trigger

Existem três modos principais de funcionamento para o Trigger:

- **AUTO (Automático):** O osciloscópio espera pelo gatilho. Se o gatilho não acontecer, ele desenha a tela de qualquer jeito. Útil para encontrar onde o sinal está e verificar tensões contínuas (como testar bateria).
- **NORMAL:** O osciloscópio **só desenha** se o gatilho for atingido. Se você desconectar a ponta, a imagem congela no último gatilho que aconteceu. Ideal para sinais rápidos e repetitivos.
- **SINGLE (Único):** O osciloscópio espera o gatilho, desenha **uma única vez** e para. É perfeito para capturar eventos muito rápidos que só acontecem uma vez, como o pulso de partida do motor.
        `
      },
      {
        id: "m2l3",
        title: "Atenuação de Sinal (X1, X10, X100)",
        content: `
# Atenuação de Sinal

A maioria dos osciloscópios suporta tensões máximas na entrada (geralmente até 35V ou 50V). Mas no diagnóstico automotivo, lidamos com picos muito maiores:
- Injetores: Picos de até 100V.
- Primário da Bobina: Picos de até 400V.

Para não queimar o osciloscópio, usamos a **Atenuação**.
- **X1:** O sinal entra puro (1:1). Use para sensores (5V, 12V).
- **X10:** Divide a tensão por 10. Se entrar 100V na ponta, chega apenas 10V no osciloscópio.
- **X20 / X100:** Usado com atenuadores externos (como o Hantek HT201). **Obrigatório** para medir primário de bobina.

> **Importante:** Sempre que usar a atenuação física (na ponta ou no atenuador), você deve configurar o menu do osciloscópio para o mesmo valor (X10, X20) para que a leitura na tela mostre os volts corretos.
        `
      }
    ],
    quiz: {
      id: "q2",
      title: "Prova: Configuração e Trigger",
      questions: [
        {
          question: "Para que serve o Trigger no osciloscópio?",
          options: ["Aumentar a voltagem do sinal", "Congelar e estabilizar a imagem na tela", "Diminuir o ruído", "Mudar a cor do gráfico"],
          correctAnswerIndex: 1
        },
        {
          question: "Qual modo de trigger é ideal para capturar um evento muito rápido que só acontece uma vez?",
          options: ["AUTO", "NORMAL", "SINGLE", "Nenhum dos anteriores"],
          correctAnswerIndex: 2
        },
        {
          question: "Qual deve ser a atenuação utilizada ao medir o primário da bobina de ignição?",
          options: ["X1", "X10 ou X20 (com atenuador externo)", "Nenhuma atenuação", "O osciloscópio faz isso sozinho"],
          correctAnswerIndex: 1
        }
      ]
    }
  },
  {
    id: "mod3",
    title: "Módulo 3: Diagnóstico de Sensores",
    description: "Analisando CKP, TPS e Sonda Lambda.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    lessons: [
      {
        id: "m3l1",
        title: "Sensor CKP (Rotação)",
        content: `
# Sensor CKP (Rotação e Sincronismo)

O sensor de rotação é o "coração" da injeção eletrônica. Sem ele, não há centelha nem injeção. Existem dois tipos principais:

### 1. CKP Indutivo (2 Fios)
Gera uma tensão alternada (AC). O gráfico forma uma onda senoidal (sobe e desce cruzando o zero).
- **Amplitude:** Aumenta conforme a rotação do motor sobe. Na partida é pequena (aprox 2V a 5V), acelerando pode passar de 50V.
- **Sincronismo:** Apresenta uma falha longa na onda (dente faltante da roda fônica) que indica o PMS (Ponto Morto Superior).
- **Falhas comuns:** Ruído no sinal (fiação sem blindagem), sinal muito fraco (sensor distante da roda fônica), dentes tortos ou amassados gerando ondas irregulares.

### 2. CKP Efeito Hall (3 Fios)
Trabalha com tensão contínua pulsante. O gráfico forma ondas quadradas (0V a 5V, ou 0V a 12V).
- Alimentação, Negativo e Sinal.
- A amplitude não muda com a rotação, o sinal será sempre quadrado, apenas a frequência (velocidade) muda.
        `
      },
      {
        id: "m3l2",
        title: "Sensor TPS (Posição da Borboleta)",
        content: `
# Sensor TPS

O TPS é um potenciômetro (uma resistência variável). Ele informa ao módulo o quanto o acelerador está aberto.

### Como testar:
- **Alimentação:** Recebe 5V do módulo.
- **Sinal:** Deve iniciar entre 0.4V a 0.7V com a borboleta fechada, e subir linearmente até cerca de 4.5V com aceleração total.

### Análise com Osciloscópio
- Ajuste o tempo para algo longo (ex: **500ms** ou **1s / Div**) para ver a variação completa.
- Acelere a moto de forma progressiva.
- **O que procurar:** O gráfico deve formar uma rampa suave e contínua. Se houver quedas abruptas (o traço cai para zero de repente e volta), significa que a trilha interna do sensor está desgastada e rompida (buracos). Isso causa "engasgos" na aceleração da moto.
        `
      }
    ],
    quiz: {
      id: "q3",
      title: "Prova: Diagnóstico de Sensores",
      questions: [
        {
          question: "Qual característica visual identifica o PMS (Ponto Morto Superior) no sinal do CKP indutivo?",
          options: ["Uma linha reta contínua", "Uma falha longa na onda senoidal (dente faltante)", "Um pico de tensão de 400V", "Uma onda quadrada"],
          correctAnswerIndex: 1
        },
        {
          question: "No sensor TPS, o que indicam quedas abruptas no gráfico durante a aceleração progressiva?",
          options: ["O sensor está funcionando perfeitamente", "A bateria está fraca", "Desgaste ou rompimento na trilha interna do potenciômetro", "Motor fora do ponto"],
          correctAnswerIndex: 2
        },
        {
          question: "O sensor CKP de Efeito Hall (3 fios) gera que tipo de onda?",
          options: ["Senoidal (AC)", "Quadrada (DC pulsante)", "Rampa linear", "Triangular"],
          correctAnswerIndex: 1
        }
      ]
    }
  },
  {
    id: "mod4",
    title: "Módulo 4: Diagnóstico de Atuadores e Ignição",
    description: "Injetores e bobinas de ignição.",
    imageUrl: "https://images.unsplash.com/photo-1632738725832-6893b04c86cb?auto=format&fit=crop&q=80&w=800",
    lessons: [
      {
        id: "m4l1",
        title: "Bico Injetor",
        content: `
# Bico Injetor

O bico injetor possui positivo constante (pós-relé ou chave) e o módulo controla o injetor pulsando o **negativo**.

### Fases do Gráfico
1. **Tensão da Bateria (12V-14V):** Bico fechado.
2. **Queda para Zero (0V):** Módulo aterra o circuito. O bico abre e injeta combustível.
3. **Tempo de Injeção (Largura de Pulso):** O tempo que o sinal fica em zero.
4. **Pico Indutivo:** O módulo corta o aterramento. O campo magnético da bobina do injetor colapsa, gerando um pico de alta tensão que pode chegar entre **60V e 100V**.
5. **Estabilização:** A tensão volta para a voltagem da bateria.

### Atenção!
Como o pico indutivo chega a 100V, **use sempre atenuação X10 ou atenuador 20:1** para testar injetores e não queimar seu equipamento!
        `
      },
      {
        id: "m4l2",
        title: "Ignição (Primário da Bobina)",
        content: `
# Primário da Bobina de Ignição

O funcionamento é semelhante ao do injetor, mas os picos de tensão são muito mais altos (300V a 400V). **USO OBRIGATÓRIO DE ATENUADOR 20:1 (ex: HT201).**

### Fases do Gráfico
1. **Carregamento (Dwell):** O módulo aterra o primário (tensão cai a zero).
2. **Disparo (Pico Indutivo):** O módulo corta o negativo. Um pico de 300V+ é gerado no primário (que induzirá de 15.000V a 30.000V no secundário).
3. **Linha de Queima (Burn Line):** Mostra o tempo exato e a estabilidade em que a faísca durou dentro da câmara de combustão (geralmente entre 1ms e 2ms).
4. **Dissipação (Oscilação final):** A energia que sobrou se dissipa balançando a linha (ringing). Falta de ringing indica bobina em curto.
        `
      },
      {
        id: "m4l3",
        title: "Ignição (Secundário da Bobina)",
        content: `
# Secundário da Bobina de Ignição

A onda do secundário reflete diretamente o que ocorre **dentro da câmara de combustão**. É medida no cabo de vela através de uma **Pinça Capacitiva**. 

Como as tensões chegam a 30.000V (30kV), a leitura através da pinça é segura e obrigatória.

### Fases do Gráfico (Espelho do Primário, mas em kV)
1. **Tensão de Disparo (Spike):** O pico sobe até romper a resistência do ar na vela (folga). Velas gastas ou mistura pobre exigem mais força e fazem o pico ser muito alto. 
2. **Linha de Queima (Burn Line):** Quanto tempo a faísca durou (1 a 2ms). Linhas curtas ou tortas (ruídos) indicam centelha instável, falha de ignição ou turbulência severa (mistura errada).
3. **Extinção e Oscilações Residuais:** Assim como no primário, a energia que sobra deve fazer o gráfico oscilar no final.

**Dica de Ouro:** A linha de queima é o raio-X da queima do combustível!
        `
      }
    ],
    quiz: {
      id: "q4",
      title: "Prova: Atuadores e Ignição",
      questions: [
        {
          question: "O que representa o momento em que a tensão cai para zero (0V) no gráfico do bico injetor?",
          options: ["O bico fechou", "O módulo aterrou o circuito, abrindo o bico (Tempo de injeção)", "O pico indutivo aconteceu", "O alternador parou de carregar"],
          correctAnswerIndex: 1
        },
        {
          question: "Qual o pico de tensão aproximado que pode ser gerado no disparo do primário da bobina de ignição?",
          options: ["12V a 14V", "5V", "60V a 100V", "300V a 400V"],
          correctAnswerIndex: 3
        },
        {
          question: "O que a ausência de oscilação final (ringing) no gráfico da bobina pode indicar?",
          options: ["Bobina em perfeito estado", "Bobina em curto ou com falha na dissipação", "Vela muito nova", "Mistura muito rica"],
          correctAnswerIndex: 1
        },
        {
          question: "O que indica uma tensão de disparo (Spike) muito alta e linha de queima curta no Secundário da bobina?",
          options: ["Bobina em perfeito estado", "Vela com folga excessiva ou mistura pobre", "Bico injetor travado aberto", "Motor fora do ponto"],
          correctAnswerIndex: 1
        }
      ]
    }
  }
];
