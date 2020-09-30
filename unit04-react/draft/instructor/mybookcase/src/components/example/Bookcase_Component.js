import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Bookcase extends React.Component {

    render() {
        return (
        <React.Fragment>
            <h2>Bookcase</h2>
            <p>All of my books.</p>
            <div>
                {
                this.props.bookcase.map((book) => (
                <Book key={book.id} book={book} addToBookcase={this.props.addToBookcase}/>  
                ))
                }
            </div>
        </React.Fragment>
        )
    }
}

Bookcase.propTypes = {
    bookcase: PropTypes.array.isRequired
}

export default Bookcase;