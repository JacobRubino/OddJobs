import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className="header-oddjobs">Odd Jobs</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Login">Log in</Link>
        <Link to="/Signup">Sign up</Link>
        <Link to="/feedback">Go to Feedback</Link>
      </div>
    </div>
  );
};

export default Navbar;
