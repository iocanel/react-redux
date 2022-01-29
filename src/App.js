import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect (() => {
        var initial = [];
        initial.push({"title": "Create template"});
        initial.push({"title": "Add Redux"});
        setTodos(initial);
    }, []);

    const add = (newTodo) => {
        setTodos(todos => [...todos, newTodo]);
    };

    const remove = (title) => {
        setTodos(todos.filter(todo => todo.title !== title));
    }
 
    return (
            <>
            <div className="App">
              <h1>Todo App </h1>
              <NewTodoForm add={add}/>
              <TodoList todos={todos} remove={remove}/>
            </div>
            </>
    );
}

export default App;
