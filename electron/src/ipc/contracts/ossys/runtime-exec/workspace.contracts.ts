export {};
/**
 * --------------------------------------------------------------------------
 * #### OSsys.Workspace Contracts (Global)
 * --------------------------------------------------------------------------
 * Represents user/system work environments — contextual, persistent,
 * and AI-aware. Handles workspace creation, switching, syncing, and lifecycle.
 * --------------------------------------------------------------------------
 */

declare global {
  export namespace OsWorkspace {
    export type Type = 'personal' | 'work' | 'sandbox' | 'guest' | 'system' | 'remote';
    export type Status = 'active' | 'idle' | 'locked' | 'suspended' | 'terminated';

    export interface Info {
      id        : string;
      customId? : string;
      name      : string;
      ownerId   : string;
      type?     : Type;
      status?   : Status;
      createdAt : number;
      updatedAt : number;
          /**
         * Relationships & Context
         */
      devices   : string[];       // device IDs
      processes : string[];       // process IDs
      windows?  : string[];       // window IDs
      networkSessionId? : string;  // optional network binding
      /**
       * Environment / Metadata
       */
      metadata? : Record<string, any>; // user-defined metadata
      settings? : Record<string, any>; // user-defined settings
      tags?     : string[];
      colorTheme? : string;
      environment : Record<string, any>;  // environment runtime vars
      /**
      * AI Awareness / Intelligence Layer
      */
      aiContext?        :OsAI.Context;
      aiAnnotations?     :OsAI.Annotation[];
      aiInsights?        :OsAI.Insight[];
      suggestedActions?  :OsAI.SuggestedAction[];
      aiAwarenessLevel?  :OsAI.AwarenessLevel;
      /**
       * Flags
      */
      isEphemeral? : boolean;
      isEncrypted? : boolean;
      autoSave?    : boolean;
      active?      : boolean;
    }

    /**
       * --------------------------------------------------------------------------
       * Workspace Lifecycle Payloads
       * --------------------------------------------------------------------------
       */

    export interface CreatePayload {
      customId? : string;
      name      : string;
      ownerId   : string;
      type?     : Type;
      metadata? : Record<string, any>;
      settings? : Record<string, any>;
      isEphemeral? : boolean;
    }

    export interface SwitchPayload {
      workspaceId : string;
      saveCurrent?: boolean;
    }

    export interface ClosePayload {
      workspaceId : string;
      force?      : boolean;
    }

    export interface UpdatePayload {
      workspaceId: string;
      patch      : Partial<Info>;
    }



      /**
       * --------------------------------------------------------------------------
       * Workspace Telemetry / Analytics
       * --------------------------------------------------------------------------
       * Used for AI, analytics, optimization, etc.
       */

      export interface Telemetry {
        workspaceId : string;
        timestamp   : number;
        cpuUsage?   : number;
        memoryUsage? : number;
        gpuUsage? : number;
        openWindows? : number;
        activeProcesses? : number;
        userActive? : boolean;
        aiConfidence? : number;
        metadata? : Record<string, any>;
      }

     /**
       * --------------------------------------------------------------------------
       * Workspace Permissions
       * --------------------------------------------------------------------------
       */
      export interface Permissions {
        workspaceId : string;
        allowedUsers? : string[];
        allowedApps? : string[];
        restricted? : boolean;
        autoApplyAI? : boolean;
      }

      /**
       * --------------------------------------------------------------------------
       * Workspace Context
       * --------------------------------------------------------------------------
       */

      export interface Context {
        activeWorkspaceId? : string;
        workspaces? : Record<string, Info>;
        lastSyncd? : number;
        aiAwarenessLevel? : OsAI.AwarenessLevel;
      }

       /**
       * --------------------------------------------------------------------------
       * Workspace Actions (runtime interface)
       * --------------------------------------------------------------------------
       */

       export interface Actions {
          create(payload:CreatePayload) : Promise<Info>;
          switch(payload:SwitchPayload) : Promise<boolean>;
          update(payload:UpdatePayload) : Promise<Info>;
          close(payload:ClosePayload) : Promise<boolean>;
          list () : Promise<Info[]>;
          get(id:string) : Promise<Info | undefined>;
       }


      /**
       * --------------------------------------------------------------------------
       * Workspace Events (hooks)
       * --------------------------------------------------------------------------
       */

      export interface Events {
        onCreated?: (payload:Info) => void;
        onActivated?: (payload:Info) => void;
        onUpdated?: (payload:Info) => void;
        onClosed?: (workspaceId:string) => void;
      }
      /**
     * --------------------------------------------------------------------------
     * AI Integration Hooks (optional extension)
     * --------------------------------------------------------------------------
     */
    export interface AIBridge {
      onContextSynced? : (context:OsAI.Context) => void;
      onAnnotation? : (annotation:OsAI.Annotation) => void;
      onInsight? : (insight:OsAI.Insight) => void;
      onActionSuggested? : (action:OsAI.SuggestedAction) => void;
    }
  }


}
