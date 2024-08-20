import Image from 'next/image';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './products.module.css'
import { products, Car } from './cars';
import Link from 'next/link';

export default function About() {
    return (
        <>

            <div id={styles.TitleContainer}>All Models</div>
            <div id={styles.BoxContainer}>

                <ul className={styles.productList}>
                    {products.map(product => (
                        <li className={styles.CarContainer} key={product.id}>
                            <Link href={`/products/${product.id}`}>
                                <div className={styles.CarCard}>
                                    <img className={styles.CarImage} src={product.image} alt={product.name} />
                                    <div className={styles.carText}>
                                        <p className={styles.CarName}>{product.name}</p>
                                        <p className={styles.CarPrice}>{product.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}