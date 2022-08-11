import Counter from "./components/Counter";
import AnotherCounter from "./components/AnotherCounter";
import ArrayChanger from "./components/Array";
import Comp from "./components/UserInputFormExample";
import FormWithRef from "./components/UserInputFormExampleRef";
import User from "./components/SandboxComponent";

import styles from "./App.module.css";
import { useState } from "react";

const App = () => {
  const [visibleUser, setVisibleUser] = useState(true);
  const toogleVisibleUser = () => {
    setVisibleUser((visible) => !visible);
  };
  return (
    <div className={styles.wrapper}>
      <Counter />
      <AnotherCounter />;
      <ArrayChanger />
      <Comp />
      <FormWithRef />
      {visibleUser && <User />}
      <button className={styles.showhide} onClick={toogleVisibleUser}>
        Show / Hide
      </button>
    </div>
  );
};
export default App;
