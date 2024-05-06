import React, { useEffect } from 'react';
import Layout from '@theme-original/DocRoot/Layout';
import type LayoutType from '@theme/DocRoot/Layout';
import type { WrapperProps } from '@docusaurus/types';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import { isPlatformName, useLastPlatform } from '@site/src/contexts/lastPlatform';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  // Store current sidebar if it's a platform sidebar
  const { saveLastPlatform } = useLastPlatform();
  const sidebar = useDocsSidebar();
  useEffect(() => {
    if (sidebar && isPlatformName(sidebar.name)) {
      saveLastPlatform(sidebar.name);
    }
  }, [saveLastPlatform, sidebar?.name]);

  return <Layout {...props} />;
}
