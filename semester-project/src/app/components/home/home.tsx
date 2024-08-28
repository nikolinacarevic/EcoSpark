'use client'

import React, { useEffect, useState, useRef } from 'react';
import styles from "./home.module.css";
import Link from 'next/link';
import { useSwipeable } from 'react-swipeable';
import { products, Car } from '../../(contentful)/products/cars';
import { useMediaQuery } from 'react-responsive';

function Home() {
    function getRandomCars(products: Car[], count: number): Car[] {
        const shuffled = products.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    const [randomCars, setRandomCars] = useState<Car[]>([]);
    const [currentCarIndex, setCurrentCarIndex] = useState(0);
    const [currentReasonIndex, setCurrentReasonIndex] = useState(0);

    const reasonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const selectedCars = getRandomCars(products, 3);
        setRandomCars(selectedCars);
    }, []);

    useEffect(() => {
        if (reasonRef.current) {
            reasonRef.current.scrollLeft = currentReasonIndex * reasonRef.current.clientWidth;
        }
    }, [currentReasonIndex]);

    const handleSwipeLeft = () => {
        setCurrentCarIndex((prevIndex) =>
            prevIndex < randomCars.length - 1 ? prevIndex + 1 : 0
        );
    };

    const handleSwipeRight = () => {
        setCurrentCarIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : randomCars.length - 1
        );
    };

    const handleReasonLeft = () => {
        setCurrentReasonIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : 2
        );
    };

    const handleReasonRight = () => {
        setCurrentReasonIndex((prevIndex) =>
            prevIndex < 2 ? prevIndex + 1 : 0
        );
    };

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
        trackMouse: true,
    });

    return (
        <>
            <div className={styles.homeContainer} {...(isMobile ? handlers : {})}>
                <div className={styles.heroSection}>
                    <div className={styles.introContainer}>
                        <h1 id={styles.introTitle}>EcoSpark Automotive</h1>
                        <p id={styles.introText}>Join us in the journey towards a cleaner, more sustainable future. We're driven by a vision of cleaner, smarter, and more efficient transportation.</p>
                    </div>
                    <img id={styles.mainImage} src='/images/maincar.png' alt="Main car" />
                    <h1 className={styles.mobileIntroTitle}>EcoSpark Automotive</h1>
                </div>
                
                <div id={styles.carsContainer}>
                    <p id={styles.carsText}>Enjoy vehicles at best prices!</p>
                    <div id={styles.carRow} style={{ transform: `translateX(-${currentCarIndex * 100}%)`, transition: 'transform 0.3s ease-in-out' }}>
                        {randomCars.map(car => (
                            <div key={car.id} className={styles.carBox}>
                                <img className={styles.carImage} src={car.image} alt={car.name} />
                                <p className={styles.carName}>{car.name}</p>
                                <Link href={car.link}>
                                    <button className={styles.carButton}>Buy</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div id={styles.bookContainer}>
                    <div id={styles.bookTitle1}>
                        <h3>Try out our cars!</h3>
                        <p>Book a test drive!</p>
                    </div>
                    <Link href="/products">
                        <button id={styles.bookButton}>BOOK NOW</button>
                    </Link>
                </div>

                <div id={styles.reasonsContainer}>
                <p id={styles.reasonTitle}>Why EcoSpark?</p>
                    <button className={`${styles.arrowReasonBox} ${styles.left}`} onClick={handleReasonLeft}>&lt;</button>
                    <div id={styles.reasonRow} ref={reasonRef}>
                        <div className={styles.eachReason}>
                            <img className={styles.reasonImg} src='/images/reason1.png' alt="Reason 1" />
                            <p className={styles.reasonText}>Eco-Friendly and Sustainable Driving</p>
                        </div>
                        <div className={styles.eachReason}>
                            <img className={styles.reasonImg} src='/images/reason2.png' alt="Reason 2" />
                            <p className={styles.reasonText}>Cutting-Edge Technology and Innovation</p>
                        </div>
                        <div className={styles.eachReason}>
                            <img className={styles.reasonImg} src='/images/reason3.png' alt="Reason 3" />
                            <p className={styles.reasonText}>Substantial Cost Savings and Financial Benefits</p>
                        </div>
                    </div>
                    <button className={`${styles.arrowReasonBox} ${styles.right}`} onClick={handleReasonRight}>&gt;</button>
                </div>
            </div>
        </>
    );
}

export default Home;
