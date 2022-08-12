import { useState } from "react";

import Form from "./Components/Form";
import TodoList from "./Components/Todolist";

import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <header>
        <h1>ToDo List </h1>
      </header>
      <div>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          setTodos={setTodos}
          todos={todos}
        />
        <TodoList setTodos={setTodos} todos={todos} />
      </div>
    </div>
  );
};
export default App;
