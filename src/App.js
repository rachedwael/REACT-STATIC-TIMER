import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props)
    {
      super(props)
      this.state={
        seconde:"0",
        minute:"0",
        heurs:"0"
      }
      setInterval(
        ()=>{
          
            this.setState({seconde:Number(this.state.seconde)+1})
            if (this.state.seconde===60)
            {
              this.setState({minute:Number(this.state.minute)+1})
              this.setState({seconde:"0"})
            }
            if(this.state.minute===60)
            {
              this.setState({heurs:Number(this.state.heurs)+1})
              this.setState({minute:"0"})
            }
        },
        1000
      )
    }
  
  render() {

    return (
      <div className="App">



      <div className="container">

      <div className="heurs-container">
      <span className="heurs">00 :</span>
      <span className="heurs-text"> Heurs </span>
      </div>

      <div className="minute-container">
      <span className="minute">00 :</span>
      <span className="minute-text"> Minute </span>
      </div>

      <div className="seconde-container">
      <span className="seconde">30</span>
      <span className="seconde-text"> Seconde</span>
      </div>
      
      </div>
      


        
        
      </div>
    );
  }
}

export default App;


/*
<div>
          <span className="timer"> {this.state.heurs<10?"0"+this.state.heurs : this.state.heurs}:</span>
          <span className="timer"> {this.state.minute<10 ? "0"+this.state.minute : this.state.minute}: </span>
          <span className="timer">{this.state.seconde<10?"0"+this.state.seconde : this.state.seconde}</span>
        </div>

        <div>
          <span className="tim"> Heurs</span>
          <span className="tim"> Minute </span>
          <span className="tim">Seconde</span>
        </div>*/