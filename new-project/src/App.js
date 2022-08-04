import Example from "./components/Example";
import AnotherExample from "./components/AnotherExample";
import ArrayChanger from "./components/Arrays/Array";
import FormWithHook from "./components/UserInputFormExample";
import FormWithRef from "./components/UserInputFormExampleRef";
import User from "./components/SandboxComponent";

import styles from "./App.module.css";

const App = () => {
  return (
    <div>
      <Example />
      <AnotherExample />;
      <ArrayChanger />
      <FormWithHook />
      <FormWithRef />
      <User />
    </div>
  );
};
export default App;
