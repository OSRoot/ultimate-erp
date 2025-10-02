   /**
   * --------------------------------------------------------------------------
   * Workspaces
   * --------------------------------------------------------------------------
   */
export namespace OSsys {
  export namespace Workspace {

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

  }
}
