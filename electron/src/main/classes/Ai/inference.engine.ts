export class InferenceEngine {
  async run(req:OsAI.Inference.Request):Promise<OsAI.Inference.Response>{
      // stubbed engine
      return {
        id:req.id,
        modelId: req.id,
        output: {echo: req.prompt ?? req.inputs},
        confidence: 1,
        kind:'success',
        generatedAt: Date.now()
      }
   }
}
