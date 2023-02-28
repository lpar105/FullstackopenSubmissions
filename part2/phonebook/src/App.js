import { useState, useEffect } from "react";
import { Filter } from "./Components/FilterComponent";
import { PersonForm } from "./Components/PersonFormComponent";
import { NumberList } from "./Components/NumberListComponent";
import personsService from "./Services/persons";

const App = () => {
  // States
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // Effects
  useEffect(() => {
    personsService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  // Event Handlers
  const handleNumberEntry = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value;

    if (getPerson(name)) {
      return alert(`${name} is already added to the phonebook`);
    }

    addNumber(name);
  };

  // Util
  const addNumber = (name) => {
    const newPerson = { name, number: newNumber, id: persons.length + 1 };
    personsService.create(newPerson).then(() => {
      setPersons(persons.concat(newPerson));
    });
  };

  const getPerson = (name) => {
    return persons.find((e) => e.name === name);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <PersonForm
        handleFormSubmit={handleFormSubmit}
        newNumber={newNumber}
        handleNumberEntry={handleNumberEntry}
      />
      <h2>Numbers</h2>
      <NumberList persons={persons} filter={filter} />
    </div>
  );
};

export default App;
