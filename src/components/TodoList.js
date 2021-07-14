import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-body">
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo
            key={todo.id} 
            text={todo.todoText}
          />
        )
        )}
      </ul>
    </div>
  )
}

export default TodoList;