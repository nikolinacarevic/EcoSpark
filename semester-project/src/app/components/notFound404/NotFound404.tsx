import styles from './notFound404.module.css';
import Link from "next/link";
import Image from 'next/image';
import Header from '../header/header';

const NotFound404 = () => {
    return (
        <>
        <Header/>
            <div className={styles.container}>
                <img src="/images/404img.png.png" alt="404 Not Found" className={styles.image} />
                <h1 className={styles.heading}>OOPS!</h1>
                <p className={styles.text}>
                    It looks like the page you are looking for doesn't exist.
                </p>
                <p className={styles.text}>
                    Check the URL for typos or head back to the homepage.
                </p>
                <Link href="/" className={styles.btn}>Back to home</Link>
            </div>
        </>
    )

}

export default NotFound404;