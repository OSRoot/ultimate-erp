import { Injectable, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OSELECTRON_SERVICE } from '../electron/electron.service';

/**
 * Service that decides how to open UI components:
 * - Electron: spawns a new native window
 * - Browser: opens a modal dialog
 */
@Injectable({ providedIn: 'root' })
export class UiLauncherService {
  private readonly isElectronEnv: boolean;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private electronService: OSELECTRON_SERVICE
  ) {
    this.isElectronEnv = this.electronService['isBrowser'] && !!window.OSsys;
  }

  /** Whether app is running inside Electron */
  isElectron(): boolean {
    return this.isElectronEnv;
  }

  /**
   * Opens a component intelligently
   * Electron → new native window
   * Browser → Material modal
   */
  openComponent(component: Type<any>, routeOrId: string, data?: any): void {
    if (this.isElectron()) {
      this.openInElectronWindow(routeOrId, data);
    } else {
      this.openInModal(component, data);
    }
  }

  /**
   * Fallback — open as Angular Material modal
   */
  private openInModal(component: Type<any>, data?: any): void {
    this.dialog.open(component, {
      width: '80vw',
      maxWidth: '900px',
      height: '80vh',
      panelClass: ['glass-modal', 'fade-in'],
      autoFocus: false,
      data,
    });
  }

  /**
   * Electron — use IPC to spawn a new native window
   */
  private openInElectronWindow(routeOrId: string, data?: any): void {
    if (!this.isElectronEnv) {
      console.warn('[UiLauncherService] Electron API unavailable — falling back to modal.');
      return this.openInModal(routeOrId as unknown as Type<any>, data);
    }

    console.log('[UiLauncherService] Opening Electron window:', routeOrId);
    this.electronService.openChildWindow(routeOrId, routeOrId);
  }
}
