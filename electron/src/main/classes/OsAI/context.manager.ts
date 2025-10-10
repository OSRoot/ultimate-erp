// src/main/classes/OsAI/context.manager.ts
import { EventEmitter } from "events";
import { randomUUID } from 'crypto';

/**
 * ContextManager stores AI runtime context and provides helpers
 * to merge/update/query the context.
 */

export class ContextManager extends EventEmitter {
  private context : OsAI.Context;

  constructor (init?: Partial<OsAI.Context>){
    super();
    this.context = {
      sessionId: init.sessionId ?? randomUUID(),
      mode: init.mode ?? 'hybrid',
      awarenessLevel: init.awarenessLevel ?? 'low',
      recentQueries: init.recentQueries ?? [],
      memoryState: init.memoryState ?? {},
      focusTargets: init.focusTargets ?? [],
      activeProcesses: init.activeProcesses ?? [],
      activeWindows: init.activeWindows ?? [],
      lastUpdated: init.lastUpdated ?? Date.now(),
      metadata: init.metadata ?? {},
    }
  }

  public snapshot (): OsAI.Context { return {...this.context}; }

  public async update (partial:Partial<OsAI.Context>): Promise<OsAI.Context> {
    this.context = { ...this.context, ...partial, lastUpdated: Date.now() };
    this.emit('context.updated', this.context);
    return this.snapshot();
  }


  public pushQuery(prompt: string){
    if (!this.context.recentQueries) this.context.recentQueries = [];
    this.context.recentQueries.push(prompt);
    // keep reasonable memory
    if (this.context.recentQueries.length > 200) this.context.recentQueries.shift();
    this.context.lastUpdated = Date.now();
    this.emit('context.query', this.context);
  }


  get<K extends keyof OsAI.Context>(key:K):OsAI.Context[K] | undefined {
     return this.context[key];
  }
}
