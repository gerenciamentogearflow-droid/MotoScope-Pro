const fs = require('fs');
let code = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf8');

code = code.replace(
`                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhaseId(phase.id);
                    setPlayTrigger(prev => prev + 1);
                  }}`,
`                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhaseId(phase.id);
                    const audioId = \`\${component.id}-phase-\${phase.id}\`;
                    globalAudioPlayer.play(audioId, phase.description);
                  }}`
);

code = code.replace(
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
          </AnimatePresence>`,
`                </div>
              </motion.div>
            )}
          </AnimatePresence>`
);

code = code.replace(
`import { WhatsAppAudioPlayer } from "./WhatsAppAudioPlayer";\n`,
``
);

code = code.replace(
`  const [playTrigger, setPlayTrigger] = useState<number>(0);\n`,
``
);

fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', code);
