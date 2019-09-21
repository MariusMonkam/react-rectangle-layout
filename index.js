import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ReactLayout from './src/ReactLayout'
import './style.css';

class App extends Component {
 

  render() {
    return (
      <div>
        <ReactLayout/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
