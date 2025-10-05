import { OsAIOrchestrator } from "../../classes/Ai/ai.orchestrator";

class OsAIRuntime {

  private orchestrator = new OsAIOrchestrator();

  get(){
    return this.orchestrator;
  }
}

// expose global
(global as any).OSsys = (global as any).OSsys || {};
(global as any).OsAI = (global as any).OsAI || {};
(global as any).OsAI.Runtime = new OsAIRuntime();
