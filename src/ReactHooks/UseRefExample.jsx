import React, { useRef } from "react";

export default function UseRefExample() {
  const nameElement = useRef();
  const emailElement = useRef();
  const contactElement = useRef();

  const submitHandler = () => {
    console.log(nameElement.current.value);
    console.log(emailElement.current.value);
    console.log(contactElement.current.value);
  };

  return (
    <>
      <input type="text" ref={nameElement} placeholder="Enter name" />
      <input type="email" ref={emailElement} placeholder="Enter email" />
      <input type="number" ref={contactElement} placeholder="Enter contact" />

      <button onClick={submitHandler}>Submit</button>
      <hr />
      <CounterExample1 />
      <HeadingElement />
    </>
  );
}

// Example2

export function CounterExample1() {
  const count = useRef(0);

  const checkvalue = () => {
    count.current++;
    console.log("countvalue:", count.current);
  };

  return (
    <>
      <button onClick={checkvalue}>Checkvalue</button>
    </>
  );
}

// Example3

export function HeadingElement() {
  let headingEl = useRef();
  const clickHandler = () => {
    console.log(headingEl.current.value);
    headingEl.current.classList.toggle("active");
  };

  return (
    <>
      <h1 ref={headingEl} className="active">
        This is h1 tag
      </h1>
      <button onClick={clickHandler}>Click tO toggle</button>
    </>
  );
}
