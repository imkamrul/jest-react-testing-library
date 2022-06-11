import React from "react";

const Todo = ({ content }) => {
  const { title, completed, id } = content;
  const h1 = <h1> hello{title}</h1>;
  const text = completed ? <strike>{h1}</strike> : h1;
  return <div data-testid={`todo-${id}`}>{text}</div>;
};

export default Todo;
