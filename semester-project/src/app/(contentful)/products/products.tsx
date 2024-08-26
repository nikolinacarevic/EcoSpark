"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './products.module.css';
import { fetchCars } from '../../../../lib/contentfulClient'; // Uvezi funkciju iz lib/contentfulClient

interface Car {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  image1?: string;
  image2?: string;
  image3?: string;
  link: string;
  details: string;
  description: string;
}

export default function Products() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const loadCars = async () => {
        console.log("ej")
      const fetchedCars = await fetchCars();
      setCars(fetchedCars.map((car) => ({
        id: car.sys.id,
        name: car.carName,
        brand: car.brand,
        price: car.price,
        image: car.image.url,
        image1: car.image1?.url,
        image2: car.image2?.url,
        image3: car.image3?.url,
        link: car.link,
        details: car.details,
        description: car.description,
      })));
    };
    loadCars();
  }, []);

  const filterCars = (brand: string) => {
    setFilter(brand);
  };

  const filteredProducts = filter === 'all'
    ? cars
    : cars.filter(car => car.brand.toLowerCase() === filter);

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
          {filteredProducts.map(car => (
            <li className={styles.CarContainer} key={car.id}>
              <Link href={`/products/${car.id}`}>
                <div className={styles.CarCard}>
                  <Image
                    className={styles.CarImage}
                    src={car.image}
                    alt={car.name}
                    width={500}  
                    height={300} 
                  />
                  <div className={styles.carText}>
                    <p className={styles.CarName}>{car.name}</p>
                    <p className={styles.CarPrice}>From {car.price} €</p>
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
