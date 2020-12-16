import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ todos, setTodos, todoNameRef, setStatus }) => {

    const submitTodoHandler = (e) => {
        e.preventDefault()
        const name = todoNameRef.current.value;
        if (name === '') return;
        setTodos([
            ...todos,
            { text: name, completed: false, id: uuidv4() }
        ])
        todoNameRef.current.value = null;
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <form>
            <input ref={todoNameRef} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incompleted">In-completed</option>
                </select>
            </div>
        </form>
    )
}

export default Form;