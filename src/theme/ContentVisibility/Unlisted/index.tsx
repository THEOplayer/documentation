import React, { type ReactNode } from 'react';
import Unlisted from '@theme-original/ContentVisibility/Unlisted';
import type UnlistedType from '@theme/ContentVisibility/Unlisted';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof UnlistedType>;

export default function UnlistedWrapper(props: Props): ReactNode {
  if (process.env.NODE_ENV === 'production') {
    // Hide unlisted banner in production
    return null;
  }
  return <Unlisted {...props} />;
}
