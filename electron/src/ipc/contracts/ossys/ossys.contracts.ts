import { Rectangle } from "electron";
import { NotificationLevel, WindowAction, WindowState, WindowType } from "../../../shared/ipc.enums";
import { EUpdateChannel, EUpdateType, EUserRoles } from "../../../shared/ossys.enums";
/**
 * OSsys Namespace
 * --------------------------------------------
 * Handles all core system-level operations:
 * - Window management
 * - Session & authentication
 * - Power & lifecycle controls
 * - System info & updates
 */
export namespace OSsys {
  /**
   * --------------------------------------------------------------------------
   * Window Management
   * --------------------------------------------------------------------------
   */
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

  /**
   * --------------------------------------------------------------------------
   * Workspaces
   * --------------------------------------------------------------------------
   */
  export interface Workspace {
    customId?           : string;
    name?               : string;
    ownerId?            : string;
    createdAt?          : number;
    updatedAt?          : number;
    windows?            : string[]; // array of windows ids
    metadata?           : Map<string, any>;
    active?             : boolean;
  }

  export interface WorkspaceCreatePayload {
    customId?           : string;
    name                : string;
    ownerId             : string;
    metadata?           : Map<string, any>;
  }

  export interface WorkspaceSwitchPayload {
    workspaceId         : string;
  }

  export interface WorkspaceClosePayload {
    workspaceId         : string;
    force?              : boolean;
  }

 /**
   * --------------------------------------------------------------------------
   * Session & User
   * --------------------------------------------------------------------------
   */
  export interface SessionStartPayload {
    userId              : string;
    token               : string;
    roles?              : EUserRoles[];
    metadata?           : Map<string, any>;
  }

  export interface SessionEndPayload {
    userId              : string;
    active              : boolean;
    startedAt           : number;
    roles               : EUserRoles[];
    metadata?           : Map<string, any>;
  }

  /**
   * --------------------------------------------------------------------------
   * Security & Permissions
   * --------------------------------------------------------------------------
   */
  export namespace Permission {
    export interface PermissionRequestPayload {
      userId              : string;
      resource            : string;
      action              : string;
    }

    export interface PermissionResponsePayload {
      userId              : string;
      resource            : string;
      action              : string;
      granted             : boolean;
      reason?             : string;
    }
  }
  /**
   * --------------------------------------------------------------------------
   * Notifications
   * --------------------------------------------------------------------------
   */
  export interface SystemNotificationPayload {
    title               : string;
    body                : string;
    level?              : NotificationLevel;
    icon?               : string;
    timeout?            : number;
    silent?             : boolean;
    timestamp?          : number;
    parentId?           : string;
    winId?              : string;
  }
  /**
   * --------------------------------------------------------------------------
   * System Info
   * --------------------------------------------------------------------------
   */
  export interface SystemInfo {
    os                  : string;
    version             : string;
    arch                : string;
    platform            : string;
    uptime              : number;
    memory              : {total: number, free: number};
    cpus                : {model: string, speed: number, cores: number}[];
  }
  /**
   * --------------------------------------------------------------------------
   * Updates
   * --------------------------------------------------------------------------
   */
  export namespace Update {

    export interface UpdateCheckPayload {
      channel             : EUpdateChannel;
      type?               : EUpdateType;
    }

    export interface UpdateInfo {
      version             : string;
      channel             : EUpdateChannel;
      type                : EUpdateType;
      url?                : string;
      notes?              : string;
      mandatory?          : boolean;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Power Management
   * --------------------------------------------------------------------------
   */

  export namespace Power {
    export type PowerAction = 'shutdown' | 'restart' | 'sleep' | 'lock';
    export interface PowerActionPayload {
      action              : PowerAction;
      force?              : boolean;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Process / Task Management
   * --------------------------------------------------------------------------
   */
  export namespace Process {
    export type Type = 'system' | 'app' | 'renderer' | 'service';
    export type Status = 'running' | 'paused' | 'stopped' | 'zombie' | 'killed' | 'unknown';
    export type Action = 'start' | 'stop' | 'restart' | 'pause' | 'resume' | 'kill' ;
    export type StartType = 'app' | 'service';

    export interface Info {
      pid                 : number;
      name                : string;
      type                : Type;
      workspaceId?        : string;
      memory              : number;
      cpu                 : number;
      startedAt           : number;
      status              : Status;
    }

    export interface StartPayload {
      name                  : string;
      type                  : StartType;
      args?                 : string[];
      workspaceId?          : string;
      metadata?             : Map<string, any>;
    }

    export interface ActionPayload {
      pid                  : number;
      action               : Action;
      force?               : boolean;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Devices / Peripherals
   * --------------------------------------------------------------------------
   */
  export namespace Device {
    export type Type  =
    |'keyboard'  | 'mouse'       | 'printer'
    | 'camera'   | 'microphone'  | 'speaker'
    | 'screen'   | 'touchscreen' | 'gamepad'
    | 'joystick' | 'bluetooth'   | 'wifi'
    | 'usb'      | 'other'       | 'smartcard';

    export interface Info {
      id                  : string;
      name                : string;
      type                : Type;
      connected           : boolean;
      vendor?             : string;
      model?              : string;
      serial?             : string;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Networking
   * --------------------------------------------------------------------------
   */

  export namespace Network {
    export type Type = 'wifi' | 'ethernet' | 'bluetooth' | 'cellular' | 'loopback' | 'other' | 'vpn';
    export type Status = 'up' | 'down' | 'connected' | 'connecting' | 'disconnected' | 'disconnecting' | 'disabled' | 'unknown';
    export interface NIC {
      id                  : string;
      name                : string;
      type                : Type;
      status              : Status;
      ip                  : string;
      mac                 : string;
      speed?              : number;
      duplex?             : number;
      rx?                 : number;
      tx?                 : number;
      netmask?            : string;
      gateway?            : string;
      dns?                : string[];
      dns6?               : string[];
      dnsSuffixes?        : string[];
    }

    export interface Stats {
      nicId               : string;
      rxBytes             : number;
      txBytes             : number;
      rxPackets           : number;
      txPackets           : number;
      rxErrors            : number;
      txErrors            : number;
      rxDropped           : number;
      txDropped           : number;
      timestamp           : number;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Logs / Telemetry
   * --------------------------------------------------------------------------
   */
  export namespace Logs {
    export type Level = 'error' | 'warn' | 'info' | 'debug';

    export interface Entry {
      timestamp           : number;
      level               : Level;
      source              : string; // module or subsystem
      message             : string;
      metadata?           : Map<string, any>;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Theming / Personalization
   * --------------------------------------------------------------------------
   */
  export namespace Theme {
    export type Type = 'light' | 'dark' | 'system' | 'custom';
    export interface Config {
      id                  : string;
      name                : string;
      type                : Type;
      wallpaper?           : string;
      accentColor?        : string;
      fontFamily?         : string;
    }
  }
  /**
   * --------------------------------------------------------------------------
   * IPC-safe Error
   * --------------------------------------------------------------------------
   */

  export interface ErrorPayload {
    code                : string;
    message             : string;
    stack?              : string;
    metadata?           : Map<string, any>;
  }

}
