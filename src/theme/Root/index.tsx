import React, { type ReactNode } from 'react';
import { LastPlatformContextProvider } from '@site/src/contexts/lastPlatform';

export default function Root({ children }: { children: ReactNode }) {
  return <LastPlatformContextProvider>{children}</LastPlatformContextProvider>;
}
