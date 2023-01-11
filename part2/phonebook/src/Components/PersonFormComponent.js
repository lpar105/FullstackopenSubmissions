import React from 'react'

export const PersonForm = ({handleFormSubmit, newNumber, handleNumberEntry}) => {
  return (
    <form onSubmit={handleFormSubmit}>
        <div>
            <h2>Add New</h2>
            <div>name: <input /></div>
            <div>number: <input value={newNumber} onChange={handleNumberEntry}/></div>
            <div><button type="submit">add</button></div>
        </div>
    </form>
  )
}
