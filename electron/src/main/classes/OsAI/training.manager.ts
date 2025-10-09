export class TrainingManager {
  private jobs: Map<string, OsAI.TrainingJob> = new Map()


  public start(job: OsAI.TrainingJob): OsAI.TrainingJob {
    job.status = 'queued';
    this.jobs.set(job.id, job);
    return job;
  }


  public updateStatus(jobId:string, status: OsAI.TrainingJob['status']){
    const job = this.jobs.get(jobId);
    if (job){
      job.status = status;
      if (status === 'completed' || status === 'failed') {
        job.completedAt = Date.now();
      }
    }
    return job;
  }


  public list():OsAI.TrainingJob[]{
    return Array.from(this.jobs.values());
  }



}
