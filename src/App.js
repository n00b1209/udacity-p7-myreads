import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import {Link, Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books});
    });
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(books => {
      this.setState({books});
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => <SearchBooks books={this.state.books} />}
        />
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={this.state.books}
              onChangeShelf={this.updateBook}
            />
          )}
        />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BooksApp;
