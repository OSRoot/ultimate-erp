import { extname } from "path";

/**
 * WorkspaceMetadataProps generic interface (kept here for convenience).
 * You can also move this to a separate `workspace.types.ts` file if you prefer.
 */
export interface WorkspaceMetadataProps<T = Record<string, any>> {
 customId ?: string;
 name: string;
 ownerId: string;
 createdAt: number;
 updatedAt: number;
 windows: string[];
 active: boolean;
 metadata?: T;
}

export class WorkspaceMetadata<T extends Record<string, unknown> = Record<string, unknown>> {
   private props: WorkspaceMetadataProps<T>;

   constructor(init?:Partial<WorkspaceMetadataProps<T>>) {
    this.props = {
      customId : init?.customId,
      name: init?.name ?? 'Untitled Workspace',
      ownerId: init?.ownerId ?? 'system',
      createdAt: init?.createdAt ?? Date.now(),
      updatedAt: init?.updatedAt ?? Date.now(),
      windows: init?.windows ?? [],
      active: init?.active ?? false,
      metadata: init?.metadata ? {...init.metadata as T} : {} as T,
    }
  }

  /** Create a compact ID */
  private static generateId(): string {
    return `ws-${Date.now().toString(16)}-${Math.random().toString(36).slice(2, 8)}`;
  }

  /** Return a plain-serializable object sutable for JSON serialization */
  public toJSON(): WorkspaceMetadataProps<T> {
    return {
      customId: this.props.customId,
      name: this.props.name,
      ownerId: this.props.ownerId,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
      windows: this.props.windows,
      active: this.props.active,
      metadata: this.props.metadata ? {...this.props.metadata as T} : undefined,
    }
   }

   /** Update the last-modified timestamp */
   public touch(): void { this.props.updatedAt = Date.now(); }

   /** Mark Workspace active/inactive */
   public setActive(active: boolean): void { this.props.active = active; }

   /** Window list helpers (Add Window)*/
   public addWindow(windowId:string):void {
    if (!this.props.windows.includes(windowId)) {
      this.props.windows.push(windowId);
      this.touch();
    }
   }

   /** Window list helpers (Remove Window) */
   public removeWindow(windowId:string):void {
     const before = this.props.windows.length;
     this.props.windows = this.props.windows.filter((w)=> w !== windowId);
     if (before !== this.props.windows.length) this.touch();
   }

   /** Window list helpers (Has Window) */
   public hasWindow(windowId:string):boolean { return this.props.windows.includes(windowId); }

   /** Update workspace Name */
   public updateName(name: string): void {
    if (name !== this.props.name) {
      this.props.name = name;
      this.touch();
    }
   }

   public setMetadata(meta:T):void {
    this.props.metadata = {...meta as T};
    this.touch();
  }

  public mergeMetadata(partial: Partial<T>):void {
    this.props.metadata = {...this.props.metadata, ...partial as T};
    this.touch();
  }

  public updateMetaKey<K extends keyof T> (key:K, value:T[K]):void {
    (this.props.metadata as T)[key] = value;
    this.touch();
  }

  public getMetaKey<K extends keyof T> (key:K):T[K] | undefined {
    return (this.props.metadata as T)[key];
  }


  get id ():string {
    return this.props.customId;
  }

  get data ():WorkspaceMetadataProps<T> {
    return this.toJSON()
  }

  public static fromJSON<U extends Record<string, unknown>>(json:WorkspaceMetadataProps<U>):WorkspaceMetadata<U> {
    return new WorkspaceMetadata<U>({
      customId: json.customId,
      name: json.name,
      ownerId: json.ownerId,
      createdAt: json.createdAt,
      updatedAt: json.updatedAt,
      windows: json.windows,
      active: json.active,
      metadata: json.metadata ?? ({} as U),
    });
  }


  public equals(other:WorkspaceMetadata<T>):boolean {
    return other && other.id === this.id;
  }

}
