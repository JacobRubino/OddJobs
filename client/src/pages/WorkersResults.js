import React, {useState} from "react";
import WorkerList from "./Workerlist";

const WorkersResults = () => {\
  const [Worker, setWorker] = useState(0)
  return (
    <div>
      <div className='heading'>
        <h1>Results for {jobTitle} </h1>
      </div>
      <WorkerList renderFrom= />
    </div>
  )

}