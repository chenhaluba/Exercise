import { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressBar from "@ramonak/react-progress-bar";
import TimerTodo from "./TimerTodo";
import SubTodosComp from "./SubTodos";
import './App.css'


const todosUrl = 'http://127.0.0.1:5000/todos/';

const Todo = ({todoID}) => {
    const [CurrentTodo, setCurrentTodo] = useState();
    const [updatedTodo, setUpdadteTodo] = useState({});
    const [subTodosLength, setSubTodosLength] = useState()
    const [checkedLength, setCheckedLength] = useState()
    const [clickTodo, setClickTodo]= useState(false)


  
    useEffect(() => {
        const fetchData = async () => {
            const { data: todo } = await axios.get(`${todosUrl}${todoID}`);
            setCurrentTodo(todo);
        };
        fetchData();
      }, []);


      useEffect(() => {
        let count=0
        {CurrentTodo?.SubTodos.map((SubTodo) => {
              if(SubTodo?.Checked)
              {
                count+=1
              }
            })}
          setCheckedLength(count)
          setSubTodosLength(CurrentTodo?.SubTodos.length)
        
  },[CurrentTodo]);

  const progressBar = () => {
    return <ProgressBar completed={(checkedLength/subTodosLength)*100} />;
  };


  const updateTodo = async (id) => {
    console.log( updatedTodo);
    const { data: result } = await axios.put(`${todosUrl}${id}`, updatedTodo);
    console.log(result);
  };


  const deleteTodo = async (id) => {
    const { data: result } = await axios.delete(`${todosUrl}${id}`);
    console.log(result);
  };


  return (
    <div>
      <br></br>
      <div className='progressBar'>{progressBar()}</div>
      {!clickTodo&& <div className="divTodoNotClicked" onClick={() => setClickTodo(!clickTodo)}>{CurrentTodo?.Todo}</div>}
      {clickTodo&&<button className="btnCancel" onClick={() => setClickTodo(!clickTodo)}>X</button> }
      {clickTodo&& 
      <div>
          <h4>{CurrentTodo?.Todo} </h4>
            Todo: <input className='inputTodo' type='text' onChange={(e) => setUpdadteTodo({...updatedTodo, Todo:e.target.value})} defaultValue={CurrentTodo?.Todo} />
            {CurrentTodo?.SubTodos&&<SubTodosComp SubTodos={CurrentTodo?.SubTodos} ID={CurrentTodo?._id} />}
            Add Another Sub-Todo: <input className='inputTodo' type='text' onChange={(e) => setUpdadteTodo({...updatedTodo, SubTodos:[...CurrentTodo.SubTodos, {SubTodo:e.target.value, Checked:false}]})}defaultValue={''}/><br></br>
            End Time: <input className='inputTodo' type='datetime-local' onChange={(e) => setUpdadteTodo({...updatedTodo, Time:e.target.value})} defaultValue={CurrentTodo?.Time} /><br></br>
            {CurrentTodo?.Time&&<TimerTodo Time={CurrentTodo?.Time+':00'}/>}
            Status: <input className='inputTodo' type='text' onChange={(e) => setUpdadteTodo({...updatedTodo, Status:e.target.value})} defaultValue={CurrentTodo?.Status} /><br></br><br></br>
            <button className='btn' onClick={() => updateTodo(CurrentTodo?._id)}>Update Todo</button>
            <button className='btn' onClick={() => deleteTodo(CurrentTodo?._id)}>Delete Todo</button><br></br>
            <br></br>
      </div>}
      <br></br> 
    </div>
  );
};

export default Todo;
