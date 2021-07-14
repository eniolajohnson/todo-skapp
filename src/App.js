import React, {useState} from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList"
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>What's your focus today?</h1>
        <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </header>
    </div>
  );
}

export default App;
