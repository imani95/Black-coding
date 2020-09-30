import React, {useState,useEffect} from 'react';

const BookCounterEffect = (props) => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count <= 5) {
         document.title = `${count} Book(s) counted`
    }
}, [count]) //Leaving this empty e.g. [] will ensure the function is only called once. This is handy when fetching data in a loop.


  return (
    <div className="booklist">
    <h1>{props.library.name}'s Books ({count})	&#8595;</h1>
    <button onClick={() => setCount(count + 1)}>Count Books</button>
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

export default BookCounterEffect;

