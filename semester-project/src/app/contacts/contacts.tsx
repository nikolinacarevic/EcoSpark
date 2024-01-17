import Image from 'next/image';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './contacts.module.css'

export default function Contacts() {
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.contactsText}>
        <h1>Contact Us</h1>
        <p>We're thrilled to connect with you! Whether you have questions, suggestions, or just want to chat about the future of electric vehicles, we're here and ready to assist.</p>
      </div>
      <div id={styles.infoBox}>
        <div className={styles.oneInfo}>
          <img className={styles.mailImage} src='/images/mail.png'></img>
          <div>
          <p className={styles.boxText}>info@ecospark.hr</p>
          <p className={styles.boxText}>hiring@ecospark.hr</p>
          </div>
        </div>
        <div className={styles.oneInfoMiddle}>
          <img className={styles.callImage} src='/images/call.png'></img>
          <div>
            <p className={styles.boxText}>021/ 123 456 </p>
            <p className={styles.boxText}>+38598 7654 321</p>
          </div>
        </div>
        <div className={styles.oneInfo}>
          <img className={styles.locationImage} src='/images/location.png'></img>
          <div>
            <p className={styles.boxText}>Put Mate Motike 32</p>
            <p className={styles.boxText}>21201, Labin</p>
          </div>

        </div>
      </div>
      <div id={styles.formBox}>
        <h1>Join our team!</h1>
        <form id={styles.inputForm}>
          <input type='text' placeholder='Name'></input>
          <input type='text' placeholder='Surname'></input>
          <input type='email' placeholder='E-mail'></input>
          <div className={styles.buttonBox}>
          <button id={styles.formButton}>
          + 
          </button>
          <p>Upload your resume</p>
          </div>
          <button id={styles.submitButton}>
            Apply!
          </button>
        </form>
      </div>
    </div>
  );
}


