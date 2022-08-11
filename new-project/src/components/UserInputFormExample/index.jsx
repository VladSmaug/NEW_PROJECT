import { useState } from "react";

import styles from "./index.module.css";

const Comp = () => {
  const [state, setState] = useState({
    name: "",
    surname: "",
    age: "",
    sex: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sexChange = (e) => {
    const { name, id } = e.target;
    console.log(e.target);
    setState((prevState) => ({
      ...prevState,
      [name]: id,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Input #1</h2>
      <label htmlFor="name">Name:</label>
      <input
        value={state.name}
        type="text"
        onChange={handleChange}
        name="name"
      />
      <label htmlFor="surname">Surname</label>
      <input
        value={state.surname}
        type="text"
        onChange={handleChange}
        name="surname"
      />
      <label htmlFor="Age">Age:</label>
      <input
        value={state.age}
        type="number"
        onChange={handleChange}
        name="age"
      />
      <div className={styles.malefemale}>
        <label htmlFor="sex">Male</label>
        <input
          value={state.sex}
          type="radio"
          onChange={sexChange}
          name="sex"
          id="Male"
        />
        <label htmlFor="sex">Female</label>
        <input
          value={state.sex}
          type="radio"
          onChange={sexChange}
          name="sex"
          id="Female"
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};
export default Comp;
