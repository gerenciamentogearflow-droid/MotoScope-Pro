import { DiagnosticModel } from "../types";

function buildTable(name: string, rows: any[], notes?: string) {
  const validRows = rows.filter(
    (r) => r.padrao !== undefined && r.padrao !== null && r.padrao !== "",
  );
  if (validRows.length > 0) {
    return { name, rows: validRows, notes };
  }
  return null;
}

export function createHondaModel(data: any): DiagnosticModel {
  const tables = [];

  const motorTable = buildTable("MOTOR E VÁLVULAS", [
    {
      padrao: data.compressao,
      localizacao: "COMPRESSÃO DO CILINDRO",
      tipo: "PR",
    },
    {
      padrao: data.folgaAdm,
      localizacao: "FOLGA VÁLVULA - ADMISSÃO",
      tipo: "MM",
    },
    {
      padrao: data.folgaEsc,
      localizacao: "FOLGA VÁLVULA - ESCAPE",
      tipo: "MM",
    },
  ]);
  if (motorTable) tables.push(motorTable);

  const cargaTable = buildTable(
    "SISTEMA DE CARGA",
    [
      { padrao: data.fuga, localizacao: "TESTE FUGA CORRENTE", tipo: "-" },
      {
        padrao: data.estatorMarcha,
        localizacao: "ESTATOR - MARCHA LENTA (multímetro 200V~)",
        tipo: "AL",
      },
      {
        padrao: data.estator5k,
        localizacao: "ESTATOR - 5.000 RPM (multímetro 200V~)",
        tipo: "AL",
      },
      {
        padrao: data.estatorRes,
        localizacao: "ESTATOR - RESISTÊNCIA DA BOBINA DE CARGA 20ºC",
        tipo: "RS",
      },
    ],
    data.estatorNotes || "fio branco e fio verde",
  );
  if (cargaTable) tables.push(cargaTable);

  const ignRows = [
    {
      padrao: data.picoIgn,
      localizacao: "PICO DE VOLTAGEM DA BOBINA DE IGNIÇÃO",
      tipo: "PV",
    },
    {
      padrao: data.resPri,
      localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - PRIMÁRIO",
      tipo: "RS",
    },
    {
      padrao: data.resSec,
      localizacao: "RESISTÊNCIA BOBINA IGNIÇÃO A 20ºC - SECUNDÁRIO",
      tipo: "RS",
    },
    {
      padrao: data.picoCkp,
      localizacao: "PICO DE VOLTAGEM DO SENSOR CKP",
      tipo: "PV",
    },
    {
      padrao: data.resCkp,
      localizacao: "RESISTÊNCIA DO SENSOR CKP A 20ºC",
      tipo: "RS",
    },
    {
      padrao: data.resVela,
      localizacao: "RESISTÊNCIA DO CACHIMBO DE VELA",
      tipo: "RS",
    },
  ];
  const ignTable = buildTable("SISTEMA DE IGNIÇÃO", ignRows);
  if (ignTable) tables.push(ignTable);

  const injRows = [
    { padrao: data.eot20, localizacao: "EOT/ECT - 20ºC", tipo: "RS" },
    { padrao: data.eot100, localizacao: "EOT/ECT - 100ºC", tipo: "RS" },
    {
      padrao: data.tpLenta,
      localizacao: "TP/TPS - TENSÃO DE SAÍDA MARCHA LENTA",
      tipo: "SN",
    },
    {
      padrao: data.tpAberta,
      localizacao: "TP/TPS - TENSÃO SAÍDA BORBOLETA ABERTA",
      tipo: "SN",
    },
    { padrao: data.iatRes, localizacao: "IAT - RESISTÊNCIA", tipo: "RS" },
    {
      padrao: data.mapTensao,
      localizacao: "MAP - TENSÃO DE SAÍDA",
      tipo: "SN",
    },
    {
      padrao: data.bicoRes,
      localizacao: "BICO INJETOR - RESISTÊNCIA",
      tipo: "RS",
    },
    {
      padrao: data.bicoVazao,
      localizacao: "TESTE INJETOR COMBUSTÍVEL - PRESSÃO / VAZÃO",
      tipo: "PR/VZ",
    },
    {
      padrao: data.o2Tensao,
      localizacao: "SENSOR O² - TENSÃO DE SAÍDA",
      tipo: "SN",
    },
    {
      padrao: data.iacvRes,
      localizacao: "IACV / VÁLVULA CONTROLE AR - RESISTÊNCIA",
      tipo: "RS",
    },
    {
      padrao: data.tbmHoriz,
      localizacao: "SENSOR TOMBAMENTO - HORIZONTAL",
      tipo: "SN",
    },
    {
      padrao: data.tbmIncli,
      localizacao: "SENSOR TOMBAMENTO - INCLINAÇÃO",
      tipo: "SN",
    },
    ...(data.extraInjecao || []),
  ];
  const injTable = buildTable("SISTEMA DE INJEÇÃO", injRows);
  if (injTable) tables.push(injTable);

  const bombaTable = buildTable("BOMBA DE COMBUSTÍVEL", [
    {
      padrao: data.bombaPressao,
      localizacao: "PRESSÃO DO COMBUSTÍVEL EM MARCHA LENTA",
      tipo: "PR",
    },
    {
      padrao: data.bombaVazao,
      localizacao: "FLUXO DO COMBUSTÍVEL (VAZÃO BOMBA)",
      tipo: "VZ",
    },
    {
      padrao: data.nivelCheio,
      localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL - CHEIO",
      tipo: "RS",
    },
    {
      padrao: data.nivelVazio,
      localizacao: "RESISTÊNCIA DO SENSOR DE NÍVEL - VAZIO",
      tipo: "RS",
    },
    ...(data.extraBomba || []),
  ]);
  if (bombaTable) tables.push(bombaTable);

  const fluidosTable = buildTable("LUBRIFICANTES E FLUIDOS", [
    {
      padrao: data.oleoDrenagem,
      localizacao: "ÓLEO MOTOR (DRENAGEM)",
      tipo: "-",
    },
    {
      padrao: data.oleoFiltro,
      localizacao: "ÓLEO MOTOR (TROCA FILTRO)",
      tipo: "-",
    },
    {
      padrao: data.oleoTotal,
      localizacao: "ÓLEO MOTOR (DESMONTAGEM TOTAL)",
      tipo: "-",
    },
    {
      padrao: data.oleoBengala,
      localizacao: "ÓLEO BENGALA (CADA LADO)",
      tipo: "-",
    },
    ...(data.extraFluidos || []),
  ]);
  if (fluidosTable) tables.push(fluidosTable);

  return {
    id: data.id,
    name: data.name,
    tables,
  };
}

export function createYamahaModel(data: any): DiagnosticModel {
  const tables = [];

  const motorTable = buildTable("MOTOR E VÁLVULAS", [
    {
      padrao: data.compressao,
      localizacao: "COMPRESSÃO DO CILINDRO",
      tipo: "PR",
    },
    {
      padrao: data.folgaAdm,
      localizacao: "FOLGA VÁLVULA - ADMISSÃO",
      tipo: "MM",
    },
    {
      padrao: data.folgaEsc,
      localizacao: "FOLGA VÁLVULA - ESCAPE",
      tipo: "MM",
    },
  ]);
  if (motorTable) tables.push(motorTable);

  const cargaTable = buildTable("SISTEMA DE CARGA", [
    { padrao: data.fuga, localizacao: "TESTE FUGA CORRENTE", tipo: "-" },
    {
      padrao: data.estatorRes,
      localizacao: "ESTATOR - RESISTÊNCIA DA BOBINA DO ESTATOR 20ºC",
      tipo: "RS",
    },
  ]);
  if (cargaTable) tables.push(cargaTable);

  const ignTable = buildTable("SISTEMA DE IGNIÇÃO", [
    {
      padrao: data.picoIgn,
      localizacao: "PICO DE VOLTAGEM DA BOBINA DE IGNIÇÃO",
      tipo: "PV",
    },
    {
      padrao: data.resPri,
      localizacao: "RESISTÊNCIA DA BOBINA DE IGNIÇÃO - PRIMÁRIO",
      tipo: "RS",
    },
    {
      padrao: data.resSec,
      localizacao: "RESISTÊNCIA DA BOBINA DE IGNIÇÃO - SECUNDÁRIO",
      tipo: "RS",
    },
    {
      padrao: data.picoCkp,
      localizacao: "PICO DE VOLTAGEM DO SENSOR CKP",
      tipo: "PV",
    },
    {
      padrao: data.resCkp,
      localizacao: "RESISTÊNCIA DO SENSOR CKP A 20ºC",
      tipo: "RS",
    },
    {
      padrao: data.resVela,
      localizacao: "RESISTÊNCIA DO CACHIMBO DE VELA",
      tipo: "RS",
    },
  ]);
  if (ignTable) tables.push(ignTable);

  const injRows = [
    {
      padrao: data.eot20,
      localizacao: "SENSOR TEMPERATURA MOTOR - 20ºC",
      tipo: "RS",
    },
    {
      padrao: data.eot100,
      localizacao: "SENSOR TEMPERATURA MOTOR - 100ºC",
      tipo: "RS",
    },
    {
      padrao: data.o2Tensao,
      localizacao: "SENSOR DE OXIGÊNIO - TENSÃO DE SAÍDA",
      tipo: "SN",
    },
    {
      padrao: data.o2Res,
      localizacao: "SENSOR DE OXIGÊNIO - RESISTÊNCIA",
      tipo: "RS",
    },
    { padrao: data.iatRes, localizacao: "IAT - RESISTÊNCIA", tipo: "RS" },
    { padrao: data.mapTensao, localizacao: "MAP - SENSOR PRESSÃO", tipo: "SN" },
    {
      padrao: data.tpLenta,
      localizacao: "TPS - TENSÃO SAÍDA MARCHA LENTA",
      tipo: "SN",
    },
    {
      padrao: data.tpAberta,
      localizacao: "TPS - TENSÃO SAÍDA TOTALMENTE ABERTA",
      tipo: "SN",
    },
    {
      padrao: data.velPulso,
      localizacao: "SENSOR VELOCIDADE - TIPO DE DETECÇÃO",
      tipo: "SN",
    },
    {
      padrao: data.velAlim,
      localizacao: "SENSOR VELOCIDADE - TENSÃO ALIMENTAÇÃO",
      tipo: "AL",
    },
    {
      padrao: data.velGiro,
      localizacao: "SENSOR VELOCIDADE - TENSÃO A CADA GIRO",
      tipo: "SN",
    },
    { padrao: data.fidRes, localizacao: "VÁLVULA FID", tipo: "RS" },
    {
      padrao: data.tbmHoriz,
      localizacao: "SENSOR ÂNGULO INCLINAÇÃO - HORIZONTAL/VERTICAL",
      tipo: "SN",
    },
    {
      padrao: data.tbmIncli,
      localizacao: "SENSOR ÂNGULO INCLINAÇÃO - INCLINADO",
      tipo: "SN",
    },
    {
      padrao: data.bicoRes,
      localizacao: "INJETOR DE COMBUSTÍVEL - RESISTÊNCIA",
      tipo: "RS",
    },
    {
      padrao: data.bicoVazao,
      localizacao: "TESTE INJETOR COMBUSTÍVEL - PRESSÃO E VAZÃO",
      tipo: "PR/VZ",
    },
    ...(data.extraInjecao || []),
  ];
  const injTable = buildTable("SISTEMA DE INJEÇÃO", injRows);
  if (injTable) tables.push(injTable);

  const bombaTable = buildTable("BOMBA DE COMBUSTÍVEL", [
    {
      padrao: data.bombaPressao,
      localizacao: "PRESSÃO EM MARCHA LENTA",
      tipo: "PR",
    },
    { padrao: data.bombaVazao, localizacao: "FLUXO / CONSUMO", tipo: "VZ" },
    {
      padrao: data.nivelCheio,
      localizacao: "RESISTÊNCIA SENSOR NÍVEL - CHEIO",
      tipo: "RS",
    },
    {
      padrao: data.nivelVazio,
      localizacao: "RESISTÊNCIA SENSOR NÍVEL - VAZIO",
      tipo: "RS",
    },
  ]);
  if (bombaTable) tables.push(bombaTable);

  const motorPartidaTable = buildTable("MOTOR DE PARTIDA", [
    {
      padrao: data.motorPartida1,
      localizacao: "RESISTÊNCIA DO COMUTADOR (1)",
      tipo: "RS",
    },
    {
      padrao: data.motorPartida2,
      localizacao: "RESISTÊNCIA DO ISOLADOR (2)",
      tipo: "RS",
    },
  ]);
  if (motorPartidaTable) tables.push(motorPartidaTable);

  const fluidosTable = buildTable("LUBRIFICANTES E FLUIDOS", [
    {
      padrao: data.oleoDrenagem,
      localizacao: "ÓLEO MOTOR (DRENAGEM)",
      tipo: "-",
    },
    {
      padrao: data.oleoFiltro,
      localizacao: "ÓLEO MOTOR (TROCA FILTRO)",
      tipo: "-",
    },
    {
      padrao: data.oleoTotal,
      localizacao: "ÓLEO MOTOR (DESMONTAGEM TOTAL)",
      tipo: "-",
    },
    {
      padrao: data.oleoBengala,
      localizacao: "ÓLEO BENGALA (CADA LADO)",
      tipo: "-",
    },
    ...(data.extraFluidos || []),
  ]);
  if (fluidosTable) tables.push(fluidosTable);

  return {
    id: data.id,
    name: data.name,
    tables,
  };
}
