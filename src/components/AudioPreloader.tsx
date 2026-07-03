import React, { useState, useEffect } from "react";
import { componentsDB } from "../data/componentsDB";
import { Download, CheckCircle2 } from "lucide-react";

interface AudioPreloaderProps {
  onComplete: () => void;
}

export function AudioPreloader({ onComplete }: AudioPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [totalFiles, setTotalFiles] = useState(0);
  const [downloadedFiles, setDownloadedFiles] = useState(0);
  const [isChecking, setIsChecking] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAndDownloadAudio = async () => {
      try {
        const audioUrls: string[] = [];
        componentsDB.forEach((comp) => {
          if (comp.waveformPhases) {
            comp.waveformPhases.forEach((phase) => {
              const audioId = `${comp.id}-phase-${phase.id}`;
              audioUrls.push(`/audio/${encodeURIComponent(audioId)}.mp3`);
            });
          }
        });

        setTotalFiles(audioUrls.length);

        if (!('caches' in window)) {
          console.warn("Cache API not available, skipping preloader");
          onComplete();
          return;
        }

        const cache = await caches.open('moto-audio-cache-v2');
        
        let downloadedCount = 0;
        const missingUrls: string[] = [];

        // Check which files we already have
        for (const url of audioUrls) {
          const response = await cache.match(url);
          if (response && response.ok) {
            downloadedCount++;
          } else {
            missingUrls.push(url);
          }
        }

        setDownloadedFiles(downloadedCount);
        setProgress((downloadedCount / audioUrls.length) * 100);
        setIsChecking(false);

        if (missingUrls.length === 0) {
          onComplete();
          return;
        }

        // Download missing files
        for (let i = 0; i < missingUrls.length; i++) {
          const url = missingUrls[i];
          try {
            const res = await fetch(url);
            
            if (res.ok) {
              await cache.put(url, res.clone());
            } else {
              console.warn(`Invalid response for ${url}: status=${res.status}`);
            }
          } catch (e) {
            console.error("Failed to download", url, e);
          }
          downloadedCount++;
          setDownloadedFiles(downloadedCount);
          setProgress((downloadedCount / audioUrls.length) * 100);
        }

        setTimeout(() => {
          onComplete();
        }, 500);

      } catch (err) {
        console.error("Error in AudioPreloader:", err);
        setError("Erro ao baixar áudios. O aplicativo funcionará sem áudio offline.");
        setTimeout(() => {
          onComplete();
        }, 3000);
      }
    };

    checkAndDownloadAudio();
  }, [onComplete]);

  // Se já estiver tudo baixado durante a checagem, não pisca a tela
  if (isChecking && progress === 100) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
      <div className="bg-[#121318] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl flex flex-col items-center text-center">
        {error ? (
          <div className="text-red-400 mb-4">{error}</div>
        ) : (
          <>
            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                {progress === 100 && !isChecking ? (
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                ) : (
                  <Download className="w-8 h-8 text-blue-400 animate-bounce" />
                )}
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-white mb-2">
              {isChecking ? "Verificando áudios..." : "Baixando arquivos de áudio"}
            </h2>
            
            <p className="text-gray-400 text-sm mb-6">
              Para garantir que as explicações do osciloscópio funcionem perfeitamente sem internet, estamos salvando os áudios no seu dispositivo.
            </p>

            <div className="w-full bg-black/50 rounded-full h-3 mb-2 border border-white/5 overflow-hidden">
              <div 
                className="bg-blue-500 h-full rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${Math.max(5, progress)}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
            
            <div className="text-blue-400 text-sm font-mono font-medium">
              {downloadedFiles} de {totalFiles} concluídos ({Math.round(progress)}%)
            </div>
          </>
        )}
      </div>
    </div>
  );
}
