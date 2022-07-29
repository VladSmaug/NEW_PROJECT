import React, { useState } from "react";
import { styles } from "";

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.example}>
      <h1>Counter App</h1>
      <p>Ви натиснули {count} разів</p>
      <button onClick={() => setCount(count + 1)}>Натисни мене</button>
    </div>
  );
};
export default Example;
