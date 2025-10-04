
declare global {
  /**
   * --------------------------------------------------------------------------
   * #### OsAI Contracts (Global)
   * --------------------------------------------------------------------------
   * Defines AI models, inference, training, annotations, and responses.
   * Global namespace → no imports required.
   */
    export namespace OsAI {
      export type Mode = 'online' | 'offline' | 'hybrid';

      export interface ModelPackage {
        id              : string;
        name?           : string;
        version         : string;
        sourceUrl       : string;
        installedPath   : string;
        checksum        : string;
        signature       : string;
        sizeBytes       : number;
        capabilities    : string[];
        downloadedAt    : number;
        installedAt     : number;
        lastUpdated     : number;
        mode?           : Mode;
        metadata?       : Record<string, any>;
      }
      export type TrainJobStatus = 'queued' | 'running' | 'completed' | 'failed' | 'canceled';
      export interface TrainingJob {
        id              : string;
        modelId         : string;
        datasetPath     : string;
        status          : TrainJobStatus;
        startedAt       : number;
        completedAt?    : number;
        metadata?       : Record<string, any>;
      }
      export namespace Inference {
        export type InfReqKind = 'success' | 'partial' | 'incomplete' | 'error' | 'canceled';
        export interface Request {
          id              : string;
          modelId?        : string;
          inputs?         : Record<string, any>;
          prompt?         : string;
          outputs?        : Record<string, any>;
          confidence?     : number;
          kind            : InfReqKind;
          message?        : string;
          generatedAt?    : number;
          mode            : Mode;
          metadata?       : Record<string, any>;
        }
        export interface Response {
          id                : string;
          modelId?          : string;
          output?           : { [key: string]: any };
          targetType?       : string;
          confidence?       : number;
          message?          : string;
          severity?         : number;
          kind?             : InfReqKind;
          recommendations?  : string[];
          generatedAt?      : number;
          metadata?         : Record<string, any>;
        }
      }
    }
}

export {};
