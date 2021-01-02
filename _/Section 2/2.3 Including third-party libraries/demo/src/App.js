import React, { Component } from 'react';

import { Motion, spring } from 'react-motion';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
          {value => <div>{value.x}</div>}
        </Motion>
      </div>
    );
  }
}

export default App;
