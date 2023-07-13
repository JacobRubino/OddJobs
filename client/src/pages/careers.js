import react from 'react';
import { Link } from 'react-router-dom';
import './careers.css'

const Careers = () => {
  return (
    <div className="containercareer">
      <h1 className='careerheadText'>
        Would you like to start a career at OddJobs?
      </h1>
      <div className='descriptionCareer'>
        <p>Join Hundreds of others putting their expertise to use at oddjobs!</p>
        <p>The perfect sidehustle!</p>
      </div>
      <button className="btn-signup">
        <Link to={'/signup'}>
          Sign Up Now
        </Link>
      </button>
    </div>
  )
}

export default Careers