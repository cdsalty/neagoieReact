import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor(){
    super();  // super calls on Component's built in constructor
    this.state = {
      monsters: [],
      searchField: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }



    // MAKE API REQUEST WITH LIFECYCLE METHOD
  componentDidMount(){  
    fetch('https://jsonplaceholder.typicode.com/users') // make the api request
    .then(response => response.json())  
    // .then(users => console.log(users)) // to see the array of of users
    .then(users => this.setState({ monsters: users}));  // will set the value of monsters listed in state above
  }

  // handleChange below; if I used a an arrow function, I would not have to bind up top which may be better.
  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
  const { monsters, searchField } = this.state;
  // const monsters = this.state.monsters;  the same as the above.
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder = 'Search Monster Here'
          handleChange = {this.handleChange}
        />
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