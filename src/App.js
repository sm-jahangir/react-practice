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
      <h1 style={singerStyle}>number {number + 2222}</h1>
      <h2 style={{color:'red', backgroundColor: 'yellowgreen', padding: '10px 20px'}}>{singer.name} {singer.job}</h2>
    </div>
  );
}

export default App;
