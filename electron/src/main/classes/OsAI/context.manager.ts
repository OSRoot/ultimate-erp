export class ContextManager {

  private context: Record<string, any> = {};

  update(key:string, value:any){
    this.context[key] = value;
  }

  get(key:string){
    return this.context[key];
  }

  snapshot(){
    return this.context;
  }

}
