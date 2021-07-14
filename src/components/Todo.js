import React from "react";

const Todo = ({ text }) => {
  return (
    <div>
      <li className="todo-item">{text}</li>
      <button className="delete-btn">Delete</button>
    </div>
  )
}

export default Todo;