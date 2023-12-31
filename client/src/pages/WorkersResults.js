import React from 'react';
import WorkerList from './Workerlist';
import { useLocation } from 'react-router-dom';
import image3 from '../images/aboutme3.jpg';
import './workerresults.css'


const WorkersResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const state = searchParams.get('state');

  return (
    <div className="pageContainer" style={
      { backgroundImage: `url(${image3})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
       }}>
      <div className="headingcontainer">
        <div className="headingContent">
          <h1>Results for {state}</h1>
        </div>
      </div>
      <div>
        <WorkerList state={state} />
      </div>
    </div>
  );
};

export default WorkersResults;