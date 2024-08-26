'use client';  // Ensure this is at the top

import React, { useEffect, useState } from "react";
import styles from './header.module.css';
import Link from "next/link";
import { usePathname } from 'next/navigation'; 

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    function navChange() {
        setShowNav(!showNav);
    }

    return (
        <div id={styles.header}>
            <div className={styles.logoNav}>
                <Link href="/">
                    <div className={styles.logoContainer}>
                        <svg id={styles.logoSvg} width="160" height="96" viewBox="0 0 160 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* SVG paths */}
                        </svg>
                        <h2 id={styles.logoTitle}>EcoSpark</h2>
                    </div>
                </Link>
                {isMobile ? (
                    <button id={styles.dropButton} onClick={navChange}>
                        <img src='/images/dropdown.png' alt="Dropdown menu" />
                    </button>
                ) : null}
            </div>
            {(showNav || !isMobile) ? (
                <div className={styles.navContainer}>
                    <Link href="/" passHref>
                        <button className={`${styles.navButton} ${pathname === '/' ? styles.active : ''}`}>
                            Home
                        </button>
                    </Link>
                    <Link href="/about" passHref>
                        <button className={`${styles.navButton} ${pathname === '/about' ? styles.active : ''}`}>
                            About
                        </button>
                    </Link>
                    <Link href="/products" passHref>
                        <button className={`${styles.navButton} ${pathname === '/products' ? styles.active : ''}`}>
                            Products
                        </button>
                    </Link>
                    <Link href="/contacts" passHref>
                        <button className={`${styles.navButton} ${pathname === '/contacts' ? styles.active : ''}`}>
                            Contacts
                        </button>
                    </Link>
                </div>
            ) : null}
        </div>
    );
}

export default Header;
