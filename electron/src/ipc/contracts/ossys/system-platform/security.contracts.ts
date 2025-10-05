export {};

/**
 * --------------------------------------------------------------------------
 * #### OSsys.Security Contracts (Global)
 * --------------------------------------------------------------------------
 * Platform-level security contracts: authentication helpers, encryption,
 * biometric management, attestation, secure storage, sandboxing, policy
 * enforcement, and integration with firewall & permissions subsystems.
 * --------------------------------------------------------------------------
 */
declare global {
  export namespace OSsys {
    export namespace Security {
      // ------------------------------------------------------------------------
      // Core types
      // ------------------------------------------------------------------------
      export type AuthFactor = 'password' | 'passkey' | 'webauthn' | 'totp' | 'biometric' | 'oauth' | 'api-key';
      export type BiometricType = 'face' | 'fingerprint' | 'voice' | 'iris' | 'other';
      export type AttestationLevel = 'none' | 'measured' | 'hardware-backed' | 'tpm';
      export type KeyType = 'symmetric' | 'asymmetric' | 'hmac' | 'kdf';
      export type KeyUsage = 'encrypt' | 'decrypt' | 'sign' | 'verify' | 'derive' | 'wrap' | 'unwrap';
      export type CryptoAlgo = 'AES-GCM' | 'RSA-OAEP' | 'RSA-PSS' | 'ECDSA' | 'Ed25519' | 'HKDF' | 'HMAC-SHA256';
      export type CryptoKeyProvider = 'os' | 'tmp' | 'hsm' | 'software';

      // ------------------------------------------------------------------------
      // Identity & Authentication
      // ------------------------------------------------------------------------
      export interface Credential {
        id:string;
        userId:string;
        type:AuthFactor;
        createdAt:number;
        lastUsedAt?:number;
        metadata?:Record<string, any>;
        revoked?:boolean;
      }

      export interface BiometricRecord {
        id:string;
        userId:string;
        type:BiometricType;
        createdAt:number;
        lastVerifiedAt?:number;
        hardwareBacked?:boolean;
        templateHash?:string; //hashed template, never raw biometric data
        metadata?:Record<string, any>;
      }

      export interface AuthResult {
        succes:boolean;
        userId?: string;
        sessionId?:string;
        factorsUsed? : AuthFactor[];
        reason?: string;
        timestamp: number;
        riskScore?: number; // 0-100, higher is more risky
      }

      // ------------------------------------------------------------------------
      // Key Management / Secure Storage
      // ------------------------------------------------------------------------
      export interface CryptoKey {
        id:string;
        alias?:string;
        type:KeyType;
        algo:CryptoAlgo;
        length?:number;
        createdAt: number;
        expiresAt?: number;
        usages?: KeyUsage[];
        extractable?: boolean;
        metadata?:Record<string, any>;
        provider?: CryptoKeyProvider;
      }

      export interface SecureSecret {
        id:string;
        alias?:string;
        createdAt: number;
        expiresAt?: number;
        metadata?:Record<string, any>;
        // value must be stored encrypted on disk; no value present in contract
      }

      // ------------------------------------------------------------------------
      // Attestation & Device Trust
      // ------------------------------------------------------------------------

      export interface AttestationReport {
        deviceId:string;
        level:AttestationLevel;
        timestamp:number;
        evidence?:Record<string, any>;
        issuer?:string;
        signature?:string;
        metadata?:Record<string, any>;
      }

      // ------------------------------------------------------------------------
      // Sandbox / Process Isolation
      // ------------------------------------------------------------------------

      export type SandboxLevel ='none' | 'basic' | 'isolated' | 'vm' | 'container';

      export interface SandboxPolicy {
        id:string;
        name?:string;
        level: SandboxLevel;
        allowedResources?:{
          network?:boolean;
          filesystem?:boolean;
          devices?:string[];
          gpu?:boolean;
        };
        maxMemoryMB?: number;
        maxCpuPercentage?: number;
        metadata?:Record<string, any>;
      }

      // ------------------------------------------------------------------------
      // Policy / Enforcement Structures
      // ------------------------------------------------------------------------

      export interface EnforceDecision {
        allowed: boolean;
        reason?: string;
        policyId?: string;
        details?:Record<string, any>;
      }

      // ------------------------------------------------------------------------
      // Audit / Incident
      // ------------------------------------------------------------------------

      export interface Incident {
        id:string;
        title:string;
        severity : 'low' | 'medium' | 'high' | 'critical';
        occurredAt: number;
        source?: string; //  subsystem e.g., "auth", "kernel", "firewall"
        description?: string;
        relatedSessionId?: string;
        relatedPID?: number;
        evidence?:Record<string, any>;
        resolved?: boolean;
        resolvedAt?: number;
        metadata?:Record<string, any>;
      }

      // ------------------------------------------------------------------------
      // Security Controller (runtime API)
      // ------------------------------------------------------------------------
      export interface Controller {
        // auth / credentials
        verifyCredential(credentialId:string, secret?:string) : Promise<AuthResult>;
        registerCredential(userId:string, credential:Partial<Credential>) : Promise<Credential>;
        revokeCredential(credentialId:string, reason?:string) : Promise<boolean>;
        listCredentials(userId:string): Promise<Credential[]>;

        // Biometrics
        registerBiometric(record: Partial<BiometricRecord>) : Promise<BiometricRecord>;
        verifyBiometric(recordId:string, templateHash:string) : Promise<AuthResult>;
        removeBiometric(recordId:string) : Promise<boolean>;
        listBiometrics(userId:string): Promise<BiometricRecord[]>;

        // Keys & Secrets
        createKey(key:Partial<CryptoKey>) : Promise<CryptoKey>;
        importKey(key:Partial<CryptoKey> & {material: Uint8Array | string}) : Promise<CryptoKey>;
        getKey(keyId:string) : Promise<CryptoKey | undefined>;
        rotateKey(keyId:string, opts?: Partial<CryptoKey>) : Promise<CryptoKey>;
        destroyKey(keyId:string) : Promise<boolean>;
        sealSecret(alias:string, data: Uint8Array | string, keyId?:string) : Promise<SecureSecret>;
        unsealSecret(secretId:string): Promise<Uint8Array>;

        // Attestation & device trust
        requestAttestation(deviceId:string): Promise<AttestationReport>;
        evaluateDeviceTrust(deviceId: string) : Promise<{trust:'uknown' | 'low' | 'medium' | 'high', report?:AttestationReport}>;

        // sandbox & isolation
        applySandboxPolicy(pid:number, policyId:string) : Promise<boolean>;
        createSandboxPolicy(policy:Partial<SandboxPolicy>) : Promise<SandboxPolicy>;
        getSandboxPolicy(policyId:string) : Promise<SandboxPolicy | undefined>;
        listSandboxPolicies(): Promise<SandboxPolicy[]>;

        // policy enforcement
        evaluateAccess(subject:string, resourec:string, action:string, context:Record<string, any>): Promise<EnforceDecision>;

        // Incidents & Auditing
        reportIncident(incident: Partial<Incident>): Promise<Incident>;
        listIncidents(filter?:{since: number, severity?: string[]}) : Promise<Incident[]>;
        resolveIncident(incidentId:string) : Promise<boolean>;

        // utilities
        migrateKeys(fromProvider:string, toProvider:string) : Promise<void>;

        // options events
        events?: Events;
      }

      // ------------------------------------------------------------------------
      // Events (for subscriptions)
      // ------------------------------------------------------------------------
      export type EventType =
      | 'credential.registered'
      | 'credential.revoked'
      | 'biometric.registered'
      | 'biometric.removed'
      | 'key.created'
      | 'key.destroyed'
      | 'attestation.reported'
      | 'sandbox.applied'
      | 'incident.reported'
      | 'policy.evaluated';

      export interface Events {
        on?<T extends EventType>(ev:T, listener: (...args:any[])=>void);
        onCredentialRegistered?: (c: Credential) => void;
        onCredentialRevoked?: (credentialId: string, reason?: string) => void;
        onBiometricRegistered?: (b: BiometricRecord) => void;
        onKeyCreated?: (k: CryptoKey) => void;
        onAttestation?: (r: AttestationReport) => void;
        onIncident?: (incident: Incident) => void;
        onPolicyEvaluated?: (dec: EnforceDecision) => void;
      }

      // ------------------------------------------------------------------------
      // Diagnostics / helper utils
      // ------------------------------------------------------------------------
      export interface Diagnostics {
        summarize(): Promise<{keys: CryptoKey[], providers: string[]}>;
        inspectSandbox(pid:number): Promise<{policy?: SandboxPolicy; details: Record<string, any>}>;
        interpretIncident(incident: Incident): Promise<{severity: 'low' | 'medium' | 'high' | 'critical'; suggestedActions?: string[]}>
      }
    }
  }
}
