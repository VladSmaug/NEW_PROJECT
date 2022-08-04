import { useState, useEffect } from "react";

const User = () => {
  const [name, setName] = useState("Tom");

  useEffect(() => {
    document.title = `Привет ${name}`;
  }, [name]);

  const changeName = (event) => {
    const value = event.target.value;
    setName(value);
  };
  return (
    <div>
      <h3>Имя: {name}</h3>

      <div>
        <p>
          Имя: <input type="text" onBlur={changeName} />
        </p>
      </div>
    </div>
  );
};

export default User;
