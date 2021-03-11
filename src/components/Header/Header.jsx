import React from 'react';
import {} from './styles';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        <ul className={styles.menu}>
          <li>Home</li>
          <li>About me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </motion.header>
  );
};

export default Header;
