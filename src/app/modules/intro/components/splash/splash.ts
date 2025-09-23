import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-splash',
  standalone: true,
  templateUrl: './splash.html',
  styleUrl: './splash.scss',
  imports: [TranslateModule]
})
export class Splash implements OnInit, OnDestroy {

  private timeouts: any[] = [];
  private typingSpeed = 100;   // ms per character
  private pauseTime = 3000;   // pause after finishing
  private messageIndex = 0;

  // ✅ signal for reactive updates
  public currentText = signal(null);

  private messages = [
    'system.modules.intro.splash.loading',
    'system.modules.intro.splash.starting',
    'system.modules.intro.splash.shadows'
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.startTypingLoop();
  }

  ngOnDestroy(): void {
    this.clearAllTimeouts();
  }

  private async startTypingLoop() {
    while (true) {
      const msgKey = this.messages[this.messageIndex];
      const text = this.translate.instant(msgKey) || msgKey;

      await this.typeText(text);
      await this.wait(this.pauseTime);
      await this.deleteText();

      this.messageIndex = (this.messageIndex + 1) % this.messages.length;
    }
  }

  private async typeText(text: string): Promise<void> {
    for (let i = 0; i <= text.length; i++) {
      this.currentText.set(text.substring(0, i)); // ✅ signal update
      if (i> 0) this.playSnareTypingKey();
      await this.wait(this.typingSpeed);
    }
  }

  private async deleteText(): Promise<void> {
    while (this.currentText().length > 0) {
      this.currentText.set(this.currentText().substring(0, this.currentText().length - 1));
      await this.wait(this.typingSpeed / 1.5);
    }
  }

  private wait(ms: number): Promise<void> {
    return new Promise(resolve => {
      const timeout = setTimeout(resolve, ms);
      this.timeouts.push(timeout);
    });
  }

  private clearAllTimeouts(): void {
    this.timeouts.forEach(timeout => clearTimeout(timeout));
    this.timeouts = [];
  }



private playSnareTypingKey() {
  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();

  // --- Short white noise burst for snare / click ---
  const bufferSize = audioCtx.sampleRate * 0.04; // 40ms
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 3 - 1);

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  const noiseGain = audioCtx.createGain();
  noiseGain.gain.setValueAtTime(0.08, audioCtx.currentTime);
  noiseGain.gain.exponentialRampToValueAtTime(0.005, audioCtx.currentTime + 0.004);

  noise.connect(noiseGain).connect(audioCtx.destination);

  // --- Tiny metallic oscillator for high-tech flavor ---
  const osc = audioCtx.createOscillator();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(1200 + Math.random() * 100, audioCtx.currentTime);

  const oscGain = audioCtx.createGain();
  oscGain.gain.setValueAtTime(0.0009, audioCtx.currentTime);
  oscGain.gain.exponentialRampToValueAtTime(0.002, audioCtx.currentTime + 0.005);

  osc.connect(oscGain).connect(audioCtx.destination);

  // Start & stop
  noise.start();
  osc.start();
  noise.stop(audioCtx.currentTime + 0.008);
  osc.stop(audioCtx.currentTime + 0.05);
}


}
