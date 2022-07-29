import React, { useState } from "react";
import styles from "./index.module.css";

const AnotherExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter</h2>
      <button className={styles.example}>Add</button>
      <button className={styles.example}>Remove</button>
    </div>
  );
};
export default AnotherExample;
