import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Auth from '../utils/auth';

const Navbar = () => {
  const logout = () => {
    Auth.logout();
  };

  return (
    <div className='navbar'>
      <h1 className="header-oddjobs">Odd Jobs</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/feedback">Go to Feedback</Link>
        {Auth.loggedIn() ? (
          <>
            <Link onClick={logout} to="/">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
