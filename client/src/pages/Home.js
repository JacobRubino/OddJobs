import React from 'react';
import Carousel from './Carousel';
const Home = () => {
  const images = [
  ];
  const imagetext = [   
  ];
  return (
    <div>
      <Carousel image={images} imagetexts={imagetext} />     
    </div>
    
  );
};

export default Home;