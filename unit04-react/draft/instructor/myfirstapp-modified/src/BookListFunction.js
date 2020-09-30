import React from 'react';

const BookList = (props) => {
  return (
    <div className="booklist">
    <h1>{props.library.name}'s Books 	&#8595;</h1>
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

export default BookList;

