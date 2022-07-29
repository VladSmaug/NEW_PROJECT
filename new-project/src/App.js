import Example from "./components/Example";
import AnotherExample from "./components/AnotherExample";
import styles from "./App.module.css";
import ArrayChanger from "./components/Arrays/Array";
import Home from "../src/components/UserExample";

const App = () => {
  return (
    <div>
      <Example />
      <AnotherExample />;
      <ArrayChanger />
      <Home />
    </div>
  );
};
export default App;
