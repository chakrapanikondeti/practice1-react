import React, { useState } from "react";

export default function ConditionalComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showData, setShowData] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = () => {
    if (email && password) {
      setShowData(true);
      setError("");
    } else {
      setError("All fields are required!!");
    }
  };

  return (
    <>
      <div
        style={{
          marginLeft: "50px",
          marginTop: "50px",
          border: "1px solid violet",
          borderRadius: "8px",
          paddingBottom: "30px",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        {showData && (
          <div>
            <h2 style={{ color: "green" }}>Email : {email}</h2>
            <h2 style={{ color: "green" }}>Password: {password}</h2>
          </div>
        )}

        <div>
          <h1 style={{ color: "#333" }}>Loginform</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input
            style={{ marginBottom: "15px", width: "60%" }}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <br />
          <input
            style={{ marginBottom: "15px", width: "60%" }}
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <br />
          <button
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              backgroundColor: "orange",
              border: "1px solid red",
              width: "25%",
            }}
            type="button"
            onClick={submitHandler}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
