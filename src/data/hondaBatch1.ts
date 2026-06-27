import { DiagnosticModel } from "../types";

export const hondaBatch1: DiagnosticModel[] = [
  {
    id: "honda-biz-110i-2016-2017",
    name: "BIZ 110i | 2016...2017",
    tables: [
      {
        name: "MOTOR E VÁLVULAS",
        rows: [
          { padrao: "1.294 kPa a 600 rpm", localizacao: "COMPRESSÃO DO CILINDRO", tipo: "PR" },
          { padrao: "0,10 ± 0,02 mm", localizacao: "FOLGA VÁLVULA - ADMISSÃO", tipo: "MM" },
          { padrao: "0,15 ± 0,02 mm", localizacao: "FOLGA VÁLVULA - ESCAPE", tipo: "MM" }
        ]
      },
      {
        name: "ESTATOR",
        notes: "fio branco e fio verde",
        rows: [
          { padrao: "20V (mínimo)", localizacao: "MARCHA LENTA (multímetro 200V~)", tipo: "AL" },
          { padrao: "120V (mínimo)", localizacao: "5.000 RPM (multímetro 200V~)", tipo: "AL" },
          { padrao: "0,5 - 1,2 Ω", localizacao: "RESISTÊNCIA DA BOBINA DE CARGA 20ºC", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE IGNIÇÃO",
        rows: [
          { padrao: "0,001 mA MÍNIMA", localizacao: "TESTE FUGA CORRENTE", tipo: "-" },
          { padrao: "100V MÍNIMO", localizacao: "PICO DE VOLTAGEM DA BOBINA DE IGNIÇÃO", tipo: "PV" },
          { padrao: "1,90 - 3,60 Ω", localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - PRIMÁRIO", tipo: "RS" },
          { padrao: "8,0 - 12,2 KΩ", localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - SECUNDÁRIO", tipo: "RS" },
          { padrao: "1,5 V MÍNIMO", localizacao: "PICO DE VOLTAGEM DO SENSOR CKP", tipo: "PV" },
          { padrao: "192 - 288 Ω", localizacao: "RESISTÊNCIA DO SENSOR CKP A 20ºC", tipo: "RS" },
          { padrao: "3,7 - 6,2 KΩ a 20ºC", localizacao: "RESISTÊNCIA DO CACHIMBO DE VELA", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE INJEÇÃO",
        rows: [
          { padrao: "2,5 - 2,8 KΩ", localizacao: "EOT (7 piscadas) - 20ºC", tipo: "RS" },
          { padrao: "0,211 - 0,220 KΩ", localizacao: "EOT (7 piscadas) - 100ºC", tipo: "RS" },
          { padrao: "0,29 a 0,71 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO DE SAÍDA MARCHA LENTA", tipo: "SN" },
          { padrao: "4,13 a 4,76 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO SAÍDA BORBOLETA ABERTA", tipo: "SN" },
          { padrao: "11 - 13 Ω", localizacao: "BICO INJETOR (12 piscadas) - RESISTÊNCIA 24ºC", tipo: "RS" },
          { padrao: "3,0 BAR / 7 ml", localizacao: "TESTE INJETOR COMBUSTÍVEL - PRESSÃO / VAZÃO (11.000 RPM)", tipo: "PR" },
          { padrao: "100mV - 900mV", localizacao: "SENSOR O² (21 piscadas) - TENSÃO DE SAÍDA", tipo: "SN" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "263 - 316 kPa (2,63 a 3,16 bar)", localizacao: "PRESSÃO DO COMBUSTÍVEL EM MARCHA LENTA", tipo: "PR" },
          { padrao: "82 cm³ mínimo/10 segundos", localizacao: "FLUXO DO COMBUSTÍVEL (VAZÃO BOMBA)", tipo: "VZ" },
          { padrao: "6 - 10 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - CHEIO", tipo: "RS" },
          { padrao: "90 - 100 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - VAZIO", tipo: "RS" }
        ]
      },
      {
        name: "LUBRIFICANTES E FLUIDOS",
        rows: [
          { padrao: "0,8 litro", localizacao: "ÓLEO MOTOR 10W-30 SJ (DRENAGEM)", tipo: "-" },
          { padrao: "1,0 litro", localizacao: "ÓLEO MOTOR 10W-30 SJ (DESMONTAGEM TOTAL)", tipo: "-" },
          { padrao: "60,5 ml", localizacao: "ÓLEO BENGALA 10W (CADA LADO)", tipo: "-" }
        ]
      }
    ]
  },
  {
    id: "honda-biz-110i-2018-2024",
    name: "BIZ 110i | 2018...2024",
    tables: [
      {
        name: "MOTOR E VÁLVULAS",
        rows: [
          { padrao: "1.363 kPa a 600 rpm", localizacao: "COMPRESSÃO DO CILINDRO", tipo: "PR" },
          { padrao: "0,10 ± 0,02 mm", localizacao: "FOLGA VÁLVULA - ADMISSÃO", tipo: "MM" },
          { padrao: "0,15 ± 0,02 mm", localizacao: "FOLGA VÁLVULA - ESCAPE", tipo: "MM" }
        ]
      },
      {
        name: "ESTATOR",
        notes: "fio branco e fio verde",
        rows: [
          { padrao: "20V (mínimo)", localizacao: "MARCHA LENTA (multímetro 200V~)", tipo: "AL" },
          { padrao: "130V (mínimo)", localizacao: "5.000 RPM (multímetro 200V~)", tipo: "AL" },
          { padrao: "0,5 - 1,2 Ω", localizacao: "RESISTÊNCIA DA BOBINA DE CARGA 20ºC", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE IGNIÇÃO",
        rows: [
          { padrao: "0,007 mA MÍNIMA", localizacao: "TESTE FUGA CORRENTE", tipo: "-" },
          { padrao: "100V MÍNIMO", localizacao: "PICO DE VOLTAGEM DA BOBINA DE IGNIÇÃO", tipo: "PV" },
          { padrao: "1,9 - 3,6 Ω", localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - PRIMÁRIO", tipo: "RS" },
          { padrao: "8,0 - 12,2 KΩ", localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - SECUNDÁRIO", tipo: "RS" },
          { padrao: "1,5 V MÍNIMO", localizacao: "PICO DE VOLTAGEM DO SENSOR CKP", tipo: "PV" },
          { padrao: "192 - 288 Ω", localizacao: "RESISTÊNCIA DO SENSOR CKP A 20ºC", tipo: "RS" },
          { padrao: "3,7 - 6,2 KΩ a 20ºC", localizacao: "RESISTÊNCIA DO CACHIMBO DE VELA", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE INJEÇÃO",
        rows: [
          { padrao: "2,5 - 2,8 KΩ", localizacao: "EOT (7 piscadas) - 20ºC", tipo: "RS" },
          { padrao: "0,211 - 0,220 KΩ", localizacao: "EOT (7 piscadas) - 100ºC", tipo: "RS" },
          { padrao: "0,29 a 0,71 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO DE SAÍDA MARCHA LENTA", tipo: "SN" },
          { padrao: "4,13 a 4,76 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO SAÍDA BORBOLETA ABERTA", tipo: "SN" },
          { padrao: "11 - 13 Ω", localizacao: "BICO INJETOR (12 piscadas) - RESISTÊNCIA 24ºC", tipo: "RS" },
          { padrao: "3,0 BAR / 7 ml", localizacao: "TESTE INJETOR COMBUSTÍVEL - PRESSÃO / VAZÃO (11.000 RPM)", tipo: "PR" },
          { padrao: "100mV - 900mV", localizacao: "SENSOR O² (21 piscadas) - TENSÃO DE SAÍDA", tipo: "SN" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "263 - 316 kPa (2,63 a 3,16 bar)", localizacao: "PRESSÃO DO COMBUSTÍVEL EM MARCHA LENTA", tipo: "PR" },
          { padrao: "82 cm³ mínimo/10 segundos", localizacao: "FLUXO DO COMBUSTÍVEL (VAZÃO BOMBA)", tipo: "VZ" },
          { padrao: "6 - 10 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - CHEIO", tipo: "RS" },
          { padrao: "90 - 100 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - VAZIO", tipo: "RS" }
        ]
      },
      {
        name: "LUBRIFICANTES E FLUIDOS",
        rows: [
          { padrao: "800ml", localizacao: "ÓLEO MOTOR 10W-30 SJ (DRENAGEM)", tipo: "-" },
          { padrao: "1,0 litro", localizacao: "ÓLEO MOTOR 10W-30 SJ (DESMONTAGEM TOTAL)", tipo: "-" },
          { padrao: "55 ml", localizacao: "ÓLEO BENGALA 10W (CADA LADO)", tipo: "-" }
        ]
      }
    ]
  },
  {
    id: "honda-biz-125-2009-2010",
    name: "BIZ 125 | 2009...2010",
    tables: [
      {
        name: "MOTOR E VÁLVULAS",
        rows: [
          { padrao: "1.265 kPa (12,9 kgf/cm2, 184 psi) a 700 rpm", localizacao: "COMPRESSÃO DO CILINDRO", tipo: "PR" },
          { padrao: "0,10 ± 0,02 mm", localizacao: "FOLGA VÁLVULA - ADMISSÃO", tipo: "MM" },
          { padrao: "0,10 ± 0,02 mm", localizacao: "FOLGA VÁLVULA - ESCAPE", tipo: "MM" }
        ]
      },
      {
        name: "ESTATOR",
        notes: "fio branco e fio verde",
        rows: [
          { padrao: "20V (mínimo)", localizacao: "MARCHA LENTA (multímetro 200V~)", tipo: "AL" },
          { padrao: "120V (mínimo)", localizacao: "5.000 RPM (multímetro 200V~)", tipo: "AL" },
          { padrao: "0,2 - 1,2 Ω", localizacao: "RESISTÊNCIA DA BOBINA DE CARGA 20ºC", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE IGNIÇÃO",
        rows: [
          { padrao: "0,15 mA máximo", localizacao: "TESTE FUGA CORRENTE", tipo: "-" },
          { padrao: "100V MÍNIMO", localizacao: "PICO DE VOLTAGEM DA BOBINA DE IGNIÇÃO", tipo: "PV" },
          { padrao: "2,1 - 5,2 Ω", localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - PRIMÁRIO", tipo: "RS" },
          { padrao: "8,5 - 13,1 KΩ", localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - SECUNDÁRIO", tipo: "RS" },
          { padrao: "0,7V MÍNIMO", localizacao: "PICO DE VOLTAGEM DO SENSOR CKP", tipo: "PV" },
          { padrao: "198 - 288 Ω", localizacao: "RESISTÊNCIA DO SENSOR CKP A 20ºC", tipo: "RS" },
          { padrao: "3,7 - 6,2 KΩ a 20ºC", localizacao: "RESISTÊNCIA DO CACHIMBO DE VELA", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE INJEÇÃO",
        rows: [
          { padrao: "2,6 - 3,2 V / 5V", localizacao: "MAP (1 piscada) - TENSÃO DE SAÍDA / ALIMENTAÇÃO", tipo: "SN/AL" },
          { padrao: "2,5 - 2,8 KΩ", localizacao: "EOT (7 piscadas) - 20ºC", tipo: "RS" },
          { padrao: "0,21 - 0,23 KΩ", localizacao: "EOT (7 piscadas) - 100ºC", tipo: "RS" },
          { padrao: "0,29 a 0,71 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO DE SAÍDA MARCHA LENTA", tipo: "SN" },
          { padrao: "4,13 a 4,76 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO SAÍDA BORBOLETA ABERTA", tipo: "SN" },
          { padrao: "2,7 - 3,1 V / 5V", localizacao: "IAT (9 piscadas) - TENSÃO DE SAÍDA / ALIMENTAÇÃO", tipo: "SN/AL" },
          { padrao: "1 - 4 KΩ a 20ºC", localizacao: "IAT - RESISTÊNCIA", tipo: "RS" },
          { padrao: "9 - 12 Ω", localizacao: "BICO INJETOR (12 piscadas) - RESISTÊNCIA 20ºC", tipo: "RS" },
          { padrao: "3,0 BAR / 8 ml", localizacao: "TESTE INJETOR COMBUSTÍVEL - PRESSÃO / VAZÃO (11.000 RPM)", tipo: "PR/VZ" },
          { padrao: "100mV - 900mV", localizacao: "SENSOR O² (21 piscadas) - TENSÃO DE SAÍDA", tipo: "SN" },
          { padrao: "3,6 a 4,4 V", localizacao: "SENSOR TBM (54 piscadas) - TENSÃO HORIZONTAL", tipo: "SN" },
          { padrao: "0,7 a 1,3 V", localizacao: "SENSOR TBM (54 piscadas) - TENSÃO INCLINAÇÃO", tipo: "SN" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "294 kPa (2,94/3,00 bar)", localizacao: "PRESSÃO DO COMBUSTÍVEL EM MARCHA LENTA", tipo: "PR" },
          { padrao: "13,9 ml mínimo/10 segundos", localizacao: "FLUXO DO COMBUSTÍVEL (VAZÃO BOMBA)", tipo: "VZ" },
          { padrao: "6 - 10 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - CHEIO", tipo: "RS" },
          { padrao: "90 - 100 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - VAZIO", tipo: "RS" }
        ]
      },
      {
        name: "LUBRIFICANTES E FLUIDOS",
        rows: [
          { padrao: "0,7 litro", localizacao: "ÓLEO MOTOR 10W-30 SJ (DRENAGEM)", tipo: "-" },
          { padrao: "0,9 litro", localizacao: "ÓLEO MOTOR 10W-30 SJ (DESMONTAGEM TOTAL)", tipo: "-" },
          { padrao: "55 ml", localizacao: "ÓLEO BENGALA 10W (CADA LADO)", tipo: "-" }
        ]
      }
    ]
  },
  {
    id: "honda-biz-125-2009-2010-mais",
    name: "BIZ 125 | 2009...2010 (BIZ + MAIS)",
    tables: [
      {
        name: "MOTOR E VÁLVULAS",
        rows: [
          { padrao: "1.265 kPa (12,9 kgf/cm2, 184 psi) a 700 rpm", localizacao: "COMPRESSÃO DO CILINDRO", tipo: "PR" },
          { padrao: "0,10 ± 0,02 mm", localizacao: "FOLGA VÁLVULA - ADMISSÃO", tipo: "MM" },
          { padrao: "0,10 ± 0,02 mm", localizacao: "FOLGA VÁLVULA - ESCAPE", tipo: "MM" }
        ]
      },
      {
        name: "ESTATOR",
        notes: "fio branco e fio verde",
        rows: [
          { padrao: "20V (mínimo)", localizacao: "MARCHA LENTA (multímetro 200V~)", tipo: "AL" },
          { padrao: "120V (mínimo)", localizacao: "5.000 RPM (multímetro 200V~)", tipo: "AL" },
          { padrao: "0,2 - 1,2 Ω", localizacao: "RESISTÊNCIA DA BOBINA DE CARGA 20ºC", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE IGNIÇÃO",
        rows: [
          { padrao: "0,15 mA máximo", localizacao: "TESTE FUGA CORRENTE", tipo: "-" },
          { padrao: "100V MÍNIMO", localizacao: "PICO DE VOLTAGEM DA BOBINA DE IGNIÇÃO", tipo: "PV" },
          { padrao: "2,1 - 5,2 Ω", localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - PRIMÁRIO", tipo: "RS" },
          { padrao: "8,5 - 13,1 KΩ", localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - SECUNDÁRIO", tipo: "RS" },
          { padrao: "0,7V MÍNIMO", localizacao: "PICO DE VOLTAGEM DO SENSOR CKP", tipo: "PV" },
          { padrao: "198 - 288 Ω", localizacao: "RESISTÊNCIA DO SENSOR CKP A 20ºC", tipo: "RS" },
          { padrao: "3,7 - 6,2 KΩ a 20ºC", localizacao: "RESISTÊNCIA DO CACHIMBO DE VELA", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE INJEÇÃO E SENSORES",
        rows: [
          { padrao: "2,6 - 3,2 V / 5V", localizacao: "MAP (1 piscada) - TENSÃO DE SAÍDA / ALIMENTAÇÃO", tipo: "SN/AL" },
          { padrao: "2,5 - 2,8 KΩ", localizacao: "EOT (7 piscadas) - 20ºC", tipo: "RS" },
          { padrao: "0,21 - 0,23 KΩ", localizacao: "EOT (7 piscadas) - 100ºC", tipo: "RS" },
          { padrao: "0,29 a 0,71 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO DE SAÍDA MARCHA LENTA", tipo: "SN" },
          { padrao: "4,13 a 4,76 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO SAÍDA BORBOLETA ABERTA", tipo: "SN" },
          { padrao: "2,7 - 3,1 V / 5V", localizacao: "IAT (9 piscadas) - TENSÃO DE SAÍDA / ALIMENTAÇÃO", tipo: "SN/AL" },
          { padrao: "1 - 4 KΩ a 20ºC", localizacao: "IAT - RESISTÊNCIA", tipo: "RS" },
          { padrao: "9 - 12 Ω", localizacao: "BICO INJETOR (12 piscadas) - RESISTÊNCIA 20ºC", tipo: "RS" },
          { padrao: "3,0 BAR / 8 ml", localizacao: "TESTE INJETOR COMBUSTÍVEL - PRESSÃO / VAZÃO (11.000 RPM)", tipo: "PR/VZ" },
          { padrao: "100mV - 900mV", localizacao: "SENSOR O² (21 piscadas) - TENSÃO DE SAÍDA", tipo: "SN" },
          { padrao: "3,6 a 4,4 V", localizacao: "SENSOR TBM (54 piscadas) - TENSÃO HORIZONTAL", tipo: "SN" },
          { padrao: "0,7 a 1,3 V", localizacao: "SENSOR TBM (54 piscadas) - TENSÃO INCLINAÇÃO", tipo: "SN" },
          { padrao: "PULSO / 12V", localizacao: "SENSOR VELOCIMETRO - TIPO DETECÇÃO / TENSÃO ALIMENTAÇÃO", tipo: "AL/SN" },
          { padrao: "0V a 4,55V OSCILANDO", localizacao: "SENSOR VELOCIMETRO - TENSÃO CADA GIRO", tipo: "SN" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "294 kPa (2,94/3,00 bar)", localizacao: "PRESSÃO DO COMBUSTÍVEL EM MARCHA LENTA", tipo: "PR" },
          { padrao: "13,9 ml mínimo/10 segundos", localizacao: "FLUXO DO COMBUSTÍVEL (VAZÃO BOMBA)", tipo: "VZ" },
          { padrao: "6 - 10 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - CHEIO", tipo: "RS" },
          { padrao: "90 - 100 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - VAZIO", tipo: "RS" }
        ]
      },
      {
        name: "LUBRIFICANTES E FLUIDOS",
        rows: [
          { padrao: "0,7 litro", localizacao: "ÓLEO MOTOR 10W-30 SJ (DRENAGEM)", tipo: "-" },
          { padrao: "0,9 litro", localizacao: "ÓLEO MOTOR 10W-30 SJ (DESMONTAGEM TOTAL)", tipo: "-" },
          { padrao: "55 ml", localizacao: "ÓLEO BENGALA 10W (CADA LADO)", tipo: "-" }
        ]
      }
    ]
  },
  {
    id: "honda-biz-125-2011-2015",
    name: "BIZ 125 | 2011...2015",
    tables: [
      {
        name: "MOTOR E VÁLVULAS",
        rows: [
          { padrao: "1.196 kPa (12,2 kgf/cm2, 174 psi) a 700 rpm", localizacao: "COMPRESSÃO DO CILINDRO", tipo: "PR" },
          { padrao: "0,10 ± 0,02 mm", localizacao: "FOLGA VÁLVULA - ADMISSÃO", tipo: "MM" },
          { padrao: "0,10 ± 0,02 mm", localizacao: "FOLGA VÁLVULA - ESCAPE", tipo: "MM" }
        ]
      },
      {
        name: "ESTATOR",
        notes: "fio branco e fio verde",
        rows: [
          { padrao: "20V (mínimo)", localizacao: "MARCHA LENTA (multímetro 200V~)", tipo: "AL" },
          { padrao: "120V (mínimo)", localizacao: "5.000 RPM (multímetro 200V~)", tipo: "AL" },
          { padrao: "0,2 - 1,2 Ω", localizacao: "RESISTÊNCIA DA BOBINA DE CARGA 20ºC", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE IGNIÇÃO",
        rows: [
          { padrao: "0,15 mA máximo", localizacao: "TESTE FUGA CORRENTE", tipo: "-" },
          { padrao: "100V MÍNIMO", localizacao: "PICO DE VOLTAGEM DA BOBINA DE IGNIÇÃO", tipo: "PV" },
          { padrao: "2,1 - 5,2 Ω", localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - PRIMÁRIO", tipo: "RS" },
          { padrao: "8,5 - 13,1 KΩ", localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - SECUNDÁRIO", tipo: "RS" },
          { padrao: "0,7V MÍNIMO", localizacao: "PICO DE VOLTAGEM DO SENSOR CKP", tipo: "PV" },
          { padrao: "198 - 288 Ω", localizacao: "RESISTÊNCIA DO SENSOR CKP A 20ºC", tipo: "RS" },
          { padrao: "3,7 - 6,2 KΩ a 20ºC", localizacao: "RESISTÊNCIA DO CACHIMBO DE VELA", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE INJEÇÃO",
        rows: [
          { padrao: "2,6 - 3,2 V / 5V", localizacao: "MAP (1 piscada) - TENSÃO DE SAÍDA / ALIMENTAÇÃO", tipo: "SN/AL" },
          { padrao: "2,5 - 2,8 KΩ", localizacao: "EOT (7 piscadas) - 20ºC", tipo: "RS" },
          { padrao: "0,21 - 0,23 KΩ", localizacao: "EOT (7 piscadas) - 100ºC", tipo: "RS" },
          { padrao: "0,29 a 0,71 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO DE SAÍDA MARCHA LENTA", tipo: "SN" },
          { padrao: "4,13 a 4,76 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO SAÍDA BORBOLETA ABERTA", tipo: "SN" },
          { padrao: "2,7 - 3,1 V / 5V", localizacao: "IAT (9 piscadas) - TENSÃO DE SAÍDA / ALIMENTAÇÃO", tipo: "SN/AL" },
          { padrao: "1 - 4 KΩ a 20ºC", localizacao: "IAT - RESISTÊNCIA", tipo: "RS" },
          { padrao: "9 - 12 Ω", localizacao: "BICO INJETOR (12 piscadas) - RESISTÊNCIA 20ºC", tipo: "RS" },
          { padrao: "3,0 BAR / 8 ml", localizacao: "TESTE INJETOR COMBUSTÍVEL - PRESSÃO / VAZÃO (11.000 RPM)", tipo: "PR/VZ" },
          { padrao: "100mV - 900mV", localizacao: "SENSOR O² (21 piscadas) - TENSÃO DE SAÍDA", tipo: "SN" },
          { padrao: "6 - 12 Ω 20ºC", localizacao: "SENSOR O² (21 piscadas) - RESISTÊNCIA", tipo: "RS" },
          { padrao: "110 - 150 Ω (20ºC)", localizacao: "IACV (29 piscadas) - RESISTENCIA VÁLVULA CONTROLE AR", tipo: "RS" },
          { padrao: "3,6 a 4,4 V", localizacao: "SENSOR TBM (54 piscadas) - TENSÃO HORIZONTAL", tipo: "SN" },
          { padrao: "0,7 a 1,3 V", localizacao: "SENSOR TBM (54 piscadas) - TENSÃO INCLINAÇÃO", tipo: "SN" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "300 kPa (3,1 kgf/cm2, 44 psi)", localizacao: "PRESSÃO DO COMBUSTÍVEL EM MARCHA LENTA", tipo: "PR" },
          { padrao: "55,6 ml mínimo/10 segundos", localizacao: "FLUXO DO COMBUSTÍVEL (VAZÃO BOMBA)", tipo: "VZ" },
          { padrao: "6 - 10 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - CHEIO", tipo: "RS" },
          { padrao: "90 - 100 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - VAZIO", tipo: "RS" }
        ]
      },
      {
        name: "LUBRIFICANTES E FLUIDOS",
        rows: [
          { padrao: "0,7 litro", localizacao: "ÓLEO MOTOR 10W-30 SJ (DRENAGEM)", tipo: "-" },
          { padrao: "0,9 litro", localizacao: "ÓLEO MOTOR 10W-30 SJ (DESMONTAGEM TOTAL)", tipo: "-" },
          { padrao: "60,5 ml", localizacao: "ÓLEO BENGALA 10W (CADA LADO)", tipo: "-" }
        ]
      }
    ]
  },
  {
    id: "honda-biz-125-2016-2017",
    name: "BIZ 125 | 2016...2017",
    tables: [
      {
        name: "MOTOR E VÁLVULAS",
        rows: [
          { padrao: "1.300 kPa A 600 rpm", localizacao: "COMPRESSÃO DO CILINDRO", tipo: "PR" },
          { padrao: "0,10 ± 0,02 mm", localizacao: "FOLGA VÁLVULA - ADMISSÃO", tipo: "MM" },
          { padrao: "0,10 ± 0,02 mm", localizacao: "FOLGA VÁLVULA - ESCAPE", tipo: "MM" }
        ]
      },
      {
        name: "ESTATOR",
        notes: "fio branco e fio verde",
        rows: [
          { padrao: "20V (mínimo)", localizacao: "MARCHA LENTA (multímetro 200V~)", tipo: "AL" },
          { padrao: "120V (mínimo)", localizacao: "5.000 RPM (multímetro 200V~)", tipo: "AL" },
          { padrao: "0,2 - 1,2 Ω", localizacao: "RESISTÊNCIA DA BOBINA DE CARGA 20ºC", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE IGNIÇÃO",
        rows: [
          { padrao: "0,001 mA máximo", localizacao: "TESTE FUGA CORRENTE", tipo: "-" },
          { padrao: "100V MÍNIMO", localizacao: "PICO DE VOLTAGEM DA BOBINA DE IGNIÇÃO", tipo: "PV" },
          { padrao: "2,1 - 5,2 Ω", localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - PRIMÁRIO", tipo: "RS" },
          { padrao: "7,8 - 12,6 KΩ", localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - SECUNDÁRIO", tipo: "RS" },
          { padrao: "0,7V MÍNIMO", localizacao: "PICO DE VOLTAGEM DO SENSOR CKP", tipo: "PV" },
          { padrao: "192 - 288 Ω", localizacao: "RESISTÊNCIA DO SENSOR CKP A 20ºC", tipo: "RS" },
          { padrao: "3,7 - 6,2 KΩ a 20ºC", localizacao: "RESISTÊNCIA DO CACHIMBO DE VELA", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE INJEÇÃO",
        rows: [
          { padrao: "2,6 - 3,2 V / 5V", localizacao: "MAP (1 piscada) - TENSÃO DE SAÍDA / ALIMENTAÇÃO", tipo: "SN/AL" },
          { padrao: "2,5 - 2,8 KΩ", localizacao: "EOT (7 piscadas) - 20ºC", tipo: "RS" },
          { padrao: "0,21 - 0,23 KΩ", localizacao: "EOT (7 piscadas) - 100ºC", tipo: "RS" },
          { padrao: "0,29 A 0,71 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO DE SAÍDA MARCHA LENTA", tipo: "SN" },
          { padrao: "4,13 A 4,76 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO SAÍDA BORBOLETA ABERTA", tipo: "SN" },
          { padrao: "2,7 - 3,1 V / 5V", localizacao: "IAT (9 piscadas) - TENSÃO DE SAÍDA / ALIMENTAÇÃO", tipo: "SN/AL" },
          { padrao: "1 - 4 KΩ a 20ºC", localizacao: "IAT - RESISTÊNCIA", tipo: "RS" },
          { padrao: "11 - 13 Ω", localizacao: "BICO INJETOR (12 piscadas) - RESISTÊNCIA 24ºC", tipo: "RS" },
          { padrao: "3,0 BAR / 7 ml", localizacao: "TESTE INJETOR COMBUSTÍVEL - PRESSÃO / VAZÃO (11.000 RPM)", tipo: "PR/VZ" },
          { padrao: "100mV - 900mV", localizacao: "SENSOR O² (21 piscadas) - TENSÃO DE SAÍDA", tipo: "SN" },
          { padrao: "13 - 19 Ω 20ºC", localizacao: "SENSOR O² (21 piscadas) - RESISTÊNCIA", tipo: "RS" },
          { padrao: "110 - 150 Ω (20ºC)", localizacao: "IACV (29 piscadas) - RESISTENCIA VÁLVULA CONTROLE AR", tipo: "RS" },
          { padrao: "PULSOS 0V A 5V", localizacao: "SENSOR VELOCIMETRO - GIRO LENTO RODA TRAS", tipo: "SN" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "263 a 322 kPa", localizacao: "PRESSÃO DO COMBUSTÍVEL EM MARCHA LENTA", tipo: "PR" },
          { padrao: "115 ml mínimo/10 segundos", localizacao: "FLUXO DO COMBUSTÍVEL (VAZÃO BOMBA)", tipo: "VZ" },
          { padrao: "7 - 9 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - CHEIO", tipo: "RS" },
          { padrao: "117 - 123 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - VAZIO", tipo: "RS" }
        ]
      },
      {
        name: "LUBRIFICANTES E FLUIDOS",
        rows: [
          { padrao: "0,7 litro", localizacao: "ÓLEO MOTOR 10W-30 SJ (DRENAGEM)", tipo: "-" },
          { padrao: "0,9 litro", localizacao: "ÓLEO MOTOR 10W-30 SJ (DESMONTAGEM TOTAL)", tipo: "-" },
          { padrao: "60,5 ml", localizacao: "ÓLEO BENGALA 10W (CADA LADO)", tipo: "-" }
        ]
      }
    ]
  },
  {
    id: "honda-biz-125-2018-2023",
    name: "BIZ 125 | 2018...2023",
    tables: [
      {
        name: "MOTOR E VÁLVULAS",
        rows: [
          { padrao: "1.300 kPa A 600 rpm", localizacao: "COMPRESSÃO DO CILINDRO", tipo: "PR" },
          { padrao: "0,10 ± 0,02 mm", localizacao: "FOLGA VÁLVULA - ADMISSÃO", tipo: "MM" },
          { padrao: "0,10 ± 0,02 mm", localizacao: "FOLGA VÁLVULA - ESCAPE", tipo: "MM" }
        ]
      },
      {
        name: "ESTATOR",
        notes: "fio branco e fio verde",
        rows: [
          { padrao: "20V (mínimo)", localizacao: "MARCHA LENTA (multímetro 200V~)", tipo: "AL" },
          { padrao: "120V (mínimo)", localizacao: "5.000 RPM (multímetro 200V~)", tipo: "AL" },
          { padrao: "0,2 - 1,2 Ω", localizacao: "RESISTÊNCIA DA BOBINA DE CARGA 20ºC", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE IGNIÇÃO",
        rows: [
          { padrao: "0,18 mA máximo", localizacao: "TESTE FUGA CORRENTE", tipo: "-" },
          { padrao: "100V MÍNIMO", localizacao: "PICO DE VOLTAGEM DA BOBINA DE IGNIÇÃO", tipo: "PV" },
          { padrao: "2,1 - 5,2 Ω", localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - PRIMÁRIO", tipo: "RS" },
          { padrao: "7,8 - 12,6 KΩ", localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - SECUNDÁRIO", tipo: "RS" },
          { padrao: "0,7V MÍNIMO", localizacao: "PICO DE VOLTAGEM DO SENSOR CKP", tipo: "PV" },
          { padrao: "192 - 288 Ω", localizacao: "RESISTÊNCIA DO SENSOR CKP A 20ºC", tipo: "RS" },
          { padrao: "3,7 - 6,2 KΩ a 20ºC", localizacao: "RESISTÊNCIA DO CACHIMBO DE VELA", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE INJEÇÃO",
        rows: [
          { padrao: "2,6 - 3,2 V / 5V", localizacao: "MAP (1 piscada) - TENSÃO DE SAÍDA / ALIMENTAÇÃO", tipo: "SN/AL" },
          { padrao: "2,5 - 2,8 KΩ", localizacao: "EOT (7 piscadas) - 20ºC", tipo: "RS" },
          { padrao: "0,21 - 0,23 KΩ", localizacao: "EOT (7 piscadas) - 100ºC", tipo: "RS" },
          { padrao: "0,29 A 0,71 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO DE SAÍDA MARCHA LENTA", tipo: "SN" },
          { padrao: "4,13 A 4,76 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO SAÍDA BORBOLETA ABERTA", tipo: "SN" },
          { padrao: "2,7 - 3,1 V / 5V", localizacao: "IAT (9 piscadas) - TENSÃO DE SAÍDA / ALIMENTAÇÃO", tipo: "SN/AL" },
          { padrao: "1 - 4 KΩ a 20ºC", localizacao: "IAT - RESISTÊNCIA", tipo: "RS" },
          { padrao: "11 - 13 Ω", localizacao: "BICO INJETOR (12 piscadas) - RESISTÊNCIA 24ºC", tipo: "RS" },
          { padrao: "3,0 BAR / 7 ml", localizacao: "TESTE INJETOR COMBUSTÍVEL - PRESSÃO / VAZÃO (11.000 RPM)", tipo: "PR/VZ" },
          { padrao: "100mV - 900mV", localizacao: "SENSOR O² (21 piscadas) - TENSÃO DE SAÍDA", tipo: "SN" },
          { padrao: "13 - 19 Ω 20ºC", localizacao: "SENSOR O² (21 piscadas) - RESISTÊNCIA", tipo: "RS" },
          { padrao: "110 - 150 Ω (20ºC)", localizacao: "IACV (29 piscadas) - RESISTENCIA VÁLVULA CONTROLE AR", tipo: "RS" },
          { padrao: "PULSOS 0V A 5V", localizacao: "SENSOR VELOCIMETRO - GIRO LENTO RODA TRAS", tipo: "SN" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "263 a 322 kPa", localizacao: "PRESSÃO DO COMBUSTÍVEL EM MARCHA LENTA", tipo: "PR" },
          { padrao: "115 ml mínimo/10 segundos", localizacao: "FLUXO DO COMBUSTÍVEL (VAZÃO BOMBA)", tipo: "VZ" },
          { padrao: "7 - 9 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - CHEIO", tipo: "RS" },
          { padrao: "117 - 123 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - VAZIO", tipo: "RS" }
        ]
      },
      {
        name: "LUBRIFICANTES E FLUIDOS",
        rows: [
          { padrao: "0,7 litro", localizacao: "ÓLEO MOTOR 10W-30 SJ (DRENAGEM)", tipo: "-" },
          { padrao: "0,9 litro", localizacao: "ÓLEO MOTOR 10W-30 SJ (DESMONTAGEM TOTAL)", tipo: "-" },
          { padrao: "55 ml", localizacao: "ÓLEO BENGALA 10W (CADA LADO)", tipo: "-" }
        ]
      }
    ]
  },
  {
    id: "honda-cb-250f-twister-2016-2018",
    name: "CB 250F TWISTER | 2016...2018",
    tables: [
      {
        name: "MOTOR E VÁLVULAS",
        rows: [
          { padrao: "1.196 kPa a 500 rpm", localizacao: "COMPRESSÃO DO CILINDRO", tipo: "PR" },
          { padrao: "0,10 ± 0,03 mm", localizacao: "FOLGA VÁLVULA - ADMISSÃO", tipo: "MM" },
          { padrao: "0,15 ± 0,03 mm", localizacao: "FOLGA VÁLVULA - ESCAPE", tipo: "MM" }
        ]
      },
      {
        name: "ESTATOR",
        notes: "fio entre amarelos",
        rows: [
          { padrao: "20V (mínimo)", localizacao: "MARCHA LENTA (multímetro 200V~)", tipo: "AL" },
          { padrao: "130V (mínimo)", localizacao: "5.000 RPM (multímetro 200V~)", tipo: "AL" },
          { padrao: "0,1 - 1,0 Ω", localizacao: "RESISTÊNCIA DA BOBINA DE CARGA 20ºC", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE IGNIÇÃO",
        rows: [
          { padrao: "1,4 mA máximo", localizacao: "TESTE FUGA CORRENTE", tipo: "-" },
          { padrao: "100V MÍNIMO", localizacao: "PICO DE VOLTAGEM DA BOBINA DE IGNIÇÃO", tipo: "PV" },
          { padrao: "0,7V MÍNIMO", localizacao: "PICO DE VOLTAGEM DO SENSOR CKP", tipo: "PV" },
          { padrao: "3,7 - 6,2 KΩ a 20ºC", localizacao: "RESISTÊNCIA DO CACHIMBO DE VELA", tipo: "RS" }
        ]
      },
      {
        name: "SISTEMA DE INJEÇÃO",
        rows: [
          { padrao: "2,5 - 2,8 KΩ", localizacao: "EOT (7 piscadas) - 20ºC", tipo: "RS" },
          { padrao: "0,211 - 0,220 KΩ", localizacao: "EOT (7 piscadas) - 100ºC", tipo: "RS" },
          { padrao: "0,29 a 0,71 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO DE SAÍDA MARCHA LENTA", tipo: "SN" },
          { padrao: "4,13 a 4,76 V", localizacao: "TP/TPS (8 piscadas) - TENSÃO SAÍDA BORBOLETA ABERTA", tipo: "SN" },
          { padrao: "5V", localizacao: "IAT (9 piscadas) - ALIMENTAÇÃO", tipo: "AL" },
          { padrao: "1 - 1,3 KΩ a 40ºC", localizacao: "IAT (9 piscadas) - RESISTÊNCIA", tipo: "RS" },
          { padrao: "11 - 13 Ω", localizacao: "BICO INJETOR (12 piscadas) - RESISTÊNCIA 24ºC", tipo: "RS" },
          { padrao: "3,0 BAR / 27 ml", localizacao: "TESTE INJETOR COMBUSTÍVEL - PRESSÃO / VAZÃO (11.000 RPM)", tipo: "PR/VZ" },
          { padrao: "100mV - 900mV", localizacao: "SENSOR O² (21 piscadas) - TENSÃO DE SAÍDA", tipo: "SN" },
          { padrao: "6,7 - 9,5 Ω 20ºC", localizacao: "SENSOR O² (21 piscadas) - RESISTÊNCIA", tipo: "RS" },
          { padrao: "90 - 130 Ω (25ºC)", localizacao: "IACV (29 piscadas) - RESISTENCIA VÁLVULA CONTROLE AR", tipo: "RS" },
          { padrao: "3,6 a 4,4 V", localizacao: "SENSOR TBM (54 piscadas) - TENSÃO HORIZONTAL", tipo: "SN" },
          { padrao: "(INCLINAÇÃO 55º) 0,7 a 1,3 V", localizacao: "SENSOR TBM (54 piscadas) - TENSÃO INCLINAÇÃO", tipo: "SN" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "266 a 317 kPa", localizacao: "PRESSÃO DO COMBUSTÍVEL EM MARCHA LENTA", tipo: "PR" },
          { padrao: "98 ml mínimo/10 segundos", localizacao: "FLUXO DO COMBUSTÍVEL (VAZÃO BOMBA)", tipo: "VZ" },
          { padrao: "7 - 9 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - CHEIO", tipo: "RS" },
          { padrao: "267 - 273 Ω", localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL (20ºC) - VAZIO", tipo: "RS" }
        ]
      },
      {
        name: "LUBRIFICANTES E FLUIDOS",
        rows: [
          { padrao: "1,3 litro", localizacao: "ÓLEO MOTOR 10W-30 SL (DRENAGEM)", tipo: "-" },
          { padrao: "1,4 litro", localizacao: "ÓLEO MOTOR 10W-30 SL (SUBSTITUIÇÃO FILTRO)", tipo: "-" },
          { padrao: "1,8 litro", localizacao: "ÓLEO MOTOR 10W-30 SL (DESMONTAGEM TOTAL)", tipo: "-" },
          { padrao: "306 ml", localizacao: "ÓLEO BENGALA 10W (CADA LADO)", tipo: "-" }
        ]
      }
    ]
  }
];
