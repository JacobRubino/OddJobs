import React from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_WORKERS } from '../utils/queries';
import './workerlist.css';
import image5 from '../images/usericon.png';


const WorkerList = ({ state }) => {
  const { loading, error, data: workerData } = useQuery(GET_WORKERS, {
    variables: { state },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <Card>Error: {error.message}</Card>;

  const workers = workerData && workerData.name ? workerData.name : [];

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };
  let emailstr= 'Email: '
  return (
    <div>
      {workers.map((worker) => (
        <Card className="workerCard" key={worker._id}>
          <div className="textContainer">
            <h1 className="headerheadText">{worker.name}</h1>
            <p>Works as a: {worker.skills.join(', ')}</p>
            <h3 className="subheaderText">About {worker.name}</h3>
            <p>Lives in: {worker.state}</p>
            <p>City: {worker.city}</p>
            <p>Rate($$) per hour: {worker.rate}</p>
            <p className="blueText">
              {emailstr}
              <span
                className="clickable"
                onClick={() => handleEmailClick(worker.email)}
              >
                {worker.email}
              </span>
            </p>
            <p className="blueText">
              Phone:
              <span
                className="clickable"
                onClick={() => handlePhoneClick(worker.phone)}
              >
                {worker.phone}
              </span>
            </p>
          </div>
          <img
            src={ image5 }
            alt="Thumbnail"
            className="thumbnailImage"
          />
        </Card>
      ))}
    </div>
  );
};

export default WorkerList;