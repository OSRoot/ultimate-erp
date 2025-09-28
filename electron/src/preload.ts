import { contextBridge, ipcRenderer } from 'electron';
require('./rt/electron-rt');
//////////////////////////////
// User Defined Preload scripts below
console.log('User Preload!');
// Expose safe APIs for Angular service
contextBridge.exposeInMainWorld('electronAPI', {
  minimize: () => ipcRenderer.invoke('window:minimize'),
  toggleMaximize: () => ipcRenderer.invoke('window:toggleMaximize'),
  close: () => ipcRenderer.invoke('window:close'),
  openChildWindow: () => ipcRenderer.invoke('window:openChild', { id:'', route: '' }),
  showNotification: () => ipcRenderer.invoke('notification:show', { title:'', body: '' }),
});
