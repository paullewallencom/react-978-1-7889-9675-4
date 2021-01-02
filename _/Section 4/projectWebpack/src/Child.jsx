import React, { Component } from 'react';

class Child extends Component {
  render() {
    console.trace('Hello');
    return (
      <>
        <div>This is a message from the child component.</div>
      </>
    );
  }
}

export default Child;
