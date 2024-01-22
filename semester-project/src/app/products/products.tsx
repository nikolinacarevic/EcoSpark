import Image from 'next/image';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './products.module.css'

export default function About() {
  return (
    <>

        <div id={styles.TitleContainer}>All Models</div>
        <div id={styles.BoxContainer}>
            <img src='/images/filter.png' id={styles.FilterButton}></img>
            <div id={styles.CarContainer}>
                <div className={styles.CarCard}>
                    <div className={styles.CarName}>Mercedes Benz EQS</div>
                    <img className={styles.CarImage} src='/images/mercedes.png'></img>
                    <div className={styles.CarPrice}>from 116 200€</div>
                    <button className={styles.CarBuy}>BUY</button>
                </div>
                <div className={styles.CarCard}>
                    <div className={styles.CarName}>Škoda Enyaq</div>
                    <img src='/images/skoda.png' className={styles.CarImage}></img>
                    <div className={styles.CarPrice}>from 48 458€</div>
                    <button className={styles.CarBuy}>BUY</button>
                </div>
                <div className={styles.CarCard}>
                    <div className={styles.CarName}>Toyota Yaris</div>
                    <img src='/images/toyota.png' className={styles.CarImage}></img>
                    <div className={styles.CarPrice}>from 22 950€</div>
                    <button className={styles.CarBuy}>BUY</button>
                </div>
            </div>
        </div>
    
    </>
  )
}