import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import BookList from './components/BookList';

class App extends Component {

  state = {
    books: [],
    searchTerm: '',
    error: null,
    loading: false
  }

  handleSearch = (e)=> {
    e.preventDefault();
    console.log(e)
  }; 


  render() {
    return (
      <div className="App">
       <Header />
       <Search handleSearch={this.handleSearch}/>
       <BookList />
      </div>
    );
  }
}

export default App;
