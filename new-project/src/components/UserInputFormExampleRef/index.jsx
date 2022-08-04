import React, { useState } from "react";

const FormWithRef = () => {
  const [sex, setSex] = useState("");

  function submitHandler(e) {
    const { name, surname, age } = e.target;
    console.log(e.target.name);
    e.preventDefault();

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
      <div>
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
        </div>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};
export default FormWithRef;
