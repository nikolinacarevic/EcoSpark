import Image from 'next/image';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './about.module.css'

export default function About() {
  return (
    <>
      <div className={styles.titleContainer}>
          <h1 id={styles.mainTitle}>About Us</h1>
          <img src='/images/aboutUs.png' id={styles.backgroundImage}></img>
      </div>

    <div className={styles.wellcomeContainer}>
      <h1 id={styles.wellcomeTitle}>Welcome to EcoSpark – Pioneering Tomorrow's Drive</h1>
      <p id={styles.wellcomeText}>At EcoSpark, we embark on a revolutionary journey towards a sustainable and emission-free future. Nestled at the forefront of innovation, EcoSpark is not merely an electric car company; we are the architects of a cleaner, greener automotive landscape. Our commitment extends beyond manufacturing electric vehicles; we are crafting a tomorrow where transportation is synonymous with environmental responsibility and cutting-edge technology.</p>
    </div>
    
  </>
  );
}