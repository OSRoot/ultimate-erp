export enum EUserRoles {
  MONARCH = 'monarch',
  ADMIN = 'admin',
  MANAGER = 'manager',
  EMPLOYEE = 'employee',
  CLIENT = 'client',
  USER = 'user',
  GUEST = 'guest',
}

export enum PowerAction {
  SHUTDOWN = 'shutdown',
  RESTART = 'restart',
  SLEEP = 'sleep',
  LOCK = 'lock',
}


export enum EUpdateChannel {
  STABLE = 'stable',
  BETA = 'beta',
  DEV = 'dev',
}

export enum EUpdateType {
  PATCH = 'patch',
  MINOR = 'minor',
  MAJOR = 'major',
}
