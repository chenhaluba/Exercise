import {React, useState, useEffect } from "react";
import axios from 'axios';
import './App.css'

const todosUrl = 'http://127.0.0.1:5000/todos/';

const SubTodosComp = ({SubTodos , ID}) => {

    const [subTodos, setSubTodos] = useState(SubTodos)
    const [subTodos2, setSubTodos2] = useState(SubTodos)
    const [subTodo, setSubTodo] = useState()
   

    useEffect(() => {
        let counter=-1
        let b=false
        {subTodos.map((SubTodo) => {
            counter=counter+1
            if(SubTodo?.SubTodo==subTodo?.SubTodo)
            {
                console.log("change");
                b=true
                subTodos2[counter]=subTodo
            }
        })}
        counter=-1
        b&&updateSubTodo()
       
    }, [subTodo])


    const updateSubTodo = async () => {
        console.log(ID);
        console.log(subTodos2);
        const { data: result } = await axios.put(`${todosUrl}${ID}`, {SubTodos:subTodos2});
        console.log(result);
    };

       
    
  return (
    <div>
        <h5>Sub-Todos: </h5>
        {subTodos.map((SubTodo) => {
            return<div>
                 {!SubTodo?.Checked&&<div><input className="inputSubTodo" onChange={(e) => setSubTodo({...SubTodo, Checked:e.target.checked})} name={SubTodo.SubTodo} type="checkbox"/>  {SubTodo.SubTodo} <br /></div>}
                 {SubTodo?.Checked&&<div><input className="inputSubTodo" checked onChange={(e) => setSubTodo({...SubTodo, Checked:e.target.checked})}  type="checkbox"/>  {SubTodo.SubTodo} <br /></div>}

                </div>
         })}
    </div>
  )
}

export default SubTodosComp