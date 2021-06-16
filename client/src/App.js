import './App.css';

// import React components, methods
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useMemo } from "react";

// import components
import Sidebar from "./components/Sidebar/Sidebar";
import Expense from './components/Expense';
import Income from './components/Income';
import Dashboard from './components/Dashboard/Dashboard';
import Scan from './components/Scan';
import SignIn from './components/SignIn';
import Receipts from './components/Receipts';
import { UserContext } from './UserContext';

function App() {

  const [userName, setUserName] = useState(null);

  const providerValue = useMemo(() => ({userName, setUserName}), [userName,setUserName])

  const [loggedIn, setLoggedin] = useState(false);
  const callback = function() {
    setLoggedin(!loggedIn)
  }

  return (
    <main className="App">
      <Router>
        <Switch>
          <UserContext.Provider value={providerValue}>
            <Route exact path="/">
              { loggedIn ? <Sidebar /> : <div></div>}
              { loggedIn ? <Dashboard logoutCallback={callback}/> : <SignIn loginState={loggedIn} loginCallback={callback}/>}
            </Route>
              <Route path="/expenses">
              <Sidebar />
                <Expense logoutCallback={callback}/>
              </Route>
              <Route path="/incomes">
              <Sidebar />
                <Income logoutCallback={callback}/>
              </Route>
              <Route path="/scan">
              <Sidebar />
                <Scan logoutCallback={callback}/>
              </Route>
              <Route path="/receipts">
              <Sidebar />
                <Receipts logoutCallback={callback}/>
              </Route>
              <Route path="/signin">
                <SignIn loginState={loggedIn} loginCallback={callback}/>
              </Route>
            </UserContext.Provider>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
