import React, { useState } from "react";

export default function OnChangeExample() {
  const [fullname, setFullname] = useState("");

  const fullNameHandler = (e) => {
    console.log(e.target, e.target.value);
    setFullname(e.target.value);
  };

  return (
    <>
      <h2>Full Name: {fullname}</h2>
      <input
        type="text"
        value={fullname}
        placeholder="Enter full name"
        onChange={fullNameHandler}
      />
    </>
  );
}
