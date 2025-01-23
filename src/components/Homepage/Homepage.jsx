import React, { useEffect } from 'react';
import styles from './Homepage.module.css';

const Homepage = () => {
  useEffect(() => {
    // Function to set height to 100vh dynamically
    const setHeight = () => {
      const vh = window.innerHeight * 0.01; // Calculate 1% of the viewport height
      document.documentElement.style.setProperty('--vh', `${vh}px`); // Set custom CSS variable
    };

    setHeight(); // Set height immediately on load
    window.addEventListener('resize', setHeight); // Update on resize (if address bar hides, etc.)

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', setHeight);
  }, []);

  return (
    <div className={styles.homepageContainer}>
      <h1 className={styles.homepageTitle}>Welcome to Kana Learning!</h1>
      <p className={styles.homepageText}>
   <strong>Click on the "Hiragana" or "Katakana" link in the navigation bar to get started! ⬆️</strong>
      </p>
      <p className={styles.homepageText}>
        I plan to make more additions in the future including user accounts to track your learning process and adding dakuon, handakuon, youon & youon with dakuten and handakuten | sokuon & chouon
      </p>
    </div>
  );
};

export default Homepage;
