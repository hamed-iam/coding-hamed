import React from 'react';
import styles from './AboutMe.module.css';
import hamed from '../../../assets/about/aboutHamedImg.png';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <main className={styles.main}>
      <article className={styles.leftSide}>
        <motion.img whileHover={{ scale: 1.2 }} src={hamed} alt="hamed" />
        <h3>Hamed Ghazali</h3>
      </article>
      <article className={styles.rightSide}>
        <h4>Hi</h4>
        <p>
          I'm a freelance React developer based in Tehran with 1.5 year of
          experience and 2 years experience in front-end development. I
          specialize in creating interactive and responsive front-end projects.
        </p>
      </article>
    </main>
  );
};

export default AboutMe;
