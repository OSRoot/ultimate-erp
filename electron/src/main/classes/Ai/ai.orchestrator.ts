import { CommandBus } from "./command.bus";
import { ContextManager } from "./context.manager";
import { InferenceEngine } from "./inference.engine";
import { ModelManager } from "./model.manager";
import { PolicyManager } from "./policy.manager";
import { TrainingManager } from "./training.manager";

export class OsAIOrchestrator {
  private trainingManager = new TrainingManager();
  private modelManager    = new ModelManager();
  private inferenceEngine = new InferenceEngine();
  private contextManager  = new ContextManager();
  private policyManager   = new PolicyManager();
  private commandBus      = new CommandBus();


  async runInference(req:OsAI.Inference.Request):Promise<OsAI.Inference.Response>{
    const policy = this.policyManager.isAllowed(req);
    if (!policy.allowed){
      return {
        id:req.id,
        kind:'error',
        message:policy.reason,
        generatedAt: Date.now()
      }
    }
    return this.inferenceEngine.run(req);
  }

  async executeCommand(target: OsAI.Capabilities.TargetType, action:string, payload: any):Promise<any>{
    return this.commandBus.execute(target, action, payload);
  }

  getContext (){
    return this.contextManager.snapshot();
  }
}
