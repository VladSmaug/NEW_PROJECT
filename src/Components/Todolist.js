import React from "react";

import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  inputDate,
  setCurrentTodo,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            key={todo.id}
            todo={todo}
            inputDate={inputDate}
            setCurrentTodo={setCurrentTodo}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
