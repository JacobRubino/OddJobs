import React, {useState} from "react";
import WorkerList from "./Workerlist";
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

//placeholder for where we will get the worker list from, 
const WorkerData = [];

const WorkersResults = () => {
  const [Worker, setWorker] = useState(0);
  const length = WorkerData.length;

  const nextWorkers = () => {
    setWorker(Worker === length - 8 ? 0 : Worker + 8);
  };

  const prevWorkers = () => {
    setWorker(Worker === 0 ? length - 8 : Worker - 8);
  };

  return (
    <div>
      <div className='heading'>
        <h1>Results for INSERTJOBHERE </h1>
      </div>
      <div>
      <WorkerList renderFrom={Worker} />
      <FaArrowAltCircleLeft className='arrow-left' onClick={prevWorkers} />
      <FaArrowAltCircleRight className='arrow-right' onClick={nextWorkers} />
    </div>
    </div>
  )

}
export default WorkersResults;