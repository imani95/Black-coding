import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Sarah';

function getGreeting(user) {
    if (user) {
      return <h1>{name}'s Reading List</h1>;
    }
    return <h1>Just a Reading List</h1>;
}

console.log(getGreeting(name));
ReactDOM.render(getGreeting(),document.getElementById('root'));
