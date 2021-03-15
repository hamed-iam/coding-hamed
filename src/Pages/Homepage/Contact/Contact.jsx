import React from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';

import githubLogo from '../../../assets/contacts/iconmonstr-github-1-96.png';
import instaLogo from '../../../assets/contacts/iconmonstr-instagram-11-72.png';

const Contact = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <motion.article
          initial={{ x: 500 }}
          animate={{ x: 0, transition: { duration: 2 } }}
          whileHover={{ scale: 1.2 }}
          className={styles.email}
        >
          <h2>example@gmail.com</h2>
          <h4>tel : 3216541</h4>
        </motion.article>
        <motion.article
          initial={{ x: -500 }}
          animate={{ x: 0, transition: { duration: 2 } }}
          whileHover={{ scale: 1.2 }}
          className={styles.insta}
        >
          <div className={styles.instaLogo}>
            <img src={instaLogo} alt="logo" />
          </div>
        </motion.article>
        <motion.article
          initial={{ y: 400 }}
          animate={{ y: 0, transition: { duration: 2 } }}
          whileHover={{ scale: 1.2 }}
          className={styles.github}
        >
          <img src={githubLogo} alt="logo" />
        </motion.article>
      </section>
    </main>
  );
};

export default Contact;
