import React from 'react';
import DocVersionBanner from '@theme-original/DocVersionBanner';
import type { Props } from '@theme/DocVersionBanner';

export default function DocVersionBannerWrapper(props: Props) {
  return (
    <>
      <DocVersionBanner {...props} />
    </>
  );
}
