import React, { useState, useEffect } from 'react';
import SliderData from '../components/SliderData';
import { SliderTextData, SliderTextDescription} from '../components/TextData';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

import './home.css';

const Home = () => {
  
  const [current, setCurrent] = useState(0);
 // const [skills, setSkills] = useState('');
 const [location, setLocation] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('this is working')
    // get the users choices from the state variables
    // navigate to a results page
    // pass your location and skills as param
    // on that new page 
  }

  // on every change 
  const handleLocationChange = async (e) => {
    e.preventDefault();
    // get the value that they chosedeid
    console.log(e.target.value)
    // update the state variable
    setLocation(e.target.value)
  }

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

      <section className='chooseList'>
      <h1 id='help'>How Can We Lend a Hand To You Today?</h1>

      <form onSubmit={handleSubmit}>
        <select className='option'>
          <option placeholder='Job'>Job</option>
          <option>Carpentry</option>
          <option>Cleaning</option>
          <option>Cooking</option>
          <option>Dog-Walking</option>
          <option>Electrical</option>
          <option>Flooring & Tiling Help</option>
          <option>Help Moving</option>
          <option>Laundry</option>
          <option>Painting</option>
          <option>Packing</option>
          <option>Plumbing</option>
          <option>Snow-Removal</option>
          <option>TV-Mounting</option>
          <option>Waiting in Line</option>
          <option>Wallpapering</option>
          <option>Yard Work</option>
        </select>
        <select className='option' onChange={handleLocationChange}>
          <option placeholder='State'>State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HA">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Viriginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        <button id='submitBtn' type="submit">Submit</button>
      </form> 
      </section>
         </div>
  );
};

export default Home;
