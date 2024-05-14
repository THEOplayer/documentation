import { RouterProvider } from 'react-aria-components';
import { useHistory } from '@docusaurus/router';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import type { ReactNode } from 'react';
import { PlatformName } from '@site/src/util/platform';
import { useLastPlatform } from '@site/src/contexts/lastPlatform';

/**
 * Options for <Link> components in React Aria.
 */
export interface ReactAriaRouterOptions {
  /**
   * If set, sets the current platform (using {@link useLastPlatform}) when clicked.
   */
  platform?: PlatformName;
}

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: ReactAriaRouterOptions;
  }
}

/**
 * Configures client-side routing for React Aria's <Link> component.
 *
 * @see https://react-spectrum.adobe.com/react-aria/routing.html
 */
export default function ReactAriaRouterProvider({ children }: { children: ReactNode }) {
  const history = useHistory();
  const { withBaseUrl } = useBaseUrlUtils();
  const { saveLastPlatform } = useLastPlatform();
  const navigate = (href: string, routerOptions: ReactAriaRouterOptions | undefined) => {
    if (routerOptions?.platform) {
      saveLastPlatform(routerOptions.platform);
    }
    history.push(href);
  };
  return <RouterProvider navigate={navigate} useHref={withBaseUrl} children={children} />;
}
