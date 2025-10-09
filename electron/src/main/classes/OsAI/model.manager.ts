export class ModelManager {
  private registry : Map<string, OsAI.Model.Metadata> = new Map()

  list(): OsAI.Model.Metadata[] {
    return [...this.registry.values()]
  }

  async install (payload:OsAI.Model.InstallPayload) : Promise<OsAI.Model.Metadata> {
    // 1. Download or copy file
    // 2. Verify checksum
    // 3. Save metadata
    const model : OsAI.Model.Metadata = {
      id: crypto.randomUUID(),
      name: this.extractName(payload.sourceUrl),
      source: payload.sourceUrl.startsWith('http') ? 'download' : 'local',
      status: 'installed',
      installedAt: Date.now(),
    }

    this.registry.set(model.id, model);

    if (payload.autoActivate){
      await this.activate(model.id)
    }

   return model;
  }


  public async activate(modelId: string): Promise<void>{
    const model = this.registry.get(modelId);
    if (!model) throw new Error('Model not found')

      model.status = 'active';
      model.lastUsedAt = Date.now();

    // load into memory / attach runtime
    // e.g., spawn worker thread with inference engine
  }

  public deactivate(modelId:string):void {
    const model = this.registry.get(modelId);
    if (model) model.status = 'installed'
  }

  public remove(modelId:string):void {
    this.registry.delete(modelId);
  }

  private extractName (source:string) : string {
    return source.split("/").pop() || 'unknow-model'
  }
}
