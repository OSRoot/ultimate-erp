import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class OSELECTRON_SERVICE {
  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser && (window as any).OSsys) {
      console.log('[OSELECTRON_SERVICE] Electron API detected.');
    } else {
      console.warn('[OSELECTRON_SERVICE] Running in browser mode — Electron API unavailable.');
    }
  }

  /**
   * --- WINDOW CONTROLS ---
   */
  minimize(): Promise<void> | void {
    return this.invokeElectron(() => this.api.windowAction('minimize'), 'minimize');
  }

  toggleMaximize(): Promise<void> | void {
    return this.invokeElectron(() => this.api.windowAction('maximize'), 'toggleMaximize');
  }

  close(): Promise<void> | void {
    return this.invokeElectron(() => this.api.windowAction('close'), 'close');
  }

  /**
   * --- WINDOW MANAGEMENT ---
   */
  openChildWindow(id: string, route: string, options?: Record<string, any>): Promise<void> | void {
    return this.invokeElectron(
      () => this.api.openChildWindow({ id, route, options }),
      'openChildWindow'
    );
  }

  /**
   * --- NOTIFICATIONS ---
   */
  showNotification(title: string, body: string): Promise<void> | void {
    return this.invokeElectron(
      () => this.api.showNotification({ title, body }),
      'showNotification'
    );
  }

  /**
   * --- INTERNALS ---
   */
  private get api(): any {
    return (this.isBrowser && (window as any).osystemapi)
      ? (window as any).osystemapi
      : null;
  }

  private invokeElectron<T>(fn: () => Promise<T> | void, action: string): Promise<T> | void {
    const api = this.api;
    console.log('Electron API:',this.api);

    if (!api) {
      console.warn(`[OSELECTRON_SERVICE] Skipped "${action}" — Electron API unavailable.`);
      return;
    }

    try {
      console.log(`[OSELECTRON_SERVICE] Executing action: ${action}`);
      return fn();
    } catch (error) {
      console.error(`[OSELECTRON_SERVICE] Error executing "${action}":`, error);
    }
  }
}
