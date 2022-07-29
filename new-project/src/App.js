import Example from "./components/Example";
import AnotherExample from "./components/AnotherExample";
import styles from "./App.module.css";
import ArrayChanger from "./components/Arrays/Array";

const App = () => {
  return (
    <div>
      <Example />
      <AnotherExample />;
      <ArrayChanger />
    </div>
  );
};
export default App;
