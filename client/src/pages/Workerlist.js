import React from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_WORKERS } from '../utils/queries';
import './workerlist.css'

const WorkerList = ({ state }) => {
  const { loading, error, data: workerData } = useQuery(GET_WORKERS, {
    variables: { state },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <Card>Error: {error.message}</Card>;

  const workers = workerData && workerData.name ? workerData.name : [];

  return (
    <div>
      {workers.map((worker) => (
        <Card className='workerCard' key={worker._id}>
          
          <div className='textContainer'>
            <h1 className='headerheadText'>{worker.name}</h1>
            <p>Works as a: {worker.skills}</p>
            <h3 className='subheaderText'>About {worker.name}</h3>
            <p>Lives in: {worker.state}</p>
            <p>Rate per hour: {worker.rate}</p>
            <p>Email: {worker.email}</p>
            <p>Phone: {worker.phone}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default WorkerList;
