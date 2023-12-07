import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import styles from './components/header/header.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoSpark',
  description: 'E-cars webshop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className={styles.navContainer}>
            <Link href="/">
                <p className={styles.navButton}>Home</p>
            </Link>
            <Link href="./about">
                <p className={styles.navButton}>About</p>
            </Link>
            <Link href="./products">
                <p className={styles.navButton}>Products</p>
            </Link>
            <Link href="./contacts">
                <p className={styles.navButton}>Contacts</p>
            </Link>
        </div>
        {children}</body>
    </html>
  )
}
