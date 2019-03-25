import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import BookList from './components/BookList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Search />
       <BookList />
      </div>
    );
  }
}

export default App;
