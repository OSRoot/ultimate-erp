import { Rectangle } from "electron";

declare global {
  export namespace OSsys {
    /**
     * --------------------------------------------------------------------------
     * #### OSsys.WindowManagement Contracts (Standalone)
     * --------------------------------------------------------------------------
     * Defines the full window lifecycle, metadata, AI awareness, and diagnostics.
     * Contextually linked to Workspace and Process layers.
     * --------------------------------------------------------------------------
     */
    export namespace WindowManagement {
      // =========================================================================
      // Enums
      // =========================================================================

      export enum WindowState {
        ACTIVE = 'active',
        HIDDEN = 'hidden',
        CLOSED = 'closed',
      }

      export enum WindowType {
        MAIN = 'main',
        CHILD = 'child',
        POPUP = 'popup',
        MODAL = 'modal',
      }

      export enum WindowAction {
        MINIMIZE = 'minimize',
        MAXIMIZE = 'maximize',
        RESTORE = 'restore',
        CLOSE = 'close',
        TOGGLE_FULLSCREEN = 'toggleFullscreen',
      }

      export enum NotificationLevel {
        INFO = 'info',
        SUCCESS = 'success',
        WARNING = 'warning',
        ERROR = 'error',
      }

      // =========================================================================
      // Core Types
      // =========================================================================

      export type Visibility = 'visible' | 'hidden' | 'minimized' | 'maximized';

      export interface WindowMetadata {
        id: string;
        customId?: string;
        workspaceId?: string;
        ownerProcessId?: string;
        sessionId?: string;
        title?: string;
        route?: string;
        type?: WindowType;
        state?: WindowState;
        bounds?: Rectangle;
        visibility?: Visibility;
        maximized?: boolean; // fixed typo: was "maxmized"
        fullscreen?: boolean;
        zIndex?: number;

        createdAt?: number;
        updatedAt?: number;
        lastFocus?: number;

        // UX / Appearance
        theme?: string;
        locale?: string;
        isModal?: boolean;
        resizable?: boolean;
        focusable?: boolean;
        isPrimary?: boolean;

        // Metadata / Extra
        metadata?: Record<string, any>;
        tags?: string[];

        // AI Awareness Layer
        aiContext?: OsAI.Context;
        aiAnnotations?: OsAI.Annotation[];
        aiInsights?: OsAI.Insight[];
        aiSuggestions?: OsAI.SuggestedAction[];
        aiAwarenessLevel?: OsAI.AwarenessLevel;
      }

      // =========================================================================
      // Lifecycle Payloads
      // =========================================================================

      export interface OpenPayload {
        id?: string;
        title?: string;
        route: string;
        ownerProcessId?: string;
        workspaceId?: string;
        sessionId?: string;
        query?: string;
        hash?: string;
        options?: {
          modal?: boolean;
          width?: number;
          height?: number;
          resizable?: boolean;
          focusable?: boolean;
          frame?: boolean;
          fullscreen?: boolean;
          parentId?: string;
          backgroundColor?: string;
          alwaysOnTop?: boolean;
          transparent?: boolean;
        };
        metadata?: Record<string, any>;
      }

      export interface ActionPayload {
        winId: string;
        action: WindowAction;
        args?: any;
      }

      export interface UpdatePayload {
        winId: string;
        patch: Partial<WindowMetadata>;
      }

      export interface ClosePayload {
        winId: string;
        force?: boolean;
        reason?: string;
      }

      // =========================================================================
      // Telemetry / Analytics
      // =========================================================================

      export interface Telemetry {
        winId: string;
        timestamp: number;
        fps?: number;
        memoryUsage?: number;
        cpuUsage?: number;
        gpuUsage?: number;
        isVisible?: boolean;
        aiConfidence?: number;
        metadata?: Record<string, any>;
      }

      // =========================================================================
      // Controller / Actions
      // =========================================================================

      export interface Controller {
        open(payload: OpenPayload): Promise<WindowMetadata>;
        act(payload: ActionPayload): Promise<boolean>;
        update(payload: UpdatePayload): Promise<WindowMetadata>;
        close(payload: ClosePayload): Promise<boolean>;
        list(): Promise<WindowMetadata[]>;
        get(winId: string): Promise<WindowMetadata | undefined>;
        telemetry(winId: string): Promise<Telemetry>;

        // Optional event bindings
        events?: Events;
      }

      // =========================================================================
      // Events
      // =========================================================================

      export type EventType =
        | 'opened'
        | 'focused'
        | 'blurred'
        | 'updated'
        | 'closed'
        | 'telemetry'
        | 'resized'
        | 'moved'
        | 'error'
        | 'ai.insight'
        | 'ai.action.suggested';

      export interface Events {
        on?<T extends EventType>(ev: T, listener: (...args: any[]) => void): void;

        // Core lifecycle
        onOpened?: (meta: WindowMetadata) => void;
        onFocused?: (winId: string) => void;
        onBlurred?: (winId: string) => void;
        onUpdated?: (meta: WindowMetadata) => void;
        onClosed?: (winId: string, reason?: string) => void;
        onResized?: (winId: string, bounds: Rectangle) => void;
        onMoved?: (winId: string, bounds: Rectangle) => void;
        onTelemetry?: (data: Telemetry) => void;

        // AI
        onAIInsight?: (winId: string, insight: OsAI.Insight) => void;
        onAISuggestedAction?: (winId: string, action: OsAI.SuggestedAction) => void;

        // Errors
        onError?: (winId?: string, error?: Error) => void;
      }

      // =========================================================================
      // Diagnostics / Health Utilities
      // =========================================================================

      export interface Summary {
        metadata?: WindowMetadata;
        telemetry?: Telemetry;
        relatedWorkspace?: Workspace.Info;
        relatedProcess?: Process.Info;
        relatedSession?: Session.Info;
      }

      export interface Diagnostics {
        summarize(winId: string): Promise<Summary>;
        checkHealth(
          winId: string
        ): Promise<'healthy' | 'degraded' | 'unresponsive' | 'unknown'>;
        getLogs(winId: string): Promise<string[]>;
      }
    }
  }
}

export {};
