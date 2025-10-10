import { randomUUID } from "crypto";
import { EventEmitter } from "events";
//---------------------------------------------------------------------------------
// 🧩 OsAI Controller
//---------------------------------------------------------------------------------
export class Controlling extends EventEmitter implements OsAI.Controller {
  private models = new Map<string, OsAI.ModelPackage>();
  private context : OsAI.Context;
  private annotations: Map<string, OsAI.Annotation[]> = new Map();
  private insights: OsAI.Insight[] = [];
  private suggestions: OsAI.SuggestedAction[] = [];
  private awarenessInterval?: NodeJS.Timeout;
  private AWARENESS_CYCLE_MS = 5000; // 5 seconds
  //---------------------------------------------------------------------------------
  //  Controller Constrctor
  //---------------------------------------------------------------------------------
  constructor() {
    super();
    this.context = {
      sessionId: randomUUID(),
      mode:'hybrid',
      awarenessLevel:'medium',
      lastUpdated: Date.now(),
      memoryState:{},
      metadata:{},
      focusTargets:[],
      recentQueries:[],
    };

    this.startAwarenessCycle();
  }
  //---------------------------------------------------------------------------------
  //  Controller Awareness
  //---------------------------------------------------------------------------------
  private startAwarenessCycle():void {
    const loop = async () => {
      this.evaluateAwareness();
      await new Promise (r => setTimeout(r, this.AWARENESS_CYCLE_MS));
      if (this.awarenessInterval) loop();
    }
    this.awarenessInterval = setTimeout(loop, this.AWARENESS_CYCLE_MS);
  }

  private stopAwarenessCycle():void {
    if (this.awarenessInterval) clearInterval(this.awarenessInterval);
  }

  private evaluateAwareness():void {
    const activityScore =
    (this.context.recentQueries?.length || 0) +
    (this.models.size * 2 ) +
    (this.annotations.size * 3);

    let newLvl : OsAI.AwarenessLevel = 'low';
    if (activityScore > 15) newLvl = 'critical';
    else if (activityScore > 8) newLvl = 'high';
    else if (activityScore > 3) newLvl = 'medium';
    if (newLvl === 'critical' && this.AWARENESS_CYCLE_MS !== 2000) this.AWARENESS_CYCLE_MS = 2000;
    else if (newLvl === 'low' && this.AWARENESS_CYCLE_MS !== 8000) this.AWARENESS_CYCLE_MS = 8000;

    if (this.context.awarenessLevel !== newLvl) {
      this.generateSuggestionsForLevel(newLvl);
      this.context.awarenessLevel = newLvl;
      this.context.lastUpdated = Date.now();
      const insight: OsAI.Insight = {
        id: randomUUID(),
        summary:'Awareness level updated to '+this.context.awarenessLevel,
        confidence: 0.9,
        category:'awareness',
        impactLevel: newLvl === 'critical' ? 'high' : 'medium',
        generatedAt: Date.now(),
        generatedBy: 'awareness-cycle',
      }
      this.insights.push(insight);
      this.emit('awareness.updated', insight);
    }
  }
  //---------------------------------------------------------------------------------
  //  Controller Lifecycle
  //---------------------------------------------------------------------------------
  async loadModel(modelId: string): Promise<OsAI.ModelPackage> {
    const model: OsAI.ModelPackage = {
      id: modelId,
      version:'0.0.1',
      sourceUrl:'file://models/'+modelId,
      installedPath:'/models/'+modelId,
      checksum:'1234567890',
      signature:'1234567890',
      sizeBytes: 0,
      downloadedAt: Date.now(),
      installedAt: Date.now(),
      lastUpdated: Date.now(),
      mode:'hybrid',
      capabilities:['infer', 'analyze', 'train'],
    }
    this.models.set(modelId, model);
    this.emit('model.loaded', model);
    return model;
  }


  async unloadModel(modelId: string): Promise<void> {
    this.models.delete(modelId);
    this.emit('model.unloaded', modelId);
  }

  async infer(req: OsAI.Inference.Request): Promise<OsAI.Inference.Response> {
    if (req.modelId && !this.models.has(req.modelId)){
      throw new Error('Model not loaded'+req.modelId);
    }
    const response: OsAI.Inference.Response ={
      id:req.id || randomUUID(),
      modelId: req.modelId,
      confidence: 1,
      kind:'success',
      message:'Mock Inference Response',
      generatedAt: Date.now(),
      metadata:{...req.metadata, simulated:true},
    }

    // record this in context
    if (!this.context.recentQueries) this.context.recentQueries = [];
    this.context.recentQueries.push(req.prompt || 'unknown');
    this.context.lastUpdated = Date.now();
    this.emit('inference.completed', response);
    return response;
  }

  async train(job: OsAI.TrainingJob): Promise<OsAI.TrainingJob> {
    job.status = 'completed';
    job.completedAt = Date.now();
    this.emit('training.completed', job);
    return job;
  }

  async getContext(): Promise<OsAI.Context> {
    return this.context;
  }

  async updateContext(context: Partial<OsAI.Context>): Promise<void> {
    this.context = {...this.context, ...context};
    this.emit('context.updated', this.context);
  }
  //---------------------------------------------------------------------------------
  //  Controller Annotations
  //---------------------------------------------------------------------------------
  async annotate(targetId: string, data: Partial<OsAI.Annotation>): Promise<OsAI.Annotation> {
    const annotation: OsAI.Annotation = {
      id: randomUUID(),
      targetId: targetId,
      targetType:data.targetType || 'generic',
      severityScore: data.severityScore || 0,
      confidence: data.confidence || 0,
      generatedAt: Date.now(),
      generatedBy: data.generatedBy || 'unknown',
      module: data.module || 'unknown',
      ...data
    }

    if (!this.annotations.has(targetId)) this.annotations.set(targetId, []);
    this.annotations.get(targetId)!.push(annotation);
    this.emit('annotation.created', annotation);
    return annotation;
  }

  //---------------------------------------------------------------------------------
  //  Controller Insights
  //---------------------------------------------------------------------------------
  async summaryInsights(): Promise<OsAI.Insight[]> {
    const insight: OsAI.Insight = {
      id: randomUUID(),
      summary:'System operating within normal parameters.',
      confidence: 1,
      generatedAt: Date.now(),
      impactLevel:'low',
      generatedBy: 'unknown',
      category:'operational',
    }
    this.insights.push(insight);
    this.emit('insight.created', insight);
    return this.insights;
  }


  //---------------------------------------------------------------------------------
  //  Controller Suggestions
  //---------------------------------------------------------------------------------
  private generateSuggestionsForLevel(level : OsAI.AwarenessLevel):void{
    const suggestions:Record<OsAI.AwarenessLevel, OsAI.SuggestedAction[]> = {
      low: [],
      medium: [],
      high: [{
        id:randomUUID(),
        label:'Optimize Memory Usage',
        command:'os.memory.optimize',
        confidence:0.9,
        createdAt:Date.now(),
        autoExecutable:true,
        priority:2
      }],
      critical: [
        {
          id:randomUUID(),
          label:'Reduce Process Load',
          command:'os.process.throttle',
          confidence:0.95,
          createdAt:Date.now(),
          autoExecutable:true,
          priority:1
        }
      ],
    };
    const actions = suggestions[level];
    if (actions && actions.length) {
      this.suggestions.push(...actions);
      actions.forEach(action => this.emit('suggestion.created', action));
    }
  }

  public destroy(): void {
    this.stopAwarenessCycle();
    this.models.clear();
    this.annotations.clear();
    this.insights = [];
    this.suggestions = [];
    this.emit('controller.destroyed');
  }
}
