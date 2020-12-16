import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, [])

  useEffect(() => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'incompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));

  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Rohit's Todo List for CICD</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} todoNameRef={todoNameRef} setStatus={setStatus}></Form>
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}></TodoList>
    </div >
  );
}

export default App;
