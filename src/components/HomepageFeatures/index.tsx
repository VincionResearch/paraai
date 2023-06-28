import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/clock_adobe_express.svg').default,
    description: (
      <>
        Firstly, submit all relevant documents and case files for review. Secondly, provide a detailed description of the resolution or outcome you're seeking from this case.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/target_adobe_express.svg').default,
    description: (
      <>
        Produce a variety of responses to determine which narrative is most robustly supported by legal principles and effectively propels the case forward.
      </>
    ),
  },
  {
    title: 'Harnessing AI Power in Your Workspace',
    Svg: require('@site/static/img/gpu_adobe_express.svg').default,
    description: (
      <>
        We offer a dedicated infrastructure, ensuring that clients' data remains strictly within the confines of your office.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.boundingb}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
