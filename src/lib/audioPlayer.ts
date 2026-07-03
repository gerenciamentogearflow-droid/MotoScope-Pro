export class AudioPlayer {
  private ctx: AudioContext | null = null;
  private cache: Record<string, AudioBuffer> = {};
  private currentSource: AudioBufferSourceNode | null = null;

  public init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public async play(url: string) {
    this.init();
    if (!this.ctx) return;

    this.stop();

    try {
      let buffer = this.cache[url];
      if (!buffer) {
        const response = await fetch(url);
        if (!response.ok) return;
        const arrayBuffer = await response.arrayBuffer();
        
        buffer = await new Promise((resolve, reject) => {
          try {
            this.ctx!.decodeAudioData(arrayBuffer, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
        
        this.cache[url] = buffer;
      }

      const source = this.ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(this.ctx.destination);
      source.start(0);
      this.currentSource = source;
    } catch (err) {
      console.warn("Failed to play audio:", err);
    }
  }

  public stop() {
    if (this.currentSource) {
      try {
        this.currentSource.stop();
      } catch (e) {}
      try {
        this.currentSource.disconnect();
      } catch (e) {}
      this.currentSource = null;
    }
  }
}

export const globalAudioPlayer = new AudioPlayer();
