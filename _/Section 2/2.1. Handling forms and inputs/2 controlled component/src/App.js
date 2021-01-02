import React, { Component } from 'react';

class App extends Component {
  state = { name: '' };
  handleSubmit = e => {
    console.log('The name is: ', this.state.name);
    e.preventDefault();
  };
  handleChange = e => {
    this.setState({ name: e.target.value });
    e.preventDefault();
  };

  render() {
    return (
      <div className='container'>
        <form className=' m-3'>
          <label>
            Name:
            <input
              type='text'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.handleSubmit} className='btn btn-primary m-3'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
