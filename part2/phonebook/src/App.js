import { useState } from 'react'
import { Filter } from './Components/FilterComponent'
import { PersonForm } from './Components/PersonFormComponent'
import { NumberList } from './Components/NumberListComponent'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  // States
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // Event Handlers
  const handleNumberEntry = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const name = event.target[0].value

    if (getPerson(name)) {
      return alert(`${name} is already added to the phonebook`)
    }

    addNumber(name);
  }

  // Util
  const addNumber = (name) => {
    setNewName(name);
    setPersons(persons.concat({name, number:newNumber, id:persons.length+1}));
  }

  const getPerson = (name) => {
    return persons.find(e => e.name === name)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <PersonForm handleFormSubmit={handleFormSubmit} newNumber={newNumber} handleNumberEntry={handleNumberEntry}/>
      <h2>Numbers</h2>
      <NumberList persons={persons} filter={filter}/>
    </div>
  )
}

export default App