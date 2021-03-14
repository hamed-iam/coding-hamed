import React from 'react';
import Header from '../../components/Header/Header';
import AboutMe from '../Homepage/AboutMe/AboutMe';
import styles from './Homepage.module.css';
import {} from './styles';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Main from '../../components/Main/Main';
import mobCover from '../../assets/backgrounds/pexels-greg-contreras-3177812.jpg';
import homeCover from '../../assets/backgrounds/pexels-sebastiaan-stam-1480690.jpg';
const Homepage = () => {
  return (
    <>
      <main className={styles.main}>
        {/* <img src={homeCover} className={styles.homeCover} alt="" /> */}
        <Router>
          <Header />
          <Route exact path="/homepage">
            <Main />
          </Route>

          <Switch>
            <Route exact path="/homepage/about">
              <AboutMe />
            </Route>
            <Route exact path="/homepage/projects">
              <Projects />
            </Route>
            <Route exact path="/homepage/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
        {/* <img src={mobCover} className={styles.mobCover} alt="" /> */}
      </main>
    </>
  );
};

export default Homepage;
