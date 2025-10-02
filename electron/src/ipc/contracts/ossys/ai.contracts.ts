/**
 * --------------------------------------------------------------------------
 * #### OSsys.AI Contracts
 * --------------------------------------------------------------------------
 * AI annotations, insights, and recommendations that can
 * attach to any OSsys entity (Error, Device, Network, etc.)
 * --------------------------------------------------------------------------
 */
declare global {
  export namespace OSsys{
    export namespace AI {
       /**
       * ----------------------------------------------------------------------
       * AI Annotation
       * ----------------------------------------------------------------------
       * A generic "layer" AI can attach to any entity in the OSsys model.
       */
      export interface IAnnotation {
        targetId                : string;                   // entity ID
        targetType              : OSsys.Common.TargetType;  // entity type (from Common)
        module?                 : OSsys.Common.ModuleType;  // which AI module generated it

        severityScore?          : number;                   // 0-1 normalized severity
        classifications?        : string[];                 // labels/tags
        rootCause?              : string;                   // AI hypothesis of cause
        recommendations?        : string[];                 // AI suggested actions
        relatedPatterns?        : string[];                 // AI recurring anomaly patterns
        confidence?             : number;                   // confidence 0–1

        metadata?               : Record<string, any>;      // arbitrary extra AI DATA
        generatedAt?            : number;                   // epoch ms
        generatedBy?            : string;                   // module/agent name
      }


      /**
       * ----------------------------------------------------------------------
       * AI Insight (higher-level aggregate of annotations)
       * ----------------------------------------------------------------------
       */
      export interface Insight {
        id                      : string;
        summary                 : string;
        affectedEntities        : {id:string; type:OSsys.Common.TargetType}[];
        recommendations?        : string[];
        confidence?             : number;
        metadata?               : Record<string, any>;
        generatedAt?            : number;
        generatedBy?            : string;
      }

    }
  }
}



export {};
