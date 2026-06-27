import { PinoutModel } from "../types";

export const hondaPinouts: PinoutModel[] = [
  {
    id: "honda-biz-110i-2016-2017",
    name: "Honda Biz 110i (2016 - 2017)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde/Preto", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR TP/EOT" },
          { pin: "5", color: "Amarelo/Preto", function: "SINAL SENSOR TP PARA ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR TP (5v)" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde/Preto", function: "NEGATIVO OU TERRA CHASSI E TERMINAL DLC" },
          { pin: "10", color: "Verde/Preto", function: "NEGATIVO OU TERRA CHASSI E TERMINAL DLC" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇAO NEGATIVA ECM BOBINA IGNIÇAO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "", function: "SEM FUNÇÃO" },
          { pin: "15", color: "Azul/Preto", function: "TERMINAL DLC" },
          { pin: "16", color: "Rosa/Verde", function: "ALIMENTAÇÃO NEGATIVA DA ECM PARA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Amarelo", function: "INDICADOR LUZ FI PAINEL/ANOMALIA" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "", function: "SEM FUNÇÃO" },
          { pin: "21", color: "", function: "SEM FUNÇÃO" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Branco/Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA/SINAL SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "", function: "SEM FUNÇÃO" },
          { pin: "27", color: "", function: "SEM FUNÇÃO" },
          { pin: "28", color: "", function: "SEM FUNÇÃO" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR NEUTRO/RELE PARTIDA/LUZ NEUTRO" },
          { pin: "30", color: "Amarelo/Verde", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "", function: "SEM FUNÇÃO" },
          { pin: "32", color: "", function: "SEM FUNÇÃO" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-biz-125-2018-2023",
    name: "Honda Biz 125 (2018 - 2023)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Branco", function: "VOLTAGEM PÓS CHAVE ALIMENTAÇÃO ATUADORES E SENSORES" },
          { pin: "2", color: "Verde/Preto", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR IAT/TP/MAP/O²/EOT" },
          { pin: "5", color: "Amarelo/Preto", function: "SINAL DE SAIDA SENSOR TP PARA ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO UNIDADE SENSORES (5V)" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom/Preto", function: "SINAL NEGATIVO ECM PARA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde/Preto", function: "NEGATIVO OU TERRA CHASSI E TERMINAL DLC" },
          { pin: "10", color: "Verde/Preto", function: "NEGATIVO OU TERRA CHASSI E TERMINAL DLC" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇAO NEGATIVA ECM BOBINA IGNIÇAO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL SENSOR CKP PARA ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL SAIDA SENSOR IAT PARA ECM" },
          { pin: "15", color: "Azul/Preto", function: "TERMINAL DLC" },
          { pin: "16", color: "Rosa/Verde", function: "ALIMENTAÇÃO NEGATIVA DA ECM PARA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Amarelo", function: "INDICADOR LUZ FI PAINEL/ANOMALIA" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Branco", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Amarelo/Azul", function: "INDICADOR EFICIENCIA ECONOMICA" },
          { pin: "23", color: "Branco/Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "", function: "SEM FUNÇÃO" },
          { pin: "27", color: "Verde/Amarelo", function: "SINAL SAIDA MAP PARA A ECM" },
          { pin: "28", color: "Rosa/Verde", function: "SINAL LAMPADA ALCOOL PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "SINAL NEGATIVO INTERRUPTOR NEUTRO/RELE PARTIDA/LUZ NEUTRO" },
          { pin: "30", color: "Amarelo/Verde", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Marrom/Azul", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "33", color: "Branco/Preto", function: "PULSO PWM PARA RESISTENCIA AQUECEDOR SENSOR OXIGENIO" }
        ]
      }
    ]
  },
  {
    id: "honda-cb-250f-twister-2016-2018",
    name: "Honda CB 250F Twister (2016 - 2018)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Verde/Preto", function: "POSITIVO POS CHAVE 12V" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL SENSOR OXIGENIO" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO SENSORES: TP/MAP/IAT/INCLINAÇÃO/EOT/OXIGENIO" },
          { pin: "5", color: "Amarelo/Vermelho", function: "SINAL DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V PARA SENSORES: TP/MAP/INCLINAÇÃO" },
          { pin: "7", color: "Azul/Amarelo", function: "PULSO TACOMETRO PAINEL" },
          { pin: "8", color: "Marrom", function: "SINAL NEGATIVO DA ECM PARA RELÉ BOMBA COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "SINAL NEGATIVO DA ECM PARA BOBINA DE IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "POSITIVO SENSOR CKP" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DO SENSOR IAT PARA ECM" },
          { pin: "15", color: "Azul/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Verde", function: "SINAL NEGATIVO DA ECM PARA O BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Amarelo", function: "LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Branco", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Azul/Preto", function: "PULSO PWM PARA RESISTENCIA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Branco/Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "POSITIVO/SINAL DO SENSOR EOT" },
          { pin: "25", color: "Verde/Branco", function: "SINAL NEGATIVO DO CAVALETE LATERAL." },
          { pin: "26", color: "Vermelho/Amarelo", function: "SINAL SENSOR INCLINAÇÃO PARA ECM" },
          { pin: "27", color: "Verde/Amarelo", function: "SINAL DO SENSOR MAP PARA ECM" },
          { pin: "28", color: "Rosa/Verde", function: "LUZ ALC PARA O PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "SINAL NEGATIVO DO INTERRUPTOR DE EMBREAGEM E PONTO MORTO PARA O ECM" },
          { pin: "30", color: "Amarelo/Verde", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Marrom/Azul", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-cb300-2009-2012",
    name: "Honda CB 300 (2009 - 2012)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Branco", function: "POSITIVO PÓS CHAVE 12V" },
          { pin: "2", color: "Verde/Preto", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL SENSOR OXIGENIO" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO SENSORES: TP/MAP/IAT/INCLINAÇÃO/EOT/OXIGENIO" },
          { pin: "5", color: "Amarelo/Vermelho", function: "SINAL DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V PARA SENSORES: TP/MAP/INCLINAÇÃO" },
          { pin: "7", color: "Azul/Amarelo", function: "SINAL TACOMETRO PARA PAINEL" },
          { pin: "8", color: "Marrom", function: "SINAL NEGATIVO DA ECM PARA RELÉ BOMBA COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "", function: "SEM FUNÇÃO" },
          { pin: "11", color: "Rosa/Azul", function: "SINAL NEGATIVO DA ECM PARA BOBINA DE IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "POSITIVO SENSOR CKP" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DO SENSOR IAT PARA ECM" },
          { pin: "15", color: "Azul/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Verde", function: "SINAL NEGATIVO DA ECM PARA O BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Amarelo", function: "LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Branco", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Azul/Preto", function: "PULSO PWM PARA RESISTENCIA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Branco/Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "POSITIVO/SINAL DO SENSOR EOT" },
          { pin: "25", color: "Verde/Branco", function: "SINAL NEGATIVO DO INTERRUPTOR CAVALETE LATERAL." },
          { pin: "26", color: "Vermelho/Amarelo", function: "SINAL SENSOR INCLINAÇÃO PARA ECM" },
          { pin: "27", color: "Verde/Amarelo", function: "SINAL DO SENSOR MAP PARA ECM" },
          { pin: "28", color: "Rosa/Verde", function: "SINAL VALVULA SOLENOIDE DE CONTROLE PAIR" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR DE PONTO MORTO" },
          { pin: "30", color: "Amarelo/Verde", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Marrom/Azul", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-cg-fan-150-2014",
    name: "Honda CG Fan 150 (2014)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde/Preto", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP, O2, TP E IAT" },
          { pin: "5", color: "Amarelo/Preto", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR MAP E TP" },
          { pin: "7", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA BOMBA COBUSTIVEL" },
          { pin: "9", color: "Verde/Preto", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde/Preto", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Azul/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Verde", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Amarelo", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Branco", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Branco/Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Vermelho/Amarelo", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Verde/Amarelo", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Rosa/Verde", function: "LUZ ALC DO PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" },
          { pin: "30", color: "Amarelo/Verde", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Marrom/Azul", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-cg-start-160-2016-2017",
    name: "Honda CG Start 160 (2016 - 2017)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM" },
          { pin: "2", color: "Verde/Preto", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR EOT" },
          { pin: "5", color: "Amarelo/Preto", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR INCLINAÇÃO E SENSOR TP" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇAO NEGATIVA BOBINA IGNIÇAO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "", function: "SEM FUNÇÃO" },
          { pin: "15", color: "Azul/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Verde", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Amarelo", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "", function: "SEM FUNÇÃO" },
          { pin: "21", color: "", function: "SEM FUNÇÃO" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Branco/Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Vermelho/Amarelo", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "", function: "SEM FUNÇÃO" },
          { pin: "28", color: "", function: "SEM FUNÇÃO" },
          { pin: "29", color: "Verde/Vermelho", function: "SINAL NEGATIVO DO INTERRUPTOR DE EMBREAGEM E PONTO MORTO PARA O ECM" },
          { pin: "30", color: "Amarelo/Verde", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Verde", function: "NEGATIVO SENSOR TP" },
          { pin: "32", color: "Verde/Laranja", function: "NEGATIVO SENSOR DE INCLINAÇÃO" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-biz-110i-2018-2024",
    name: "Honda Biz 110i (2018 - 2024)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM" },
          { pin: "2", color: "Verde/Preto", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR EOT" },
          { pin: "5", color: "Amarelo/Preto", function: "SINAL SENSOR TP PARA ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR TP (5v)" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde/Preto", function: "NEGATIVO OU TERRA CHASSI E TERMINAL DLC" },
          { pin: "10", color: "Verde/Preto", function: "NEGATIVO OU TERRA CHASSI E TERMINAL DLC" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇAO NEGATIVA ECM BOBINA IGNIÇAO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "", function: "SEM FUNÇÃO" },
          { pin: "15", color: "Azul/Preto", function: "TERMINAL DLC" },
          { pin: "16", color: "Rosa/Verde", function: "ALIMENTAÇÃO NEGATIVA DA ECM PARA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Amarelo", function: "INDICADOR LUZ FI PAINEL/ANOMALIA" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "", function: "SEM FUNÇÃO" },
          { pin: "21", color: "", function: "SEM FUNÇÃO" },
          { pin: "22", color: "Amarelo/Azul", function: "LUZ INDICADORA EFICIENCIA PAINEL" },
          { pin: "23", color: "Branco/Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "", function: "SEM FUNÇÃO" },
          { pin: "27", color: "", function: "SEM FUNÇÃO" },
          { pin: "28", color: "", function: "SEM FUNÇÃO" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR NEUTRO/RELE PARTIDA/LUZ NEUTRO" },
          { pin: "30", color: "Amarelo/Verde", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Verde/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR TP" },
          { pin: "32", color: "", function: "SEM FUNÇÃO" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-biz-125-2009-2010",
    name: "Honda Biz 125 (2009 - 2010)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR DE INCLINAÇÃO, EOT, MAP, TP E SENSOR IAT" },
          { pin: "5", color: "Amarelo/Preto", function: "SINAL DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO UNIDADE SENSORES 5V" },
          { pin: "7", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA BOMBA COBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "15", color: "Azul/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Amarelo", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Amarelo", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "", function: "SEM FUNÇÃO" },
          { pin: "21", color: "", function: "SEM FUNÇÃO" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Branco/Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Vermelho/Amarelo", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Verde/Amarelo", function: "SINAL DE SAIDA DO SENSOR MAP DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "28", color: "", function: "SEM FUNÇÃO" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR PONTO MORTO" },
          { pin: "30", color: "Amarelo/Verde", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "", function: "SEM FUNÇÃO" },
          { pin: "32", color: "", function: "SEM FUNÇÃO" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-biz-125-2011-2015",
    name: "Honda Biz 125 (2011 - 2015)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Branco", function: "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR O2, EOT, MAP, TP E SENSOR IAT" },
          { pin: "5", color: "Amarelo/Preto", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO UNIDADE SENSORES 5V" },
          { pin: "7", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA BOMBA COBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "15", color: "Azul/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Amarelo", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Branco", function: "VALVULA IACV 2A" },
          { pin: "21", color: "Azul/Laranja", function: "VALVULA IACV 1A" },
          { pin: "22", color: "Branco/Preto", function: "PULSO PWM PARA RESISTENCIA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Branco/Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "", function: "SEM FUNÇÃO" },
          { pin: "27", color: "Verde/Amarelo", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Rosa/Verde", function: "SINAL NEGATIVO LUZ ALC" },
          { pin: "29", color: "Verde/Vermelho", function: "SINAL NEGATIVO NEUTRO PARA O ECM." },
          { pin: "30", color: "Amarelo/Verde", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "VALVULA IACV 1V" },
          { pin: "32", color: "Azul/Vermelho", function: "VALVULA IACV 2V" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-biz-125-2016-2017",
    name: "Honda Biz 125 (2016 / 2017)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Branco", function: "VOLTAGEM PÓS CHAVE ALIMENTAÇÃO ATUADORES E SENSORES" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR /TP/MAP/O2/EOT" },
          { pin: "5", color: "Amarelo/Preto", function: "SINAL DE SAIDA SENSOR TP PARA ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO UNIDADE SENSORES (5V)" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom", function: "SINAL NEGATIVO ECM PARA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde/Preto", function: "NEGATIVO OU TERRA CHASSI E TERMINAL DLC" },
          { pin: "10", color: "Verde/Preto", function: "NEGATIVO OU TERRA CHASSI E TERMINAL DLC" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA ECM BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL SENSOR CKP PARA ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL SAIDA SENSOR IAT PARA ECM" },
          { pin: "15", color: "Azul/Preto", function: "TERMINAL DLC" },
          { pin: "16", color: "Rosa/Verde", function: "ALIMENTAÇÃO NEGATIVA DA ECM PARA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Amarelo", function: "INDICADOR LUZ FI PAINEL/ANOMALIA" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Branco", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "PULSO PWM PARA RESISTENCIA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Branco/Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "", function: "SEM FUNÇÃO" },
          { pin: "27", color: "Verde/Amarelo", function: "SINAL SAIDA MAP PARA A ECM" },
          { pin: "28", color: "Rosa/Verde", function: "SINAL LAMPADA ALCOOL PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "SINAL NEGATIVO INTERRUPTOR NEUTRO/RELE PARTIDA/LUZ NEUTRO" },
          { pin: "30", color: "Amarelo/Verde", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV)" },
          { pin: "32", color: "Marrom/Azul", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV)" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-cb-250f-twister-2019-2022",
    name: "Honda CB 250F Twister (2019 - 2022)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Verde/Preto", function: "POSITIVO POS CHAVE 12V" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL SENSOR OXIGENIO" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO SENSORES: TP/MAP/IAT/INCLINAÇÃO/EOT/OXIGENIO" },
          { pin: "5", color: "Amarelo/Preto", function: "SINAL DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V PARA SENSORES: TP/MAP/INCLINAÇÃO" },
          { pin: "7", color: "Azul/Amarelo", function: "PULSO TACOMETRO PAINEL" },
          { pin: "8", color: "Marrom", function: "SINAL NEGATIVO DA ECM PARA RELÉ BOMBA COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "SINAL NEGATIVO DA ECM PARA BOBINA DE IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "POSITIVO SENSOR CKP" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DO SENSOR IAT PARA ECM" },
          { pin: "15", color: "Azul/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Verde", function: "SINAL NEGATIVO DA ECM PARA O BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Amarelo", function: "LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Branco", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "PULSO PWM PARA RESISTENCIA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Branco/Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "POSITIVO/SINAL DO SENSOR EOT" },
          { pin: "25", color: "Verde/Branco", function: "SINAL NEGATIVO DO CAVALETE LATERAL" },
          { pin: "26", color: "Vermelho/Amarelo", function: "SINAL SENSOR INCLINAÇÃO PARA ECM" },
          { pin: "27", color: "Verde/Amarelo", function: "SINAL DO SENSOR MAP PARA ECM" },
          { pin: "28", color: "Rosa/Verde", function: "LUZ ALC PARA O PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "SINAL NEGATIVO DO INTERRUPTOR DE EMBREAGEM E PONTO MORTO PARA O ECM" },
          { pin: "30", color: "Amarelo/Verde", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Marrom/Azul", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-cg-fan-150-2011-2013",
    name: "Honda CG Fan 150 (2011 - 2013)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde/Preto", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP, O2, TP E IAT" },
          { pin: "5", color: "Amarelo/Preto", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR MAP E TP" },
          { pin: "7", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA E LUZ" },
          { pin: "8", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA BOMBA DE COMBUSTÍVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Azul/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Amarelo", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Branco", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Laranja", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Branco/Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Vermelho/Amarelo", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Verde/Amarelo", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Rosa/Verde", function: "LUZ ALC DO PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" },
          { pin: "30", color: "Amarelo/Verde", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1V" },
          { pin: "32", color: "Azul/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2V" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-nxr-160-2016-2017",
    name: "Honda NXR 160 Bros (2016 - 2017)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM" },
          { pin: "2", color: "Verde/Preto", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR EOT" },
          { pin: "5", color: "Amarelo/Preto", function: "SINAL SENSOR TP PARA ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR INCLINAÇÃO E SENSOR TP" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "", function: "SEM FUNÇÃO" },
          { pin: "15", color: "Azul/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Verde", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Amarelo", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "", function: "SEM FUNÇÃO" },
          { pin: "21", color: "", function: "SEM FUNÇÃO" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Branco/Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Vermelho/Amarelo", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "", function: "SEM FUNÇÃO" },
          { pin: "28", color: "", function: "SEM FUNÇÃO" },
          { pin: "29", color: "Verde/Vermelho", function: "SINAL NEGATIVO DO INTERRUPTOR DE EMBREAGEM E PONTO MORTO PARA O ECM" },
          { pin: "30", color: "Amarelo/Verde", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Verde", function: "NEGATIVO SENSOR TP" },
          { pin: "32", color: "Verde/Laranja", function: "NEGATIVO SENSOR DE INCLINAÇÃO" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-cb300-2013-2014",
    name: "Honda CB 300 (2013 - 2014)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          {
                    "pin": "1",
                    "color": "Preto/Azul",
                    "function": "POSITIVO PÓS CHAVE 12V"
          },
          {
                    "pin": "2",
                    "color": "Verde/Preto",
                    "function": "NEGATIVO OU TERRA CHASSI"
          },
          {
                    "pin": "3",
                    "color": "Preto/Branco",
                    "function": "SINAL SENSOR OXIGENIO"
          },
          {
                    "pin": "4",
                    "color": "Verde/Laranja",
                    "function": "NEGATIVO SENSORES: TP/MAP/IAT/INCLINAÇÃO/EOT/OXIGENIO"
          },
          {
                    "pin": "5",
                    "color": "Amarelo/Preto",
                    "function": "SINAL DO SENSOR TP PARA O ECM"
          },
          {
                    "pin": "6",
                    "color": "Amarelo/Vermelho",
                    "function": "ALIMENTAÇÃO 5V PARA SENSORES: TP/MAP/INCLINAÇÃO"
          },
          {
                    "pin": "7",
                    "color": "Amarelo/Verde",
                    "function": "SINAL TACOMETRO PARA PAINEL"
          },
          {
                    "pin": "8",
                    "color": "Marrom",
                    "function": "SINAL NEGATIVO DA ECM PARA RELÉ BOMBA COMBUSTIVEL"
          },
          {
                    "pin": "9",
                    "color": "Verde",
                    "function": "NEGATIVO OU TERRA CHASSI"
          },
          {
                    "pin": "10",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "11",
                    "color": "Amarelo/Azul",
                    "function": "SINAL NEGATIVO DA ECM PARA BOBINA DE IGNIÇÃO"
          },
          {
                    "pin": "12",
                    "color": "Azul/Amarelo",
                    "function": "POSITIVO SENSOR CKP"
          },
          {
                    "pin": "13",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "14",
                    "color": "Cinza/Azul",
                    "function": "SINAL DO SENSOR IAT PARA ECM"
          },
          {
                    "pin": "15",
                    "color": "Azul/Preto",
                    "function": "VAI PARA O CONECTOR DLC"
          },
          {
                    "pin": "16",
                    "color": "Rosa/Azul",
                    "function": "SINAL NEGATIVO DA ECM PARA O BICO INJETOR"
          },
          {
                    "pin": "17",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "18",
                    "color": "Azul/Amarelo",
                    "function": "LUZ DE ANOMALIA (MIL) PAINEL"
          },
          {
                    "pin": "19",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "20",
                    "color": "Marrom/Preto",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A"
          },
          {
                    "pin": "21",
                    "color": "Azul/Laranja",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A"
          },
          {
                    "pin": "22",
                    "color": "Branco/Preto",
                    "function": "PULSO PWM PARA RESISTENCIA AQUECEDOR SENSOR OXIGENIO"
          },
          {
                    "pin": "23",
                    "color": "Branco/Amarelo",
                    "function": "ALIMENTAÇÃO NEGATIVA SENSOR CKP"
          },
          {
                    "pin": "24",
                    "color": "Amarelo/Azul",
                    "function": "POSITIVO/SINAL DO SENSOR EOT"
          },
          {
                    "pin": "25",
                    "color": "Verde/Branco",
                    "function": "SINAL NEGATIVO DO INTERRUPTOR CAVALETE LATERAL."
          },
          {
                    "pin": "26",
                    "color": "Verde/Vermelho",
                    "function": "SINAL SENSOR INCLINAÇÃO PARA ECM"
          },
          {
                    "pin": "27",
                    "color": "Vermelho/Amarelo",
                    "function": "SINAL DO SENSOR MAP PARA ECM"
          },
          {
                    "pin": "28",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "29",
                    "color": "Rosa/Verde",
                    "function": "INTERRUPTOR DE PONTO MORTO"
          },
          {
                    "pin": "30",
                    "color": "Verde/Branco",
                    "function": "VAI PARA O CONECTOR DLC"
          },
          {
                    "pin": "31",
                    "color": "Azul/Vermelho",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B"
          },
          {
                    "pin": "32",
                    "color": "Azul/Branco",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B"
          },
          {
                    "pin": "33",
                    "color": "Preto/Azul",
                    "function": "INDICADOR PARTIDA A FRIO"
          }
]
      }
    ]
  },
  {
    id: "honda-cb300-2015-limited",
    name: "Honda CB 300 (2015 LIMITED)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          {
                    "pin": "1",
                    "color": "Preto/Marrom",
                    "function": "POSITIVO PÓS CHAVE 12V"
          },
          {
                    "pin": "2",
                    "color": "Verde/Preto",
                    "function": "NEGATIVO OU TERRA CHASSI"
          },
          {
                    "pin": "3",
                    "color": "Preto/Branco",
                    "function": "SINAL SENSOR OXIGENIO"
          },
          {
                    "pin": "4",
                    "color": "Verde/Laranja",
                    "function": "NEGATIVO SENSORES: TP/MAP/IAT/INCLINAÇÃO/EOT/OXIGENIO"
          },
          {
                    "pin": "5",
                    "color": "Amarelo/Preto",
                    "function": "SINAL DO SENSOR TP PARA O ECM"
          },
          {
                    "pin": "6",
                    "color": "Amarelo/Vermelho",
                    "function": "ALIMENTAÇÃO 5V PARA SENSORES: TP/MAP/INCLINAÇÃO"
          },
          {
                    "pin": "7",
                    "color": "Amarelo/Verde",
                    "function": "SINAL TACOMETRO PARA PAINEL"
          },
          {
                    "pin": "8",
                    "color": "Marrom",
                    "function": "SINAL NEGATIVO DA ECM PARA RELÉ BOMBA COMBUSTIVEL"
          },
          {
                    "pin": "9",
                    "color": "Verde",
                    "function": "NEGATIVO OU TERRA CHASSI"
          },
          {
                    "pin": "10",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "11",
                    "color": "Rosa/Azul",
                    "function": "SINAL NEGATIVO DA ECM PARA BOBINA DE IGNIÇÃO"
          },
          {
                    "pin": "12",
                    "color": "Azul/Amarelo",
                    "function": "POSITIVO SENSOR CKP"
          },
          {
                    "pin": "13",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "14",
                    "color": "Cinza/Azul",
                    "function": "SINAL DO SENSOR IAT PARA ECM"
          },
          {
                    "pin": "15",
                    "color": "Azul/Preto",
                    "function": "VAI PARA O CONECTOR DLC"
          },
          {
                    "pin": "16",
                    "color": "Rosa/Azul",
                    "function": "SINAL NEGATIVO DA ECM PARA O BICO INJETOR"
          },
          {
                    "pin": "17",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "18",
                    "color": "Azul/Amarelo",
                    "function": "LUZ DE ANOMALIA (MIL) PAINEL"
          },
          {
                    "pin": "19",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "20",
                    "color": "Marrom/Preto",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A"
          },
          {
                    "pin": "21",
                    "color": "Azul/Laranja",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A"
          },
          {
                    "pin": "22",
                    "color": "Branco/Preto",
                    "function": "PULSO PWM PARA RESISTENCIA AQUECEDOR SENSOR OXIGENIO"
          },
          {
                    "pin": "23",
                    "color": "Branco/Amarelo",
                    "function": "ALIMENTAÇÃO NEGATIVA SENSOR CKP"
          },
          {
                    "pin": "24",
                    "color": "Amarelo/Azul",
                    "function": "POSITIVO/SINAL DO SENSOR EOT"
          },
          {
                    "pin": "25",
                    "color": "Verde/Branco",
                    "function": "SINAL NEGATIVO DO INTERRUPTOR CAVALETE LATERAL."
          },
          {
                    "pin": "26",
                    "color": "Verde/Vermelho",
                    "function": "SINAL SENSOR INCLINAÇÃO PARA ECM"
          },
          {
                    "pin": "27",
                    "color": "Vermelho/Amarelo",
                    "function": "SINAL DO SENSOR MAP PARA ECM"
          },
          {
                    "pin": "28",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "29",
                    "color": "Rosa/Verde",
                    "function": "INTERRUPTOR DE PONTO MORTO"
          },
          {
                    "pin": "30",
                    "color": "Verde/Branco",
                    "function": "VAI PARA O CONECTOR DLC"
          },
          {
                    "pin": "31",
                    "color": "Azul/Vermelho",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B"
          },
          {
                    "pin": "32",
                    "color": "Azul/Branco",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B"
          },
          {
                    "pin": "33",
                    "color": "Preto/Azul",
                    "function": "INDICADOR PARTIDA A FRIO"
          }
]
      }
    ]
  },
  {
    id: "honda-cb300f-twister-2023-2024",
    name: "Honda CB 300F Twister (2023 - 2024)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          {
                    "pin": "1",
                    "color": "Preto/Branco",
                    "function": "POSITIVO PÓS CHAVE PARA O ECM"
          },
          {
                    "pin": "2",
                    "color": "Verde/Preto",
                    "function": "NEGATIVO OU TERRA CHASSI"
          },
          {
                    "pin": "3",
                    "color": "Preto/Branco",
                    "function": "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM"
          },
          {
                    "pin": "4",
                    "color": "Verde/Laranja",
                    "function": "NEGATIVO SENSORES: TP/MAP/IAT/INCLINAÇÃO/EOT/OXIGENIO"
          },
          {
                    "pin": "5",
                    "color": "Amarelo/Preto",
                    "function": "SINAL SAIDA DO SENSOR TP PARA O ECM"
          },
          {
                    "pin": "6",
                    "color": "Amarelo/Vermelho",
                    "function": "5V ALIMENTAÇÃO SENSOR INCLINAÇÃO E UNIDADE SENSORES (MAP, TPS E IAT)"
          },
          {
                    "pin": "7",
                    "color": "Rosa/Verde",
                    "function": "SINAL DO TACOMETRO DO PAINEL"
          },
          {
                    "pin": "8",
                    "color": "Marrom",
                    "function": "NEGATIVO DA ECM PARA O RELÉ DA BOMBA COMBUSTIVEL"
          },
          {
                    "pin": "9",
                    "color": "Verde",
                    "function": "NEGATIVO OU TERRA CHASSI"
          },
          {
                    "pin": "10",
                    "color": "Verde",
                    "function": "NEGATIVO OU TERRA CHASSI"
          },
          {
                    "pin": "11",
                    "color": "Amarelo/Azul",
                    "function": "NEGATIVO ECM PARA BOBINA DE IGNIÇÃO"
          },
          {
                    "pin": "12",
                    "color": "Azul/Amarelo",
                    "function": "SINAL DE SAIDA POSITIVO DO SENSOR CKP PARA O ECM"
          },
          {
                    "pin": "13",
                    "color": "Amarelo/Branco",
                    "function": "SINAL SENSOR COMBUSTIVEL"
          },
          {
                    "pin": "14",
                    "color": "Cinza/Azul",
                    "function": "SINAL DE SAIDA DO SENSOR IAT DA UNIDADE DE SENSORES PARA O ECM"
          },
          {
                    "pin": "15",
                    "color": "Azul/Preto",
                    "function": "VAI PARA O CONECTOR DLC"
          },
          {
                    "pin": "16",
                    "color": "Rosa/Azul",
                    "function": "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR"
          },
          {
                    "pin": "17",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "18",
                    "color": "Azul/Amarelo",
                    "function": "LUZ LAMPADA FI NO PAINEL"
          },
          {
                    "pin": "19",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "20",
                    "color": "Marrom/Preto",
                    "function": "PULSO NEGATIVO AQUECEDOR SENSOR O²"
          },
          {
                    "pin": "21",
                    "color": "Azul/Laranja",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A"
          },
          {
                    "pin": "22",
                    "color": "Azul/Branco",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A"
          },
          {
                    "pin": "23",
                    "color": "Branco/Amarelo",
                    "function": "ALIMENTAÇÃO NEGATIVA SENSOR CKP"
          },
          {
                    "pin": "24",
                    "color": "Amarelo/Azul",
                    "function": "SINAL/ALIMENTAÇÃO POSITIVA SENSOR EOT."
          },
          {
                    "pin": "25",
                    "color": "Verde/Branco",
                    "function": "SINAL INTERRUPTOR DO CAVALETE LATERAL/INTERRUPTOR EMBREAGEM"
          },
          {
                    "pin": "26",
                    "color": "Verde/Vermelho",
                    "function": "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM"
          },
          {
                    "pin": "27",
                    "color": "Vermelho/Amarelo",
                    "function": "SINAL DE SAIDA DO SENSOR MAP PARA O ECM"
          },
          {
                    "pin": "28",
                    "color": "Verde/Amarelo",
                    "function": "LUZ ALC PARA O PAINEL"
          },
          {
                    "pin": "29",
                    "color": "Rosa/Verde",
                    "function": "SINAL NEGATIVO DO INT POSIÇÃO MARCHA/PONTO MORTO PARA O ECM"
          },
          {
                    "pin": "30",
                    "color": "Laranja/Azul",
                    "function": "VAI PARA O CONECTOR DLC E LUZ ABS"
          },
          {
                    "pin": "31",
                    "color": "Marrom/Branco",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B"
          },
          {
                    "pin": "32",
                    "color": "Marrom/Vermelho",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A"
          },
          {
                    "pin": "33",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          }
]
      }
    ]
  },
  {
    id: "honda-cg125i-fan-cargo-2016-2018",
    name: "Honda CG 125i FAN/CARGO (2016 - 2018)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          {
                    "pin": "1",
                    "color": "Preto/Azul",
                    "function": "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM"
          },
          {
                    "pin": "2",
                    "color": "Verde/Preto",
                    "function": "NEGATIVO OU TERRA CHASSI"
          },
          {
                    "pin": "3",
                    "color": "Preto/Branco",
                    "function": "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM"
          },
          {
                    "pin": "4",
                    "color": "Verde/Laranja",
                    "function": "NEGATIVO VAI PARA O SENSOR EOT"
          },
          {
                    "pin": "5",
                    "color": "Amarelo/Preto",
                    "function": "SINAL SENSOR TP"
          },
          {
                    "pin": "6",
                    "color": "Amarelo/Vermelho",
                    "function": "ALIMENTAÇÃO POSITIVA 5V SENSOR INCLINAÇÃO E SENSOR TP"
          },
          {
                    "pin": "7",
                    "color": "",
                    "function": "TERRA NEGATIVO RELE DE CARGA"
          },
          {
                    "pin": "8",
                    "color": "Marrom",
                    "function": "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVEL"
          },
          {
                    "pin": "9",
                    "color": "Verde",
                    "function": "NEGATIVO OU TERRA CHASSI"
          },
          {
                    "pin": "10",
                    "color": "Verde",
                    "function": "NEGATIVO OU TERRA CHASSI"
          },
          {
                    "pin": "11",
                    "color": "Rosa/Azul",
                    "function": "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO"
          },
          {
                    "pin": "12",
                    "color": "Azul/Amarelo",
                    "function": "SINAL DE SAIDA DO SENSOR CKP PARA O ECM"
          },
          {
                    "pin": "13",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "14",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "15",
                    "color": "Azul/Preto",
                    "function": "VAI PARA O CONECTOR DLC"
          },
          {
                    "pin": "16",
                    "color": "Rosa/Verde",
                    "function": "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR"
          },
          {
                    "pin": "17",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "18",
                    "color": "Azul/Amarelo",
                    "function": "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL"
          },
          {
                    "pin": "19",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "20",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "21",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "22",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "23",
                    "color": "Branco/Amarelo",
                    "function": "ALIMENTAÇÃO NEGATIVA SENSOR CKP"
          },
          {
                    "pin": "24",
                    "color": "Amarelo/Azul",
                    "function": "ALIMENTAÇÃO POSITIVA SENSOR EOT."
          },
          {
                    "pin": "25",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "26",
                    "color": "Vermelho/Amarelo",
                    "function": "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM"
          },
          {
                    "pin": "27",
                    "color": "",
                    "function": "SINAL DE SAIDA DO SENSOR MAP DA UNIDADE DE SENSORES PARA O ECM"
          },
          {
                    "pin": "28",
                    "color": "",
                    "function": "SINAL NEGATIVO PARA O ALC INFORMANDO MISTURA DE COMBUSTIVEL"
          },
          {
                    "pin": "29",
                    "color": "Verde/Vermelho",
                    "function": "SINAL NEGATIVO DO INTERRUPTOR DE EMBREAGEM E PONTO MORTO PARA O ECM"
          },
          {
                    "pin": "30",
                    "color": "Amarelo/Verde",
                    "function": "VAI PARA O CONECTOR DLC"
          },
          {
                    "pin": "31",
                    "color": "Verde",
                    "function": "NEGATIVO SENSOR TP"
          },
          {
                    "pin": "32",
                    "color": "Verde/Laranja",
                    "function": "NEGATIVO SENSOR DE INCLINAÇÃO"
          },
          {
                    "pin": "33",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          }
]
      }
    ]
  },
  {
    id: "honda-cg-start-150-2015",
    name: "Honda CG Start 150 (2015)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          {
                    "pin": "1",
                    "color": "Preto/Azul",
                    "function": "PÓS CHAVE 12V PARA O ECM"
          },
          {
                    "pin": "2",
                    "color": "Verde/Preto",
                    "function": "NEGATIVO TERRA/CHASSI"
          },
          {
                    "pin": "3",
                    "color": "Preto/Branco",
                    "function": "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM"
          },
          {
                    "pin": "4",
                    "color": "Verde/Laranja",
                    "function": "NEGATIVO VAI PARA O SENSOR EOT, MAP, O2, TP E IAT"
          },
          {
                    "pin": "5",
                    "color": "Amarelo/Preto",
                    "function": "SINAL DE SAIDA DO SENSOR TP PARA O ECM"
          },
          {
                    "pin": "6",
                    "color": "Amarelo/Vermelho",
                    "function": "ALIMENTAÇÃO 5V SENSOR MAP E TP"
          },
          {
                    "pin": "7",
                    "color": "Marrom/Preto",
                    "function": "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA"
          },
          {
                    "pin": "8",
                    "color": "Marrom",
                    "function": "ALIMENTAÇÃO NEGATIVA BOMBA COBUSTIVEL"
          },
          {
                    "pin": "9",
                    "color": "Verde",
                    "function": "NEGATIVO TERRA/CHASSI"
          },
          {
                    "pin": "10",
                    "color": "Verde",
                    "function": "NEGATIVO TERRA/CHASSI"
          },
          {
                    "pin": "11",
                    "color": "Rosa/Azul",
                    "function": "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO"
          },
          {
                    "pin": "12",
                    "color": "Azul/Amarelo",
                    "function": "SINAL DE SAIDA DO SENSOR CKP PARA O ECM"
          },
          {
                    "pin": "13",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "14",
                    "color": "Cinza/Azul",
                    "function": "SINAL DE SAIDA DO SENSOR IAT PARA O ECM"
          },
          {
                    "pin": "15",
                    "color": "Azul/Preto",
                    "function": "VAI PARA O CONECTOR DLC"
          },
          {
                    "pin": "16",
                    "color": "Rosa/Verde",
                    "function": "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR"
          },
          {
                    "pin": "17",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "18",
                    "color": "Azul/Amarelo",
                    "function": "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL"
          },
          {
                    "pin": "19",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "20",
                    "color": "Marrom/Branco",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A"
          },
          {
                    "pin": "21",
                    "color": "Azul/Laranja",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A"
          },
          {
                    "pin": "22",
                    "color": "Branco/Preto",
                    "function": "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO"
          },
          {
                    "pin": "23",
                    "color": "Branco/Amarelo",
                    "function": "ALIMENTAÇÃO NEGATIVA SENSOR CKP"
          },
          {
                    "pin": "24",
                    "color": "Amarelo/Azul",
                    "function": "ALIMENTAÇÃO POSITIVA SENSOR EOT."
          },
          {
                    "pin": "25",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "26",
                    "color": "Vermelho/Amarelo",
                    "function": "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM"
          },
          {
                    "pin": "27",
                    "color": "Verde/Amarelo",
                    "function": "SINAL DE SAIDA DO SENSOR MAP PARA O ECM"
          },
          {
                    "pin": "28",
                    "color": "Rosa/Verde",
                    "function": "LUZ ALC DO PAINEL"
          },
          {
                    "pin": "29",
                    "color": "Verde/Vermelho",
                    "function": "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO"
          },
          {
                    "pin": "30",
                    "color": "Amarelo/Verde",
                    "function": "VAI PARA O CONECTOR DLC"
          },
          {
                    "pin": "31",
                    "color": "Marrom/Vermelho",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B"
          },
          {
                    "pin": "32",
                    "color": "Azul/Vermelho",
                    "function": "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B"
          },
          {
                    "pin": "33",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          }
]
      }
    ]
  },
  {
    id: "honda-cg-start-160-2018",
    name: "Honda CG Start 160 (2018)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP, O2 E IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Branco", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "", function: "SEM FUNÇÃO" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" },
          { pin: "30", color: "Laranja/Branco", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-cg-start-160-2019-2020-diodo",
    name: "Honda CG Start 160 (2019 - 2020 c/ DIODO NA IGNIÇÃO)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP, O2 E IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Branco", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "", function: "SEM FUNÇÃO" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" },
          { pin: "30", color: "Laranja/Branco", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-cg-start-160-2021-resistor",
    name: "Honda CG Start 160 (2021 c/ RESISTOR NA IGNIÇÃO)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP, O2 E IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Branco", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "", function: "SEM FUNÇÃO" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" },
          { pin: "30", color: "Laranja/Branco", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-cg-start-160-2022-2023",
    name: "Honda CG Start 160 (2022 - 2023)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP, O2 E IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Branco", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "", function: "SEM FUNÇÃO" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" },
          { pin: "30", color: "Laranja/Branco", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-elite-125-2019-br",
    name: "Honda Elite 125 (2019 MODELO BR)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          {
                    "pin": "1",
                    "color": "Preto/Azul",
                    "function": "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM"
          },
          {
                    "pin": "2",
                    "color": "Verde/Preto",
                    "function": "NEGATIVO OU TERRA CHASSI"
          },
          {
                    "pin": "3",
                    "color": "Preto/Laranja",
                    "function": "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM"
          },
          {
                    "pin": "4",
                    "color": "Verde/Laranja",
                    "function": "NEGATIVO VAI PARA O SENSOR TP"
          },
          {
                    "pin": "5",
                    "color": "Amarelo/Preto",
                    "function": "SINAL SENSOR TP PARA ECM"
          },
          {
                    "pin": "6",
                    "color": "Amarelo/Vermelho",
                    "function": "ALIMENTAÇÃO SENSOR TP"
          },
          {
                    "pin": "7",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "8",
                    "color": "Marrom/Preto",
                    "function": "SINAL NEGATIVO ECM PARA BOMBA DE COMBUSTIVEL"
          },
          {
                    "pin": "9",
                    "color": "Verde",
                    "function": "NEGATIVO OU TERRA CHASSI E TERMINAL DLC"
          },
          {
                    "pin": "10",
                    "color": "Verde",
                    "function": "NEGATIVO OU TERRA CHASSI E TERMINAL DLC"
          },
          {
                    "pin": "11",
                    "color": "Amarelo/Azul",
                    "function": "SINAL NEGATIVA ECM PARA BOBINA IGNIÇAO"
          },
          {
                    "pin": "12",
                    "color": "Azul/Amarelo",
                    "function": "SINAL DE SAIDA DO SENSOR CKP PARA ECM"
          },
          {
                    "pin": "13",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "14",
                    "color": "Rosa/Preto",
                    "function": "SINAL SENSOR EOT PARA ECM"
          },
          {
                    "pin": "15",
                    "color": "Azul/Preto",
                    "function": "TERMINAL DLC"
          },
          {
                    "pin": "16",
                    "color": "Rosa/Azul",
                    "function": "ALIMENTAÇÃO NEGATIVA DA ECM PARA DO BICO INJETOR"
          },
          {
                    "pin": "17",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "18",
                    "color": "Azul/Amarelo",
                    "function": "INDICADOR LUZ FI PAINEL/ANOMALIA"
          },
          {
                    "pin": "19",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "20",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "21",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "22",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "23",
                    "color": "Branco/Amarelo",
                    "function": "ALIMENTAÇÃO NEGATIVA SENSOR CKP"
          },
          {
                    "pin": "24",
                    "color": "Amarelo/Azul",
                    "function": "ALIMENTAÇÃO POSITIVA SENSOR EOT."
          },
          {
                    "pin": "25",
                    "color": "Verde/Branco",
                    "function": "NEGATIVO CAVALETE LATERAL"
          },
          {
                    "pin": "26",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "27",
                    "color": "",
                    "function": "SEM FUNÇÃO"
          },
          {
                    "pin": "28",
                    "color": "Amarelo/Vermelho",
                    "function": "SINAL NEGATIVO ECM PARA VALVULA SOLENÓIDE CONTROLE MARCHA LENTA"
          },
          {
                    "pin": "29",
                    "color": "Rosa/Branco",
                    "function": "SINAL NEGATIVO ECM PARA INTERRUPTOR PARTIDA"
          },
          {
                    "pin": "30",
                    "color": "Laranja/Azul",
                    "function": "CONECTOR DLC"
          },
          {
                    "pin": "31",
                    "color": "Branco/Vermelho",
                    "function": "NEGATIVO VAI PARA O SENSOR EOT"
          },
          {
                    "pin": "32",
                    "color": "Vermelho/Preto",
                    "function": "NEGATIVO VAI PARA O SENSOR IAT"
          },
          {
                    "pin": "33",
                    "color": "Marrom/Vermelho",
                    "function": "ALIMENTAÇÃO ECU PARA RELÉ PARTIDA"
          }
]
      }
    ]
  },
  {
    id: "honda-elite-125-2019-2024",
    name: "Honda Elite 125 (2019 - 2024)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Branco", function: "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR TP" },
          { pin: "5", color: "Amarelo", function: "SINAL SENSOR TP PARA ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR TP" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom/Preto", function: "SINAL NEGATIVO ECM PARA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI E TERMINAL DLC" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI E TERMINAL DLC" },
          { pin: "11", color: "Rosa/Azul", function: "SINAL NEGATIVA ECM PARA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL SENSOR EOT PARA ECM" },
          { pin: "15", color: "Marrom", function: "TERMINAL DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DA ECM PARA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "INDICADOR LUZ FI PAINEL/ANOMALIA" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "", function: "SEM FUNÇÃO" },
          { pin: "21", color: "", function: "SEM FUNÇÃO" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Verde", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "Verde/Branco", function: "NEGATIVO CAVALETE LATERAL" },
          { pin: "26", color: "", function: "SEM FUNÇÃO" },
          { pin: "27", color: "", function: "SEM FUNÇÃO" },
          { pin: "28", color: "Amarelo/Preto", function: "SINAL NEGATIVO ECM PARA VALVULA SOLENÓIDE CONTROLE MARCHA LENTA" },
          { pin: "29", color: "Verde/Branco", function: "SINAL NEGATIVO PARA INTERRUPTOR PARTIDA" },
          { pin: "30", color: "Verde/Vermelho", function: "CONECTOR DLC" },
          { pin: "31", color: "Verde", function: "NEGATIVO VAI PARA O SENSOR EOT" },
          { pin: "32", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR IAT" },
          { pin: "33", color: "Marrom/Branco", function: "ALIMENTAÇÃO ECU PARA RELÉ PARTIDA" }
        ]
      }
    ]
  },
  {
    id: "honda-fan-150-2015",
    name: "Honda FAN 150 (2015)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP, O2 E IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA BOMBA COBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "LUZ ALC DO PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-lead-110-2009-2010",
    name: "Honda LEAD 110 (2009 - 2010)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto", function: "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR ECT, MAP, TP, IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR MAP E TP" },
          { pin: "7", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA COMBUSTIVEL" },
          { pin: "8", color: "Verde/Vermelho", function: "VAI PARA O RELE PARTIDA" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "", function: "SEM FUNÇÃO" },
          { pin: "11", color: "Amarelo/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Amarelo", function: "NEGATIVO SENSOR CKP" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL SENSOR IAT" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "PULSO NEGATIVO DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Vermelho", function: "VALVULA IACV 2A" },
          { pin: "21", color: "Verde/Vermelho", function: "VALVULA IACV 1A" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Amarelo/Branco", function: "SINAL POSITIVO SENSOR CKP" },
          { pin: "24", color: "Rosa/Azul", function: "SINAL SENSOR ECT" },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "", function: "SEM FUNÇÃO" },
          { pin: "27", color: "Amarelo/Vermelho", function: "SINAL SENSOR MAP" },
          { pin: "28", color: "", function: "SEM FUNÇÃO" },
          { pin: "29", color: "Verde/Branco", function: "INTERRUPTOR DE PARTIDA" },
          { pin: "30", color: "Laranja", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Preto/Vermelho", function: "VALVULA IACV 2B" },
          { pin: "32", color: "Cinza/Preto", function: "VALVULA IACV 1B" },
          { pin: "33", color: "Laranja/Preto", function: "VALVULA SOLENOIDE PVC" }
        ]
      }
    ]
  },
  {
    id: "honda-lead-110-2011",
    name: "Honda LEAD 110 (2011)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto", function: "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR ECT, MAP,TP, IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR MAP E TP" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "", function: "SEM FUNÇÃO" },
          { pin: "11", color: "Amarelo/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Amarelo", function: "NEGATIVO SENSOR CKP" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL SENSOR IAT" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "PULSO NEGATIVO DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Vermelho", function: "VALVULA IACV 2A" },
          { pin: "21", color: "Laranja/Verde", function: "VALVULA IACV 1A" },
          { pin: "22", color: "Laranja/Preto", function: "VALVULA SOLENOIDE PVC" },
          { pin: "23", color: "Amarelo/Branco", function: "SINAL POSITIVO SENSOR CKP" },
          { pin: "24", color: "Rosa/Branco", function: "SINAL SENSOR ECT" },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Vermelho", function: "SINAL SENSOR MAP" },
          { pin: "27", color: "", function: "SEM FUNÇÃO" },
          { pin: "28", color: "", function: "SEM FUNÇÃO" },
          { pin: "29", color: "Verde/Amarelo", function: "INTERRUPTOR DE PARTIDA" },
          { pin: "30", color: "Verde/Laranja", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Preto/Vermelho", function: "VALVULA IACV 2B" },
          { pin: "32", color: "Cinza/Preto", function: "VALVULA IACV 1B" },
          { pin: "33", color: "Verde/Vermelho", function: "VAI PARA O RELE PARTIDA" }
        ]
      }
    ]
  },
  {
    id: "honda-lead-110-2012-2014",
    name: "Honda LEAD 110 (2012 - 2014)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto", function: "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR ECT, TP, IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR MAP E TP" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DA BOMBA COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "", function: "SEM FUNÇÃO" },
          { pin: "11", color: "Amarelo/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Amarelo", function: "NEGATIVO SENSOR CKP" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL SENSOR IAT" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "PULSO NEGATIVO DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "", function: "SEM FUNÇÃO" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Vermelho", function: "VALVULA IACV 2A" },
          { pin: "21", color: "Laranja/Verde", function: "VALVULA IACV 1A" },
          { pin: "22", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "23", color: "Amarelo/Branco", function: "SINAL POSITIVO SENSOR CKP" },
          { pin: "24", color: "Rosa/Branco", function: "SINAL SENSOR ECT" },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "", function: "SEM FUNÇÃO" },
          { pin: "27", color: "Amarelo/Vermelho", function: "SINAL SENSOR MAP" },
          { pin: "28", color: "Laranja/Preto", function: "VALVULA SOLENOIDE PVC" },
          { pin: "29", color: "Verde/Amarelo", function: "INTERRUPTOR DE PARTIDA" },
          { pin: "30", color: "Verde/Laranja", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Preto/Vermelho", function: "VALVULA IACV 2B" },
          { pin: "32", color: "Cinza/Preto", function: "VALVULA IACV 1B" },
          { pin: "33", color: "Verde/Vermelho", function: "VAI PARA O RELE PARTIDA" }
        ]
      }
    ]
  },
  {
    id: "honda-nx-400i-falcon-2013-2014",
    name: "Honda NX 400i Falcon (2013 - 2014)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, TP, O2 E SENSOR IAT." },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR MAP E TP" },
          { pin: "7", color: "Marrom", function: "PULSO DO TACOMETRO DO PAINEL." },
          { pin: "8", color: "Marrom/Preto", function: "VAI PARA RELE DA BOBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Azul/Branco", function: "VAI PARA O CONECTOR DLC E LUZ ABS" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Verde", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "PULSO PWM AQUECEDOR DO SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Branco", function: "SINAL SENSOR EOT." },
          { pin: "25", color: "Verde/Branco", function: "SINAL NEGATIVO DO INTERRUPTOR EMBREAGEM/CAVALETE LATERAL." },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Vermelho", function: "SINAL DE SAIDA DO SENSOR MAP DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "28", color: "Vermelho/Amarelo", function: "SINAL VALVULA SOLENÓIDE DE CONTROLE PAIR" },
          { pin: "29", color: "Laranja/Amarelo", function: "LUZ DO NEUTRO/RELE/DIODO" },
          { pin: "30", color: "Verde/Laranja", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-nxr-150-bros-2009",
    name: "Honda NXR 150 Bros (2009)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR DE INCLINAÇÃO, EOT, MAP E IAT." },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR INCLINAÇÃO, MAP E TP." },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DISTRIBUIDOR DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVE" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Azul/Branco", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Vermelho/Branco", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "", function: "SEM FUNÇÃO" },
          { pin: "29", color: "Verde/Vermelho", function: "SINAL NEGATIVO DO INTERRUPTOR DE EMBREAGEM E PONTO MORTO PARA O ECM" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-nxr-150-bros-mix-2010",
    name: "Honda NXR 150 Bros MIX (2010)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "POSITIVO 12V PÓS CHAVE" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR DE INCLINAÇÃO, EOT, MAP, O² E SENSOR IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR INCLINAÇÃO, MAP E TP." },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DISTRIBUIDOR DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVE" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Amarelo", function: "SINAL PULSO DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Rosa/Verde", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "INDICADOR LAMPADA ALC" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/INTERRUPTOR PONTO MORTO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "Rosa/Preto", function: "LUZ MIX SINAL NEGATIVO" }
        ]
      }
    ]
  },
  {
    id: "honda-nxr-150-bros-2011-2012",
    name: "Honda NXR 150 Bros (2011 - 2012)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "POSITIVO 12V PÓS CHAVE" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR DE INCLINAÇÃO, EOT, MAP E SENSOR IAT" },
          { pin: "5", color: "Amarelo", function: "VOLTAGEM DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR INCLINAÇÃO, MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DISTRIBUIDOR DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVE" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Amarelo", function: "SINAL PULSO DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Branco", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Vermelho/Verde", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "INDICADOR LAMPADA ALC" },
          { pin: "29", color: "Verde/Vermelho", function: "LUZ NEUTRO/TERRA RELE PARTIDA/DIODO NEUTRO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-nxr-150-bros-2012-2014",
    name: "Honda NXR 150 Bros (2012 - 2014)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "POSITIVO 12V PÓS CHAVE" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR DE INCLINAÇÃO, EOT, MAP, O² E SENSOR IAT" },
          { pin: "5", color: "Amarelo", function: "VOLTAGEM DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR INCLINAÇÃO, MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DISTRIBUIDOR DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVE" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Amarelo", function: "SINAL PULSO DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Branco", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Vermelho/Verde", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "INDICADOR LAMPADA ALC" },
          { pin: "29", color: "Verde/Vermelho", function: "LUZ NEUTRO/TERRA RELE PARTIDA/DIODO NEUTRO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-nxr-160-2015",
    name: "Honda NXR 160 Bros (2015)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP, O2 E IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "LUZ ALC DO PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-nxr-160-2018-2021",
    name: "Honda NXR 160 Bros (2018 - 2021)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Branco", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR TP" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR TP" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI / DLC" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI / DLC" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR EOT PARA O ECM" },
          { pin: "15", color: "Marrom", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "", function: "SEM FUNÇÃO" },
          { pin: "21", color: "", function: "SEM FUNÇÃO" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Verde", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "", function: "SEM FUNÇÃO" },
          { pin: "28", color: "Amarelo/Preto", function: "SINAL NEGATIVO ECM VALVULA SOLENOIDE CONT. DE MARCHA LENTA" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" },
          { pin: "30", color: "Laranja/Branco", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Verde", function: "NEGATIVO VAI PARA O SENSOR EOT / SENSOR INCLINAÇÃO" },
          { pin: "32", color: "Azul/Preto", function: "LUZ ALC DO PAINEL" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-nxr-160-2022",
    name: "Honda NXR 160 Bros (2022)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Branco", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR TP" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR TP" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI / DLC" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI / DLC" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR EOT PARA O ECM" },
          { pin: "15", color: "Marrom", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "", function: "SEM FUNÇÃO" },
          { pin: "21", color: "", function: "SEM FUNÇÃO" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Verde", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "", function: "SEM FUNÇÃO" },
          { pin: "28", color: "Amarelo/Preto", function: "SINAL NEGATIVO ECM VALVULA SOLENOIDE CONT. DE MARCHA LENTA" },
          { pin: "29", color: "Laranja/Amarelo", function: "VAI PARA O CONECTOR DLC" },
          { pin: "30", color: "Laranja/Branco", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Verde", function: "NEGATIVO VAI PARA O SENSOR EOT / SENSOR DE INCLINAÇÃO / SENSOR O²" },
          { pin: "32", color: "Azul/Preto", function: "LUZ ALC DO PAINEL" },
          { pin: "33", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" }
        ]
      }
    ]
  },
  {
    id: "honda-nxr-160-2023-2024",
    name: "Honda NXR 160 Bros (2023 - 2024)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Branco", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR TP" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR TP" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI / DLC" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI / DLC" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR EOT PARA O ECM" },
          { pin: "15", color: "Marrom", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "", function: "SEM FUNÇÃO" },
          { pin: "21", color: "", function: "SEM FUNÇÃO" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Verde", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "", function: "SEM FUNÇÃO" },
          { pin: "28", color: "Amarelo/Preto", function: "SINAL NEGATIVO ECM VALVULA SOLENOIDE CONT. DE MARCHA LENTA" },
          { pin: "29", color: "Laranja/Amarelo", function: "VAI PARA O CONECTOR DLC" },
          { pin: "30", color: "Laranja/Branco", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Verde", function: "NEGATIVO VAI PARA O SENSOR EOT / SENSOR DE INCLINAÇÃO / SENSOR O²" },
          { pin: "32", color: "Azul/Preto", function: "LUZ ALC DO PAINEL" },
          { pin: "33", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" }
        ]
      }
    ]
  },
  {
    id: "honda-pop-110i-2015-2024",
    name: "Honda POP 110i (2015 - 2024)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Branco", function: "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR TP" },
          { pin: "5", color: "Amarelo", function: "SINAL SENSOR TP PARA ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR TP" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom/Preto", function: "SINAL NEGATIVO ECM PARA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI E TERMINAL DLC" },
          { pin: "11", color: "Rosa/Azul", function: "SINAL NEGATIVA ECM PARA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL SENSOR EOT PARA ECM" },
          { pin: "15", color: "Marrom", function: "TERMINAL DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DA ECM PARA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "INDICADOR LUZ FI PAINEL/ANOMALIA" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "", function: "SEM FUNÇÃO" },
          { pin: "21", color: "", function: "SEM FUNÇÃO" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Verde", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "", function: "SEM FUNÇÃO" },
          { pin: "27", color: "", function: "SEM FUNÇÃO" },
          { pin: "28", color: "Amarelo/Preto", function: "SINAL NEGATIVO ECM PARA VALVULA SOLENÓIDE CONTROLE MARCHA LENTA" },
          { pin: "29", color: "", function: "SEM FUNÇÃO" },
          { pin: "30", color: "Verde/Vermelho", function: "CONECTOR DLC" },
          { pin: "31", color: "Verde", function: "NEGATIVO VAI PARA O SENSOR EOT E SENSOR DE OXIGENIO" },
          { pin: "32", color: "", function: "SEM FUNÇÃO" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-titan-150-2009",
    name: "Honda Titan 150 (2009)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR DE INCLINAÇÃO, EOT, MAP, TP E IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR INCLINAÇÃO, MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA BOMBA COBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇAO NEGATIVA BOBINA IGNIÇAO" },
          { pin: "12", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Vermelho/Branco", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "28", color: "", function: "SEM FUNÇÃO" },
          { pin: "29", color: "Verde/Vermelho", function: "SINAL NEGATIVO DO INTERRUPTOR DE EMBREAGEM/DIODO/PONTO MORTO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-titan-150-mix-2009-2010",
    name: "Honda Titan 150 MIX (2009 - 2010)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR DE INCLINAÇÃO, EOT, MAP, O², TP E IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR INCLINAÇÃO, MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA BOMBA COBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇAO NEGATIVA BOBINA IGNIÇAO" },
          { pin: "12", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Vermelho/Branco", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "LUZ ALC DO PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "Azul", function: "LUZ MIX DO PAINEL" }
        ]
      }
    ]
  },
  {
    id: "honda-titan-150-2011-2013",
    name: "Honda Titan 150 (2011 - 2013)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP, O², TP E IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA BOMBA COBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇAO NEGATIVA BOBINA IGNIÇAO" },
          { pin: "12", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Vermelho/Branco", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "LUZ ALC DO PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-titan-150-2014",
    name: "Honda Titan 150 (2014)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP, O², TP E IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA BOMBA COBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇAO NEGATIVA BOBINA IGNIÇAO" },
          { pin: "12", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Amarelo/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Vermelho/Branco", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "LUZ ALC DO PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-titan-150-2015",
    name: "Honda Titan 150 (2015)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Branco", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP, O², TP E IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA BOMBA COBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇAO NEGATIVA BOBINA IGNIÇAO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Azul", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "LUZ ALC DO PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-titan-160-2016-2017",
    name: "Honda Titan 160 (2016 - 2017)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "VOLTAGEM PÓS CHAVE 12V" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR DE INCLINAÇÃO, EOT, MAP, TP, O² E SENSOR IAT" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR INCLINAÇÃO, MAP E TP." },
          { pin: "7", color: "Amarelo/Verde", function: "PULSO TACOMETRO PAINEL" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVE" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇAO NEGATIVA BOBINA IGNIÇAO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "23", color: "Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Azul", function: "ALIMENTAÇÃO POSITIVA E SINAL SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "SINAL NEGATIVO PARA A LAMPADA ALC ." },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-titan-160-2018-2021",
    name: "Honda Titan 160 (2018 - 2021)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Branco", function: "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR DE INCLINAÇÃO, EOT, MAP, TP, O² E SENSOR IAT" },
          { pin: "5", color: "Amarelo", function: "VOLTAGEM DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR INCLINAÇÃO, MAP E TP." },
          { pin: "7", color: "Amarelo/Verde", function: "PULSO TACOMETRO PAINEL" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVE" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇAO NEGATIVA BOBINA IGNIÇAO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "Rosa", function: "IMOBILIZADOR VEM DA CHAVE IGNIÇAO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Azul", function: "ALIMENTAÇÃO POSITIVA E SINAL SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "SINAL NEGATIVO PARA A LAMPADA ALC ." },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" }
        ]
      }
    ]
  },
  {
    id: "honda-titan-160-2022-2023",
    name: "Honda Titan 160 (2022 - 2023)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Branco", function: "VOLTAGEM PÓS CHAVE DA BATERIA PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR DE INCLINAÇÃO, EOT, MAP, TP, O² E SENSOR IAT" },
          { pin: "5", color: "Amarelo", function: "VOLTAGEM DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO SENSOR INCLINAÇÃO, MAP E TP." },
          { pin: "7", color: "Amarelo/Verde", function: "PULSO TACOMETRO PAINEL" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVE" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇAO NEGATIVA BOBINA IGNIÇAO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "Branco/Preto", function: "SINAL PWM PARA AQUECEDOR SENSOR OXIGENIO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Amarelo", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Azul", function: "ALIMENTAÇÃO POSITIVA E SINAL SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP DA UNIDADE DE SENSORES PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "SINAL NEGATIVO PARA A LAMPADA ALC ." },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/INTERRUPTOR NEUTRO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-xre-190-2016-2024-c-abs",
    name: "Honda XRE 190 (2016 - 2024 c/ ABS)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Branco", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR TP" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR TP" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI / DLC" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI / DLC" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR EOT PARA O ECM" },
          { pin: "15", color: "Marrom", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL E ABS" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "", function: "SEM FUNÇÃO" },
          { pin: "21", color: "", function: "SEM FUNÇÃO" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Verde", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "", function: "SEM FUNÇÃO" },
          { pin: "28", color: "Amarelo/Preto", function: "SINAL NEGATIVO ECM VALVULA SOLENOIDE CONT. DE MARCHA LENTA" },
          { pin: "29", color: "Laranja/Amarelo", function: "VAI PARA O CONECTOR DLC" },
          { pin: "30", color: "Laranja/Branco", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Verde", function: "NEGATIVO VAI PARA O SENSOR EOT / SENSOR DE INCLINAÇÃO / SENSOR O²" },
          { pin: "32", color: "Azul/Preto", function: "LUZ ALC DO PAINEL" },
          { pin: "33", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" }
        ]
      }
    ]
  },
  {
    id: "honda-xre-190-2016-2024-s-abs",
    name: "Honda XRE 190 (2016 - 2024 s/ ABS)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Branco", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO TERRA/CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Laranja", function: "NEGATIVO VAI PARA O SENSOR TP" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR TP" },
          { pin: "7", color: "", function: "SEM FUNÇÃO" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO TERRA/CHASSI / DLC" },
          { pin: "10", color: "Verde", function: "NEGATIVO TERRA/CHASSI / DLC" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Azul/Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR EOT PARA O ECM" },
          { pin: "15", color: "Marrom", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "", function: "SEM FUNÇÃO" },
          { pin: "21", color: "", function: "SEM FUNÇÃO" },
          { pin: "22", color: "", function: "SEM FUNÇÃO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Verde", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "", function: "SEM FUNÇÃO" },
          { pin: "28", color: "Amarelo/Preto", function: "SINAL NEGATIVO ECM VALVULA SOLENOIDE CONT. DE MARCHA LENTA" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR EMBREAGEM/DIODO/NEUTRO" },
          { pin: "30", color: "Laranja/Branco", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Verde", function: "NEGATIVO VAI PARA O SENSOR EOT / SENSOR INCLINAÇÃO / ABS" },
          { pin: "32", color: "Azul/Preto", function: "LUZ ALC DO PAINEL" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-xre-300-2009-2012",
    name: "Honda XRE 300 (2009 - 2012)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP E SENSOR IAT E SENSOR DE INCLINAÇÃO" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR INCLINAÇÃO, MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM AQUECEDOR SENSOR DE OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Branco", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Vermelho/Verde", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "LUZ DO ALC PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR DE EMBREAGEM/INTERRUPTOR NEUTRO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-xre-300-2013-2015",
    name: "Honda XRE 300 (2013 - 2015)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP E SENSOR IAT E SENSOR DE INCLINAÇÃO" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR INCLINAÇÃO, MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC E LUZ DO ABS" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM AQUECEDOR SENSOR DE OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Branco", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Vermelho/Verde", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "LUZ DO ALC PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR DE EMBREAGEM/INTERRUPTOR NEUTRO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-xre-300-2016-2018",
    name: "Honda XRE 300 (2016 - 2018)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP E SENSOR IAT E SENSOR DE INCLINAÇÃO" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR INCLINAÇÃO, MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC E LUZ DO ABS" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM AQUECEDOR SENSOR DE OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Branco", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "LUZ DO ALC PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR DE EMBREAGEM/INTERRUPTOR NEUTRO" },
          { pin: "30", color: "Marrom/Preto", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-xre-300-2019-2023",
    name: "Honda XRE 300 (2019 - 2023)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP E SENSOR IAT E SENSOR DE INCLINAÇÃO" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR INCLINAÇÃO, MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC E LUZ DO ABS" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM AQUECEDOR SENSOR DE OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Branco", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "LUZ DO ALC PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR DE EMBREAGEM/INTERRUPTOR NEUTRO/DIODO DO RELE DE PARTIDA" },
          { pin: "30", color: "Laranja/Branco", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  },
  {
    id: "honda-xre-300-sahara-2024",
    name: "Honda XRE 300 SAHARA (2024)",
    modules: [
      {
        name: "Módulo de Injeção Eletrônica (ECM)",
        pinout: [
          { pin: "1", color: "Preto/Azul", function: "PÓS CHAVE 12V PARA O ECM" },
          { pin: "2", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "3", color: "Preto/Laranja", function: "SINAL DE SAIDA DO SENSOR DE OXIGENIO PARA A ECM" },
          { pin: "4", color: "Verde/Branco", function: "NEGATIVO VAI PARA O SENSOR EOT, MAP E SENSOR IAT E SENSOR DE INCLINAÇÃO" },
          { pin: "5", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR TP PARA O ECM" },
          { pin: "6", color: "Amarelo/Vermelho", function: "ALIMENTAÇÃO 5V SENSOR INCLINAÇÃO, MAP E TP" },
          { pin: "7", color: "Marrom", function: "ALIMENTAÇÃO NEGATIVA DO RELÉ DE CARGA" },
          { pin: "8", color: "Marrom/Preto", function: "ALIMENTAÇÃO NEGATIVA DA BOMBA DE COMBUSTIVEL" },
          { pin: "9", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "10", color: "Verde", function: "NEGATIVO OU TERRA CHASSI" },
          { pin: "11", color: "Rosa/Azul", function: "ALIMENTAÇÃO NEGATIVA BOBINA IGNIÇÃO" },
          { pin: "12", color: "Amarelo", function: "SINAL DE SAIDA DO SENSOR CKP PARA O ECM" },
          { pin: "13", color: "", function: "SEM FUNÇÃO" },
          { pin: "14", color: "Cinza/Azul", function: "SINAL DE SAIDA DO SENSOR IAT PARA O ECM" },
          { pin: "15", color: "Rosa/Azul", function: "VAI PARA O CONECTOR DLC E LUZ DO ABS" },
          { pin: "16", color: "Rosa/Branco", function: "ALIMENTAÇÃO NEGATIVA DO BICO INJETOR" },
          { pin: "17", color: "", function: "SEM FUNÇÃO" },
          { pin: "18", color: "Azul/Branco", function: "ALIMENTAÇÃO NEGATIVA LUZ DE ANOMALIA (MIL) PAINEL" },
          { pin: "19", color: "", function: "SEM FUNÇÃO" },
          { pin: "20", color: "Marrom/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2A" },
          { pin: "21", color: "Azul/Preto", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1A" },
          { pin: "22", color: "Branco/Preto", function: "SINAL PWM AQUECEDOR SENSOR DE OXIGENIO" },
          { pin: "23", color: "Amarelo/Branco", function: "ALIMENTAÇÃO NEGATIVA SENSOR CKP" },
          { pin: "24", color: "Rosa/Branco", function: "ALIMENTAÇÃO POSITIVA SENSOR EOT." },
          { pin: "25", color: "", function: "SEM FUNÇÃO" },
          { pin: "26", color: "Amarelo/Rosa", function: "SINAL DE SAIDA DO SENSOR DE INCLINAÇÃO PARA O ECM" },
          { pin: "27", color: "Amarelo/Verde", function: "SINAL DE SAIDA DO SENSOR MAP PARA O ECM" },
          { pin: "28", color: "Verde/Rosa", function: "LUZ DO ALC PAINEL" },
          { pin: "29", color: "Verde/Vermelho", function: "INTERRUPTOR DE EMBREAGEM/INTERRUPTOR NEUTRO/DIODO DO RELE DE PARTIDA" },
          { pin: "30", color: "Laranja/Branco", function: "VAI PARA O CONECTOR DLC" },
          { pin: "31", color: "Marrom/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 2B" },
          { pin: "32", color: "Azul/Vermelho", function: "ALIMENTAÇÃO ATUADOR MARCHA LENTA (IACV) 1B" },
          { pin: "33", color: "", function: "SEM FUNÇÃO" }
        ]
      }
    ]
  }
];
