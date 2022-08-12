import React from "react";

const Todo = ({ text, setTodos, todos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== el.id));
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
      <li className="todo-item">{text}</li>
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
