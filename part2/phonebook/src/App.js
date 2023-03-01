import { useState, useEffect } from "react";
import { Filter } from "./Components/FilterComponent";
import { PersonForm } from "./Components/PersonFormComponent";
import { NumberList } from "./Components/NumberListComponent";
import { Notification } from "./Components/Notification";
import personsService from "./Services/persons";
import "./index.css";

const App = () => {
  // States
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notifcationMessage, setNotificationMessage] = useState(null);

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
      if (
        window.confirm(
          `${name} already exists. Would you like to update their phonenumber?`
        )
      ) {
        personsService.update(getPerson(name), newNumber).then(() => {
          personsService.getAll().then((response) => {
            setPersons(response);
          });
          setNotificationMessage(`${name}'s phonenumber updated!`);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 3000);
        });
      }
    } else {
      addNumber(name);
    }
  };

  // Util
  const addNumber = (name) => {
    const newPerson = { name, number: newNumber, id: persons.length + 1 };
    personsService.create(newPerson).then(() => {
      setPersons(persons.concat(newPerson));
      setNotificationMessage(`${name} added to phonebook!`);
      setTimeout(() => {
        setNotificationMessage(null);
      }, 3000);
    });
  };

  const getPerson = (name) => {
    return persons.find((e) => e.name === name);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notifcationMessage} />
      <Filter handleFilterChange={handleFilterChange} />
      <PersonForm
        handleFormSubmit={handleFormSubmit}
        newNumber={newNumber}
        handleNumberEntry={handleNumberEntry}
      />
      <h2>Numbers</h2>
      <NumberList
        persons={persons}
        setPersons={setPersons}
        setNotificationMessage={setNotificationMessage}
        filter={filter}
      />
    </div>
  );
};

export default App;
