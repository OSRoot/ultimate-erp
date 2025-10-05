

/**
 * #### OSsys.Error Contracts
 * -----------------------------------------------------
 * Handles system error logging,
 * reporting, and management.
 * AI can optionally enrich errors with insights,
 * classifications, and recommendations.
 */
export namespace OSsys {
  export namespace Error {
        /**
       * --------------------------------------------------------------------------
       * #### Error Levels
       * --------------------------------------------------------------------------
       */
      export type Level = 'fatal' | 'error' | 'warn' | 'info' | 'debug';
      /**
       * --------------------------------------------------------------------------
       * #### Error Categories
       * --------------------------------------------------------------------------
       */
      export type Category =
        | 'system'
        | 'network'
        | 'security'
        | 'process'
        | 'window'
        | 'workspace'
        | 'device'
        | 'plugin'
        | 'service'
        | 'firewall'
        | 'theme'
        | 'power'
        | 'performance'
        | 'update'
        | 'integration'
        | 'other';

      /**
       * --------------------------------------------------------------------------
       * #### Core Error Payload
       * --------------------------------------------------------------------------
       */
      export interface Payload {
        id                    : string;               // UUIDv4 / ULID
        code                  : string;               // machine readable error code
        message               : string;               // human readable message
        category?             : Category;
        level?                : Level;
        stack?                : string;
        source?               : string;               // subsystem/module origin
        timestamp             : number;               // epoch ms
        userId?               : string;
        workspaceId?          : string;
        correlationId?        : string;               // trace across subsystems
        relatedErrorIds?      : string[];             // link to other errors
        metadata?             : Record<string, any>;  // extensible metadata JSON-safe metadata
      }
    /**
     * --------------------------------------------------------------------------
     * AI Enrichment (Optional)
     * --------------------------------------------------------------------------
     * Provides AI-augmented insights about an error.
     * Safe to unplug/remove if AI is not used.
     */

    export interface AIAnnotation {
      errorId               : string;
      serverityScore?       : number;                 // numeric score (0-1 or 0-100)
      classification?       : string;                 // AI-generated category refinement
      rootCause?            : string;                 // possible root cause explanation
      recommendations?      : string[];               // suggested fix or mitigation
      relatedPatterns?      : string[];               // clustering / anomaly detection
      confidence?           : number;                 // AI confidence in annotation
      metadata?             : Record<string, any>;    // custom enrichment data
      generatedAt?          : number;   // epoch ms
      generatedBy?          : string;   // AI engine / version
    }

    /**
     * --------------------------------------------------------------------------
     * Error Event Payloads
     * --------------------------------------------------------------------------
     */
      export interface ReportPayload {
        error                 : Payload;
        context?              : string;
        tags?                 : string[]; // extra labels for filtering
        severityOverride?     : Level;    // allow runtime escalation/demotion
        aiAnnotations?        : AIAnnotation[]; // optional AI enrichments
      }

      export interface AckPayload {
        errorId               : string;
        acknowledgedBy        : string; // user / system process
        acknowledgedAt        : number;
      }
      /**
       * --------------------------------------------------------------------------
       * #### Persistent Error Log Entry
       * --------------------------------------------------------------------------
       */
      export interface LogEntry extends Payload {
        archived?             : boolean;
        resolved?             : boolean;
        resolvedBy?           : string;
        resolvedAt?           : number;
        aiAnnotations?        : AIAnnotation[]; //  historical enrichment
      }
    }

}
