import './App.css';

const number = 5555;
const singer = {name: 'Dr. Jahangir Alam', job: 'Web Developer'};
const singerStyle = {
  backgroundColor: 'yellow',
  color: 'red',
}
function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Friend></Friend>
    </div>
  );
}
function Person() {
  return(
    <div className='person'>
      <h1>Sakib Al Hasan</h1>
      <p>Profession: Cricket</p>
    </div>
  )
}
function Friend() {
  return (
    <div className='person'>
      <h3>Jhankar Mahbub</h3>
      <p>Body Builder</p>
    </div>
  )
}

export default App;
