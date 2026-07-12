export interface OscilloscopeSetup {
  timeDiv: string;
  voltageDiv: string;
  triggerEdge: string;
  triggerMode: string;
  triggerLevel: string;
  coupling?: string;
  axis?: string;
}

export interface WaveformPhase {
  id: number;
  title: string;
  description: string;
  x?: number;
  y?: number;
  labelX?: number;
  labelY?: number;
  waveId?: string;
}

export interface ComponentData {
  id: string;
  name: string;
  type: "sensor" | "actuator";
  shortDescription: string;
  fullDescription: string;
  oscilloscopeSetup: OscilloscopeSetup;
  connectionInstructions?: string;
  waveformExplanation: string;
  waveformPhases?: WaveformPhase[];
  waveType: string;
  hidden?: boolean;
  isGroup?: boolean;
  variants?: { id: string; name: string; description?: string }[];
  symptoms?: string[];
  multimeter?: {
    setting: string;
    instructions: string;
    expectedValues: string;
    variesByModel: boolean;
    minValue?: number;
    maxValue?: number;
    unit?: string;
    temperatureObservation?: string;
  };
}

export interface User {
  username: string;
  role: "admin" | "mechanic";
}

export interface RealSignal {
  id: string;
  componentId: string;
  motorcycleName: string;
  userName: string;
  userId?: string;
  imageUrl: string; // Used for image or video thumbnail
  mediaType?: "image" | "video";
  hasChunks?: boolean;
  status?: "ok" | "failure";
  createdAt: number;
}

export interface DiagnosticTableRow {
  padrao: string;
  localizacao: string;
  tipo: string;
  enc?: string;
}

export interface DiagnosticTable {
  name: string;
  notes?: string;
  rows: DiagnosticTableRow[];
}

export interface DiagnosticData {
  label: string;
  value: string;
}

export interface DiagnosticSection {
  sectionName: string;
  data: DiagnosticData[];
}

export interface DiagnosticModel {
  id: string;
  name: string;
  tables?: DiagnosticTable[];
  sections?: DiagnosticSection[];
}

export interface PinoutRow {
  pin: string;
  color: string;
  function: string;
}

export interface PinoutModule {
  name: string;
  pinout: PinoutRow[];
  connectorImage?: string;
}

export interface PinoutModel {
  id: string;
  name: string;
  modules: PinoutModule[];
}

declare global { const __APP_UPDATE_DATE__: string; }
