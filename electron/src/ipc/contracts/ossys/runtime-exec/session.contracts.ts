export {};

/**
 * --------------------------------------------------------------------------
 * #### OSsys.Session Contracts (Global)
 * --------------------------------------------------------------------------
 * Comprehensive session & authentication contracts.
 * Handles session lifecycle, tokens, policies, MFA, auditing, device binding,
 * delegation/impersonation, and AI context scoping.
 *
 * #### Canonical surface for session management across OSsys runtime,
 * workspaces, and AI layers.
 * --------------------------------------------------------------------------
 */

export namespace OSsys {
  export namespace Session {
    // ------------------------------------------------------------------------
    // Core enums / unions
    // ------------------------------------------------------------------------
    export type Type =
      | 'interactive'   // user desktop session (GUI)
      | 'api'           // programmatic / API token session
      | 'service'       // background service / daemon
      | 'system'        // kernel/system reserved
      | 'guest'         // ephemeral guest session
      | 'delegated';    // admin-delegated / impersonation

    export type State =
      | 'init'          // created but not active yet
      | 'active'
      | 'idle'
      | 'locked'        // user locked screen / session
      | 'suspended'
      | 'expired'
      | 'revoked'
      | 'terminated';

    export type AuthMethod =
      | 'password'
      | 'passkey'
      | 'totp'
      | 'webauthn'
      | 'biometric'
      | 'oauth'
      | 'saml'
      | 'openid'
      | 'api-key';

    export type MFARequirement = 'required' | 'optional' | 'disabled';
    export type TokenFormat = 'jwt' | 'opaque' | 'raw' | 'mac' | 'custom';

    export type RevocationReason =
      | 'user_logout'
      | 'admin_revoke'
      | 'policy_violation'
      | 'expired'
      | 'credential_rotation'
      | 'compromised'
      | 'other';

    // ------------------------------------------------------------------------
    // Token set (access + refresh + optional derived tokens)
    // ------------------------------------------------------------------------
    export interface TokenSet {
      accessToken: string;
      refreshToken?: string;
      idToken?: string;
      tokenType?: string;
      format?: TokenFormat;
      expiresAt?: number;
      issuedAt?: number;
      scopes?: string[];
      metadata?: Record<string, any>;
    }

    // ------------------------------------------------------------------------
    // Session Info (persistent runtime snapshot)
    // ------------------------------------------------------------------------
    export interface Info {
      sessionId       : string;
      userId?         : string;
      type            : Type;
      state           : State;
      createdAt       : number;
      lastActivityAt? : number;
      expiresAt?      : number;
      maxIdlTimeoutMs?: number;

      // authentication details
      authMethod?     : AuthMethod;
      mfa?:{
        required: MFARequirement;
        lastVerifiedAt?: number;
        methods?: AuthMethod[];
      };

      // token / credential linkage
      token?          : TokenSet;
      boundDeviceId?  : string;
      boundIP?        : string;
      originSessionId?: string;     // 🔧 session derived from another (e.g., impersonation)
      groupId?        : string;     // 🔧 cluster related sessions (e.g., same SSO chain)
      clientInfo?:{
        agent?: string;
        platform?: string;
        locale?: string;
        screen?: { width: number; height: number };
      };

      // session scope & privileges
      roles?: string[];
      privileges?: string[];
      workspaceId?: string;
      allowedWorkspaces?: string[];

      // security / policy
      isEphemeral?: boolean;
      deviceTrustLevel?: 'unknown' | 'low' | 'medium' | 'high';
      isMachineAuthenticated?: boolean;
      lastCredentialRotationAt?: number;

      // AI context scoping
      aiContext?: OsAI.Context;
      aiAwarenessLevel?: OsAI.AwarenessLevel;
      aiPersonaId?: string; // 🔧 link to AI persona identity

      // administrative / audit
      createdBy?: string;
      origin?: {
        host?: string;
        region?: string;
      };

      // metadata
      metadata?: Record<string, any>;
      tags?: string[];

      // last termination info (if ended)
      lastExit?: {
        at?: number;
        reason?: RevocationReason | string; // ✅ fixed typo
        details?: Record<string, any>;
      };
    }

    // ------------------------------------------------------------------------
    // Create / Start / Resume Payloads
    // ------------------------------------------------------------------------
    export interface CreatePayload {
      userId?: string;
      type?: Type;
      authMethod?: AuthMethod;
      requestedScopes?: string[];
      workspaceId?: string;
      clientInfo?: TokenSet['metadata'] & { agent?: string; platform?: string };
      isEphemeral?: boolean;
      deviceId?: string;
      mfaToken?: string;
      initialMetadata?: Record<string, any>;
    }

    export interface ResumePayload {
      sessionId: string;
      refreshToken?: string;
      clientFingerprint?: string;
      workspaceId?: string;
    }

    export interface RefreshPayload {
      sessionId: string;
      refreshToken: string;
    }

    export interface EndPayload {
      sessionId: string;
      reason?: RevocationReason | string;
      force?: boolean;
    }

    export interface ValidatePayload {
      sessionId?: string;
      accessToken?: string;
      requiredScopes?: string[];
      requireActive?: boolean;
      requireWorkspaceId?: string;
    }

    // ------------------------------------------------------------------------
    // Session Policy & Configuration
    // ------------------------------------------------------------------------
    export interface Policy {
      policyId: string;
      maxSessionDurationMs?: number;
      maxIdleTimeoutMs?: number;
      maxConcurrentSessionsPerUser?: number;
      requireMFA?: MFARequirement;
      allowedAuthMethods?: AuthMethod[];
      allowedDeviceBinding?: boolean;
      allowImpersonation?: boolean;
      geoRestrictions?: {
        enabled: boolean;
        allowedRegions?: string[];
      };
      ipWhitelist?: string[];
      ipBlacklist?: string[];
      revokeOnPasswordChange?: boolean;
      sessionStorage?: 'memory' | 'disk' | 'secure-store';
      defaultRole?: string;          // 🔧 new: default role
      defaultPrivileges?: string[];  // 🔧 new: default privileges
      metadata?: Record<string, any>;
    }

    // ------------------------------------------------------------------------
    // Audit / Log Entry
    // ------------------------------------------------------------------------
    export interface AuditEntry {
      id: string;
      sessionId?: string;
      userId?: string;
      type:
        | 'session.create'
        | 'session.refresh'
        | 'session.end'
        | 'session.impersonate'
        | 'session.elevate'
        | 'session.error'
        | 'session.suspend'
        | string;
      timestamp: number;
      actor?: string;
      message?: string;
      details?: Record<string, any>;
      ip?: string;
      clientAgent?: string;
      severity?: 'info' | 'warn' | 'error' | 'audit';
    }

    // ------------------------------------------------------------------------
    // Telemetry / Metrics
    // ------------------------------------------------------------------------
    export interface Telemetry {
      sessionId: string;
      userId?: string;
      startedAt: number;
      lastActivityAt?: number;
      totalActivityEvents?: number;
      networkBytesIn?: number;
      networkBytesOut?: number;
      requestsHandled?: number;
      errorCount?: number;
      uptimeMs?: number;        // 🔧 added
      lastErrorAt?: number;     // 🔧 added
      metadata?: Record<string, any>;
    }

    // ------------------------------------------------------------------------
    // Impersonation & Delegation Payloads
    // ------------------------------------------------------------------------
    export interface ImpersonatePayload {
      adminUserId: string;
      targetUserId: string;
      reason?: string;
      durationMs?: number;
      workspaceId?: string;
      metadata?: Record<string, any>;
      requireApproval?: boolean;
    }

    export interface DelegationPayload {
      delegatorId: string;
      delegateeId: string;
      allowedScopes?: string[];
      expiresAt?: number;
      metadata?: Record<string, any>;
    }

    // ------------------------------------------------------------------------
    // Device Binding / Verification
    // ------------------------------------------------------------------------
    export interface DeviceBinding {
      deviceId: string;
      sessionId: string;
      boundAt: number;
      lastSeenAt?: number;
      trustLevel?: 'low' | 'medium' | 'high';
      metadata?: Record<string, any>;
    }

    // ------------------------------------------------------------------------
    // Session Controller Surface
    // ------------------------------------------------------------------------
    export interface Controller {
      create(payload: CreatePayload, policy?: Policy): Promise<Info>;
      resume(payload: ResumePayload): Promise<Info>;
      refresh(payload: RefreshPayload): Promise<TokenSet>;
      end(payload: EndPayload): Promise<boolean>;
      validate(payload: ValidatePayload): Promise<{ valid: boolean; info?: Info; reason?: string }>;
      list(userId?: string): Promise<Info[]>;
      get(sessionId: string): Promise<Info | undefined>;

      // policy management
      getPolicy(userId?: string): Promise<Policy | undefined>;
      updatePolicy(policyId: string, patch: Partial<Policy>): Promise<Policy>;

      // audit management
      audit(entry: AuditEntry): Promise<void>;
      listAudit(sessionId?: string, userId?: string): Promise<AuditEntry[]>;

      // Device binding
      bindDevice(payload: DeviceBinding): Promise<void>;
      unbindDevice(deviceId: string, sessionId?: string): Promise<void>;

      // impersonation & delegation
      impersonate(payload: ImpersonatePayload): Promise<Info>;
      delegate(payload: DelegationPayload): Promise<boolean>;

      // utilities
      telemetry(sessionId: string): Promise<Telemetry>;
      revokeSession(sessionId: string): Promise<void>;
      revokeAllForUser(userId: string, reason?: RevocationReason | string): Promise<number>;

      // optional hooks for event subscription
      events?: Events;
    }

    // ------------------------------------------------------------------------
    // Events (hooks & emitters)
    // ------------------------------------------------------------------------
    export type EventType =
      | 'created'
      | 'resumed'
      | 'refreshed'
      | 'ended'
      | 'revoked'
      | 'impersonated'
      | 'delegated'
      | 'policy.updated'
      | 'device.bound'
      | 'device.unbound'
      | 'mfa.challenge'
      | 'error';

    export interface Events {
      on?<T extends EventType>(event: T, listener: (...args: any[]) => void): void;

      onCreated?: (payload: Info) => void;
      onResumed?: (payload: Info) => void;
      onRefreshed?: (sessionId: string, payload: TokenSet) => void;
      onEnded?: (sessionId: string, reason?: RevocationReason | string) => void;
      onRevoked?: (sessionId: string, reason?: RevocationReason | string) => void;
      onImpersonated?: (info: Info, byUserId: string) => void;
      onDelegated?: (delegation: DelegationPayload) => void;
      onPolicyUpdated?: (policy: Policy) => void;
      onDeviceBound?: (binding: DeviceBinding) => void;
      onDeviceUnbound?: (deviceId: string, sessionId?: string) => void;
      onMFAChallenge?: (sessionId: string, challenge: Record<string, any>) => void;
      onError?: (sessionId?: string, error?: Error) => void;
    }

    // ------------------------------------------------------------------------
    // Diagnostics
    // ------------------------------------------------------------------------
    export interface Summary {
      info?: Info;
      telemetry?: Telemetry;
      recentAudit?: AuditEntry[];
      activeBindings?: DeviceBinding[];
    }

    export interface InterpretedExit {
      severity: 'info' | 'warn' | 'critical';
      suggestedAction?: string;
      notes?: string;
    }

    export interface Diagnostics {
      summarize(sessionId: string): Promise<Summary>;
      interpretExit(info: Info): Promise<InterpretedExit>;
    }

    // ------------------------------------------------------------------------
    // Lightweight client-side session view (for UI / renderer)
    // ------------------------------------------------------------------------
    export interface ClientView {
      sessionId: string;
      userId?: string;
      type: Type;
      state: State;
      expiresAt?: number;
      lastActivityAt?: number;
      roles?: string[];
      workspaceId?: string;
      clientInfo?: { agent?: string; platform?: string; locale?: string };
    }
  }
}
