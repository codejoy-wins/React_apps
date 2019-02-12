import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let num = 0;
    const msg = "React Variable es6";
    const myFunc = () =>{
        console.log(`myfunc n is ${num}`);
        num++;
        document.getElementById('output').innerHTML = num;
    }
    const reset = () =>{
      console.log(`resetting`);
      num = 0
      document.getElementById('output').innerHTML = num;
  }
    const myStyle = {
      background: 'blue',
      color: 'white',
      padding: '12px'
    }
    const myStyle2 = {
      background: 'green',
      color: 'aqua',
      padding: '8px'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="output">
            output spot
          </div>
          <h1>{msg}</h1>
          <button style = {myStyle} onClick={myFunc}>Magic Button</button>
          <button style = {myStyle2} onClick={reset}>Reset</button>
        </header>
      </div>
    );
  }
}

export default App;
