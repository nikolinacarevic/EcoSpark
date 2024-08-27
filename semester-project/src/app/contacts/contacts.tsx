"use client"

import Image from 'next/image';
import { useState, useRef } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './contacts.module.css';

export default function Contacts() {
  const [fileName, setFileName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);  // Dodano stanje za modal
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();  // Sprječava ponovno učitavanje stranice
    setIsModalOpen(true);  // Otvara modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);  // Zatvara modal
  };

  return (
    <div className={styles.contactsContainer}>
      <div className={styles.contactsText}>
        <h1>Contact Us</h1>
      </div>
      <div id={styles.infoBox}>
        <div className={styles.oneInfo}>
          <img className={styles.mailImage} src='/images/mail.png' alt="Mail icon" />
          <div>
            <p className={styles.boxText}>info@ecospark.hr</p>
            <p className={styles.boxText}>hiring@ecospark.hr</p>
          </div>
        </div>
        <div className={styles.oneInfoMiddle}>
          <img className={styles.callImage} src='/images/call.png' alt="Call icon" />
          <div>
            <p className={styles.boxText}>021/ 123 456 </p>
            <p className={styles.boxText}>+38598 7654 321</p>
          </div>
        </div>
        <div className={styles.oneInfo}>
          <img className={styles.locationImage} src='/images/location.png' alt="Location icon" />
          <div>
            <p className={styles.boxText}>Put Mate Motike 32</p>
            <p className={styles.boxText}>21201, Labin</p>
          </div>
        </div>
      </div>
      <div className={styles.contactsText}>
        <p>We're thrilled to connect with you! Whether you have questions, suggestions, or just want to chat about the future of electric vehicles, we're here and ready to assist.</p>
      </div>
      <div id={styles.formBox}>
        <h1>Join Our Team!</h1>
        <form id={styles.inputForm} onSubmit={handleSubmit}>
          <input type='text' placeholder='Name' required />
          <input type='text' placeholder='Surname' required />
          <input type='email' placeholder='E-mail' required />
          <div className={styles.buttonBox}>
            <input 
              type="file" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              onChange={handleFileChange} 
            />
            <button 
              id={styles.formButton} 
              type="button" 
              onClick={handleButtonClick}
            >
              +
            </button>
            <p>Upload Your Resume</p>
          </div>
          {fileName && <p className={styles.fileName}>{fileName}</p>}
          <button id={styles.submitButton} type="submit">Apply</button>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Thank you for applying!</h2>
            <p>We have received your application and will get back to you soon.</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}