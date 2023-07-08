import React, { useState, useEffect } from 'react';
import SliderData from '../components/SliderData';
import { SliderTextData, SliderTextDescription} from '../components/TextData';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

import { ButtonGroup } from 'react-bootstrap/ButtonGroup';
import { Dropdown } from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap/DropdownButton';
import { SplitButton } from 'react-bootstrap/SplitButton';

import './home.css';

const Home = () => {
  
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevText) => (prevText + 1) % SliderTextData.length);
      setCurrent((prevText) => (prevText + 1) % SliderTextDescription.length);
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


  // drop down button

  function ButtonSizesExample() {
    return (
      <>
        <div className="mb-2">
          {[DropdownButton, SplitButton].map((DropdownType, idx) => (
            <DropdownType
              as={ButtonGroup}
              key={idx}
              id={`dropdown-button-drop-${idx}`}
              size="lg"
              title="Drop large"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            </DropdownType>
          ))}
        </div>
        <div>
        {[DropdownButton, SplitButton].map((DropdownType, idx) => (
            <DropdownType
              as={ButtonGroup}
              key={idx}
              id={`dropdown-button-drop-${idx}`}
              size="lg"
              title="Drop large"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            </DropdownType>
          ))}
        </div>
      </>
    );
  }


// APP BELOW


  return (
    <div>
      <section className='slider'>
        <FaArrowAltCircleLeft className='arrow-left' onClick={prevSlide} />
        <FaArrowAltCircleRight className='arrow-right' onClick={nextSlide} />
        {SliderData?.map((slide, index) => {
          return (    
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div>
                  <img src={slide.image} alt='travel image' className='image' />
                </div>
              )}
            </div>
          );
        })}
        <div className='textBox'>
        {SliderTextData?.map((text, index) => {
          return (    
            <div
              className={index === current ? 'text active' : 'text'}
              key={index}
            >
              {index === current && (
                <div>
                  <h1 className='titleText'>{text}</h1>
                </div>
              )}
            </div>
          );
      })}
      {SliderTextDescription?.map((text, index) => {
          return (    
            <div
              className={index === current ? 'text active' : 'text'}
              key={index}
            >
              {index === current && (
                <div>
                  <p className='subText'>{text}</p>
                </div>
              )}
            </div>
          );
      })}
      </div>
      </section>
    </div>
  );
};

export default Home;
