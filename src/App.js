import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    //must use bind on methods that use setState
    //"binds" clickHandler to the context of "this" of the class
    this.clickHandlerAdd = this.clickHandlerAdd.bind(this);
    this.clickHandlerSubtract = this.clickHandlerSubtract.bind(this);
  }

  clickHandlerAdd() {
    //pass an object when you don't care about prev state
    //pass a function when you do care about prev state. Rx prevState (previous verstion of state)
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  clickHandlerSubtract() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.clickHandlerAdd}>+</button>
        <button onClick={this.clickHandlerSubtract}>-</button>
      </div>
    );
  }
}

export default App;
