import React from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_WORKERS } from '../utils/queries';
const WorkerList = () => {
  const { loading, error, data } = useQuery(GET_WORKERS, {
    variables: { state: 'New York' },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <Card>Error: {error.message}</Card>;
  const workers = data.name; // Assuming `name` is the field name in your query
  return (
    <div>
      {workers.map(worker => (
        <Card key={worker._id}>
          <h1>{worker.name}</h1>
          <p>Works as a: {worker.skills}</p>
          <h2>About {worker.name}</h2>
          <p>Lives in: {worker.state}</p>
          <p>Email: {worker.email}</p>
          <p>Phone: {worker.phone}</p>
        </Card>
      ))}
    </div>
  );
};
export default WorkerList;
