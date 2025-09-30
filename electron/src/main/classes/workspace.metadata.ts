/**
 * Workspace metadata props
 */
export interface WorkspaceMetadataProps {
  customId?: string;
  name?: string;
  ownerId?: string;
  createdAt?: number;
  updatedAt?: number;
  windows?: string[];
  metadata?: Record<string, any>;
  active?: boolean;
}
