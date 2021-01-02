import React, { Component } from 'react';

class App extends Component {
  handleSubmit = e => {
    console.log('The name is: ', this.input.value);
    e.preventDefault();
  };

  render() {
    return (
      <div className='container'>
        <form className=' m-3'>
          <label>Name:</label>
          <input type='text' ref={input => (this.input = input)} />
          <button onClick={this.handleSubmit} className='btn btn-primary m-3'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
