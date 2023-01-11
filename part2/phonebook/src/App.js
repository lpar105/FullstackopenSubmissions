import { useState } from 'react'

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

  const addNumber = (name) => {
    setNewName(name);
    setPersons(persons.concat({name, number:newNumber, id:persons.length}));
  }

  const getPerson = (name) => {
    return persons.find(e => e.name === name)
  }

  const isIncludedByFilter = (person) => {
    return person.name.toLowerCase().includes(filter.toLowerCase())
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>Filter by: 
        <input onChange={handleFilterChange}/>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <h2>Add New</h2>
          <div>name: <input /></div>
          <div>number: <input value={newNumber} onChange={handleNumberEntry}/></div>
          <div><button type="submit">add</button></div>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => isIncludedByFilter(person)).map(person => {
        return <p key={person.id}>{person.name} - {person.number}</p>
      })}
    </div>
  )
}

export default App