
  /**
   * --------------------------------------------------------------------------
   * Networking
   * --------------------------------------------------------------------------
   */

export namespace OSsys {

  export namespace Network {
    export type Type = 'wifi' | 'ethernet' | 'bluetooth' | 'cellular' | 'loopback' | 'other' | 'vpn';
    export type Status = 'up' | 'down' | 'connected' | 'connecting' | 'disconnected' | 'disconnecting' | 'disabled' | 'unknown';
    export interface NIC {
      id                  : string;
      name                : string;
      type                : Type;
      status              : Status;
      ip                  : string;
      mac                 : string;
      speed?              : number;
      duplex?             : number;
      rx?                 : number;
      tx?                 : number;
      netmask?            : string;
      gateway?            : string;
      dns?                : string[];
      dns6?               : string[];
      dnsSuffixes?        : string[];
    }

    export interface Stats {
      nicId               : string;
      rxBytes             : number;
      txBytes             : number;
      rxPackets           : number;
      txPackets           : number;
      rxErrors            : number;
      txErrors            : number;
      rxDropped           : number;
      txDropped           : number;
      timestamp           : number;
    }
  }

}
