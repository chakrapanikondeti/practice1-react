import React, { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useEffect(() => {
    console.log("Name is updated...", name);
  }, [name]);

  useEffect(() => {
    console.log("Contact is updated...", contact);
  }, [contact]);

  useEffect(() => {
    console.log("Email is updated...", email);
  }, [email]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <input
        type="contact"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter contact"
      />
      <input
        type="email"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter email"
      />

      <h2>Name: {name}</h2>
      <h2>Contact: {contact}</h2>
      <h2>email: {email}</h2>
    </>
  );
}
