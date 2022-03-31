import React from 'react'
import './Product.css'

function Product(props) {
    const {id, name, picture, age} = props.product;
    const addToCart = (id) => {
      console.log('Items Added', id);
    }
  return (
    <div className='product'>
        <img src={picture} alt={name} />
        <h2>{name}</h2>
        <p>{age}</p>
        <button onClick={() => addToCart(id)}>Add To Card</button>
    </div>
  )
}

export default Product
/*
import React from 'react'
import './Product.css'

function Product(props) {
    const {id, name, picture, age} = props.product;

    const addToCart = (id) => {
      // console.log('Items Added');
    }
    const addToCartWithParams =() => {
      addToCart(id);
      console.log(id);
    }
  return (
    <div className='product'>
        <img src={picture} alt={name} />
        <h2>{name}</h2>
        <p>{age}</p>
        <button onClick={addToCartWithParams}>Add To Card</button>
    </div>
  )
}

export default Product
*/
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