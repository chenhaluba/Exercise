import React  from 'react';
import Clock from 'react-live-clock';
import './App.css'

const ClockComp = () => {

  return (
    <div>
      <h3 className='headerClock'>Local Time</h3>
      <Clock  className='clock' format={'HH:mm:ss'} ticking={true}/>
      <br></br>
    </div>
  );
};

export default ClockComp;