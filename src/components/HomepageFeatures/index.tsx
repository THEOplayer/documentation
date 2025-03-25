import type { JSX } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import ThemedImage, { type Props } from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FeatureItem = {
  title: string;
  Image: (props: Omit<Props, 'sources'>) => JSX.Element;
  description: JSX.Element;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'THEOplayer',
    Image: (props) => (
      <ThemedImage
        {...props}
        sources={{
          light: useBaseUrl('/img/player-black-wordmark.svg'),
          dark: useBaseUrl('/img/player-white-wordmark.svg'),
        }}
      />
    ),
    description: (
      <>
        Formerly known as THEOplayer, the Dolby OptiView player enables you to deploy cutting-edge video playback experiences, efficiently and on any device, including on web, mobile, smart TVs, set-top-boxes and gaming
        consoles.
      </>
    ),
    to: '/theoplayer',
  },
  {
    title: 'Dolby OptiView Ads',
    Image: (props) => (
      <ThemedImage
        {...props}
        sources={{
          light: useBaseUrl('/img/ads-black-wordmark.svg'),
          dark: useBaseUrl('/img/ads-white-wordmark.svg'),
        }}
      />
    ),
    description: 
      <>
        Formerly known as THEOads, the Dolby OptiView Ads product enables you to deliver a seamless, less intrusive ad experience with THEOads, designed to boost viewer engagement and maximize ad revenue.
      </>,
    to: '/theoads',
  },
  {
    title: 'Dolby Optiview Real-time',
    Image: (props) => (
      <ThemedImage
        {...props}
        sources={{
          light: useBaseUrl('/img/rts-streaming-black-wordmark.svg'),
          dark: useBaseUrl('/img/rts-streaming-white-wordmark.svg'),
        }}
      />
    ),
    description: 
      <>
        Formerly known as Millicast, Dolby OptiView's real-time streaming enables you deliver broadcast quality live streaming at sub-second latency, enabling interactivity and fan engagement.
      </>,
    to: '/millicast',
  },
  {
    title: 'Dolby OptiView Live',
    Image: (props) => (
      <ThemedImage
        {...props}
        sources={{
          light: useBaseUrl('/img/live-streaming-black-wordmark.svg'),
          dark: useBaseUrl('/img/live-streaming-white-wordmark.svg'),
        }}
      />
    ),
    description: (
      <>
        Formerly known as THEOlive, Dolby OptiView's Live-streaming solution enables you to stream in ultra-low delay to any audience size with the best quality of experience, whether it’s for sports betting, iGaming or interactive
        entertainment.  With this soltution, you can choose from different latency targets from 1 second and up.
      </>
    ),
    to: '/theolive',
  },
  
  {
    title: 'Open Video UI',
    Image: (props) => (
      <ThemedImage
        {...props}
        sources={{
          light: useBaseUrl('/img/openvideoui-black-wordmark.svg'),
          dark: useBaseUrl('/img/openvideoui-white-wordmark.svg'),
        }}
      />
    ),
    description: (
      <>
        Paired with the OptiView player, the OpenVideoUi enables you to easily build and customize your video player UI to match your branding style through a comprehensive library of open-source UI components.
      </>
    ),
    to: '/open-video-ui',
  },
];

function Feature({ title, Image, description, to }: FeatureItem) {
  return (
    <div className={clsx('col col--6 margin-vert--md')}>
      <div className={clsx('card padding--md margin-horiz--sm', styles.featureCard)}>
        <div className={clsx('card__header text--center', styles.featureHeading)}>
          <Image className={styles.featureImage} alt={title} />
        </div>
        <div className="card__body text--center">
          <p>{description}</p>
        </div>
        <div className="card__footer text--center">
          <Link className="button button--secondary button--lg" to={to}>
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
