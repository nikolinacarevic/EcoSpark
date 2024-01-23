import React from 'react';
import styles from "./home.module.css";
import Header from '../header/header';


function Home() {
    return (
        <>
        <div className={styles.homeContainer}>
            <div className={styles.heroSection}>
                {/*<div className={styles.shadow1}></div>
                <div className={styles.shadow2}></div>*/}
                
                <div className={styles.introContainer}>
                    <h1 id={styles.introTitle}>EcoSpark Automotive</h1>
                    <p id={styles.introText}>Join us in the journey towards a cleaner, more sustainable future. We're driven by a vision of cleaner, smarter, and more efficient transportation.</p>
                </div>

                <img id={styles.mainImage} src='/images/maincar.png'></img>
                <h1 className={styles.mobileIntroTitle}>EcoSpark Automotive</h1>
            </div>
            {/*<div className={styles.shadow3}></div>*/}
            <div id={styles.carsContainer}>
                <p id={styles.carsText}>Enjoy vehicles at  best prices!</p>
                <div id={styles.carRow}>
                    <button className={styles.arrowCarBox}>&lt;</button>
                    <div className={styles.carBox}>
                    <img className={styles.carImage} src='/images/car1.png'></img>
                        <p className={styles.carName}>Volkswagen ID 4</p>
                        <button className={styles.carButton}>Buy</button>
                    </div>
                    <div className={styles.carBox}>
                    <img className={styles.carImage} src='/images/car2.png'></img>
                        <p className={styles.carName}>Škoda Enyaq iV</p>
                        <button className={styles.carButton}>Buy</button>
                    </div>
                    <div className={styles.carBox}>
                    <img className={styles.carImage1} src='/images/car3.png'></img>
                        <p className={styles.carName}>Mercedes-Benz EQS</p>
                        <button className={styles.carButton}>Buy</button>
                    </div>
                    <button className={styles.arrowCarBox}>&gt;</button>
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
                    <div><button className={styles.arrowReasonBox}>&lt;</button></div>
                    <div className={styles.eachReason}>
                    <img className={styles.reasonImg} src='/images/reason1.png'></img>
                       <p className={styles.reasonText}>Eco-Friendly and Sustainable Driving</p>
                    </div>
                    <div className={styles.eachReason}>
                    <img className={styles.reasonImg} src='/images/reason2.png'></img>
                        <p className={styles.reasonText}>Cutting-Edge Technology and Innovation</p>
                    </div>
                    <div className={styles.eachReason}>
                    <img className={styles.reasonImg} src='/images/reason3.png'></img>
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