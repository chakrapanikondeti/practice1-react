import React, { useMemo, useState } from "react";

export default function UseMemoExample() {
  const [num, setNum] = useState(0);
  const squaredNum = useMemo(() => squareNum(num), [num]);
  return (
    <>
      <h2>square value:{squaredNum} </h2>
      <input type="number" onChange={(e) => setNum(e.target.value)} />
    </>
  );
}

const squareNum = (num) => {
  return Math.pow(num, 2);
};
