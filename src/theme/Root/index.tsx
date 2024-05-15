import React, { type ReactNode } from 'react';
import { LastPlatformContextProvider } from '@site/src/contexts/lastPlatform';
import ReactAriaRouterProvider from '@site/src/contexts/reactAriaRouterProvider';

export default function Root({ children }: { children: ReactNode }) {
  return (
    <LastPlatformContextProvider>
      <ReactAriaRouterProvider>{children}</ReactAriaRouterProvider>
    </LastPlatformContextProvider>
  );
}
