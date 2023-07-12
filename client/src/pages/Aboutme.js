import React from 'react';
import image1 from '../images/aboutme1.jpg';
import image2 from '../images/aboutme2.jpg';
import image3 from '../images/aboutme3.jpg';
import image4 from '../images/aboutme4.jpg';
import './aboutme.css';

const AboutMe = () => {
  return (
<div>
      <div className="header">
        <h1>Repairs and <span className="seo">maintenance</span></h1>

        <div>
          <ul className="navigation">
            <li>
              <a href="#job-opportunities">Job Opportunities</a>
            </li>
            <li>
              <a href="#working-conditions">Benefits</a>
            </li>
            <li>
              <a href="#community-support">Community Support</a>
            </li>
          </ul>
        </div>
        <br></br>

      </div>
      <h4 style={{ color: 'navy' }}>Welcome to the OddJobs community! We are delighted to have you join our network of skilled professionals, and we are excited about the opportunities that lie ahead for your handyman business.</h4>
      <div className="hero"></div>
      <div className="content">
        <div className="job-opportunities">
          <img src={image1} className="float-left resized-image" alt="Job Opportunities" />
          <h2>Job Opportunities</h2>
        
          <p>
          At OddJobs, we understand the importance of connecting handymen with customers who require their services. Our mission is to provide a platform where you can showcase your skills, gain visibility, and find new clients easily. We are dedicated to supporting your success and helping you thrive in your handyman career.
          </p>
        </div>
        <div id="working-conditions" className="working-conditions">
          <img src={image2} className="float-right resized-image" alt="Working Conditions" />
          <h2>Working Conditions</h2>
          <p>
          As a member of the OddJobs network, you can expect the following benefits:

Increased Visibility: We will actively promote your handyman services through our online platform and marketing channels.

User-Friendly Platform: Our user-friendly website and mobile app make it easy for customers to discover and book your services.
Reliable and friendly Customers

Flexible Schedule:

We are here to support you every step of the way. Our dedicated support team is available to assist you with any inquiries or concerns you may have.
          </p>
        </div>
        <div id="community-support" className="community-support">
          <img src={image3} className="float-left resized-image" alt="Community Support" />
          <h2>Community Support</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="benefits">
        <div className="benefit-empowerment">
          <h3>Empowerment</h3>
          <img src={image4} className="resized-image" alt="Empowerment" />
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/* ... */}
      </div>
      <div className="footer">
        <h2>Made with ❤️️ by DailyWageEarners</h2>
        <p>&copy; {new Date().getFullYear()} DailyWageEarners Community</p>
      </div>
    </div>
  );
};

export default AboutMe;
