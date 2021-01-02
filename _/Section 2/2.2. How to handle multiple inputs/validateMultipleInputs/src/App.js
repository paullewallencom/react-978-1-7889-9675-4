import React, { Component } from 'react';

class App extends Component {
  state = {
    name: '',
    email: '',
    gender: '',
    rememberMe: false,
    nameErr: '',
    emailErr: ''
  };

  validate = () => {
    let nameErr = '',
      emailErr = '';

    if (!this.state.name) {
      nameErr = 'Please enter your name';
    }
    if (!this.state.email.includes('@')) {
      emailErr = 'Please enter a valid email address';
    }
    if (nameErr || emailErr) {
      this.setState({ nameErr: nameErr, emailErr: emailErr });
      console.log('in the error');
      return false;
    }
    this.setState({ nameErr: nameErr, emailErr: emailErr });
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const validation = this.validate();
    if (validation) {
      console.log('Send the information: ', this.state);
    }
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
            <label className=' text-danger '>{this.state.nameErr}</label>
          </div>
          <div>
            <input
              name='email'
              type='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleChange}
            />

            <label className=' text-danger '>{this.state.emailErr}</label>
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
