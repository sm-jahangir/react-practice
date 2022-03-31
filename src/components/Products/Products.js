import React, { useEffect, useState } from 'react'
import Product from './Product/Product'

function Products() {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(response=>response.json())
        .then(data => setProducts(data));
        // .then(data => console.log(data));
    }, []);
  return (
    <div>
        <h1>Products {products.length}</h1>

    {/* {
        products.map((product, index) => <li key={index+1}>{product.name}</li>)
    } */}
    {
        products.map((product, index) => <Product key={index+1} product={product}></Product>)
    }
    </div>
  )
}

export default Products