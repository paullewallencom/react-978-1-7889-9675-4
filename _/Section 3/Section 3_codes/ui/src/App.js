import React, { Component } from 'react';
import axios from 'axios';

const apiEndpoint = 'http://localhost:3010/';

class App extends Component {
  state = { message: 0 };
  async componentDidMount() {
    const promise = axios.get(apiEndpoint + 'read');
    const response = await promise;
    console.log('response.data', response.data.answer);
    this.setState({ message: response.data.answer });
  }
  handleClickGet = async () => {
    const promise = axios.get(apiEndpoint + 'read');
    const response = await promise;
    console.log('response.data', response.data.answer);
    this.setState({ message: response.data.answer });
  };
  handleClickPost = async () => {
    const promise = axios.post(apiEndpoint + 'send', {
      message: this.state.message
    });
    const response = await promise;
    console.log('Post response: ', response);
  };

  handleClickUpdate = () => {
    this.setState({ message: this.state.message + 1 });
  };
  render() {
    return (
      <div className='container'>
        <p className=' m-3'>Data: {this.state.message}</p>
        <button onClick={this.handleClickGet} className='btn btn-primary m-3'>
          GET (read data)
        </button>
        <br />
        <button
          onClick={this.handleClickUpdate}
          className='btn btn-primary m-3'
        >
          Update data
        </button>
        <br />
        <button onClick={this.handleClickPost} className='btn btn-primary m-3'>
          POST (send data)
        </button>
      </div>
    );
  }
}

export default App;
