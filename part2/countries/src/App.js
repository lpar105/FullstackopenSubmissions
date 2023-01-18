import axios from "axios";
import { useState, useEffect } from 'react'
import { FilteredData } from "./components/FilteredDataComponent";


const App = () => {
  const [filter, setFilter] = useState("")
  const [data, setData] = useState([])

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  const getFilteredData = () => {
    return data.filter(e => e.name.common.toLowerCase().includes(filter.toLowerCase()))
  }

  useEffect(()=> {
    axios.get('https://restcountries.com/v3.1/all').then(response => setData(response.data))
  }, [])

  return(
    <>
      <div>Find Countries: <input value={filter} onChange={handleChange}/></div>
      {
        data.length === 0 ? <p>Please wait, fetching data</p> : <FilteredData data={getFilteredData()} setFilter={setFilter}/>
      }
    </>
  )
}

export default App