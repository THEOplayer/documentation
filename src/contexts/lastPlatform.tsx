import React, { JSX, type ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { useActivePlugin, useAllDocsData } from '@docusaurus/plugin-content-docs/client';

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

export function useLastPlatformByPluginId(pluginId: string): {
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