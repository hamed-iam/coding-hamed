import React from 'react';
import styles from './Main.module.css';
import AboutMeImg from '../../assets/undraw_moonlight_5ksn (1).svg';
import ProjectImg from '../../assets/undraw_project_completed_w0oq.svg';
import ContactImg from '../../assets/undraw_contact_us_15o2.svg';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <main className={styles.container}>
      <section className={styles.leftCl}>
        <div className={styles.contentText}>
          <h1>
            I'm a React developer, here you can find all the information you
            need about me. If you have any question feel free to contact me.
          </h1>
          <p>just some text for now</p>
        </div>
        <div className={styles.joke}>the jokes wil be here</div>
      </section>

      <motion.section
        initial={{ y: 1000 }}
        animate={{ y: 0, transition: { duration: 1 } }}
        className={styles.rightCl}
      >
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0, transition: { duration: 2 } }}
          className={styles.cardTop}
        >
          <h2>About Me</h2>
          <img src={AboutMeImg} alt="" />
        </motion.div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0, transition: { duration: 2 } }}
          className={styles.cardMid}
        >
          <h2>Projects</h2>
          <img src={ProjectImg} alt="" />
        </motion.div>
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0, transition: { duration: 2 } }}
          className={styles.cardBottom}
        >
          <h2>Contact</h2>
          <img src={ContactImg} alt="" />
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Main;
