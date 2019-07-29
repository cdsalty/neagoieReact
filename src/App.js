import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super();
    // the keys/id's will be called with monsters.name
    this.state = {
      monsters: [
        {
          name: 'Acuna Jr',
          id: 13
        },
        {
          name: 'Freeman',
          id: 5
        },
        {
          name: 'Donaldson',
          id: 20
        },
      ]
    }
  };

      // <h3 key = { monster.id }>  whatever here <h3>

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h3 key = {monster.id}> {monster.name } </h3>)
        }
      </div>
    );
  }
}
// function App() {  // simple function that will be called later, inside index.js
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
