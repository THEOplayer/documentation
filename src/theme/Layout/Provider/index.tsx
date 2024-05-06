import React, { JSX } from 'react';
import Provider from '@theme-original/Layout/Provider';
import type ProviderType from '@theme/Layout/Provider';
import type { WrapperProps } from '@docusaurus/types';
import { LastPlatformContextProvider } from '@site/src/contexts/lastPlatform';

type Props = WrapperProps<typeof ProviderType>;

export default function ProviderWrapper(props: Props): JSX.Element {
  return (
    <LastPlatformContextProvider>
      <Provider {...props} />
    </LastPlatformContextProvider>
  );
}
