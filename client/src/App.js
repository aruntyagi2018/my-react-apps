import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Search from './components/search';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Search />
      </div>
    );
  }
}

export default App;
