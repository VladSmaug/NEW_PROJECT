import React, { useState, useEffect } from "react";

import Form from "./Components/Form";
import TodoList from "./Components/Todolist";
import { defaultTodo } from "./utils/constants";

import "./App.css";

const App = () => {
  const todosFromStorage = JSON.parse(localStorage.getItem("todos")) || [];

  const [newTodo, setNewTodo] = useState(defaultTodo);
  const [todos, setTodos] = useState(todosFromStorage);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({});

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="app">
      <header>
        <h1>My ToDo List </h1>
      </header>
      <div>
        <Form
          setTodos={setTodos}
          todos={todos}
          setStatus={setStatus}
          newTodo={newTodo}
          setNewTodo={setNewTodo}
        />
        <TodoList
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
        />
      </div>
    </div>
  );
};
export default App;
