import "./App.css";
const singers = [
  { name: "Jahangir Alam", job: "Student" },
  { name: "Helal", job: "Marketer" },
  { name: "Puspita", job: "Operator" },
];
function App() {
  const nayoks = [
    "Jahangir",
    "Rubel",
    "Bapparaz",
    "Bappi",
    "Manna",
    "Shakib KHan",
    "Ononto Jolil",
    "Nisho",
  ];

  return (
    <div className="App">
      {nayoks.map((nayok) => (
        <li>Name: {nayok}</li>
      ))}

      {singers.map((nayok) => (
        <Person name={nayok.name}></Person>
      ))}
    </div>
  );
}
function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Naika: {props.nayika}</p>
    </div>
  );
}

export default App;
