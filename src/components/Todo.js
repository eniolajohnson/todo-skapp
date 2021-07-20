import React from "react";
import '../App.css'

const Todo = ({ text, todo, todos, setTodos, skyAdd }) => {
  const handleDelete = async (e) => {
    setTodos(todos.filter(item => item.id !== todo.id));
    await skyAdd(todos)
  }
  return (
    <div className="todo-body">
      <li className="todo-item">{text}</li>
      <button onClick={handleDelete} className="delete-btn">Delete</button>
    </div>
  )
}

export default Todo;