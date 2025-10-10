// src/main/classes/OsAI/model.manager.ts
import { EventEmitter } from 'events';
import * as fs from 'fs/promises';
import * as path from 'path';
import { randomUUID } from 'crypto';

/**
 * ModelManager keeps metadata about installed models, performs install/remove,
 * activation, and lightweight verification.
 *
 * NOTE: actual model download/verification and storage is implementation-specific
 * and should be adapted to your environment.
 */
export class ModelManager extends EventEmitter {
  private registry : Map<string, OsAI.ModelPackage> = new Map<string, OsAI.ModelPackage>();
  private modelsDir :string;

  constructor(modelsDir= path.resolve(process.cwd(), 'models')){
    super();
    this.modelsDir = modelsDir;
  }


  public list():OsAI.ModelPackage[]{
    return Array.from(this.registry.values());
  }

  public async ensureModelDir(): Promise<void> {
    try {
      await fs.mkdir(this.modelsDir, { recursive: true });
    } catch  { /* ignore */}
  }

  public async install(payload:OsAI.Model.InstallPayload): Promise<OsAI.ModelPackage> {
    await this.ensureModelDir();

    const id = randomUUID();
    const filename = path.basename(payload.sourceUrl);
    const installedPath = path.join(this.modelsDir, `${id}-${filename}`);

    if (payload.sourceUrl.startsWith('file://')) {
      const src = payload.sourceUrl.replace('file://', '');
      try {
        await fs.copyFile(src, installedPath);
      } catch (error) {
        // copy failded
      }
    }

    const pkg:OsAI.ModelPackage = {
      id,
      name: payload.name ?? filename,
      version:payload.version ?? '0.0.1',
      checksum: payload.expectedChecksum ?? '',
      signature: payload.signature ?? '',
      sourceUrl: payload.sourceUrl,
      installedPath,
      sizeBytes: payload.sizeBytes ?? 0,
      downloadedAt: Date.now(),
      installedAt: Date.now(),
      lastUpdated: Date.now(),
      mode: 'hybrid',
      capabilities: ['infer', 'analyze', 'train'],
      metadata: payload.metadata ?? {}
    };

    this.registry.set(id, pkg);
    this.emit('model.installed', pkg);

    if (payload.autoActivate) this.activate(id);
    return pkg;
  }


  public async activate(modelId: string): Promise<void> {
    const model = this.registry.get(modelId);
    if (!model) throw new Error(`Model ${modelId} not found`);
    model.metadata = { ...model.metadata, active: true };
    model.lastUpdated = Date.now();
    this.emit('model.activated', model);
  }

  public deactivate(modelId:string) :void {
    const model = this.registry.get(modelId);
    if (!model) return;
    model.metadata = { ...model.metadata, active: false };
    model.lastUpdated = Date.now();
    this.emit('model.deactivated', model);
  }

  remove(modelId:string) :void {
    const model = this.registry.get(modelId);
    if (!model) return;
    this.registry.delete(modelId);
    this.emit('model.removed', model);
  }

  get(modelId:string) :OsAI.ModelPackage | undefined { return this.registry.get(modelId); }
}
