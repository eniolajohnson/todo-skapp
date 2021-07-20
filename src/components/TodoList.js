import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, skyAdd }) => {
  return (
    <div>
      <ul className="todo-list">
      {todos
        ? todos.map(todo => (
          <Todo
            key={todo.id} 
            text={todo.todoText}
            todo={todo} 
            todos={todos} 
            setTodos={setTodos}
            skyAdd={skyAdd} 
          />
        )
        )
        : null }
      </ul>
    </div>
  )
}

export default TodoList;