

export namespace OSsys {
  export namespace Log {
    export type Level = 'error' | 'warn' | 'info' | 'debug';

    export interface Entry {
      timestamp           : number;
      level               : Level;
      source              : string; // module or subsystem
      message             : string;
      metadata?           : Map<string, any>;
    }
  }

}
