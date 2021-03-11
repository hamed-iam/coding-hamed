import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
  transition: 1s ease;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw-1300px) / 2);
  color: #fff;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
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
  h5 {
    margin-top: 40px;
    font-weight: 300;
  }
  span {
    color: red;
  }
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 759px) {
    padding: 0;
    h1 {
      font-size: 1.8rem;
      margin: 50px 20px;
    }
    p {
      margin: 20px 20px;
      font-size: 2.8rem;
      font-weight: 800;
    }
    h5 {
      margin: 20px 20px;
    }
  }
`;
export const Button = styled(motion.button)`
  color: #fff;
  font-size: 1rem;
  border: 2px solid #fff;
  background: transparent;
  padding: 1rem 3rem;
  outline: none;
  border-radius: 4px;
  cursor: pointer;

  @media screen and (max-width: 759px) {
    margin: 20px 20px;
  }
`;
export const FullSizeBG = styled(motion.img)`
  position: absolute;
  top: 5px;
  right: 15px;
  max-width: 700px;

  @media screen and (max-width: 971px) {
    display: none;
  }
  @media screen and(max-width:2400px) {
    display: none;
  }
`;
export const Image = styled(motion.img)`
  position: absolute;
  max-height: 250px;
  max-width: 250px;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 760px) {
    display: none;
  }
  @media screen and (min-width: 970px) {
    display: none;
  }
`;

export const ColumnRight = styled.div`
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

export const BgImage = styled.img`
  position: absolute;
  max-height: fit-content;
  height: 100%;
  right: 0;
  top: 0;

  transform: scaleX(-1);
  @media screen and (max-width: 760px) {
    display: none;
  }
  @media screen and (min-width: 970px) {
    display: none;
  }
`;

export const MobBgImg = styled(motion.img)`
  position: absolute;
  max-width: 100%;
  max-height: 100vh;
  top: -50px;
  margin: auto;
  opacity: 0.4;

  @media screen and (min-width: 759px) {
    display: none;
  }
`;
