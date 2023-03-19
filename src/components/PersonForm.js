import React from "react";

const PersonForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange
}) => {
  return (
    <div>
      {" "}
      <form onSubmit={addPerson}>
        <div>
          name: <input type={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input type={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
