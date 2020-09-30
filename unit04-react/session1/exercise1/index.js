use strict';

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
        style: { react.createElement(type,
            [props],
            [...children]
            )
          backgroundColor: "black", 
          color: orange
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