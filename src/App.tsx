import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';



class App extends Component {
    render() {
    // let firstValue: string = 'Many';
    // let firstValue: number = 8;
    // let firstValue: boolean = false;
    // let firstValue: number[]= [2, 3, 4];
    // let firstValue: Array<string> = ['3', 'hi', 'dos'];

    // tuple
    //let aTuple: [string, number] = ['Manny', 34];
    // enum -similar to object
    //enum Codes {first = 1, second = 3};

    // any
    //let firstName: any = 'Manny';

    // void - despues de () se escribe el renurning type - sino tiene se pone void 
    //const warning = (): void => {
      //console.log('Warning')
    //}

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
          <Message  />
                
        </header>
      </div>
    );
  }
}

export default App;
