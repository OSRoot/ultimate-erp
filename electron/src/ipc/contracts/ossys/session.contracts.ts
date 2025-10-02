import { EUserRoles } from "../../../shared/ossys.enums";
     /**
       * --------------------------------------------------------------------------
       * Session & User
       * --------------------------------------------------------------------------
       */
export namespace OSsys {
  export namespace Session {

      export interface SessionStartPayload {
        userId              : string;
        token               : string;
        roles?              : EUserRoles[];
        metadata?           : Map<string, any>;
      }

      export interface SessionEndPayload {
        userId              : string;
        active              : boolean;
        startedAt           : number;
        roles               : EUserRoles[];
        metadata?           : Map<string, any>;
      }

  }
}
