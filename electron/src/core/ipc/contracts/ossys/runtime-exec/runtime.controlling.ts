export {};


declare global{
  export namespace OSsys {
    /**
     * =======================================================================
     * #🧠 OSsys.Runtime.Controlling
     * -----------------------------------------------------------------------
     * #The central orchestrator of the mini-OS system. Handles coordination,
     * #synchronization, and telemetry between all runtime subsystems:
     * #Process, Workspace, WindowManagement, and AI.
     * -----------------------------------------------------------------------
     * #Responsibilities:
     *  - Initialize and shut down subsystems
     *  - Route events between layers
     *  - Maintain global runtime context
     *  - Aggregate telemetry and diagnostics
     *  #- Handle AI awareness and adaptive orchestration
     * =======================================================================
     */
    export namespace OSRuntime {
      export type State =
        | 'booting'
        | 'initializing'
        | 'ready'
        | 'running'
        | 'suspending'
        | 'shutting-down'
        | 'error'
        | 'offline';

      export type Mode = 'standard' | 'diagnostic' |  'safe' | 'headless';
      export type SystemHealth = 'healthy' | 'degraded' | 'unresponsive' | 'critical' | 'unknown';

      export interface Context {
        state         : State;
        mode          : Mode;
        startTime     : number;
        uptime?       : number;
        activeWorkspaceId? : string;
        activeProcessIds? : string[];
        activeWindowIds? : string[];
        aiAwarenessLevel? : OsAI.AwarenessLevel;
        systemHealth? : SystemHealth;
        metadata? : Record<string, any>;
      }


      export interface InitPayload {
        mode?: Mode;
        preloadAI?: boolean;
        preloadWindows?: boolean;
        preloadWorkspaces?: boolean;
        preloadProcesses?: boolean;
      }


      export interface ShutdownPayload {
        saveState ? : boolean;
        reason? : string;
        force? : boolean;
      }

      export interface SwitchWorkspacePayload {
        workspaceId : string;
        autoSaveCurrent?:boolean;
        restoreWindows?:boolean;
      }

      export interface Telemetry {
        timestamp : number;
        cpuTotal ? : number;
        memoryTotal ? : number;
        gpuTotal ? : number;
        diskIO ? : number;
        networkIO ? : number;
        processCount ? : number;
        workspaceCount ? : number;
        windowCount ? : number;
        aiConfidence ? : number;
        anomalyScore ? : number;
        metadata ? : Record<string, any>;
      }

      export interface Diagnostics {
        runtimeState : State;
        context : Context;
        processTelemetry : Process.Telemetry[];
        windowTelemetry : WindowManagement.Telemetry[];
        workspaceTelemetry : Workspace.Telemetry[];
        aiStatus : OsAI.Context;
      }

      // subsys binding
      export interface Subsystems {
        process: Process.Controller;
        window: WindowManagement.Controller;
        workspace: Workspace.Controller;
        session: Session.Controller;
        ai: OsAI.Controller;
      }

      export type EventType =
        | 'initialized'
        | 'workspace.switched'
        | 'process.started'
        | 'process.stopped'
        | 'window.opened'
        | 'window.closed'
        | 'telemetry'
        | 'diagnostic.update'
        | 'ai.context.synced'
        | 'error';

      export interface Events {
        on?<T extends EventType>(ev:T, listener:(...args:any[]) => void):void;
        onInitialized:(context:Context)=>void;
        onWorkspaceSwitched:(workspaceId:string)=>void;
        onTelemetry:(data: Telemetry)=>void;
        onDiagnosticUpdate:(data: Diagnostics)=>void;

        onError: (error: Error) => void;
      }

      // runtime controlling (Brain)
      export interface Controlling {
        context:Context;
        subsystems: Subsystems;
        // lifecycle
        init(payload?: InitPayload): Promise<boolean>;
        shutdown(payload?: ShutdownPayload): Promise<boolean>;
        reload(): Promise<boolean>;

        switchWorkspace(payload: SwitchWorkspacePayload) : Promise<boolean>;
        telemetry() : Promise<Telemetry>;
        diagnostics() : Promise<Diagnostics>;

        syncAIContext() : Promise<OsAI.Context>;
        applyAIRecommendations(): Promise<void>;
        events ? : Events;

        getState() : State;
        getContext() : Context;
      }
    }
  }
}
