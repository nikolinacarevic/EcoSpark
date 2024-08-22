'use client'

import React, { useEffect, useState } from 'react';
import styles from "./home.module.css";
import Header from '../header/header';
import Link from 'next/link';
import { products, Car } from '../../products/cars';


function Home() {
    function getRandomCars(products: Car[], count: number): Car[] {
        const shuffled = products.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    const [randomCars, setRandomCars] = useState<Car[]>([]);

    useEffect(() => {
        const selectedCars = getRandomCars(products, 3);
        setRandomCars(selectedCars);
    }, []);

    return (
        <>
            <div className={styles.homeContainer}>
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
                    <div id={styles.carRow}>
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
                    <button id={styles.bookButton}>BOOK NOW</button>
                </div>

                <div id={styles.reasonsContainer}>
                    <p id={styles.reasonTitle}>Why EcoSpark?</p>
                    <div id={styles.reasonRow}>
                        <button className={styles.arrowReasonBox}>&lt;</button>
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
                        <button className={styles.arrowReasonBox}>&gt;</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
