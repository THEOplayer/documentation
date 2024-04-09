import React, { JSX } from 'react';
import clsx from 'clsx';
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
import styles from './styles.module.css';

interface CardIconProps {
  icon?: string;
  defaultIcon: string;
}

export default function CardIcon({ icon, defaultIcon }: CardIconProps): JSX.Element | string | null {
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
