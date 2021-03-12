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

const Homepage = () => {
  return (
    <>
      <main className={styles.main}>
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
      </main>
    </>
  );
};

export default Homepage;
