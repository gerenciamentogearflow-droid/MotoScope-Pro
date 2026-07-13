const fs = require('fs');
let code = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf8');

code = code.replace(
`  const [selectedPhaseId, setSelectedPhaseId] = useState<number | null>(null);`,
`  const [selectedPhaseId, setSelectedPhaseId] = useState<number | null>(null);
  const [playTrigger, setPlayTrigger] = useState<number>(0);`
);

code = code.replace(
`import { OscilloscopeControls } from "./OscilloscopeControls";`,
`import { OscilloscopeControls } from "./OscilloscopeControls";
import { WhatsAppAudioPlayer } from "./WhatsAppAudioPlayer";`
);

code = code.replace(
`  const selectedPhase = component.waveformPhases?.find((p) => p.id === selectedPhaseId);

  const playAudioForPhase = (phaseId: number, textToSpeak?: string) => {
    const audioId = \`\${component.id}-phase-\${phaseId}\`;
    globalAudioPlayer.play(audioId, textToSpeak);
  };

  useEffect(() => {`,
`  const selectedPhase = component.waveformPhases?.find((p) => p.id === selectedPhaseId);

  useEffect(() => {`
);

code = code.replace(
`                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhaseId(phase.id);
                    playAudioForPhase(phase.id, phase.description);
                  }}`,
`                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhaseId(phase.id);
                    setPlayTrigger(prev => prev + 1);
                  }}`
);

code = code.replace(
`                </div>
              </motion.div>
            )}
          </AnimatePresence>`,
`                  <div className="mt-2">
                    <WhatsAppAudioPlayer 
                      audioId={\`\${component.id}-phase-\${selectedPhase.id}\`} 
                      textToSpeak={selectedPhase.description} 
                      autoPlay={true}
                      playTrigger={playTrigger}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>`
);

fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', code);
