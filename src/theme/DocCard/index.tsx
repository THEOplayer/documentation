import React, { type JSX } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { findFirstSidebarItemLink, useDocById } from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/DocCard';
import type { PropSidebarItemCategory, PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import AmpIcon from '@site/static/img/amp.svg';
import AndroidIcon from '@site/static/img/android.svg';
import AngularIcon from '@site/static/img/angular.svg';
import AppleIcon from '@site/static/img/apple.svg';
import ChromecastIcon from '@site/static/img/chromecast.svg';
import FlutterIcon from '@site/static/img/flutter.svg';
import NuxtjsIcon from '@site/static/img/nuxtjs.svg';
import ReactIcon from '@site/static/img/react.svg';
import VuejsIcon from '@site/static/img/vuejs.svg';
import WordPressIcon from '@site/static/img/wordpress.svg';

function CardContainer({ href, children }) {
  return (
    <Link href={href} className={clsx('card padding--lg', styles.cardContainer)}>
      {children}
    </Link>
  );
}

function CardLayout({ href, icon, title, description }) {
  return (
    <CardContainer href={href}>
      <Heading as="h2" className={clsx('text--truncate', styles.cardTitle)} title={title}>
        {icon} {title}
      </Heading>
      {description && <p className={clsx(styles.cardDescription)}>{description}</p>}
    </CardContainer>
  );
}

interface SidebarItemCustomProps {
  icon?: string;
}

interface CardIconProps {
  item: PropSidebarItemCategory | PropSidebarItemLink;
  defaultIcon: string;
}

function CardIcon({ item, defaultIcon }: CardIconProps): JSX.Element | string | null {
  const icon = (item.customProps as SidebarItemCustomProps)?.icon;
  if (!icon) {
    return defaultIcon;
  }
  switch (icon) {
    case 'amp':
      return <AmpIcon className={clsx(styles.cardIcon)} />;
    case 'android':
      return <AndroidIcon className={clsx(styles.cardIcon)} />;
    case 'angular':
      return <AngularIcon className={clsx(styles.cardIcon)} />;
    case 'apple':
      return <AppleIcon className={clsx(styles.cardIcon)} />;
    case 'chromecast':
      return <ChromecastIcon className={clsx(styles.cardIcon)} />;
    case 'flutter':
      return <FlutterIcon className={clsx(styles.cardIcon)} />;
    case 'nuxtjs':
      return <NuxtjsIcon className={clsx(styles.cardIcon)} />;
    case 'react':
      return <ReactIcon className={clsx(styles.cardIcon)} />;
    case 'vuejs':
      return <VuejsIcon className={clsx(styles.cardIcon)} />;
    case 'wordpress':
      return <WordPressIcon className={clsx(styles.cardIcon)} />;
    default:
      return icon;
  }
}

function CardCategory({ item }: { item: PropSidebarItemCategory }) {
  const icon = <CardIcon item={item} defaultIcon="🗃️" />;
  const href = findFirstSidebarItemLink(item);
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  return (
    <CardLayout
      href={href}
      icon={icon}
      title={item.label}
      description={
        item.description ??
        translate(
          {
            message: '{count} items',
            id: 'theme.docs.DocCard.categoryDescription',
            description: 'The default description for a category card in the generated index about how many items this category includes',
          },
          { count: item.items.length }
        )
      }
    />
  );
}

function CardLink({ item }: { item: PropSidebarItemLink }) {
  const icon = <CardIcon item={item} defaultIcon={isInternalUrl(item.href) ? '📄️' : '🔗'} />;
  const doc = useDocById(item.docId ?? undefined);
  return <CardLayout href={item.href} icon={icon} title={item.label} description={item.description ?? doc?.description} />;
}

export default function DocCard({ item }: Props) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
