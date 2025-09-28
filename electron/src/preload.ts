// electron/src/preload.ts
import { contextBridge, ipcRenderer } from 'electron';
import type {
  WindowOpenPayload,
  NotificationPayload,
  WindowActionPayload,
} from './types/ipc-payloads';

// Ensure Capacitor Electron runtime is included
require('./rt/electron-rt');

console.log('[Preload] Loaded and exposing osystemapi');

contextBridge.exposeInMainWorld('osystemapi', {
  /**
   * Perform a window action (minimize, maximize, close)
   */
  windowAction: (payload: WindowActionPayload) =>
    ipcRenderer.invoke(`window:${payload.action}`),

  /**
   * Open a child window
   */
  openChildWindow: (payload: WindowOpenPayload) =>
    ipcRenderer.invoke('window:openChild', payload),

  /**
   * Show a system notification
   */
  showNotification: (payload: NotificationPayload) =>
    ipcRenderer.invoke('notification:show', payload),
});
