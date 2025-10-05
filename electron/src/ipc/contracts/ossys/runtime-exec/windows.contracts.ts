import { Rectangle } from "electron";
import { WindowState, WindowAction, WindowType } from "../../../shared/ipc.enums";
      /**
       * --------------------------------------------------------------------------
       * Window Management
       * --------------------------------------------------------------------------
       */
export namespace OSsys {
  export namespace WindowManagement {

      export interface WindowOpenPayload {
        id: string;
        route: string;
        options?: {
          modal?: boolean;
          width?: number;
          height?: number;
          state?: WindowState;
          resizable?: boolean;
          fullscreen?: boolean;
          frame?: boolean;
          /** Extensible */
          [key: string]: any;
        };
        query?: string;
        hash?: string;
        parentId?: string;
          /** Extensible */
        [key: string]: any;
      }
      /**
       * --------------------------------------------------------------------------
       * Window Actions
       * --------------------------------------------------------------------------
       */
      export interface WindowActionPayload {
        action : WindowAction;
        winId?:string;
      }
      /**
       * --------------------------------------------------------------------------
       * Window Metadata Properties
       * --------------------------------------------------------------------------
       */
      export interface WindowMetadataProps {
        customId?           : string; // app-specific id
        workspaceId?        : string;
        route?              : string;
        type?               : WindowType;
        createdAt?          : number;
        state?              : WindowState;
        lastFocus?          : number;
        bounds?             : Rectangle; //presisted size/position
        maximized?          : boolean;
        fullscreen?         : boolean;
      }

  }
}
