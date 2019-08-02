import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';



class App extends Component {
  constructor(){
    super();  // super calls on Component's built in constructor
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount(){  
    fetch('https://jsonplaceholder.typicode.com/users') // make the api request
    .then(response => response.json())  
    // .then(users => console.log(users)) // to see the array of of users
    .then(users => this.setState({ monsters: users}));  // will set the value of monsters listed in state above
  }

  render() {
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input type='search' 
        placeholder='Search Monster' 
        onChange = {(e) => this.setState({ searchField: e.target.value})} /> 
        {/* <CardList monsters={this.state.monsters} /> */}
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;

/*
To console.log the new, updated state value:
  onChange = {(e) => this.setState({ searchField: e.target.value}, () => console.log(this.state)
  );
}} 

Other: 
 onChange = {(e) => this.setState({ searchField: e.target.value})} --- returns actual value typed
 onChange = {e => console.log(e.target)} would return just the html element  
*/