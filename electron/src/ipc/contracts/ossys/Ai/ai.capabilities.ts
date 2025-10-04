
declare global {

  export namespace OsAI  {
      /**
 * --------------------------------------------------------------------------
 * #### OsAI.Capabilities (Global)
 * --------------------------------------------------------------------------
 * Defines high-level AI abilities and target types it can operate on.
 */
    export namespace Capabilities {
      export type TargetType =
          | 'device'
          | 'process'
          | 'network'
          | 'workspace'
          | 'window'
          | 'filesystem'
          | 'user'
          | 'security'
          | 'system'
          | 'application'
          | 'ui'
          | 'other';

          export type ModuleType =
          | 'analysis'
          | 'optimization'
          | 'automation'
          | 'voice'
          | 'vision'
          | 'scripting'
          | 'monitoring'
          | 'training'
          | 'policy'
          | 'assistant'
          | 'integration';
    }
  }
}

export {};
