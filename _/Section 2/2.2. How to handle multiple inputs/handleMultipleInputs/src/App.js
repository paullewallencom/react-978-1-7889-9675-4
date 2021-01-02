import React, { Component } from 'react';

class App extends Component {
  state = { name: '', email: '', gender: '', rememberMe: false };
  handleSubmit = e => {
    console.log('Send the information: ', this.state);
    e.preventDefault();
  };
  handleChange = e => {
    const checkbox = e.target.type === 'checkbox';
    this.setState({
      [e.target.name]: checkbox ? e.target.checked : e.target.value
    });
  };

  render() {
    return (
      <div className='container'>
        <form className=' m-3'>
          <div>
            <input
              name='name'
              type='text'
              placeholder='Name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              name='email'
              type='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <select
              name='gender'
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option>Man</option>
              <option>Woman</option>
            </select>
          </div>
          <div>
            <label>
              Remember me
              <input
                name='rememberMe'
                type='checkbox'
                checked={this.state.rememberMe}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button onClick={this.handleSubmit} className='btn btn-primary m-3'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
