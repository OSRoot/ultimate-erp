export interface WindowOpenPayload {
  id: string;
  route: string;
  options?: {
    modal?: boolean;
    width?: number;
    height?: number;
  };
}

export interface NotificationPayload {
  title: string;
  body: string;
}

export interface WindowActionPayload {
  action: 'minimize' | 'maximize' | 'close' | 'toggleMaximize';
}
