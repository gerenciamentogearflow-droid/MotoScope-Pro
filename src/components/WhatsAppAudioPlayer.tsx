import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { getAudioDataUri, globalAudioPlayer } from '../lib/audioPlayer';

export function WhatsAppAudioPlayer({ audioId, textToSpeak, autoPlay, playTrigger }: { audioId: string, textToSpeak?: string, autoPlay?: boolean, playTrigger?: number }) {
  const [src, setSrc] = useState<string | null>(null);
  const [playbackMode, setPlaybackMode] = useState<'html5' | 'synthesis'>('html5');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement>(null);
  const synthesisUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const synthesisIntervalRef = useRef<any>(null);
  const prevPlayTriggerRef = useRef(playTrigger);

  // Global event handler to pause/stop when another audio element plays
  useEffect(() => {
    const handleGlobalPlay = () => {
      if (isPlaying) {
        if (playbackMode === 'synthesis') {
          try {
            window.speechSynthesis.cancel();
          } catch (e) {
            console.error(e);
          }
          if (synthesisIntervalRef.current) {
            clearInterval(synthesisIntervalRef.current);
          }
        } else if (audioRef.current) {
          audioRef.current.pause();
        }
        setIsPlaying(false);
      }
    };
    window.addEventListener('motoscope:global-play', handleGlobalPlay);
    return () => window.removeEventListener('motoscope:global-play', handleGlobalPlay);
  }, [isPlaying, playbackMode]);

  // Load static or cached audio file
  useEffect(() => {
    let mounted = true;
    
    // Reset state for new audio
    setSrc(null);
    setPlaybackMode('html5');
    setIsPlaying(false);
    setProgress(0);
    setDuration(0);
    setHasError(false);
    setErrorMsg(null);

    if (synthesisIntervalRef.current) {
      clearInterval(synthesisIntervalRef.current);
    }
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      console.error(e);
    }

    getAudioDataUri(audioId, textToSpeak)
      .then((uri) => {
        if (!mounted) return;

        if (uri) {
          // This is a valid audio URI (blob, dataUri, or static file) - play with HTML5
          let fixedUri = uri;
          if (uri.startsWith('data:application/octet-stream;base64,')) {
            fixedUri = uri.replace('data:application/octet-stream;base64,', 'data:audio/mp3;base64,');
          }
          setSrc(fixedUri);
          setPlaybackMode('html5');
        } else if (textToSpeak) {
          // No physical audio file available (404 offline / custom component) - use speech synthesis fallback
          setPlaybackMode('synthesis');
          const words = textToSpeak.split(/\s+/).length;
          const estimatedDuration = Math.max(3, words * 0.4);
          setDuration(estimatedDuration);
        } else {
          console.error(`Audio URI missing for ${audioId}`);
          setErrorMsg("Sem Áudio");
          setHasError(true);
        }
      })
      .catch((e) => {
         console.error(`Audio fetch error for ${audioId}:`, e);
         if (mounted) {
           if (textToSpeak) {
             setPlaybackMode('synthesis');
             const words = textToSpeak.split(/\s+/).length;
             const estimatedDuration = Math.max(3, words * 0.4);
             setDuration(estimatedDuration);
           } else {
             setErrorMsg("Erro");
             setHasError(true);
           }
         }
      });

    return () => { 
      mounted = false; 
      if (synthesisIntervalRef.current) {
        clearInterval(synthesisIntervalRef.current);
      }
      try {
        window.speechSynthesis.cancel();
      } catch (e) {
        console.error(e);
      }
    };
  }, [audioId, textToSpeak]);

  // Handles explicit playTrigger or autoplay for synthesis
  const playSynthesis = () => {
    if (!textToSpeak) return;

    // Dispatch global stop event to pause other players
    globalAudioPlayer.stop();
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      console.error(e);
    }
    window.dispatchEvent(new CustomEvent('motoscope:global-play'));

    const cleanText = textToSpeak.replace(/\*\*/g, '').replace(/\*/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'pt-BR';
    
    // Attempt to set a Brazilian Portuguese male voice
    const voices = window.speechSynthesis.getVoices();
    const ptVoices = voices.filter(v => v.lang.startsWith('pt-BR') || v.lang.startsWith('pt'));
    const maleNames = ['daniel', 'ricardo', 'felipe', 'antonio', 'tiago', 'jonas', 'lucas', 'masculino', 'male', 'man', 'homem'];
    const maleVoice = ptVoices.find(v => 
      maleNames.some(name => v.name.toLowerCase().includes(name))
    );
    const ptVoice = maleVoice || ptVoices[0];
    
    if (ptVoice) {
      utterance.voice = ptVoice;
    }

    const words = cleanText.split(/\s+/).length;
    const estimatedDuration = Math.max(3, words * 0.4);
    setDuration(estimatedDuration);
    setProgress(0);

    let progressInterval: any;
    let startTime = Date.now();

    utterance.onstart = () => {
      setIsPlaying(true);
      startTime = Date.now();
      progressInterval = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        if (elapsed < estimatedDuration) {
          setProgress(elapsed);
        } else {
          setProgress(estimatedDuration);
        }
      }, 100);
      synthesisIntervalRef.current = progressInterval;
    };

    utterance.onend = () => {
      if (progressInterval) clearInterval(progressInterval);
      setIsPlaying(false);
      setProgress(0);
    };

    utterance.onerror = (e) => {
      console.error("Speech synthesis error:", e);
      if (progressInterval) clearInterval(progressInterval);
      setIsPlaying(false);
      setProgress(0);
    };

    synthesisUtteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  // Listen to manual play triggers
  useEffect(() => {
    if (playbackMode === 'synthesis') {
      if (playTrigger !== undefined && playTrigger > 0 && playTrigger !== prevPlayTriggerRef.current) {
        prevPlayTriggerRef.current = playTrigger;
        playSynthesis();
      }
      return;
    }

    const currentAudio = audioRef.current;
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
      if (currentAudio) {
        currentAudio.pause();
      }
    };
  }, [src, playTrigger, playbackMode]);

  const handleLoadedData = () => {
    if (playbackMode === 'synthesis') return;
    if (audioRef.current && autoPlay) {
      globalAudioPlayer.stop();
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(e => {
          console.error("Autoplay failed:", e);
          setIsPlaying(false);
        });
      }
    }
  };

  const togglePlay = () => {
    if (playbackMode === 'synthesis') {
      if (isPlaying) {
        try {
          window.speechSynthesis.cancel();
        } catch (e) {
          console.error(e);
        }
        setIsPlaying(false);
        if (synthesisIntervalRef.current) {
          clearInterval(synthesisIntervalRef.current);
        }
        setProgress(0);
      } else {
        playSynthesis();
      }
      return;
    }

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

  const handleError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const mediaError = audioRef.current?.error;
    console.error(`Audio element error for ${audioId}: code ${mediaError?.code}`, mediaError?.message);

    // Dynamic recovery: If HTML5 audio fails and we have the text to speak, switch immediately to SpeechSynthesis!
    if (textToSpeak) {
      console.warn(`Dynamic fallback to Speech Synthesis for ${audioId}`);
      setPlaybackMode('synthesis');
      setHasError(false);
      setErrorMsg(null);
      const words = textToSpeak.split(/\s+/).length;
      const estimatedDuration = Math.max(3, words * 0.4);
      setDuration(estimatedDuration);
      return;
    }

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
    if (playbackMode === 'synthesis') return; // seeking is not supported in speech synthesis fallback
    const value = parseFloat(e.target.value);
    setProgress(value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };

  // Do not hide the player if we have speech synthesis fallback text
  if (hasError && !src && !textToSpeak) {
    return null;
  }

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-full p-2 flex items-center gap-3 shadow-sm border border-gray-100 dark:border-[#2A3B5C] mt-4 mb-2">
      {playbackMode === 'html5' && src && !hasError && (
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
        disabled={playbackMode === 'html5' && (!src || hasError)}
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
          disabled={playbackMode === 'synthesis' || hasError || (playbackMode === 'html5' && !src)}
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
