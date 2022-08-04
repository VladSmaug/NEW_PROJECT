import { useState, useRef } from "react";

export default function FormWithHook() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      surname,
      age,
      sex,
    };
    console.log(data);
  };

  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="surname">Surname</label>
          <input
            id="surname"
            type="text"
            onChange={(e) => setSurname(e.target.value)}
          />
          <label htmlFor="Age">Age:</label>
          <input
            id="message"
            type="number"
            onChange={(e) => setAge(e.target.value)}
          />
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
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}
