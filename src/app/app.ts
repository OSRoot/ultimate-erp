import { Component, inject, signal } from '@angular/core';
import { OSELECTRON_SERVICE } from './core/services/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ultimate-erp');
  public electronService   = inject(OSELECTRON_SERVICE);
  constructor() {}

  clickTest(){
      console.log("Angular button click fired");
    this.electronService.minimize();
  }
}
