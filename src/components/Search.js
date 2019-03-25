import React from 'react';
import './Search.css';

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={(e)=> {this.props.handleSearch(e)}}>
          <div className="searchParams searchTerm">
            <label htmlFor="searchBox">Search:</label>
            <input type="text" id="searchBox"></input>
            <button type="submit">Search</button>
          </div>
          <div className="searchParams searchFilters">
            <label htmlFor="printType">Print Type:</label>
            <select id="printType">
               <option value="all">All</option>
               <option value="books">Books</option>
               <option value="magazines">Magazines</option>
            </select>
            <label htmlFor="bookType">Book Type:</label>
            <select id="bookType">
               <option value="ebooks">All eBooks</option>
               <option value="free-ebooks">Free eBooks</option>
               <option value="full">Fully Viewable Books</option>
               <option value="paid-ebooks">Priced eBooks</option>
               <option value="partial">Partially Viewable Books</option>
            </select>
            </div>
        </form>
      </div>
    );
    }
}