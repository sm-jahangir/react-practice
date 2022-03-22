import React from 'react'
import Cosmetic from '../Cosmetic/Cosmetic'

function Cosmetics() {
  const cosmetics = [
    {id: 1, name: 'Alta', price: 100},
    {id: 2, name: 'Balish', price: 200},
    {id: 3, name: 'Malish', price: 300},
    {id: 4, name: 'Palish', price: 400},
    {id: 5, name: 'Nalish', price: 500},
  ]
  return (
    <div>
      <h1>Welcome to Cosmetics Website</h1>
      {
        cosmetics.map((cosmetic, index) => <Cosmetic key={index} cosmetic={cosmetic}></Cosmetic>)
      }
    </div>
  )
}

export default Cosmetics