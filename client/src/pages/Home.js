import React, { useState, useEffect } from 'react';
import SliderData from '../components/SliderData';
import { SliderTextData, SliderTextDescription } from '../components/TextData';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import States from '../components/states';
import { useNavigate } from 'react-router-dom';

import './home.css';

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

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
    setCurrent((current) => (current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current) => (current === 0 ? length - 1 : current - 1));
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    searchParams.set('state', location);
    navigate(`/workers-results?${searchParams.toString()}`);
  };

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);
  };

  return (
    <div>
      <section className="slider">
        <FaArrowAltCircleLeft className="arrow-left" onClick={prevSlide} />
        <FaArrowAltCircleRight className="arrow-right" onClick={nextSlide} />
        {SliderData?.map((slide, index) => (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div>
                <img src={slide.image} alt="travel" className="image" />
              </div>
            )}
          </div>
        ))}
        <div className="textBox">
          {SliderTextData?.map((text, index) => (
            <div
              className={index === current ? 'text active' : 'text'}
              key={index}
            >
              {index === current && (
                <div>
                  <h1 className="titleText">{text}</h1>
                </div>
              )}
            </div>
          ))}
          {SliderTextDescription?.map((text, index) => (
            <div
              className={index === current ? 'text active' : 'text'}
              key={index}
            >
              {index === current && (
                <div>
                  <p className="subText">{text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div>
        <section className="chooseList">
          <h1 id="help">How Can We Lend a Hand To You Today?</h1>

          <form onSubmit={handleSubmit}>
            <select className="option" onChange={handleLocationChange}>
              {States.map((state) => (
                <option key={state.abbreviation} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
            <button id="submitBtn" type="submit">
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Home;
