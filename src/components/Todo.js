
import React from 'react';


function Todo ({text, setTodos, todos, todo}) {

    console.log(text)
   

    const HandlerComplete = ()=>{
        setTodos(
            todos.map(item => {
                if(item.id === todo.id){
                   return {...item, completed: !item.completed}
                }
                return item;
            })
        )


    }

    const HandlerDelete = ()=>{
        setTodos(
            todos.filter(item => item.id !== todo.id)
        )
        
    }
   // const HandlerText = todos.map((e)=>(text) = e.text)
        
        

    


    return (
        <div className="todo">
          
            <li className={`todo-item ${todo.completed ? "completed":""}`}>{text}</li>
            <button 
                onClick={HandlerComplete}
                className="complete-btn">
                <i className="fas fa-check"></i></button>        
            <button
                onClick={HandlerDelete}
                className="trash-btn">
                <i className="fas fa-trash"></i></button>
        </div>
    );
};

export default Todo;