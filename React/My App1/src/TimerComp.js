import {React, useState, useEffect } from "react";
import './App.css'

const TimerComp = () => {
  const [counter, setCounter] = useState()
  const [input, setInput] = useState()


  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer)
  }, [counter]);


  useEffect(() => {
    counter===0&& alert('The Time Is Over')
  });


  return (
    <div>
      <br></br>
        <h3 className='headerClock'>Timer</h3>
        <div className="countDownDiv">Countdown: {counter}</div>
        <div className="divTimer">Enter the time in seconds: <input  className="inputTimer" type='number' onChange={(e) => setInput(e.target.value)} min="1" />
        <button className="btnTimer" onClick={() => setCounter(input)}>Start Your Timer</button></div>
        
    </div>)
    ;
}

export default (TimerComp)
