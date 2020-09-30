import React  from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const BookList = ({books,...props}) => {

  if(books.length===0){
    return <div className="empty">No books...</div>;
  }
  return (
    <div className="list">
      <div>
       {(props.stored==="library") && <h2>Suggested Reading</h2>}
        {books.filter(book => props.stored==="bookcase" || !book.read )
              .map(book => <Book key={book.id} book={book} {...props}/>)
        }
      </div>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
}

export default BookList;
