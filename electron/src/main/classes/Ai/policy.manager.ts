export class PolicyManager{
  private policies : OsAI.Policy.ExecutionPolicy = {allowInternet:false};

  public setPolicy(policy:OsAI.Policy.ExecutionPolicy): void{
    this.policies = policy;
  }


  isAllowed(_req:OsAI.Inference.Request):OsAI.Policy.PolicyCheckResult{
    if (this.policies.allowInternet && _req.mode ==='online'){
      return {allowed:false, reason:'Internet not allowed'};
    }
    return {allowed:true};
  }
}
