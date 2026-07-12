const fs = require('fs');
let content = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');

// Add hidden: true to the components
content = content.replace(/id: "cdi-dc",/, 'id: "cdi-dc",\n    hidden: true,');
content = content.replace(/id: "cdi-ac",/, 'id: "cdi-ac",\n    hidden: true,');
content = content.replace(/id: "ckp-indutivo",/, 'id: "ckp-indutivo",\n    hidden: true,');
content = content.replace(/id: "ckp-pulso-carburada",/, 'id: "ckp-pulso-carburada",\n    hidden: true,');
content = content.replace(/id: "ckp-hall",/, 'id: "ckp-hall",\n    hidden: true,');
content = content.replace(/id: "ignition-coil-secondary",/, 'id: "ignition-coil-secondary",\n    hidden: true,');
content = content.replace(/id: "ignition-coil-secondary-cdi",/, 'id: "ignition-coil-secondary-cdi",\n    hidden: true,');
content = content.replace(/id: "ignition-coil",/, 'id: "ignition-coil",\n    hidden: true,');

// We need to add the group components at the beginning of the array.
// Export statement starts at export const componentsDB: ComponentData[] = [
const groupComponents = `
  {
    id: "group-ckp",
    name: "Sensor de Rotação (CKP / Pulso)",
    type: "sensor",
    shortDescription: "Sinais de rotação, fase e PMS (Indutivo, Hall ou Pulso).",
    fullDescription: "Escolha o tipo de sensor de rotação utilizado na motocicleta para ver os detalhes e testes.",
    oscilloscopeSetup: { timeDiv: "", voltageDiv: "", triggerEdge: "", triggerMode: "", triggerLevel: "", coupling: "" },
    waveformExplanation: "",
    waveType: "",
    isGroup: true,
    variants: [
      { id: "ckp-indutivo", name: "Indutivo (Injetada TCI)" },
      { id: "ckp-hall", name: "Efeito Hall (Injetada)" },
      { id: "ckp-pulso-carburada", name: "Bobina de Pulso (Carburada CDI)" }
    ]
  },
  {
    id: "group-ignition-secondary",
    name: "Bobina de Ignição (Secundário)",
    type: "actuator",
    shortDescription: "Forma de onda de alta tensão medida no cabo de vela usando pinça.",
    fullDescription: "Escolha o tipo de sistema de ignição da motocicleta para ver a forma de onda do secundário (cabo de vela).",
    oscilloscopeSetup: { timeDiv: "", voltageDiv: "", triggerEdge: "", triggerMode: "", triggerLevel: "", coupling: "" },
    waveformExplanation: "",
    waveType: "",
    isGroup: true,
    variants: [
      { id: "ignition-coil-secondary", name: "Injetada (TCI)" },
      { id: "ignition-coil-secondary-cdi", name: "Carburada (CDI)" }
    ]
  },
  {
    id: "group-ignition-primary",
    name: "Bobina de Ignição (Primário)",
    type: "actuator",
    shortDescription: "Sinal elétrico de controle da bobina (12V ou descarga de CDI).",
    fullDescription: "Escolha o tipo de sistema de ignição da motocicleta para ver o sinal do primário da bobina de ignição.",
    oscilloscopeSetup: { timeDiv: "", voltageDiv: "", triggerEdge: "", triggerMode: "", triggerLevel: "", coupling: "" },
    waveformExplanation: "",
    waveType: "",
    isGroup: true,
    variants: [
      { id: "ignition-coil", name: "Injetada (TCI - 12V Dwell)" },
      { id: "cdi-dc", name: "Carburada (CDI DC - Bateria)" },
      { id: "cdi-ac", name: "Carburada (CDI AC - Estator)" }
    ]
  },
`;

content = content.replace('export const componentsDB: ComponentData[] = [', 'export const componentsDB: ComponentData[] = [' + groupComponents);

fs.writeFileSync('src/data/componentsDB.ts', content);
