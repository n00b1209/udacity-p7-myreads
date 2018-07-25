import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import escapeRegExp from 'escape-string-regexp';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import ShelfBook from './ShelfBook';

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  };

  updateQuery = query => {
    this.setState({query});
    // if (this.state.query) {
    //   BooksAPI.search(this.state.query).then(books => {
    //     this.setState({books});
    //     console.log(this.state.books);
    //   });
    // }
  };

  componentDidUpdate() {
    if (this.state.query) {
      BooksAPI.search(this.state.query).then(books => {
        this.setState({books});
        console.log(this.state.books);
      });
    }
  }

  render() {
    let showingBooks;
    if (Array.isArray(this.state.books) && this.state.query !== '') {
      showingBooks = this.state.books;
    } else {
      showingBooks = [];
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to={'/'}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map(book => (
              <li key={book.id}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  image={book.imageLinks.thumbnail}
                  book={book}
                  onChangeShelf={this.props.onChangeShelf}
                  shelf={book.shelf ? book.shelf : 'none'}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBooks;
