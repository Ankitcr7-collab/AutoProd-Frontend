import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';
//import Header from "./components/Header";
import Register from "./components/Register";
import LoginForm from "./components/Login";
import { Routes, Route } from "react-router-dom";
import ProductDescription from "./components/ProductDescription";

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



function App() {
   
    return (
           <>  
            <Routes>
              <Route exact path="/" element={<Register/>}/>             
              <Route exact path="/ProductDescription" element = {<ProductDescription/>} />
              <Route exact path="/Login" element = {<LoginForm/>}/>
            </Routes>   
          </>
    );
    
  }

export default App;
