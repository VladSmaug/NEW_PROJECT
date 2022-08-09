import React, { useState } from "react";
import styles from "./index.module.css";

const AnotherCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className={styles.example}>
      <h2>Counter : {counter}</h2>
      <button onClick={increment} className={styles.example_success}>
        Add
      </button>
      <button onClick={decrement} className={styles.example_failure}>
        Remove
      </button>
    </div>
  );
};
export default AnotherCounter;
