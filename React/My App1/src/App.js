import React  from 'react';
import ClockComp from './ClockComp.js';
import StopperComp from './StopperComp';
import TimerComp from './TimerComp';


const App = () => {

  return (
    <div>
      <ClockComp />
      <StopperComp />
      <TimerComp />
    </div>
  );
};
  
export default App;