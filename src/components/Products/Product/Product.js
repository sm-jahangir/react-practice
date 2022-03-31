import React from 'react'
import './Product.css'

function Product(props) {
    const {name, picture, age} = props.product;

    
  return (
    <div className='product'>
        <img src={picture} alt={name} />
        <h2>{name}</h2>
        <p>{age}</p>
        <button>Add To Card</button>
    </div>
  )
}

export default Product
/*
import React from 'react'

function Product(props) {
  return (
    <div>
        <h2>{props.product.name}</h2>
    </div>
  )
}

export default Product
*/