import React, { useState, useEffect } from 'react';
import SliderData from '../components/SliderData';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import './home.css';

const Home = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevImage) => (prevImage + 1) % SliderData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className='slider'>
        <FaArrowAltCircleLeft className='arrow-left' onClick={prevSlide} />
        <FaArrowAltCircleRight className='arrow-right' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='travel image' className='image' />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
