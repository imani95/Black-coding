import React from 'react';
import PropTypes from 'prop-types';

const Book = ({book, ...props}) => {
 
    //Nested Destructuring
    const {id, saleInfo:{retailPrice}, volumeInfo: {title, authors, description, imageLinks: {thumbnail}}} = book;

    return (
      <div className="book">
          <img src={thumbnail} alt={title.length>0?title:`Book id=${id}`}/>
          <div>
            <h2 title={title}>{title.length>50 ? title.substring(0,50)+"...":title}</h2>
            <p className="author">by {authors?authors.join(', '):"No Authors Listed"}</p>
            <p className="price">{retailPrice?"£"+retailPrice.amount:"No Retail Price"}</p>
            <p className="description">{description?description.substring(0,300)+"...":"No description"}</p>
          </div>
          <div>
            {props.stored==="library" ?
            <button className="addbtn" onClick={() => props.addToBookcase(id)}>+ Add</button>:
            <button className="removebtn">x</button>
            }
            </div>
      </div>
    );
}

export default Book;

//Prop Types
Book.propTypes = {
  book: PropTypes.object.isRequired
}
