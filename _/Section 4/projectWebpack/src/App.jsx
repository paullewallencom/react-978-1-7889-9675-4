import React, { Component } from 'react';
import Child from './Child.jsx';

class App extends Component {
  render() {
    return (
      <>
        <div>This is a message from the parent component.</div>
        <Child />
      </>
    );
  }
}

export default App;
