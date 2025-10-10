// src/main/classes/OsAI/policy.manager.ts
/**
 * PolicyManager: simple execution policy checks.
 * Extend to support rule sets, RBAC, model permissions, resource quotas, etc.
 */

export class PolicyManager {
  private policies: OsAI.Policy.ExecutionPolicy;

  constructor(initial?: OsAI.Policy.ExecutionPolicy) {
    this.policies = initial || { allowInternet: false, allowedModels: undefined } as any;
  }

  setPolicy(p: OsAI.Policy.ExecutionPolicy) {
    this.policies = { ...this.policies, ...p };
  }

  getPolicy() {
    return { ...this.policies };
  }

  isAllowed(req: OsAI.Inference.Request): OsAI.Policy.PolicyCheckResult {
    // Example checks
    if (req.mode === 'online' && !this.policies.allowInternet) {
      return { allowed: false, reason: 'Online execution disallowed by policy' };
    }
    if (this.policies.allowedModels && req.modelId && !this.policies.allowedModels.includes(req.modelId)) {
      return { allowed: false, reason: 'Model not allowed by policy' };
    }
    // default
    return { allowed: true };
  }
}
