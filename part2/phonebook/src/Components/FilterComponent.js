import React from 'react'

export const Filter = ({handleFilterChange}) => {
  return (
    <div>
        Filter by: 
        <input onChange={handleFilterChange}/>
    </div>
  )
}

