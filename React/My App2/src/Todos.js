import { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";
import NewTodo from "./NewTodo";
import './App.css'

const todosUrl = "http://127.0.0.1:5000/todos/";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      const { data: todos } = await axios.get(todosUrl);
      setTodos(todos);
    };
    fetchData();
  }, []);

  return (
    <div className='divApp'>
      <h3 className='headerApp'>Todo List</h3>
        {todos.map((todo) => {
          return <div className="divTodo">
             <Todo todoID={todo._id} />
            </div>  
        })}
      <button className="btn" style={{position:"relative", left:"2%", marginBottom:'10px', width:'140px', height:'40px'}} onClick={() => setNewTodo(!newTodo)}>Add A New Todo</button>
      {newTodo&&<NewTodo />}
      
    </div>
  );
};

export default Todos;
