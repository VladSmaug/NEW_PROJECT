import React from "react";

import Timer from "./Timer";

const Todo = ({
  text,
  setTodos,
  todos,
  todo,
  inputDate,
  setCurrentTodo,
  currentTodo,
}) => {
  const isItemEdit = currentTodo.id === todo.id;

  const deleteHandler = () => {
    const todosCopy = [...todos];
    const changedTodos = todosCopy.filter((el) => el.id !== todo.id);

    setTodos(changedTodos);
  };

  const completeHandler = () => {
    const todosCopy = [...todos];
    const changedTodos = todosCopy.map((el) => {
      if (el.id === todo.id) {
        return { ...el, completed: !el.completed };
      }
      return el;
    });

    setTodos(changedTodos);
  };

  const handleEditClick = () => {
    if (isItemEdit) {
      const todosCopy = [...todos];
      // find index of the editable item
      const todoId = todosCopy.findIndex((item) => {
        if (item.id === currentTodo.id) {
          return item;
        }
      });

      // change object of the editable item in the array
      todosCopy.splice(todoId, 1, currentTodo);
      // need to off edit mode for the currentTodo item before we return from function(check isItemEdit variable)
      setCurrentTodo({});

      return setTodos(todosCopy);
    }

    setCurrentTodo(todo);
  };

  const handleEditInputChange = (e) => {
    const value = e.target.value;
    setCurrentTodo((prev) => ({ ...prev, text: value }));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {isItemEdit ? (
          <input
            type="text"
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />
        ) : (
          text
        )}
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
      <button onClick={handleEditClick} className="edit-btn">
        <i className="fas fa-edit"></i>
      </button>
    </div>
  );
};

export default Todo;
