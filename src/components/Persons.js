import React from "react";

const Persons = ({filterPeopleList}) => {
  return (
    <div>
      {" "}
      {filterPeopleList.map((person) => (
        <p key={person.id}>
          {person.name} {person.userNumber}
        </p>
      ))}
    </div>
  );
};

export default Persons;
