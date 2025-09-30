
/**
 * Window states
 * `active`, `hidden`, `closed`
 */
export enum WindowState {
  ACTIVE = 'active',
  HIDDEN = 'hidden',
  CLOSED = 'closed',
}
/**
 * Window types
 * `main`, `child`, `popup`, `modal`
 */
export enum WindowType {
  MAIN = 'main',
  CHILD = 'child',
  POPUP = 'popup',
  MODAL = 'modal',
}

/**
 * @enum WindowAction
 * @description Standardized window actions for all OS windows
 * `minimize`, `maximize`, `restore`, `close`, `toggleFullscreen`
 */
export enum WindowAction {
  MINIMIZE = 'minimize',
  MAXIMIZE = 'maximize',
  RESTORE = 'restore',
  CLOSE = 'close',
  TOGGLE_FULLSCREEN = 'toggleFullscreen', // optional
}

/**
 * Notification levels
 * `info`, `success`, `warning`, `error`
 */
export enum NotificationLevel {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}
