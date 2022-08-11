import React, { useState } from "react";

import styles from "./index.module.css";

const FormWithRef = () => {
  const [sex, setSex] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const { name, surname, age } = e.target;
    console.log(e.target.name);

    const userInfo = {
      name: name.value,
      surname: surname.value,
      age: age.value,
      sex,
    };

    console.log(userInfo);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.form}>
        <h2>Input #2</h2>
        <label htmlFor="name">Name</label>
        <input type="text" required id="name" />
        <label htmlFor="surname">Surname</label>
        <input type="text" required id="surname" />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" />
        <div>
          <label htmlFor="sex">Male</label>
          <input
            id="sex"
            type="radio"
            name="sex"
            onChange={() => setSex("Male")}
          />
          <label htmlFor="sex">Female</label>
          <input
            id="sex"
            type="radio"
            name="sex"
            onChange={() => setSex("Female")}
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default FormWithRef;
