import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
    <ExternalUsers></ExternalUsers>
    <hr />
    <Counter></Counter>
    <LoadComment></LoadComment>
    </div>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));

  }, [])
  return (
    <div>
      <h1>External Users</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props) {
  return (
    <div style={{border: '2px solid yellow', margin: '20px', padding: '10px', borderRadius: '10px'}}>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
    </div>
  )
}

// Receap Module
function Counter() {
  const [count, setCount] = useState(20);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}


function LoadComment() {
  const [comment, setComment] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comment => setComment(comment));
  }, [])
  return (
    <div>
      <h2>Comment Box</h2>
      {
        comment.map(comment => <CommentBox name={comment.name} email={comment.email} body={comment.body}></CommentBox>)
      }
    </div>
  )
}
function CommentBox(props) {
  return (
    <div style={{margin:'20px', backgroundColor: '#ddd', padding: '10px', borderRadius: '20px'}}>
      <h3>{props.name}</h3>
      <small style={{backgroundColor: '#08b153', color: 'white', padding: '4px', borderRadius: '21px'}}>{props.email}</small>
      <p>{props.body}</p>
    </div>
  )
}

export default App;
