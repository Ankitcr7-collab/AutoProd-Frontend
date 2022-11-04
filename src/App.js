import React, { Component, Fragment } from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Register from "./components/Register";


//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}



class App extends Component {
  render() {
    return (
    <div className="crimson">

      <Fragment>
        <Header />
        <Register />

      </Fragment>

      </div>
    );
  }
}

export default App;
