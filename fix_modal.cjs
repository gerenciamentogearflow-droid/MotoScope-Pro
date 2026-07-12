const fs = require('fs');
let code = fs.readFileSync('src/components/RealSignalsList.tsx', 'utf8');

const regex = /<AnimatePresence>[\s\S]*?<\/AnimatePresence>/;

const newModal = `
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
`;

if (regex.test(code)) {
  code = code.replace(regex, newModal);
  fs.writeFileSync('src/components/RealSignalsList.tsx', code);
  console.log("Replaced successfully!");
} else {
  console.log("Could not find block to replace");
}
