      /**
   * --------------------------------------------------------------------------
   * System Info
   * --------------------------------------------------------------------------
   */
export namespace OSsys {
  export namespace Info {

    export interface SystemInfo {
      os                  : string;
      version             : string;
      arch                : string;
      platform            : string;
      uptime              : number;
      memory              : {total: number, free: number};
      cpus                : {model: string, speed: number, cores: number}[];
    }
  }
}
