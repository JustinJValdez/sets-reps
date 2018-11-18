import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/header';
import route from './route';



class App extends Component {
  render() {
    return (

      <div className="app">
        <div>
          <Header />
        </div>
        {route}
      </div>

    );
  }
}

export default App;
