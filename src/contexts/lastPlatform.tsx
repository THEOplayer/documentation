import React, { type ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { type GlobalPluginData, useActivePlugin, useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import { DEFAULT_PLUGIN_ID } from '@docusaurus/constants';
import { createStorageSlot } from '@docusaurus/theme-common';

// Heavily based on useDocsPreferredVersion()
// https://github.com/facebook/docusaurus/blob/v3.3.2/packages/docusaurus-theme-common/src/contexts/docsPreferredVersion.tsx

/**
 * The names of SDK platforms.
 *
 * These MUST match the name of the sidebar in the docs plugin.
 */
const platformNames = ['web', 'android', 'ios', 'react', 'react-native', 'chromecast', 'roku', 'flutter'] as const;
export type PlatformName = (typeof platformNames)[number];

export function isPlatformName(name: string): name is PlatformName {
  return platformNames.indexOf(name as PlatformName) !== -1;
}

const isDocsPluginEnabled: boolean = !!useAllDocsData;
const storageKey = (pluginId: string) => `docs-last-platform-${pluginId}`;

// https://github.com/facebook/docusaurus/blob/v3.3.2/packages/docusaurus-theme-common/src/utils/storageUtils.ts#L10-L12
type PersistenceType = 'localStorage' | 'sessionStorage' | 'none';
const persistence: PersistenceType = 'sessionStorage';

type LastPlatformName = PlatformName | null;

/** State for a single docs plugin instance */
type DocsLastPlatformPluginState = {
  lastPlatformName: LastPlatformName;
};

/**
 * We need to store the state in storage globally, with one last platform
 * per docs plugin instance.
 */
type DocsLastPlatformState = {
  [pluginId: string]: DocsLastPlatformPluginState;
};

/**
 * Initial state is always null as we can't read local storage from node SSR
 */
const getInitialState = (pluginIds: string[]): DocsLastPlatformState => Object.fromEntries(pluginIds.map((id) => [id, { lastPlatformName: null }]));

/**
 * Read storage for all docs plugins, assigning each doc plugin a last platform (if found)
 */
function readStorageState(pluginIds: string[], allDocsData: { [pluginId: string]: GlobalPluginData }): DocsLastPlatformState {
  /**
   * The storage value we read might be stale, and belong to a sidebar that does
   * not exist in the site anymore. In such case, we remove the storage value to
   * avoid downstream errors.
   */
  function restorePluginState(pluginId: string): DocsLastPlatformPluginState {
    const slot = createStorageSlot(storageKey(pluginId), { persistence });
    const lastPlatformUnsafe = slot.get();
    const pluginData = allDocsData[pluginId]!;
    const sidebarExists = lastPlatformUnsafe && pluginData.versions.some((version) => version.sidebars[lastPlatformUnsafe] !== undefined);
    if (sidebarExists) {
      return { lastPlatformName: lastPlatformUnsafe as PlatformName };
    }
    slot.del();
    return { lastPlatformName: null };
  }
  return Object.fromEntries(pluginIds.map((id) => [id, restorePluginState(id)]));
}

type ContextValue = [
  state: DocsLastPlatformState,
  api: {
    saveLastPlatform: (pluginId: string, lastPlatform: LastPlatformName) => void;
  },
];

const Context = React.createContext<ContextValue | null>(null);

function useContextValue(): ContextValue {
  const allDocsData = useAllDocsData();
  const pluginIds = useMemo(() => Object.keys(allDocsData), [allDocsData]);

  // Initial state is empty, as we can't read browser storage in node/SSR
  const [state, setState] = useState(() => getInitialState(pluginIds));

  // On mount, we set the state read from browser storage
  useEffect(() => {
    setState(readStorageState(pluginIds, allDocsData));
  }, [allDocsData, pluginIds]);

  // The API that we expose to consumer hooks (memo for constant object)
  const api = useMemo(() => {
    function saveLastPlatform(pluginId: string, lastPlatform: LastPlatformName) {
      createStorageSlot(storageKey(pluginId), { persistence }).set(lastPlatform);
      setState((s) => ({
        ...s,
        [pluginId]: { lastPlatformName: lastPlatform },
      }));
    }

    return {
      saveLastPlatform,
    };
  }, []);

  return [state, api];
}

function LastPlatformContextProviderUnsafe({ children }: { children: ReactNode }): JSX.Element {
  const value = useContextValue();
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

/**
 * This is a maybe-layer. If the docs plugin is not enabled, this provider is a
 * simple pass-through.
 */
export function LastPlatformContextProvider({ children }: { children: ReactNode }): JSX.Element {
  if (isDocsPluginEnabled) {
    return <LastPlatformContextProviderUnsafe>{children}</LastPlatformContextProviderUnsafe>;
  }
  return <>{children}</>;
}

function useLastPlatformContext(): ContextValue {
  const value = useContext(Context);
  if (!value) {
    throw new Error('Missing LastPlatformContextProvider');
  }
  return value;
}

export function useLastPlatform(): {
  lastPlatformName: LastPlatformName;
  saveLastPlatform: (lastPlatform: LastPlatformName) => void;
} {
  const { pluginId } = useActivePlugin();
  return useLastPlatformByPluginId(pluginId);
}

export function useLastPlatformByPluginId(pluginId: string | undefined = DEFAULT_PLUGIN_ID): {
  lastPlatformName: LastPlatformName;
  saveLastPlatform: (lastPlatform: LastPlatformName) => void;
} {
  const [state, api] = useLastPlatformContext();
  const { lastPlatformName } = state[pluginId]!;
  const saveLastPlatform = useCallback(
    (lastPlatform: LastPlatformName) => {
      api.saveLastPlatform(pluginId, lastPlatform);
    },
    [api, pluginId]
  );
  return { lastPlatformName, saveLastPlatform };
}
