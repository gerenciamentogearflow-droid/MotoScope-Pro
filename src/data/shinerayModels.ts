import { DiagnosticModel } from "../types";

export const shinerayModels: DiagnosticModel[] = [
  {
    id: "jet-125-ss",
    name: "JET 125 SS EFI (MOTION) | 2024",
    tables: [
      {
        name: "MAP",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Vd/Pt + | Vd/Bc -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Mr/Br | Terra", tipo: "CC", enc: "" },
          { padrao: "3,60 - 4,30 V", localizacao: "Mr/Br + | Vd/Bc -", tipo: "SN", enc: "" },
          { padrao: "4,40 - 6,25 V", localizacao: "Mr/Br + | Vd/Bc -", tipo: "VS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 16", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Bc | Pino 10", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Mr/Br | Pino 11", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "EOT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Vd/Vm + | Vd/Bc -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Vd/Vm | Terra", tipo: "CC", enc: "" },
          { padrao: "2,5 - 2,8 kΩ", localizacao: "Vd/Vm | Vd/Bc", tipo: "RS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Vm | Pino 14", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Bc | Pino 10", tipo: "CA", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Pino 10- | Pino 14+", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "TPS",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Vd/Pt + | Vd/Bc -", tipo: "AL", enc: "" },
          { padrao: "0,41 - 0,83 V", localizacao: "Vd/Az | Vd/Bc", tipo: "SN", enc: "" },
          { padrao: "3,36 - 3,99 V", localizacao: "Vd/Az | Vd/Bc", tipo: "SN", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Vd/Az | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Bc | Pino 10", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 16", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Az | Pino 12", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IAT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Az/Vm + | Vd/Bc -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Az/Vm + | Terra", tipo: "CC", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Az/Vm + | Vd/Bc -", tipo: "SN", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Az/Vm | Pino 08", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Bc | Pino 10", tipo: "CA", enc: "" },
          { padrao: "1 - 4 kΩ |20ºC", localizacao: "Az/Vm | Vd/Bc", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BICO INJETOR",
        rows: [
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Az | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Lr/Vm | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Lr/Vm | Pino 05", tipo: "CA", enc: "" },
          { padrao: "11 - 13 Ω |20ºC", localizacao: "Teste no Atuador", tipo: "RS", enc: "" },
          { padrao: "Pulso", localizacao: "Lr/Vm", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "SENSOR OXIGÊNIO",
        notes: "Aqueça a moto até 80ºC",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Vd/Cz | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Cz | Pino 17", tipo: "CA", enc: "" },
          { padrao: "0,1 á 0,9 V Osc.", localizacao: "Vd/Cz | Terra", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "AQUECEDOR SENSOR OXIGÊNIO",
        rows: [
          { padrao: "13 - 19 Ω |20ºC", localizacao: "Bc | Bc", tipo: "RS", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Az/Bc + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Az + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Az/Bc | Pino 7", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IACV",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Mr | Mr/Am | Pt/Cz | Ac", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 01 | Mr/Am", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 11 | Pt/Cz", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 12 | Ac", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 13 | Mr", tipo: "CA", enc: "" },
          { padrao: "Contín. (N)", localizacao: "A + D", tipo: "CC", enc: "" },
          { padrao: "Contín. (N)", localizacao: "B + C", tipo: "CC", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "A + B", tipo: "RS", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "C + D", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "Volt.Bat.-1,1V", localizacao: "Br/Am + | Terra", tipo: "AL", enc: "" },
          { padrao: "2,5 - 3,3 bar", localizacao: "Manômetro", tipo: "PR", enc: "" }
        ]
      }
    ]
  },
  {
    id: "rio-125",
    name: "RIO 125 EFI (YESON) | 2025",
    tables: [
      {
        name: "MAP",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Vc + | Vd/Pt -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Mr/Vm | Terra", tipo: "CC", enc: "" },
          { padrao: "3,60 - 4,30 V", localizacao: "Mr/Vm + | Vd/Pt -", tipo: "SN", enc: "" },
          { padrao: "4,40 - 6,25 V", localizacao: "Mr/Vm + | Vd/Pt -", tipo: "VS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vc | Pino 17", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 32", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Mr/Vm | Pino 34", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "EOT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Rs/Bc + | Vd/Bc -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Rs/Bc | Terra", tipo: "CC", enc: "" },
          { padrao: "2,5 - 2,8 kΩ", localizacao: "Rs/Bc | Vd/Bc", tipo: "RS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Rs/Bc | Pino 30", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Bc | Pino 15", tipo: "CA", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Pino 15- | Pino 30+", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "TPS",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Vc + | Vd/Pt -", tipo: "AL", enc: "" },
          { padrao: "0,41 - 0,83 V", localizacao: "Vm/Bc | Vd/Pt", tipo: "SN", enc: "" },
          { padrao: "3,36 - 3,99 V", localizacao: "Vm/Bc | Vd/Pt", tipo: "SN", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Vm/Bc | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vc | Pino 17", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 32", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vm/Bc | Pino 29", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IAT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Mr/Bc + | Vd/Pt -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Mr/Bc + | Terra", tipo: "CC", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Mr/Bc + | Vd/Pt -", tipo: "SN", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Mr/Bc | Pino 31", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 32", tipo: "CA", enc: "" },
          { padrao: "1 - 4 kΩ |20ºC", localizacao: "Mr/Bc | Vd/Pt", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BICO INJETOR",
        rows: [
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Pt | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Cz/Vm | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Cz/Vm | Pino 07", tipo: "CA", enc: "" },
          { padrao: "11 - 13 Ω |20ºC", localizacao: "Teste no Atuador", tipo: "RS", enc: "" },
          { padrao: "Pulso", localizacao: "Cz/Vm", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "SENSOR OXIGÊNIO",
        notes: "Aqueça a moto até 80ºC",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Lr/Br | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Lr/Br | Pino 33", tipo: "CA", enc: "" },
          { padrao: "0,1 á 0,9 V Osc.", localizacao: "Lr/Br | Terra", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "AQUECEDOR SENSOR OXIGÊNIO",
        rows: [
          { padrao: "13 - 19 Ω |20ºC", localizacao: "Bc | Bc", tipo: "RS", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Vm/Lr + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Cz/Bc + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Cz/Bc | Pino 8", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IACV",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Az | Mr/Pt | Mr/Am | Br", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 10 | Mr/Am", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 24 | Br", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 22 | Mr/Pt", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 04 | Az", tipo: "CA", enc: "" },
          { padrao: "Contín. (N)", localizacao: "A + D", tipo: "CC", enc: "" },
          { padrao: "Contín. (N)", localizacao: "B + C", tipo: "CC", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "A + B", tipo: "RS", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "C + D", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "Volt.Bat.-1,1V", localizacao: "Vm/Lr + | Terra", tipo: "AL", enc: "" },
          { padrao: "2,5 - 3,3 bar", localizacao: "Manômetro", tipo: "PR", enc: "" }
        ]
      }
    ]
  },
  {
    id: "free-150",
    name: "FREE 150 EFI (YESON) | 2025",
    tables: [
      {
        name: "MAP",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Am/Pt + | Ac/Am -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Lr/Vd | Terra", tipo: "CC", enc: "" },
          { padrao: "3,60 - 4,30 V", localizacao: "Lr/Vd + | Ac/Am -", tipo: "SN", enc: "" },
          { padrao: "4,40 - 6,25 V", localizacao: "Lr/Vd + | Ac/Am -", tipo: "VS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Ac/Am | Pino 32", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Lr/Vd | Pino 34", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Pt | Pino 17", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "EOT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Bc/Am + | Vd/Bc -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Bc/Am | Terra", tipo: "CC", enc: "" },
          { padrao: "2,5 - 2,8 kΩ", localizacao: "Bc/Am | Vd/Bc", tipo: "RS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Bc/Am | Pino 30", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Bc | Pino 15", tipo: "CA", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Pino 15- | Pino 30+", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "TPS",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Am/Pt + | Vd/Bc -", tipo: "AL", enc: "" },
          { padrao: "0,41 - 0,83 V", localizacao: "Bc/Vm | Vd/Bc", tipo: "SN", enc: "" },
          { padrao: "3,36 - 3,99 V", localizacao: "Bc/Vm | Vd/Bc", tipo: "SN", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Bc/Vm | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Bc/Vm | Pino 29", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Pt | Pino 17", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Bc | Pino 15", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IAT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Br/Vc + | Ac/Am -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Br/Vc + | Terra -", tipo: "CC", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Br/Vc + | Terra -", tipo: "SN", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br/Vc | Pino 31", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Ac/Am | Pino 32", tipo: "CA", enc: "" },
          { padrao: "1 - 4 kΩ |20ºC", localizacao: "Br/Vc | Ac/Am", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BICO INJETOR",
        rows: [
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Pt | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Rs | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Rs | Pino 07", tipo: "CA", enc: "" },
          { padrao: "11 - 13 Ω |20ºC", localizacao: "Teste no Atuador", tipo: "RS", enc: "" },
          { padrao: "Pulso", localizacao: "Rs", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "SENSOR OXIGÊNIO",
        notes: "Aqueça a moto até 80ºC",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Cz/Vm | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Cz/Vm | Pino 33", tipo: "CA", enc: "" },
          { padrao: "0,1 á 0,9 V Osc.", localizacao: "Cz/Vm | Terra", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "AQUECEDOR SENSOR OXIGÊNIO",
        rows: [
          { padrao: "13 - 19 Ω |20ºC", localizacao: "Bc | Bc", tipo: "RS", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Vm/Az + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Vm/Lr + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vm/Az | Pino 08", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IACV",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Pt/Vm | Vm/Vd | Vd/Az | Az/Vm", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 24 | Az/Vm", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 04 | Pt/Vm", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 22 | Vm/Vd", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 10 | Vd/Az", tipo: "CA", enc: "" },
          { padrao: "Contín. (N)", localizacao: "A + D", tipo: "CC", enc: "" },
          { padrao: "Contín. (N)", localizacao: "B + C", tipo: "CC", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "A + B", tipo: "RS", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "C + D", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "Volt.Bat.-1,1V", localizacao: "Vd/Lr + | Terra", tipo: "AL", enc: "" },
          { padrao: "2,5 - 3,3 bar", localizacao: "Manômetro", tipo: "PR", enc: "" },
          { padrao: "Pulso", localizacao: "Mr/Br", tipo: "PV", enc: "" }
        ]
      }
    ]
  },
  {
    id: "urban-150",
    name: "URBAN 150 EFI (BOSH 8.0) | 2025",
    tables: [
      {
        name: "MAP",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Vm/Az + | Pt/Az -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Pt/Rx | Terra", tipo: "CC", enc: "" },
          { padrao: "3,60 - 4,30 V", localizacao: "Pt/Rx + | Pt/Az -", tipo: "SN", enc: "" },
          { padrao: "4,40 - 6,25 V", localizacao: "Pt/Rx + | Pt/Az -", tipo: "VS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pt/Rx | Pino 21", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pt/Az | Pino 27", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vm/Az | Pino 15", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "EOT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Bc/Mr + | Pt/Az -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Bc/Mr | Terra", tipo: "CC", enc: "" },
          { padrao: "2,5 - 2,8 kΩ", localizacao: "Bc/Mr | Pt/Az", tipo: "RS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Bc/Mr | Pino 32", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pt/Az | Pino 27", tipo: "CA", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Pino 27- | Pino 32+", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "TPS",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Vm/Az + | Pt/Az -", tipo: "AL", enc: "" },
          { padrao: "0,41 - 0,83 V", localizacao: "Vm/Cz | Pt/Az", tipo: "SN", enc: "" },
          { padrao: "3,36 - 3,99 V", localizacao: "Vm/Cz | Pt/Az", tipo: "SN", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Vm/Cz | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vm/Cz | Pino 08", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pt/Az | Pino 27", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vm/Az | Pino 15", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IAT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Lr/Bc + | Pt/Az -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Lr/Bc + | Terra", tipo: "CC", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Lr/Bc + | Pt/Az -", tipo: "SN", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Lr/Bc | Pino 33", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pt/Az | Pino 27", tipo: "CA", enc: "" },
          { padrao: "1 - 4 kΩ |20ºC", localizacao: "Lr/Bc | Pt/Az", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BICO INJETOR",
        rows: [
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Am/Br | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Br/Vm | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br/Vm | Pino 12", tipo: "CA", enc: "" },
          { padrao: "11 - 13 Ω |20ºC", localizacao: "Teste no Atuador", tipo: "RS", enc: "" },
          { padrao: "Pulso", localizacao: "Br/Vm", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "SENSOR OXIGÊNIO",
        notes: "Aqueça a moto até 80ºC",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Bc/Cz | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Bc/Cz | Pino 20", tipo: "CA", enc: "" },
          { padrao: "0,1 á 0,9 V Osc.", localizacao: "Bc/Cz | Terra", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "AQUECEDOR SENSOR OXIGÊNIO",
        rows: [
          { padrao: "13 - 19 Ω |20ºC", localizacao: "Bc | Bc", tipo: "RS", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Am/Az + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Am/Br + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Az/Bc | Pino 01", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IACV",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Cz/Am | Am/Rx | Br/Pt | Br/Am", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 25 | Cz/Am", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 24 | Am/Rx", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 13 | Br/Pt", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 02 | Br/Am", tipo: "CA", enc: "" },
          { padrao: "Contín. (N)", localizacao: "A + D", tipo: "CC", enc: "" },
          { padrao: "Contín. (N)", localizacao: "B + C", tipo: "CC", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "A + B", tipo: "RS", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "C + D", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "VÁLVULA EVAP",
        rows: [
          { padrao: "Volt. Bateria", localizacao: "Am/Br | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Ac/Rx | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Ac/Rx | Pino 23", tipo: "CA", enc: "" },
          { padrao: "?? á ?? Ω 20 ºC", localizacao: "A - B", tipo: "RS", enc: "" },
          { padrao: "Pico (S)", localizacao: "Ac/Rx", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "Volt.Bat.-1,1V", localizacao: "Vm/Pt + | Terra", tipo: "AL", enc: "" },
          { padrao: "2,5 - 3,3 bar", localizacao: "Manômetro", tipo: "PR", enc: "" }
        ]
      }
    ]
  },
  {
    id: "jef-150",
    name: "JEF 150 EFI (BOSH 8.0) | 2025",
    tables: [
      {
        name: "MAP",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Vd/Pt + | Br/Vd -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Mr/Br | Terra", tipo: "CC", enc: "" },
          { padrao: "3,60 - 4,30 V", localizacao: "Mr/Vm + | Vd/Pt -", tipo: "SN", enc: "" },
          { padrao: "4,40 - 6,25 V", localizacao: "Mr/Vm + | Vd/Pt -", tipo: "VS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br/Vd | Pino 27", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 15", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Mr/Br | Pino 08", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "EOT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Br/Am + | Br/Vd -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Br/Am | Terra", tipo: "CC", enc: "" },
          { padrao: "2,5 - 2,8 kΩ", localizacao: "Br/Am | Br/Vd", tipo: "RS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br/Am | Pino 32", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br/Vd | Pino 27", tipo: "CA", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Pino 27- | Pino 32+", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "TPS",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Vd/Pt + | Br/Vd -", tipo: "AL", enc: "" },
          { padrao: "0,41 - 0,83 V", localizacao: "Vd/Az | Br/Vd", tipo: "SN", enc: "" },
          { padrao: "3,36 - 3,99 V", localizacao: "Vd/Az | Br/Vd", tipo: "SN", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Vd/Az | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br/Vd | Pino 27", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 15", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Az | Pino 21", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IAT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Br/Vm + | Br/Vd -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Br/Vm + | Terra", tipo: "CC", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Br/Vm + | Br/Vd -", tipo: "SN", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br/Vm | Pino 33", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br/Vd | Pino 27", tipo: "CA", enc: "" },
          { padrao: "1 - 4 kΩ |20ºC", localizacao: "Br/Vm | Br/Vd", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BICO INJETOR",
        rows: [
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Rs | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Am/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Pt | Pino 12", tipo: "CA", enc: "" },
          { padrao: "11 - 13 Ω |20ºC", localizacao: "Teste no Atuador", tipo: "RS", enc: "" },
          { padrao: "Pulso", localizacao: "Am/Pt", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "SENSOR OXIGÊNIO",
        notes: "Aqueça a moto até 80ºC",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Vm/Az | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vm/Az | Pino 01", tipo: "CA", enc: "" },
          { padrao: "0,1 á 0,9 V Osc.", localizacao: "Vm/Az | Terra", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "AQUECEDOR SENSOR OXIGÊNIO",
        rows: [
          { padrao: "13 - 19 Ω |20ºC", localizacao: "Bc | Bc", tipo: "RS", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Rs + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Vm/Pt + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vm/Pt | Pino 20", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IACV",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Am/Az | Pt/Vm | Mr/Vm | Vm/Vd", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 13 | Am/Az", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 25 | Pt/Vm", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 24 | Mr/Vm", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 02 | Vm/Vd", tipo: "CA", enc: "" },
          { padrao: "Contín. (N)", localizacao: "A + D", tipo: "CC", enc: "" },
          { padrao: "Contín. (N)", localizacao: "B + C", tipo: "CC", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "A + B", tipo: "RS", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "C + D", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "Volt.Bat.-1,1V", localizacao: "Vm/Lr + | Terra", tipo: "AL", enc: "" },
          { padrao: "2,5 - 3,3 bar", localizacao: "Manômetro", tipo: "PR", enc: "" }
        ]
      }
    ]
  },
  {
    id: "shi-175",
    name: "SHI 175 EFI (YESON) | 2025",
    tables: [
      {
        name: "MAP",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Vc + | Vd/Pt -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Rs/Vd | Terra", tipo: "CC", enc: "" },
          { padrao: "3,60 - 4,30 V", localizacao: "Rs/Vd + | Vc -", tipo: "SN", enc: "" },
          { padrao: "4,40 - 6,25 V", localizacao: "Rs/Vd + | Vc -", tipo: "VS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vc | Pino 32", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Rs/Vd | Pino 34", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vc | Pino 17", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "EOT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Bc/Pt + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Bc/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "2,5 - 2,8 kΩ", localizacao: "Bc/Pt | Vd/Bc", tipo: "RS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Bc/Pt | Pino 30", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Bc | Pino 15", tipo: "CA", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Pino 15- | Pino 30+", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "TPS",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Vm/Bc + | Terra -", tipo: "AL", enc: "" },
          { padrao: "0,41 - 0,83 V", localizacao: "Vm/Bc | Vd/Bc", tipo: "SN", enc: "" },
          { padrao: "3,36 - 3,99 V", localizacao: "Vm/Bc | Vd/Bc", tipo: "SN", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Vm/Bc | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Rs/Bc | Pino 29", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vc | Pino 17", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vc | Pino 15", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IAT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Vm/Bc + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Mr/Bc + | Terra", tipo: "CC", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Mr/Bc + | Vc -", tipo: "SN", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Mr/Bc | Pino 31", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vc | Pino 32", tipo: "CA", enc: "" },
          { padrao: "1 - 4 kΩ |20ºC", localizacao: "Mr/Bc | Vc", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BICO INJETOR",
        rows: [
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Rx | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Lr/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Lr/Pt | Pino 07", tipo: "CA", enc: "" },
          { padrao: "11 - 13 Ω |20ºC", localizacao: "Teste no Atuador", tipo: "RS", enc: "" },
          { padrao: "Pulso", localizacao: "Lr/Pt", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "SENSOR OXIGÊNIO",
        notes: "Aqueça a moto até 80ºC",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Vd/Am | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Am | Pino 33", tipo: "CA", enc: "" },
          { padrao: "0,1 á 0,9 V Osc.", localizacao: "Vd/Am | Terra", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "AQUECEDOR SENSOR OXIGÊNIO",
        rows: [
          { padrao: "13 - 19 Ω |20ºC", localizacao: "Bc | Bc", tipo: "RS", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Rx + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Vd/Az + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Rx | Pino 9", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Az | Pino 8", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IACV",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Cz/Az | Mr/Am | Am/Cz | Am/Vd", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 22 | Mr/Am", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 4 | Cz/Az", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 10 | Am/Cz", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 24 | Am/Vd", tipo: "CA", enc: "" },
          { padrao: "Contín. (N)", localizacao: "A + D", tipo: "CC", enc: "" },
          { padrao: "Contín. (N)", localizacao: "B + C", tipo: "CC", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "A + B", tipo: "RS", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "C + D", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "Volt.Bat.-1,1V", localizacao: "Mr/Vd + | Terra", tipo: "AL", enc: "" },
          { padrao: "2,5 - 3,3 bar", localizacao: "Manômetro", tipo: "PR", enc: "" }
        ]
      }
    ]
  },
  {
    id: "storm-200",
    name: "STORM 200 EFI (LIFAN 9.1) | 2025",
    tables: [
      {
        name: "MAP",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Az/Vm + | Terra-", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Vm/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "3,60 - 4,30 V", localizacao: "Rs/Vd + | Vc -", tipo: "SN", enc: "" },
          { padrao: "4,40 - 6,25 V", localizacao: "Rs/Vd + | Vc -", tipo: "VS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Az/Vm | Pino 08", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 19", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vm/Pt | Pino 07", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "ECT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Lr/Pt + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Lr/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "2,5 - 2,8 kΩ", localizacao: "Lr/Pt | Vd/Pt", tipo: "RS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Lr/Pt | Pino 18", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 19", tipo: "CA", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Pino 19- | Pino 18+", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "TPS",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Az/Vm + | Terra-", tipo: "AL", enc: "" },
          { padrao: "0,41 - 0,83 V", localizacao: "Am/Pt | Vd/Pt", tipo: "SN", enc: "" },
          { padrao: "3,36 - 3,99 V", localizacao: "Am/Pt | Vd/Pt", tipo: "SN", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Am/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Pt | Pino 06", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 19", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Az/Vm | Pino 08", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IAT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Am/Vm+ | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Am/Vm+ | Terra", tipo: "CC", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Am/Vm+ | Vd/Pt -", tipo: "SN", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Vm | Pino 29", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 19", tipo: "CA", enc: "" },
          { padrao: "1 - 4 kΩ |20ºC", localizacao: "Am/Vm | Vd/Pt", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BICO INJETOR",
        rows: [
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Br/Vm | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Mr/Bc | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Mr/Bc | Pino 31", tipo: "CA", enc: "" },
          { padrao: "11 - 13 Ω |20ºC", localizacao: "Teste no Atuador", tipo: "RS", enc: "" },
          { padrao: "Pulso", localizacao: "Mr/Bc", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "SENSOR OXIGÊNIO",
        notes: "Aqueça a moto até 80ºC",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Mr/Am | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Mr/Am | Pino 03", tipo: "CA", enc: "" },
          { padrao: "0,1 á 0,9 V Osc.", localizacao: "Mr/Am | Terra", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "AQUECEDOR SENSOR OXIGÊNIO",
        rows: [
          { padrao: "13 - 19 Ω |20ºC", localizacao: "Bc | Bc", tipo: "RS", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Br/Vm + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Br + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br | Pino 28", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IACV",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Am/Bc | Az | Vc/Vm | Br/Pt", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 01 | Am/Bc", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 13 | Az", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 24 | Vc/Vm", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 02 | Br/Pt", tipo: "CA", enc: "" },
          { padrao: "Contín. (N)", localizacao: "A + D", tipo: "CC", enc: "" },
          { padrao: "Contín. (N)", localizacao: "B + C", tipo: "CC", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "A + B", tipo: "RS", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "C + D", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "Volt.Bat.-1,1V", localizacao: "Vm/Bc+ | Terra", tipo: "AL", enc: "" },
          { padrao: "2,5 - 3,3 bar", localizacao: "Manômetro", tipo: "PR", enc: "" }
        ]
      }
    ]
  },
  {
    id: "shi-250",
    name: "SHI 250 EFI (YESON) | 2025",
    tables: [
      {
        name: "MAP",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Am/Pt + | Terra-", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Am/Vm | Terra", tipo: "CC", enc: "" },
          { padrao: "3,60 - 4,30 V", localizacao: "Am/Vm + | Cz -", tipo: "SN", enc: "" },
          { padrao: "4,40 - 6,25 V", localizacao: "Am/Vm + | Cz -", tipo: "VS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Cz | Pino 32", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Vm | Pino 34", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Pt | Pino 17", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "EOT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Rs/Az+ | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Rs/Az | Terra", tipo: "CC", enc: "" },
          { padrao: "2,5 - 2,8 kΩ", localizacao: "Rs/Az | Vd/Bc", tipo: "RS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Rs/Az | Pino 30", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Bc | Pino 15", tipo: "CA", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Pino 15- | Pino 30+", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "TPS",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Am/Pt + | Terra -", tipo: "AL", enc: "" },
          { padrao: "0,41 - 0,83 V", localizacao: "Br/Vd | Vd/Bc", tipo: "SN", enc: "" },
          { padrao: "3,36 - 3,99 V", localizacao: "Br/Vd | Vd/Bc", tipo: "SN", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Br/Vd | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Bc | Pino 15", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br/Vd | Pino 29", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Pt | Pino 17", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IAT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Am/Br + | Cz -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Am/Br + | Terra", tipo: "CC", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Am/Br + | Cz -", tipo: "SN", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Br | Pino 31", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Cz | Pino 32", tipo: "CA", enc: "" },
          { padrao: "1 - 4 kΩ |20ºC", localizacao: "Mr/Bc | Cz", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BICO INJETOR",
        rows: [
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Pt | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Rx/Am | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Rx/Am | Pino 07", tipo: "CA", enc: "" },
          { padrao: "11 - 13 Ω |20ºC", localizacao: "Teste no Atuador", tipo: "RS", enc: "" },
          { padrao: "Pulso", localizacao: "Rx/Am", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "SENSOR OXIGÊNIO",
        notes: "Aqueça a moto até 80ºC",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Bc/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Bc/Pt | Pino 33", tipo: "CA", enc: "" },
          { padrao: "0,1 á 0,9 V Osc.", localizacao: "Bc/Pt | Terra", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "AQUECEDOR SENSOR OXIGÊNIO",
        rows: [
          { padrao: "13 - 19 Ω |20ºC", localizacao: "Bc | Bc", tipo: "RS", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Vm/Bc + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Vd/Az + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Az | Pino 08", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vm/Br | Pino 09", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IACV",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Pt/Vm | Mr/Vd | Mr/Vm | Az/Vm", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 22 | Mr/Vd", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 04 | Pt/Vm", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 10 | Mr/Vm", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 24 | Az/Vm", tipo: "CA", enc: "" },
          { padrao: "Contín. (N)", localizacao: "A + D", tipo: "CC", enc: "" },
          { padrao: "Contín. (N)", localizacao: "B + C", tipo: "CC", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "A + B", tipo: "RS", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "C + D", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "Volt.Bat.-1,1V", localizacao: "Vm/Br+ | Terra", tipo: "AL", enc: "" },
          { padrao: "2,5 - 3,3 bar", localizacao: "Manômetro", tipo: "PR", enc: "" }
        ]
      }
    ]
  },
  {
    id: "flash-250",
    name: "FLASH 250 F EFI (BOSH 8.0) | 2025",
    tables: [
      {
        name: "MAP",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Az/Am + | Pt/Az -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Az/Rs | Terra", tipo: "CC", enc: "" },
          { padrao: "3,60 - 4,30 V", localizacao: "Az/Rs + | Pt/Az -", tipo: "SN", enc: "" },
          { padrao: "4,40 - 6,25 V", localizacao: "Az/Rs + | Pt/Az -", tipo: "VS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pt/Az | Pino 27", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "EOT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Br/Mr + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Br/Mr | Terra", tipo: "CC", enc: "" },
          { padrao: "2,5 - 2,8 kΩ", localizacao: "Br/Mr | Pt/Az", tipo: "RS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br/Mr | Pino 32", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pt/Az | Pino 27", tipo: "CA", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Pino 32- | Pino 27+", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "TPS",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Az/Am + | Pt/Az -", tipo: "AL", enc: "" },
          { padrao: "0,41 - 0,83 V", localizacao: "Pt/Br | Pt/Az", tipo: "SN", enc: "" },
          { padrao: "3,36 - 3,99 V", localizacao: "Pt/Br | Pt/Az", tipo: "SN", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Pt/Br | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pt/Az | Pino 27", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pt/Br | Pino 15", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IAT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Pt/Rx + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Pt/Rx + | Terra", tipo: "CC", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Pt/Rx + | Pt/Az -", tipo: "SN", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pt/Rx | Pino 33", tipo: "CA", enc: "" },
          { padrao: "1 - 4 kΩ |20ºC", localizacao: "Pt/Rx | Pt/Az", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BICO INJETOR",
        rows: [
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Am/Br | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Br/Rx | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br/Rx | Pino 12", tipo: "CA", enc: "" },
          { padrao: "11 - 13 Ω |20ºC", localizacao: "Teste no Atuador", tipo: "RS", enc: "" },
          { padrao: "Pulso", localizacao: "Br/Rx", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "SENSOR OXIGÊNIO",
        notes: "Aqueça a moto até 80ºC",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Am/Vd | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Vd | Pino 01", tipo: "CA", enc: "" },
          { padrao: "0,1 á 0,9 V Osc.", localizacao: "Am/Vd | Terra", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "AQUECEDOR SENSOR OXIGÊNIO",
        rows: [
          { padrao: "13 - 19 Ω |20ºC", localizacao: "Bc | Bc", tipo: "RS", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Am/Br + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Mr/Am + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pt/Az | Pino 27", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IACV",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Cz/Am | Br/Am | Am/Rx | Mr/Pt", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 02 | Br/Am", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 13 | Mr/Pt", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 24 | Am/Rx", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 25 | Cz/Am", tipo: "CA", enc: "" },
          { padrao: "Contín. (N)", localizacao: "A + D", tipo: "CC", enc: "" },
          { padrao: "Contín. (N)", localizacao: "B + C", tipo: "CC", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "A + B", tipo: "RS", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "C + D", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "Volt.Bat.-1,1V", localizacao: "Vm/Pt + | Terra", tipo: "AL", enc: "" },
          { padrao: "2,5 - 3,3 bar", localizacao: "Manômetro", tipo: "PR", enc: "" }
        ]
      }
    ]
  },
  {
    id: "iron-250",
    name: "IRON 250 EFI (LIFAN 9.1) | 2025",
    tables: [
      {
        name: "MAP",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Az/Vm + | Pt/Az -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Vm/Az | Terra", tipo: "CC", enc: "" },
          { padrao: "3,60 - 4,30 V", localizacao: "Vm/Az + | Vd/Pt -", tipo: "SN", enc: "" },
          { padrao: "4,40 - 6,25 V", localizacao: "Vm/Az + | Vd/Pt -", tipo: "VS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Az/Vm | Pino 08", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vm/Az | Pino 07", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "ECT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Lr/Pt + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Lr/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "2,5 - 2,8 kΩ", localizacao: "Lr/Pt | Vd/Pt", tipo: "RS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Lr/Pt | Pino 18", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 19", tipo: "CA", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Pino 19- | Pino 18+", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "TPS",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Am/Pt + | Vd/Pt -", tipo: "AL", enc: "" },
          { padrao: "0,41 - 0,83 V", localizacao: "Am/Pt | Vd/Pt", tipo: "SN", enc: "" },
          { padrao: "3,36 - 3,99 V", localizacao: "Am/Pt | Vd/Pt", tipo: "SN", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Am/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Pt | Pino 04", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 19", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Az/Vm | Pino 08", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IAT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Am/Vm + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Am/Vm | Terra", tipo: "CC", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Am/Vm + | Vd/Pt -", tipo: "SN", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Vm | Pino 29", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 19", tipo: "CA", enc: "" },
          { padrao: "1 - 4 kΩ |20ºC", localizacao: "Am/Vm | Vd/Pt", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BICO INJETOR",
        rows: [
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Br/Vm | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Mr/Br | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Mr/Br | Pino 31", tipo: "CA", enc: "" },
          { padrao: "11 - 13 Ω |20ºC", localizacao: "Teste no Atuador", tipo: "RS", enc: "" },
          { padrao: "Pulso", localizacao: "Mr/Br", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "SENSOR OXIGÊNIO",
        notes: "Aqueça a moto até 80ºC",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Br | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br | Pino 28", tipo: "CA", enc: "" },
          { padrao: "0,1 á 0,9 V Osc.", localizacao: "Br | Terra", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "AQUECEDOR SENSOR OXIGÊNIO",
        rows: [
          { padrao: "13 - 19 Ω |20ºC", localizacao: "Bc | Bc", tipo: "RS", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Br/Vm + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Mr/Am + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | Pino 19", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IACV",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Am/Br | Az | Vc/Vm | Br/Pt", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 01 | Am/Br", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 13 | Az", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 24 | Vc/Vm", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Pino 02 | Br/Pt", tipo: "CA", enc: "" },
          { padrao: "Contín. (N)", localizacao: "A + D", tipo: "CC", enc: "" },
          { padrao: "Contín. (N)", localizacao: "B + C", tipo: "CC", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "A + B", tipo: "RS", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "C + D", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "Volt.Bat.-1,1V", localizacao: "Br/Vm+ | Terra", tipo: "AL", enc: "" },
          { padrao: "2,5 - 3,3 bar", localizacao: "Manômetro", tipo: "PR", enc: "" }
        ]
      }
    ]
  },
  {
    id: "denver-250",
    name: "DENVER 250 EFI (BOSH 6.0) | 2025",
    tables: [
      {
        name: "MAP",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Az/Vm + | Vd/Pt -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Vm/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "3,60 - 4,30 V", localizacao: "Vm/Pt + | Vd/Pt -", tipo: "SN", enc: "" },
          { padrao: "4,40 - 6,25 V", localizacao: "Vm/Pt + | Vd/Pt -", tipo: "VS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | J1", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Az/Vm | J3", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vm/Pt | K1", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "EOT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Lr/Pt + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Lr/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "2,5 - 2,8 kΩ", localizacao: "Lr/Pt | Vd/Pt", tipo: "RS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | J1", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Lt/Pt | G2", tipo: "CA", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "J1- | G2+", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "TPS",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Az/Vm + | Terra -", tipo: "AL", enc: "" },
          { padrao: "0,41 - 0,83 V", localizacao: "Am/Pt | Vd/Pt", tipo: "SN", enc: "" },
          { padrao: "3,36 - 3,99 V", localizacao: "Am/Pt | Vd/Pt", tipo: "SN", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Am/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Az/Vm | J3", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | J1", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Pt | G1", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IAT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Am/Vm + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Am/Vm | Terra", tipo: "CC", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Am/Vm + | Vd/Pt -", tipo: "SN", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | J1", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Vm | H1", tipo: "CA", enc: "" },
          { padrao: "1 - 4 kΩ |20ºC", localizacao: "Am/Vm | Vd/Pt", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BICO INJETOR (CILINDRO DIANTEIRO)",
        rows: [
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Br/Vm | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Mr/Br | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Mr/Br | A4", tipo: "CA", enc: "" },
          { padrao: "11 - 13 Ω |20ºC", localizacao: "Teste no Atuador", tipo: "RS", enc: "" },
          { padrao: "Pulso", localizacao: "Mr/Br", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "BICO INJETOR (CILINDRO TRASEIRO)",
        rows: [
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Br/Vm | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Mr/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Mr/Pt | B4", tipo: "CA", enc: "" },
          { padrao: "11 - 13 Ω |20ºC", localizacao: "Teste no Atuador", tipo: "RS", enc: "" },
          { padrao: "Pulso", localizacao: "Mr/Pt", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "SENSOR OXIGÊNIO (CILINDRO DIANTEIRO)",
        notes: "Aqueça a moto até 80ºC",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Br | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br | K2", tipo: "CA", enc: "" },
          { padrao: "0,1 á 0,9 V Osc.", localizacao: "Br | Terra", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "SENSOR OXIGÊNIO (CILINDRO TRASEIRO)",
        notes: "Aqueça a moto até 80ºC",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Rx | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Rx | J2", tipo: "CA", enc: "" },
          { padrao: "0,1 á 0,9 V Osc.", localizacao: "Rx | J2", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "AQUEC. SENSOR OXIGÊNIO (CILINDRO DIANTEIRO)",
        rows: [
          { padrao: "13 - 19 Ω |20ºC", localizacao: "Bc | Bc", tipo: "RS", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Br/Vm + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Mr/Am + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Mr/Am | L1", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | J1", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "AQUEC. SENSOR OXIGÊNIO (CILINDRO TRASEIRO)",
        rows: [
          { padrao: "13 - 19 Ω |20ºC", localizacao: "Bc | Bc", tipo: "RS", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Cz/Vm + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Br/Vm + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Cz/Vm | M1", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | J1", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IACV",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Br/Pt | Vc/Vm | Az | Am/Br", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "B2 | Br/Pt", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "A1 | Vc/Vm", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "A2 | Az", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "B1 | Am/Br", tipo: "CA", enc: "" },
          { padrao: "Contín. (N)", localizacao: "A + D", tipo: "CC", enc: "" },
          { padrao: "Contín. (N)", localizacao: "B + C", tipo: "CC", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "A + B", tipo: "RS", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "C + D", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "VÁLVULA PURGA CANISTER",
        rows: [
          { padrao: "Volt. Bateria", localizacao: "Br/Vm | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Ac | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Ac | L3", tipo: "CA", enc: "" },
          { padrao: "Pico (S)", localizacao: "Ac", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "Volt.Bat.-1,1V", localizacao: "Vm/Br + | Terra", tipo: "AL", enc: "" },
          { padrao: "2,5 - 3,3 bar", localizacao: "Manômetro", tipo: "PR", enc: "" }
        ]
      }
    ]
  },
  {
    id: "titanium-250",
    name: "TITANIUM 250 EFI (BOSH 6.0) | 2025",
    tables: [
      {
        name: "MAP",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Az/Vm + | Vd/Pt -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Vm/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "3,60 - 4,30 V", localizacao: "Vm/Pt + | Vd/Pt -", tipo: "SN", enc: "" },
          { padrao: "4,40 - 6,25 V", localizacao: "Vm/Pt + | Vd/Pt -", tipo: "VS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | J1", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Az/Vm | J3", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vm/Pt | K1", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "EOT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Lr/Pt + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Lr/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "2,5 - 2,8 kΩ", localizacao: "Lr/Pt | Vd/Pt", tipo: "RS", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | J1", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Lt/Pt | G2", tipo: "CA", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "J1- | G2+", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "TPS",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Az/Vm + | Terra -", tipo: "AL", enc: "" },
          { padrao: "0,41 - 0,83 V", localizacao: "Am/Pt | Vd/Pt", tipo: "SN", enc: "" },
          { padrao: "3,36 - 3,99 V", localizacao: "Am/Pt | Vd/Pt", tipo: "SN", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Am/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | J1", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Pt | G1", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IAT",
        rows: [
          { padrao: "4,75 - 5,25 V", localizacao: "Am/Vm + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Am/Vm | Terra", tipo: "CC", enc: "" },
          { padrao: "2,70 - 3,10 V", localizacao: "Am/Vm + | Vd/Pt -", tipo: "SN", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | J1", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Am/Vm | H1", tipo: "CA", enc: "" },
          { padrao: "1 - 4 kΩ |20ºC", localizacao: "Am/Vm | Vd/Pt", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "BICO INJETOR (CILINDRO DIANTEIRO)",
        rows: [
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Br/Vm | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Mr/Br | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Mr/Br | A4", tipo: "CA", enc: "" },
          { padrao: "11 - 13 Ω |20ºC", localizacao: "Teste no Atuador", tipo: "RS", enc: "" },
          { padrao: "Pulso", localizacao: "Mr/Br", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "BICO INJETOR (CILINDRO TRASEIRO)",
        rows: [
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Br/Vm | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Mr/Pt | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Mr/Pt | B4", tipo: "CA", enc: "" },
          { padrao: "11 - 13 Ω |20ºC", localizacao: "Teste no Atuador", tipo: "RS", enc: "" },
          { padrao: "Pulso", localizacao: "Mr/Pt", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "SENSOR OXIGÊNIO (CILINDRO DIANTEIRO)",
        notes: "Aqueça a moto até 80ºC",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Br | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Br | K2", tipo: "CA", enc: "" },
          { padrao: "0,1 á 0,9 V Osc.", localizacao: "Br | Terra", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "SENSOR OXIGÊNIO (CILINDRO TRASEIRO)",
        notes: "Aqueça a moto até 80ºC",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Rx | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Rx | J2", tipo: "CA", enc: "" },
          { padrao: "0,1 á 0,9 V Osc.", localizacao: "Rx | J2", tipo: "SN", enc: "" }
        ]
      },
      {
        name: "AQUEC. SENSOR OXIGÊNIO (CILINDRO DIANTEIRO)",
        rows: [
          { padrao: "13 - 19 Ω |20ºC", localizacao: "Bc | Bc", tipo: "RS", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Br/Vm + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Mr/Am + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Mr/Am | L1", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | J1", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "AQUEC. SENSOR OXIGÊNIO (CILINDRO TRASEIRO)",
        rows: [
          { padrao: "13 - 19 Ω |20ºC", localizacao: "Bc | Bc", tipo: "RS", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Cz/Vm + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Volt. Bat. - 1,1V", localizacao: "Br/Vm + | Terra -", tipo: "AL", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Cz/Vm | M1", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Vd/Pt | J1", tipo: "CA", enc: "" }
        ]
      },
      {
        name: "IACV",
        rows: [
          { padrao: "Contín. (N)", localizacao: "Br/Pt | Vc/Vm | Az | Am/Br", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "B2 | Br/Pt", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "A1 | Vc/Vm", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "A2 | Az", tipo: "CA", enc: "" },
          { padrao: "Contín. (S)", localizacao: "B1 | Am/Br", tipo: "CA", enc: "" },
          { padrao: "Contín. (N)", localizacao: "A + D", tipo: "CC", enc: "" },
          { padrao: "Contín. (N)", localizacao: "B + C", tipo: "CC", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "A + B", tipo: "RS", enc: "" },
          { padrao: "30 - 80 Ω", localizacao: "C + D", tipo: "RS", enc: "" }
        ]
      },
      {
        name: "VÁLVULA PURGA CANISTER",
        rows: [
          { padrao: "Volt. Bateria", localizacao: "Br/Vm | Terra", tipo: "AL", enc: "" },
          { padrao: "Contín. (N)", localizacao: "Ac | Terra", tipo: "CC", enc: "" },
          { padrao: "Contín. (S)", localizacao: "Ac | L3", tipo: "CA", enc: "" },
          { padrao: "Pico (S)", localizacao: "Ac", tipo: "PV", enc: "" }
        ]
      },
      {
        name: "BOMBA DE COMBUSTÍVEL",
        rows: [
          { padrao: "Volt.Bat.-1,1V", localizacao: "Vm/Br + | Terra", tipo: "AL", enc: "" },
          { padrao: "2,5 - 3,3 bar", localizacao: "Manômetro", tipo: "PR", enc: "" }
        ]
      }
    ]
  }
];
