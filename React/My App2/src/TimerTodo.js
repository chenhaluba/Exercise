import {React, useState, useEffect } from "react";
import CountDownTimer from './CountDownTimer'
import './App.css'

const defultRemainingTime ={
    seconds :'00',
    minutes :'00',
    hours :'00',
    days :'00',
}

const TimerTodo = ({Time}) => {
    const eventTime = new Date(Time).getTime()
    const [remainingTime, SetRemainingTime]= useState(defultRemainingTime)

    useEffect( () => {
        const intervalId= setInterval(() =>{
            updateRemainingTime(eventTime)
        },1000)
        return ()=> clearTimeout(intervalId)
    }, [eventTime])

    function updateRemainingTime(eventTime){
        SetRemainingTime(CountDownTimer(eventTime))
    }

    

    
  return (
    <div>
        <div className="countDown">
        Time Left : 
        <span> {remainingTime.days}</span>
        <span> Days </span>
        <span> {remainingTime.hours}</span>
        <span> Hours </span>
        <span> {remainingTime.minutes}</span>
        <span> Minutes </span>
        <span> {remainingTime.seconds}</span>
        <span> Seconds </span>

        </div>

       
        
    </div>)
    ;
}

export default TimerTodo
