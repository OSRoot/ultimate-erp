import type { BrowserWindow } from "electron";

export interface WindowOptions {
  /**
   * Angular/Capacitor route to load inside the window.
   * Example: "home" → will resolve to capacitor-electron://index.html/home
   */
  route?:string;

  /** Optional query string (e.g. "?foo=1&bar=2") */
  query?:string;

  /** Optional hash string (e.g. "#foo=1&bar=2") */
  hash?:string;

  /** Width of the window */
  width?:number;

  /** Height of the window */
  height?:number;

  /** Open the window as a modal */
  modal?:boolean;

  /** Parent window if modal */
  parent?:BrowserWindow;

  /** Wether frameless is enabled or not */
  frame?:boolean;

  /** Wether transparent is enabled or not */
  transparent?:boolean;

  /** Window background color (hex) */
  backgroundColor?:string;

  /** Additional Custom options to extend later */
  [key:string]:any;
}
