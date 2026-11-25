// Audio Manager for retro sound effects

class AudioManager {
  private enabled: boolean = true;
  private audioCtx: AudioContext | null = null;
  private keySounds: HTMLAudioElement[] = [];
  private mouseDownSound: HTMLAudioElement | null = null;
  private mouseUpSound: HTMLAudioElement | null = null;
  private startupSound: HTMLAudioElement | null = null;

  constructor() {
    this.initAudioElements();
  }

  private initAudioElements() {
    try {
      for (let i = 1; i <= 6; i++) {
        const audio = new Audio(`/audio/keyboard/key_${i}.mp3`);
        audio.volume = 0.4;
        this.keySounds.push(audio);
      }
      this.mouseDownSound = new Audio('/audio/mouse/mouse_down.mp3');
      if (this.mouseDownSound) this.mouseDownSound.volume = 0.35;

      this.mouseUpSound = new Audio('/audio/mouse/mouse_up.mp3');
      if (this.mouseUpSound) this.mouseUpSound.volume = 0.35;

      this.startupSound = new Audio('/audio/startup/startup.mp3');
      if (this.startupSound) this.startupSound.volume = 0.5;
    } catch {
      // Graceful fallback
    }
  }

  public setEnabled(val: boolean) {
    this.enabled = val;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  private getAudioContext(): AudioContext | null {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  public playKeyClick() {
    if (!this.enabled) return;
    if (this.keySounds.length > 0) {
      const randIdx = Math.floor(Math.random() * this.keySounds.length);
      const sound = this.keySounds[randIdx];
      sound.currentTime = 0;
      sound.play().catch(() => this.synthBeep(440 + Math.random() * 200, 0.03));
    } else {
      this.synthBeep(440 + Math.random() * 200, 0.03);
    }
  }

  public playMouseDown() {
    if (!this.enabled) return;
    if (this.mouseDownSound) {
      this.mouseDownSound.currentTime = 0;
      this.mouseDownSound.play().catch(() => this.synthBeep(800, 0.02));
    } else {
      this.synthBeep(800, 0.02);
    }
  }

  public playMouseUp() {
    if (!this.enabled) return;
    if (this.mouseUpSound) {
      this.mouseUpSound.currentTime = 0;
      this.mouseUpSound.play().catch(() => this.synthBeep(650, 0.02));
    } else {
      this.synthBeep(650, 0.02);
    }
  }

  public playStartup() {
    if (!this.enabled) return;
    if (this.startupSound) {
      this.startupSound.currentTime = 0;
      this.startupSound.play().catch(() => this.synthChime());
    } else {
      this.synthChime();
    }
  }

  public playWindowOpen() {
    if (!this.enabled) return;
    this.synthChime();
  }

  public playWindowClose() {
    if (!this.enabled) return;
    this.synthBeep(320, 0.06);
  }

  // Fallback synthesizer methods
  private synthBeep(freq: number, duration: number) {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio not permitted yet
    }
  }

  private synthChime() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.06, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.25);
      });
    } catch {
      // Ignore
    }
  }
}

export const soundManager = new AudioManager();
