import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <District name="Kurigram" vibag="Rangpur"></District>
      <District name="Kurigram" vibag="Rangpur"></District>
      <District name="Kurigram" vibag="Rangpur"></District>
      <District name="Kurigram" vibag="Rangpur"></District> */}
      <LoadPost></LoadPost>
    
    </div>
  );
}
function LoadPost() {
  const [posts, setPost] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => setPost(posts));
  }, []);
  return (
    <div>
      <h1>Post:</h1>
      {
        posts.map((post, index) => <Post key={index+1} title={post.title}></Post>)
      }
    </div>
  )
}
function Post(props) {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  )
}

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 5;
    setPower(newPower);
  }
  return (
    <div className='district'>
      <h2>Division: {props.vibag}</h2>
      <h3>District: {props.name}</h3>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}


export default App;
