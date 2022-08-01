import React, { useRef } from "react";

const FormWithRef = () => {
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const ageInputRef = useRef();
  const sexInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredSex = sexInputRef.current.value;

    const userInfo = {
      name: enteredName,
      surname: enteredSurname,
      age: enteredAge,
      sex: enteredSex,
    };

    console.log(userInfo);
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" required id="name" ref={nameInputRef} />
        <label htmlFor="surname">Surname</label>
        <input type="text" required id="surname" ref={surnameInputRef} />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" ref={ageInputRef} />
        <div>
          <label htmlFor="sex">Male</label>
          <input id="sex" type="radio" name="sex" ref={sexInputRef} />
          <label htmlFor="sex">Female</label>
          <input id="sex" type="radio" name="sex" ref={sexInputRef} />
        </div>
      </div>
      <div>
        <button>Add Meetup</button>
      </div>
    </form>
  );
};
export default FormWithRef;
