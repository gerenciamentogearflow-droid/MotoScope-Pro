async function test() {
  const { EdgeTTS } = await import('node-edge-tts');
  console.log(EdgeTTS ? "EdgeTTS loaded" : "Failed");
}
test();
