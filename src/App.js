import React, { useState , useEffect } from "react";
import './App.css';
//importando componentes
import Form from "./components/Form"
import TodoList from "./components/TodoList"



function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  useEffect (()=>{
    filtrar();
  }, [todos, status])
  
  const filtrar = ()=>{
    switch (status) {
      case "completed":
        setFiltered(
            todos.filter( (item )=> item.completed === true  ))        
        break;
      case "uncompleted":
        setFiltered(
            todos.filter( (item )=> item.completed === false  ))        
        break;
        default:
        setFiltered(todos);

        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Lista de Tareas</h1>
        <p>Escribe lo que quieres hacer, tacha o elimina tareas de la lista..</p>
      </header>
      <Form 
        setInputText ={setInputText}
        todos = {todos}
        setTodos = {setTodos}
        inputText = {inputText}
        setStatus = {setStatus}
        />
        {console.log(todos)}
      <TodoList
        todos = {todos}
        setTodos = {setTodos}
        filtered = {filtered}

      />
          
    </div>
  );
}

export default App;
