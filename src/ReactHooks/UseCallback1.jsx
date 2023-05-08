import React, { memo, useCallback, useState } from "react";

export default function UseCallback1() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(
    (inputValue) => {
      console.log(inputValue);

      setTodos((todo) => [...todo, inputValue]);
    },
    [todos]
  );

  return (
    <>
      <button onClick={() => setCount(count + 5)}>count 5</button>
      <h1>count: {count}</h1>

      <Todos todos={todos} addTodo={addTodo} />
      <hr />
    </>
  );
}

const Todos = memo(({ todos, addTodo }) => {
  console.log("child is rendering");

  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <h2> Todo List</h2>

      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add items"
      />
      <button onClick={() => addTodo(inputValue)}>Add Todo</button>
      {todos.map((todo, index) => {
        return (
          <>
            <p key={index}>{todo}</p>
          </>
        );
      })}
    </>
  );
});
