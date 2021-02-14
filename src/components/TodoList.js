import React from 'react'
import Todo from "./Todo"

const TodoList = ({todos, setTodos, filtered}) => {
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
               
            {
               filtered.map(elem => (
                   <Todo 
                    text={elem.text}
                    key = {elem.id}
                    todo ={elem}

                     setTodos = {setTodos}
                     todos = {todos}

                    
                   />
               ))
            }
                                       
            </ul>
        </div>
    )
}
export default TodoList;