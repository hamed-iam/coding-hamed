import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import bluePlanet from '../../assets/blueplanet.png';
import purplePlanet from '../../assets/purpleplanet.png';
import bg from '../../assets/bg.png';

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw-1300px) / 2);
  color: #fff;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;
const Button = styled(motion.button)`
  color: #fff;
  font-size: 1rem;
  border: 2px solid #fff;
  background: transparent;
  padding: 1rem 3rem;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Image = styled.img`
  position: absolute;
  max-height: 250px;
  max-width: 250px;
  height: 100%;
  width: 100%;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 10px;
    left: 20px;
  }
`;

const BgImage = styled.img`
  position: absolute;
  max-height: fit-content;
  height: 100%;
  right: 0;
  top: 0;
  transform: scaleX(-1);
  @media screen and (max-width: 760px) {
    visibility: hidden;
  }
`;

const LandingPage = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Hi this is Hamed
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            Welcome to my portfolio
          </motion.p>

          <Button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9, backgroundColor: '#67F6E7' }}
          >
            Show Me More
          </Button>
        </ColumnLeft>
        <BgImage src={bg} alt="bg" />

        <ColumnRight>
          <Image src={bluePlanet} alt="planet" />
          <Image src={purplePlanet} alt="planet" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default LandingPage;
