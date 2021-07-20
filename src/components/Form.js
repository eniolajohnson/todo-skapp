import React from "react";
import nextId from "react-id-generator";

const Form = ({ inputText, setInputText, todos, setTodos, skyAdd }) => {
  const id = nextId();

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos, {
          todoText: inputText,
          id
        }
      ]);
    }
    
    setInputText("");
    await skyAdd(todos);
  };

  return (
    <form>
      <input 
        value={inputText} 
        onChange={handleInputText} 
        type="text" className="input-text" />
      <button onClick={handleAddTodo} className="add-todo">Add todo</button>
    </form>
  );
}

export default Form;
