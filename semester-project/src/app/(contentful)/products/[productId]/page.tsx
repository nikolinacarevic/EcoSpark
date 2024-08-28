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
  const [showTestDriveModal, setShowTestDriveModal] = useState<boolean>(false);
  const [testDriveData, setTestDriveData] = useState({ date: '', time: '', contact: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleTestDriveClick = () => {
    setShowTestDriveModal(true);
  };

  const handleTestDriveSubmit = () => {
    setSubmitted(true);
    setShowTestDriveModal(false);

  };

  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  const [paymentData, setPaymentData] = useState({ cardNumber: '', name: '', address: '' });
  const [purchaseCompleted, setPurchaseCompleted] = useState<boolean>(false);

  const handleBuyNowClick = () => {
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = () => {
    setPurchaseCompleted(true);
    setShowPaymentModal(false);
    // Ovdje možete dodati logiku za slanje podataka na backend ako je potrebno
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
            <div className={styles.buttons}>
              <button className={styles.testDriveButton} onClick={handleTestDriveClick}>Test Drive</button>
              <button className={styles.buyButton} onClick={handleBuyNowClick}>Buy Now</button>
            </div>
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

      {showTestDriveModal && (
        <div className={styles.modal}>
          <h2>Schedule a test drive</h2>
          <input
            type="date"
            value={testDriveData.date}
            onChange={(e) => setTestDriveData({ ...testDriveData, date: e.target.value })}
          />
          <input
            type="time"
            value={testDriveData.time}
            onChange={(e) => setTestDriveData({ ...testDriveData, time: e.target.value })}
          />
          <input
            type="text"
            placeholder="Your contact number"
            value={testDriveData.contact}
            onChange={(e) => setTestDriveData({ ...testDriveData, contact: e.target.value })}
          />
          <button onClick={handleTestDriveSubmit}>Podnesi</button>
        </div>
      )}

      {submitted && <div className={styles.thankYouMessage}>Thank you, we will contact you shortly.</div>}

      {showPaymentModal && (
        <div className={styles.modal}>
          <h2>Enter Payment Details</h2>
          <input
            type="text"
            placeholder="Card Number"
            value={paymentData.cardNumber}
            onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
          />
          <input
            type="text"
            placeholder="Name on Card"
            value={paymentData.name}
            onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Billing Address"
            value={paymentData.address}
            onChange={(e) => setPaymentData({ ...paymentData, address: e.target.value })}
          />
          <button onClick={handlePaymentSubmit}>Complete Purchase</button>
        </div>
      )}

      {purchaseCompleted && <div className={styles.thankYouMessage}>Purchase successful! Thank you for your order.</div>}

      <Footer />
    </>
  );
}