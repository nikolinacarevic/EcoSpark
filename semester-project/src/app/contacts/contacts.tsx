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
          <div className={styles.oneInfo}>info@ecospark.hr</div>
          <div className={styles.oneInfoMiddle}>021/ 123 456 +38598 7654 321
          </div>
          <div className={styles.oneInfo}>Put Mate Motike 32 21201 Labin
          </div>
        </div>
      </div>
  );
}


