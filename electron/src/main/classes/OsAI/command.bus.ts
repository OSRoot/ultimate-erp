export class CommandBus {
  async execute(target: OsAI.Capabilities.TargetType, action:string, payload: any):Promise<boolean> {
    console.log(`[AI CommandBus] Executing on ${target}: ${action}`, payload);

    return true
  }
}
