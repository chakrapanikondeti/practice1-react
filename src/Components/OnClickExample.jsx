import React, { useState } from "react";

export default function OnClickExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showDetails = () => {
    console.log("Email", email);
    console.log("Password", password);
  };

  return (
    <>
      {" "}
      <div>
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>
          <input
            type="password"
            placeholder="enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "4px 12px",
          }}
          onClick={showDetails}
        >
          Login
        </button>

        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </>
  );
}
