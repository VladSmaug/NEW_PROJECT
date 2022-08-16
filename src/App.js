import React, { useState, useEffect } from "react";

import Form from "./Components/Form";
import TodoList from "./Components/Todolist";

import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [inputDate, setInputDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
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
    if (todos.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      return;
    }

    const todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
  };

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  return (
    <div className="app">
      <header>
        <h1>My ToDo List </h1>
      </header>
      <div>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          setTodos={setTodos}
          todos={todos}
          setStatus={setStatus}
          setInputDate={setInputDate}
          inputDate={inputDate}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
        />
        <TodoList
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos}
          inputDate={inputDate}
          setCurrentTodo={setCurrentTodo}
        />
      </div>
    </div>
  );
};
export default App;
