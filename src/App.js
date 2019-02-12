import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    
    let num = 0;
    let primes = 0;

    const msg = "Collect Primes to decrypt Secret Message";
    const myFunc = () =>{
        // what if I made this impact the size of something
        console.log(`myfunc n is ${num}`);
        num++;
        document.getElementById('output').innerHTML = num;
    }
    const reset = () =>{
      getStyle();
      // if primes contains current num, return
      
      console.log(`resetting if prime num: ${num}`);
      if(num == 0 || num ==1){
        console.log(
          'panic'
        )
        return;
      }
      for(let i =2; i < num; i++){
        if(num%i==0){
          console.log('not prime');
          return;
        }
      }
      console.log('prime num');
      primes++;
      console.log(`total primes: ${primes}`);
      document.getElementById('primal').innerHTML = primes;


      document.getElementById('special').innerHTML += `
        <li>${num}</li>
      `;


      num = 0;
      document.getElementById('output').innerHTML = num;

  }
    const newStyle = {
      background:"lightBlue",
      padding: `19px`,
      margin: `19px`,
      height: `100px`,
      overflow: `auto`
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
    const flowy = {
      background: 'green',
      color: 'aqua',
      padding: '8px'
    }

    const flowcast = {
      background: 'gold',
      color: 'black',
      padding: '11px'
    }
// making padding a dynamic variable doesn't work
    let xp1 = {
      background: 'navy',
      color: "gray",
      padding: `12px`,
      fontSize: `12px`
    }

    const getStyle = () => {
      console.log('style function');
      let xp = {
        background: 'gold',
        color: "pink",
        padding: `${primes}px`,
        fontSize: `${primes}px`
      }
      console.log(`${xp.padding} is xp.padding`);
      // console.log(document.getElementById("xp").style);
      document.getElementById("xp").style = {xp}
      console.log(document.getElementById("xp").style);
// I know I'm doing something wrong here because I am not using JSX

      xp.padding = `${primes}px`
      console.log(`primes: ${primes}`);
      document.getElementById('xp').innerHTML=`
        <p style= font-size:${primes}px; > You could have used inspect element<p>
      `
      console.log(`prime size: ${primes}`);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="output">
          </div>
          <h1>{msg}</h1>
          <div style = {xp1} id="xp" onClick={getStyle}>xp </div>
          <div style = {flowy}>
            <p id="primal2"># of Primes absorbed: <span style = {flowcast} id="primal">{primes}</span></p>
          </div>
          <div style = {newStyle} id="special">Primes Absorbed</div>
          <button style = {myStyle} onClick={myFunc}>Feed Energy</button>
          <button style = {myStyle2} onClick={reset}>Collect Prime</button>
        </header>
      </div>
    );
  }
}

export default App;
