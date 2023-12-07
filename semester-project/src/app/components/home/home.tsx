import React from 'react';
import styles from "./home.module.css";


function Home() {
    return (
        <>
            <div className={styles.heroSection}>
                {/*<div className={styles.shadow1}></div>
                <div className={styles.shadow2}></div>*/}
                <div className={styles.logoContainer}>
                    <svg id={styles.logoSvg} width="160" height="96" viewBox="0 0 160 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M155.163 45.4669C155.037 45.2333 154.922 45.0198 154.828 44.8346L154.749 44.6936C154.179 43.7188 153.796 41.7613 153.724 39.4533C153.277 25.2873 149.356 19.2294 145.717 14.6577C145.547 14.4442 145.551 14.0978 145.724 13.103C145.746 12.9821 145.764 12.8734 145.782 12.7686L145.836 12.4424C146.323 9.50204 146.33 9.42954 146.344 9.31273C146.644 6.77517 144.999 4.93846 143.199 4.43497C124.219 -0.720711 97.4185 0.0204186 96.2534 0.0566694C87.1673 0.455429 78.1137 1.98199 72.0286 4.13691C66.7695 6.00181 47.2844 13.4091 17.3568 30.5356C9.26985 35.1636 8.18053 41.9224 7.81982 44.1458C7.79457 44.3029 7.77654 44.4318 7.7549 44.5285L7.69718 44.7903C7.46633 45.8657 7.2463 46.8767 5.82513 48.7376C-3.25377 60.6037 0.76086 76.977 1.6554 80.1389L2.26499 82.2898H13.2051C16.2242 90.3335 23.3445 95.9966 31.6334 95.9966C42.6457 95.9966 51.6056 85.9914 51.6056 73.6943C51.6056 61.3972 42.6457 51.3919 31.6334 51.3919C20.6212 51.3919 11.6613 61.3972 11.6613 73.6943C11.6613 74.516 11.7046 75.3256 11.7803 76.1231H6.39504C5.99106 74.1978 5.53296 71.2977 5.51854 67.9989C5.49329 61.808 7.00824 56.6765 10.0201 52.7373C12.3034 49.7526 12.7615 47.6339 13.0644 46.2282L13.1149 45.9986C13.1582 45.8053 13.2015 45.5435 13.252 45.2333C13.5658 43.2919 14.2151 39.2519 19.8709 36.0175C49.4197 19.1085 68.5406 11.8342 73.6951 10.0096C79.3364 8.01172 87.8491 6.58988 96.4338 6.21126C96.6971 6.20321 122.419 5.4943 140.613 10.078C140.555 10.4325 140.486 10.8473 140.407 11.3146L140.306 11.9067C140.079 13.1875 139.549 16.1923 141.59 18.75C144.858 22.8504 147.823 27.5389 148.206 39.6668C148.281 42.1037 148.671 45.5153 150.081 47.9844C150.182 48.1817 150.301 48.3992 150.431 48.6409C151.802 51.1865 154.651 56.4832 154.471 65.0666C154.431 66.9557 154.092 69.8839 153.612 72.6511H150.68C150.189 60.8373 141.432 51.396 130.733 51.396C119.721 51.396 110.761 61.4012 110.761 73.6983C110.761 85.9954 119.721 96.0007 130.733 96.0007C140.169 96.0007 148.09 88.6538 150.168 78.8177H158.02L158.525 76.4534C159.34 72.647 159.928 68.1318 159.99 65.2156C160.21 54.8398 156.675 48.2703 155.163 45.4669ZM31.6334 57.5627C39.6014 57.5627 46.0832 64.8007 46.0832 73.6983C46.0832 82.5959 39.6014 89.834 31.6334 89.834C23.6655 89.834 17.1837 82.5959 17.1837 73.6983C17.1837 64.8007 23.6655 57.5627 31.6334 57.5627ZM130.733 89.838C122.765 89.838 116.283 82.5999 116.283 73.7023C116.283 64.8048 122.765 57.5667 130.733 57.5667C138.701 57.5667 145.183 64.8048 145.183 73.7023C145.186 82.5999 138.705 89.838 130.733 89.838Z" fill="#818174" />
                        <path d="M99.8028 39.6426H91.6581L98.3672 18.8749H77.872L70.391 44.0371C69.9005 46.1839 71.1377 48.218 72.934 48.218H78.6042L70.3369 84.485C69.9762 86.076 71.6246 87.0064 72.4723 85.6893L100.672 42.0433C101.318 41.0524 100.809 39.6467 99.8028 39.6426Z" fill="#F58220" />
                        <path d="M37.8484 76.7837H25.4186C23.8928 76.7837 22.6592 75.4021 22.6592 73.7024C22.6592 71.9986 23.8964 70.621 25.4186 70.621H37.8484C39.3742 70.621 40.6078 72.0026 40.6078 73.7024C40.6078 75.4021 39.3706 76.7837 37.8484 76.7837Z" fill="#F58220" />
                        <path d="M136.948 70.617H133.492V66.7583C133.492 65.0545 132.255 63.677 130.733 63.677C129.207 63.677 127.974 65.0586 127.974 66.7583V70.617H124.518C122.992 70.617 121.759 71.9986 121.759 73.6984C121.759 75.4022 122.996 76.7797 124.518 76.7797H127.974V80.6384C127.974 82.3422 129.211 83.7197 130.733 83.7197C132.259 83.7197 133.492 82.3382 133.492 80.6384V76.7797H136.948C138.474 76.7797 139.707 75.3981 139.707 73.6984C139.707 71.9986 138.474 70.617 136.948 70.617Z" fill="#F58220" />
                    </svg>
                    <h2 id={styles.logoTitle}>EcoSpark</h2>
                </div>
                <div className={styles.navContainer}>
                    <button className={styles.navButton}>Home</button>
                    <button className={styles.navButton}>About</button>
                    <button className={styles.navButton}>Products</button>
                    <button className={styles.navButton}>Contacts</button>
                </div>

                <div className={styles.introContainer}>
                    <h1 id={styles.introTitle}>EcoSpark Automotive</h1>
                    <p id={styles.introText}>Join us in the journey towards a cleaner, more sustainable future. We're driven by a vision of cleaner, smarter, and more efficient transportation.</p>
                </div>

                <img id={styles.mainImage} src='/images/maincar.png'></img>
            </div>
            {/*<div className={styles.shadow3}></div>*/}
            <div id={styles.carsContainer}>
                <p id={styles.carsText}>Enjoy vehicles at  best prices!</p>
                <div id={styles.carRow}>
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
                    <img className={styles.carImage} src='/images/car3.png'></img>
                        <p className={styles.carName}>Mercedes-Benz EQS</p>
                        <button className={styles.carButton}>Buy</button>
                    </div>
                </div>
            </div>
            <div id={styles.bookContainer}>
                <div id={styles.bookTitle1}>
                    <h3>Try out our cars</h3>
                    <p>Book a test drive!</p>
                </div>
                <button id={styles.bookButton}>BOOK NOW</button>
            </div>
            <div id={styles.reasonsContainer}>
                <p id={styles.reasonTitle}>Why EcoSpark?</p>
                <div id={styles.reasonRow}>
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
                </div>
            </div>
        </>
    );
}

export default Home;