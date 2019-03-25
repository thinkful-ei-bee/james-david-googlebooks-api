import React from 'react';
import './BookList.css';

export default class BookList extends React.Component {
    produceBook (book) {
        const name = <h2>{book.name}</h2>
        
    }
render() {
 return (
 
 <div>
<ul className="listOfBooks">
    {this.props.books.map((book, index) => 
    { return (
        <li key={index}>
           {this.produceBook(book)} 
        </li>
    );
    }
    )
    }
</ul>
</div>

 );
}
}