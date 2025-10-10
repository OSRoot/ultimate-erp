// -----------------------------------------------------------------------------
// 🧠 OsAI Subsystem Registry
// Central export hub for all AI-related controller classes
// -----------------------------------------------------------------------------

import { Controlling } from "./osai.controlling";
import { CommandBus } from "./command.bus";
import { ContextManager } from "./context.manager";
import { InferenceEngine } from "./inference.engine";
import { ModelManager } from "./model.manager";
import { PolicyManager } from "./policy.manager";
import { TrainingManager } from "./training.manager";
import { OsAIOrchestrator } from "./ai.orchestrator";

// -----------------------------------------------------------------------------
// 📦 Export as a cohesive subsystem
// -----------------------------------------------------------------------------
export const OsAI = {
  Controlling,
  OsAIOrchestrator,
  CommandBus,
  ContextManager,
  InferenceEngine,
  ModelManager,
  PolicyManager,
  TrainingManager,
};

export default OsAI;
