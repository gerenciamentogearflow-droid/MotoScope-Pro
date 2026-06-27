import React, { useState, useEffect, useRef } from "react";
import { RealSignal, ComponentData, User } from "../types";
import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";
import {
  ArrowLeft,
  Upload,
  Camera,
  Loader2,
  Image as ImageIcon,
} from "lucide-react";
import { motion } from "motion/react";

interface RealSignalsListProps {
  component: ComponentData;
  user: User;
  onBack: () => void;
}

export function RealSignalsList({
  component,
  user,
  onBack,
}: RealSignalsListProps) {
  const [signals, setSignals] = useState<RealSignal[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [motorcycleName, setMotorcycleName] = useState("");
  const [showUploadForm, setShowUploadForm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadSignals();
  }, [component.id]);

  const loadSignals = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "real_signals"),
        where("componentId", "==", component.id),
        orderBy("createdAt", "desc"),
      );
      const snapshot = await getDocs(q);
      const loadedSignals = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as RealSignal[];
      setSignals(loadedSignals);
    } catch (error) {
      console.error("Erro ao carregar sinais:", error);
      // fallback in case index is missing or rules are restrictive
      if (error instanceof Error && error.message.includes("index")) {
        const qFallback = query(
          collection(db, "real_signals"),
          where("componentId", "==", component.id),
        );
        const snapshot = await getDocs(qFallback);
        const loadedSignals = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as RealSignal[];
        // sort manually
        loadedSignals.sort((a, b) => b.createdAt - a.createdAt);
        setSignals(loadedSignals);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !motorcycleName.trim()) return;

    setUploading(true);

    try {
      // Create an image element
      const image = new window.Image();
      const objectUrl = URL.createObjectURL(file);

      image.onload = async () => {
        URL.revokeObjectURL(objectUrl);
        // Create a canvas to resize the image
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Target max dimension
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = image.width;
        let height = image.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;

        ctx?.drawImage(image, 0, 0, width, height);

        // Get base64 string
        const base64String = canvas.toDataURL("image/jpeg", 0.7);

        // Save to firestore
        await addDoc(collection(db, "real_signals"), {
          componentId: component.id,
          motorcycleName: motorcycleName.trim(),
          userName: user.username,
          imageUrl: base64String,
          createdAt: Date.now(),
        });

        setUploading(false);
        setShowUploadForm(false);
        setMotorcycleName("");
        loadSignals();
      };

      image.src = objectUrl;
    } catch (error) {
      console.error(error);
      setUploading(false);
      alert("Erro ao processar imagem.");
    }
  };

  const openCamera = () => {
    if (!motorcycleName.trim()) {
      alert("Por favor, informe o nome da moto primeiro.");
      return;
    }
    if (fileInputRef.current) {
      fileInputRef.current.setAttribute("capture", "environment");
      fileInputRef.current.click();
    }
  };

  const openGallery = () => {
    if (!motorcycleName.trim()) {
      alert("Por favor, informe o nome da moto primeiro.");
      return;
    }
    if (fileInputRef.current) {
      fileInputRef.current.removeAttribute("capture");
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onBack}
          className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-zinc-300 hover:text-white transition-all active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">{component.name}</h2>
          <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mt-1">Sinais Reais da Comunidade</p>
        </div>
      </div>

      {!showUploadForm ? (
        <button
          onClick={() => setShowUploadForm(true)}
          className="w-full mb-8 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold py-5 px-6 rounded-3xl flex items-center justify-center gap-3 transition-all border border-emerald-500/20 shadow-lg shadow-emerald-900/10 text-lg active:scale-[0.98] group"
        >
          <Camera className="w-6 h-6 group-hover:scale-110 transition-transform" />
          Tirar Foto do Sinal
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 md:p-8 mb-8 backdrop-blur-sm"
        >
          <h3 className="font-semibold text-lg mb-6 text-white tracking-wide">
            Enviar Novo Sinal
          </h3>

          <input
            type="text"
            placeholder="Qual a moto/modelo? (Ex: Honda CG 160)"
            value={motorcycleName}
            onChange={(e) => setMotorcycleName(e.target.value)}
            disabled={uploading}
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-base text-zinc-100 placeholder:text-zinc-600 mb-6 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
          />

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          {uploading ? (
            <div className="flex flex-col items-center py-8">
              <Loader2 className="w-8 h-8 animate-spin text-emerald-500 mb-4" />
              <div className="w-full max-w-sm bg-black/40 rounded-full h-2 mb-3 overflow-hidden border border-white/5">
                <div className="bg-emerald-500 h-2 rounded-full transition-all duration-300 w-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              </div>
              <span className="text-sm text-zinc-400 font-medium tracking-wide">
                Processando e Enviando...
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <button
                  onClick={openCamera}
                  className="flex-1 bg-white/5 hover:bg-white/10 text-white py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 transition-colors border border-white/10"
                >
                  <Camera className="w-5 h-5" /> Câmera
                </button>
                <button
                  onClick={openGallery}
                  className="flex-1 bg-white/5 hover:bg-white/10 text-white py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 transition-colors border border-white/10"
                >
                  <ImageIcon className="w-5 h-5" /> Galeria
                </button>
              </div>
              <button
                onClick={() => setShowUploadForm(false)}
                className="w-full py-4 bg-transparent hover:bg-red-500/10 text-zinc-500 hover:text-red-400 rounded-2xl text-base font-bold transition-colors border border-transparent hover:border-red-500/20"
              >
                Cancelar
              </button>
            </div>
          )}
        </motion.div>
      )}

      <div className="pb-12">
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-10 h-10 animate-spin text-zinc-500" />
          </div>
        ) : signals.length > 0 ? (
          <div className="grid gap-8">
            {signals.map((signal) => (
              <motion.div
                key={signal.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-zinc-900/40 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-sm"
              >
                <div className="w-full aspect-video bg-black/80 relative border-b border-white/5">
                  <img
                    src={signal.imageUrl}
                    alt={`Sinal de ${signal.motorcycleName}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-xl text-white mb-2 tracking-tight">
                      {signal.motorcycleName}
                    </h4>
                    <p className="text-sm text-zinc-400 flex items-center gap-1.5">
                      Enviado por:{" "}
                      <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {signal.userName}
                      </span>
                    </p>
                  </div>
                  <div className="text-xs font-mono text-zinc-500 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 self-start md:self-center">
                    {new Date(signal.createdAt).toLocaleDateString("pt-BR")} às{" "}
                    {new Date(signal.createdAt).toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-900/20 rounded-[2rem] border border-white/5 border-dashed">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Camera className="w-8 h-8 text-zinc-500" />
            </div>
            <p className="text-zinc-300 font-semibold text-lg mb-2">
              Nenhum sinal registrado
            </p>
            <p className="text-zinc-500 text-sm">
              Seja o primeiro a enviar uma foto para este componente.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
