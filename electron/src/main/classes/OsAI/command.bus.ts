// src/main/classes/OsAI/command.bus.ts
import { EventEmitter } from "events";

/**
 * Lightweight command bus used by the orchestrator to route actions to targets.
 * Targets are logical names (e.g., "process", "workspace", "system") and handlers
 * can be registered dynamically.
 */

export class CommandBus extends EventEmitter {
  private handlers : Map<string, (action:string, payload: any) => Promise<any>>;

  public registerHandler(target:string, handler: (action:string, payload: any) => Promise<any>) {
    this.handlers.set(target, handler);
    this.emit('handler.registered', target);
  }

  public unregisterHandler(target:string) {
    this.handlers.delete(target);
    this.emit('handler.unregistered', target);
  }


  public async exec(target:string, action:string, payload: any): Promise<any> {
    const handler = this.handlers.get(target);
    this.emit('command.executing', {target, action, payload});
    if (!handler) {
      const err = new Error(`No handler registered for target ${target}`);
      this.emit('command.failed', {target, action, error: err});
      throw err;
    }
    try {
      const res = await handler(action, payload);
      this.emit('command.executed', {target, action, payload, res});
      return res;
    } catch (error) {
      this.emit('command.failed', {target, action, error});
      throw error;
    }
  }

  public listHandlers(): string[] { return Array.from(this.handlers.keys()); }
}
