import React, { Component } from 'react';
import Child from './child';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1
    };
    this.handleEventParent = this.handleEventParent.bind(this);
  }

  handleEventParent(argument) {
    this.setState({ counter: this.state.counter * argument });
  }

  render() {
    return (
      <Child
        onClickChild={this.handleEventParent}
        counter={this.state.counter}
      />
    );
  }
}

export default App;
