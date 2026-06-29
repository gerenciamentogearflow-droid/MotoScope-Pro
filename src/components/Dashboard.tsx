import React, { useState, useEffect } from "react";
import { User, ComponentData, DiagnosticModel } from "../types";
import { componentsDB } from "../data/componentsDB";
import {
  Search,
  Activity,
  Cpu,
  Settings,
  LogOut,
  BookOpen,
  Camera,
  Zap,
  SlidersHorizontal,
  Share2,
  ArrowLeft,
  Eye,
  EyeOff,
  ClipboardList
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { RealSignalsList } from "./RealSignalsList";
import { MultimeterDetail } from "./MultimeterDetail";
import { BrandLogo } from "./BrandLogo";

import { DiagnosticParametersView } from "./DiagnosticParametersView";
import { PinoutsView } from "./PinoutsView";
import { DiagnosticWorksheetView } from "./DiagnosticWorksheetView";
import { shinerayModels } from "../data/shinerayModels";
import { hondaParameters } from "../data/hondaParameters";
import { yamahaParameters } from "../data/yamahaParameters";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

interface DashboardProps {
  user: User;
  onSelectComponent: (comp: ComponentData) => void;
  onAdminClick: () => void;
  onLogout: () => void;
}

export function Dashboard({
  user,
  onSelectComponent,
  onAdminClick,
  onLogout,
}: DashboardProps) {
  const [activeTab, setActiveTab] = useState<"home" | "oscilloscope_menu" | "didactic" | "real_signals" | "multimeter" | "parameters" | "pinouts" | "diagnostic_worksheet">(
    "home",
  );
  const [selectedRealSignalComponent, setSelectedRealSignalComponent] =
    useState<ComponentData | null>(null);
  const [selectedMultimeterComponent, setSelectedMultimeterComponent] =
    useState<ComponentData | null>(null);
  const [selectedBrandParameters, setSelectedBrandParameters] =
    useState<string | null>(null);
  const [selectedBrandWorksheet, setSelectedBrandWorksheet] =
    useState<string | null>(null);
  const [selectedPinoutComponent, setSelectedPinoutComponent] =
    useState<ComponentData | null>(null);

  const [selectedBrandPinouts, setSelectedBrandPinouts] =
    useState<string | null>(null);
  
  const [hiddenBrands, setHiddenBrands] = useState<string[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "app_settings", "visibility"), (docSnap) => {
      if (docSnap.exists()) {
        setHiddenBrands(docSnap.data().hiddenBrands || []);
      }
    });
    return () => unsub();
  }, []);

  const toggleBrandVisibility = async (brand: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let newHidden = [...hiddenBrands];
    if (hiddenBrands.includes(brand)) {
      newHidden = newHidden.filter(b => b !== brand);
    } else {
      newHidden.push(brand);
    }
    await setDoc(doc(db, "app_settings", "visibility"), { hiddenBrands: newHidden }, { merge: true });
  };

  const filteredComponents = componentsDB.filter(
    (c) =>
      !c.hidden &&
      (activeTab !== "multimeter" || c.multimeter)
  );

  const [showStatorModal, setShowStatorModal] = useState<{ mode: "didactic" | "real" | "multimeter" | "parameters" | "pinouts" } | null>(null);

  const handleComponentClick = (comp: ComponentData, mode: "didactic" | "real" | "multimeter" | "parameters" | "pinouts" = "didactic") => {
    if (comp.id === "estator") {
      setShowStatorModal({ mode });
    } else {
      if (mode === "didactic") {
        onSelectComponent(comp);
      } else if (mode === "real") {
        setSelectedRealSignalComponent(comp);
      } else if (mode === "multimeter") {
        setSelectedMultimeterComponent(comp);
      } else if (mode === "pinouts") {
        setSelectedPinoutComponent(comp);
      }
    }
  };

  const handleStatorSelection = (phaseId: string) => {
    const mode = showStatorModal?.mode || "didactic";
    setShowStatorModal(null);
    const statorComp = componentsDB.find(c => c.id === phaseId);
    if (statorComp) {
      if (mode === "didactic") {
        onSelectComponent(statorComp);
      } else if (mode === "real") {
        setSelectedRealSignalComponent(statorComp);
      } else if (mode === "multimeter") {
        setSelectedMultimeterComponent(statorComp);
      } else if (mode === "pinouts") {
        setSelectedPinoutComponent(statorComp);
      }
    }
  };

  if (selectedMultimeterComponent) {
    return <MultimeterDetail component={selectedMultimeterComponent} onBack={() => setSelectedMultimeterComponent(null)} />;
  }

  if (selectedBrandParameters) {
    let models: DiagnosticModel[] = [];
    if (selectedBrandParameters === "Shineray") models = shinerayModels;
    else if (selectedBrandParameters === "Honda") models = hondaParameters;
    else if (selectedBrandParameters === "Yamaha") models = yamahaParameters;
    
    return <DiagnosticParametersView brand={selectedBrandParameters} models={models} onBack={() => setSelectedBrandParameters(null)} />;
  }

  if (selectedBrandWorksheet) {
    let models: DiagnosticModel[] = [];
    if (selectedBrandWorksheet === "Shineray") models = shinerayModels;
    else if (selectedBrandWorksheet === "Honda") models = hondaParameters;
    else if (selectedBrandWorksheet === "Yamaha") models = yamahaParameters;
    
    return <DiagnosticWorksheetView brand={selectedBrandWorksheet} models={models} onBack={() => setSelectedBrandWorksheet(null)} />;
  }

  if (selectedBrandPinouts) {
    return <PinoutsView brand={selectedBrandPinouts} onBack={() => setSelectedBrandPinouts(null)} />;
  }

  if (selectedPinoutComponent) {
    return (
      <div className="min-h-screen bg-transparent text-gray-900 p-6 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Pinagens: {selectedPinoutComponent.name}</h2>
        <p className="text-gray-600 mb-8">Esta área está em desenvolvimento.</p>
        <button onClick={() => setSelectedPinoutComponent(null)} className="px-6 py-3 bg-rose-600 text-white font-bold">Voltar</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-gray-900 flex flex-col">
      <header className="px-6 pt-12 pb-5 border-b border-gray-200/80">
        <div className="flex justify-between items-center max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-tr from-red-600 to-red-500 rounded-xl shadow-lg shadow-red-600/20">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900">MotoScope Pro</h1>
              <p className="text-xs text-gray-600 font-medium">Diagnostic System</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {user.role === "admin" && (
              <button
                onClick={onAdminClick}
                className="p-2.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
                title="Painel Admin"
              >
                <Settings className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={onLogout}
              className="p-2.5 rounded-full hover:bg-red-500/10 text-gray-600 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6 relative max-w-5xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {activeTab === "home" ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="pb-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              <div className="col-span-full mb-4">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Bem-vindo, {user.username}</h2>
                <p className="text-gray-600 mt-1">Selecione um módulo para iniciar o diagnóstico.</p>
              </div>

              <button
                onClick={() => setActiveTab("diagnostic_worksheet")}
                className="group flex flex-col items-start gap-4 bg-white hover:bg-gray-50 border border-gray-200/60 shadow-sm hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg p-6 rounded-3xl transition-all active:scale-[0.98] text-left relative overflow-hidden col-span-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-3.5 rounded-2xl bg-emerald-600/10 text-emerald-600 border border-emerald-600/20 group-hover:scale-110 transition-transform">
                  <ClipboardList className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 font-bold">Ficha de Diagnóstico Inteligente</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Acesse a tabela de parâmetros, preencha os valores encontrados na motocicleta e gere relatórios técnicos.
                  </p>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("oscilloscope_menu")}
                className="group flex flex-col items-start gap-4 bg-white hover:bg-gray-50 border border-gray-200/60 shadow-sm hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg p-6 rounded-3xl transition-all active:scale-[0.98] text-left relative overflow-hidden md:col-span-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-3.5 rounded-2xl bg-red-600/10 text-red-600 border border-red-600/20 group-hover:scale-110 transition-transform">
                  <Activity className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 font-bold">Osciloscópio</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Aprenda sobre ondas, teoria e veja banco de sinais reais.
                  </p>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("multimeter")}
                className="group flex flex-col items-start gap-4 bg-white hover:bg-gray-50 border border-gray-200/60 shadow-sm hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg p-6 rounded-3xl transition-all active:scale-[0.98] text-left relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-3.5 rounded-2xl bg-orange-600/10 text-orange-600 border border-orange-600/20 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 font-bold">Multímetro</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Aprenda a testar componentes passo a passo com multímetro.
                  </p>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("parameters")}
                className="group flex flex-col items-start gap-4 bg-white hover:bg-gray-50 border border-gray-200/60 shadow-sm hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg p-6 rounded-3xl transition-all active:scale-[0.98] text-left relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-3.5 rounded-2xl bg-purple-600/10 text-purple-600 border border-purple-600/20 group-hover:scale-110 transition-transform">
                  <SlidersHorizontal className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 font-bold">Parâmetros Base</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Consulte tabelas e parâmetros de referência dos sistemas.
                  </p>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("pinouts")}
                className="group flex flex-col items-start gap-4 bg-white hover:bg-gray-50 border border-gray-200/60 shadow-sm hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg p-6 rounded-3xl transition-all active:scale-[0.98] text-left relative overflow-hidden md:col-span-2 lg:col-span-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-3.5 rounded-2xl bg-rose-600/10 text-rose-600 border border-rose-600/20 group-hover:scale-110 transition-transform">
                  <Share2 className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 font-bold">Pinagens</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Verifique diagramas de conectores e esquemas de fiação.
                  </p>
                </div>
              </button>
            </motion.div>
          ) : activeTab === "oscilloscope_menu" ? (
            <motion.div
              key="oscilloscope_menu"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="pb-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setActiveTab("home")}
                  className="bg-gray-50 hover:bg-gray-100 p-2.5 rounded-xl transition-colors active:scale-95 border border-gray-200/60 shadow-sm"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-700" />
                </button>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Osciloscópio
                  </h2>
                  <p className="text-sm text-gray-600">Teoria e prática com análise de sinais</p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <button
                  onClick={() => setActiveTab("didactic")}
                  className="group flex flex-col items-start gap-4 bg-white hover:bg-gray-50 border border-gray-200/60 shadow-sm hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg p-6 rounded-3xl transition-all active:scale-[0.98] text-left relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-3.5 rounded-2xl bg-red-600/10 text-red-600 border border-red-600/20 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 font-bold">Aprender sobre Ondas</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Aprenda teoria, identificação de defeitos e como analisar ondas.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab("real_signals")}
                  className="group flex flex-col items-start gap-4 bg-white hover:bg-gray-50 border border-gray-200/60 shadow-sm hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg p-6 rounded-3xl transition-all active:scale-[0.98] text-left relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-3.5 rounded-2xl bg-emerald-600/10 text-emerald-600 border border-emerald-600/20 group-hover:scale-110 transition-transform">
                    <Camera className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 font-bold">Sinais Reais</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Banco de dados da comunidade com fotos de testes em campo.
                    </p>
                  </div>
                </button>
              </div>
            </motion.div>
          ) : activeTab === "didactic" ? (
            <motion.div
              key="didactic"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="pb-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setActiveTab("oscilloscope_menu")}
                  className="bg-gray-50 hover:bg-gray-100 p-2.5 rounded-xl transition-colors active:scale-95 border border-gray-200/60 shadow-sm"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-700" />
                </button>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Aprender sobre Ondas
                  </h2>
                  <p className="text-sm text-gray-600">{filteredComponents.length} componentes encontrados</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {filteredComponents.map((comp, idx) => (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={comp.id}
                    onClick={() => handleComponentClick(comp, "didactic")}
                    className="group text-left w-full bg-white hover:bg-gray-200/60 border border-gray-200/60 shadow-sm hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg rounded-2xl p-5 transition-all flex items-start gap-5 active:scale-[0.98]"
                  >
                    <div
                      className={`p-3.5 rounded-2xl border transition-transform group-hover:scale-110 ${comp.type === "sensor" ? "bg-red-600/10 text-red-600 border-red-600/20" : "bg-orange-600/10 text-orange-600 border-orange-600/20"}`}
                    >
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        {comp.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-3">
                        {comp.shortDescription}
                      </p>
                      <span
                        className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-md border ${comp.type === "sensor" ? "bg-red-600/10 text-red-600 border-red-600/20" : "bg-orange-600/10 text-orange-600 border-orange-600/20"}`}
                      >
                        {comp.type === "sensor" ? "Sensor" : "Atuador"}
                      </span>
                    </div>
                  </motion.button>
                ))}

                {filteredComponents.length === 0 && (
                  <div className="text-center py-12 text-gray-600 text-lg">
                    <p>Nenhum componente encontrado.</p>
                  </div>
                )}
              </div>
            </motion.div>
          ) : activeTab === "real_signals" ? (
            <motion.div
              key="real_signals"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="pb-8 h-full"
            >
              {selectedRealSignalComponent ? (
                <RealSignalsList
                  component={selectedRealSignalComponent}
                  user={user}
                  onBack={() => setSelectedRealSignalComponent(null)}
                />
              ) : (
                <>
                  <div className="flex items-center gap-4 mb-8">
                    <button
                      onClick={() => setActiveTab("oscilloscope_menu")}
                      className="bg-gray-50 hover:bg-gray-100 p-2.5 rounded-xl transition-colors active:scale-95 border border-gray-200/60 shadow-sm"
                    >
                      <ArrowLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                        Sinais Reais Osciloscópio
                      </h2>
                      <p className="text-sm text-gray-600">{filteredComponents.length} componentes encontrados</p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {filteredComponents.map((comp, idx) => (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={comp.id}
                        onClick={() => handleComponentClick(comp, "real")}
                        className="group text-left w-full bg-white hover:bg-gray-200/60 border border-gray-200/60 shadow-sm hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg rounded-2xl p-5 transition-all flex items-center justify-between active:scale-[0.98]"
                      >
                        <div className="flex items-center gap-5">
                          <div
                            className={`p-3.5 rounded-2xl border transition-transform group-hover:scale-110 ${comp.type === "sensor" ? "bg-red-600/10 text-red-600 border-red-600/20" : "bg-orange-600/10 text-orange-600 border-orange-600/20"}`}
                          >
                            <Camera className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                              {comp.name}
                            </h3>
                            <span
                              className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-md border ${comp.type === "sensor" ? "bg-red-600/10 text-red-600 border-red-600/20" : "bg-orange-600/10 text-orange-600 border-orange-600/20"}`}
                            >
                              {comp.type === "sensor" ? "Sensor" : "Atuador"}
                            </span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                    {filteredComponents.length === 0 && (
                      <div className="text-center py-12 text-gray-600 text-lg">
                        <p>Nenhum componente encontrado.</p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          ) : activeTab === "multimeter" ? (
            <motion.div
              key="multimeter"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="pb-8 h-full"
            >
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setActiveTab("home")}
                  className="bg-gray-50 hover:bg-gray-100 p-2.5 rounded-xl transition-colors active:scale-95 border border-gray-200/60 shadow-sm"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-700" />
                </button>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Multímetro
                  </h2>
                  <p className="text-sm text-gray-600">{filteredComponents.length} testes disponíveis</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {filteredComponents.map((comp, idx) => (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={comp.id}
                    onClick={() => handleComponentClick(comp, "multimeter")}
                    className="group text-left w-full bg-white hover:bg-gray-200/60 border border-gray-200/60 shadow-sm hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg rounded-2xl p-5 transition-all flex items-center justify-between active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-5">
                      <div className="p-3.5 rounded-2xl border border-orange-600/20 bg-orange-600/10 text-orange-600 transition-transform group-hover:scale-110">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                          {comp.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-0.5">
                          Valores esperados e pinagem
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
                {filteredComponents.length === 0 && (
                  <div className="text-center py-12 text-gray-600 text-lg">
                    <p>Nenhum teste de multímetro encontrado.</p>
                  </div>
                )}
              </div>
            </motion.div>
          ) : activeTab === "diagnostic_worksheet" ? (
            <motion.div
              key="diagnostic_worksheet"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="pb-8 h-full"
            >
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setActiveTab("home")}
                  className="bg-gray-50 hover:bg-gray-100 p-2.5 rounded-xl transition-colors active:scale-95 border border-gray-200/60 shadow-sm"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-700" />
                </button>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Ficha de Diagnóstico
                  </h2>
                  <p className="text-sm text-gray-600">Selecione uma marca</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {["Honda", "Yamaha", "Shineray"]
                  .filter((brand) => user.role === "admin" || !hiddenBrands.includes(brand))
                  .map((brand, idx) => {
                    const isHidden = hiddenBrands.includes(brand);
                    return (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={brand}
                        onClick={() => setSelectedBrandWorksheet(brand)}
                        className={`group relative text-left w-full bg-white hover:bg-gray-200/60 border border-gray-200/60 shadow-sm hover:border-emerald-500/30 rounded-2xl p-5 transition-all flex items-center gap-4 active:scale-[0.98] ${isHidden ? 'opacity-50' : ''}`}
                      >
                        <div className="w-14 h-14 rounded-xl overflow-hidden shadow-md flex-shrink-0 bg-gray-50 p-1 border border-black/10 group-hover:scale-105 transition-transform">
                          <BrandLogo brand={brand} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-emerald-700 transition-colors">
                            {brand}
                          </h3>
                          <p className="text-sm text-gray-600 mt-0.5">
                            Ficha para {brand}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                  

              </div>
            </motion.div>
          ) : activeTab === "parameters" ? (
            <motion.div
              key="parameters"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="pb-8 h-full"
            >
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setActiveTab("home")}
                  className="bg-gray-50 hover:bg-gray-100 p-2.5 rounded-xl transition-colors active:scale-95 border border-gray-200/60 shadow-sm"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-700" />
                </button>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Parâmetros por Montadora
                  </h2>
                  <p className="text-sm text-gray-600">Selecione uma marca</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {["Honda", "Yamaha", "Shineray"]
                  .filter((brand) => user.role === "admin" || !hiddenBrands.includes(brand))
                  .map((brand, idx) => {
                    const isHidden = hiddenBrands.includes(brand);
                    return (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={brand}
                        onClick={() => setSelectedBrandParameters(brand)}
                        className={`group relative text-left w-full bg-white hover:bg-gray-200/60 border border-gray-200/60 shadow-sm hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg rounded-2xl p-5 transition-all flex items-center gap-4 active:scale-[0.98] ${isHidden ? 'opacity-50' : ''}`}
                      >
                        <div className="w-14 h-14 rounded-xl overflow-hidden shadow-md flex-shrink-0 bg-gray-50 p-1 border border-black/10 group-hover:scale-105 transition-transform">
                          <BrandLogo brand={brand} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-purple-700 transition-colors">
                            {brand}
                          </h3>
                          <p className="text-sm text-gray-600 mt-0.5">
                            Consulte {brand}
                          </p>
                        </div>
                        {user.role === "admin" && (
                          <div 
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors z-10"
                            onClick={(e) => toggleBrandVisibility(brand, e)}
                          >
                            {isHidden ? (
                              <EyeOff className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                            ) : (
                              <Eye className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                            )}
                          </div>
                        )}
                      </motion.button>
                    );
                  })}
              </div>
            </motion.div>
          ) : activeTab === "pinouts" ? (
            <motion.div
              key="pinouts"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="pb-8 h-full"
            >
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setActiveTab("home")}
                  className="bg-gray-50 hover:bg-gray-100 p-2.5 rounded-xl transition-colors active:scale-95 border border-gray-200/60 shadow-sm"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-700" />
                </button>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Pinagens por Montadora
                  </h2>
                  <p className="text-sm text-gray-600">Diagramas em desenvolvimento</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {["Honda", "Yamaha", "Shineray"]
                  .filter((brand) => user.role === "admin" || !hiddenBrands.includes(brand))
                  .map((brand, idx) => {
                    const isHidden = hiddenBrands.includes(brand);
                    return (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={brand}
                        onClick={() => setSelectedBrandPinouts(brand)}
                        className={`group relative text-left w-full bg-white hover:bg-gray-200/60 border border-gray-200/60 shadow-sm hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg rounded-2xl p-5 transition-all flex items-center gap-4 active:scale-[0.98] ${isHidden ? 'opacity-50' : ''}`}
                      >
                        <div className="w-14 h-14 rounded-xl overflow-hidden shadow-md flex-shrink-0 bg-gray-50 p-1 border border-black/10 group-hover:scale-105 transition-transform">
                          <BrandLogo brand={brand} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-rose-700 transition-colors">
                            {brand}
                          </h3>
                          <p className="text-sm text-gray-600 mt-0.5">
                            Verifique {brand}
                          </p>
                        </div>
                        {user.role === "admin" && (
                          <div 
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors z-10"
                            onClick={(e) => toggleBrandVisibility(brand, e)}
                          >
                            {isHidden ? (
                              <EyeOff className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                            ) : (
                              <Eye className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                            )}
                          </div>
                        )}
                      </motion.button>
                    );
                  })}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Modal de Seleção de Estator */}
        <AnimatePresence>
          {showStatorModal !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white z-50 flex items-end sm:items-center justify-center sm:p-4"
              onClick={() => setShowStatorModal(null)}
            >
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="bg-white border border-gray-300 w-full sm:w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl p-6 pb-12 sm:pb-6 shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6 sm:hidden"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-bold">Qual o tipo de estator?</h3>
                <p className="text-gray-600 mb-6">Selecione a configuração de fases da motocicleta para ver os testes específicos.</p>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => handleStatorSelection("estator-1f")}
                    className="w-full bg-white hover:bg-gray-200 border border-gray-300 p-4 rounded-xl text-left transition-colors flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">1 Fase (Monofásico)</h4>
                      <p className="text-sm text-gray-600">1 saída, retorna pelo chassi</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleStatorSelection("estator-2f")}
                    className="w-full bg-white hover:bg-gray-200 border border-gray-300 p-4 rounded-xl text-left transition-colors flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">2 Fases (Bifásico)</h4>
                      <p className="text-sm text-gray-600">Bobina flutuante, 2 saídas</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleStatorSelection("estator-3f")}
                    className="w-full bg-white hover:bg-gray-200 border border-gray-300 p-4 rounded-xl text-left transition-colors flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">3 Fases (Trifásico)</h4>
                      <p className="text-sm text-gray-600">Ligação estrela/triângulo, 3 saídas</p>
                    </div>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
