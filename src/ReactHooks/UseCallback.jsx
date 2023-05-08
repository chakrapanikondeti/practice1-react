import React, { memo, useCallback, useState } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const squaredNum = useCallback(
    (num) => {
      console.log("squaredNum", num);
      setNumber(Math.pow(num, 2));
    },
    [number]
  );

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <h2>counter: {count}</h2>
      <hr />
      <ShowNumber number={number} setNumber={squaredNum} />
    </>
  );
}

const ShowNumber = memo(({ number, setNumber }) => {
  console.log("child is calling");
  return (
    <>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number to get square"
      />
      <h2>Squared Number: {number}</h2>
    </>
  );
});
