import { channel } from "diagnostics_channel";
import { ipcMain, IpcMainInvokeEvent } from "electron";

type IPCHandler = (event: IpcMainInvokeEvent, ...args: any[]) => Promise<any> | any;

/******************************************************************************************************/
export class IPCRegistry {
  private handlers = new Map<string, IPCHandler>();

/******************************************************************************************************/
  register(channel:string, handler:IPCHandler){
    if (this.handlers.has(channel)){
      console.log('[IPCRegistry] Overwriting handler for', channel);
    }
    this.handlers.set(channel, handler);
    ipcMain.handle(channel, handler);
  }

/******************************************************************************************************/
  unregister(channel:string){
    if (this.handlers.has(channel)){
      this.handlers.delete(channel);
      ipcMain.removeHandler(channel);
    }
  }
/******************************************************************************************************/
  clear() {
    this.handlers.forEach((_handler, channel)=>{
      ipcMain.removeHandler(channel);
    })
    this.handlers.clear();
  }
}
