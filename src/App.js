import React, { Component } from 'react';
import './App.css';
import Auth from './Components/Auth/auth';
import Header from './Components/Header/header';
import Edit from './Components/Edit/edit';
import Home from './Components/Home/home';

class App extends Component {
  render() {
    return (
      <div>
        <Auth/>
        <Header/>
        <Edit/>
        <Home/>
      </div>
    );
  }
}

export default App;
