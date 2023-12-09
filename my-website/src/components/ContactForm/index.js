import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css'

function ContactForm(){
    return (
      <section
        id="contactSection"
        className={clsx(styles.contactSection, styles.contactView)}
      >
        <div className="container">
          <h1 className="text text--center">Contact Us</h1><br/>
          <h3>For Any Assistance Required Please Reach Out</h3>
          <div className="row">
            <div className={clsx("col col--6")}>
              <form action="/" method="/">
                <input type="text" required placeholder="FIRST NAME" /> <br />
                <input type="text" required placeholder="LAST NAME" /> <br />
                <input type="email" required email placeholder="EMAIL" /> <br />
                <input type="textarea" required placeholder="MESSAGE" /> <br />
                <button className="button button--primary button--lg">
                  Submit
                </button>
              </form>
            </div>
            <div className={clsx("col col--6")}>
              <img src="./img/Contact-Us.jpg" />
            </div>
          </div>
        </div>
      </section>
    );        
}

export default ContactForm;