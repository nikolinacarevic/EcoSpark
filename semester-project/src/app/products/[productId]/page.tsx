"use client";

import { useState } from 'react';
import Image from 'next/image';
import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import styles from '../car-details.module.css';
import { products } from '../cars';

export default function CarDetails({
  params,
}: {
  params: { productId: string }
}) {
  const productId = params.productId;
  const car = products.find(car => car.id === parseInt(productId));

  if (!car) {
    return <div>Automobil nije pronađen</div>;
  }

  const [selectedImage, setSelectedImage] = useState<string>(car.image1);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Header />
      <div className={styles.paddingContainer}></div>
      <div className={styles.container}>
        <div className={styles.imageGallery}>
          <div className={styles.mainImageWrapper}>
            <Image
              src={selectedImage}
              alt="Odabrani automobil"
              className={styles.mainImage}
              width={600}
              height={400}
            />
          </div>
          <div className={styles.thumbnailGallery}>
            <div className={styles.thumbnailWrapper}>
              <Image
                src={car.image1}
                alt={`${car.name} Slika 1`}
                className={styles.thumbnail}
                width={180}
                height={120}
                onClick={() => handleImageClick(car.image1)}
              />
            </div>
            <div className={styles.thumbnailWrapper}>
              <Image
                src={car.image2}
                alt={`${car.name} Slika 2`}
                className={styles.thumbnail}
                width={180}
                height={120}
                onClick={() => handleImageClick(car.image2)}
              />
            </div>
            <div className={styles.thumbnailWrapper}>
              <Image
                src={car.image3}
                alt={`${car.name} Slika 3`}
                className={styles.thumbnail}
                width={180}
                height={120}
                onClick={() => handleImageClick(car.image3)}
              />
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <h1>{car.name}</h1>
          <p className={styles.price}>Price: {car.price}</p>
          <p className={styles.description}>{car.description}</p>
          <ul className={styles.detailsList}>
            {car.details.split('\n').map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <button className={styles.buyButton}>Buy Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
}