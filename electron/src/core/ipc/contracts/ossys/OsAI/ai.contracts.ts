
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
      export type AwarenessLevel = 'low' | 'medium' | 'high' | 'critical';
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

        /**
         * --------------------------------------------------------------------------
         * AI Context (Runtime Awareness Layer)
         * --------------------------------------------------------------------------
         */
        export interface Context {
          sessionId           : string;                        // current AI session
          modelId?            : string;                        // active model
          mode                : Mode;                          // current AI mode
          userId?             : string;                        // current user
          workspaceId?        : string;                        // active workspace
          awarenessLevel?     : AwarenessLevel;                 // system-level awareness
          recentQueries?      : string[];                      // conversational / logical trace
          memoryState?        : Record<string, any>;           // persistent memory snapshot
          focusTargets?       : string[];                      // IDs of active system objects
          activeProcesses?    : string[];                      // linked process IDs
          activeWindows?      : string[];                      // UI components or windows
          lastUpdated?        : number;
          metadata?           : Record<string, any>;
        }

    /**
     * --------------------------------------------------------------------------
     * Annotations (AI-generated insights)
     * --------------------------------------------------------------------------
     */
        export interface Annotation {
          id              : string;
          targetId        : string;
          targetType      : string;
          module?         : string;
          severityScore?  : number;
          classifications? : string[];
          rootCause?      : string;
          recommendations? : string[];
          confidence?     : number;
          relatedPatterns? : string[];
          generatedAt?    : number;
          generatedBy?    : string;  // model or subsystem ID
          metadata?       : Record<string, any>;
        }
        /**
       * --------------------------------------------------------------------------
       * Insight (Aggregated AI Evaluation)
       * --------------------------------------------------------------------------
       */
        export interface Insight {
          id              : string;
          summary         : string;
          confidence      : number;
          category?       : string;
          impactLevel?    : 'low' | 'medium' | 'high' | 'critical';
          relatedTargets? : string[];
          recommendations?: string[];
          generatedAt?    : number;
          generatedBy?    : string;
          metadata?       : Record<string, any>;
        }

        export interface SuggestedAction {
          id         : string;
          label      : string;
          command    : string;
          params?    : Record<string, any>;
          confidence?: number;
          autoExecutable? : boolean;
          priority? : number;
          createdAt  : number;
          createdBy? : string;
          metadata?  : Record<string, any>;
        }

        export interface Controller {
          loadModel(modelId: string): Promise<ModelPackage>;
          unloadModel(modelId: string): Promise<void>;
          infer(req: Inference.Request): Promise<Inference.Response>;
          train(job:TrainingJob): Promise<TrainingJob>;
          getContext(): Promise<Context>;
          updateContext(context:Partial<Context>): Promise<void>;
          annotate(targetId:string, data: Partial<Annotation>): Promise<Annotation>;
          summaryInsights(): Promise<Insight[]>
        }
    }
}

export {};
