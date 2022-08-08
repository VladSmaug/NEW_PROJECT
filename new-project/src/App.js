import Example from "./components/Example";
import AnotherExample from "./components/AnotherExample";
import ArrayChanger from "./components/Arrays/Array";
import FormWithHook from "./components/UserInputFormExample";
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
    <div>
      <Example />
      <AnotherExample />;
      <ArrayChanger />
      <FormWithHook />
      <FormWithRef />
      {visibleUser && <User />}
      <button onClick={toogleVisibleUser}>Show / Hide</button>
    </div>
  );
};
export default App;
