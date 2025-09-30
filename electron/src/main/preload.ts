// electron/src/preload.ts
import { contextBridge, ipcRenderer } from 'electron';
import type {
  WindowOpenPayload,
  NotificationPayload,
  WindowActionPayload,
} from './types/ipc-payloads';

// Ensure Capacitor Electron runtime is included
require('./runtime/electron-rt');

console.log('[Preload] Loaded and exposing osystemapi');
const winId: string = ipcRenderer.sendSync('get:winId');

contextBridge.exposeInMainWorld('osystemapi', {
  getWinId: () => winId,

  windowAction: (payload: WindowActionPayload) =>
    ipcRenderer.invoke(`window:${payload.action}`, { ...payload, winId }),

  openChildWindow: (payload: WindowOpenPayload) =>
    ipcRenderer.invoke('window:openChild', { ...payload, parentId: winId }),

  showNotification: (payload: NotificationPayload) =>
    ipcRenderer.invoke('notification:show', { ...payload, winId }),
});
