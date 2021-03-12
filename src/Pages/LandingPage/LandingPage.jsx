import React from 'react';
import { motion } from 'framer-motion';
import bluePlanet from '../../assets/blueplanet.png';
import purplePlanet from '../../assets/purpleplanet.png';
import bg from '../../assets/bg.png';
import lava from '../../assets/lava.png';
import mobBg from '../../assets/mobbg.png';
import { Link } from 'react-router-dom';
import {
  Section,
  Container,
  ColumnLeft,
  ColumnRight,
  Button,
  FullSizeBG,
  Image,
  BgImage,
  MobBgImg,
} from './styles';

const LandingPage = () => {
  return (
    <>
      <Section>
        <Container>
          <ColumnLeft>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              Hi this is Hamed
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              Welcome <br />
              to my portfolio
            </motion.p>

            <Link to="/homepage">
              <Button
                whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.95,
                  backgroundColor: '#67F6E7',
                  border: 'none',
                  color: '#000',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2 } }}
              >
                Show Me More
              </Button>
            </Link>
            <motion.h5
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 7 }}
            >
              <span>Disclaimer:</span>Some of the features of this site is
              developed based on the latest updates of Chrome and may not work
              with other browsers or older versions. Please use the latest
              version of Chrome for best possible experience.{' '}
              <a href="https://www.google.com/chrome/" target="_blank">
                Click here
              </a>{' '}
              to download the latest version.
            </motion.h5>
          </ColumnLeft>
          <BgImage src={bg} alt="bg" />
          <FullSizeBG
            src={lava}
            alt="FullBg"
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 4 } }}
          />
          <MobBgImg
            src={mobBg}
            alt="mobBg"
            initial={{ opacity: 0, y: 600 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 5 } }}
          />

          <ColumnRight>
            <Image
              src={bluePlanet}
              alt="planet"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
              whileTap={{ scale: 1.2 }}
              drag={true}
              dragConstraints={{ left: 50, right: 30, top: 30, bottom: 50 }}
            />
            <Image
              src={purplePlanet}
              alt="planet"
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 3 } }}
              whileTap={{ scale: 1.2 }}
              drag={true}
              dragConstraints={{ left: 50, right: 30, top: 30, bottom: 50 }}
            />
          </ColumnRight>
        </Container>
      </Section>
    </>
  );
};

export default LandingPage;
