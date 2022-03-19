import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
    <ExternalUsers></ExternalUsers>
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

export default App;
