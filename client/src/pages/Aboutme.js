import React from 'react';
import image1 from '../images/aboutme1.jpg';
import image3 from '../images/aboutme3.jpg';
import image4 from '../images/aboutme4.jpg';
import image5 from '../images/girlSmilingOnCouch.jpg';
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
              <a href="#working-conditions">Where Do I Begin?</a>
            </li>
            <li>
              <a href="#community-support">Job Opportunities</a>
            </li>
          </ul>
        </div>
        <br></br>

      </div>
      <h4 style={{ color: 'navy' }}>Welcome to OddJobs, your one-stop destination for all your task-related needs! We are a dynamic and innovative company that connects individuals and businesses with skilled task-doers, helping you save time, enhance productivity and focus on what truly matters. </h4>
      <div className="hero"></div>
      <div className="content">
        <div className="job-opportunities">
          <img src={image5} className="float-left resized-image" alt="Job Opportunities" />
          <h2>Life Made Easier</h2>
          <p>At OddJobs, we understand that life can get overwhelming and that juggling multiple tasks on your to-do list can be challenging. That's why we've created a platform that gives you a network of skilled individuals who are ready to handle a wide variety of tasks with their expertise. At OddJobs, you can experience the true meaning of relaxation, knowing that your tasks are being handled efficiently and professionally. Say goodbye to stress and overwhelm and say hello to more time for the things you love. Let us help you make your life simpler, one task at a time!
          </p>
        </div>
        <div id="working-conditions" className="working-conditions">
          <img src={image1} className="float-right resized-image" alt="Working Conditions" />
          <br />
          <br />
          <h2>Where Do I Begin?</h2>
          <p>
          With OddJobs, the process is simple. Just browse our platform, select the task you need assistance with, and choose a task-doer who fits your requirements. You have the freedom to negotiate the terms, timeline, and pricing directly with the task-doer, ensuring that you have full control over your tasks. Join us at Odd Jobs and experience the freedom and peace of mind that comes with delegating your tasks to capable professionals. 

          </p>
        </div>
        <div id="community-support" className="community-support">
          <img src={image3} className="float-left resized-image" alt="Community Support" />
          <br />
          <br />
          <br />
          <h2>Job Opportunities</h2>
          <p>
          We are delighted to have you join our network of skilled professionals, and we are excited about the opportunities that lie ahead for your business. Our mission is to provide a platform where you can showcase your skills, gain visibility, and find new clients easily with the benefits of a flexible schedule. We are dedicated to supporting your success and helping you thrive in your career. We are here to support you every step of the way. Our dedicated support team is available to assist you with any inquiries or concerns you may have.
          </p>
        </div>
      </div>
      <div className="benefits">
        <div className="benefit-empowerment">
          <h3> Community Empowerment</h3>
      
          <p>
          We are not only committed to providing exceptional task services but also to making a positive impact on the community we serve. We believe in the power of community engagement and strive to create a platform that benefits both individuals and the larger community in several ways. We encourage task-doers to continually enhance their skills and knowledge. Through our platform, they can gain experience, receive feedback, and expand their professional network. This emphasis on skill development fosters a culture of continuous learning and improvement, benefiting both the task-doers and the community by raising the overall standard of service quality.
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