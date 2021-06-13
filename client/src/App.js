import './App.css';

// import React components, methods
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

// import components
import Sidebar from "./components/Sidebar/Sidebar";
import Expense from './components/Expense';
import Income from './components/Income';
import Dashboard from './components/Dashboard/Dashboard';
import Scan from './components/Scan';
import SignIn from './components/SignIn';
import Receipts from './components/Receipts';

function App() {

  const [loggedIn, setLoggedin] = useState(false);
  const callback = function() {
    setLoggedin(!loggedIn)
  }

  return (
    <main className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            { loggedIn ? <Dashboard /> : <SignIn loginState={loggedIn} loginCallback={callback}/>}
          </Route>
            <Route path="/expenses">
              <Expense />
            </Route>
            <Route path="/incomes">
              <Income />
            </Route>
            <Route path="/scan">
              <Scan/>
            </Route>
            <Route path="/receipts">
              <Receipts />
            </Route>
            <Route path="/signin">
              <SignIn loginState={loggedIn} loginCallback={callback}/>
            </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
