import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className="header-oddjobs">Odd Jobs</h1>
      <div className="nav-links">   
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Log in</a>
        <a href="">Sign up</a>

       
      <button onClick={() => window.location.href = '/feedback'}>
        Go to Feedback
      </button>

      </div>
    </div>
  );
};

export default Navbar;