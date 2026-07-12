const fs = require('fs');
let content = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');

// Hide individual ABS sensors
content = content.replace(/id: "abs-indutivo",/, 'id: "abs-indutivo",\n    hidden: true,');
content = content.replace(/id: "abs-hall",/, 'id: "abs-hall",\n    hidden: true,');

// Add the ABS group right before abs-indutivo
const groupABS = `
  {
    id: "group-abs",
    name: "Sensor ABS (Velocidade de Roda)",
    type: "sensor",
    shortDescription: "Mede a velocidade da roda para o sistema anti-travamento.",
    fullDescription: "Escolha o tipo de sensor ABS utilizado na motocicleta para ver os detalhes e testes.",
    oscilloscopeSetup: { timeDiv: "", voltageDiv: "", triggerEdge: "", triggerMode: "", triggerLevel: "", coupling: "" },
    waveformExplanation: "",
    waveType: "",
    isGroup: true,
    variants: [
      { id: "abs-indutivo", name: "Passivo (Indutivo - Analógico)" },
      { id: "abs-hall", name: "Ativo (Efeito Hall/Magnetoresistivo - Digital)" }
    ]
  },
  {
    id: "abs-indutivo"
`;

content = content.replace(/\{\n\s+id: "abs-indutivo",\n\s+hidden: true,/, groupABS.replace('id: "abs-indutivo"', 'id: "abs-indutivo",\n    hidden: true,'));

fs.writeFileSync('src/data/componentsDB.ts', content);
