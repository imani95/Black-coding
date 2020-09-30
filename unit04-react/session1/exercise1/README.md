# React

## Exercise 1: Adding React to a web page

### Starter File:

- index.html
- index.js

### Steps:

Open the Handout PDF for session 1 and follow the steps on pages 16 to 22.

## index.js:
### Add the following code to the [**index.js**](index.js) file:

```
'use strict';

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'Nothing here yet! Change this text to add more info.';
    }

    return React.createElement(
      'button', { 
        style: { 
          backgroundColor: "#3392e4", 
          color : "#fff",
          border : "0",
          padding : "10px 20px",
          fontWeight: "bold",
          borderRadius: "5px",
          fontSize:"1.1em"
        }, 
        onClick: () => this.setState({ clicked: true }) 
      },
      'Click To Reveal'
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(ClickButton), domContainer);
```

## index.html:
### Add the following script tags to the [**index.html**](index.html) file:

```
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script type="text/javascript" src="index.js"></script>
```

