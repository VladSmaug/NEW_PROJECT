import { React, useState, useEffect } from "react";

import styles from "./index.module.css";

const User = () => {
  const [count, setCount] = useState(0);

  const [numbers, setNumbers] = useState([1, 2, 3]);

  const addNumber = () => {
    const randomNumber = Math.round(Math.random() * 10);

    const newArr = [...numbers, randomNumber];
    setNumbers(newArr);
  };

  useEffect(() => {
    console.log("component was rendered");
  }, []);

  useEffect(() => {
    console.log("component was updated");
  });

  useEffect(() => {
    console.log("count / number was changed");
  }, [count, numbers]);

  useEffect(() => {
    console.log("Component was uploaded");

    return () => {
      console.log("Will unmount");
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2>Counter unit</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>New number</button>
    </div>
  );
};

export default User;

// class User extends Component {
//   state = {
//     numbers: [1, 2, 3],
//   };
//   addRandomNumber = () => {
//     const randomNumber = Math.round(Math.random() * 100);
//     this.setState({
//       numbers: [...this.state.numbers, randomNumber],
//     });
//   };

//   componentDidMount() {
//     console.log("Component was uploaded");
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log(prevProps, prevState, this.props, this.state);
//   }
//   componentWillUnmount() {
//     console.log("Component will be deleted");
//   }
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.numbers.map((num, index) => (
//             <li key={index}>{num}</li>
//           ))}
//         </ul>
//         <button onClick={this.addRandomNumber}>New number</button>
//       </div>
//     );
//   }
// }
// export default User;
