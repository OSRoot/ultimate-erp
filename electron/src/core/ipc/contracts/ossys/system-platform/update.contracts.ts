import { EUpdateChannel, EUpdateType } from "../../../../../shared/enums/ossys.enums";

  /**
   * --------------------------------------------------------------------------
   * Updates
   * --------------------------------------------------------------------------
   */
export namespace OSsys {

  export namespace Update {

    export interface UpdateCheckPayload {
      channel             : EUpdateChannel;
      type?               : EUpdateType;
    }

    export interface UpdateInfo {
      version             : string;
      channel             : EUpdateChannel;
      type                : EUpdateType;
      url?                : string;
      notes?              : string;
      mandatory?          : boolean;
    }
  }
}
