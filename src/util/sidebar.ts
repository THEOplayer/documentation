import type { GlobalSidebar, GlobalVersion } from '@docusaurus/plugin-content-docs/client';

export function findSidebarInVersions(sidebarName: string, versionCandidates: GlobalVersion[]): GlobalSidebar | undefined {
  for (const version of versionCandidates) {
    const sidebar = version.sidebars?.[sidebarName];
    if (sidebar) {
      return sidebar;
    }
  }
}
