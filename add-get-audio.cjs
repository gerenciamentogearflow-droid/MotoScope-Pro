const fs = require('fs');
let content = fs.readFileSync('src/lib/audioPlayer.ts', 'utf-8');

const toAdd = `export async function getAudioDataUri(audioId: string, textToSpeak?: string): Promise<string | undefined> {
  try {
    let dataUri: string | undefined;
    
    // 1. Try to get from local IndexedDB first
    const localDb = await getAudioDB();
    const cachedDataUri = await localDb.get(STORE_NAME, audioId);
    
    if (cachedDataUri) {
      dataUri = cachedDataUri;
    } else {
      // 2. If not found locally, fetch from /audio
      const res = await fetch(\`/audio/\${audioId}.mp3\`);
      if (res.ok) {
        const blob = await res.blob();
        const reader = new FileReader();
        dataUri = (await new Promise((resolve) => {
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        })) as string;
        
        if (dataUri) {
          await localDb.put(STORE_NAME, dataUri, audioId);
        }
      } else if (textToSpeak) {
        console.warn(\`Audio \${audioId} not found statically. Generating via TTS API...\`);
        const ttsRes = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: audioId, text: textToSpeak })
        });
        
        if (ttsRes.ok) {
          const blob = await ttsRes.blob();
          const reader = new FileReader();
          dataUri = (await new Promise((resolve) => {
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(blob);
          })) as string;
          
          if (dataUri) {
            await localDb.put(STORE_NAME, dataUri, audioId);
          }
        }
      }
      if (!dataUri) {
        dataUri = \`/audio/\${audioId}.mp3\`;
      }
    }
    return dataUri;
  } catch (err) {
    console.error("Failed to get audio data URI:", err);
    return \`/audio/\${audioId}.mp3\`;
  }
}
`;

if (!content.includes('export async function getAudioDataUri')) {
  content += '\n' + toAdd;
  fs.writeFileSync('src/lib/audioPlayer.ts', content);
}
