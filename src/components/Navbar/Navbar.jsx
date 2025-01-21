import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/hiragana" className={styles.link}>
                Hiragana
            </Link>
            <Link to="/katakana" className={styles.link}>
                Katakana
            </Link>
        </nav>
    );
};

export default Navbar;
