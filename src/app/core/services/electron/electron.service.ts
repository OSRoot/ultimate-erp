import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class OSELECTRON_SERVICE {
  private isBrowser = false;
  private windowFNS = window.osystemapi;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser && (window as any).osystemapi) {
      this.windowFNS = window.osystemapi;
    }
  }

  // minimize window
  minimize(): Promise<void> | void {
    console.log("Service: minimize()");
    if (this.windowFNS) {
      console.log("Service: found electronAPI");
      return this.windowFNS.windowAction({ action: "minimize" });
    } else {
      console.warn("Service: electronAPI missing");
    }
  }
  // toggle maximize
  toggleMaximize(): Promise<void> | void {
    if (this.windowFNS) {
      console.log("Angular → toggleMaximize()");
      return this.windowFNS.windowAction({action:'maximize'});
    }
  }

  close(): void {
    if (this.windowFNS) {
      console.log("Angular → close()");
      this.windowFNS.windowAction({action:'close'});
    } else {
      console.warn("Electron API not available. Are you running in browser?");
    }
  }


  openChildWindow(id: string, route: string): void {
    if (this.windowFNS) {
      console.log("Angular → openChildWindow()");
      this.windowFNS.openChildWindow({id, route});
    } else {
      console.warn("Electron API not available. Are you running in browser?");
    }

    this.showNotification("Child Window", "The Route is " + route);
  }

  showNotification(title: string, body: string): void {
  if (this.windowFNS) {
    console.log("Angular → showNotification()");
    this.windowFNS.showNotification({title, body});
  } else {
    console.warn("Electron API not available. Running in browser?");
  }
}

}
