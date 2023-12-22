import Image from 'next/image';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './about.module.css'

export default function About() {
  return (
      <div className={styles.titleContainer}>
          <h1 id={styles.mainTitle}>About Us</h1>
          <img src='/images/aboutUs.png' id={styles.backgroundImage}></img>
      </div>
  );
}