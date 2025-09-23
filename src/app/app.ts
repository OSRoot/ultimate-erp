import { Component, Inject, inject, model, PLATFORM_ID, signal } from '@angular/core';
import { OSELECTRON_SERVICE } from './core/services/electron/electron.service';
import { TranslationService } from './core/services/locale/translation.service';
import { isPlatformBrowser } from '@angular/common';
import { UiStateService } from './core/services/ui/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title  = signal('ultimate-erp');
  public electronService    = inject(OSELECTRON_SERVICE);
  public showHeader         = inject(UiStateService).showHeader;
  private locale            = inject(TranslationService)
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    if (isPlatformBrowser(platformId)) {
      this.locale.initTranslate();
    }
  }

  clickTest(){
      console.log("Angular button click fired");
      this.electronService.minimize();
  }
}
