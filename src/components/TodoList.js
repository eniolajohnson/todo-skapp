import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-body">
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo
            key={todo.id} 
            text={todo.todoText}
            todo={todo} 
            todos={todos} 
            setTodos={setTodos} 
          />
        )
        )}
      </ul>
    </div>
  )
}

export default TodoList;