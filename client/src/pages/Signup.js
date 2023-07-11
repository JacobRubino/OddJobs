import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { ADD_PROFILE } from '../utils/mutations'


import Auth from '../utils/auth'


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
    })
    const [addProfile, { error, data }] = useMutation(ADD_PROFILE)


    const handleChange = (event) => {

        const { name, value } = event.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }
    const handleSkillsChange = (event) => {
        const { value } = event.target;
        const skills = value.split(',').map((skill) => skill.trim());
        setFormState({
            ...formState,
            skills
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        console.log(formState)

        if (!emailRegex.test(formState.email)) {
            console.log('Email validation error: Invalid email');
            return;
        }

        const rate = parseInt(formState.rate, 10);

        try {
            const { data } = await addProfile({
                variables: { 
                ...formState, 
                rate:rate,
            },
            })
            Auth.login(data.addProfile.token)
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h5 className="card-header bg-dark text-light p2">Contractor Sign Up</h5>
                    <div className="card-body">
                        {data ? (
                            <p>
                                Welcome to{' '}
                                <Link to="/">OddJobs</Link>
                            </p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <input
                                    className="form-input"
                                    placeholder="Your Name"
                                    name="name"
                                    type="text"
                                    value={formState.name}
                                    onChange={handleChange}
                                />
                                <input
                                    className='from-input'
                                    placeholder="Your Email"
                                    name='email'
                                    type='email'
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                                <input
                                    className='from-input'
                                    placeholder="Your City"
                                    name="city"
                                    type='text'
                                    value={formState.city}
                                    onChange={handleChange}
                                />
                                <input
                                    className='from-input'
                                    placeholder="Your State"
                                    name="state"
                                    type='text'
                                    value={formState.state}
                                    onChange={handleChange}
                                />
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
                                />
                                <input
                                    className="form-input"
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                                <button
                                    className='btn btn-block btn-info'
                                    style={{ cursor: 'pointer' }}
                                    type='submit'
                                >
                                    Submit
                                </button>
                            </form>
                        )}
                        {error && (
                            <div className='my-3 p-3 bg-danger text-white'>
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signup