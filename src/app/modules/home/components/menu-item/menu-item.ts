import { Component, inject, model, OnInit } from '@angular/core';
import { OSELECTRON_SERVICE } from '../../../../core/services/electron/electron.service';
@Component({
  selector: 'app-menu-item',
  standalone: false,
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.scss'
})
export class MenuItem implements OnInit {
  faIcon = model<any>('')
  private soundsReady = false;
  private tapSound !:HTMLAudioElement;
  private electron = inject(OSELECTRON_SERVICE)
  ngOnInit(): void {
    void document.body.offsetHeight; // force reflow
    this.tapSound = new Audio('/assets/sounds/tap-tone.wav');
    this.tapSound.volume = 0.3;

    const onFirstInteraction = () => {
      this.soundsReady = true;
      this.tapSound.play().catch(err => console.warn('Tap sound blocked', err));
      // clean up listeners
      document.removeEventListener('click', onFirstInteraction);
      document.removeEventListener('keydown', onFirstInteraction);
    }
    document.addEventListener('click', onFirstInteraction);
    document.addEventListener('keydown', onFirstInteraction);
  }


    playHoverSound() {
    if (this.soundsReady && this.tapSound) {
      this.tapSound.currentTime = 0; // restart so it feels responsive
      this.tapSound.play().catch(() => {});
    }
  }

  openChild(id:string, route:string) {
    this.electron.openChildWindow(id, route);
  }
}
