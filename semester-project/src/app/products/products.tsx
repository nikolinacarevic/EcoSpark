"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './products.module.css'
import { products, Car } from './cars';
import Cars from './cars';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Link from 'next/link';
import { createClient, Entry } from 'contentful';
import { error } from 'console';

export default function Products() {
    type CarEntry = Entry[];
    const [cars, setCars] = useState<CarEntry>([])

    const client  = createClient({space: "6ufbm13204ba", accessToken: "eJoEhbMMi_XEcuklMASvT_lpgd-l5FbyEz_gE55T49A"})

    useEffect(()=> {
        const getAllEntries = async () => {
            try {
                await client.getEntries().then((entries) => {
                    console.log(entries)
                    setCars(entries.items)
                    console.log(cars)
                })
            } catch {
                console.log(error)

            }
        }
        getAllEntries()
    }, [])

    const [filter, setFilter] = useState('all');

    const filterCars = (brand: string) => {
        setFilter(brand);
    };

    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.brand.toLowerCase() === filter);

    return (
        <>
            <div className={styles.TextContainer}>
                <div id={styles.TitleContainer}>Our Models</div>
                <p id={styles.SmallText}>Explore our range of eco-friendly vehicles, tailored to your lifestyle.</p>
            </div>

            <div id={styles.FilterContainer}>
                <button className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`} onClick={() => filterCars('all')}>All</button>
                <button className={`${styles.filterButton} ${filter === 'mercedes' ? styles.active : ''}`} onClick={() => filterCars('mercedes')}>Mercedes</button>
                <button className={`${styles.filterButton} ${filter === 'škoda' ? styles.active : ''}`} onClick={() => filterCars('škoda')}>Škoda</button>
                <button className={`${styles.filterButton} ${filter === 'volkswagen' ? styles.active : ''}`} onClick={() => filterCars('volkswagen')}>Volkswagen</button>
                <button className={`${styles.filterButton} ${filter === 'bmw' ? styles.active : ''}`} onClick={() => filterCars('bmw')}>BMW</button>
                <button className={`${styles.filterButton} ${filter === 'tesla' ? styles.active : ''}`} onClick={() => filterCars('tesla')}>Tesla</button>
            </div>

            <div id={styles.BoxContainer}>
                <ul className={styles.productList}>
                    {filteredProducts.map(product => (
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
    );
}
