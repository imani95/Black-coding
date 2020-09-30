import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import BookList from './BookListClass';

const element = <Fragment>
    <h1>Welcome to the My Library</h1>
    <BookList library={{name:"Sarah",theme:"Modern"}}/>
</Fragment>;

ReactDOM.render(element,document.getElementById('root'));