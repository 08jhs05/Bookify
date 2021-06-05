import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

import Expense from "../src/component/Expense"
function App() {

  const  [fakedata, setData] = useState();
  const [expenseData, setExpenseData] = useState("");
  

  useEffect( () => {
    axios.get('/api').then( (res) => {
      console.log(res.data[0]);
      
      setData(res.data[0].deposits.day1);
    }).catch( (err) => {
      console.log(err)
    });
  }, []);

  const handleSubmit = (data) => {
    console.log("WHAT DATA DO I GET?", data);
    setExpenseData(JSON.stringify(data))
    axios.put('/api/expenses/', data)
    .then((res) => {
      setExpenseData(res.data)
    })
    .catch(err => console.log("error triggered", err));
  }

  return (
    <div className="App">
      {fakedata}
      <Expense onSubmit={handleSubmit}/>
      <div>
        {expenseData}
      </div>
      
    </div>
  );
}

export default App;
