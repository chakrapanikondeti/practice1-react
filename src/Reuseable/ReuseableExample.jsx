import React from "react";
import Button from "./Button";

export default function ReuseableExample() {
  const buttonOnClickHandler = (buttonName) => {
    console.log("Button clicked", buttonName);
  };

  return (
    <>
      <Button onClick={buttonOnClickHandler} name="Click Here" />
      <Button onClick={buttonOnClickHandler} name="Button 1" />
      <Button onClick={buttonOnClickHandler} name="Button 2" />
      <Button onClick={buttonOnClickHandler} name="Button 3" />
    </>
  );
}
