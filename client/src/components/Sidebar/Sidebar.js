
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Fragment } from "react";

export default function Sidebar() {
  return (
    <section className="side_bar">
        <img
          className="logo"
          src="/icons/logo192.png"
          alt="logo icon"
        />
      <Router>
        <main>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/expenses">Expenses</a></li>
              <li><a href="/incomes">Incomes</a></li>
              <li><a href="/new">Add new item</a></li>
            </ul>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/expenses"  component={Expenses} />
          <Route path="/incomes"  component={Incomes} />
          <Route path="/new"  component={New} />
        </main>
    </Router>
    </section>
  );
}


const Home = () => (
  <Fragment>
    <h1>Home</h1>
  </Fragment>
  );

const Expenses = () => (
  <Fragment>
    <h1>Expenses</h1>
  </Fragment>
  );

const Incomes = () => (
  <Fragment>
    <h1>Incomes</h1>
  </Fragment>
  );

const New = () => (
  <Fragment>
    <h1>Add new item</h1>
  </Fragment>
  );