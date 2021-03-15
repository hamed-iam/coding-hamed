import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Main.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import hamedCover from '../../assets/backgrounds/HamedCOVER.png';
import cx from 'classnames';

const url = 'https://v2.jokeapi.dev/joke/Programming';

const Main = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        console.log(data.delivery);
        console.log(data.setup);
        setJokes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className={styles.container}>
      <section className={styles.leftCl}>
        <div className={styles.contentText}>
          <motion.img
            src={hamedCover}
            alt="cover"
            className={styles.hamedCover}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 7 } }}
          />
          <h3>
            <span>IS</span> CODING ...
          </h3>
        </div>
        <div className={styles.joke}>
          {jokes && jokes.setup !== undefined && (
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0, transition: { duration: 2 } }}
              className={cx(styles.jokesText)}
            >
              <h2 className={styles.jokesContent}>Some Random Joke for you</h2>
              <h4 className={styles.jokesContent}>{jokes.setup}</h4>
              <h5 className={styles.jokesContent}>{jokes.delivery}</h5>
            </motion.div>
          )}
        </div>
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
          <Link to="/homepage/about" className={styles.link}>
            <h4 className={styles.cardText}>
              About <span>Me</span>
            </h4>
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0, transition: { duration: 2 } }}
          className={styles.cardMid}
        >
          <Link to="/homepage/projects" className={styles.link}>
            <h4 className={styles.cardText}>
              <span>Pro</span>jects
            </h4>
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0, transition: { duration: 2 } }}
          className={styles.cardBottom}
        >
          <Link to="/homepage/contact" className={styles.link}>
            <h4 className={styles.cardText}>
              C<span>o</span>ntact
            </h4>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Main;
