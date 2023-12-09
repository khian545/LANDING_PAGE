import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css'
import AboutProfPic from '../AboutProfPic';

export default function AboutUs(){
    return(
      <section id="aboutSection" className={styles.aboutSection}>
        
          <div className='container'>
            <h1>About Us</h1>
            <div className='row'>
              <div className={clsx('col col--6')}>
                
                  <h3>Streamlining Business Operations for Food Stall Owners</h3>
              
                <p>
                    Inventory and Sales App was founded with the belief that small food stall owners should have access to the same tools and technology as larger businesses. Our mission is to provide affordable and easy-to-use solutions that help food stall owners optimize their operations and grow their businesses.
                  </p>
              </div>
              <div className={clsx('col col--6')}>
                <AboutProfPic />
              </div>
            </div>
              
          </div>
                  
        </section>
        
    );        
}