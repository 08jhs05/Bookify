import { Link } from "react-router-dom";


export default function Sidebar() {
  return (
    <section className="side_bar">
      <img
        className="logo"
        src="/icons/logo.png"
        alt="logo icon"
      />
      <div className="sidebar__menu">
        <nav className="nav_item">
          <Link className="nav__link" to="/">Home</Link>
        </nav>
        <nav className="nav_item">
          <Link className="nav__link" to="expenses">Expenses</Link>
        </nav>
        <nav className="nav_item">
          <Link className="nav__link" to="incomes">Incomes</Link>
        </nav>
        <nav className="nav_item">
          <Link className="nav__link" to="scan">Scan</Link>
        </nav>
        <nav className="nav_item">
          <Link className="nav__link" to="receipts">Receipts</Link>
        </nav>
      </div>
    </section>
  );
}
