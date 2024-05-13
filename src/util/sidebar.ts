import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';

export type SidebarsByDocId = Record<string, string[]>;

/**
 * Retrieve a mapping from doc ID to *all* sidebars that link to that doc
 * within the current version.
 */
export function useSidebarsByDocId(docsPluginId: string): SidebarsByDocId | undefined {
  const { activeVersion } = useActiveDocContext(docsPluginId);
  // Added by custom docs plugin, see /src/plugin/contentDocs
  return (activeVersion as any)?.sidebarsByDocId;
}
