import React, { useState } from "react";
import styles from "./index.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.example}>
      <h1>Counter App Component</h1>
      <p>Ви натиснули {count} разів</p>
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        Натисни мене
      </button>
    </div>
  );
};
export default Counter;
