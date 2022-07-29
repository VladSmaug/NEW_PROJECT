import React, { useState } from "react";

const ArrayChanger = () => {
  const initialState = [
    { id: 1, title: "Title1", text: "Text1", likes: 0 },
    { id: 2, title: "Title2", text: "Text2", likes: 1 },
    { id: 3, title: "Title3", text: "Text3", likes: 2 },
  ];

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
    <div>
      Posts:
      {posts.map(({ id, title, text, likes }) => (
        <div key={id}>
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
