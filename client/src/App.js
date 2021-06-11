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
import { ContextComponent } from './ScannedDataContext';

function App() {

  const [userLoggedin, setUserLoggedin] = useState(false);
  const toggleLoggin = function (){
    setUserLoggedin(!userLoggedin);
  }

  return (
    <main className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            {userLoggedin ? <Dashboard logoutCallback={toggleLoggin}/> : <SignIn logInCallback={toggleLoggin}/>}
          </Route>
          <ContextComponent>
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
          </ContextComponent>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
