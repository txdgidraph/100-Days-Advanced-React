import React from "react";
import Person from "../person";

const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "Castro",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Tonny",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Giddy",
      age: 27,
      skill: "Python",
    },
  ];
  const personList = persons.map( p_details => <Person person_props={p_details} key={p_details.id} />);
  return (
    <div>
      <h1>LIST RENDERING IN REACT.JS</h1>
      {/* {
          names.map(x => <h2>{x}</h2>)
      } */}
      {personList}
    </div>
  );
};

export default NameList;
