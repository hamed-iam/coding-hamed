import React from 'react';
import {} from './styles';
import styles from './Header.module.css';
import logo from '../../assets/backgrounds/Frame 1.png';
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
          <Link to="/homepage" className={styles.link}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <ul className={styles.menu}>
          <Link to="/homepage/about" className={styles.link}>
            <li>About</li>
          </Link>

          <Link to="/homepage/projects" className={styles.link}>
            <li>Projects</li>
          </Link>
          <Link to="/homepage/contact" className={styles.link}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </motion.header>
  );
};

export default Header;
