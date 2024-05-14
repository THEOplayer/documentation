import React, { JSX, type ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { useActiveDocContext, useActivePlugin, useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import { getPlatformByName, isDocSharedWithPlatform, isPlatformName, PlatformName } from '../util/platform';
import { useDocsVersionCandidates } from '@docusaurus/theme-common/internal';
import { findSidebarInVersions } from '@site/src/util/sidebar';
import { defaultPlatformName } from '@site/src/util/platform';

// Heavily based on useDocsPreferredVersion()
// https://github.com/facebook/docusaurus/blob/v3.3.2/packages/docusaurus-theme-common/src/contexts/docsPreferredVersion.tsx

const isDocsPluginEnabled: boolean = !!useAllDocsData;

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
function getInitialState(pluginIds: string[]): DocsLastPlatformState {
  return Object.fromEntries(pluginIds.map((id) => [id, { lastPlatformName: null }]));
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

  // The API that we expose to consumer hooks (memo for constant object)
  const api = useMemo(() => {
    function saveLastPlatform(pluginId: string, lastPlatform: LastPlatformName) {
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
  const [state, api] = value;

  // Update last platform using current doc (if needed)
  const pluginId = useActivePlugin()?.pluginId || 'theoplayer';
  const { activeDoc } = useActiveDocContext(pluginId);
  const docSidebarName = activeDoc?.sidebar;
  const lastPlatformName = state[pluginId].lastPlatformName;
  if (activeDoc && (!lastPlatformName || lastPlatformName !== docSidebarName)) {
    if (isDocSharedWithPlatform(pluginId, activeDoc.id, lastPlatformName || defaultPlatformName)) {
      if (lastPlatformName) {
        // Prefer last platform for cross-platform docs
      } else {
        // No last platform yet, so update to default platform
        api.saveLastPlatform(pluginId, defaultPlatformName);
      }
    } else if (docSidebarName && isPlatformName(docSidebarName)) {
      // Doc belongs to a different platform, so update our last platform
      api.saveLastPlatform(pluginId, docSidebarName);
    }
  }

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
  const { pluginId } = useActivePlugin({ failfast: true });
  return useLastPlatformByPluginId(pluginId);
}

export function useLastPlatformByPluginId(pluginId: string): {
  lastPlatformName: LastPlatformName;
  saveLastPlatform: (lastPlatform: LastPlatformName) => void;
} {
  const [state, api] = useLastPlatformContext();
  const lastPlatformName = state[pluginId]!.lastPlatformName || defaultPlatformName;
  const saveLastPlatform = useCallback(
    (lastPlatform: LastPlatformName) => {
      api.saveLastPlatform(pluginId, lastPlatform);
    },
    [api, pluginId]
  );
  return { lastPlatformName, saveLastPlatform };
}

export function useLastPlatformMainLink(pluginId: string): string | null {
  const [state, api] = useLastPlatformContext();
  const versionCandidates = useDocsVersionCandidates(pluginId);
  let platformName = state[pluginId]!.lastPlatformName;

  // Try to use the same platform as the active plugin.
  // For example, when browsing the THEOplayer Android SDK docs,
  // the Open Video UI navbar link should point to Open Video UI for Android.
  const activePluginId = useActivePlugin()?.pluginId;
  if (activePluginId !== undefined && activePluginId !== pluginId) {
    const activePlatformName = state[activePluginId]!.lastPlatformName;
    if (activePlatformName && getPlatformByName(pluginId, activePlatformName)) {
      platformName = activePlatformName;
    }
  }

  if (!platformName) {
    // Ignore for SSR
    return null;
  }

  const sidebar = findSidebarInVersions(platformName, versionCandidates);
  return sidebar.link.path;
}
