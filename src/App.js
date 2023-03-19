import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("");

  const addName = (e) => {
    e.preventDefault();
    // console.log("something", e.target);
  };

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setNewName(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      id: persons.length + 1
    };

    let personExits = false;
    for (let i = 0; i < persons.length; i++) {
      if (personObject.name === persons[i].name) {
        personExits = true;
        break;
      }
    }
    if (personExits) {
      alert(`${personObject.name} has already been added`);
    } else{
      setPersons(persons.concat(personObject));
      setNewName("");
    }
    
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input type={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <p key={person.id}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
