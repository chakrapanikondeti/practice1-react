import React, { memo, useCallback, useState } from "react";

export default function UseCallbackExample() {
  const [age, setAge] = useState(19);
  const [salary, setSalary] = useState(10000);

  const updateAge = useCallback(() => setAge(age + 1), [age]);
  const updateSalary = useCallback(() => setSalary(salary + 1000), [salary]);
  return (
    <>
      <div>
        <Title />
        <Count text="Age" count={age} />
        <Button handleClick={updateAge} name="updateAge" />

        <br />
        <Count text="Salary" count={salary} />
        <Button handleClick={updateSalary} name="updateSalary" />
      </div>
    </>
  );
  console.log("parent is calling");
}

const Title = memo(() => {
  console.log("title is calling");
  return (
    <>
      <h2>This is title component</h2>
    </>
  );
});

const Button = memo((props) => {
  console.log(`button component ${props.name}`);
  return (
    <>
      <button onClick={props.handleClick}>{props.name}</button>
    </>
  );
});

const Count = memo(({ text, count }) => {
  console.log(`count component ${text}`);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
});
