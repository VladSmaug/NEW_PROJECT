import React from "react";

const Todo = ({ text, setTodos, todos, todo, inputDate }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHanler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
        <hr />
        was created: {inputDate}
      </li>
      <button onClick={completeHanler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
