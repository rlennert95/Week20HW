import React, { Component } from 'react';
import './App.css';
import Search from "./components/search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <p>
            Search
          </p>
        
          <Search/>
         
        </header>
      </div>
    );
  }
}

export default App;
