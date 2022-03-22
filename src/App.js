import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [steps, setSteps] = useState(0);

  const increaseSteps = () => {
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  }
  useEffect( () => {
    console.log(steps);
  }, [steps])
  return (
    <div className="App">
      <h2>Power: {steps}</h2>
      <button onClick={increaseSteps}>Click</button>
    </div>
  );
}

export default App;
