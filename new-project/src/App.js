import Form from "./Components/Form";
import TodoList from "./Components/Todolist";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <div>
        <Form />
        <TodoList />
      </div>
    </div>
  );
};
export default App;
