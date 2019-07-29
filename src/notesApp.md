import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(){
    super();  // will call on Component's built in constructor
    // the keys/id's will be called with monsters.name
    this.state = {
      monsters: []  // because we looped through and used setState, we don't need to hardcode the data
        // {
        //   name: 'Acuna Jr',
        //   id: 13
        // },
        // {
        //   name: 'Freeman',
        //   id: 5
        // },
        // {
        //   name: 'Donaldson',
        //   id: 20
        // },
      // ]
    }
  };

  componentDidMount(){  // will wait for the component to mount, then fetch the users and then update the state's users 
    fetch('https://jsonplaceholder.typicode.com/users') // make a api request
    .then(response => response.json())  // the response is the actual body
    // .then(users => console.log(users)) // to see the array of of users
    .then(users => this.setState({ monsters: users}));  // no longer need to hard code our original monsters
  }


      // <h3 key = { monster.id }>  whatever here <h3>

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => ( 
          <h3 key = {monster.id}> {monster.name} </h3>
          ))}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <CardList name = "Christopher">
          {/* <h2>Soltis</h2>       Now, instead of passing Soltis and the text below, we want to add in the state
          <h5>this text along with Soltis are child-props</h5>     */}
            {this.state.monsters.map(monster => ( 
          <h3 key = {monster.id}> {monster.name} </h3>
          ))}
        </CardList> 
        {/* {this.state.monsters.map(monster => ( 
          <h3 key = {monster.id}> {monster.name} </h3>
          ))} */}
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
