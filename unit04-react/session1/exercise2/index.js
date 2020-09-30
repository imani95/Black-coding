'use strict';

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return [
    
    return React.createElement ('h1' , { 
        ClassName : 'heading'
          backgroundColor: "#000", 
          color : "orange",
          border : "0",
          padding : "10px 20px",
          fontWeight: "bold",
          borderRadius: "5px",
          fontSize:"1.1em"
        }, 
        className: "h1"
        onClick: () => this.setState({ clicked: true }) 
      },
      'Click To open'
      ];
  }
}
render() {
            if (this.state.clicked) {
              return 'hi there, welcome!.';
            }

    { return React.createElement(
        ClassName : 'h1', 
          style: { 
            backgroundColor: "black", 
            color : "pink",
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

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(ClickButton), domContainer);


