/**
 * OSsys.Security Contracts
 * -----------------------------------------------------
 * Provides security, sandboxing, encryption,
 * and auditing capabilities.
 */
export namespace OSsys {
  export namespace Security {
    export type ThreatLevel = 'low' | 'medium' | 'high' | 'critical';

    export interface AuditLog {
      id:string;
      userId?: string;
      action:string;
      resource:string;
      timestamp: number;
      success: boolean;
      threatLevel: ThreatLevel;
      details?: string;
    }

    export interface EncryptionPayload {
      algo: 'AES' | 'RSA' | 'ChaCha20';
      keyId: string;
      data: string; // Base64 encoded
    }

    export interface VerificationPayload {
      signature:string;
      data: string;
      publicKeyId: string;
    }

  }
}
