import { AIOrchestrator } from "../../classes/Ai/ai.orchestrator";

class AIRuntime {

  private orchestrator = new AIOrchestrator();

  get(){
    return this.orchestrator;
  }
}

// expose global
(global as any).OSsys = (global as any).OSsys || {};
(global as any).OsAI = (global as any).OsAI || {};
(global as any).OsAI.Runtime = new AIRuntime();
