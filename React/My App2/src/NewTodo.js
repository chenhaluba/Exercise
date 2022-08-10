import { useState } from 'react';
import axios from 'axios';
import './App.css'

const todosUrl = 'http://127.0.0.1:5000/todos/';


const NewTodo = () => {
    const [newTodo, setNewTodo] = useState({});

    const addTodo = async () => {
      if(Object.keys(newTodo).length != 0){
        const { data: result } = await axios.post(todosUrl, newTodo);
        console.log(result);
      }   
      };

  return (
    <div className='divTodo'>
    <h4 style={{paddingTop:'20px'}}>Add A New Todo To Your List</h4>
      Todo: <input className='inputTodo' type='text' onChange={(e) => setNewTodo({...newTodo, Todo:e.target.value})} /><br></br>
      More Todos In The Todo: <input className='inputTodo' type='text' onChange={(e) => setNewTodo({...newTodo, SubTodos:[{SubTodo:e.target.value, Checked:false}]})} /><br></br>
      End Time: <input className='inputTodo' type='datetime-local' onChange={(e) => setNewTodo({...newTodo, Time:e.target.value+":00"})} /><br></br>
      Status: <input className='inputTodo' type='text' onChange={(e) => setNewTodo({...newTodo, Status:e.target.value})} /><br></br>
      <button  className= 'btn' onClick={addTodo}>Add Todo</button>
      <br></br><br></br>
    </div>
  )
}

export default NewTodo