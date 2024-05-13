import type { LoadedContent, Options, PluginOptions } from '@docusaurus/plugin-content-docs';
import basePlugin, { validateOptions } from '@docusaurus/plugin-content-docs';
import type { Sidebar, SidebarItem, Sidebars } from '@docusaurus/plugin-content-docs/lib/sidebars/types';
import type { GlobalPluginData } from '@docusaurus/plugin-content-docs/client';
import type { SidebarsByDocId } from '../../util/sidebar';
import type { LoadContext, Plugin, PluginContentLoadedActions } from '@docusaurus/types';

function wrapContentLoadedActions(actions: PluginContentLoadedActions): { actions: PluginContentLoadedActions; getGlobalData(): unknown } {
  let globalData: unknown;
  return {
    actions: {
      ...actions,
      setGlobalData(data) {
        globalData = data;
      },
    },
    getGlobalData: () => globalData,
  };
}

export default async function pluginContentDocs(context: LoadContext, options: PluginOptions): Promise<Plugin<LoadedContent>> {
  const plugin = await basePlugin(context, options);
  return {
    ...plugin,
    async contentLoaded({ content, actions }) {
      const wrappedActions = wrapContentLoadedActions(actions);
      await plugin.contentLoaded({ content, actions: wrappedActions.actions });
      const globalData = wrappedActions.getGlobalData() as GlobalPluginData;

      const oldVersions = globalData.versions;
      const loadedVersions = content.loadedVersions;
      const versions = oldVersions.map((version, index) => ({
        ...version,
        sidebarsByDocId: collectSidebarsByDocIds(loadedVersions[index].sidebars),
      }));

      actions.setGlobalData({
        ...globalData,
        versions,
      });
    },
  };
}

export type { Options, PluginOptions };
export { validateOptions };

function collectDocIdsForSidebar(sidebarName: string, sidebar: Sidebar, result: SidebarsByDocId): void {
  function collectRecursive(item: SidebarItem): void {
    if (item.type === 'category') {
      if (item.link) {
        collectRecursive(item.link);
      }
      item.items.forEach(collectRecursive);
    } else if (item.type === 'doc') {
      const docSidebars = (result[item.id] ??= []);
      if (!docSidebars.includes(sidebarName)) {
        docSidebars.push(sidebarName);
      }
    }
  }
  sidebar.forEach(collectRecursive);
}

function collectSidebarsByDocIds(sidebars: Sidebars): SidebarsByDocId {
  const result: SidebarsByDocId = {};
  for (const [sidebarName, items] of Object.entries(sidebars)) {
    collectDocIdsForSidebar(sidebarName, items, result);
  }
  return result;
}
