import React from 'react';
import Carousel from '../components/carousel';

const Home = () => {
  const images = [];
  const imageTexts = [];

  return (
    <div>
      <h1>Home Page</h1>
      <Carousel images={images} imageTexts={imageTexts} />
    </div>
  );
};

export default Home;