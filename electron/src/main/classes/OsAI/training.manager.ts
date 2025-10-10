// src/main/classes/OsAI/training.manager.ts
import { EventEmitter } from 'events';
import { randomUUID } from 'crypto';

/**
 * TrainingManager orchestrates training jobs (queued, running, completed).
 * This is a lightweight stub — replace engine-specific logic as needed.
 */
export class TrainingManager extends EventEmitter {
  private jobs = new Map<string, OsAI.TrainingJob>();

  start(jobReq: Partial<OsAI.TrainingJob>): OsAI.TrainingJob {
    const id = jobReq.id || randomUUID();
    const job: OsAI.TrainingJob = {
      id,
      modelId: jobReq.modelId || 'unknown',
      datasetPath: jobReq.datasetPath || '',
      status: 'queued',
      startedAt: Date.now(),
      metadata: jobReq.metadata || {},
    };

    this.jobs.set(id, job);
    this.emit('training.queued', job);

    // simulate background progression
    setTimeout(() => this.run(job.id), 500);
    return job;
  }

  private async run(jobId: string) {
    const job = this.jobs.get(jobId);
    if (!job) return;
    job.status = 'running';
    this.emit('training.started', job);

    // Simulate training time
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 2000));

    job.status = 'completed';
    job.completedAt = Date.now();
    this.jobs.set(jobId, job);
    this.emit('training.completed', job);
  }

  list(): OsAI.TrainingJob[] {
    return Array.from(this.jobs.values());
  }

  get(jobId: string): OsAI.TrainingJob | undefined {
    return this.jobs.get(jobId);
  }

  cancel(jobId: string): boolean {
    const job = this.jobs.get(jobId);
    if (!job) return false;
    job.status = 'canceled';
    job.completedAt = Date.now();
    this.jobs.set(jobId, job);
    this.emit('training.canceled', job);
    return true;
  }
}
