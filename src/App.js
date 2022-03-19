import "./App.css";

function App() {
  const products = [
    {name: 'Laptop', price: '75000'},
    {name: 'Iphone', price: '105000'},
    {name: 'Watch', price: '5000'},
    {name: 'Television', price: '7000'},
  ]
  return (
  <div className="App">
    {/* <Product name="laptop" price="25000"></Product>
    <Product name="Iphone" price="15000"></Product>
    <Product name="Watch" price="5000"></Product> */}
    {
      products.map(product => <Product name={product.name} price={product.price}></Product> )
    }
  </div>
  )
}
function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
