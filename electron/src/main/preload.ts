import { contextBridge, ipcRenderer } from 'electron';

// Ensure Capacitor Electron runtime is included
require('../rt/electron-rt');

console.log('[Preload] Loaded and exposing OSsys');

// Get window ID synchronously from main
const winId: string = ipcRenderer.sendSync('get:winId');

// Expose safely
if (!window.OSsys) {
  contextBridge.exposeInMainWorld('osystemapi', {
    /** Returns the window's unique ID */
    getWinId: (): string => winId,

    /** Perform a window action (minimize, maximize, close) */
    windowAction: (action: 'minimize' | 'maximize' | 'close'): Promise<void> =>
      ipcRenderer.invoke(`window:${action}`),

    /** Open a new child window with route and options */
    openChildWindow: (payload: { id: string; route: string; options?: Record<string, any> }): Promise<void> =>
      ipcRenderer.invoke('window:openChild', { ...payload, parentId: winId }),

    /** Show a native OS notification */
    showNotification: (payload: { title?: string; body?: string }): Promise<void> =>
      ipcRenderer.invoke('notification:show', { ...payload, winId }),
  });
} else {
  console.warn('[Preload] Skipped exposing OSsys (already exists).');
}
