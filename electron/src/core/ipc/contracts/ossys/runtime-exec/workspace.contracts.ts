export {};


declare global {
  export namespace OSsys {

/**
 * #==========================================================================
 * 🧩 OSsys.Workspace Contracts (Global)
 * ==========================================================================
 * Defines the structure, behavior, and orchestration of workspaces —
 * contextual environments that group processes, windows, and runtime state.
 * Workspaces can be user, system, or AI-managed. Each workspace maintains
 * metadata, environment, and runtime links to its active processes, devices,
 * and windows.
 * ==========================================================================
 */
    export namespace Workspace {
       /**
       * #--------------------------------------------------------------------------
       * ###🧱 Workspace Base Types
       * --------------------------------------------------------------------------
       */
      export type Type =
        | 'personal'
        | 'work'
        | 'sandbox'
        | 'guest'
        | 'system'
        | 'remote';
      export type Status =
        | 'active'
        | 'idle'
        | 'locked'
        | 'suspended'
        | 'terminated'
        | 'error'
        | 'unknown';

        export type LayoutMode = 'grid' | 'tabs' | 'floating' | 'fullscreen';

      /**
       * --------------------------------------------------------------------------
       * 🪟 Window Binding
       * --------------------------------------------------------------------------
       */

      export interface WindowBinding {
        windowId          :string;
        layout            :LayoutMode;
        position?         :{x:number, y:number};
        size?             :{width:number, height:number};
        lastActiveAt?     :number;
        isMain?           :boolean;
        isParent?         :boolean;
        isChild?          :boolean;
        isModal?          :boolean;
      }

      // Bound Process Info
      export interface BoundProcess {
        pid               :number;
        name              :string;
        type              :OSsys.Process.Type;
        restartPolicy?    :OSsys.Process.RestartPolicy;
        telemtry?         :OSsys.Process.Telemetry;
        lastUpdatedAt?    :number;
      }

      // Workspace Information
      export interface Info {
        id                :string;
        customId?         :string;
        ownerId           :string;
        name              :string;
        createdAt         :number;
        updatedAt         :number;
        type?             :Type;
        status?           :Status;
                // Contextual Bindings
        devices           :string[];
        processes?        :BoundProcess[];
        windows?          :WindowBinding[];
        networkSessionId? :string;
        // Environment & Metadata
        environment       :Record<string, any>;
        metadata?         :Record<string, any>;
        settings?         :Record<string, any>;
        tags?             :string[];
        colorTheme?       :string;
                // AI Layer
        aiContext?        :OsAI.Context;
        aiAnnotations?    :OsAI.Annotation[];
        aiInsights?       :OsAI.Insight[];
        aiSuggestions?    :OsAI.SuggestedAction[];
        aiAwarenessLevel? :OsAI.AwarenessLevel;
                // Flags
        isEphemeral?      :boolean;
        isEncrypted?      :boolean;
        autoSave?         :boolean;
        active?           :boolean;
      }
        // #📦 Lifecycle Payloads
        export interface CreatePayload {
          customId?         :string;
          name              :string;
          type?             :Type;
          metadata?         :Record<string, any>;
          ownerId           :string;
          settings?         :Record<string, any>;
          isEphemeral?      :boolean;
      }

      export interface SwitchPayload {
        workspaceId       :string;
        saveCurrent?      :boolean;
        force?            :boolean;
      }

      export interface ClosePayload {
        workspaceId       :string;
        force?            :boolean;
      }

      export interface UpdatePayload {
        workspaceId       :string;
        patch             :Partial<Info>;
      }

      // 📊 Telemetry & Analytics
      export interface Telemetry {
        workspaceId       :string;
        timestamp         :number;
        cpuUsage?         :number;
        memoryUsage?      :number;
        gpuUsage?         :number;
        diskIO?           :number;
        networkIO?        :number;
        threadCount?      :number;
        userActive?       :boolean;
        aiConfidence?     :number;
        anomalyScore?     :number;
        metadata?         :Record<string, any>;
        extensions?       :Record<string, any>;
        activeProcesses?  :number;
        openWindows?      :number;
      }

      // 🔐 Permissions & Security
      export interface Permission {
        workspaceId       :string;
        allowedUsers?     :string[];
        allowedApps?      :string[];
        restricted?       :boolean;
        autoApplyAI? :boolean;
      }

      //      * 🧠 Workspace Context
      export interface Context {
        acitveWorkspaceId?:string;
        workspaces?       : Record<string, Info>;
        lastSyncedAt?     :number;
        aiAwarenessLevel? :OsAI.AwarenessLevel;
      }

      //⚙️ Workspace Actions (Runtime Interface)
      export interface Actions {
        create(payload: CreatePayload): Promise<Info>;
        switch(payload: SwitchPayload): Promise<boolean>;
        update(payload: UpdatePayload): Promise<Info>;
        close(payload: ClosePayload)  : Promise<boolean>;
        list(): Promise<Info[]>;
        get(id:string)                : Promise<Info | undefined>;
      }
      /**
       * --------------------------------------------------------------------------
       * #🎯 Workspace Event Types
       * --------------------------------------------------------------------------
       * #Canonical list of all workspace-level event identifiers.
       * #Used for event buses, IPC, and telemetry systems.
       * --------------------------------------------------------------------------
       */
      export type EventsType =
      | 'created'
      | 'activated'
      | 'updated'
      | 'closed'
      | 'telemetry'
      | 'synced'
      | 'error'
      | 'ai.context.synced'
      | 'ai.insight'
      | 'ai.action.suggested'
      | 'process.bound'
      | 'process.unbound'
      | 'window.bound'
      | 'window.unbound';
      //🛰️ Events (Hooks)
      export interface Events {
          // Dynamic binding
        on?<T extends EventsType>(ev:T, listener:(...args:any[])=>void) : void;
          // Explicit typed hooks (for convenience)
        onCreated?: (workspace:Info) => void;
        onActivated?: (workspace:Info) => void;
        onUpdated?: (workspace:Info) => void;
        onClosed?: (workspaceId:string) => void;
        onTelemetry?: (telemetry:Telemetry) => void;
          // AI-related
        onAiContextSynced?: (context:OsAI.Context) => void;
        OnAIInsight?: (insight:OsAI.Insight) => void;
        onAISuggestedAction?: (action:OsAI.SuggestedAction) => void;
          // Runtime bindings
        onProcessBound? : (workspaceId: string, process:OSsys.Process.Info) => void;
        onProcessUnbound? : (workspaceId: string, pid:number) => void;
        onWindowBound? : (workspaceId: string, windowId:string) => void;
        onWindowUnbound? : (workspaceId: string, windowId:string) => void;
          // Error handling
        onError?: (workspaceId?:string, error?:Error) => void;
      }

      // * 🤖 AI Bridge (Optional Extension)
      export interface AIBridge {
        onContextSynced?: (context:OsAI.Context) => void;
        OnAIAnnotation?: (annotation:OsAI.Annotation) => void;
        onAIInsight?: (insight:OsAI.Insight) => void;
        onAISuggestedAction?: (action:OsAI.SuggestedAction) => void;
      }

      // 🧠 Workspace Intelligence Controller
      export interface IntelligenceController {
        analyzeWorkspace(id:string): Promise<OsAI.Insight[]>;
        recommendActions(id:string): Promise<OsAI.SuggestedAction[]>;
        syncContext(id:string): Promise<OsAI.Context>;
      }
      /**
       * --------------------------------------------------------------------------
       * #🧩 Workspace Runtime Controller (Orchestrator)
       * --------------------------------------------------------------------------
       * #Bridges processes, windows, and AI context into unified runtime control.
       * --------------------------------------------------------------------------
       */
      export interface Controller {
        currenctWorkspaceId : string;
        activeWorkspaces:Map<string, Info>;
        // core lifecycle
        initialze(): Promise<void>;
        shutdown(): Promise<void>;
        switchWorkspace(id:string): Promise<boolean>;

        // subsys
        processManager: Process.Controller;
        windowManager: WindowManagement.Controller;
        sessionManager?: Session.Controller;
        aiManager: OsAI.Controller;
        aiBridge : AIBridge;
        intelligence: IntelligenceController;

        // state Persistence
        saveState(id:string) : Promise<void>;
        restoreState(id:string) : Promise<void>;

        // Observation
        telemetry(workspaceId:string): Promise<Telemetry>;
        events?: Events;
      }
    }
  }
}
