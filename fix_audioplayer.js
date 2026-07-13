const fs = require('fs');
let code = fs.readFileSync('src/components/WhatsAppAudioPlayer.tsx', 'utf8');

code = code.replace(
`  useEffect(() => {
    const currentAudio = audioRef.current;
    
    // Only handle explicit playTrigger replays here
    if (src && currentAudio && playTrigger && playTrigger > 0) {
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
  }, [src, playTrigger]);`,
`  const prevPlayTriggerRef = useRef(playTrigger);

  useEffect(() => {
    const currentAudio = audioRef.current;
    
    // Only handle explicit playTrigger replays here (when playTrigger actually changes and is > 0)
    if (src && currentAudio && playTrigger !== undefined && playTrigger > 0 && playTrigger !== prevPlayTriggerRef.current) {
      prevPlayTriggerRef.current = playTrigger;
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
  }, [src, playTrigger]);`
);

fs.writeFileSync('src/components/WhatsAppAudioPlayer.tsx', code);
