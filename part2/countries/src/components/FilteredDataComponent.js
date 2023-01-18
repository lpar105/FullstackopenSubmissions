import React from 'react'

export const CountryShowcase = ({data}) => {
  const country = data[0]
  return (
    <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area}</p>
        <br />
        <b>Languages:</b>
        <ul>
            {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
        </ul>
        <img src={country.flags.png} />
    </div>
  )
}

export const FilteredData = ({data}) => {
  return (
    <div>
        {data.length > 10 ? 
            <p>Too many options! Use a filter</p> 
            : data.length == 1 ? 
                <CountryShowcase data = {data}/> : 
                data.map(e=> <p key={e.name.official}>{e.name.common}</p>)}
    </div>
  )
}
