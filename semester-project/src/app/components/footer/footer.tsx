import React from 'react';
import styles from "./footer.module.css";

function Footer () {
    return (
        <>
        <div id={styles.footerContainer}>
            <div id={styles.footerFirst}>
                <div id={styles.mediaContainer}>
                    <p id={styles.mediaTitle}>EcoSpark</p>
                </div>
                <div id={styles.infoRow}>
                    <div className={styles.infoBox}>
                        <p className={styles.infoTitle}>SITEMAP</p>
                        <div className={styles.infoList}>
                            <p>Home</p>
                            <p>About us</p>
                            <p>Our products</p>
                            <p>Contacts</p>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <p className={styles.infoTitle}>CONTACT</p>
                        <div className={styles.infoList}>
                            <p>Privacy policy</p>
                            <p>Cookies</p>
                            <p>Data privacy notice</p>
                            <p>Terms and condition</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id={styles.footerLast}>
                <p id={styles.lastText}>Copyright @ 2023 FESB. All rights reserved</p>
            </div>
            
        </div>
        </>
    )
}

export default Footer;