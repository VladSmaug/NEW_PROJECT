import React from "react";

import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  currentTodo,
  setCurrentTodo,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            name={todo.name}
            key={todo.id}
            todo={todo}
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
