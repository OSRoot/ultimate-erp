/**
 * --------------------------------------------------------------------------
 * #### OSsys.Device Contracts (Global)
 * --------------------------------------------------------------------------
 * Covers all connected hardware and peripherals.
 * Extensible for AI-augmented metadata and plug-in integrations.
 * Global namespace → no imports required.
 */

declare global {
  export namespace OSsys {
    export namespace Device {
      /**
       * --------------------------------------------------------------------------
       * Device Types
       * --------------------------------------------------------------------------
       */
      export type Type  =
      |'keyboard'  | 'mouse'       | 'printer'
      | 'camera'   | 'microphone'  | 'speaker'
      | 'screen'   | 'touchscreen' | 'gamepad'
      | 'joystick' | 'bluetooth'   | 'wifi'
      | 'usb'      | 'other'       | 'smartcard';
    /**
       * --------------------------------------------------------------------------
       * Device Status
       * --------------------------------------------------------------------------
       */
      export type Status =
        | 'connected'
        | 'disconnected'
        | 'error'
        | 'initializing'
        | 'suspended'
        | 'unknown';
        /**
       * --------------------------------------------------------------------------
       * Core Device Info
       * --------------------------------------------------------------------------
       */
      export interface Info {
        id                  : string;
        name                : string;
        type                : Type;
        status              : Status;
        vendor?             : string;
        model?              : string;
        serial?             : string;
        driverVersion?      : string;
        firmware?           : string;
        metadata?           : Record<string, any>;  // extensible metadata (AI or plugins)
        aiAnnotations?      : OsAI.Annotation[];
        aiInsights?         : OsAI.Insight[];
        suggestedActions?   : OSsys.Common.SuggestedAction[];
      }


      /**
       * --------------------------------------------------------------------------
       * Device Lifecycle Events
       * --------------------------------------------------------------------------
       */
      export interface ConnectPayload {
        device              : Info;
        workspaceId?        : string;
        timestamp           : number;
      }

      export interface DisconnectPayload {
        deviceId            : string;
        reason?             : string;
        timestamp           : number;
      }

      export interface ErrorPayload {
        deviceId            : string;
        code                : string;
        message             : string;
        timestamp           : number;
        metadata?           : Record<string, any>;
        aiAnnotations?      : OsAI.Annotation[];
        aiInsights?         : OsAI.Insight[];
        suggestedActions?   : OSsys.Common.SuggestedAction[];
      }

      /**
       * --------------------------------------------------------------------------
       * Device Usage / Telemetry
       * --------------------------------------------------------------------------
       * Optional layer: AI or analytics modules can consume this.
       */

      export interface Telemetry {
        deviceId            : string;
        timestamp           : number;
        usage?:{
          cpu?              : number;
          memory?           : number;
          battery?          : number;   // for wireless devices
          temperature?      : number;   // sensors / thermals
          ioRead?           : number;   // Bytes/sec
          ioWrite?          : number;   // Bytes/sec
        };
        metadata?           : Record<string, any>;  // AI annotations or plugin tags
        aiAnnotations?      : OsAI.Annotation[];
        suggestedActions?   : OSsys.Common.SuggestedAction[];
      }


      /**
       * --------------------------------------------------------------------------
       * Device Permissions (Optional)
       * --------------------------------------------------------------------------
       */
      export interface Permissions {
        deviceId            : string;
        allowedUsers?       : string[];
        allowedApps?        : string[];
        restricted?         : boolean;
        autoApplyRecommendations? : boolean;
      }

    }
  }
}
export {}; // TS module scope
