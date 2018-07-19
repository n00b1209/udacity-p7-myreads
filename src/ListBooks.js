import React, {Component} from 'react';
import BookShelf from './Bookshelf';

class ListBooks extends Component {
  filterByShelf = shelf => {
    const allBooks = this.props.books;
    return allBooks.filter(book => book.shelf === shelf);
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            title={'Currently Reading'}
            shelvedBooks={this.filterByShelf('currentlyReading')}
          />
          <BookShelf
            title={'Want to Read'}
            shelvedBooks={this.filterByShelf('wantToRead')}
          />
          <BookShelf title={'Read'} shelvedBooks={this.filterByShelf('read')} />
        </div>
      </div>
    );
  }
}
export default ListBooks;
