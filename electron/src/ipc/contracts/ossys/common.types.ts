/**
 * --------------------------------------------------------------------------
 * #### OSsys.Common Contracts
 * --------------------------------------------------------------------------
 * Shared enums, base types, and identifiers used across all modules.
 * Global namespace → accessible anywhere without imports.
 */
declare global {
  export namespace OSsys {
    export namespace Common {
      /**
       * ----------------------------------------------------------------------
       * TargetType: identifies which contract/entity is being referenced.
       * ----------------------------------------------------------------------
       */
      export type TargetType =
        | 'error'
        | 'device'
        | 'network'
        | 'process'
        | 'workspace'
        | 'window'
        | 'session'
        | 'log'
        | 'notification'
        | 'theme'
        | 'update'
        | 'power'
        | 'firewall'
        | 'performance'
        | 'integration'
        | 'platform'
        | 'security'
        | 'core'
        | 'other';

      /**
       * ----------------------------------------------------------------------
       * ModuleType: identifies which subsystem/module is the source or consumer.
       * ----------------------------------------------------------------------
       */
      export type ModuleType =
        | 'kernel'
        | 'ui'
        | 'cli'
        | 'service'
        | 'driver'
        | 'plugin'
        | 'ai'
        | 'system'
        | 'external'
        | 'other';
      /**
       * ----------------------------------------------------------------------
       * AI-driven Suggested Actions (AI -> system operator / automations)
       * ----------------------------------------------------------------------
       */
      export type SuggestedActionType =
        | 'restartDriver'
        | 'updateFirmware'
        | 'disableDevice'
        | 'enableDevice'
        | 'notifyUser'
        | 'isolateDevice'
        | 'collectDiagnostics'
        | 'other';
      export interface SuggestedAction {
        id         : string;
        type       : SuggestedActionType;
        description: string;
        params?    : Record<string, any>;
        confidence?: number;
        autoApply? : boolean;
        createdAt  : number;
        createdBy? : string;
        metadata?  : Record<string, any>;
      }
      /**
       * ----------------------------------------------------------------------
       * Base Event Payload (extensible by all subsystems)
       * ----------------------------------------------------------------------
       */
      export interface BaseEvent {
        id: string;                // unique event ID
        targetType: TargetType;    // what kind of entity this event relates to
        module?: ModuleType;       // originating module
        timestamp: number;         // epoch ms
        metadata?: Record<string, any>;
      }
    }
  }
}

export {}; // required for TS to treat this file as a module
