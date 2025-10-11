// electron/src/classes/ipc.class.ts
import { ipcMain, Notification, BrowserWindow } from 'electron';
import { ElectronCapacitorApp } from '../../setup';
import { WindowManager } from '../windows/windows.manager';

export class IPCMainHandler {
  constructor(
    private app: ElectronCapacitorApp,
    private windowManager: WindowManager
  ) {}

  /**
   * Initialize all IPC handlers
   */
  init(): void {
    ipcMain.on('get:winId', (event) => {
      const bw = BrowserWindow.fromWebContents(event.sender);
      event.returnValue = (bw as any).winId ?? 'main';
    });
    console.log('[IPCMainHandler] Initializing handlers...');
    this.registerWindowControls();
    this.registerChildWindow();
    this.registerNotification();
  }

  private get mainWindow(): BrowserWindow | null {
    return this.app.getMainWindow();
  }

  /**
   * Window actions (minimize, maximize, close)
   */
  private registerWindowControls(): void {
    ipcMain.handle('window:minimize', () => {
      console.log('[IPCMainHandler] window:minimize');
      this.mainWindow?.minimize();
    });

    ipcMain.handle('window:maximize', () => {
      console.log('[IPCMainHandler] window:maximize');
      if (this.mainWindow) {
        this.mainWindow.isMaximized()
          ? this.mainWindow.unmaximize()
          : this.mainWindow.maximize();
      }
    });

    ipcMain.handle('window:close', () => {
      console.log('[IPCMainHandler] window:close');
      this.mainWindow?.close();
    });
  }

  /**
   * Create child window with payload
   */
  private registerChildWindow(): void {
    ipcMain.handle('window:openChild', (_event, payload: any) => {
      console.log('[IPCMainHandler] window:openChild', payload);
      this.windowManager.createWindow(payload.id, {
        route: payload.route,
        parent: this.app.getMainWindow(),
        ...(payload.options ?? {}), // prevent spreading undefined
      });
    });
  }

  /**
   * Show system notification
   */
  private registerNotification(): void {
    ipcMain.handle('notification:show', (_event, payload: any) => {
      console.log('[IPCMainHandler] notification:show', payload);

      const notification = new Notification({
        title: payload.title ?? 'OS-SYS',
        body: payload.body ?? 'Hello from OS-SYS Electron',
      });

      notification.show();
      notification.on('click', () => {
        this.mainWindow?.focus();
      });
    });
  }
}
