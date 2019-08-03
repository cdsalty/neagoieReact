___________________________________________________________________________________________________________

The function I created to filter through the monsters on the page and show only the monsters that pertain
to the user's input:

      const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
___________________________________________________________________________________________________________

Creating a functional component:
App.js:
render() {
  const { monsters, searchField } = this.state;
  // const monsters = this.state.monsters;  the same as the above.
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


search-box.jsx:

Step 1: copied and pasted from app.js
const SearchBox = () => (
  // 1. copy and pasted info from app.js
  < input 
  className = 'search'  // this was added because it was the name of the .css file keyword
  type='search' 
  placeholder='Search Monster' 
  onChange = {(e) => this.setState({ searchField: e.target.value})} 
  /> 
);

Step 2: Destructure (5:20 sec mark of vid 36)
  - next will go and define what handleChange will be.
  - the reason for placeholder to equal placeholder is so this component can be more resuable. 
export const SearchBox = ({ placeholder, handleChange }) => (
  < input 
  className = 'search'
  type='search' 
  placeholder= {placeholder} 
  onChange = {handleChange}   // handleChange will get the removed onChange function and pass to app.js
  /> 
);

App.js going from this.. to this...
< div className="App">
        < input 
          type='search' 
          placeholder='Search Monster' 
          onChange = {(e) => this.setState({ searchField: e.target.value})} 
        /> 
        {/* <CardList monsters={this.state.monsters} /> */}
        <SearchBox
          placeholder = 'Search Monster Here'
          handleChange = {(e) => this.setState({ searchField: e.target.value})}
        />
        <CardList monsters = {filteredMonsters} />
      < /div>
    );
  }
}




___________________________________________________________________________________________________________










___________________________________________________________________________________________________________








___________________________________________________________________________________________________________









___________________________________________________________________________________________________________










___________________________________________________________________________________________________________