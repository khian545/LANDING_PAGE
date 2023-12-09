import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import PhoneBanner from '../components/BannerPic';
import ContactForm from '../components/ContactForm';
import AboutUs from '../components/AboutUs';
import TabletPic from '../components/TabletPic';
import AppLogo from '../components/AppLogo';

//import {Link} from 'react-scroll';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <AppLogo />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="app-description">
          <p  >Maswerte App is the perfect tool to manage your food stall inventory and sales. With features like stock management, sales tracking and reporting, you can streamline your operations and make informed business decisions. Download the app today and take your food stall business to the next level.</p>
        
        </div>
        <h2>Join the Happy
Food Stall Owners</h2>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            /*to="/docs/intro">*/
            to="/">
            Download Now
          </Link>
        </div>
      </div>
      <div className='container'>
        <PhoneBanner />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <main>
        <AboutUs />
      </main>
        
        <ContactForm />
                
    </Layout>
  );
}
