import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

function App() {

  useEffect( () => {
    axios.get('/api').then( (res) => {
      console.log(res)
    }).catch( (err) => {
      console.log(err)
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
