import React from 'react'

function Country(props) {
  //Second System
  const {name, population, flags} = props.country;
  return (
    <div>
        <div className="col">
        <div className="card">
            <img src={flags.png} style={{width: '100%', height: '150px', margin: 'auto'}} alt="Countries Load in flags"/>
            <div className="card-body">
            <h5 className="card-title">{name.common}</h5>
            <small>{population}</small>
            <p className="card-text">This is a longer card with supporting text below.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Country


// function Country(props) {
//   return (
//     <div>
//         <div className="col">
//         <div className="card">
//             <img src={props.flags} style={{width: '200px', height: '100px', margin: 'auto'}} alt="Countries Load in flags"/>
//             <div className="card-body">
//             <h5 className="card-title">{props.name}</h5>
//             <small>{props.population}</small>
//             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//             </div>
//         </div>
//         </div>
//     </div>
//   )
// }