import './App.css';

// import React components, methods
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import components
import Sidebar from "./components/Sidebar/Sidebar";
import Expense from './components/Expense';
import Income from './components/Income';
import Dashboard from './components/Dashboard/Dashboard';
import ScanDemo from './components/ScanDemo';
import { ContextComponent } from './ScannedDataContext';

function App() {

  return (
    <main className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <ContextComponent>
            <Route path="/expenses">
              <Expense />
            </Route>
            <Route path="/incomes">
              <Income />
            </Route>
            <Route path="/scan">
              <ScanDemo />
            </Route>
          </ContextComponent>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
