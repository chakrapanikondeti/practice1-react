import React, { useReducer } from "react";

function countReducer(state, action) {
  switch (action.type) {
    case "DECREASE":
      return state - 1;
    case "INCREASE":
      return state + 1;
    default:
      return state;
  }
}

export default function UseReducerExample() {
  const [count, dispatch] = useReducer(countReducer, 0);
  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={() => dispatch({ type: "DECREASE" })}>
          Decrease Counter
        </button>
        <button onClick={() => dispatch({ type: "INCREASE" })}>
          increase Counter
        </button>
      </div>
    </>
  );
}
