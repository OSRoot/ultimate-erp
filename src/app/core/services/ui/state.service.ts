import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiStateService {
  private _showHeader = signal<boolean>(true);

  showHeader = this._showHeader.asReadonly();

  setHeader(value: boolean) {
    this._showHeader.set(value);
  }
}
