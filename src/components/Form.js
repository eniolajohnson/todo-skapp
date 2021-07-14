import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      console.log('yaay');
      setTodos([
        ...todos, {
          todoText: inputText,
          id: Math.floor(Math.random() * 1000)
        }
      ]);
    }
    
    setInputText("");
  };

  return (
    <form>
      <input 
        value={inputText} 
        onChange={handleInputText} 
        type="text" className="input-text" />
      <button onClick={handleSubmit} className="add-todo">Add todo</button>
    </form>
  );
}

export default Form;