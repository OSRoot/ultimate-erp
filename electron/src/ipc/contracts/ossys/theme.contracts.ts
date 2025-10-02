
export namespace OSsys {
  export namespace Theme {
    export type Type = 'light' | 'dark' | 'system' | 'custom';
    export interface Config {
      id                  : string;
      name                : string;
      type                : Type;
      wallpaper?           : string;
      accentColor?        : string;
      fontFamily?         : string;
    }
  }
}
