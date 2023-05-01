import React from "react";

export default function PropsExample(props) {
  return (
    <>
      {props.employeeList.map((value, index) => (
        <>
          <h2 key={index}>
            Name: {value.name} Salary: {value.salary} Location: {value.location}
          </h2>
        </>
      ))}
    </>
  );
}
