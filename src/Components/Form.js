import { React, useState } from "react";

import ".././App.css";

const Form = ({
  inputText,
  setInputText,
  setTodos,
  todos,
  setStatus,
  inputDate,
  setInputDate,
  isEditing,
  setIsEditing,
  currentTodo,
  setCurrentTodo,
}) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const inputDateHandler = (e) => {
    console.log(e.target.value);
    setInputDate(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return isEditing ? (
    <form>
      <input
        name="editTodo"
        type="text"
        placeholder="Edit todo"
        value={currentTodo.text}
        onChange={}
      />
      <input
        type="date"
        onChange={inputDateHandler}
        value={inputDate}
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <button type="submit">Update</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  ) : (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <input
        type="date"
        onChange={inputDateHandler}
        value={inputDate}
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
