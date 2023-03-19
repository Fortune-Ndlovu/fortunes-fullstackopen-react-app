import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: 1, userNumber: "555-555-555" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addName = (e) => {
    e.preventDefault();
    // console.log("something", e.target);
  };

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      id: persons.length + 1,
      userNumber: newNumber
    };
    console.log(personObject);
    let personExits = false;
    for (let i = 0; i < persons.length; i++) {
      if (personObject.name === persons[i].name) {
        personExits = true;
        break;
      }
    }
    if (personExits) {
      alert(`${personObject.name} has already been added`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const filterPeopleList = (e) => { 
    console.log(`Filterringg`);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with: <input type={filterPeopleList}/>
      </div>
      
      <h2>Add a New</h2>
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
      <div>
        <h2>Numbers</h2>
        {persons.map((person) => (
          <p key={person.id}>
            {person.name} {person.userNumber}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
