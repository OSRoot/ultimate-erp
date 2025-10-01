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

}
