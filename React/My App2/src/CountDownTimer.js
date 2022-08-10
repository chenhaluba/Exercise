import React from 'react'
import dayjs from 'dayjs'

export default function getRemainingTimeUntilMsTimestamp(timeTodo){
    const timeTodoJs = dayjs(timeTodo)
    const nowDaysJs= dayjs()
    if(timeTodoJs.isBefore(nowDaysJs))
    {
        return{
            seconds :'00',
            minutes :'00',
            hours :'00',
            days :'00'
        }
    }
    return{
        seconds :getReimainingSeconds(nowDaysJs, timeTodoJs),
        minutes :getReimainingMinutes(nowDaysJs, timeTodoJs),
        hours :getReimainingHours(nowDaysJs, timeTodoJs),
        days : getReimainingDays(nowDaysJs, timeTodoJs)
    }
}

function getReimainingSeconds(nowDaysJs, timeTodoJs) {
    const seconds = timeTodoJs.diff(nowDaysJs, 'seconds')%60
    return seconds
}
function getReimainingMinutes(nowDaysJs, timeTodoJs) {
    const minutes = timeTodoJs.diff(nowDaysJs, 'minutes')%60
    return minutes
}
function getReimainingHours(nowDaysJs, timeTodoJs) {
    const hours = timeTodoJs.diff(nowDaysJs, 'hours')%24
    return hours
}
function getReimainingDays(nowDaysJs, timeTodoJs) {
    const days = timeTodoJs.diff(nowDaysJs, 'days')
    return days
}