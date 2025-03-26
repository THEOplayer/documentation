import type { JSX, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import ThemedImage, { type Props } from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FeatureItem = {
  title: string;
  Image: (props: Omit<Props, 'sources'>) => ReactNode;
  description: ReactNode;
  to: ReadonlyArray<{
    link: string;
    text: ReactNode;
  }>;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dolby OptiView Player',
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
    to: [{ 'link': '/theoplayer', 'text': 'Get Started'}]
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
        Formerly known as THEOads, the Dolby OptiView Ads product enables you to deliver a seamless, less intrusive ad experience, designed to boost viewer engagement and maximize ad revenue.
      </>,
    to: [{ 'link': '/theoads', 'text': 'Get Started'}]
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
        Dolby OptiView's Live-streaming solution enables you to stream in ultra-low delay to any audience size with the best quality of experience, whether it’s for sports betting, iGaming or interactive
        entertainment. With this soltution, choose Real-time for interactive latency or manage latency targets from 1 second and up with Live. Use both with the OptiView Player.
      </>
    ),
    to: [{ 'link': '/millicast', 'text': 'Real-time (Millicast)'}, { 'link': '/theolive', 'text': 'Live (THEOlive)'}]
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
    to: [{ 'link': '/open-video-ui', 'text': 'Get Started'}],
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
          {to.map(({ link, text }) => (
            <Link className={clsx(styles.footerButton, 'button button--secondary button--lg')} to={link}>
              {text}
            </Link>
          ))}
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
