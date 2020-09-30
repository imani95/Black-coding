import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Sarah';
const element = <h1>{name}'s Reading List</h1>;

console.log(element);
ReactDOM.render(element,document.getElementById('root'));
