import { React } from "react";

import { defaultTodo } from "../utils/constants";

const Form = ({ setTodos, todos, setStatus, newTodo, setNewTodo }) => {
  const inputTextHandler = (e) => {
    const value = e.target.value;

    setNewTodo((prev) => ({ ...prev, name: value }));
  };

  const inputDateHandler = (e) => {
    const value = e.target.value;

    setNewTodo((prev) => ({ ...prev, date: value }));
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    const date = new Date(newTodo.date).toDateString();

    setTodos([...todos, { ...newTodo, date: date }]);
    setNewTodo(defaultTodo);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={newTodo.name}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <input
        type="date"
        onChange={inputDateHandler}
        value={newTodo.date}
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
