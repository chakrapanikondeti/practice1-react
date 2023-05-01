import React from "react";
import PropsExample from "./PropsExample";

export default function UseStateExample() {
  const employeeList = [{ name: "Bhaskar", salary: 50000, location: "kerala" }];
  return (
    <>
      <div>
        <PropsExample employeeList={employeeList} />
      </div>
    </>
  );
}
