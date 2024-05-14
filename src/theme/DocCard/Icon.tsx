import React, { JSX } from 'react';
import clsx from 'clsx';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import AmpIcon from '@site/static/img/amp.svg';
import AndroidIcon from '@site/static/img/android.svg';
import AngularIcon from '@site/static/img/angular.svg';
import AppleIcon from '@site/static/img/apple.svg';
import ComscoreIcon from '@site/static/img/comscore.svg';
import ChromecastIcon from '@site/static/img/chromecast.svg';
import FlutterIcon from '@site/static/img/flutter.svg';
import NielsenIcon from '@site/static/img/nielsen.svg';
import NuxtjsIcon from '@site/static/img/nuxtjs.svg';
import ReactIcon from '@site/static/img/react.svg';
import RokuIcon from '@site/static/img/roku.svg';
import VuejsIcon from '@site/static/img/vuejs.svg';
import WebIcon from '@site/static/img/web.svg';
import WordPressIcon from '@site/static/img/wordpress.svg';
import YospaceIconUrl from '@site/static/img/yospace.png';
import styles from './styles.module.css';

interface IconProps {
  className?: string;
  icon?: string;
  defaultIcon: string;
}

function TextIcon({ className, icon }: { className?: string; icon: string }): JSX.Element | string {
  return className ? <span className={className}>{icon}</span> : icon;
}

export default function Icon({ className, icon, defaultIcon }: IconProps): JSX.Element | string | null {
  if (!icon) {
    return <TextIcon className={className} icon={defaultIcon} />;
  }
  switch (icon) {
    case 'amp':
      return <AmpIcon className={clsx(styles.cardIcon, className)} />;
    case 'android':
      return <AndroidIcon className={clsx(styles.cardIcon, className)} />;
    case 'angular':
      return <AngularIcon className={clsx(styles.cardIcon, className)} />;
    case 'apple':
      return <AppleIcon className={clsx(styles.cardIcon, className)} />;
    case 'chromecast':
      return <ChromecastIcon className={clsx(styles.cardIcon, className)} />;
    case 'comscore':
      return <ComscoreIcon className={clsx(styles.cardIcon, className)} />;
    case 'conviva':
      return (
        <ThemedImage
          className={clsx(styles.cardIcon, className)}
          sources={{
            light: useBaseUrl('/img/conviva.svg'),
            dark: useBaseUrl('/img/conviva_dark.svg'),
          }}
        />
      );
    case 'flutter':
      return <FlutterIcon className={clsx(styles.cardIcon, className)} />;
    case 'github':
      return (
        <ThemedImage
          className={clsx(styles.cardIcon, className)}
          sources={{
            light: useBaseUrl('/img/github.svg'),
            dark: useBaseUrl('/img/github_dark.svg'),
          }}
        />
      );
    case 'nielsen':
      return <NielsenIcon className={clsx(styles.cardIcon, className)} />;
    case 'nuxtjs':
      return <NuxtjsIcon className={clsx(styles.cardIcon, className)} />;
    case 'react':
      return <ReactIcon className={clsx(styles.cardIcon, className)} />;
    case 'roku':
      return <RokuIcon className={clsx(styles.cardIcon, className)} />;
    case 'vuejs':
      return <VuejsIcon className={clsx(styles.cardIcon, className)} />;
    case 'web':
      return <WebIcon className={clsx(styles.cardIcon, className)} />;
    case 'wordpress':
      return <WordPressIcon className={clsx(styles.cardIcon, className)} />;
    case 'yospace':
      return <img src={YospaceIconUrl} className={clsx(styles.cardIcon, className)} />;
    default:
      return <TextIcon className={className} icon={icon} />;
  }
}
