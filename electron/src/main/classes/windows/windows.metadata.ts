// electron/src/classes/windows.metadata.ts

import { Rectangle } from "electron";
import { WindowState, WindowType } from "../../../shared/enums/ipc.enums";


/******************************************************************************************************
 * @description Metadata for a window instance
 * @export
*/
export interface WindowMetadataProps {
  customId?           : string; // app-specific id
  workspaceId?        : string;
  route?              : string;
  type?               : WindowType;
  createdAt?          : number;
  state?              : WindowState;
  lastFocus?          : number;
  bounds?             : Rectangle; //presisted size/position
  maximized?          : boolean;
  fullscreen?         : boolean;
}

/*****************************************************************************************************
 * @class `WindowMetaData`
 * @description `Stateful window metadata class, persisted to disk, and shared between renderer and main process`
*/
export class WindowMetaData {
/******************************************************************************************************/
  private props : WindowMetadataProps;

/******************************************************************************************************/
  constructor (init: WindowMetadataProps){
    this.props = {
      createdAt: Date.now(),
      state:WindowState.ACTIVE,
      lastFocus: Date.now(),
      ...init,
    }
  }

/*****************************************************************************************************
 * @description Serialize window metadata to plain JSON object
 * @returns WindowMetadata
*/
  public toJSON(): WindowMetadataProps { return this.props; }

/*****************************************************************************************************
 * @description Update focus timestamp
*/
  public touch():void { this.props.lastFocus = Date.now(); this.props.state = WindowState.ACTIVE; }
/*****************************************************************************************************
 * @description Update bounds (persisted size/position)
*/
  public updateBounds(bounds:Rectangle):void { this.props.bounds = bounds; }

/*****************************************************************************************************
 * @description Update window state
*/
  public setState(state:WindowState):void { this.props.state = state; }

  // getters
  get id():string {return this.props.customId || '';}
  get route():string {return this.props.route || '';}
  get data():WindowMetadataProps {return this.props || {}}

}
