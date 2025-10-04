declare global {
  export namespace OsAI {
    export namespace Model {
      export type Source = 'local' | 'download' | 'cloud';
      export type Status = 'installed' | 'active' | 'error' | 'pending';
      export interface Metadata {
        id                  : string;
        name                : string;
        source              : Source;
        sizeMB?             : number;
        checksum?           : string;
        description?        : string;
        tags?               : string[];
        capabilities?       : string[];
        requiresGPU?        : boolean;
        installedAt?        : number;
        lastUsedAt?         : number;
        status?             : Status;
        metadata?           : Record<string, any>;
      }

      export interface InstallPayload {
        sourceUrl           : string; // file path or url
        expectedChecksum?   : string;
        workspaceId?        : string;
        autoActivate?       : boolean;
      }

      export interface UninstallPayload {
        id                  : string;
        workspaceId?        : string;
      }

      export interface Event {
        modelId             : string;
        type                : 'installed' | 'uninstalled' | 'error' | 'activated' | 'deactivated' | 'removed';
        timestamp           : number;
        message?            : string;
      }

    }
  }
}

export {};
