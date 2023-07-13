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
            <li>
              <a href="#empowerment">Empowerment</a>
            </li>
          </ul>
        </div>
        <br />
        <p style={{ fontSize: '1.5rem', color: 'white' }}>
          Welcome to OddJobs, your one-stop destination for all your task-related needs! We are a dynamic and innovative
          company that connects individuals and businesses with skilled task-doers, helping you save time, enhance
          productivity and focus on what truly matters.
        </p>
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
            <ul>
              <li>Increased Visibility: We will actively promote your handyman services through our online platform and marketing channels.</li>
              <li>User-Friendly Platform: Our user-friendly website and mobile app make it easy for customers to discover and book your services.</li>
              <li>Reliable and friendly Customers</li>
              <li>Flexible Schedule</li>
            </ul>
          </p>
        </div>

        <div id="community-support" className="card card-aboutme">
          <h2>Community Support</h2>
          <p>
            We believe that by partnering with OddJobs, you will have the tools and support necessary to grow your
            handyman business successfully. We are passionate about connecting handymen like yourself with clients who
            appreciate your expertise and professionalism.
          </p>
        </div>

        <div id="empowerment" className="card card-aboutme">
          <h2>Empowerment</h2>
          <p>
            We are thrilled to have you as part of the OddJobs community and look forward to witnessing your continued
            success. If you have any questions or need further assistance, please do not hesitate to reach out to our
            support team by filling the form below.
          </p>
        </div>
      </div>

      <div className="footer">
        <h2>Made with ❤️️ by DailyWageEarners</h2>
        <p>&copy; {new Date().getFullYear()} DailyWageEarners Community</p>
      </div>
    </div>
  );
};

export default AboutMe;
