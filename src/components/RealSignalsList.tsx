import { useBackButton } from "../hooks/useBackButton";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { RealSignal, ComponentData, User } from "../types";
import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import {
  ArrowLeft,
  Upload,
  Camera,
  Loader2,
  Image as ImageIcon,
  Trash2,
  X,
  ZoomIn,
  CheckCircle2,
  AlertTriangle,
  Play,
  Video
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface RealSignalsListProps {
  component: ComponentData;
  user: User;
  onBack: () => void;
}

export function RealSignalsList({ component,
  user,
  onBack,
}: RealSignalsListProps) {
  useBackButton(true, onBack);

  const [signals, setSignals] = useState<RealSignal[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [motorcycleName, setMotorcycleName] = useState("");
  const [signalStatus, setSignalStatus] = useState<"ok" | "failure">("ok");
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);
  const [loadingVideo, setLoadingVideo] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
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

  const getVideoThumbnail = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.autoplay = true;
      video.muted = true;
      video.setAttribute("playsinline", "true");
      const url = URL.createObjectURL(file);
      video.src = url;

      video.onloadeddata = () => {
        video.currentTime = 0.1;
      };

      video.onseeked = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = video.videoWidth;
        let height = video.videoHeight;

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
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(video, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.7));
        URL.revokeObjectURL(url);
      };

      video.onerror = (e) => {
        URL.revokeObjectURL(url);
        reject(e);
      };
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !motorcycleName.trim()) return;

    setUploading(true);

    try {
      const isVideo = file.type.startsWith("video/");

      if (isVideo && file.size > 15 * 1024 * 1024) {
        alert("O vídeo é muito grande. Por favor, escolha um vídeo com no máximo 15MB.");
        setUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }

      let finalImageUrl = "";
      let mediaType: "image" | "video" = isVideo ? "video" : "image";
      let fullDataUrl = "";

      if (isVideo) {
        finalImageUrl = await getVideoThumbnail(file);
        const reader = new FileReader();
        fullDataUrl = await new Promise((resolve, reject) => {
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      } else {
        finalImageUrl = await new Promise((resolve, reject) => {
          const image = new window.Image();
          const objectUrl = URL.createObjectURL(file);

          image.onload = () => {
            URL.revokeObjectURL(objectUrl);
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            const MAX_WIDTH = 1200;
            const MAX_HEIGHT = 1200;
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
            resolve(canvas.toDataURL("image/jpeg", 0.7));
          };
          image.onerror = reject;
          image.src = objectUrl;
        });
      }

      const newSignalRef = doc(collection(db, "real_signals"));
      await setDoc(newSignalRef, {
        componentId: component.id,
        motorcycleName: motorcycleName.trim(),
        userName: user.username,
        imageUrl: finalImageUrl,
        mediaType,
        hasChunks: isVideo,
        status: signalStatus,
        createdAt: Date.now(),
      });

      if (isVideo && fullDataUrl) {
        const chunkSize = 800000;
        const chunks = [];
        for (let i = 0; i < fullDataUrl.length; i += chunkSize) {
          chunks.push(fullDataUrl.slice(i, i + chunkSize));
        }

        const batch = writeBatch(db);
        chunks.forEach((chunkData, index) => {
          const chunkRef = doc(db, `real_signals/${newSignalRef.id}/chunks/${index}`);
          batch.set(chunkRef, {
            index,
            data: chunkData
          });
        });
        await batch.commit();
      }

      setUploading(false);
      setShowUploadForm(false);
      setMotorcycleName("");
      setSignalStatus("ok");
      loadSignals();
    } catch (error) {
      console.error(error);
      setUploading(false);
      alert("Erro ao processar arquivo.");
    }
  };

  const handleDelete = async (signal: RealSignal) => {
    try {
      if (signal.hasChunks) {
        const chunksRef = collection(db, `real_signals/${signal.id}/chunks`);
        const snapshot = await getDocs(chunksRef);
        if (!snapshot.empty) {
          const batch = writeBatch(db);
          snapshot.docs.forEach((docSnap) => {
            batch.delete(docSnap.ref);
          });
          await batch.commit();
        }
      }

      await deleteDoc(doc(db, "real_signals", signal.id));
      setSignals((prev) => prev.filter((s) => s.id !== signal.id));
      setDeletingId(null);
    } catch (error) {
      console.error("Erro ao excluir sinal:", error);
      alert("Erro ao excluir sinal.");
    }
  };

  const handleViewMedia = async (signal: RealSignal) => {
    if (signal.mediaType === "video" && signal.hasChunks) {
      setLoadingVideo(signal.id);
      try {
        const chunksRef = collection(db, `real_signals/${signal.id}/chunks`);
        const q = query(chunksRef, orderBy("index", "asc"));
        const snapshot = await getDocs(q);
        
        let fullDataUrl = "";
        snapshot.docs.forEach((docSnap) => {
          fullDataUrl += docSnap.data().data;
        });
        
        setFullscreenVideo(fullDataUrl);
      } catch (error) {
        console.error("Error loading video:", error);
        alert("Erro ao carregar o vídeo.");
      } finally {
        setLoadingVideo(null);
      }
    } else {
      setFullscreenImage(signal.imageUrl);
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
          className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 shadow-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:text-gray-100 transition-all active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{component.name}</h2>
          <p className="text-xs uppercase tracking-widest font-bold text-emerald-600 mt-1">Sinais Reais da Comunidade</p>
        </div>
      </div>

      {!showUploadForm ? (
        <button
          onClick={() => setShowUploadForm(true)}
          className="w-full mb-8 bg-emerald-600/10 hover:bg-emerald-500/20 text-emerald-600 font-bold py-5 px-6 rounded-3xl flex items-center justify-center gap-3 transition-all border border-emerald-600/20 shadow-lg shadow-emerald-900/10 text-lg active:scale-[0.98] group"
        >
          <Camera className="w-6 h-6 group-hover:scale-110 transition-transform" />
          Tirar Foto do Sinal
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700/60 shadow-sm rounded-3xl p-6 md:p-8 mb-8 backdrop-blur-sm"
        >
          <h3 className="font-semibold text-lg mb-6 text-gray-900 dark:text-gray-100 tracking-wide">
            Enviar Novo Sinal
          </h3>

          <input
            type="text"
            placeholder="Qual a moto/modelo? (Ex: Honda CG 160)"
            value={motorcycleName}
            onChange={(e) => setMotorcycleName(e.target.value)}
            disabled={uploading}
            className="w-full bg-white dark:bg-gray-900 border border-black/10 rounded-2xl px-5 py-4 text-base text-gray-900 dark:text-gray-100 placeholder:text-gray-600 dark:text-gray-400 mb-6 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
          />

          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Condição do Sinal:</p>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setSignalStatus("ok")}
                disabled={uploading}
                className={`flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-2 border transition-all ${
                  signalStatus === "ok"
                    ? "bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm"
                    : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-800"
                }`}
              >
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">Sinal OK</span>
              </button>
              <button
                type="button"
                onClick={() => setSignalStatus("failure")}
                disabled={uploading}
                className={`flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-2 border transition-all ${
                  signalStatus === "failure"
                    ? "bg-red-50 border-red-500 text-red-700 shadow-sm"
                    : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-800"
                }`}
              >
                <AlertTriangle className="w-5 h-5" />
                <span className="font-medium">Com Falha</span>
              </button>
            </div>
          </div>

          <input
            type="file"
            accept="image/*,video/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          {uploading ? (
            <div className="flex flex-col items-center py-8">
              <Loader2 className="w-8 h-8 animate-spin text-emerald-500 mb-4" />
              <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-full h-2 mb-3 overflow-hidden border border-gray-200 dark:border-gray-700/60 shadow-sm">
                <div className="bg-emerald-500 h-2 rounded-full transition-all duration-300 w-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                Processando e Enviando...
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <button
                  onClick={openCamera}
                  className="flex-1 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 transition-colors border border-black/10"
                >
                  <Camera className="w-5 h-5" /> Câmera
                </button>
                <button
                  onClick={openGallery}
                  className="flex-1 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 transition-colors border border-black/10"
                >
                  <ImageIcon className="w-5 h-5" /> Galeria / Vídeo
                </button>
              </div>
              <button
                onClick={() => setShowUploadForm(false)}
                className="w-full py-4 bg-transparent hover:bg-red-500/10 text-gray-600 dark:text-gray-400 hover:text-red-600 rounded-2xl text-base font-bold transition-colors border border-transparent hover:border-red-500/20"
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
            <Loader2 className="w-10 h-10 animate-spin text-gray-600 dark:text-gray-400" />
          </div>
        ) : signals.length > 0 ? (
          <div className="grid gap-8">
            {signals.map((signal) => (
              <motion.div
                key={signal.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700/60 shadow-sm rounded-[2rem] overflow-hidden backdrop-blur-sm relative"
              >
                <div 
                  className="w-full aspect-video bg-gray-900 relative border-b border-gray-200 dark:border-gray-700/80 cursor-pointer group"
                  onClick={() => handleViewMedia(signal)}
                >
                  {loadingVideo === signal.id ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                      <div className="flex flex-col items-center gap-3">
                        <Loader2 className="w-8 h-8 text-white animate-spin" />
                        <span className="text-white/80 text-sm font-medium">Carregando vídeo...</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img
                        src={signal.imageUrl}
                        alt={`Sinal de ${signal.motorcycleName}`}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                        <div className="opacity-0 group-hover:opacity-100 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 transition-opacity">
                          {signal.mediaType === "video" ? (
                            <>
                              <Play className="w-5 h-5" />
                              <span className="font-medium text-sm">Assistir Vídeo</span>
                            </>
                          ) : (
                            <>
                              <ZoomIn className="w-5 h-5" />
                              <span className="font-medium text-sm">Ampliar</span>
                            </>
                          )}
                        </div>
                      </div>
                      {signal.mediaType === "video" && (
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white p-2 rounded-full opacity-100 transition-opacity">
                          <Video className="w-4 h-4" />
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-bold text-xl text-gray-900 dark:text-gray-100 font-bold tracking-tight">
                        {signal.motorcycleName}
                      </h4>
                      {signal.status === "failure" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-red-50 text-red-700 border border-red-200/60 shrink-0">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          Com Falha
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Sinal OK
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1.5">
                      Enviado por:{" "}
                      <span className="text-emerald-600 font-bold bg-emerald-600/10 px-2 py-0.5 rounded border border-emerald-600/20">
                        {signal.userName}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-4">
                    <div className="text-xs font-mono text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700/60 shadow-sm">
                      {new Date(signal.createdAt).toLocaleDateString("pt-BR")} às{" "}
                      {new Date(signal.createdAt).toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                    {(user.role === "admin" || user.username === signal.userName) && (
                      <div className="relative">
                        {deletingId === signal.id ? (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleDelete(signal);
                              }}
                              className="px-3 py-1.5 text-xs font-bold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
                            >
                              Confirmar
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setDeletingId(null);
                              }}
                              className="px-3 py-1.5 text-xs font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:bg-gray-700 rounded-lg transition-colors"
                            >
                              Cancelar
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setDeletingId(signal.id);
                            }}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors border border-transparent hover:border-red-200 relative z-10"
                            title="Excluir sinal"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-200 dark:border-gray-700/60 shadow-sm border-dashed">
            <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Camera className="w-8 h-8 text-gray-600 dark:text-gray-400" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg mb-2">
              Nenhum sinal registrado
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Seja o primeiro a enviar uma foto para este componente.
            </p>
          </div>
        )}
      </div>

      
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {fullscreenImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden"
            >
              <button
                onClick={() => setFullscreenImage(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm z-[10000]"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="w-full h-full flex items-center justify-center p-4">
                <TransformWrapper
                  initialScale={1}
                  minScale={0.5}
                  maxScale={5}
                  centerOnInit={true}
                  wheel={{ step: 0.1 }}
                >
                  {({ zoomIn, zoomOut, resetTransform }) => (
                    <React.Fragment>
                      <TransformComponent
                        wrapperStyle={{ width: "100%", height: "100%" }}
                        contentStyle={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
                      >
                        <img
                          src={fullscreenImage}
                          alt="Sinal em tela cheia"
                          className="max-w-full max-h-full object-contain"
                        />
                      </TransformComponent>
                    </React.Fragment>
                  )}
                </TransformWrapper>
              </div>
              <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none z-[10000]">
                <p className="text-white/80 text-sm bg-black/60 inline-block px-5 py-2.5 rounded-full backdrop-blur-sm font-medium">
                  Use os dedos para pinçar e dar zoom. Arraste para mover. Toque no X para fechar.
                </p>
              </div>
            </motion.div>
          )}
          {fullscreenVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setFullscreenVideo(null)}
            >
              <button
                onClick={() => setFullscreenVideo(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm z-[10000]"
              >
                <X className="w-6 h-6" />
              </button>
              <video
                src={fullscreenVideo}
                controls
                autoPlay
                className="max-w-full max-h-full rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </div>
  );
}
