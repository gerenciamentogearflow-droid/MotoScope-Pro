import { PinoutModel } from "../types";

export const shinerayPinouts: PinoutModel[] = [
  {
    id: "jet-125-ss",
    name: "JET 125 SS EFI (MOTION) | 2024",
    modules: [
      {
        name: "ECM - Módulo de Controle do Motor",
        pinout: [
          { pin: "1", color: "Az/Am", function: "Bobina de Ignição" },
          { pin: "2", color: "Br/Pt", function: "Válvula IACV (A)" },
          { pin: "4", color: "Az", function: "Válvula IACV (B)" },
          { pin: "5", color: "Lr/Vm", function: "Injetor de Combustível" },
          { pin: "7", color: "Az/Bc", function: "Aquecedor Sonda Lambda" },
          { pin: "8", color: "Az/Vm", function: "Sinal IAT" },
          { pin: "10", color: "Vd/Bc", function: "Terra de Sensores" },
          { pin: "11", color: "Mr/Br", function: "Sinal MAP" },
          { pin: "12", color: "Vd/Az", function: "Sinal TPS" },
          { pin: "13", color: "Mr", function: "Válvula IACV (C)" },
          { pin: "14", color: "Vd/Vm", function: "Sinal EOT" },
          { pin: "16", color: "Vd/Pt", function: "Alimentação 5V Sensores" },
          { pin: "17", color: "Vd/Cz", function: "Sinal Sonda Lambda" },
          { pin: "18", color: "Pt", function: "Alimentação pós chave (12V)" },
          { pin: "19", color: "Vd", function: "Terra de Potência" }
        ]
      }
    ]
  }
];
