import React, { useState } from "react";

import styles from "./index.module.css";

const initialState = [
  { id: 1, title: "Post #1", text: "lorem", likes: 0 },
  { id: 2, title: "Post #2", text: "lorem", likes: 1 },
  { id: 3, title: "Post #3", text: "lorem", likes: 2 },
];

const ArrayChanger = () => {
  const [posts, setPosts] = useState(initialState);

  const likeHandler = (id) => {
    setPosts(
      posts.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  const deleteHandler = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      Posts:
      {posts.map(({ id, title, text, likes }) => (
        <div key={id} className={styles.post}>
          <h1>{title}</h1>
          <h3>{text}</h3>
          <button onClick={() => likeHandler(id)}>Likes: {likes}</button>
          <button onClick={() => deleteHandler(id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ArrayChanger;
