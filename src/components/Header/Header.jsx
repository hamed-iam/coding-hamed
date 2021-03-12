import React from 'react';
import {} from './styles';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.navbar}>
        <div className={styles.logo}>
          {/* <img src={logo} alt="logo" /> */}
          <Link to="/homepage">
            <h3> Hamed Ghazali</h3>
          </Link>
        </div>

        <ul className={styles.menu}>
          <Link to="/homepage/about">
            <li>About me</li>
          </Link>

          <Link to="/homepage/projects">
            <li>Projects</li>
          </Link>
          <Link to="/homepage/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </motion.header>
  );
};

export default Header;
