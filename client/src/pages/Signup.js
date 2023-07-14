import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_PROFILE } from '../utils/mutations';
import Dialog from '../components/Dialog';
import States from '../components/states';

import './signup.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    city: '',
    state: '',
    password: '',
    skills: [],
    rate: '',
    phone: ''
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSkillsChange = (event) => {
    const { value } = event.target;
    const skills = value.split(',').map((skill) => skill.trim());
    setFormState({
      ...formState,
      skills
    });
  };

  const validatePhoneNumber = () => {
    if (formState.phone.length !== 10) {
      setPhoneError('Invalid phone number');
    } else {
      setPhoneError('');
    }
  };

  const handleBlur = () => {
    validatePhoneNumber();
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!emailRegex.test(formState.email)) {
      console.log('Email validation error: Invalid email');
      return;
    }

    const rate = parseInt(formState.rate, 10);
    console.log(typeof rate);

    validatePhoneNumber();

    if (phoneError) {
      console.log('Phone validation error:', phoneError);
      return;
    }

    try {
      const { data } = await addProfile({
        variables: {
          ...formState,
          rate: rate
        }
      });
      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
      setDialogVisible(true); // Show the dialog box
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h5 className="card-header bg-dark text-light p2">Contractor Sign Up</h5>
          <div className="card-body">
            {data ? (
              <p>
                Welcome to <Link to="/">OddJobs</Link>
              </p>
            ) : (
              <form className="signupform" onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your Name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your City"
                  name="city"
                  type="text"
                  value={formState.city}
                  onChange={handleChange}
                />
                <select
                  className="form-select" 
                  name="state"
                  value={formState.state}
                  onChange={handleChange}
                >
                  <option value="">Select State</option>
                  {States.map((state) => (
                    <option key={state.abbreviation} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
                <input
                  className="form-input"
                  placeholder="wage per hour"
                  name="rate"
                  type="number"
                  value={formState.rate}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Skills (separated by commas)"
                  name="skills"
                  type="text"
                  value={formState.skills.join(', ')}
                  onChange={handleSkillsChange}
                />
                <input
                  className="form-input"
                  placeholder="Phone Number"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {phoneError && <p className="error-message">{phoneError}</p>}
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="submitbtn btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
            {error && (
              <Dialog visible={dialogVisible} onClose={() => setDialogVisible(false)}>
                <p>This name and/or email address has already been used.</p>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
