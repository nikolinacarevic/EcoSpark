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
      </div>
  );
}


