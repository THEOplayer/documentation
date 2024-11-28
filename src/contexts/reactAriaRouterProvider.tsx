import { RouterProvider } from 'react-aria-components';
import { useHistory } from '@docusaurus/router';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import type { ReactNode } from 'react';
import { PlatformName } from '@site/src/util/platform';
import { useLastPlatformByPluginId } from '@site/src/contexts/lastPlatform';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';

/**
 * Options for <Link> components in React Aria.
 */
export interface ReactAriaRouterOptions {
  /**
   * If set, sets the current platform (using {@link useLastPlatform}) when clicked.
   */
  platform?: PlatformName;
}

// https://react-spectrum.adobe.com/react-aria/routing.html#router-options
declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: ReactAriaRouterOptions;
  }
}

function ReactAriaRouterProviderImpl({
  saveLastPlatform,
  children,
}: {
  saveLastPlatform?: (lastPlatform: PlatformName) => void;
  children: ReactNode;
}) {
  const history = useHistory();
  const { withBaseUrl } = useBaseUrlUtils();
  const navigate = (href: string, routerOptions: ReactAriaRouterOptions | undefined) => {
    if (routerOptions?.platform) {
      saveLastPlatform?.(routerOptions.platform);
    }
    history.push(href);
  };
  return (
    <RouterProvider navigate={navigate} useHref={withBaseUrl}>
      {children}
    </RouterProvider>
  );
}

function ReactAriaRouterProviderWithDoc({ pluginId, children }: { pluginId: string; children: ReactNode }) {
  const { saveLastPlatform } = useLastPlatformByPluginId(pluginId);
  return <ReactAriaRouterProviderImpl saveLastPlatform={saveLastPlatform}>{children}</ReactAriaRouterProviderImpl>;
}

function ReactAriaRouterProviderWithoutDoc({ children }: { children: ReactNode }) {
  return <ReactAriaRouterProviderImpl saveLastPlatform={undefined}>{children}</ReactAriaRouterProviderImpl>;
}

/**
 * Configures client-side routing for React Aria's <Link> component.
 *
 * @see https://react-spectrum.adobe.com/react-aria/routing.html
 */
export default function ReactAriaRouterProvider({ children }: { children: ReactNode }) {
  const pluginId = useActivePlugin()?.pluginId;
  if (pluginId) {
    return <ReactAriaRouterProviderWithDoc pluginId={pluginId}>{children}</ReactAriaRouterProviderWithDoc>;
  } else {
    return <ReactAriaRouterProviderWithoutDoc>{children}</ReactAriaRouterProviderWithoutDoc>;
  }
}
