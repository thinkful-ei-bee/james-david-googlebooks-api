import React from 'react';
import './BookList.css';

export default class BookList extends React.Component {
    produceBook (book) {
        const name = <h2>{book.name}</h2>
        const picture = (
        <div class="thumbnail">
          {book.picture ? <img src={book.picture} alt="book thumbnail"></img> : ''}
        </div>
        );
        const author = <div class="authorName">
                         <h3>{book.author ? book.author[0] : ''} </h3>
                       </div>

        const price = <div class="price">
                         <h3>{book.price ? `Price: ${book.price.amount.toLocaleString('en-US', {style: 'currency', currency: book.price.currencyCode})}` : ''}</h3>
                      </div>

        const description = <div class="description">
                              <h3>{ book.description ? book.description : ''}</h3> 
                            </div>
        return <div>
          {name} {author} {price} {description} {picture}
        </div>
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