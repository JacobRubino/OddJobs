import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footerElements'>
        <div className='footerContent'>
          <Link to={'/careers'}>
            Careers
          </Link>
        </div>
        <div className='footerContent'>
          <Link to={'/contributers'}>
            Contributers
          </Link>
        </div>
        <div className='footerContent'>
          <Link to={'/specialthanks'}>
            Special Thanks
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Footer