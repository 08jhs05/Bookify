import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard';

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
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
