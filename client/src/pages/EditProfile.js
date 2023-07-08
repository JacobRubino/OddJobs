import React, {useState} from 'react'

const EditProfile = ({profile}) => {
    const [name, setName] = useState(profile.name || '')
    const [email, setEmail]= useState(profile.email || '')
    const [city, setCity] = useState(profile.city || '')
    const [state, setState] = useState(profile.state || '')
    const [skills, setSkills] = useState(profile.skills || '')
    const [password, setPassword] = useState(profile.password || '')

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log({
            name,
            email,
            city,
            state,
            skills,
            password
        })

        setName('')
        setEmail('')
        setCity('')
        setState('')
        setSkills('')
        setPassword('')
    }

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h5 className="card-header bg-dark text-light p2">Edit Profile</h5>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>City:</label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <label>State:</label>
                            <input
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                            <label>Skills:</label>
                            <input
                                type="text"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                            />
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className='btn btn-block btn-info'
                                style={({cursor: 'pointer'})}
                                type='submit'
                            >
                                Submit
                            </button>
                        </form>
                    
                    </div>
                </div>
            </div>
        </main>
    );
}

export default EditProfile