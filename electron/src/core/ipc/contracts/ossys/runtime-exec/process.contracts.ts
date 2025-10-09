export {};
/**
 * --------------------------------------------------------------------------
 * #### OSsys.Runtime / Process Contracts (Global)
 * --------------------------------------------------------------------------
 * Unified process and task management for system, apps, and services.
 * AI-aware and workspace-integrated. Supports full lifecycle control,
 * telemetry, diagnostics, and event-driven monitoring.
 * --------------------------------------------------------------------------
 */

declare global {
  export namespace OSsys {
    export namespace Process {
      /**
       * --------------------------------------------------------------------------
       * Process Types, States, and Actions
       * --------------------------------------------------------------------------
       */
      export type Type =
      | 'system'
        | 'app'
        | 'renderer'
        | 'service'
        | 'ai-agent'
        | 'daemon'
        | 'plugin';

      export type Status =
      | 'initializing'
        | 'running'
        | 'paused'
        | 'suspended'
        | 'stopped'
        | 'terminated'
        | 'zombie'
        | 'error'
        | 'unknown';

        export type Action =
        | 'start'
        | 'stop'
        | 'restart'
        | 'pause'
        | 'resume'
        | 'kill'
        | 'reload';

        export type Priority = 'low' | 'medium' | 'high' | 'critical';
        export type StartMode = 'auto' | 'manual' | 'triggered';
        export type RestartPolicy = 'always' | 'on-failure' | 'never';

        /**
       * --------------------------------------------------------------------------
       * Process Information
       * --------------------------------------------------------------------------
       */
      export interface Info {
        pid                 : number;
        name                : string;
        type                : Type;
        workspaceId?        : string;
        ownerId             : string;
        memory              : number;
        cpu                 : number;
        gpu?                : number;
        io?: {
          readBytes: number;
          writeBytes: number;
        };
        threads?            : number;
        startMode?          : StartMode;
        startedAt           : number;
        updatedAt?          : number;
        status              : Status;
        priority?           : Priority;
        command?            : string;
        args?               : string[];

        // Environment & Metadata
        environment?        : Record<string, any>;
        metadata?           : Record<string, any>;
        logsPath?           : string;
        restartCount?       : number;
        isCritical?         : boolean;
        // 🔧 Lifecycle Enhancements
        restartPolicy?      : RestartPolicy;         // defines how the process should restart
        exitCode?           : number;                // OS-level or app exit code
        exitReason?         : string;                // readable message or system reason
        // ai awareness
        aiContext?          : OsAI.Context;
        aiAnnotations?      : OsAI.Annotation[];
        aiInsights?         : OsAI.Insight[];
        aiSuggestedActions? : OsAI.SuggestedAction[];
        aiConfidence?        : number;

      }

      // lifescycle payload
      export interface StartPayload {
        name: string;
        type: Type;
        workspaceId?: string;
        ownerId: string;
        args?: string[];
        environment?: Record<string, any>;
        metadata?: Record<string, any>;
        priority?: Priority;
        startMode?: StartMode;
        command?: string;
        autoRestart?: boolean;
        aiOptimized?: boolean;
      }


      export interface ActionPayload {
        pid: number;
        action: Action;
        force?: boolean;
        reason?: string;
        metadata?: Record<string, any>;
      }

      export interface UpdatePayload {
        pid: number;
        patch: Partial<Info>;
      }

      // * Process Telemetry / Monitoring
      export interface Telemetry {
        pid : number;
        timestamp   : number;
        cpuUsage?   : number;
        memoryUsage? : number;
        gpuUsage? : number;
        diskIO? : number;
        networkIO? : number;
        threadCount? : number;
        aiConfidence? : number;
        anomalyScore? : number;
        metadata? : Record<string, any>;
        extensions?: Record<string, any>; // 🔧 plugin / 3rd party telemetry hooks
      }

        /**
       * --------------------------------------------------------------------------
       * Process Control Interface
       * --------------------------------------------------------------------------
       */
      export interface Controller {
        start(payload: StartPayload): Promise<Info>;
        act(payload: ActionPayload): Promise<boolean>;
        update(payload: UpdatePayload): Promise<Info>;
        list(): Promise<Info[]>;
        get(pid: number): Promise<Info | undefined>;
        telemetry(pid: number): Promise<Telemetry>;
        // 🔧 new addition — event subscription support
        workspaceManager?: Workspace.Controller;
        events?: Events;
      }
      export type EventType =
        | 'started'
        | 'stopped'
        | 'updated'
        | 'crashed'
        | 'telemetry'
        | 'aiInsight';
      // Runtime Signals ( Event Hooks )
      export interface Events {
        on?<T extends EventType>(event: T, listener: (...args: any[]) => void): void;
        onStarted?: (process: Info) => void;
        onStopped?: (pid: number, reason?: string) => void;
        onUpdated?: (process: Info) => void;
        onCrashed?: (process: Info, error: Error) => void;
        onTelemetry?: (telemetry: Telemetry) => void;
        onAIInsight?: (process: Info, insight: OsAI.Insight) => void;
      }
      /**
       * --------------------------------------------------------------------------
       * Process Diagnostics
       * --------------------------------------------------------------------------
       */

      export interface Diagnostics {
        checkHealth(pid:number): Promise<'healthy' | 'warning' | 'critical' | 'unknown'>;
        getLogs(pid:number): Promise<string[]>;
        getStackTrace(pid:number): Promise<string[]>;
      }
    }
  }
}
