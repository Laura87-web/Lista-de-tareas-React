import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

    const InputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value); //el valor del input esta en el evento.target
        //el evento es onChange..
    };

    const submitHandler = (e) => {
        e.preventDefault();// detiene el comportamiento de recargar pagina al apretar boton submit
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.floor((Math.random() * 1000)) }
        ])
        setInputText(""); // al apretar boton submit se vacia el input
        console.log(setInputText);

    }
    const handlerStatus = (e) => { //lee el evento
        setStatus(e.target.value);
    }

    return (
        <form>
            <div className="input-con-boton">
                <input
                    className="todo-input"
                    type="text"
                    onChange={InputTextHandler}
                    value={inputText} // si quiero vaciar el input lo necesito
                />
                <button
                    className="todo-button"
                    type="submit"
                    onClick={submitHandler}
                >
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
            <div className="select">
                <select name="todos" className="filter-todo"
                    onChange={handlerStatus}
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    )
}
export default Form;