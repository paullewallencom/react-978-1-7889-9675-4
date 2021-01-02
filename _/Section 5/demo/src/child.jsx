import React, { Component } from 'react';

class Child extends Component {
  state = {
    multiplier: 2
  };

  render() {
    return (
      <div className='container'>
        <h1>Counter: {this.props.counter}</h1>
        <button
          onClick={() => this.props.onClickChild(this.state.multiplier)}
          className='btn btn-primary center-block '
        >
          Click to increment
        </button>
      </div>
    );
  }
}

export default Child;
