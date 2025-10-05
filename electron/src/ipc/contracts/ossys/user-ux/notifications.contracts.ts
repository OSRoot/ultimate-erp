import { NotificationLevel } from "../../../../shared/ipc.enums";

      /**
       * --------------------------------------------------------------------------
       * Notifications
       * --------------------------------------------------------------------------
       */
export namespace OSsys {
  export namespace Notifications {

      export interface SystemNotificationPayload {
        title               : string;
        body                : string;
        level?              : NotificationLevel;
        icon?               : string;
        timeout?            : number;
        silent?             : boolean;
        timestamp?          : number;
        parentId?           : string;
        winId?              : string;
      }
  }
}
