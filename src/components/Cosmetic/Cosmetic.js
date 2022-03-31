import React from 'react'
import { addToDb, removeFromDb } from '../../utilities/fakeDb';

function Cosmetic(props) {
    const {id, name, price} = props.cosmetic;

    const addToCart = (id) => {
        // console.log('item added', id);
        addToDb(id)
    }
    const removeToCart = (id) => {
        //console.log('item removed', id);
        removeFromDb(id)
    }
  return (
    <div style={{backgroundColor: 'green', color: 'white', borderRadius: '20px', width: '20%', margin: '20px auto', padding: '5px'}}>
        <h3>{id}. Buy This: {name}</h3>
        <p>Only For: ${price}</p>
        <button onClick={ () => addToCart(id)}>Add To Cart</button>
        <button onClick={ () => removeToCart(id)}>Remove To Cart</button>
    </div>
  )
}

export default Cosmetic