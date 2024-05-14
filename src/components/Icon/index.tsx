import React, { JSX } from 'react';
import ThemedImage from '@theme/ThemedImage';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
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

interface IconProps {
  className?: string;
  icon?: string;
  defaultIcon: string;
}

function TextIcon({ className, icon }: { className?: string; icon: string }): JSX.Element | string {
  return className ? <span className={className}>{icon}</span> : icon;
}

export default function Icon({ icon, defaultIcon, ...props }: IconProps): JSX.Element | string | null {
  const { withBaseUrl } = useBaseUrlUtils();
  if (!icon) {
    return <TextIcon icon={defaultIcon} {...props} />;
  }
  switch (icon) {
    case 'amp':
      return <AmpIcon {...props} />;
    case 'android':
      return <AndroidIcon {...props} />;
    case 'angular':
      return <AngularIcon {...props} />;
    case 'apple':
      return <AppleIcon {...props} />;
    case 'chromecast':
      return <ChromecastIcon {...props} />;
    case 'comscore':
      return <ComscoreIcon {...props} />;
    case 'conviva':
      return (
        <ThemedImage
          sources={{
            light: withBaseUrl('/img/conviva.svg'),
            dark: withBaseUrl('/img/conviva_dark.svg'),
          }}
          {...props}
        />
      );
    case 'flutter':
      return <FlutterIcon {...props} />;
    case 'github':
      return (
        <ThemedImage
          sources={{
            light: withBaseUrl('/img/github.svg'),
            dark: withBaseUrl('/img/github_dark.svg'),
          }}
          {...props}
        />
      );
    case 'nielsen':
      return <NielsenIcon {...props} />;
    case 'nuxtjs':
      return <NuxtjsIcon {...props} />;
    case 'react':
      return <ReactIcon {...props} />;
    case 'roku':
      return <RokuIcon {...props} />;
    case 'vuejs':
      return <VuejsIcon {...props} />;
    case 'web':
      return <WebIcon {...props} />;
    case 'wordpress':
      return <WordPressIcon {...props} />;
    case 'yospace':
      return <img src={YospaceIconUrl} {...props} />;
    default:
      return <TextIcon icon={icon} {...props} />;
  }
}
