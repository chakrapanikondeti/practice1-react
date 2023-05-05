import React, { useEffect, useReducer, useState } from "react";

const initialStudentList = [
  {
    id: 1,
    name: "Chakrapani",
    branch: "CIVIL",
    contact: "7893816964",
  },
  {
    id: 2,
    name: "Bhaskar",
    branch: "EEE",
    contact: "9533713553",
  },
  {
    id: 3,
    name: "Lakshmi",
    branch: "CSE",
    contact: "1234567890",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "DELETE":
      return state.filter((student) => student.id !== action.id);
    default:
      return state;
  }
}

export default function UseReducerStudentList() {
  const [studentList, dispatch] = useReducer(reducer, initialStudentList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("Student List", studentList);
  }, [studentList]);

  const handleDelete = (student) => {
    dispatch({ type: "DELETE", id: student.id });
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredStudentList = studentList.filter((student) => {
    return student.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      <div>
        <h1>Student List</h1>
        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={handleSearch}
        />
        {filteredStudentList &&
          filteredStudentList.map((student) => (
            <div key={student.id}>
              <p>Name: {student.name}</p>
              <p> Branch: {student.branch}</p>
              <p>Contact: {student.contact}</p>
              <button onClick={() => handleDelete(student)}>Delete</button>
            </div>
          ))}
      </div>
    </>
  );
}
