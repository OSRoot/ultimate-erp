
   /**
   * --------------------------------------------------------------------------
   * Security & Permissions
   * --------------------------------------------------------------------------
   */
export namespace OSsys {

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
}
