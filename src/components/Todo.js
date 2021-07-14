import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const handleDelete = (e) => {
    setTodos(todos.filter(item => item.id !== todo.id))
  }
  return (
    <div>
      <li className="todo-item">{text}</li>
      <button onClick={handleDelete} className="delete-btn">Delete</button>
    </div>
  )
}

export default Todo;