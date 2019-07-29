import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

import './App.css';



class App extends Component {
  constructor(){
    super();  // super calls on Component's built in constructor
    this.state = {
      monsters: []
    }
  };

  componentDidMount(){  
    fetch('https://jsonplaceholder.typicode.com/users') // make the api request
    .then(response => response.json())  
    // .then(users => console.log(users)) // to see the array of of users
    .then(users => this.setState({ monsters: users}));  // will set the value of monsters listed in state above
  }

  render() {
    return (
      <div className="App">
        <CardList name = "Christopher">
          {this.state.monsters.map(monster => ( 
          <h3 key = {monster.id}> {monster.name} </h3>
          ))}
        </CardList> 
      </div>
    );
  }
}

export default App;
