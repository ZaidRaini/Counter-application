import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state with count
    this.state = {
      count: 0,
    };

    // Bind increment and decrement functions
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // Increment method to increase count
  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  // Decrement method to decrease count
  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
