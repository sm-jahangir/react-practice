import React, { useEffect, useState } from 'react'
import Country from './Country/Country';

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(country => setCountries(country));
  }, []);
  return (
    <div>
        
    <div className='container'>
      <h2 className='text-center my-4 py-4'>Load Countries {countries.length}</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* {
            //First System
            countries.map((country, index) => <Country key={index} name={country.name.common} flags={country.flags.png} population={country.population}></Country>)
          } */}
          {
            //Second System
            countries.map((country, index) => <Country key={index} country={country}></Country>)
          }
      </div>
    </div>

    </div>
  )
}
