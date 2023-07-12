import React, { useState } from 'react';
import './contact.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

  

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    setFormSubmitted(true);
  };

  return (
    <section>
      <h2>
        Dear Handymen,

      </h2>
      <p>
        Welcome to the OddJobs community! We are delighted to have you join our network of skilled professionals, and we are excited about the opportunities that lie ahead for your handyman business. 
      </p>

      <p>
        At OddJobs, we understand the importance of connecting handymen with customers who require their services. Our mission is to provide a platform where you can showcase your skills, gain visibility, and find new clients easily. We are dedicated to supporting your success and helping you thrive in your handyman career.
      </p>

      <p>
        As a member of the OddJobs network, you can expect the following benefits:
      </p>

      <p>
        Increased Visibility: We will actively promote your handyman services through our online platform and marketing channels. 
      </p>

      <p>
        User-Friendly Platform: Our user-friendly website and mobile app make it easy for customers to discover and book your services. 
      
      <p>

        Reliable and friendly Customers

      </p>


      <p>
        Flexible Schedule: 
      </p>
      <p>
        We are here to support you every step of the way. Our dedicated support team is available to assist you with any inquiries or concerns you may have. 

      </p>

      <p>
        We believe that by partnering with OddJobs, you will have the tools and support necessary to grow your handyman business successfully. We are passionate about connecting handymen like yourself with clients who appreciate your expertise and professionalism.
      </p>

      <p>
        To get started, please visit our website at [website URL] and complete your registration. Once you have created your profile, we will review it and make it visible to potential customers, allowing them to discover and hire your services.
      </p>

      <p>
    
        We are thrilled to have you as part of the OddJobs community and look forward to witnessing your continued success. If you have any questions or need further assistance, please do not hesitate to reach out to our support team by filling the form below.

      </p>
        Welcome to OddJobs! Together, let's make handyman services more accessible and convenient for clients while helping you thrive in your business.
      </p>

      <div class='imput'className="card" style={{ backgroundColor: '#2a607c', color: 'light gray' }}>
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" style={{ fontSize: '2rem' }}>Name:</label>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: '80%', fontSize: '2rem' }}
              />
            </div>
            <div>
              <label htmlFor="email" style={{ fontSize: '2rem' }}>Email:</label>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '80%', fontSize: '2rem' }}
              />
            </div>
            <div>
              <label htmlFor="message" style={{ fontSize: '2rem' }}>Message:</label>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ width: '80%', height: '200px', fontSize: '2rem' }}
              ></textarea>
            </div>
            <button type="submit" style={{ fontSize: '2rem', marginTop: '1rem' }}>Submit</button>
            {formSubmitted && <p style={{ fontSize: '2rem', marginTop: '1rem' }}>Thank you for your message!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
