import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { getAudioDataUri, globalAudioPlayer } from '../lib/audioPlayer';

export function WhatsAppAudioPlayer({ audioId, textToSpeak, autoPlay, playTrigger }: { audioId: string, textToSpeak?: string, autoPlay?: boolean, playTrigger?: number }) {
  const [src, setSrc] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleGlobalPlay = () => {
      if (audioRef.current && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
    window.addEventListener('motoscope:global-play', handleGlobalPlay);
    return () => window.removeEventListener('motoscope:global-play', handleGlobalPlay);
  }, [isPlaying]);

  useEffect(() => {
    let mounted = true;
    
    // Reset state for new audio
    setSrc(null);
    setIsPlaying(false);
    setProgress(0);
    setDuration(0);
    setHasError(false);

    getAudioDataUri(audioId, textToSpeak)
      .then((uri) => {
        if (mounted) {
           if (uri) {
             let fixedUri = uri;
             if (uri.startsWith('data:application/octet-stream;base64,')) {
               fixedUri = uri.replace('data:application/octet-stream;base64,', 'data:audio/mp3;base64,');
             }
             setSrc(fixedUri);
           } else {
             console.error(`Audio URI missing for ${audioId}`);
             setErrorMsg("Sem URI");
             setHasError(true);
           }
        }
      })
      .catch((e) => {
         console.error(`Audio fetch error for ${audioId}:`, e);
         if (mounted) {
           setErrorMsg("Falha Fetch");
           setHasError(true);
         }
      });
    return () => { mounted = false; };
  }, [audioId, textToSpeak]);

  const prevPlayTriggerRef = useRef(playTrigger);

  useEffect(() => {
    const currentAudio = audioRef.current;
    
    // Only handle explicit playTrigger replays here
    if (src && currentAudio && playTrigger !== undefined && playTrigger > 0 && playTrigger !== prevPlayTriggerRef.current) {
      prevPlayTriggerRef.current = playTrigger;
      globalAudioPlayer.stop();
      currentAudio.currentTime = 0;
      const playPromise = currentAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(e => {
          console.error("Replay failed:", e);
          setIsPlaying(false);
        });
      }
    }
    
    return () => {
      // Pause only if we're unmounting or changing src
      if (currentAudio) {
        currentAudio.pause();
      }
    };
  }, [src, playTrigger]);

  const handleLoadedData = () => {
    if (audioRef.current && autoPlay) {
      globalAudioPlayer.stop();
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(e => {
          console.error("Autoplay on load failed:", e);
          setIsPlaying(false);
        });
      }
    }
  };

  const togglePlay = () => {
    if (!audioRef.current || hasError) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      globalAudioPlayer.stop();
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(e => {
        console.error("Audio play failed:", e);
        setIsPlaying(false);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const mediaError = audioRef.current?.error;
    console.error(`Audio element error for ${audioId}: code ${mediaError?.code}`, mediaError?.message);
    let errMsg = "Erro";
    if (mediaError) {
      switch (mediaError.code) {
        case 1: errMsg = "Abortado"; break;
        case 2: errMsg = "Rede"; break;
        case 3: errMsg = "Decode"; break;
        case 4: errMsg = "Src Inválido"; break;
      }
    }
    setErrorMsg(errMsg);
    setHasError(true);
    setIsPlaying(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setProgress(value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };

  if (hasError && !src) {
    return null; // hide completely if no audio
  }

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-full p-2 flex items-center gap-3 shadow-sm border border-gray-100 dark:border-[#2A3B5C] mt-4 mb-2">
      {src && !hasError && (
        <audio
          ref={audioRef}
          src={src}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onLoadedData={handleLoadedData}
          onEnded={handleEnded}
          onError={handleError}
        />
      )}
      <button
        onClick={togglePlay}
        disabled={!src || hasError}
        className="w-10 h-10 flex-shrink-0 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50 shadow-sm"
      >
        {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
      </button>
      
      <div className="flex-1 flex flex-col justify-center">
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={progress}
          onChange={handleSeek}
          disabled={hasError || !src}
          className="w-full h-1.5 bg-gray-200 dark:bg-[#232F46] rounded-lg appearance-none cursor-pointer accent-red-600 disabled:opacity-50"
        />
        <div className="flex justify-between mt-1 px-1">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            {hasError ? (errorMsg || "Erro") : formatTime(progress)}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            {hasError ? "0:00" : formatTime(duration)}
          </span>
        </div>
      </div>          
    </div>
  );
}
