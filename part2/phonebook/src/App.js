import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNumber = (name) => {
    setNewName(name);
    setPersons(persons.concat({name}));
  }

  const getPerson = (name) => {
    return persons.find(e => e.name === name)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const name = event.target[0].value

    if (getPerson(name)) {
      return alert(`${name} is already added to the phonebook`)
    }

    addNumber(name);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return <p key={person.name}>{person.name}</p>
      })}
    </div>
  )
}

export default App