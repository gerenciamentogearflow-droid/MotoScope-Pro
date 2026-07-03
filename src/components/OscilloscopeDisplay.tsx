import React, { useState, useRef, useEffect } from "react";
import { ComponentData, WaveformPhase } from "../types";
import { Battery, Activity, ArrowUp, ArrowDown, X, Maximize, Minimize, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface OscilloscopeDisplayProps {
  component: ComponentData;
}

export function OscilloscopeDisplay({ component }: OscilloscopeDisplayProps) {
  const [selectedPhaseId, setSelectedPhaseId] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLive, setIsLive] = useState(true);
  const [waveOffsets, setWaveOffsets] = useState<Record<string, number>>({});
  const [draggingWave, setDraggingWave] = useState<{ id: string, startX: number, startY: number, initialOffset: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: React.PointerEvent<Element>, waveId: string) => {
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    setDraggingWave({
      id: waveId,
      startX: e.clientX,
      startY: e.clientY,
      initialOffset: waveOffsets[waveId] || 0
    });
  };

  const handlePointerMove = (e: React.PointerEvent<Element>) => {
    if (!draggingWave || !screenRef.current) return;
    
    const isRotated = isFullscreen && window.innerHeight > window.innerWidth;
    
    let deltaPixelY;
    if (isRotated) {
      // In portrait fullscreen, element is rotated 90deg clockwise.
      // Element's visual Y axis (down) points to physical Left (-X).
      deltaPixelY = -(e.clientX - draggingWave.startX);
    } else {
      deltaPixelY = e.clientY - draggingWave.startY;
    }

    const height = screenRef.current.clientHeight;
    const viewBoxScale = 100 / (height * 0.85);
    const deltaViewBox = deltaPixelY * viewBoxScale;
    
    setWaveOffsets(prev => ({
      ...prev,
      [draggingWave.id]: draggingWave.initialOffset + deltaViewBox
    }));
  };

  const handlePointerUp = (e: React.PointerEvent<Element>) => {
    if (draggingWave) {
      e.currentTarget.releasePointerCapture(e.pointerId);
      setDraggingWave(null);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await containerRef.current?.requestFullscreen();
        // Tenta forçar o modo paisagem em dispositivos móveis
        if (screen.orientation && 'lock' in screen.orientation) {
          try {
            await (screen.orientation as any).lock("landscape");
          } catch (e) {
            console.log("Orientation lock not supported or blocked", e);
          }
        }
      } catch (err) {
        console.error("Error attempting to enable fullscreen:", err);
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
        if (screen.orientation && 'unlock' in screen.orientation) {
          (screen.orientation as any).unlock();
        }
      }
    }
  };

  // Generate SVG path based on wave type
  const getPath = () => {
    switch (component.waveType) {
      case "sine":
        // Pure continuous sine wave
        return "M 0 50 C 2 20 6 20 8 50 C 10 80 14 80 16 50 C 18 20 22 20 24 50 C 26 80 30 80 32 50 C 34 20 38 20 40 50 C 42 80 46 80 48 50 C 50 20 54 20 56 50 C 58 80 62 80 64 50 C 66 20 70 20 72 50 C 74 80 78 80 80 50 C 82 20 86 20 88 50 C 90 80 94 80 96 50 C 98 20 100 20 102 50";
      case "sine-gap":
        // Inductive CKP - organic AC wave, amplitude & freq increase, clear gap
        return "M 0 50 C 2 20 6 20 8 50 C 10 80 14 80 16 50 C 18 20 22 20 24 50 C 26 80 30 80 32 50 C 34 20 38 20 40 50 C 42 80 46 80 48 50 C 52 5 65 5 70 50 C 72 80 76 80 78 50 C 80 20 84 20 86 50 C 88 80 92 80 94 50 C 96 20 100 20 102 50";
      case "square":
        // Pure continuous square wave
        return "M 0 80 L 10 80 L 11 20 L 25 20 L 26 80 L 40 80 L 41 20 L 55 20 L 56 80 L 70 80 L 71 20 L 85 20 L 86 80 L 100 80";
      case "square-gap":
        // Digital Hall effect - slight tilt on rising/falling edges for realism
        return "M 0 80 L 10 80 L 11 20 L 20 20 L 21 80 L 30 80 L 31 20 L 40 20 L 41 80 L 65 80 L 66 20 L 75 20 L 76 80 L 85 80 L 86 20 L 95 20 L 96 80 L 100 80";
      case "injector":
        // Injector: 12V -> 0V (Dwell) -> 100V Flyback -> Pintle Bump (mechanical close) -> 12V
        return "M 0 70 L 29 70 L 29.5 90 L 35 89.5 L 40 90.5 L 45 89.5 L 50 90.5 L 55 90 L 55.5 15 L 57.5 50 L 58.5 48 L 59.5 55 C 61 65 63 70 68 70 L 100 70";
      case "ignition":
        // Ignition Coil: Dwell -> Spark Spike -> Burn Line (noisy) -> Extinguish -> Ringing
        return "M 0 60 L 15 60 L 15.5 80 L 45 80 L 45.5 5 L 46 45 L 48 46 L 50 44 L 53 46 L 56 44 L 58 46 L 58.5 25 L 59.5 75 L 61 40 L 62.5 70 L 64 50 L 65.5 65 L 67 55 L 68.5 60 L 100 60";
      case "tps":
        // TPS: Idle noise -> smooth slope -> WOT noise
        return "M 0 85 L 2 84 L 4 86 L 6 85 L 20 85 L 80 15 L 90 14 L 92 16 L 94 15 L 100 15";
      case "lambda":
        // Lambda: Rich/Lean cycling analog wave
        return "M 0 80 C 10 80 20 20 30 20 C 40 20 50 80 60 80 C 70 80 80 20 90 20 C 95 20 100 40 100 40";
      case "map":
        // MAP: Idle ripple -> Snap Throttle Drop -> WOT spike -> Decel vacuum
        return "M 0 70 Q 2 68 4 70 T 8 70 T 12 70 T 16 70 L 20 70 L 23 45 L 26 55 L 40 40 L 65 40 L 70 85 Q 75 85 80 80 Q 85 75 90 70 T 100 70";
      case "pwm":
        // PWM for Heater: 12V (20) -> 0V (80)
        return "M 0 20 L 10 20 L 10 80 L 35 80 L 35 20 L 60 20 L 60 80 L 85 80 L 85 20 L 100 20";
      case "dc-ripple":
        // Voltage Rectifier: DC voltage (~14V) with slight ripple
        return "M 0 30 Q 5 27 10 30 T 20 30 T 30 30 T 40 30 T 50 30 T 60 30 T 70 30 T 80 30 T 90 30 T 100 30";
      default:
        return "M 0 50 L 100 50";
    }
  };

  const generateSinePath = (amplitude: number, period: number, phaseShift: number) => {
    let path = `M 0 ${50 + Math.sin(phaseShift) * amplitude}`;
    for (let x = 1; x <= 200; x++) {
      const y = 50 + Math.sin((x * 2 * Math.PI) / period + phaseShift) * amplitude;
      path += ` L ${x} ${y}`;
    }
    return path;
  };

  type WaveData = { id: string; path: string; color: string; period?: number; dur?: number };

  const getWaves = (): WaveData[] => {
    if (component.id === "estator-2f") {
      return [
        { id: "p1", path: generateSinePath(-30, 16, 0), color: "#00FFFF", period: 16 },
        { id: "p2", path: generateSinePath(-30, 16, Math.PI), color: "#FF00FF", period: 16 }, // 180 deg out of phase
      ];
    }
    if (component.id === "estator-3f") {
      return [
        { id: "p1", path: generateSinePath(-30, 16, 0), color: "#00FFFF", period: 16 },
        { id: "p2", path: generateSinePath(-30, 16, (2 * Math.PI) / 3), color: "#FF00FF", period: 16 }, // 120 deg out of phase
        { id: "p3", path: generateSinePath(-30, 16, (4 * Math.PI) / 3), color: "#FFFF00", period: 16 }, // 240 deg out of phase
      ];
    }
    
    if (component.waveType === "ignition-timing") {
      const ckpPath = "M 0 50 Q 2.5 20 5 50 T 10 50 T 15 50 T 20 50 T 25 50 T 30 50 T 35 50 T 40 50 T 45 50 T 50 50 L 70 50 Q 72.5 20 75 50 T 80 50 T 85 50 T 90 50 T 95 50 T 100 50 Q 102.5 20 105 50 T 110 50 T 115 50 T 120 50 T 125 50 T 130 50 T 135 50 T 140 50 T 145 50 T 150 50 L 170 50 Q 172.5 20 175 50 T 180 50 T 185 50 T 190 50 T 195 50 T 200 50";
      
      const generateIgnPulseAt = (baseX: number) => {
        const startX = baseX + 25;
        const dwellX = baseX + 25.5;
        const sparkEndX = baseX + 42;
        const sparkPeakX = baseX + 42.5;
        const sparkStartLineX = baseX + 43;
        const extinguishX = baseX + 48;
        const endX = baseX + 58;
        return `L ${startX} 60 L ${dwellX} 80 L ${sparkEndX} 80 L ${sparkPeakX} 5 L ${sparkStartLineX} 45 L ${extinguishX} 46 L ${extinguishX+0.5} 25 L ${extinguishX+1.5} 75 L ${extinguishX+3} 40 L ${extinguishX+4.5} 70 L ${extinguishX+6} 50 L ${extinguishX+7.5} 65 L ${extinguishX+9} 55 L ${extinguishX+10} 60 L ${endX} 60`;
      };

      const ignPath = `M 0 60 ${generateIgnPulseAt(0)} L 100 60 ${generateIgnPulseAt(100)} L 200 60`;
      
      return [
        { id: "ckp", path: ckpPath, color: "#00FFFF" },
        { id: "ign", path: ignPath, color: "#FF00FF" },
      ];
    }
    
    return [{ id: "main", path: getPath(), color: "#00FFFF", period: 0 }];
  };

  const waves = getWaves();
  const hasAnimatedWaves = waves.some(w => w.period && w.period > 0);
  
  const selectedPhase = component.waveformPhases?.find((p) => p.id === selectedPhaseId);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let active = true;

    if (selectedPhase) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      
      const audioId = `${component.id}-phase-${selectedPhase.id}`;
      const plainTextDescription = selectedPhase.description.replace(/\*\*/g, '').replace(/\*/g, '');
      let textToSpeak = `${selectedPhase.title}. ${plainTextDescription}`;
      
      // Fix pronunciation of specific terms for the TTS
      textToSpeak = textToSpeak.replace(/Dwell/gi, 'Duél');
      
      // Since the app is hosted as a static site, use the pre-generated static audio files
      const url = `./audio/${encodeURIComponent(audioId)}.mp3`;
      const audio = new Audio(url);
      audioRef.current = audio;

      audio.play().catch((err) => {
        console.log("Erro ao tocar áudio gerado:", err);
      });
      
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
    return () => {
      active = false;
    };
  }, [selectedPhase, component.id]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);


  return (
    <div 
      ref={containerRef}
      className={`bg-gradient-to-b from-[#1a1c23] to-[#121318] p-3 sm:p-5 rounded-3xl shadow-2xl mx-auto w-full flex flex-col gap-3 sm:gap-5 border border-black/10 ring-1 ring-black/50 ${isFullscreen ? "max-w-none h-screen rounded-none p-0 sm:p-0 border-0 ring-0 overflow-hidden bg-black" : "max-w-4xl"}`}
    >
      <style>{`
        @media (orientation: portrait) {
          .fullscreen-mobile-rotate {
            transform: rotate(90deg);
            transform-origin: center;
            width: 100vh !important;
            height: 100vw !important;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -50vw;
            margin-left: -50vh;
          }
        }
      `}</style>
      {/* Screen Section */}
      <div 
        ref={screenRef}
        className={`flex-1 bg-[#050608] rounded-xl overflow-hidden flex flex-col font-mono text-xs text-zinc-400 border-[8px] border-[#0a0a0c] shadow-[inset_0_0_40px_rgba(0,0,0,1)] relative ring-1 ring-white/5 ${isFullscreen ? "fullscreen-mobile-rotate h-full rounded-none border-0 ring-0" : "aspect-[4/3] sm:aspect-auto sm:h-[360px]"}`}
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center px-4 py-2 bg-[#0a0a0c]/80 border-b border-white/5 z-10 text-[#00FF00]">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-2">
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 md:w-4 md:h-4 text-[#00FF00]/80" />
              <span className="font-semibold tracking-wider text-[10px] md:text-xs text-[#00FF00]/90">
                H={component.oscilloscopeSetup.timeDiv}
              </span>
            </div>
            {waves.length > 1 && (
              <span className="text-white/40 font-mono text-[8px] md:text-[9px] uppercase font-bold ml-0 md:ml-2">
                (Arraste as ondas p/ separar)
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            {hasAnimatedWaves && (
              <button 
                onClick={(e) => { e.stopPropagation(); setIsLive(!isLive); setSelectedPhaseId(null); }}
                className="flex items-center gap-1.5 bg-[#00FF00]/10 hover:bg-[#00FF00]/20 text-[#00FF00] px-3 py-1.5 rounded-md transition-colors mr-1 text-[10px] uppercase font-bold border border-[#00FF00]/30"
              >
                {isLive ? (
                  <>
                    <Pause className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Ao Vivo</span>
                  </>
                )}
              </button>
            )}
            <button 
              onClick={toggleFullscreen}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md transition-colors mr-2 text-[10px] uppercase font-bold"
            >
              {isFullscreen ? (
                <>
                  <Minimize className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">Fechar Tela Cheia</span>
                  <span className="sm:hidden">Fechar</span>
                </>
              ) : (
                <>
                  <Maximize className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">Tela Cheia</span>
                  <span className="sm:hidden">Ampliar</span>
                </>
              )}
            </button>
            <span className="bg-[#00FF00]/20 text-[#00FF00] border border-[#00FF00]/50 px-2 py-0.5 rounded text-[9px] md:text-[10px] uppercase font-bold tracking-widest hidden sm:inline-block">
              RUN
            </span>
            <div className="flex gap-2 text-zinc-500 font-bold text-[10px]">
              <span>V</span>
              <span>H</span>
            </div>
            <Battery className="w-3 h-3 md:w-4 md:h-4 text-zinc-500" />
          </div>
        </div>

        {/* Main Display Grid */}
        <div 
          className="relative flex-1 overflow-hidden flex flex-col justify-center items-center"
          onClick={() => setSelectedPhaseId(null)}
        >
          {/* Grid background */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[...Array(9)].map((_, i) => (
              <div
                key={`h-${i}`}
                className={`w-full h-[1px] ${i === 4 ? "bg-white/20" : "bg-transparent border-t border-dotted border-white/10"}`}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex justify-between pointer-events-none">
            {[...Array(13)].map((_, i) => (
              <div
                key={`v-${i}`}
                className={`h-full w-[1px] ${i === 6 ? "bg-white/20" : "bg-transparent border-l border-dotted border-white/10"}`}
              />
            ))}
          </div>

          {/* HTML Overlay for Channel Indicators */}
          {waves.length > 1 && waves.map((wave, index) => {
            const yOffset = waveOffsets[wave.id] || 0;
            return (
              <div
                key={`ch-tab-${wave.id}`}
                className="absolute right-0 w-6 h-6 flex items-center justify-center cursor-ns-resize touch-none select-none z-20"
                style={{
                  top: `calc(${50 + yOffset * 0.85}% - 12px)`,
                  backgroundColor: wave.color,
                  color: "#000",
                  borderRadius: "4px 0 0 4px",
                  fontWeight: "bold",
                  fontSize: "12px",
                  boxShadow: `0 0 10px ${wave.color}80`,
                  border: `1px solid ${wave.color}`,
                  borderRight: 'none'
                }}
                onPointerDown={(e) => handlePointerDown(e, wave.id)}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
              >
                {index + 1}
              </div>
            );
          })}

          {/* Wave SVG */}
          <svg
            className="absolute w-full h-full scale-y-[0.85] pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            style={{ overflow: 'visible' }}
          >
            {waves.map((wave) => (
              <g key={wave.id} transform={`translate(0, ${waveOffsets[wave.id] || 0})`}>
                <g>
                  {isLive && wave.period && wave.period > 0 ? (
                    <animateTransform 
                      attributeName="transform" 
                      type="translate" 
                      from="0 0" 
                      to={`-${wave.period} 0`} 
                      dur={`${wave.dur || 3}s`} 
                      repeatCount="indefinite" 
                    />
                  ) : null}
                  <path
                    d={wave.path}
                    fill="none"
                    stroke={wave.color}
                    strokeWidth="1.2"
                    vectorEffect="non-scaling-stroke"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    style={{
                      filter: `drop-shadow(0px 0px 4px ${wave.color}) drop-shadow(0px 0px 8px ${wave.color}80)`
                    }}
                  />
                </g>
              </g>
            ))}
            {(!hasAnimatedWaves || !isLive) && component.waveformPhases?.map((phase) => {
              if (phase.x === undefined || phase.y === undefined) return null;
              
              const yOffset = phase.waveId ? (waveOffsets[phase.waveId] || 0) : 0;
              const y = phase.y + yOffset;
              const labelY = (phase.labelY ?? phase.y - 10) + yOffset;
              const x = phase.x;
              const labelX = phase.labelX ?? phase.x;
              const waveColor = waves.find(w => w.id === phase.waveId)?.color || waves[0]?.color || "#00FFFF";
              
              return (
                <g 
                  key={phase.id} 
                  className="cursor-pointer transition-transform hover:scale-[1.02] origin-center pointer-events-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhaseId(phase.id);
                  }}
                  style={{ transformOrigin: `${labelX}px ${labelY}px` }}
                >
                  {/* Invisible Hitbox for easier clicking */}
                  <circle
                    cx={labelX}
                    cy={labelY}
                    r="8"
                    fill="transparent"
                  />
                  {/* Line pointing to wave */}
                  <line
                    x1={labelX}
                    y1={labelY}
                    x2={x}
                    y2={y}
                    stroke="#FFFFFF"
                    strokeWidth="0.5"
                    strokeDasharray="1,2"
                    className="opacity-50"
                  />
                  {/* Label Badge */}
                  <circle
                    cx={labelX}
                    cy={labelY}
                    r="4.5"
                    fill={selectedPhaseId === phase.id ? waveColor : "#000000"}
                    stroke={waveColor}
                    strokeWidth="1"
                    className="transition-colors duration-200"
                  />
                  <text
                    x={labelX}
                    y={labelY + 1.5}
                    fontSize="4"
                    fill={selectedPhaseId === phase.id ? "#000000" : waveColor}
                    textAnchor="middle"
                    fontWeight="bold"
                    className="transition-colors duration-200 pointer-events-none"
                  >
                    {phase.id}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Phase Details Area */}
          <AnimatePresence>
            {selectedPhase && (
              <motion.div
                key={selectedPhase.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`absolute left-2 right-2 sm:left-auto sm:right-4 sm:w-[320px] bg-transparent z-40 max-h-[70%] overflow-y-auto pointer-events-auto ${
                  (selectedPhase.labelY ?? selectedPhase.y) > 50 ? 'top-4' : 'bottom-4'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-3 sm:p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#00FF00] text-black w-5 h-5 rounded-full flex items-center justify-center font-black text-xs shrink-0 shadow-[0_0_10px_rgba(0,255,0,0.3)]">
                        {selectedPhase.id}
                      </span>
                      <h5 className="text-[#00FF00] font-bold text-xs sm:text-sm tracking-wide leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        {selectedPhase.title}
                      </h5>
                    </div>
                    <button 
                      onClick={() => setSelectedPhaseId(null)}
                      className="text-white/70 hover:text-white transition-colors p-1 -mr-1 -mt-1 shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-zinc-50 text-[10px] sm:text-[11px] leading-relaxed font-sans mt-1.5 whitespace-pre-wrap drop-shadow-[0_2px_4px_rgba(0,0,0,1)] font-medium">
                    {selectedPhase.description.split('\n').map((line, i) => {
                      if (line.includes('**')) {
                        const parts = line.split('**');
                        return (
                          <span key={i}>
                            {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-white">{part}</strong> : part)}
                            <br/>
                          </span>
                        );
                      }
                      return <span key={i}>{line}<br/></span>;
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Status Bar */}
        <div className="w-full bg-[#0a0a0c]/80 border-t border-white/5 px-4 py-2 flex justify-between items-center text-zinc-500 text-[10px] sm:text-xs z-10 min-h-[36px]">
          <span
            className="font-bold tracking-widest truncate max-w-[50%] mr-2 text-[#00FF00]/90"
            title={component.oscilloscopeSetup.voltageDiv}
          >
            {component.oscilloscopeSetup.voltageDiv}
          </span>
          <div className="flex items-center gap-3 shrink-0">
            <span className="bg-[#00FF00]/20 text-[#00FF00] border border-[#00FF00]/50 w-5 h-5 rounded flex items-center justify-center font-bold text-[9px] uppercase">
              T
            </span>
            <span className="font-semibold tracking-wider hidden sm:inline">
              {component.oscilloscopeSetup.triggerMode}
            </span>
            <span className="font-semibold tracking-wider sm:hidden">AUTO</span>
            <ArrowUp
              className={`w-3.5 h-3.5 ${component.oscilloscopeSetup.triggerEdge.includes("Descida") ? "rotate-180 text-red-600" : "text-red-600"}`}
            />
            <span className="font-bold tracking-wider text-gray-600">X10</span>
            <span className="font-bold tracking-wider text-gray-600">DC</span>
          </div>
        </div>
      </div>
    </div>
  );
}

