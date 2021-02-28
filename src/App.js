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
//RUN ONCE..esto se ejecutara solo una vez al iniciar
  useEffect(()=>{
     getLocalTodos();
  }, [])

  //use Efect se ejecuta siempre
  useEffect (()=>{
    filtrar();
    saveLocalTodos();
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

  //save to local
  const saveLocalTodos = () => {
    //guarda todo lo nuevo seteando
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  
  const getLocalTodos = ()=> {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
      //si hay algo en localStorage.. lo pedimos y guardamos en variable
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      //console.log("ACA ESTA TODOOOOOS",todoLocal)
      //lo seteamos al estado
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Lista de Tareas</h1>
        <p>¿Que quieres hacer HOY?<br/></p>
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
