import React, { useState } from "react";
import styles from "./index.module.css";

const AnotherExample = () => {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <div className={styles.example}>
      <h2>Counter {counter}</h2>
      <button onClick={increment} className={styles.example_success}>
        Add
      </button>
      <button onClick={decrement} className={styles.example_failure}>
        Remove
      </button>
    </div>
  );
};
export default AnotherExample;
