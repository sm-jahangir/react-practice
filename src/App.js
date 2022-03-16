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
      <Person name="Jahangir Alam"></Person>
      <Person name="Rubel Hossen"></Person>
      <Person nayika="Kopila" name="Bapparaz"></Person>
      <Friend name="Jahangir Alam" phone="01767275819"></Friend>
    </div>
  );
}
function Person(props) {
  console.log(props)
  return(
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Naika: {props.nayika}</p>
    </div>
  )
}
function Friend(props) {
  console.log(props);
  return (
    <div className='person'>
      <h3>Name: {props.name}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
