import React, {useState} from "react";
import { Card } from 'react-bootstrap'

function WorkerList(props, renderFrom) {
  const [currentIndex, setCurrentIndex] = useState(renderFrom)
  for (let i = 0; i < 8; i++)  {
    const nextIndex = currentIndex + 1
    setCurrentIndex(nextIndex)
    const element = props[currentIndex];
    return (     
      <Card>
        <h1>{element.name}</h1>
        <p>Works as a:{element.job}</p>
        <h2>About {element.name}</h2>
        <p>{element.description}</p>
      </Card>     
   )} 
}
export default WorkerList