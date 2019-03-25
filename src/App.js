import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import BookList from './components/BookList';

class App extends Component {

  state = {
    books: [],
    searchTerm: 'abc',
    printType: 'all',
    filter: 'ebooks',
    error: null,
    loading: false
  }

  handleSearch = (e)=> {
    e.preventDefault();
    console.log(e)
  }; 

  updateSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    });
  }

  updatePrintType = (val) => {
    this.setState({
      printType: val
    })
  }

  updateFilter = (val) => {
    this.setState({
      filter: val
    })
  }

  render() {
    return (
      <div className="App">
       <Header />
       <Search handleSearch={this.handleSearch} printType={this.state.printType} searchTerm={this.state.searchTerm} filter={this.state.filter} updateSearchTerm={this.updateSearchTerm} updatePrintType={this.updatePrintType} updateFilter={this.updateFilter} />
       <BookList />
      </div>
    );
  }
}

export default App;
