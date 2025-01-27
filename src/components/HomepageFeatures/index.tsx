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
          light: useBaseUrl('/img/theoplayer.svg'),
          dark: useBaseUrl('/img/theoplayer_dark.svg'),
        }}
      />
    ),
    description: (
      <>
        Deploy cutting-edge video playback experiences, efficiently and on any device, including on web, mobile, smart TVs, set-top-boxes and gaming
        consoles.
      </>
    ),
    to: '/theoplayer',
  },
  {
    title: 'THEOads',
    Image: (props) => (
      <ThemedImage
        {...props}
        sources={{
          light: useBaseUrl('/img/theoads.svg'),
          dark: useBaseUrl('/img/theoads_dark.svg'),
        }}
      />
    ),
    description: <>Deliver a seamless, less intrusive ad experience with THEOads, designed to boost viewer engagement and maximize ad revenue.</>,
    to: '/theoads',
  },
  {
    title: 'Open Video UI',
    Image: (props) => (
      <ThemedImage
        {...props}
        sources={{
          light: useBaseUrl('/img/open-video-ui.svg'),
          dark: useBaseUrl('/img/open-video-ui_dark.svg'),
        }}
      />
    ),
    description: (
      <>Easily build and customize your video player UI to match your branding style through a comprehensive library of open-source UI components.</>
    ),
    to: '/open-video-ui',
  },
  {
    title: 'THEOlive',
    Image: (props) => (
      <ThemedImage
        {...props}
        sources={{
          light: useBaseUrl('/img/theolive.svg'),
          dark: useBaseUrl('/img/theolive_dark.svg'),
        }}
      />
    ),
    description: (
      <>
        Stream real-time to any audience size with the best quality of experience, whether it’s for sports betting, iGaming or interactive
        entertainment.
      </>
    ),
    to: '/theolive',
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
