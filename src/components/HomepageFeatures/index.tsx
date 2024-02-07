import type { JSX } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'THEOplayer',
    Svg: require('@site/static/img/theoplayer.svg').default,
    description: <>Empowering the world's leading media and entertainment companies to deliver cutting-edge video, efficiently and on any device.</>,
    to: '/theoplayer',
  },
  {
    title: 'Open Video UI',
    // TODO Logo for Open Video UI?
    Svg: undefined,
    description: (
      <>
        A comprehensive library of open-source UI components, making it easier to build and customize your video player UI to match your branding
        style.
      </>
    ),
    to: '/open-video-ui',
  },
  {
    title: 'THEOlive',
    Svg: require('@site/static/img/theolive.svg').default,
    description: <>High-quality real-time video at scale for providers of sports betting, iGaming and interactive entertainment.</>,
    to: 'https://developers.theo.live/',
  },
];

function Feature({ title, Svg, description, to }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', Svg && styles.featureHeadingWithSvg)}>
        {Svg ? <Svg className={styles.featureSvg} role="img" /> : <h2 className={styles.featureTitle}>{title}</h2>}
      </div>
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
        <Link className="button button--secondary button--lg" to={to}>
          Get started
        </Link>
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
