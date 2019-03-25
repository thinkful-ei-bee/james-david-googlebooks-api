import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import BookList from './components/BookList';

class App extends Component {

  state = {
    books: [],
    searchTerm: '',
    printType: 'all',
    filter: 'ebooks',
    error: null,
    loading: false,
  }

  handleError(e) {
    console.log(e);
    this.setState({
      books: [],
      error: e
    })
  }

  generateBookArr(obj) {
    const newArr = obj.items.map((item, index) => {
      const newBookObj = {};
      newBookObj.name = ((obj.items[index] || {}).volumeInfo || {}).title;
      newBookObj.picture = (((obj.items[index] || {}).volumeInfo).imageLinks || {}).thumbnail;
      newBookObj.author = ((obj.items[index] || {}).volumeInfo).authors;
      newBookObj.price = ((obj.items[index] || {}).saleInfo || {}).listPrice;
      newBookObj.description = ((obj.items[index] || {}).searchInfo || {}).textSnippet;
      return newBookObj;
    });
    this.setState({
      books: newArr
    })
    console.log(newArr);
  }
    

  handleSearch = (e)=> {
    e.preventDefault();
    const apiKey = 'AIzaSyAjXIfc-Z_K4owIljORps8JiiUEf82UKD4';
    console.log('started search function');
    const {searchTerm, printType, filter} = this.state;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&filter=${this.state.filter}&printType=${this.state.printType}&key=${apiKey}`)
      .then(res => res.json())
      .then(res => {console.log(res);
        this.generateBookArr(res)})
      .catch(e => this.handleError(e))
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
       <BookList books={this.state.books}/>
      </div>
    );
  }
}

export default App;
