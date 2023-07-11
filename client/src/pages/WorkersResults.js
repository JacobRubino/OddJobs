import React, {useState} from "react";
import WorkerList from "./Workerlist";
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

//placeholder for where we will get the worker list from, 
let WorkerData = 15
const WorkersResults = () => {
  const [Worker, setWorker] = useState(0)
  const length = WorkerData.length;
  const NextWorkers = () => {
    setWorker(Worker === length - 1 ? 0 : Worker + 8);
  };

  const prevWorkers = () => {
    setWorker(Worker === 0 ? length - 1 : Worker - 8);
  };
  
  return (
    <div>
      <div className='heading'>
        <h1>Results for INSERTJOBHERE </h1>
      </div>
      <div>
      <WorkerList renderFrom={Worker} />
      <FaArrowAltCircleLeft className='arrow-left' onClick={prevWorkers} />
      <FaArrowAltCircleRight className='arrow-right' onClick={NextWorkers} />
    </div>
    </div>
  )

}