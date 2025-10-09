declare global {
  export namespace OsAI {
    class Controlling extends EventEmitter implements Controller {
      private models: Map<string, ModelPackage>;
      private context: Context;
      private annotations: Map<string, Annotation[]>;
      private insights: Insight[];
      private suggestions: SuggestedAction[];

      constructor();
    }
  }
}
export {};
