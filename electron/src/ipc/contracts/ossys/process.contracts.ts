  /**
   * --------------------------------------------------------------------------
   * Process / Task Management
   * --------------------------------------------------------------------------
   */
export namespace OSsys {

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

}
