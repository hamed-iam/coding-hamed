import React from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import hamedIg from '../../../assets/contacts/hamedfmainpage22 1.png';
import githubLogo from '../../../assets/contacts/iconmonstr-github-1-96.png';
import instaLogo from '../../../assets/contacts/iconmonstr-instagram-11-72.png';

const Contact = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <motion.article
          initial={{ x: -500 }}
          animate={{ x: 0, transition: { duration: 0.8 } }}
          whileHover={{ scale: 1.2 }}
          className={styles.email}
        >
          <h2>example@gmail.com</h2>
          <h4>tel : 3216541</h4>
        </motion.article>
        <motion.article
          initial={{ x: -600 }}
          animate={{ x: 0, transition: { duration: 0.8 } }}
          whileHover={{ scale: 1.2 }}
          className={styles.insta}
        >
          <div className={styles.instaLeftSide}>
            <img src={hamedIg} alt="ig" />
            <h5>Hamed_iam</h5>
          </div>
          <div className={styles.instaRightSide}>
            <img src={instaLogo} alt="logo" />
          </div>
        </motion.article>
        <motion.article
          initial={{ x: -700 }}
          animate={{ x: 0, transition: { duration: 0.8 } }}
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
