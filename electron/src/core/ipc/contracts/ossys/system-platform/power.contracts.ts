  /**
   * --------------------------------------------------------------------------
   * Power Management
   * --------------------------------------------------------------------------
   */

export namespace OSsys {
  export namespace Power {
    export type PowerAction = 'shutdown' | 'restart' | 'sleep' | 'lock';
    export interface PowerActionPayload {
      action              : PowerAction;
      force?              : boolean;
    }
  }

}
