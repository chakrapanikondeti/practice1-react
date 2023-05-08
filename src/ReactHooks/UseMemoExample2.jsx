import React, { useMemo, useState } from "react";

export default function UseMemoExample2() {
  console.log(`parent component`);

  const [number, setNumber] = useState("");
  const [add, setAdd] = useState("");
  const [subtract, setSubtract] = useState("");
  const [multiply, setMultiply] = useState("");
  const [division, setDivision] = useState("");
  const [count, setCount] = useState("");

  const squv = useMemo(() => square(number), [number]);

  const addt = useMemo(() => addition(add), [add]);

  const subt = useMemo(() => sub(subtract), [subtract]);

  const mult = useMemo(() => mul(multiply), [multiply]);

  const divn = useMemo(() => div(division), [division]);

  return (
    <>
      square
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        placeholder="input for square"
      />{" "}
      <br />
      <br />
      addition
      <input
        type="number"
        onChange={(e) => setAdd(e.target.value)}
        value={add}
        placeholder="input for addition"
      />{" "}
      <br />
      <br />
      subtraction
      <input
        type="number"
        onChange={(e) => setSubtract(e.target.value)}
        value={subtract}
        placeholder="input for Subtraction"
      />{" "}
      <br />
      <br />
      multiply
      <input
        type="number"
        onChange={(e) => setMultiply(e.target.value)}
        value={multiply}
        placeholder="input for Multiply"
      />{" "}
      <br />
      <br />
      division
      <input
        type="number"
        onChange={(e) => setDivision(e.target.value)}
        value={division}
        placeholder="input for Division"
      />{" "}
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>counter</button>
      <h2>counter:{count}</h2>
      <h2>Square value: {squv}</h2>
      <h2>Addition value: {addt}</h2>
      <h2>Subtraction value: {subt}</h2>
      <h2>Multiplication value: {mult}</h2>
      <h2>Division value: {divn}</h2>
    </>
  );
}
const square = (number) => {
  console.log("square function calling");
  return Math.pow(number, 2);
};
const addition = (add) => {
  console.log("add function calling");
  return +add + 2;
};
const sub = (subtract) => {
  console.log("subtract function calling");
  return +subtract - 2;
};
const mul = (multiply) => {
  console.log("multiply function calling");
  return +multiply * 2;
};
const div = (division) => {
  console.log("division function calling");
  return +division / 2;
};
