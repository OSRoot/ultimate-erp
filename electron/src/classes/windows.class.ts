import { BrowserWindow, app } from 'electron';
import { join } from 'path';

export interface WindowOptions{
  route?: string;
  width?: number;
  height?: number;
  modal?: boolean;
  parent?: BrowserWindow;
}

export class WindowsManager {
  private windows : Map<string, BrowserWindow> = new Map();
  private customScheme: string = 'capacitor-electron';

  constructor(customScheme?: string){
    if (customScheme) this.customScheme = customScheme;
  }

  /*******************************************************************************************************
   * Create a new window dynamically
   */
  public createWindow(id:string, options: WindowOptions= {}): BrowserWindow{
    if (this.windows.has(id)) {
      // if exist, focus it
      const existWindow = this.windows.get(id);
      existWindow?.focus();
      return existWindow as BrowserWindow;
    }
    console.log(`[WindowsManager] Creating window ${id} with options ${JSON.stringify(options)}`);

  const window = new BrowserWindow({
      width: options.width ?? 800,
      height: options.height ?? 600,
      show: options.modal ?? false,
      modal: options.modal ?? false,
      parent: options.parent! ?? null,
      frame:true,
      webPreferences:{
        nodeIntegration: true,
        contextIsolation: true,
        preload: join(app.getAppPath(), 'build', 'src', 'preload.js'),
      }
    })
    const targetRoute = options.route?.replace(/^\//, '') ?? '';
    window.loadURL(`${this.customScheme}://index.html#${targetRoute}`);
    window.once('ready-to-show', () => {
      window.show();
    })

    window.on('closed', () => {
      this.windows.delete(id);
    })

    this.windows.set(id, window);
    return window;
  }

  /*******************************************************************************************************
   * Close a window
   */
  public closeWindow(id: string){
    const window = this.windows.get(id);
    if (window) window.close();
    this.windows.delete(id);
  }


  /*******************************************************************************************************
   * Get a window by id
   */
  public getWindow(id: string){
    return this.windows.get(id);
  }

}
