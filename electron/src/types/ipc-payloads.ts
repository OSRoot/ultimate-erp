export interface WindowOpenPayload {
  id: string;
  route: string;
  options?: {
    modal?: boolean;
    width?: number;
    height?: number;
  };
  query?: string;
  hash?: string;
  parentId?: string;
}

export interface NotificationPayload {
  title: string;
  body: string;
  icon?: string;
  parentId?: string;
  winId?: string;
}

export interface WindowActionPayload {
  action: 'minimize' | 'maximize' | 'close' | 'toggleMaximize';
  winId?:string;
}
