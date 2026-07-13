const fs = require('fs');
let code = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf8');

code = code.replace(
`import { motion, AnimatePresence } from "framer-motion";`,
`import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppAudioPlayer } from "./WhatsAppAudioPlayer";`
);

fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', code);
