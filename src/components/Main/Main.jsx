import React from 'react';
import styles from './Main.module.css';
import AboutMeImg from '../../assets/undraw_moonlight_5ksn (1).svg';
import ProjectImg from '../../assets/undraw_project_completed_w0oq.svg';
import ContactImg from '../../assets/undraw_contact_us_15o2.svg';
import { motion } from 'framer-motion';
import AboutMeText from '../../assets/About Me (1).svg';
import ContactText from '../../assets/Contact (2).svg';
import ProjectsText from '../../assets/Projects (1).svg';
const Main = () => {
  return (
    <main className={styles.container}>
      <section className={styles.leftCl}>
        <div className={styles.contentText}>
          <h4>
            Hello
            <br /> I'm Hamed. A freelance Front-End Developer. I specialize in
            creating interactive experiences using React.
          </h4>
          <p>Feel free to contact me if you have any questions.</p>
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
          <img src={AboutMeText} alt="" className={styles.cardTitle} />
          <img src={AboutMeImg} alt="" />
        </motion.div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0, transition: { duration: 2 } }}
          className={styles.cardMid}
        >
          <img src={ProjectsText} alt="" className={styles.cardTitle} />
          <img src={ProjectImg} alt="" />
        </motion.div>
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0, transition: { duration: 2 } }}
          className={styles.cardBottom}
        >
          <img src={ContactText} className={styles.cardTitle} alt="" />
          <img src={ContactImg} alt="" />
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Main;
