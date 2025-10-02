/**
 * OSsys.Platform Contracts
 * -----------------------------------------------------
 * Provides platform abstraction layer (PAL) for
 * cross-OS compatibility and standardized environment info.
 */
export namespace OSsys {
  export namespace Platform {
    export type OS = 'windows' | 'macos' | 'linux' | 'unknown';
    export interface Info {
      os:OS;
      release: string;
      arch:string;
      kernal:string;
      distro?:string;
    }

    export interface PathMapping {
      tempDir: string;
      homeDir: string;
      appDataDir: string;
      desktopDir: string;
    }

    export interface Env {
      key: string;
      value: string;
    }


  }
}
