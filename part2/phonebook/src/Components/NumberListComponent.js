import React, { useEffect } from 'react'

export const NumberList= ({persons, filter}) => {
    
  const isIncludedByFilter = (person) => {
    return person.name.toLowerCase().includes(filter.toLowerCase())
  }

  return (
    <>
        {persons.filter(person => isIncludedByFilter(person))
            .map(person => {
                return <p key={person.id}>{person.name} - {person.number}</p>
            }
        )}
    </>
  )
}
