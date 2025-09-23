import { Component, OnInit, signal, Inject, PLATFORM_ID, inject, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { UiStateService } from '../../../../core/services/ui/state.service';

@Component({
  selector: 'app-stage-01',
  standalone: false,
  templateUrl: './stage-01.html',
  styleUrl: './stage-01.scss'
})
export class Stage01 implements OnInit, AfterViewInit {
  isVisible       = signal<boolean>(false);
  private router  = inject(Router);
  private hoverSound!: HTMLAudioElement;
  private entranceSound!: HTMLAudioElement;
  private leaveClickSound!: HTMLAudioElement;
  private acceptSound!: HTMLAudioElement;
  private soundsReady = false;
  public showHeaderSerivce = inject(UiStateService);
  closing = signal<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // show header
    this.showHeaderSerivce.setHeader(true);
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    void document.body.offsetHeight; // force reflow

    const onFirstInteraction = () => {
      // prepare sounds
      this.hoverSound = new Audio('/assets/sounds/tone-01.wav');
      this.entranceSound = new Audio('/assets/sounds/entrance.wav');
      this.leaveClickSound = new Audio('/assets/sounds/leave-click.wav');
      this.acceptSound = new Audio('/assets/sounds/accept.wav');
      this.hoverSound.volume = 0.3;
      this.entranceSound.volume = 0.7;

      this.soundsReady = true;

      // now show the window + play entrance sound
      this.isVisible.set(true);
      this.entranceSound.play().catch(err => console.warn('Entrance sound blocked', err));

      // clean up listeners
      document.removeEventListener('click', onFirstInteraction);
      document.removeEventListener('keydown', onFirstInteraction);
    };

    document.addEventListener('click', onFirstInteraction);
    document.addEventListener('keydown', onFirstInteraction);
  }

  playHoverSound() {
    if (this.soundsReady && this.hoverSound) {
      this.hoverSound.currentTime = 0; // restart so it feels responsive
      this.hoverSound.play().catch(() => {});
    }
  }

  playLeaveClickSound() {
    if (this.soundsReady && this.leaveClickSound) {
      this.leaveClickSound.currentTime = 0.2; // restart so it feels responsive
      this.leaveClickSound.play().catch(() => {});
    }
  }

  decline() {}
  onAccept() {
    if (this.soundsReady && this.acceptSound) {
      this.acceptSound.currentTime = 0;
      this.acceptSound.play().catch(() => {});
    }
    setTimeout(() => {
      this.closing.set(true);
    }, 300);
    // wait until animation ends, then navigate
    setTimeout(() => {
      this.router.navigate(['/intro/splash']);
    }, 600); // matches CSS duration
    this.showHeaderSerivce.setHeader(false);
  }
}
