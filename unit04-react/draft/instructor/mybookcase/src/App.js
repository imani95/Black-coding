import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import BookList from './components/BookList';
//import Bookcase from './components/Bookcase';
import Search from './components/Search';
import About from './pages/About';
import data from './models/books.json';

const App = () => {

  const [books, setBooks] = useState(data);
  const [bookcase, setBookcase] = useState([]);
  const [keyword, setSearchText] = useState('');

  const addToBookcase = (id) => {
    setBookcase(bookcase.concat(books.filter(book => book.id === id)));
    setBooks([...books.map(book => {
      if (book.id === id) {
        book.read = true;
      }
      return book;
    }
    )]);
  }

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `My Library ${bookcase.length} Read`;
    Array.from(document.getElementsByClassName("bookLink")).forEach((el) => {
      el.innerText = ` Bookcase (${bookcase.length})`;
    });
  });

  async function startSearch(value) {

    setSearchText(value);

    //Fecth data from server
    const results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`).then(res => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  /*
  removeBook = () => {

  }
  */
  return (
    <Router>
      <div className="container">
        <Route exact path="/" render={() => (
          <Fragment>
            <Header bookLength={bookcase.length} />
            <Search keyword={keyword} startSearch={startSearch} />
            <BookList books={books} stored="library" addToBookcase={addToBookcase} />
          </Fragment>
        )} />
        <Route path="/bookcase" render={() => (
          <Fragment>
            <Header bookLength={bookcase.length} />
            <BookList books={bookcase} stored="bookcase" addToBookcase={addToBookcase} />
          </Fragment>
        )} />
        <Route path="/about" component={() => <About bookLength={bookcase.length} />} />
      </div>
    </Router>
  );
}

export default App;
