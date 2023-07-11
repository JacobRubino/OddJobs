import React, {useState} from "react";
import { Card } from 'react-bootstrap'
import { useQuery, gql } from '@apollo/client'

function WorkerList(props, renderFrom) {
  const [currentIndex, setCurrentIndex] = useState(renderFrom)
  const locationSearch = 'detroit' //placeholder for getting the search result
  const skillSearch = 'painting' //placeholder for getting the search result

  const WORKER_QUERY = gql`
    query {
      workers(location: "${locationSearch}", skill: "${skillSearch}"){
        _id
        name
        skills
        location
        email
        state
      }
  `
  const { loading, error, data } = useQuery(WORKER_QUERY);

  if (loading) return <p>...Loading</p>;
  if (error) return <Card>Error: {error.message} </Card>

  const workers = data.workers.slice(currentIndex, currentIndex + 8)
  return (
    <div>
      {workers.map(workers => {
        <Card>
        <h1>{workers.name}</h1>
        <p>Works as a:{workers.job}</p>
        <h2>About {workers.name}</h2>
        <p>{workers.description}</p>
      </Card>   
      })}
    </div>
  )
}
export default WorkerList