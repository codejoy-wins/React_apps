import React, { Component } from 'react';
import Portfolio from './components/Portfolio';

import logo from './logo.svg';
import './App.css';
//state above render
const list = [
{
title: 'React',
url: 'https://facebook.github.io/react/',
author: 'Jordan Walke',
num_comments: 3,
points: 4,
objectID: 0,
},
{
title: 'Redux',
url: 'https://github.com/reactjs/redux',
author: 'Dan Abramov, Andrew Clark',
num_comments: 2,
points: 5,
objectID: 1,
},
];
// make a custom portfolio component and link to it have on home page

class App extends Component {
  render() {
    let prime = [];
    let num = 0;
    let primes = 0;

    const msg = "Collect Primes to decrypt Secret Message";
    const msg2 = "Welcome to prime absortion";

    const myFunc = () =>{
        // what if I made this impact the size of something
        console.log(`myfunc n is ${num}`);
        num++;
        document.getElementById('output').innerHTML = num;
    }
    const reset = () =>{
      getStyle();
      // if prime is above 100, change all to red and do alerts

      if(primes > 5){
        console.log('alert');
        getStyle('red');
        document.getElementById("warning").innerHTML = `
        <h5>DANGER!</h5>
        `
      }
      if(primes > 10){
        alert('explosion');
        getStyle("danger");
        document.getElementById("warning").innerHTML = `
        <h5>DANGER!</h5>
        `
      }

      // if primes contains current num, return

      console.log(`resetting if prime num: ${num}`);
      if(num === 0 || num ===1){
        console.log(
          'panic'
        )
        return;
      }
      for(let i =2; i < num; i++){
        if(num%i===0){
          console.log('not prime');
          return;
        }
      }
      console.log('prime num');
      primes++;
      // does prime contain num already?
      console.log("repeat prime?");
      console.log(prime.includes(num));
      console.log("repeat prime? ^");

      // if true then don't push

      prime.includes(num) ? console.log('ya') : console.log('nah');
      prime.includes(num) ? primes-- : prime.push(num);

      // prime.push(num);
      console.log(`prime is ${prime}`);
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
      background: 'black',
      color: 'aqua',
      padding: '11px'
    }
// making padding a dynamic variable doesn't work
    let xp1 = {
      background: 'navy',
      color: "gray",
      padding: `12px`,
      fontSize: `12px`
    }

    const getStyle = (cola) => {
      console.log('style function');
      console.log(`cola or color is ${cola}`);
      try {
        console.log(`colo.someting ${cola.color}`);        
      }
      catch {
        console.log(`hello`)
      }
      // I wish I could make it change color depending on the # of primes

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
        // <div>I was able to make the text grow but now the image.  Need to start following directions</div>
      // document.getElementById('xp4').innerHTML=`
      //   <div>I was able to make the text grow but now the image.  Need to start following directions</div>
      // `
    }

    return (
      <div className="App">
        <div><Portfolio/></div>
        { list.map((item)=>
        // <div>
        // {item.title}
        // </div>)}
        <div>
        <span>
        <a href={item.url}>{item.title}</a>
        </span>
        <span> {item.author}</span>,
        <span> {item.num_comments} comments</span>,
        <span> {item.points} points</span>
        </div>)}
        
        {/* { list.map(function(item){ return <div>{item.title} es5</div>})} */}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="output">
          </div>
          <h1>{msg2}</h1>
          <div style = {xp1} id="xp" onClick={getStyle}>{msg} </div>
          <div id="warning"></div>
          <div id="xp4">
          </div>


          <div style = {flowy}>
            <p id="primal2">Unique Primes absorbed: <span style = {flowcast} id="primal">{primes}</span></p>
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
