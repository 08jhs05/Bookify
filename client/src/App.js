import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

function App() {

  const  [fakedata, setData] = useState();

  useEffect( () => {
    axios.get('/api').then( (res) => {
      console.log(res.data[0]);
      
      setData(res.data[0].deposits.day1);
    }).catch( (err) => {
      console.log(err)
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {fakedata}
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
