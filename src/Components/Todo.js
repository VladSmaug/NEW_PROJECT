import React from "react";

import Timer from "./Timer";

const Todo = ({ text, setTodos, todos, todo, inputDate, setCurrentTodo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...todos, text: e.target.value });
    console.log(todos);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
        <hr />
        Should be done until: {inputDate}
        <hr />
        Remaining time: <Timer inputDate={inputDate} />
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
      <button onClick={handleEditInputChange} className="edit-btn">
        <i className="fas fa-edit"></i>
      </button>
    </div>
  );
};

export default Todo;
