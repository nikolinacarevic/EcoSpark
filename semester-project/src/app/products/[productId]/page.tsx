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
  const [activeTab, setActiveTab] = useState<string>('description');

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const Description = ({ description }: { description: string }) => {
    return (
      <div className={styles.description}>
        {description.split('. ').map((sentence, index) => (
          <p key={index}>{sentence.trim()}.</p>
        ))}
      </div>
    );
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
            <div
              className={`${styles.thumbnailWrapper} ${selectedImage === car.image1 ? styles.selectedThumbnail : ''}`}
              onClick={() => handleImageClick(car.image1)}
            >
              <Image
                src={car.image1}
                alt={`${car.name} Slika 1`}
                className={styles.thumbnail}
                width={180}
                height={120}
              />
            </div>
            <div
              className={`${styles.thumbnailWrapper} ${selectedImage === car.image2 ? styles.selectedThumbnail : ''}`}
              onClick={() => handleImageClick(car.image2)}
            >
              <Image
                src={car.image2}
                alt={`${car.name} Slika 2`}
                className={styles.thumbnail}
                width={180}
                height={120}
              />
            </div>
            <div
              className={`${styles.thumbnailWrapper} ${selectedImage === car.image3 ? styles.selectedThumbnail : ''}`}
              onClick={() => handleImageClick(car.image3)}
            >
              <Image
                src={car.image3}
                alt={`${car.name} Slika 3`}
                className={styles.thumbnail}
                width={180}
                height={120}
              />
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <h1>{car.name}</h1>
          <p className={styles.price}>Price: {car.price}</p>
          <div className={styles.buttons}>
            <button className={styles.testDriveButton}>Test Drive</button>
            <button className={styles.buyButton}>Buy Now</button>
          </div>
          <div className={styles.tabs}>
            <ul className={styles.tabList}>
              <li
                className={`${styles.tab} ${activeTab === 'description' ? styles.active : ''}`}
                onClick={() => handleTabClick('description')}
              >
                Description
              </li>
              <li
                className={`${styles.tab} ${activeTab === 'specifications' ? styles.active : ''}`}
                onClick={() => handleTabClick('specifications')}
              >
                Specifications
              </li>
              <li
                className={`${styles.tab} ${activeTab === 'reviews' ? styles.active : ''}`}
                onClick={() => handleTabClick('reviews')}
              >
                Reviews
              </li>
            </ul>
            <div className={`${styles.tabPane} ${activeTab === 'description' ? styles.active : ''}`}>
              <Description description={car.description} />
            </div>
            <div className={`${styles.tabPane} ${activeTab === 'specifications' ? styles.active : ''}`}>
              <ul className={styles.detailsList}>
                {car.details.split('\n').map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className={`${styles.tabPane} ${activeTab === 'reviews' ? styles.active : ''}`}>
              <p className={styles.reviews}>No reviews available.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
