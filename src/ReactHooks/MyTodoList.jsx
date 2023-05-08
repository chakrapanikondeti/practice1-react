import React, { useState } from "react";

export default function MyTodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (inputValue) => {
    console.log(inputValue);
    setTodos((todo) => [...todo, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your list"
      />
      <button onClick={() => addTodo(inputValue)}>Click to add</button>

      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
}
