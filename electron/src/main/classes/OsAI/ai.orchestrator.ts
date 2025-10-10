// src/main/classes/OsAI/ai.orchestrator.ts
import { EventEmitter } from 'events';
import { CommandBus } from './command.bus';
import { ContextManager } from './context.manager';
import { InferenceEngine } from './inference.engine';
import { ModelManager } from './model.manager';
import { PolicyManager } from './policy.manager';
import { TrainingManager } from './training.manager';

/**
 * OsAIOrchestrator composes the subsystem pieces and provides a
 * single facade for runtime usage.
 */
export class OsAIOrchestrator extends EventEmitter {
  public readonly commandBus: CommandBus;
  public readonly context: ContextManager;
  public readonly engine: InferenceEngine;
  public readonly models: ModelManager;
  public readonly policy: PolicyManager;
  public readonly training: TrainingManager;

  constructor(opts?: { modelsDir?: string; policy?: OsAI.Policy.ExecutionPolicy }) {
    super();

    this.commandBus = new CommandBus();
    this.context = new ContextManager();
    this.engine = new InferenceEngine();
    this.models = new ModelManager(opts?.modelsDir);
    this.policy = new PolicyManager(opts?.policy);
    this.training = new TrainingManager();

    // wire simple event forwarding so external code can listen on orchestrator
    // instead of 6 different emitters:
    this.wireEvents();
  }

  private forward(emitter: EventEmitter, events: string[]) {
    for (const ev of events) {
      emitter.on(ev, (...args) => this.emit(ev, ...args));
    }
  }

  private wireEvents() {
    this.forward(this.engine, ['inference.started', 'inference.completed']);
    this.forward(this.models, ['model.installed', 'model.activated', 'model.deactivated', 'model.removed']);
    this.forward(this.training, ['training.queued', 'training.started', 'training.completed', 'training.canceled']);
    this.forward(this.commandBus, ['command.executing', 'command.succeeded', 'command.failed']);
    this.forward(this.context, ['context.updated', 'context.query']);
  }

  async runInference(req: OsAI.Inference.Request): Promise<OsAI.Inference.Response> {
    const policyCheck = this.policy.isAllowed(req);
    if (!policyCheck.allowed) {
      return {
        id: req.id || cryptoId(),
        modelId: req.modelId,
        kind: 'error',
        message: policyCheck.reason,
        generatedAt: Date.now(),
      };
    }

    // record context
    if (req.prompt) this.context.pushQuery(req.prompt);

    // delegate to inference engine
    const res = await this.engine.run(req);
    return res;
  }

  async executeCommand(target: string, action: string, payload?: any): Promise<any> {
    return this.commandBus.exec(target, action, payload);
  }

  getContextSnapshot(): OsAI.Context {
    return this.context.snapshot();
  }

  async installModel(payload: OsAI.Model.InstallPayload) {
    return this.models.install(payload);
  }

  // expose other convenience wrappers as needed...
}

function cryptoId() {
  return Math.random().toString(36).slice(2, 12);
}
