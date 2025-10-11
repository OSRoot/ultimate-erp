import { NotificationPayload, WindowActionPayload, WindowOpenPayload } from './../electron/src/types/ipc-payloads';
export {};

declare global {
  interface Window {
    OSsys : {
      windowAction: (payload: WindowActionPayload) => Promise<void>,
      openChildWindow: (payload: WindowOpenPayload) => Promise<void>,
      showNotification: (payload: NotificationPayload) => Promise<void>,
    }
  }
}
