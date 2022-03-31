import './App.css';
import Products from './components/Products/Products';
import {add, multiply} from './utilities/calculate'

function App() {
  const first = 55;
  const second = 67;
  add(first, second);
  multiply(first, second);
  return (
    <div className="App">
      <Products></Products>
    </div>
  );
}

export default App;
