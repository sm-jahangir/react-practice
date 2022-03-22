import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
      <Header></Header>
        {/* <LoadCountries></LoadCountries> */}
        <Countries></Countries>
        <Person></Person>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect( () => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(response => response.json())
//     .then(country => setCountries(country));
//   }, []);
//   return (
//     <div className='container'>
//       <h2 className='text-center my-4 py-4'>Load Countries {countries.length}</h2>
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//           {
//             countries.map((country, index) => <Country key={index} name={country.name.common} flags={country.flags.png} population={country.population}></Country>)
//           }
//       </div>
//     </div>
//   )
// }
// function Country(props) {
//   return (
//     <div className="col">
//       <div className="card">
//         <img src={props.flags} style={{width: '200px', height: '100px', margin: 'auto'}} />
//         <div className="card-body">
//           <h5 className="card-title">{props.name}</h5>
//           <small>{props.population}</small>
//           <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

export default App;
