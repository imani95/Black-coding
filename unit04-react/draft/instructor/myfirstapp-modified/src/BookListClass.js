import React from 'react';

class BookList extends React.Component {
  render() {
    return (
      <div className="booklist">
        <h1>{this.props.library.name}'s Books</h1>
        <ul>
          <li>Half of a Yellow Sun</li>
          <li>Black Leopard, Red Wolf</li>
          <li>Born a Crime</li>
          <li>Americanah</li>
          <li>Ghana Must Go</li>
        </ul>
      </div>
    );
  }
}
export default BookList;