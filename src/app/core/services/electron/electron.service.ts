import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class OSELECTRON_SERVICE {
  private electronAPI: any;
  private isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser && (window as any).electronAPI) {
      this.electronAPI = (window as any).electronAPI;
    }
  }

  // minimize window
  minimize(): Promise<void> | void {
    console.log("Service: minimize()");
    if (this.electronAPI) {
      console.log("Service: found electronAPI");
      return this.electronAPI.minimize();
    } else {
      console.warn("Service: electronAPI missing");
    }
  }
  // toggle maximize
  toggleMaximize(): Promise<void> | void {
    if (this.electronAPI) {
      console.log("Angular → toggleMaximize()");
      return this.electronAPI.toggleMaximize();
    }
  }

close(): void {
  if (this.electronAPI) {
    console.log("Angular → close()");
    this.electronAPI.close();
  } else {
    console.warn("Electron API not available. Are you running in browser?");
  }
}
}
