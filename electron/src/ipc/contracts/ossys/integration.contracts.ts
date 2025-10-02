/**
 * OSsys.Integration Contracts
 * -----------------------------------------------------
 * Provides abstraction for external APIs,
 * plugins, and service integrations.
 */
export namespace OSsys {
  export namespace Integration {
    export namespace API {
      export type METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE';
      export interface Request {
        provider: string;
        endpoint: string;
        method: METHOD;
        headers?: Record<string, string>;
        body?: any;
      }

      export interface Response{
        status:number;
        headers?: Record<string, string>;
        body?: any;
        error?: string;
      }
    }
  }
}
