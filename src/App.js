import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    
    </div>
  );
}
function Counter(props) {
  const [count, setCount] = useState(55)

  const increaseCount = () => setCount(count + 1); 
  const decreaseCount = () => setCount(count - 1); 
  
  // const increaseCount = () => {
  //   setCount(count + 1);
  // }

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return (
    <div>
      <h1>Count:  {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>DeCrease</button>
    </div>
  )
}

export default App;
