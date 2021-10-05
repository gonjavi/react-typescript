import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    // let firstValue: string = 'Many';
    // let firstValue: number = 8;
    // let firstValue: boolean = false;
    // let firstValue: number[]= [2, 3, 4];
    // let firstValue: Array<string> = ['3', 'hi', 'dos'];

    // tuple
    let aTuple: [string, number] = ['Manny', 34];

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
          <p>
            The value {aTuple[0]} is of {typeof aTuple[0]} type!
          </p>
        
        </header>
      </div>
    );
  }
}

export default App;
