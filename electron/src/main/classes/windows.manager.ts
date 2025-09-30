import { BrowserWindow } from "electron";
import { join } from "path";
import { WindowOptions } from "../types/window-options";

/*******************************************************************************************************/
export interface WindowMetadata {
  customId?: string; // app-specific id
  workspaceId?: string;
  route?: string;
  type?: 'main' | 'child' | 'popup' | 'modal';
  createdAt?: number;
  state?: 'active' | 'hidden' | 'closed';
  lastFocus?: number;
  bounds?: Electron.Rectangle; //presisted size/position
  maximized?: boolean;
  fullscreen?: boolean;
}
/*******************************************************************************************************/
export class WindowManager {
  private windows     : Map<string, BrowserWindow> = new Map();  // key : win.id
  private metadata    : Map<string, WindowMetadata> = new Map();  // key : win.id
  private customeScheme : string = 'capacitor-electron';
/*******************************************************************************************************/
  constructor (customScheme?:string){
    if (customScheme)  this.customeScheme = customScheme;
  }


/******************************************************************************************************
 * Create a new window
 * @param id
 * @param options
*/
  public createWindow(customId:string, options:WindowOptions={}): BrowserWindow {
    // prevent duplicate by customId
    const existing = this.findWindowByCustomId(customId);
    if (existing){ existing.focus(); return existing; }

    const win = new BrowserWindow({
      width:options.width??800,
      height:options.height??600,
      show: options.modal ?? false,
      modal: options.modal ?? false,
      frame: options.frame ?? false,
      webPreferences:{
        nodeIntegration: true,
        contextIsolation: true,
        preload: join(__dirname, 'build', 'src', 'main', 'preload.js'),
      }
    });

    const meta:WindowMetadata = {
      customId,
      route: options.route,
      type: options.type?? 'child',
      createdAt: Date.now(),
      state:'active',
      lastFocus: Date.now(),
    }

    // Register in both registries
    this.windows.set(customId, win);
    this.metadata.set(customId, meta);
    // add custom id to the win object
    (win as any).customId = customId;

    // load app url - build the URL with ?, #
    const targetRoute = options.route ? `/${options.route.replace(/^\//, '')}` : '';
    const query       = options.query ? `${options.query.replace(/^\?/, '')}` : '';
    const hash        = options.hash ? `${options.hash.replace(/^\#/, '')}` : '';
    const fullUrl     = `${this.customeScheme}://index.html${targetRoute}${query}${hash}`;
    console.log('[WindowManager] Load URL', fullUrl);

    win.loadURL(fullUrl);
    // Lifecycle events
    win.once('ready-to-show', ()=> win.show());
    win.on('focus', ()=> this.updateFocus(win.id));
    win.on('hide', ()=> this.updateState(win.id, 'hidden'));
    win.on('show', ()=> this.updateState(win.id, 'active'));
    win.on('closed', ()=> this.removeWindow(win.id));
    return win;
  }
/******************************************************************************************************/
  private updateFocus(id:number){
    const meta = this.metadata.get(`${id}`);
    if (meta) { meta.lastFocus = Date.now(); meta.state = 'active'; }
  }
/******************************************************************************************************/
  private updateState(id:number, state:WindowMetadata['state']){
    const meta = this.metadata.get(`${id}`);
    if (meta) meta.state = state;
  }
/******************************************************************************************************/
  private removeWindow(id:number){
    this.windows.delete(`${id}`);
    const meta = this.metadata.get(`${id}`);
    if (meta) meta.state = 'closed';
  }

/******************************************************************************************************
 * Close a window by customId
 * @param customId
 */
  public getLastActiveWindow(): BrowserWindow | undefined{
    let lastId:number | null = null;
    let lastTime = 0;
    for (const [id, meta] of this.metadata){
      if (meta.lastFocus > lastTime && meta.state === 'active'){
        lastTime = meta.lastFocus;
        lastId = Number(id);
      }
    }
    return lastId ? this.windows.get(`${lastId}`) : undefined;
  }

/******************************************************************************************************
 * Broadcast a message to all windows
 * @param chennel
 * @param payload
 * @returns
 */
  public broadcast(chennel:string, payload:any):void{
    for (const win of this.windows.values()){
      win.webContents.send(chennel, payload);
    }
  }
/******************************************************************************************************
 * Send a message to a window by customId
 * @param customId
 * @param chennel
 * @param payload
 * @returns
 */
  public sendTo(customId:string, chennel:string, payload:any) :void{
    const win = this.findWindowByCustomId(customId);
    if (win) win.webContents.send(chennel, payload);
  }

/******************************************************************************************************
 * Close a window by customId or numeric id
 * @param id
 */
  public closeWindow(id:string|number):void{
    const win = typeof id === 'string' ? this.findWindowByCustomId(id) : this.windows.get(`${id}`);
    if (win){
      win.close();
      // clean up
      this.windows.delete(`${win.id}`);
      this.metadata.delete(`${win.id}`);
    }
  }

/******************************************************************************************************
 * Find a window by numeric id
 * @param id
 * @returns BrowserWindow | undefined
 */
  public getWindow(id:number):BrowserWindow | undefined { return this.windows.get(`${id}`); };

/******************************************************************************************************
 * Utility : Get all windows
 * @returns BrowserWindow[]
 */
  public getWindows():BrowserWindow[] { return Array.from(this.windows.values()); };

/******************************************************************************************************
 * Utility : Get window Metadata
 * @returns WindowMetadata | undefined
 */
  public getMetadata(id:number):WindowMetadata | undefined { return this.metadata.get(`${id}`); };

/******************************************************************************************************
 * Find a window by customId
 * @param customId
 * @returns BrowserWindow | undefined
 */
  public findWindowByCustomId(customId:string) : BrowserWindow | undefined{
    for (const [id, meta] of this.metadata.entries()) {
      if (meta.customId === customId) return this.windows.get(id);
    }
    return undefined;
  }

}
