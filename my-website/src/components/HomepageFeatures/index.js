import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Real-Time Sales Tracking',
    Svg: require('@site/static/img/salesman-monochromatic.svg').default,
    description: (
      <>
        Track your sales in real-time and get insights into your business performance.
      </>
    ),
  },
  {
    title: '24/7 Customer Support',
    Svg: require('@site/static/img/it-support-monochromatic.svg').default,
    description: (
      <>
        Our customer support team is available 24/7 to assist you with any queries or issues.
      </>
    ),
  },
  {
    title: 'Secure and Reliable',
    Svg: require('@site/static/img/authentication-flatline-48804.svg').default,
    description: (
      <>
        Inventory and Sales App provides airtight security to ensure that your data is safe and secure.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section id="features" className={styles.features}>
      
      <div className="container">
        <h1>Key Features</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
