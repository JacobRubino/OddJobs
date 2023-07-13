import React from 'react';
import image1 from '../images/aboutme1.jpg';
import image2 from '../images/aboutme2.jpg';
import image3 from '../images/aboutme3.jpg';
import image4 from '../images/aboutme4.jpg';
import { FaGithub } from 'react-icons/fa';
import { ImHeart } from 'react-icons/im';
import './aboutme.css';

const AboutMe = () => {
  return (
<div>
      <div className="header">
        <h1>Repairs, Maintenance & More</h1>

        <div>
          <ul className="navigation">
            <li>
              <a href="#job-opportunities">Life Made Easier</a>
            </li>
            <li>
              <a href="#working-conditions">Job Opportunities</a>
            </li>
            <li>
              <a href="#community-support">Community Support</a>
            </li>
          </ul>
        </div>
        <br></br>

      </div>
      <h4 style={{ color: 'navy' }}>Welcome to OddJobs, your one-stop destination for all your task-related needs! We are a dynamic and innovative company that connects individuals and businesses with skilled task-doers, helping you save time, enhance productivity and focus on what truly matters. </h4>
      <div className="hero"></div>
      <div className="content">
        <div className="job-opportunities">
          <img src={image1} className="float-left resized-image" alt="Job Opportunities" />
          <h2>Life Made Easier</h2>
        
          <p>
          We are delighted to have you join our network of skilled professionals, and we are excited about the opportunities that lie ahead for your business. Our mission is to provide a platform where you can showcase your skills, gain visibility, and find new clients easily. We are dedicated to supporting your success and helping you thrive in your handyman career.
          We are delighted to have you join our network of skilled professionals, and we are excited about the opportunities that lie ahead for your handyman business.
          </p>
        </div>
        <div id="working-conditions" className="working-conditions">
          <img src={image2} className="float-right resized-image" alt="Working Conditions" />
          <h2>Job Opportunities</h2>
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
        <h2>Made with < ImHeart /> by <FaGithub /> <a href="https://github.com/EvanSterlingMiller">Evan Sterling Miller</a>, <a href="https://github.com/meetsudarshan"> Sudarshan Samaddar</a>, <a href="https://github.com/JacobRubino">Jacob Rubino</a>, <a href="https://github.com/chartpro-com">Matt Fleming</a> & <a href="https://github.com/rosebudroro">Roxy Osorio</a></h2>
        
        <p>&copy; {new Date().getFullYear()} DailyWageEarners Community</p>
      </div>
    </div>
  );
};

export default AboutMe;
