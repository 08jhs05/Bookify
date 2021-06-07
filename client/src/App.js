import './App.css';

// import React components, methods
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// import components
import Sidebar from "./components/Sidebar/Sidebar";
import Expense from './components/Expense';
import Income from './components/Income';
import Dashboard from './components/Dashboard/Dashboard';
import New from './components/New';

function App() {

  const [income, setIncome] = useState();

  useEffect( () => {
    axios.get('/api/incomes').then( (res) => {
      setIncome(res.data.data)
    });
  }, []);

  return (
    <main className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Dashboard data={income}/>
          </Route>
          <Route path="/expenses">
            <Expense />
          </Route>
          <Route path="/incomes">
            <Income />
          </Route>
          <Route path="/new">
            <New />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
