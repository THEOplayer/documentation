import React, { JSX } from 'react';
import ThemedImage, { type Props as ThemedImageProps } from '@theme/ThemedImage';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import AmpIcon from '@site/static/img/amp.svg';
import AdobeIcon from '@site/static/img/adobe.svg';
import AndroidIcon from '@site/static/img/android.svg';
import AngularIcon from '@site/static/img/angular.svg';
import AppleIcon from '@site/static/img/apple.svg';
import ComscoreIcon from '@site/static/img/comscore.svg';
import ChromecastIcon from '@site/static/img/chromecast.svg';
import FlutterIcon from '@site/static/img/flutter.svg';
import LinuxIcon from '@site/static/img/linux.svg';
import NielsenIcon from '@site/static/img/nielsen.svg';
import NuxtjsIcon from '@site/static/img/nuxtjs.svg';
import ReactIcon from '@site/static/img/react.svg';
import RokuIcon from '@site/static/img/roku.svg';
import UplynkIcon from '@site/static/img/uplynk.svg';
import VuejsIcon from '@site/static/img/vuejs.svg';
import WebIcon from '@site/static/img/web.svg';
import WindowsIcon from '@site/static/img/windows.svg';
import WordPressIcon from '@site/static/img/wordpress.svg';
import YospaceIconUrl from '@site/static/img/yospace.png';
import clsx from 'clsx';
import styles from './styles.module.css';

interface IconProps {
  className?: string;
  icon?: string;
  defaultIcon: string;
}

function TextIcon({ className, icon }: { className?: string; icon: string }): JSX.Element | string {
  return className ? <span className={className}>{icon}</span> : icon;
}

function ThemedImageWithBaseUrl({ sources, ...props }: ThemedImageProps): JSX.Element | string {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <ThemedImage
      sources={{
        light: withBaseUrl(sources.light),
        dark: withBaseUrl(sources.dark),
      }}
      {...props}
    />
  );
}

export default function Icon({ icon, defaultIcon, className }: IconProps): JSX.Element | string | null {
  if (!icon) {
    return <TextIcon icon={defaultIcon} className={clsx(styles.icon, className)} />;
  }
  switch (icon) {
    case 'adobe':
      return <AdobeIcon className={clsx(styles.icon, className)} />;
    case 'amp':
      return <AmpIcon className={clsx(styles.icon, className)} />;
    case 'android':
      return <AndroidIcon className={clsx(styles.icon, className)} />;
    case 'angular':
      return <AngularIcon className={clsx(styles.icon, className)} />;
    case 'apple':
      return <AppleIcon className={clsx(styles.icon, className)} />;
    case 'chromecast':
      return <ChromecastIcon className={clsx(styles.icon, className)} />;
    case 'comscore':
      return <ComscoreIcon className={clsx(styles.icon, className)} />;
    case 'conviva':
      return (
        <ThemedImageWithBaseUrl
          sources={{
            light: '/img/conviva.svg',
            dark: '/img/conviva_dark.svg',
          }}
          className={clsx(styles.icon, className)}
        />
      );
    case 'flutter':
      return <FlutterIcon className={clsx(styles.icon, className)} />;
    case 'github':
      return (
        <ThemedImageWithBaseUrl
          sources={{
            light: '/img/github.svg',
            dark: '/img/github_dark.svg',
          }}
          className={clsx(styles.icon, className)}
        />
      );
    case 'linux':
      return <LinuxIcon className={clsx(styles.icon, className)} />;
    case 'nielsen':
      return <NielsenIcon className={clsx(styles.icon, className)} />;
    case 'nuxtjs':
      return <NuxtjsIcon className={clsx(styles.icon, className)} />;
    case 'react':
      return <ReactIcon className={clsx(styles.icon, className)} />;
    case 'roku':
      return <RokuIcon className={clsx(styles.icon, className)} />;
    case 'uplynk':
      return <UplynkIcon className={clsx(styles.icon, className)} />;
    case 'vuejs':
      return <VuejsIcon className={clsx(styles.icon, className)} />;
    case 'web':
      return <WebIcon className={clsx(styles.icon, className)} />;
    case 'windows':
      return <WindowsIcon className={clsx(styles.icon, className)} />;
    case 'wordpress':
      return <WordPressIcon className={clsx(styles.icon, className)} />;
    case 'yospace':
      return <img src={YospaceIconUrl} className={clsx(styles.icon, className)} />;
    default:
      return <TextIcon icon={icon} className={clsx(styles.icon, className)} />;
  }
}
