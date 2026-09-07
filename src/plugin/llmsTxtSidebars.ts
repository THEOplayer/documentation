import type { LoadedPlugin } from '@docusaurus/types';
import type { LoadedContent, LoadedVersion } from '@docusaurus/plugin-content-docs';
import type { SidebarItem } from '@docusaurus/plugin-content-docs/lib/sidebars/types.d.ts';

/** A position of a docs page in one of the sidebars of its version. */
export interface Placement {
  sidebarId: string;
  /** Label of the top-level sidebar category that contains the page, if any. */
  category: string | undefined;
  /** Position in the sidebars, counted across all docs plugins, versions and sidebars. */
  order: number;
}

export interface DocLocation {
  version: LoadedVersion;
  /** One placement per sidebar that contains the page, in sidebar order. Empty for pages that are not in any sidebar. */
  placements: Placement[];
}

/** Maps the route path of every docs page (without base URL and trailing slash, e.g. `theoplayer/web`) to its location. */
export function locateDocs(plugins: LoadedPlugin[], baseUrl: string): Map<string, DocLocation> {
  const locations = new Map<string, DocLocation>();
  const routePath = (permalink: string) => permalink.slice(baseUrl.length).replace(/\/$/, '');
  let order = 0;
  for (const plugin of plugins) {
    if (plugin.name !== 'docusaurus-plugin-content-docs') continue;
    for (const version of (plugin.content as LoadedContent).loadedVersions) {
      const permalinks = new Map(version.docs.map((doc) => [doc.id, doc.permalink]));
      for (const doc of version.docs) {
        locations.set(routePath(doc.permalink), { version, placements: [] });
      }
      for (const [sidebarId, items] of Object.entries(version.sidebars)) {
        for (const item of items) {
          const category = item.type === 'category' ? item.label : undefined;
          for (const permalink of itemPermalinks(item, permalinks)) {
            const location = locations.get(routePath(permalink)) ?? { version, placements: [] };
            locations.set(routePath(permalink), location);
            if (location.placements.some((placement) => placement.sidebarId === sidebarId)) continue;
            location.placements.push({ sidebarId, category, order: order++ });
          }
        }
      }
    }
  }
  return locations;
}

function* itemPermalinks(item: SidebarItem, permalinks: Map<string, string>): Generator<string> {
  if (item.type === 'doc' || item.type === 'ref') {
    const permalink = permalinks.get(item.id);
    if (permalink) yield permalink;
  } else if (item.type === 'category') {
    if (item.link?.type === 'generated-index') {
      yield item.link.permalink;
    } else if (item.link?.type === 'doc') {
      const permalink = permalinks.get(item.link.id);
      if (permalink) yield permalink;
    }
    for (const child of item.items) yield* itemPermalinks(child, permalinks);
  }
}
