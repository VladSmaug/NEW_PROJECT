import { useState, useEffect } from "react";

const User = () => {
  const [name, setName] = useState("Tom");

  useEffect(() => {
    document.title = `Привет ${name}`;
  });

  function changeName(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <h3>Имя: {name}</h3>

      <div>
        <p>
          Имя: <input type="text" value={name} onChange={changeName} />
        </p>
      </div>
    </div>
  );
};

export default User;
