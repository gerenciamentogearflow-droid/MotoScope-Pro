const fs = require('fs');
const file = 'src/components/AdminPanel.tsx';
let code = fs.readFileSync(file, 'utf8');

const importsToAdd = `
import { db } from "../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { componentsDB } from "../data/componentsDB";
import { Mic } from "lucide-react";
`;

code = code.replace(/import { motion, AnimatePresence } from "motion\/react";/, 'import { motion, AnimatePresence } from "motion/react";' + importsToAdd);

const stateToAdd = `
  // TTS Sync State
  const [isSyncingTTS, setIsSyncingTTS] = useState(false);
  const [ttsProgress, setTtsProgress] = useState("");
`;

code = code.replace(/const \[users, setUsers\] = useState<any\[\]>\(\[\]\);/, 'const [users, setUsers] = useState<any[]>([]);' + stateToAdd);

const funcToAdd = `
  const syncMissingTTS = async () => {
    if (adminUser.role !== "admin") return;
    setIsSyncingTTS(true);
    setTtsProgress("Iniciando...");
    
    try {
      for (const comp of componentsDB) {
        if (!comp.waveformPhases) continue;
        
        for (const phase of comp.waveformPhases) {
          const audioId = \`\${comp.id}-phase-\${phase.id}\`;
          
          // Check if it already exists
          const docRef = doc(db, 'audios', audioId);
          const docSnap = await getDoc(docRef);
          
          if (!docSnap.exists()) {
            setTtsProgress(\`Gerando \${audioId}...\`);
            const plainTextDescription = phase.description.replace(/\\*\\*/g, '').replace(/\\*/g, '');
            let textToSpeak = \`\${phase.title}. \${plainTextDescription}\`;
            textToSpeak = textToSpeak.replace(/Dwell/gi, 'Duél');
            
            const url = \`/api/tts?id=\${encodeURIComponent(audioId)}&text=\${encodeURIComponent(textToSpeak)}\`;
            
            try {
              const res = await fetch(url);
              if (res.ok) {
                const blob = await res.blob();
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                await new Promise((resolve) => {
                  reader.onloadend = async () => {
                    const base64data = reader.result;
                    await setDoc(docRef, { data: base64data });
                    resolve(true);
                  }
                });
              } else {
                console.error(\`Failed to fetch TTS for \${audioId}\`);
              }
            } catch (err) {
              console.error(\`Error creating TTS for \${audioId}\`, err);
            }
          }
        }
      }
      setTtsProgress("Sincronização completa!");
    } catch (err) {
      console.error(err);
      setTtsProgress("Erro na sincronização");
    } finally {
      setTimeout(() => {
        setIsSyncingTTS(false);
        setTtsProgress("");
      }, 3000);
    }
  };
`;

code = code.replace(/const handleRegister = async/, funcToAdd + '\n  const handleRegister = async');

const buttonToAdd = `
        {adminUser.role === "admin" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 overflow-hidden relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
                <Mic className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Sincronizar Áudios</h2>
                <p className="text-sm text-gray-600">Gera as narrações ausentes e salva no Banco de Dados</p>
              </div>
            </div>
            
            <button
              onClick={syncMissingTTS}
              disabled={isSyncingTTS}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-70 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {isSyncingTTS ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {ttsProgress}
                </>
              ) : (
                <>
                  <Mic className="w-5 h-5" />
                  Gerar Áudios Faltantes (TTS)
                </>
              )}
            </button>
          </motion.div>
        )}
`;

code = code.replace(/{adminUser.role === "admin" && \(/, buttonToAdd + '\n        {adminUser.role === "admin" && (');

fs.writeFileSync(file, code);
