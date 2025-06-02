import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useActiveDocContext, useActivePlugin, useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client';
import type { PropSidebarBreadcrumbsItem, PropSidebarItemLink } from '@docusaurus/plugin-content-docs/lib/sidebars/types.js';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useHomePageRoute } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import HomeBreadcrumbItem from '@theme/DocBreadcrumbs/Items/Home';
import DocBreadcrumbsStructuredData from '@theme/DocBreadcrumbs/StructuredData';

import styles from './styles.module.css';

// TODO move to design system folder
function BreadcrumbsItemLink({ children, href, isLast }: { children: ReactNode; href: string | undefined; isLast: boolean }): ReactNode {
  const className = 'breadcrumbs__link';
  if (isLast) {
    return <span className={className}>{children}</span>;
  }
  return href ? (
    <Link className={className} href={href}>
      <span>{children}</span>
    </Link>
  ) : (
    <span className={className}>{children}</span>
  );
}

// TODO move to design system folder
function BreadcrumbsItem({ children, active }: { children: ReactNode; active?: boolean }): ReactNode {
  return (
    <li
      className={clsx('breadcrumbs__item', {
        'breadcrumbs__item--active': active,
      })}
    >
      {children}
    </li>
  );
}

function getMainDocTitle(docPluginId: string): string | null {
  switch (docPluginId) {
    case 'theoplayer':
      return 'Player';
    case 'open-video-ui':
      return 'Open Video UI';
    case 'theoads':
      return 'Ads';
    case 'theolive':
      return 'Live Streaming';
    case 'millicast':
      return 'Real-time Streaming';
  }
}

function useSidebarBreadcrumbsWithMainDoc(): PropSidebarBreadcrumbsItem[] | null {
  const breadcrumbs = useSidebarBreadcrumbs();
  const { pluginId } = useActivePlugin({ failfast: true })!;
  const { activeVersion, activeDoc } = useActiveDocContext(pluginId);
  const versionMainDoc = activeVersion.docs.find((doc) => doc.id === activeVersion.mainDocId)!;
  const mainDocUrl = useBaseUrl(versionMainDoc.path);
  const mainDocTitle = getMainDocTitle(pluginId);
  if (!breadcrumbs || !mainDocTitle) {
    return breadcrumbs;
  }
  const mainDocItem: PropSidebarItemLink = {
    type: 'link',
    href: activeDoc.id === activeVersion.mainDocId ? undefined : mainDocUrl,
    label: mainDocTitle,
    docId: versionMainDoc.id,
  };
  return [mainDocItem, ...breadcrumbs];
}

export default function DocBreadcrumbs(): ReactNode {
  const breadcrumbs = useSidebarBreadcrumbsWithMainDoc();
  const homePageRoute = useHomePageRoute();

  if (!breadcrumbs) {
    return null;
  }

  return (
    <>
      <DocBreadcrumbsStructuredData breadcrumbs={breadcrumbs} />
      <nav
        className={clsx(ThemeClassNames.docs.docBreadcrumbs, styles.breadcrumbsContainer)}
        aria-label={translate({
          id: 'theme.docs.breadcrumbs.navAriaLabel',
          message: 'Breadcrumbs',
          description: 'The ARIA label for the breadcrumbs',
        })}
      >
        <ul className="breadcrumbs">
          {homePageRoute && <HomeBreadcrumbItem />}
          {breadcrumbs.map((item, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            const href = item.type === 'category' && item.linkUnlisted ? undefined : item.href;
            return (
              <BreadcrumbsItem key={idx} active={isLast}>
                <BreadcrumbsItemLink href={href} isLast={isLast}>
                  {item.label}
                </BreadcrumbsItemLink>
              </BreadcrumbsItem>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
