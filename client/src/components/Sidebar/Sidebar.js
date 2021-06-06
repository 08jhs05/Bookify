import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <section className="side_bar">
      <img
        className="logo"
        src="/icons/logo.png"
        alt="logo icon"
      />
      <nav className="sidebar__menu">
        <Link className="Nav__link" to="/">Home</Link>
      </nav>
      <nav className="sidebar__menu">
        <Link className="Nav__link" to="expenses">Expenses</Link>
      </nav>
      <nav className="sidebar__menu">
        <Link className="Nav__link" to="incomes">Incomes</Link>
      </nav>
      <nav className="sidebar__menu">
        <Link className="Nav__link" to="new">Create New Item</Link>
      </nav>
    </section>
  );
}
