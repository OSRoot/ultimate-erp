declare global {
  export namespace OsAI {
    /**
   * --------------------------------------------------------------------------
   * #### OsAI.Policy Contracts (Global)
   * --------------------------------------------------------------------------
   * Defines AI security, permissions, and consent models.
   */

    export namespace Policy {
      export interface Consent {
        userId              : string;
        granted             : boolean;
        grantedAt?          : number;
        revokedAt?          : number;
        scopes?             : string[];
      }

      export interface ExecutionPolicy {
        allowInternet?            : boolean;
        allowSystemCommands?      : boolean;
        allowCamera?              : boolean;
        allowMicrophone?          : boolean;
        allowScreenCapture?       : boolean;
        allowLocation?            : boolean;
        allowStorage?             : boolean;
        maxCpuPercentage?         : number;
        maxMemoryMB?              : number;
        autoApplyRecommendations? : boolean;
      }

      export interface PolicyCheckResult {
        allowed: boolean;
        reason? : string;
      }
    }
  }
}

export {};
