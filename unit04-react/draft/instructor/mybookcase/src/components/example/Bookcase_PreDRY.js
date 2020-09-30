import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const Bookcase = (props) => {

        return (
        <div class="list">
            <h2>Bookcase</h2>
            <p>All of my books.</p>
            <div>
                {
                props.bookcase.map((book) => (
                <Book key={book.id} book={book} addToBookcase={props.addToBookcase}/>  
                ))
                }
            </div>
        </div>
        )
}

Bookcase.propTypes = {
    bookcase: PropTypes.array.isRequired
}

export default Bookcase;