import React, { useState, useEffect } from 'react';
import WorkerList from './Workerlist';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_WORKERS } from '../utils/queries';

const WorkersResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const state = searchParams.get('state');

  const { loading, error, data } = useQuery(GET_WORKERS, {
    variables: { state },
  });

  const [workerIndex, setWorkerIndex] = useState(0);

  useEffect(() => {
    if (data && data.name) {
      setWorkerIndex(0);
    }
  }, [data]);

  const workersPerPage = 8;
  const workers = data ? data.name : [];

  const nextPage = () => {
    setWorkerIndex(prevIndex => prevIndex + workersPerPage);
  };

  const previousPage = () => {
    setWorkerIndex(prevIndex => prevIndex - workersPerPage);
  };

  console.log('Data:', data); // Add this line to log the data
  console.log('Error:', error); // Add this line to log the error

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const displayedWorkers = workers.slice(workerIndex, workerIndex + workersPerPage);

  return (
    <div>
      <div className="heading">
        <h1>Results for {state}</h1>
      </div>
      <div>
        <WorkerList workers={displayedWorkers} />
        <FaArrowAltCircleLeft className="arrow-left" onClick={previousPage} />
        <FaArrowAltCircleRight className="arrow-right" onClick={nextPage} />
      </div>
    </div>
  );
};

export default WorkersResults;