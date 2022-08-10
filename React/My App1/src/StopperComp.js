import {React, useState, useEffect } from "react";
import './App.css'


const StopperComp = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div>
      <br></br>
      <h3 className='headerClock'>Stopper</h3>
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <br></br>
      <br></br>
      <div className="buttons">
        <button className="btn" onClick={() => setRunning(true)}>Start</button>
        <button className="btn" onClick={() => setRunning(false)}>Stop</button>
        <button className="btn" onClick={() => setTime(0)}>Reset</button>       
      </div>
      <br></br>
    </div>
  );
};

export default StopperComp