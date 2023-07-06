import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useMutation } from '@apollo/client'
import { ADD_PROFILE } from '../utils/mutations'

import Auth  from '../utils/auth'

const Signup = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        city: '',
        state: '',
        password: '',
    })
    const [addProfile, {error, data}] = useMutation(ADD_PROFILE)

    const handleChange = (even) => {
        const {name, value} = event.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }
    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(formState)

        try {
            const {data} = await addProfile({
                variables: { ...formState },
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
                        ): (
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
                                    placeholdder="Your City"
                                    name="City"
                                    type='text'
                                    value={formState.city}
                                    onChange={handleChange}
                                />
                                
                                <input 
                                    className='from-input'
                                    placeholdder="Your State"
                                    name="State"
                                    type='text'
                                    value={formState.state}
                                    onChange={handleChange}
                                />
                                
                                <input 
                                    className='from-input'
                                    placeholdder="******"
                                    name="password"
                                    type='password'
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                                <button
                                    className='btn btn-block btn-info'
                                    style={{cursor: 'pointer'}}
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