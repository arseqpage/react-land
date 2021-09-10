import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;

  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  width: 100%;
  height: 100%;

  z-index: 1;
`;

const HeroSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  &:before {
    width: 100%;
    height: 100vh;

    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;

    overflow: hidden;
    opacity: 0.4;

    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`;

const HeroImage = styled.img`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  object-fit: cover;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1600px;
  width: calc(100%-100px);

  position: relative;
  z-index: 10;

  color: #fff;

  h1 {
    margin-bottom: 0.8rem;

    font-size: clamp(1rem, 5vw, 6rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    text-align: left;
  }

  p {
    margin-bottom: 1.2rem;

    text-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 10;

  display: flex;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-right: 1rem;

  color: #fff;
  cursor: pointer;
  user-select: none;

  background: #000d1a;
  border-radius: 50px;

  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  //   };

  //   timeout.current = setTimeout(nextSlide, 3000);

  //   return () => {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current);
  //     }
  //   };
  // }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);

    // console.log(current);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);

    // console.log(current);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.name} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <h1>{slide.price}</h1>
                    <Button
                      to={slide.path}
                      primary="true"
                      css={`
                        max-width: 160px;
                      `}>
                      {slide.label}
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
