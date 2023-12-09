import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css'

export default function AboutUs(){
    return (
      <section
        id="aboutSection"
        className={clsx(styles.aboutSection, "hero hero--primary")}
      >
        <div className="container">
          <h1 className="text text--center">About Us</h1><br/>
          <div className="row">
            <div className={clsx("col col--7", "text text--center")}>
              <h3>Streamlining Business Operations for Food Stall Owners</h3>

              <p>
                Inventory and Sales App was founded with the belief that small
                food stall owners should have access to the same tools and
                technology as larger businesses. Our mission is to provide
                affordable and easy-to-use solutions that help food stall owners
                optimize their operations and grow their businesses.
              </p>
            </div>
            <div className={clsx("col col--5", "text text--center")}>
              <img
                className={styles.profPic}
                src="./img/avatar1.png"
                width={"50%"}
              />
              <br />
              <div>
                <div className={styles.devName}>VINZE RAMOS</div>
                <div>Software Developer</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );        
}